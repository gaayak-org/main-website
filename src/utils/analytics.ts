// Analytics utility functions for GTM
declare global {
    interface Window {
        dataLayer: any[];
    }
}

export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...parameters
        });
    }
};

// Specific tracking functions
export const trackSearch = (searchTerm: string, resultCount?: number) => {
    trackEvent('search', {
        search_term: searchTerm,
        result_count: resultCount,
        timestamp: new Date().toISOString()
    });
};

export const trackSearchResultClick = (courseId: string, courseName: string, position: number) => {
    trackEvent('search_result_click', {
        course_id: courseId,
        course_name: courseName,
        position: position,
        timestamp: new Date().toISOString()
    });
};

export const trackEnrollClick = (courseId: string, courseName: string, courseUrl: string, source: string) => {
    trackEvent('enroll_click', {
        course_id: courseId,
        course_name: courseName,
        course_url: courseUrl,
        source: source, // 'search_results', 'course_details', 'saved_courses'
        timestamp: new Date().toISOString()
    });
};

export const trackSaveCourse = (courseId: string, courseName: string, action: 'save' | 'unsave') => {
    trackEvent('save_course', {
        course_id: courseId,
        course_name: courseName,
        action: action,
        timestamp: new Date().toISOString()
    });
};

export const trackUserSignIn = (method: string) => {
    trackEvent('user_sign_in', {
        method: method,
        timestamp: new Date().toISOString()
    });
};

export const trackPageView = (pageName: string, customParameters?: Record<string, any>) => {
    trackEvent('page_view', {
        page_name: pageName,
        ...customParameters,
        timestamp: new Date().toISOString()
    });
};