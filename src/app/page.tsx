'use client';

import Hero from '@/components/home/Hero';
import InterestValidationModal from '@/components/home/InterestValidationModal';
import JoinTheJourneyButton from '@/components/home/JoinTheJourneyButton';
import MainLayout from '@/layouts/MainLayout';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { useState } from 'react';

export default function Home() {
  const theme = useTheme();
  const sectionTextColor = theme.palette.getContrastText(theme.palette.secondary.main);
  const [isInterestValidationModalOpen, setIsInterestValidationModalOpen] = useState(false);

  const openInterestValidationModal = () => setIsInterestValidationModalOpen(true);
  const closeInterestValidationModal = () => setIsInterestValidationModalOpen(false);

  return (
    <MainLayout>
      <Hero onJoinClick={openInterestValidationModal} />

      {/* Why gaayak.org Exists */}
      <Box
        component="section"
        sx={{
          backgroundColor: alpha(theme.palette.primary.main, 0.06),
          borderTop: `1px solid ${theme.palette.divider}`,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Why gaayak.org Exists
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 3, maxWidth: 860 }}>
            I’ve always believed that learning any complex skill, especially music, should never feel like a black box.
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 3, maxWidth: 860 }}>
            Traditional Indian music training places a heavy focus on mastering foundational elements like Swaras, Ragas, Bandishes, and Taals. While these fundamentals are deeply valuable, self-taught singers and late-starters are rarely taught:
          </Typography>

          <Box component="ul" sx={{ color: 'text.secondary', mb: 3, pl: 3, '& li': { mb: 1 } }}>
            <li><strong>The "Why" Behind the Training</strong>: How these traditional concepts actually translate to modern playback or contemporary singing styles.</li>
            <li><strong>Actionable Feedback</strong>: How to measure progress objectively instead of relying on vague advice like "just practice more."</li>
            <li><strong>Balanced Skill Building</strong>: How to systematically isolate and train the core mechanics of singing—breathing, pitch accuracy, tone, range, agility, and dynamics.</li>
          </Box>

          <Typography sx={{ color: 'text.secondary', mb: 3, maxWidth: 860 }}>
            Singing is a system of interconnected skills. Excelling at one while neglecting others makes progress frustrating, but building them together systematically changes everything.
          </Typography>

          <Typography sx={{ color: 'text.primary', fontWeight: 700, mb: 2, maxWidth: 860 }}>
            I’m sure there are incredible vocal trainers out there. But for late-starters working independently, finding clear, structured guidance is unnecessarily difficult.
          </Typography>

          <Typography sx={{ color: 'text.primary', fontWeight: 700, maxWidth: 860 }}>
            gaayak.org exists to bridge that gap. By breaking Indian singing down into practical, science-based components, it gives every singer a transparent roadmap to build their voice with confidence.
          </Typography>
        </Container>
      </Box>

      {/* Who This Is For */}
      <Box
        component="section"
        sx={{
          backgroundColor: alpha(theme.palette.secondary.main, 0.12),
          borderTop: `1px solid ${theme.palette.divider}`,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              color: sectionTextColor,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Who This Is For
          </Typography>

          <Box component="ul" sx={{ color: sectionTextColor, mb: 3, pl: 3, maxWidth: 860, '& li': { mb: 1 } }}>
            <li>Late starters who always loved singing but never got the chance to learn it properly</li>
            <li>Self‑taught singers who want clarity, structure, and science instead of vague advice</li>
            <li>Bollywood/Hindi music lovers who want to sing in a modern playback style</li>
            <li>People who want to understand their voice, not just memorize exercises</li>
            <li>Creators — singers, producers, videographers — who want to collaborate and grow together</li>
            <li>Anyone who wants honest, practical, no‑nonsense guidance instead of “just do riyaaz for 10 years”</li>
          </Box>
        </Container>
      </Box>

      {/* Who's Building It */}
      <Box
        component="section"
        sx={{
          backgroundColor: alpha(theme.palette.info.main, 0.12),
          borderTop: `1px solid ${theme.palette.divider}`,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              color: 'text.primary',
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Who's Building It
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 2, maxWidth: 860 }}>
            I’m a software engineer with a deep passion for music and creative arts.
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 2, maxWidth: 860 }}>
            As a late-starter with no formal music background growing up, I faced the same hurdles many self-taught singers run into: vague advice, rigid traditional paths, and a lack of clear, structured guidance.
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 2, maxWidth: 860 }}>
            To solve this, I’m applying an engineering mindset to vocal development, combining voice science, practical exercises, and structured routines to build the voice I’ve always wanted. I’m building gaayak.org to share those learnings and create a clear, science-based path for others doing the same.
          </Typography>

          <JoinTheJourneyButton
            primaryLabel="Join the Journey"
            primaryOnClick={openInterestValidationModal}
          />

          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5, opacity: 0.7 }}>
            I’m building gaayak.org in the open. If this approach resonates with you, sign up to join the community and get early updates as new tools and guides drop.
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography sx={{ color: 'text.secondary', maxWidth: 860 }}>
            You can get to know more about me here:{' '}
            <Typography
              component="a"
              href="https://iamankurj.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary', textDecoration: 'underline', fontWeight: 600 }}
            >
              iamankurj.com
            </Typography>
          </Typography>
        </Container>
      </Box>

      <InterestValidationModal open={isInterestValidationModalOpen} onClose={closeInterestValidationModal} />
    </MainLayout>
  );
}
