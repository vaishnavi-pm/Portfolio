/**
 * ANALYTICS SYSTEM ARCHITECTURE
 * 
 * Visual guide showing how all components work together
 */

// ============================================
// SYSTEM ARCHITECTURE
// ============================================

/**
 * 
 * ┌─────────────────────────────────────────────────────────────┐
 * │                        BROWSER                              │
 * │  ┌────────────────────────────────────────────────────────┐ │
 * │  │             Your Portfolio Application                │ │
 * │  │  ┌──────────────────────────────────────────────────┐ │ │
 * │  │  │           AnalyticsProvider (Wrapper)          │ │ │
 * │  │  │  ┌────────────────────────────────────────────┐ │ │ │
 * │  │  │  │            App Component                   │ │ │ │
 * │  │  │  │  ┌──────────────────────────────────────┐ │ │ │ │
 * │  │  │  │  │        Navbar                        │ │ │ │ │
 * │  │  │  │  │  (useAnalytics hook)                 │ │ │ │ │
 * │  │  │  │  ├──────────────────────────────────────┤ │ │ │ │
 * │  │  │  │  │        Hero Section                  │ │ │ │ │
 * │  │  │  │  │  (useTrackScrollDepth hook)          │ │ │ │ │
 * │  │  │  │  ├──────────────────────────────────────┤ │ │ │ │
 * │  │  │  │  │        Projects                      │ │ │ │ │
 * │  │  │  │  │  (trackProjectView on click)         │ │ │ │ │
 * │  │  │  │  ├──────────────────────────────────────┤ │ │ │ │
 * │  │  │  │  │        PortfolioStats Component      │ │ │ │ │
 * │  │  │  │  │  (Animated counter display)          │ │ │ │ │
 * │  │  │  │  ├──────────────────────────────────────┤ │ │ │ │
 * │  │  │  │  │        Contact Form                  │ │ │ │ │
 * │  │  │  │  │  (trackContactSubmission on submit)  │ │ │ │ │
 * │  │  │  │  └──────────────────────────────────────┘ │ │ │ │
 * │  │  │  └────────────────────────────────────────────┘ │ │ │
 * │  │  └──────────────────────────────────────────────────┘ │ │
 * │  └────────────────────────────────────────────────────────┘ │
 * │                                                              │
 * │  ANALYTICS INITIALIZATION (On Mount):                       │
 * │  1. initializeGA4() - Loads GA4 script                      │
 * │  2. initializeClarity() - Loads Clarity script              │
 * │  3. trackPageView() - Records initial page view             │
 * └─────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────┐
 * │           ANALYTICS SERVICES (Cloud)                        │
 * │                                                              │
 * │  ┌────────────────────┐      ┌────────────────────┐        │
 * │  │  Google Analytics  │      │ Microsoft Clarity  │        │
 * │  │                    │      │                    │        │
 * │  │ • Page Views       │      │ • Click Heatmaps   │        │
 * │  │ • Visitors         │      │ • Scroll Heatmaps  │        │
 * │  │ • Sessions         │      │ • Session Videos   │        │
 * │  │ • Events           │      │ • Form Analytics   │        │
 * │  │ • Geographic Data  │      │ • User Recordings  │        │
 * │  │ • Device Info      │      │ • Interaction Data │        │
 * │  └────────────────────┘      └────────────────────┘        │
 * │        ↓                               ↓                    │
 * │     (Asynchronous Tracking)      (Real-time Tracking)      │
 * └─────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────┐
 * │         ANALYTICS DASHBOARDS                                │
 * │                                                              │
 * │  https://analytics.google.com/                              │
 * │  • Realtime overview                                        │
 * │  • Acquisition reports                                      │
 * │  • Audience reports                                         │
 * │  • Behavior reports                                         │
 * │  • Custom events                                            │
 * │                                                              │
 * │  https://clarity.microsoft.com/                             │
 * │  • Session recordings                                       │
 * │  • Heatmaps & recordings                                    │
 * │  • Analytics dashboard                                      │
 * │  • User insights                                            │
 * └─────────────────────────────────────────────────────────────┘
 */

// ============================================
// DATA FLOW
// ============================================

/**
 * 
 * USER INTERACTION → TRACKING FUNCTION → ANALYTICS SERVICE → DASHBOARD
 * 
 * Example Flow:
 * 
 * 1. User clicks "View Project" button
 *    └─ onClick handler called
 * 
 * 2. Tracking function executes
 *    └─ trackProjectView('React App', 'project-001')
 * 
 * 3. Data sent to Google Analytics
 *    └─ window.gtag('event', 'project_view', {...})
 * 
 * 4. Data sent to Microsoft Clarity
 *    └─ window.clarity('event', 'project_interaction', {...})
 * 
 * 5. Dashboards receive and process data
 *    └─ GA4: Shows in "Events" section
 *    └─ Clarity: Shows in analytics and recordings
 * 
 * 6. You can see insights in dashboards
 *    └─ Which projects are most viewed
 *    └─ When users interact with projects
 *    └─ User session recordings
 */

// ============================================
// COMPONENT HIERARCHY
// ============================================

/**
 * 
 * main.jsx
 * └─ StrictMode
 *    └─ ThemeProvider (Theme context)
 *       └─ AnalyticsProvider ← INITIALIZES ALL ANALYTICS
 *          └─ App.jsx
 *             ├─ Navbar (can use useAnalytics)
 *             ├─ Hero (can use useTrackScrollDepth)
 *             ├─ About (automatic page view)
 *             ├─ Skills (can use useAnalytics)
 *             ├─ PortfolioStats ← NEW COMPONENT
 *             ├─ Projects (can use useAnalytics)
 *             ├─ Contact (can use useAnalytics)
 *             ├─ Footer (can use useAnalytics)
 *             └─ ThemeToggle (no tracking needed)
 */

// ============================================
// FILE DEPENDENCIES
// ============================================

/**
 * 
 * AnalyticsProvider.jsx
 * ├─ imports: googleAnalytics.js
 * ├─ imports: microsoftClarity.js
 * ├─ imports: useLocation from react-router-dom
 * └─ used-by: main.jsx
 * 
 * useAnalytics.js
 * ├─ imports: googleAnalytics.js
 * ├─ imports: microsoftClarity.js
 * └─ used-by: Any component
 * 
 * PortfolioStats.jsx
 * ├─ imports: Framer Motion
 * ├─ imports: useTheme
 * └─ used-by: App.jsx
 * 
 * googleAnalytics.js
 * ├─ Standalone module (no imports)
 * └─ used-by: AnalyticsProvider.jsx, useAnalytics.js
 * 
 * microsoftClarity.js
 * ├─ Standalone module (no imports)
 * └─ used-by: AnalyticsProvider.jsx, useAnalytics.js
 */

// ============================================
// INITIALIZATION SEQUENCE
// ============================================

/**
 * 
 * 1. App starts
 *    └─ main.jsx renders
 * 
 * 2. AnalyticsProvider mounts
 *    ├─ Calls initializeGA4()
 *    │  └─ Creates <script> tag
 *    │  └─ Loads GA4 from CDN
 *    │  └─ Initializes window.gtag
 *    │
 *    └─ Calls initializeClarity()
 *       └─ Creates <script> tag
 *       └─ Loads Clarity from CDN
 *       └─ Initializes window.clarity
 * 
 * 3. Analytics initialized
 *    ├─ GA4 ready to receive events
 *    └─ Clarity ready to record sessions
 * 
 * 4. Automatic page view tracked
 *    └─ trackPageView() called
 *    └─ Current URL and title sent to both services
 * 
 * 5. App fully loaded
 *    └─ Users start interacting
 *    └─ Events tracked in real-time
 */

// ============================================
// TRACKING TYPES
// ============================================

/**
 * 
 * AUTOMATIC TRACKING (No code needed):
 * ├─ Page views on navigation
 * ├─ Session start/end
 * ├─ Device information
 * ├─ Geographic location
 * ├─ Traffic source
 * └─ Time on page (via hook)
 * 
 * MANUAL TRACKING (Add to components):
 * ├─ Project views
 * ├─ Skill interactions
 * ├─ Form submissions
 * ├─ Downloads
 * ├─ Social clicks
 * ├─ Scroll depth
 * └─ Custom events
 * 
 * CLARITY-ONLY TRACKING:
 * ├─ Session recordings
 * ├─ Click heatmaps
 * ├─ Scroll heatmaps
 * ├─ Form field analytics
 * └─ Error/crash detection
 */

// ============================================
// KEY CONCEPTS
// ============================================

const KEY_CONCEPTS = {
  measurementID: {
    name: 'Google Analytics Measurement ID',
    format: 'G-XXXXXXXXXX',
    purpose: 'Identifies your GA4 property',
    location: 'src/analytics/googleAnalytics.js, line 13',
  },
  projectID: {
    name: 'Microsoft Clarity Project ID',
    format: 'nxxxxxxxxxx',
    purpose: 'Identifies your Clarity project',
    location: 'src/analytics/microsoftClarity.js, line 11',
  },
  provider: {
    name: 'AnalyticsProvider Component',
    purpose: 'Initializes and manages analytics lifecycle',
    wraps: 'Your entire App component',
    location: 'src/analytics/AnalyticsProvider.jsx',
  },
  hooks: {
    name: 'useAnalytics Hook',
    purpose: 'Provides tracking functions to components',
    usage: 'const { trackEvent } = useAnalytics();',
    location: 'src/analytics/useAnalytics.js',
  },
  stats: {
    name: 'PortfolioStats Component',
    purpose: 'Displays animated statistics',
    features: 'Animated counters, responsive grid, theme-aware',
    location: 'src/components/PortfolioStats.jsx',
  }
};

// ============================================
// ENVIRONMENT SETUP
// ============================================

/**
 * 
 * DEVELOPMENT (.env.local):
 * VITE_ENABLE_ANALYTICS=true
 * VITE_ENABLE_CLARITY=true
 * 
 * PRODUCTION (Vercel/Netlify):
 * VITE_ENABLE_ANALYTICS=true
 * VITE_ENABLE_CLARITY=true
 * 
 * Note: Analytics typically only records on production domain
 * but can be configured to record on localhost for testing
 */

// ============================================
// PERFORMANCE IMPACT
// ============================================

/**
 * 
 * SCRIPT LOADING:
 * ✓ Both scripts load asynchronously
 * ✓ Non-blocking (doesn't delay page load)
 * ✓ Uses defer attribute
 * ✓ Minimal impact on performance score
 * 
 * TRACKING CALLS:
 * ✓ Analytics calls fire asynchronously
 * ✓ No synchronous blocking
 * ✓ Network requests happen in background
 * ✓ User experience unaffected
 * 
 * BUNDLE SIZE:
 * ✓ No additional dependencies added
 * ✓ Only small configuration files (~3KB)
 * ✓ Scripts loaded from CDN (not bundled)
 * ✓ Minimal impact on build size
 */

// ============================================
// SECURITY & PRIVACY
// ============================================

/**
 * 
 * DATA SECURITY:
 * ✓ All data transmitted via HTTPS
 * ✓ No sensitive user data collected
 * ✓ No passwords or personal info
 * ✓ IP addresses anonymized
 * 
 * PRIVACY MEASURES:
 * ✓ IP anonymization enabled
 * ✓ Cross-site tracking disabled
 * ✓ Ad personalization disabled
 * ✓ GDPR-compliant by default
 * 
 * USER CONSENT:
 * ○ Consider adding cookie banner
 * ○ Disclose analytics in privacy policy
 * ○ Allow users to opt-out
 * ○ Respect user preferences
 */

// ============================================
// TROUBLESHOOTING GUIDE
// ============================================

/**
 * 
 * ISSUE: "GA4 not initializing"
 * CHECK:
 * 1. Measurement ID is set in googleAnalytics.js
 * 2. VITE_ENABLE_ANALYTICS=true in .env.local
 * 3. Browser console shows no errors
 * 4. Network tab shows gtag script loading
 * 
 * ISSUE: "Analytics data not appearing"
 * CHECK:
 * 1. Wait 24-48 hours for initial collection
 * 2. Check that domain is correct in GA4
 * 3. Verify Measurement ID format (G-XXXXXXXXXX)
 * 4. Check browser console for errors
 * 
 * ISSUE: "Clarity not recording sessions"
 * CHECK:
 * 1. Project ID is set in microsoftClarity.js
 * 2. VITE_ENABLE_CLARITY=true in .env.local
 * 3. Domain matches in Clarity settings
 * 4. Allow popup windows for Clarity
 * 
 * ISSUE: "Performance degradation"
 * CHECK:
 * 1. Scripts should load asynchronously
 * 2. Check Network tab for slow script loading
 * 3. Verify scripts from CDN are cached
 * 4. Consider disabling in dev environment
 */

export default {
  KEY_CONCEPTS,
};
