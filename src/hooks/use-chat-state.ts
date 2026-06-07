import { CurrentPage, sendChatMessage } from '@/api/chat';
import { generateUUID } from '@/utils/utils';
import { useEffect, useRef, useState } from 'react';

// Maximum number of messages per chat session
const MAX_MESSAGES = 31;

interface ChatSession {
  id: string;
  messages: ChatMessage[];
  createdAt: number; // timestamp
  lastUpdatedAt: number; // timestamp
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface UseChatStateProps {
  storageType?: 'session' | 'local'; // TODO Instead of 'local', add support for server-side storage in the future, for logged in users.
  courseIds?: string[];
}

export function useChatState({ storageType = 'local', courseIds = [] }: UseChatStateProps) {
  // Initialize with a default empty session to prevent hydration mismatch
  const defaultSession: ChatSession = {
    id: '0',
    messages: [],
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  };

  const [session, setSession] = useState<ChatSession | null>(defaultSession);
  const [isTyping, setIsTyping] = useState(false);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const initialized = useRef(false);
  const storageRef = useRef<Storage | null>(null);

  // Load or create session
  const loadOrCreateSession = () => {
    if (typeof window === 'undefined' || !storageRef.current) return;

    const savedSessionJson = storageRef.current.getItem('chat-session');
    let currentSession: ChatSession | null = null;

    if (savedSessionJson) {
      try {
        const parsed = JSON.parse(savedSessionJson);

        // Check if session is expired (3 days)
        const maxAge = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
        const isExpired = (Date.now() - parsed.createdAt) > maxAge;

        if (!isExpired) {
          // Convert message timestamps back to Date objects
          currentSession = {
            ...parsed,
            messages: parsed.messages.map((msg: any) => ({
              ...msg,
              timestamp: new Date(msg.timestamp)
            }))
          };

          // Check if message limit is reached
          setIsLimitReached(currentSession!.messages.length >= MAX_MESSAGES);
        }
      } catch (e) {
        console.error('Error parsing chat session:', e);
      }
    }

    // Create new session if needed
    if (!currentSession) {
      currentSession = {
        id: generateUUID(),
        messages: [],
        createdAt: Date.now(),
        lastUpdatedAt: Date.now(),
      };
      storageRef.current.setItem('chat-session', JSON.stringify(currentSession));
      setIsLimitReached(false);
    }

    setSession(currentSession);
    return currentSession;
  };

  // Save session to storage
  const saveSession = (updatedSession: ChatSession) => {
    if (!storageRef.current) return;

    // Update the lastUpdatedAt timestamp
    const sessionToSave = {
      ...updatedSession,
      lastUpdatedAt: Date.now()
    };

    setSession(sessionToSave);
    storageRef.current.setItem('chat-session', JSON.stringify(sessionToSave));

    // Check if message limit is reached
    setIsLimitReached(sessionToSave.messages.length >= MAX_MESSAGES);
  };

  // Handle sending a message
  const handleSendMessage = async (
    message: string,
    currentPage: CurrentPage,
    searchTerm?: string,
  ) => {
    if (!session || !storageRef.current) return;

    // Check if message limit is reached
    if (isLimitReached) {
      return;
    }

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content: message,
      sender: 'user',
      timestamp: new Date()
    };

    const updatedMessages = [...session.messages, newMessage];
    const updatedSession = {
      ...session,
      messages: updatedMessages
    };

    saveSession(updatedSession);

    // Your bot response logic here
    setIsTyping(true);
    try {
      const response = await sendChatMessage({
        message: message,
        courseIds: courseIds,
        chatId: session.id,
        currentPage: currentPage,
        searchTerm: searchTerm,
      });
      const botResponse = {
        id: (Date.now() + 1).toString(),
        content: response.data.content,
        sender: 'bot' as const,
        timestamp: new Date()
      };

      const withBotResponse = {
        ...updatedSession,
        messages: [...updatedMessages, botResponse]
      };

      saveSession(withBotResponse);
    } catch (error) {
      // Handle error appropriately
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot' as const,
        timestamp: new Date()
      };

      const withErrorMessage = {
        ...updatedSession,
        messages: [...updatedMessages, errorMessage]
      };

      saveSession(withErrorMessage);
    } finally {
      setIsTyping(false);
    }
  };

  // Reset chat session
  const resetChat = () => {
    if (!storageRef.current) return;

    const newSession: ChatSession = {
      id: generateUUID(),
      messages: [],
      createdAt: Date.now(),
      lastUpdatedAt: Date.now()
    };

    setSession(newSession);
    setIsLimitReached(false);
    storageRef.current.setItem('chat-session', JSON.stringify(newSession));
  };

  // First useEffect to detect client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []); // Empty dependency array - only run once on mount

  // Initialize on component mount - only run after client detection
  useEffect(() => {
    if (!isClient || initialized.current) return;
    initialized.current = true;

    // Initialize storage
    storageRef.current = storageType === 'local' ? localStorage : sessionStorage;
    loadOrCreateSession();
  }, [isClient, storageType]);

  // Handle Next.js client-side navigation
  useEffect(() => {
    if (!isClient) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        loadOrCreateSession();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', loadOrCreateSession);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', loadOrCreateSession);
    };
  }, [isClient]);

  return {
    messages: session?.messages || [],
    isTyping,
    isLimitReached,
    handleSendMessage,
    resetChat,
    messageCount: session?.messages.length || 0,
    maxMessages: MAX_MESSAGES
  };
}