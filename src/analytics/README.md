/**
 * Analytics Integration Guide
 * 
 * This guide covers everything you need to set up and use analytics in your portfolio.
 * 
 * TABLE OF CONTENTS:
 * 1. Installation & Setup
 * 2. Configuration
 * 3. Using Analytics in Components
 * 4. Deployment
 * 5. Monitoring Your Analytics
 * 6. Privacy & GDPR Compliance
 */

// ============================================
// 1. INSTALLATION & SETUP
// ============================================

/**
 * STEP 1: Install Dependencies (Already Done)
 * 
 * The project uses built-in fetch for GA4 script loading.
 * No additional packages required! All scripts load via CDN.
 * 
 * Files created:
 * - src/analytics/googleAnalytics.js (GA4 integration)
 * - src/analytics/microsoftClarity.js (Clarity integration)
 * - src/analytics/useAnalytics.js (Custom hooks)
 * - src/analytics/AnalyticsProvider.jsx (Provider component)
 * - src/components/PortfolioStats.jsx (Statistics counter)
 */

// ============================================
// 2. CONFIGURATION
// ============================================

/**
 * SETUP GOOGLE ANALYTICS 4:
 * 
 * 1. Go to https://analytics.google.com/
 * 2. Create a new account (or use existing)
 * 3. Create a new Property
 * 4. Select Web as the platform
 * 5. Add your portfolio domain
 * 6. Go to Admin > Property > Data Streams > Web
 * 7. Copy the MEASUREMENT ID (format: G-XXXXXXXXXX)
 * 8. Open src/analytics/googleAnalytics.js
 * 9. Replace GOOGLE_ANALYTICS_MEASUREMENT_ID with your ID
 * 10. Save and deploy
 * 
 * Example:
 * const GOOGLE_ANALYTICS_MEASUREMENT_ID = 'G-A1B2C3D4E5';
 */

/**
 * SETUP MICROSOFT CLARITY:
 * 
 * 1. Go to https://clarity.microsoft.com/
 * 2. Click "Sign in with Microsoft"
 * 3. Create a new project
 * 4. Add your portfolio domain
 * 5. Click Settings
 * 6. Copy your PROJECT ID
 * 7. Open src/analytics/microsoftClarity.js
 * 8. Replace MICROSOFT_CLARITY_PROJECT_ID with your ID
 * 9. Save and deploy
 * 
 * Example:
 * const MICROSOFT_CLARITY_PROJECT_ID = 'nxxxxxxxxxx';
 */

/**
 * ENVIRONMENT VARIABLES:
 * 
 * Create .env.local in your project root:
 * 
 * VITE_ENABLE_ANALYTICS=true
 * VITE_ENABLE_CLARITY=true
 * 
 * For production (Vercel/Netlify):
 * Set these in your platform's environment settings
 */

// ============================================
// 3. USING ANALYTICS IN COMPONENTS
// ============================================

/**
 * EXAMPLE 1: Basic Page View Tracking
 * 
 * Already automatic! The AnalyticsProvider tracks all page views.
 * But you can also track manually:
 * 
 * import { useTrackPageView } from './analytics';
 * 
 * const MyComponent = () => {
 *   useTrackPageView(); // Automatically tracks on mount
 *   return <div>My Component</div>;
 * };
 */

/**
 * EXAMPLE 2: Track Custom Events
 * 
 * import { useAnalytics } from './analytics';
 * 
 * const ProjectCard = ({ projectName, projectId }) => {
 *   const { trackProjectView } = useAnalytics();
 * 
 *   const handleProjectClick = () => {
 *     trackProjectView(projectName, projectId);
 *   };
 * 
 *   return (
 *     <button onClick={handleProjectClick}>
 *       {projectName}
 *     </button>
 *   );
 * };
 */

/**
 * EXAMPLE 3: Track Scroll Depth
 * 
 * import { useTrackScrollDepth } from './analytics';
 * 
 * const HeroSection = () => {
 *   useTrackScrollDepth(); // Automatically tracks scroll depth
 *   return <section>Hero Content</section>;
 * };
 */

/**
 * EXAMPLE 4: Track Form Submissions
 * 
 * import { useAnalytics } from './analytics';
 * 
 * const ContactForm = () => {
 *   const { trackContactSubmission } = useAnalytics();
 * 
 *   const handleSubmit = async (e) => {
 *     e.preventDefault();
 *     // ... your form logic
 *     trackContactSubmission('email_form');
 *   };
 * 
 *   return <form onSubmit={handleSubmit}>...</form>;
 * };
 */

/**
 * EXAMPLE 5: Track Social Links
 * 
 * import { useAnalytics } from './analytics';
 * 
 * const SocialLinks = () => {
 *   const { trackSocialClick } = useAnalytics();
 * 
 *   return (
 *     <>
 *       <a
 *         href="https://linkedin.com/in/yourprofile"
 *         onClick={() => trackSocialClick('linkedin', 'https://linkedin.com/in/yourprofile')}
 *       >
 *         LinkedIn
 *       </a>
 *     </>
 *   );
 * };
 */

/**
 * EXAMPLE 6: Track Skill/Technology Interaction
 * 
 * import { useAnalytics } from './analytics';
 * 
 * const SkillCard = ({ skillName, category }) => {
 *   const { trackSkillInteraction } = useAnalytics();
 * 
 *   const handleSkillClick = () => {
 *     trackSkillInteraction(skillName, category);
 *   };
 * 
 *   return (
 *     <button onClick={handleSkillClick}>
 *       {skillName}
 *     </button>
 *   );
 * };
 */

/**
 * EXAMPLE 7: Use Portfolio Stats Component
 * 
 * import PortfolioStats from './components/PortfolioStats';
 * 
 * const App = () => {
 *   const customStats = [
 *     {
 *       icon: '👁️',
 *       title: 'Portfolio Views',
 *       value: 1250,
 *       suffix: '+',
 *       description: 'Tracked from Google Analytics',
 *     },
 *     // ... more stats
 *   ];
 * 
 *   return (
 *     <>
 *       {/* Your other components */}
 *       <PortfolioStats stats={customStats} />
 *     </>
 *   );
 * };
 */

// ============================================
// 4. DEPLOYMENT
// ============================================

/**
 * DEPLOYING TO VERCEL:
 * 
 * 1. Push code to GitHub
 * 2. Go to vercel.com and connect your repository
 * 3. Click "Import Project"
 * 4. Select your repository
 * 5. In "Environment Variables" section, add:
 *    - VITE_ENABLE_ANALYTICS=true
 *    - VITE_ENABLE_CLARITY=true
 * 6. Click "Deploy"
 * 7. Wait for deployment to complete
 * 8. Your analytics will start collecting data
 * 
 * NOTE: Make sure you have already updated your IDs in:
 * - src/analytics/googleAnalytics.js
 * - src/analytics/microsoftClarity.js
 */

/**
 * DEPLOYING TO NETLIFY:
 * 
 * 1. Push code to GitHub
 * 2. Go to netlify.com and click "Add new site"
 * 3. Choose "Import an existing project"
 * 4. Select GitHub and your repository
 * 5. Configure build settings:
 *    - Build command: npm run build
 *    - Publish directory: dist
 * 6. Click "Advanced settings" > "New variable"
 * 7. Add:
 *    - VITE_ENABLE_ANALYTICS=true
 *    - VITE_ENABLE_CLARITY=true
 * 8. Click "Deploy site"
 * 9. Your analytics will start collecting data
 */

/**
 * LOCAL TESTING:
 * 
 * Before deploying, test locally:
 * 
 * 1. Create .env.local file in your project root:
 *    VITE_ENABLE_ANALYTICS=true
 *    VITE_ENABLE_CLARITY=true
 * 
 * 2. Make sure your IDs are set in:
 *    - src/analytics/googleAnalytics.js
 *    - src/analytics/microsoftClarity.js
 * 
 * 3. Run: npm run dev
 * 
 * 4. Open Chrome DevTools > Console
 *    You should see:
 *    - "✓ GA4 initialized successfully"
 *    - "✓ Microsoft Clarity initialized successfully"
 *    - "📊 Analytics providers initialized"
 * 
 * 5. Your analytics won't record locally (only on production domain)
 *    but the scripts will load correctly
 */

// ============================================
// 5. MONITORING YOUR ANALYTICS
// ============================================

/**
 * GOOGLE ANALYTICS 4 DASHBOARD:
 * 
 * After deployment, go to analytics.google.com to see:
 * 
 * REALTIME:
 * - Current active users
 * - Current page views
 * - Traffic sources
 * 
 * ENGAGEMENT:
 * - Total users
 * - New users
 * - Sessions
 * - Engagement rate
 * - Average session duration
 * 
 * AUDIENCE:
 * - Demographics
 * - Geographic locations
 * - Devices & browsers
 * - Top performing pages
 * 
 * ACQUISITION:
 * - Traffic sources (Direct, Referral, Search, etc.)
 * - Top referring websites
 * - Campaign performance
 * 
 * MONETIZATION (if applicable):
 * - Event tracking
 * - Conversion tracking
 */

/**
 * MICROSOFT CLARITY DASHBOARD:
 * 
 * After deployment, go to clarity.microsoft.com to see:
 * 
 * ANALYTICS:
 * - Total sessions
 * - Users
 * - Bounce rate
 * - Average session duration
 * 
 * HEATMAPS:
 * - Click heatmap (where users click most)
 * - Scroll heatmap (how far users scroll)
 * 
 * RECORDINGS:
 * - Watch actual user sessions
 * - See user interactions
 * - Identify UX issues
 * 
 * INSIGHTS:
 * - Dead clicks (clicks on non-clickable elements)
 * - Rage clicks (rapid repeated clicks)
 * - Blocked sessions (sessions that error out)
 */

// ============================================
// 6. PRIVACY & GDPR COMPLIANCE
// ============================================

/**
 * GDPR-FRIENDLY FEATURES:
 * 
 * Already implemented in this setup:
 * 
 * 1. IP Anonymization:
 *    - Google Analytics anonymizes IP addresses
 *    - Last octet of IP is removed
 * 
 * 2. Disabled Signals:
 *    - Disabled Google signals (cross-site tracking)
 *    - Disabled ad personalization signals
 *    - GDPR compliant by default
 * 
 * 3. Consent Management (Optional):
 *    - Analytics only loads in production
 *    - Can be disabled via environment variable
 * 
 * IMPORTANT: 
 * - Add a Privacy Policy to your portfolio
 * - Disclose that you use Google Analytics and Microsoft Clarity
 * - Consider adding a cookie consent banner for EU visitors
 */

/**
 * PRIVACY POLICY EXAMPLE:
 * 
 * Add to your Privacy Policy:
 * 
 * "This website uses Google Analytics and Microsoft Clarity
 * to understand how visitors use our site. These tools collect
 * data such as pages visited, time spent on site, and the
 * referring website. IP addresses are anonymized to protect
 * your privacy. This data helps us improve your experience.
 * 
 * You can opt-out of Google Analytics tracking by installing
 * the Google Analytics opt-out browser extension."
 */

/**
 * RECOMMENDED ADDITIONS:
 * 
 * For better privacy compliance:
 * 
 * 1. Add a cookie consent banner (e.g., CookieBot, OneTrust)
 * 2. Get explicit consent before tracking
 * 3. Add a Privacy Policy page
 * 4. Add Terms of Service
 * 5. Allow users to opt-out of analytics
 */

// ============================================
// QUICK START CHECKLIST
// ============================================

export const QUICK_START = [
  {
    step: 1,
    task: 'Create Google Analytics 4 property',
    url: 'https://analytics.google.com/',
    time: '5 min'
  },
  {
    step: 2,
    task: 'Get Measurement ID',
    details: 'Admin > Property > Data Streams > Web',
    time: '2 min'
  },
  {
    step: 3,
    task: 'Update googleAnalytics.js',
    file: 'src/analytics/googleAnalytics.js',
    time: '2 min'
  },
  {
    step: 4,
    task: 'Create Microsoft Clarity project',
    url: 'https://clarity.microsoft.com/',
    time: '5 min'
  },
  {
    step: 5,
    task: 'Get Project ID',
    details: 'Settings > Project ID',
    time: '2 min'
  },
  {
    step: 6,
    task: 'Update microsoftClarity.js',
    file: 'src/analytics/microsoftClarity.js',
    time: '2 min'
  },
  {
    step: 7,
    task: 'Test locally',
    command: 'npm run dev',
    time: '5 min'
  },
  {
    step: 8,
    task: 'Deploy to Vercel or Netlify',
    time: '10 min'
  },
  {
    step: 9,
    task: 'Verify tracking in dashboards',
    time: '5 min'
  },
];

export default {
  QUICK_START,
};
