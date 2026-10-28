/**
 * Microsoft Clarity Integration
 * 
 * This module handles Microsoft Clarity tracking for heatmaps, user recordings, and session analytics.
 * 
 * IMPORTANT: Before deployment, replace MICROSOFT_CLARITY_PROJECT_ID with your actual project ID
 * You can find it in Microsoft Clarity Dashboard > Settings > Project ID
 */

// ============================================
// CONFIGURATION - UPDATE THESE VALUES
// ============================================

// Replace with your Microsoft Clarity Project ID
const MICROSOFT_CLARITY_PROJECT_ID = 'MICROSOFT_CLARITY_PROJECT_ID';

// Enable only in production or when explicitly set
const ENABLE_CLARITY = import.meta.env.PROD || import.meta.env.VITE_ENABLE_CLARITY === 'true';

// ============================================
// MICROSOFT CLARITY INITIALIZATION
// ============================================

/**
 * Initialize Microsoft Clarity
 * Loads the Clarity script asynchronously to prevent blocking page load
 * 
 * Clarity tracks:
 * - User sessions and recordings
 * - Click heatmaps
 * - Scroll heatmaps
 * - Scroll depth
 * - User interactions
 * - Performance metrics
 * 
 * @returns {Promise<void>}
 */
export const initializeClarity = async () => {
  if (!ENABLE_CLARITY || !MICROSOFT_CLARITY_PROJECT_ID || MICROSOFT_CLARITY_PROJECT_ID === 'MICROSOFT_CLARITY_PROJECT_ID') {
    console.warn('Microsoft Clarity: Not initialized - Missing Project ID or Clarity disabled');
    return;
  }

  try {
    // Create Clarity script
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = 'https://www.clarity.ms/tag/' + MICROSOFT_CLARITY_PROJECT_ID;
    script.onload = () => {
      console.log('✓ Microsoft Clarity initialized successfully');
    };
    script.onerror = () => {
      console.error('Failed to load Microsoft Clarity script');
    };
    document.head.appendChild(script);
  } catch (error) {
    console.error('Failed to initialize Microsoft Clarity:', error);
  }
};

// ============================================
// CLARITY TRACKING EVENTS
// ============================================

/**
 * Track custom event in Clarity
 * 
 * @param {string} eventName - Name of the event
 * @param {Object} eventData - Event data object
 */
export const trackClarityEvent = (eventName, eventData = {}) => {
  if (typeof window.clarity !== 'function') return;

  try {
    window.clarity('event', eventName, JSON.stringify(eventData));
  } catch (error) {
    console.error('Failed to track Clarity event:', error);
  }
};

/**
 * Tag user session with custom data
 * 
 * @param {string} userId - User identifier (optional, use unique identifier)
 * @param {Object} userData - Additional user data
 */
export const setClarityUserData = (userId = '', userData = {}) => {
  if (typeof window.clarity !== 'function') return;

  try {
    if (userId) {
      window.clarity('set', 'userId', userId);
    }
    
    // Set custom user properties
    if (Object.keys(userData).length > 0) {
      Object.entries(userData).forEach(([key, value]) => {
        window.clarity('set', `user_${key}`, String(value));
      });
    }
  } catch (error) {
    console.error('Failed to set Clarity user data:', error);
  }
};

/**
 * Track page/section interaction
 * 
 * @param {string} section - Section name (e.g., 'hero', 'projects', 'contact')
 * @param {string} action - Action performed (e.g., 'view', 'scroll', 'click')
 */
export const trackClaritySectionInteraction = (section, action) => {
  trackClarityEvent('section_interaction', {
    section,
    action,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track project interaction in Clarity
 * 
 * @param {string} projectName - Name of the project
 * @param {string} action - Action (view, click, expand, etc.)
 */
export const trackClarityProjectInteraction = (projectName, action) => {
  trackClarityEvent('project_interaction', {
    project_name: projectName,
    action,
  });
};

/**
 * Track form interaction
 * 
 * @param {string} formName - Name of the form
 * @param {string} action - Action (focus, fill, submit, error, etc.)
 */
export const trackClarityFormInteraction = (formName, action) => {
  trackClarityEvent('form_interaction', {
    form_name: formName,
    action,
  });
};

/**
 * Get Clarity Project ID (for debugging/validation)
 * 
 * @returns {string} The project ID or empty string if not set
 */
export const getClarityProjectID = () => {
  return MICROSOFT_CLARITY_PROJECT_ID === 'MICROSOFT_CLARITY_PROJECT_ID' 
    ? '' 
    : MICROSOFT_CLARITY_PROJECT_ID;
};

/**
 * Check if Clarity is enabled
 * 
 * @returns {boolean}
 */
export const isClarityEnabled = () => {
  return ENABLE_CLARITY && !!getClarityProjectID();
};

export default {
  initializeClarity,
  trackClarityEvent,
  setClarityUserData,
  trackClaritySectionInteraction,
  trackClarityProjectInteraction,
  trackClarityFormInteraction,
  getClarityProjectID,
  isClarityEnabled,
};
