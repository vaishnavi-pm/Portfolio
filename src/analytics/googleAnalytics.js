/**
 * Google Analytics 4 Configuration
 * 
 * This module handles all GA4 tracking and initialization.
 * 
 * IMPORTANT: Before deployment, replace GOOGLE_ANALYTICS_MEASUREMENT_ID with your actual measurement ID
 * You can find it in Google Analytics 4 Dashboard > Admin > Property > Data Streams > Web
 * Format: G-XXXXXXXXXX
 */

// ============================================
// CONFIGURATION - UPDATE THESE VALUES
// ============================================

// Replace with your Google Analytics 4 Measurement ID
const GOOGLE_ANALYTICS_MEASUREMENT_ID = 'GOOGLE_ANALYTICS_MEASUREMENT_ID';

// GDPR-friendly approach: Track only with user consent
const ENABLE_ANALYTICS = import.meta.env.PROD || import.meta.env.VITE_ENABLE_ANALYTICS === 'true';

// ============================================
// GA4 INITIALIZATION
// ============================================

/**
 * Initialize Google Analytics 4
 * Loads the GA4 script asynchronously to prevent blocking page load
 * 
 * @returns {Promise<void>}
 */
export const initializeGA4 = async () => {
  if (!ENABLE_ANALYTICS || !GOOGLE_ANALYTICS_MEASUREMENT_ID || GOOGLE_ANALYTICS_MEASUREMENT_ID === 'GOOGLE_ANALYTICS_MEASUREMENT_ID') {
    console.warn('GA4: Not initialized - Missing Measurement ID or Analytics disabled');
    return;
  }

  try {
    // Load GA4 script asynchronously
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    
    // Configure GA4 with GDPR-friendly settings
    gtag('config', GOOGLE_ANALYTICS_MEASUREMENT_ID, {
      'anonymize_ip': true, // GDPR compliance: anonymize IP
      'allow_google_signals': false, // GDPR compliance: disable signals
      'allow_ad_personalization_signals': false, // GDPR compliance
      'page_path': window.location.pathname,
    });

    console.log('✓ GA4 initialized successfully');
  } catch (error) {
    console.error('Failed to initialize GA4:', error);
  }
};

// ============================================
// GA4 TRACKING EVENTS
// ============================================

/**
 * Track page view
 * Called automatically on route changes
 * 
 * @param {string} pagePath - The page path (e.g., '/about')
 * @param {string} pageTitle - The page title (optional)
 */
export const trackPageView = (pagePath, pageTitle = '') => {
  if (!window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle || document.title,
  });
};

/**
 * Track custom event
 * Use for tracking user interactions like button clicks, form submissions, etc.
 * 
 * @param {string} eventName - Name of the event
 * @param {Object} eventParams - Additional event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (!window.gtag) return;

  window.gtag('event', eventName, eventParams);
};

/**
 * Track portfolio interactions
 * 
 * @param {string} action - Type of action (click, view, download, etc.)
 * @param {string} label - Label describing what was interacted with
 * @param {string} category - Category of interaction
 */
export const trackPortfolioEvent = (action, label, category = 'engagement') => {
  trackEvent('portfolio_interaction', {
    action,
    label,
    category,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track project view
 * 
 * @param {string} projectName - Name of the project
 * @param {string} projectId - Unique identifier for the project
 */
export const trackProjectView = (projectName, projectId) => {
  trackEvent('project_view', {
    project_name: projectName,
    project_id: projectId,
  });
};

/**
 * Track skill interaction
 * 
 * @param {string} skillName - Name of the skill
 * @param {string} category - Skill category (e.g., 'frontend', 'backend')
 */
export const trackSkillInteraction = (skillName, category = 'technology') => {
  trackEvent('skill_interaction', {
    skill_name: skillName,
    category,
  });
};

/**
 * Track contact form submission
 * 
 * @param {string} source - Source of contact (email_form, social, etc.)
 */
export const trackContactSubmission = (source = 'email_form') => {
  trackEvent('contact_submission', {
    source,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track download (resume, portfolio, etc.)
 * 
 * @param {string} fileType - Type of file being downloaded
 * @param {string} fileName - Name of the file
 */
export const trackDownload = (fileType, fileName) => {
  trackEvent('file_download', {
    file_type: fileType,
    file_name: fileName,
  });
};

/**
 * Track scroll depth
 * 
 * @param {number} depth - Scroll depth percentage (0-100)
 */
export const trackScrollDepth = (depth) => {
  if (depth % 25 !== 0) return; // Track only at 25% intervals

  trackEvent('scroll_depth', {
    depth,
  });
};

/**
 * Track time on page
 * 
 * @param {number} seconds - Time spent on page in seconds
 */
export const trackTimeOnPage = (seconds) => {
  trackEvent('time_on_page', {
    duration_seconds: Math.round(seconds),
  });
};

/**
 * Track social link click
 * 
 * @param {string} platform - Social platform (linkedin, github, twitter, etc.)
 * @param {string} url - URL of the social profile
 */
export const trackSocialClick = (platform, url) => {
  trackEvent('social_link_click', {
    platform,
    url,
  });
};

/**
 * Get GA4 Measurement ID (for debugging/validation)
 * 
 * @returns {string} The measurement ID or empty string if not set
 */
export const getGA4MeasurementID = () => {
  return GOOGLE_ANALYTICS_MEASUREMENT_ID === 'GOOGLE_ANALYTICS_MEASUREMENT_ID' 
    ? '' 
    : GOOGLE_ANALYTICS_MEASUREMENT_ID;
};

/**
 * Check if analytics is enabled
 * 
 * @returns {boolean}
 */
export const isAnalyticsEnabled = () => {
  return ENABLE_ANALYTICS && !!getGA4MeasurementID();
};

export default {
  initializeGA4,
  trackPageView,
  trackEvent,
  trackPortfolioEvent,
  trackProjectView,
  trackSkillInteraction,
  trackContactSubmission,
  trackDownload,
  trackScrollDepth,
  trackTimeOnPage,
  trackSocialClick,
  getGA4MeasurementID,
  isAnalyticsEnabled,
};
