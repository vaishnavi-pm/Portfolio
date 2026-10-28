/**
 * Analytics Provider Component
 * 
 * Initializes all analytics services on app load
 * Automatically tracks page views and user interactions
 * 
 * Usage: Wrap your app with <AnalyticsProvider>
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeGA4, trackPageView } from './googleAnalytics';
import { initializeClarity } from './microsoftClarity';

export const AnalyticsProvider = ({ children }) => {
  const location = useLocation();

  // Initialize analytics on mount
  useEffect(() => {
    const initializeAnalytics = async () => {
      // Initialize GA4
      await initializeGA4();

      // Initialize Microsoft Clarity
      await initializeClarity();

      // Track initial page view
      trackPageView(location.pathname, document.title);

      console.log('📊 Analytics providers initialized');
    };

    initializeAnalytics();
  }, []);

  // Track page view on route change
  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location.pathname]);

  return children;
};

export default AnalyticsProvider;
