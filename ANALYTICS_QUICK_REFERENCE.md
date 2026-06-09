/**
 * ANALYTICS QUICK REFERENCE CARD
 * 
 * Save this for quick lookup!
 */

// ============================================
// QUICK START (45-60 mins)
// ============================================

/**
 * 1. GET IDS:
 *    • Google Analytics: https://analytics.google.com/
 *    • Microsoft Clarity: https://clarity.microsoft.com/
 * 
 * 2. UPDATE FILES:
 *    • src/analytics/googleAnalytics.js (line 13)
 *    • src/analytics/microsoftClarity.js (line 11)
 * 
 * 3. CREATE .env.local:
 *    VITE_ENABLE_ANALYTICS=true
 *    VITE_ENABLE_CLARITY=true
 * 
 * 4. TEST: npm run dev
 * 
 * 5. DEPLOY: Vercel / Netlify
 * 
 * 6. VERIFY: Check both dashboards
 */

// ============================================
// COMMON CODE SNIPPETS
// ============================================

// Track project view
import { useAnalytics } from './analytics';
const { trackProjectView } = useAnalytics();
onClick={() => trackProjectView('Project Name', 'id')}

// Track contact form
const { trackContactSubmission } = useAnalytics();
trackContactSubmission('email_form');

// Track download
const { trackDownload } = useAnalytics();
trackDownload('pdf', 'resume.pdf');

// Track social click
const { trackSocialClick } = useAnalytics();
trackSocialClick('linkedin', 'https://linkedin.com/...');

// Track skill interaction
const { trackSkillInteraction } = useAnalytics();
trackSkillInteraction('React', 'frontend');

// Use statistics component
import PortfolioStats from './components/PortfolioStats';
<PortfolioStats title="My Stats" stats={[...]} />

// ============================================
// FILE LOCATIONS
// ============================================

/**
 * CONFIGURATION FILES:
 * • src/analytics/googleAnalytics.js - GA4 setup
 * • src/analytics/microsoftClarity.js - Clarity setup
 * 
 * COMPONENTS:
 * • src/analytics/AnalyticsProvider.jsx - Main provider
 * • src/components/PortfolioStats.jsx - Statistics display
 * 
 * DOCUMENTATION:
 * • ANALYTICS_SETUP.md - Step-by-step guide
 * • ANALYTICS_ARCHITECTURE.md - System overview
 * • ANALYTICS_IMPLEMENTATION_SUMMARY.md - Complete summary
 * • src/analytics/README.md - Usage guide
 * • src/analytics/INTEGRATION_EXAMPLES.js - Code examples
 */

// ============================================
// MEASUREMENT IDs
// ============================================

/**
 * GOOGLE ANALYTICS:
 * Format: G-XXXXXXXXXX (G- followed by 10 characters)
 * Find at: https://analytics.google.com/ > Admin > Property > Data Streams > Web
 * Put in: src/analytics/googleAnalytics.js, line 13
 * 
 * MICROSOFT CLARITY:
 * Format: nxxxxxxxxxx (mix of letters and numbers, 10 chars)
 * Find at: https://clarity.microsoft.com/ > Settings > Project ID
 * Put in: src/analytics/microsoftClarity.js, line 11
 */

// ============================================
// DEPLOYMENT
// ============================================

/**
 * VERCEL:
 * 1. Connect GitHub repo
 * 2. Add Environment Variables:
 *    VITE_ENABLE_ANALYTICS=true
 *    VITE_ENABLE_CLARITY=true
 * 3. Deploy
 * 4. Check https://analytics.google.com/ after 24 hours
 * 
 * NETLIFY:
 * 1. Connect GitHub repo
 * 2. Build: npm run build
 * 3. Publish: dist
 * 4. Add Environment Variables (same as above)
 * 5. Deploy
 * 6. Check https://clarity.microsoft.com/ after deployment
 */

// ============================================
// TRACKING FUNCTIONS
// ============================================

/**
 * AUTOMATIC (No code needed):
 * • Page views
 * • Sessions
 * • Device info
 * • Geographic location
 * 
 * EASY TO ADD:
 * trackProjectView(name, id)
 * trackSkillInteraction(name, category)
 * trackContactSubmission(source)
 * trackDownload(type, name)
 * trackSocialClick(platform, url)
 * trackEvent(name, params)
 * 
 * HOOKS:
 * useTrackPageView()
 * useTrackScrollDepth()
 * useTrackTimeOnPage()
 */

// ============================================
// DASHBOARDS
// ============================================

/**
 * GOOGLE ANALYTICS:
 * https://analytics.google.com/
 * • Realtime - Live visitors
 * • Acquisition - Traffic sources
 * • Events - Your custom events
 * • Audience - Demographics
 * 
 * MICROSOFT CLARITY:
 * https://clarity.microsoft.com/
 * • Session videos - Watch user interactions
 * • Heatmaps - Click and scroll patterns
 * • Analytics - Overall statistics
 * • Insights - Problems and opportunities
 */

// ============================================
// WHAT GETS TRACKED
// ============================================

/**
 * GOOGLE ANALYTICS:
 * ✓ Total visitors
 * ✓ New vs returning
 * ✓ Pages viewed
 * ✓ Time on page
 * ✓ Device type (mobile, desktop)
 * ✓ Browser type
 * ✓ Countries/regions
 * ✓ Traffic source
 * ✓ Custom events
 * 
 * MICROSOFT CLARITY:
 * ✓ Session recordings
 * ✓ Click heatmaps
 * ✓ Scroll heatmaps
 * ✓ User interactions
 * ✓ Form analytics
 * ✓ Error tracking
 * ✓ Page performance
 */

// ============================================
// ENVIRONMENT VARIABLES
// ============================================

/**
 * .env.local (for local testing):
 * 
 * VITE_ENABLE_ANALYTICS=true
 * VITE_ENABLE_CLARITY=true
 * 
 * Deployment Platform Settings:
 * (Same variables as above)
 * 
 * In Vercel:
 * Project Settings > Environment Variables
 * 
 * In Netlify:
 * Site Settings > Build & Deploy > Environment
 */

// ============================================
// TROUBLESHOOTING
// ============================================

/**
 * ISSUE: Scripts not loading
 * FIX: Check .env.local, restart npm run dev
 * 
 * ISSUE: No data in GA4
 * FIX: Check Measurement ID, wait 24 hours
 * 
 * ISSUE: Clarity not recording
 * FIX: Check Project ID and environment variables
 * 
 * ISSUE: Performance slow
 * FIX: Scripts load asynchronously (shouldn't impact)
 * Check Network tab for CDN issues
 * 
 * Check browser console for error messages!
 */

// ============================================
// IMPORTANT REMINDERS
// ============================================

/**
 * ✓ Replace IDs before deploying
 * ✓ Use .env.local for local development
 * ✓ Set environment variables in deployment platform
 * ✓ Wait 24-48 hours for first GA4 data
 * ✓ Clarity data appears immediately
 * ✓ Add Privacy Policy to your site
 * ✓ Analytics are GDPR-compliant by default
 * ✓ Scripts load asynchronously (no speed impact)
 * ✓ Regular monitoring helps you improve UX
 */

// ============================================
// USEFUL LINKS
// ============================================

/**
 * DASHBOARDS:
 * Google Analytics: https://analytics.google.com/
 * Microsoft Clarity: https://clarity.microsoft.com/
 * 
 * DOCUMENTATION:
 * GA4 Setup: https://support.google.com/analytics/answer/10089681
 * Clarity Setup: https://learn.microsoft.com/en-us/clarity/setup-and-installation
 * 
 * VERCEL:
 * https://vercel.com/
 * 
 * NETLIFY:
 * https://netlify.com/
 */

// ============================================
// NEXT STEPS
// ============================================

/**
 * 1. Read ANALYTICS_SETUP.md
 * 2. Create GA4 account and get Measurement ID
 * 3. Create Clarity project and get Project ID
 * 4. Update configuration files
 * 5. Test locally
 * 6. Deploy
 * 7. Check dashboards
 * 8. Optionally integrate tracking in components
 * 9. Monitor regularly
 * 10. Celebrate! 🎉
 */

export default {};
