/**
 * COMPLETE SETUP GUIDE
 * 
 * Step-by-step instructions to configure analytics and deploy
 */

// ============================================
// STEP 1: GOOGLE ANALYTICS 4 SETUP (5-10 mins)
// ============================================

/**
 * STEP 1.1: Create GA4 Account
 * 
 * 1. Open https://analytics.google.com/ in your browser
 * 2. Click "Create an account" (if you don't have one)
 * 3. Sign in with your Google account
 * 4. Fill in the account name (e.g., "My Portfolio")
 * 5. Check the data sharing options as preferred
 * 6. Click "Create"
 */

/**
 * STEP 1.2: Create a Property
 * 
 * 1. In Analytics, click "Create Property"
 * 2. Enter your property name (e.g., "Portfolio Website")
 * 3. Select your timezone and currency
 * 4. Click "Create"
 */

/**
 * STEP 1.3: Set up Web Data Stream
 * 
 * 1. Select "Web" as your platform
 * 2. Enter your portfolio domain (e.g., "yourname.com")
 * 3. Enter a stream name (e.g., "Portfolio Stream")
 * 4. Click "Create stream"
 */

/**
 * STEP 1.4: Get Your Measurement ID
 * 
 * 1. After creating the stream, you'll see your Measurement ID
 * 2. It looks like: G-XXXXXXXXXX (10 alphanumeric characters after G-)
 * 3. COPY THIS VALUE - You'll need it in the next step
 * 
 * Alternative way to find it:
 * 1. Go to Admin > Property > Data Streams > Web
 * 2. Click on your web stream
 * 3. Find "Measurement ID" - it's shown prominently
 */

/**
 * STEP 1.5: Update Your Code
 * 
 * 1. Open: src/analytics/googleAnalytics.js
 * 2. Find this line:
 *    const GOOGLE_ANALYTICS_MEASUREMENT_ID = 'GOOGLE_ANALYTICS_MEASUREMENT_ID';
 * 3. Replace with your ID:
 *    const GOOGLE_ANALYTICS_MEASUREMENT_ID = 'G-XXXXXXXXXX';
 * 4. Save the file (Ctrl+S)
 * 
 * Example:
 * const GOOGLE_ANALYTICS_MEASUREMENT_ID = 'G-A1B2C3D4E5F6';
 */

/**
 * ✓ Google Analytics is now configured!
 */

// ============================================
// STEP 2: MICROSOFT CLARITY SETUP (5-10 mins)
// ============================================

/**
 * STEP 2.1: Create Clarity Account
 * 
 * 1. Open https://clarity.microsoft.com/ in your browser
 * 2. Click "Sign in with Microsoft"
 * 3. Sign in with your Microsoft account (or create one if needed)
 * 4. Accept the terms
 */

/**
 * STEP 2.2: Create a Project
 * 
 * 1. Click "New project"
 * 2. Enter your project name (e.g., "Portfolio")
 * 3. Enter your website URL (e.g., "https://yourname.com")
 * 4. Select your country
 * 5. Accept terms if prompted
 * 6. Click "Create"
 */

/**
 * STEP 2.3: Get Your Project ID
 * 
 * 1. After creating the project, you'll be on the project page
 * 2. Click "Settings" (gear icon or menu)
 * 3. Look for "Project ID" - it's a numeric string
 * 4. COPY THIS VALUE - You'll need it in the next step
 * 
 * Example Project ID:
 * 123456789a (10 characters, mix of numbers and letters)
 */

/**
 * STEP 2.4: Update Your Code
 * 
 * 1. Open: src/analytics/microsoftClarity.js
 * 2. Find this line:
 *    const MICROSOFT_CLARITY_PROJECT_ID = 'MICROSOFT_CLARITY_PROJECT_ID';
 * 3. Replace with your Project ID:
 *    const MICROSOFT_CLARITY_PROJECT_ID = 'nxxxxxxxxxx';
 * 4. Save the file (Ctrl+S)
 * 
 * Example:
 * const MICROSOFT_CLARITY_PROJECT_ID = 'n123456789a';
 */

/**
 * ✓ Microsoft Clarity is now configured!
 */

// ============================================
// STEP 3: LOCAL TESTING (5 mins)
// ============================================

/**
 * STEP 3.1: Create Environment File
 * 
 * 1. In your project root (my-portfolio/vite-project/)
 * 2. Create a new file: .env.local
 * 3. Add these lines:
 *    VITE_ENABLE_ANALYTICS=true
 *    VITE_ENABLE_CLARITY=true
 * 4. Save the file
 */

/**
 * STEP 3.2: Test Locally
 * 
 * 1. Open terminal in your project directory
 * 2. Run: npm run dev
 * 3. Open your browser to the local URL (usually http://localhost:5173)
 * 4. Open Developer Tools (F12)
 * 5. Go to Console tab
 * 6. Look for these messages:
 *    ✓ GA4 initialized successfully
 *    ✓ Microsoft Clarity initialized successfully
 *    📊 Analytics providers initialized
 * 
 * If you see these messages, analytics is working!
 */

/**
 * STEP 3.3: Verify Tracking
 * 
 * 1. In the same DevTools Console, you should see:
 *    Google Analytics is initialized
 *    Microsoft Clarity script is loaded
 * 
 * 2. Click around your site
 * 3. No errors should appear
 */

/**
 * ✓ Local testing complete!
 */

// ============================================
// STEP 4: DEPLOYMENT (10-15 mins)
// ============================================

/**
 * CHOOSE YOUR PLATFORM:
 * - Option A: Vercel (Recommended)
 * - Option B: Netlify
 */

/**
 * OPTION A: DEPLOY TO VERCEL
 * 
 * Prerequisites:
 * - GitHub account with your repo pushed
 * - Vercel account (free)
 * 
 * Steps:
 * 1. Go to https://vercel.com/
 * 2. Click "Sign up" and connect your GitHub
 * 3. Search for your portfolio repository
 * 4. Click "Import"
 * 5. Configure project:
 *    - Framework: Vite
 *    - Root Directory: ./vite-project (if needed)
 * 6. Go to "Environment Variables"
 * 7. Add these variables:
 *    - VITE_ENABLE_ANALYTICS = true
 *    - VITE_ENABLE_CLARITY = true
 * 8. Click "Deploy"
 * 9. Wait for deployment (usually 2-5 minutes)
 * 10. Your site will be live!
 * 
 * Note: Your IDs should already be in the code
 * (from Step 1.5 and Step 2.4)
 */

/**
 * OPTION B: DEPLOY TO NETLIFY
 * 
 * Prerequisites:
 * - GitHub account with your repo pushed
 * - Netlify account (free)
 * 
 * Steps:
 * 1. Go to https://netlify.com/
 * 2. Click "Sign up" and connect your GitHub
 * 3. Click "Add new site" > "Import an existing project"
 * 4. Select your GitHub repository
 * 5. Configure build settings:
 *    - Build command: npm run build
 *    - Publish directory: dist
 *    - Base directory: vite-project (if needed)
 * 6. Click "Advanced settings"
 * 7. Click "New variable"
 * 8. Add these environment variables:
 *    - VITE_ENABLE_ANALYTICS = true
 *    - VITE_ENABLE_CLARITY = true
 * 9. Click "Deploy site"
 * 10. Wait for deployment (usually 2-5 minutes)
 * 11. Your site will be live!
 */

/**
 * ✓ Your portfolio is now deployed and tracking!
 */

// ============================================
// STEP 5: VERIFY ANALYTICS (5-10 mins)
// ============================================

/**
 * VERIFY GOOGLE ANALYTICS:
 * 
 * 1. Go to https://analytics.google.com/
 * 2. Select your property
 * 3. Go to "Realtime" > "Overview"
 * 4. Share your portfolio URL with friends or post on social media
 * 5. You should see users appearing in real-time
 * 6. Click around your site to see page views
 * 
 * If nothing appears:
 * - Wait 24-48 hours for initial data collection
 * - Verify your Measurement ID is correct
 * - Check that analytics is not blocked by ad blocker
 */

/**
 * VERIFY MICROSOFT CLARITY:
 * 
 * 1. Go to https://clarity.microsoft.com/
 * 2. Select your project
 * 3. You'll see a dashboard
 * 4. Share your portfolio URL with friends
 * 5. After a few minutes, you should see:
 *    - Session count increasing
 *    - Heatmap data appearing
 *    - Scroll heatmap showing where users scroll
 * 
 * If nothing appears:
 * - Wait a few minutes for data collection
 * - Verify your Project ID is correct
 * - Check that Clarity script is loading (DevTools > Network tab)
 */

/**
 * ✓ Analytics setup is complete!
 */

// ============================================
// TROUBLESHOOTING
// ============================================

/**
 * Problem: "✓ GA4 initialized successfully" not showing in console
 * 
 * Solutions:
 * 1. Check that GOOGLE_ANALYTICS_MEASUREMENT_ID is set correctly
 * 2. Check that VITE_ENABLE_ANALYTICS=true in .env.local
 * 3. Clear browser cache (Ctrl+Shift+Delete)
 * 4. Restart dev server (npm run dev)
 * 5. Check for JavaScript errors in DevTools
 */

/**
 * Problem: Analytics page shows data but portfolio isn't included
 * 
 * Solutions:
 * 1. Wait 24-48 hours for initial data collection
 * 2. Manually visit your site from different devices
 * 3. Verify your domain is correctly configured in GA4
 * 4. Check that cookies are not blocked by browser
 */

/**
 * Problem: Microsoft Clarity not recording sessions
 * 
 * Solutions:
 * 1. Check that MICROSOFT_CLARITY_PROJECT_ID is set correctly
 * 2. Check that VITE_ENABLE_CLARITY=true in .env.local
 * 3. Verify domain matches in Clarity settings
 * 4. Allow popup/cookies for Clarity
 */

/**
 * Problem: "GDPR" or "Privacy" warnings
 * 
 * Solutions:
 * 1. Add a Privacy Policy to your site
 * 2. Disclose use of Google Analytics and Microsoft Clarity
 * 3. For EU visitors, consider adding cookie consent
 * 4. All analytics in this setup are GDPR-compliant by default
 */

// ============================================
// NEXT STEPS
// ============================================

/**
 * After successful setup, you can:
 * 
 * 1. Add analytics tracking to your components
 *    See: INTEGRATION_EXAMPLES.js
 * 
 * 2. Use the PortfolioStats component
 *    See: src/components/PortfolioStats.jsx
 * 
 * 3. Create custom dashboard
 *    Embed GA4 reports in your portfolio
 * 
 * 4. Set up goals and conversions
 *    Track specific actions like form submissions
 * 
 * 5. Monitor analytics regularly
 *    Check GA4 and Clarity dashboards weekly
 */

// ============================================
// QUICK REFERENCE
// ============================================

export const QUICK_REFERENCE = {
  step1: {
    title: 'Create GA4 Account',
    url: 'https://analytics.google.com/',
    time: '5-10 mins'
  },
  step2: {
    title: 'Create Clarity Project',
    url: 'https://clarity.microsoft.com/',
    time: '5-10 mins'
  },
  step3: {
    title: 'Update Configuration Files',
    files: [
      'src/analytics/googleAnalytics.js',
      'src/analytics/microsoftClarity.js'
    ],
    time: '5 mins'
  },
  step4: {
    title: 'Test Locally',
    command: 'npm run dev',
    time: '5 mins'
  },
  step5: {
    title: 'Deploy to Vercel/Netlify',
    time: '10-15 mins'
  },
  step6: {
    title: 'Verify in Dashboards',
    time: '5-10 mins'
  },
  totalTime: '45-60 mins'
};

export default {
  QUICK_REFERENCE
};
