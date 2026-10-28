/**
 * Custom Hook for Analytics
 * 
 * Provides easy access to analytics tracking functions
 * Usage: const { trackEvent, trackPageView } = useAnalytics();
 */

import { useEffect } from 'react';
import * as GA4 from './googleAnalytics';
import * as Clarity from './microsoftClarity';

export const useAnalytics = () => {
  return {
    // GA4 exports
    trackPageView: GA4.trackPageView,
    trackEvent: GA4.trackEvent,
    trackPortfolioEvent: GA4.trackPortfolioEvent,
    trackProjectView: GA4.trackProjectView,
    trackSkillInteraction: GA4.trackSkillInteraction,
    trackContactSubmission: GA4.trackContactSubmission,
    trackDownload: GA4.trackDownload,
    trackScrollDepth: GA4.trackScrollDepth,
    trackTimeOnPage: GA4.trackTimeOnPage,
    trackSocialClick: GA4.trackSocialClick,

    // Clarity exports
    trackClarityEvent: Clarity.trackClarityEvent,
    setClarityUserData: Clarity.setClarityUserData,
    trackClaritySectionInteraction: Clarity.trackClaritySectionInteraction,
    trackClarityProjectInteraction: Clarity.trackClarityProjectInteraction,
    trackClarityFormInteraction: Clarity.trackClarityFormInteraction,
  };
};

/**
 * Hook to track page views on route changes
 * 
 * Usage in components:
 * useTrackPageView();
 */
export const useTrackPageView = () => {
  useEffect(() => {
    GA4.trackPageView(window.location.pathname, document.title);
  }, []);
};

/**
 * Hook to track scroll depth
 * 
 * Usage in components:
 * useTrackScrollDepth();
 */
export const useTrackScrollDepth = () => {
  useEffect(() => {
    let maxScroll = 0;

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
        GA4.trackScrollDepth(Math.floor(scrollPercentage / 25) * 25);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

/**
 * Hook to track time on page
 * 
 * Usage in components:
 * useTrackTimeOnPage();
 */
export const useTrackTimeOnPage = (interval = 30000) => {
  useEffect(() => {
    const startTime = Date.now();

    const trackTime = () => {
      const timeOnPage = (Date.now() - startTime) / 1000;
      GA4.trackTimeOnPage(timeOnPage);
    };

    const timer = setInterval(trackTime, interval);
    return () => clearInterval(timer);
  }, [interval]);
};

export default useAnalytics;
