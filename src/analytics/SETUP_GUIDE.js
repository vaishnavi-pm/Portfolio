/**
 * Analytics Dashboard Configuration Guide
 * 
 * This file demonstrates how to structure and use analytics data
 * After deployment, you can track these metrics in your Google Analytics and Microsoft Clarity dashboards
 */

/**
 * GOOGLE ANALYTICS 4 SETUP
 * 
 * 1. Go to https://analytics.google.com/
 * 2. Create a new Property for your portfolio
 * 3. Get your Measurement ID (format: G-XXXXXXXXXX)
 * 4. Open src/analytics/googleAnalytics.js
 * 5. Replace 'GOOGLE_ANALYTICS_MEASUREMENT_ID' with your actual ID
 * 6. Deploy and start tracking
 * 
 * TRACKED METRICS:
 * - Total visitors (Sessions)
 * - Page views
 * - Unique visitors
 * - Traffic sources
 * - User engagement
 * - Device types
 * - Geographic location
 * - Scroll depth
 * - Time on page
 */

export const GA4_SETUP = {
  measurementIdFormat: 'G-XXXXXXXXXX',
  setupUrl: 'https://analytics.google.com/',
  replaceLocation: 'src/analytics/googleAnalytics.js',
  key: 'GOOGLE_ANALYTICS_MEASUREMENT_ID',
};

/**
 * MICROSOFT CLARITY SETUP
 * 
 * 1. Go to https://clarity.microsoft.com/
 * 2. Sign in with Microsoft account
 * 3. Create a new project
 * 4. Get your Project ID from Settings
 * 5. Open src/analytics/microsoftClarity.js
 * 6. Replace 'MICROSOFT_CLARITY_PROJECT_ID' with your actual ID
 * 7. Deploy and start tracking
 * 
 * TRACKED METRICS:
 * - Session recordings
 * - Click heatmaps
 * - Scroll heatmaps
 * - User interactions
 * - Dead clicks
 * - Rage clicks
 * - Form analytics
 * - User journey
 */

export const CLARITY_SETUP = {
  projectIdFormat: 'Numeric ID or alphanumeric string',
  setupUrl: 'https://clarity.microsoft.com/',
  replaceLocation: 'src/analytics/microsoftClarity.js',
  key: 'MICROSOFT_CLARITY_PROJECT_ID',
};

/**
 * ENVIRONMENT VARIABLES
 * 
 * Create a .env.local file in your project root:
 * 
 * VITE_ENABLE_ANALYTICS=true
 * VITE_ENABLE_CLARITY=true
 * 
 * Or set them in your deployment platform (Vercel, Netlify, etc.)
 */

export const ENV_SETUP = {
  fileName: '.env.local',
  variables: {
    VITE_ENABLE_ANALYTICS: 'true',
    VITE_ENABLE_CLARITY: 'true',
  },
};

/**
 * DEPLOYMENT CHECKLIST
 * 
 * Before deploying to production:
 * 
 * 1. [ ] Create Google Analytics 4 property
 * 2. [ ] Copy Measurement ID
 * 3. [ ] Update src/analytics/googleAnalytics.js
 * 4. [ ] Create Microsoft Clarity project
 * 5. [ ] Copy Project ID
 * 6. [ ] Update src/analytics/microsoftClarity.js
 * 7. [ ] Set environment variables in deployment platform
 * 8. [ ] Test analytics in development (npm run dev)
 * 9. [ ] Build and deploy (npm run build)
 * 10. [ ] Verify tracking in both dashboards after deployment
 */

export const DEPLOYMENT_CHECKLIST = [
  'Create Google Analytics 4 property',
  'Copy Measurement ID',
  'Update googleAnalytics.js',
  'Create Microsoft Clarity project',
  'Copy Project ID',
  'Update microsoftClarity.js',
  'Set environment variables',
  'Test in development',
  'Build and deploy',
  'Verify tracking in dashboards',
];

/**
 * VERCEL DEPLOYMENT STEPS
 * 
 * 1. Push code to GitHub
 * 2. Import project in Vercel
 * 3. Add Environment Variables:
 *    - VITE_ENABLE_ANALYTICS=true
 *    - VITE_ENABLE_CLARITY=true
 * 4. Deploy
 * 5. Go to Settings > Environment Variables if needed to update IDs
 */

export const VERCEL_STEPS = {
  1: 'Push code to GitHub',
  2: 'Import project in Vercel',
  3: 'Add environment variables',
  4: 'Deploy',
  5: 'Verify tracking',
};

/**
 * NETLIFY DEPLOYMENT STEPS
 * 
 * 1. Push code to GitHub
 * 2. Create new site in Netlify
 * 3. Configure build settings:
 *    - Build command: npm run build
 *    - Publish directory: dist
 * 4. Add environment variables in Site settings > Build & deploy > Environment
 * 5. Redeploy
 */

export const NETLIFY_STEPS = {
  1: 'Push code to GitHub',
  2: 'Create new site in Netlify',
  3: 'Configure build settings',
  4: 'Add environment variables',
  5: 'Redeploy and verify',
};

/**
 * USEFUL LINKS
 */

export const USEFUL_LINKS = {
  GA4_DOCS: 'https://developers.google.com/analytics/devguides/collection/ga4',
  CLARITY_DOCS: 'https://learn.microsoft.com/en-us/clarity/',
  PRIVACY_GUIDE: 'https://support.google.com/analytics/answer/6366371',
  GDPR_COMPLIANCE: 'https://support.google.com/analytics/answer/9019185',
};

/**
 * EXAMPLE: Custom Statistics Page Tracking
 * 
 * In your PortfolioStats component or dashboard:
 * 
 * import { useAnalytics } from './analytics';
 * 
 * export const StatsDashboard = () => {
 *   const { trackEvent } = useAnalytics();
 *   
 *   useEffect(() => {
 *     // Track when stats page is viewed
 *     trackEvent('stats_page_viewed', {
 *       timestamp: new Date().toISOString(),
 *     });
 *   }, []);
 *   
 *   return (...);
 * };
 */

export default {
  GA4_SETUP,
  CLARITY_SETUP,
  ENV_SETUP,
  DEPLOYMENT_CHECKLIST,
  VERCEL_STEPS,
  NETLIFY_STEPS,
  USEFUL_LINKS,
};
