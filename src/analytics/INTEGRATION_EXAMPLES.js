/**
 * ANALYTICS INTEGRATION EXAMPLES
 * 
 * This file shows how to integrate analytics tracking into your portfolio components.
 * Copy the relevant code snippets into your existing components.
 * 
 * Files to update:
 * - src/components/Projects.jsx
 * - src/components/Contact.jsx
 * - src/components/Skills.jsx
 * - src/components/Footer.jsx
 * - src/components/Navbar.jsx
 */

// ============================================
// EXAMPLE 1: Projects.jsx
// ============================================

/**
 * Add this to the top of your Projects.jsx:
 * 
 * import { useAnalytics } from '../analytics';
 * 
 * Inside your Projects component, add:
 * 
 * const Projects = () => {
 *   const { trackProjectView } = useAnalytics();
 * 
 *   const handleProjectClick = (projectName, projectId) => {
 *     // Track the project view
 *     trackProjectView(projectName, projectId);
 *   };
 * 
 *   return (
 *     // ...your existing JSX...
 *     // Add onClick handler to each project card:
 *     <div 
 *       onClick={() => handleProjectClick('Project Name', 'project-id')}
 *       // ...rest of your props
 *     >
 *       {/* Project content */}
 *     </div>
 *   );
 * };
 */

// ============================================
// EXAMPLE 2: Contact.jsx
// ============================================

/**
 * Add this to the top of your Contact.jsx:
 * 
 * import { useAnalytics } from '../analytics';
 * 
 * Inside your Contact component, add:
 * 
 * const Contact = () => {
 *   const { trackContactSubmission } = useAnalytics();
 * 
 *   const handleSubmit = async (e) => {
 *     e.preventDefault();
 *     
 *     try {
 *       // Your existing form submission code
 *       // ... send email, etc ...
 *       
 *       // Track the successful submission
 *       trackContactSubmission('email_form');
 *       
 *       // Show success message
 *     } catch (error) {
 *       console.error('Error:', error);
 *     }
 *   };
 * 
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       {/* Your existing form fields */}
 *     </form>
 *   );
 * };
 */

// ============================================
// EXAMPLE 3: Skills.jsx
// ============================================

/**
 * Add this to the top of your Skills.jsx:
 * 
 * import { useAnalytics } from '../analytics';
 * 
 * Inside your Skills component, add:
 * 
 * const Skills = () => {
 *   const { trackSkillInteraction } = useAnalytics();
 * 
 *   const handleSkillClick = (skillName, category) => {
 *     trackSkillInteraction(skillName, category);
 *   };
 * 
 *   return (
 *     // ...your existing JSX...
 *     // Add onClick handler to each skill:
 *     <button
 *       onClick={() => handleSkillClick('React', 'frontend')}
 *       // ...rest of your props
 *     >
 *       React
 *     </button>
 *   );
 * };
 */

// ============================================
// EXAMPLE 4: Footer.jsx
// ============================================

/**
 * Add this to the top of your Footer.jsx:
 * 
 * import { useAnalytics } from '../analytics';
 * 
 * Inside your Footer component, add:
 * 
 * const Footer = () => {
 *   const { trackSocialClick, trackDownload } = useAnalytics();
 * 
 *   const handleSocialClick = (platform, url) => {
 *     trackSocialClick(platform, url);
 *   };
 * 
 *   const handleResumeDownload = () => {
 *     trackDownload('pdf', 'resume.pdf');
 *     // Then trigger your download
 *   };
 * 
 *   return (
 *     // ...your existing JSX...
 *     // Add onClick handlers to social links:
 *     <a
 *       href="https://linkedin.com/in/yourprofile"
 *       onClick={() => handleSocialClick('linkedin', 'https://linkedin.com/in/yourprofile')}
 *       target="_blank"
 *       rel="noopener noreferrer"
 *     >
 *       LinkedIn
 *     </a>
 * 
 *     // Add onClick handler to resume download button:
 *     <button onClick={handleResumeDownload}>
 *       Download Resume
 *     </button>
 *   );
 * };
 */

// ============================================
// EXAMPLE 5: Navbar.jsx
// ============================================

/**
 * Add this to the top of your Navbar.jsx:
 * 
 * import { useAnalytics } from '../analytics';
 * 
 * Inside your Navbar component, add:
 * 
 * const Navbar = () => {
 *   const { trackPortfolioEvent } = useAnalytics();
 * 
 *   const handleNavigation = (sectionName) => {
 *     trackPortfolioEvent('navigation', sectionName, 'navigation');
 *   };
 * 
 *   return (
 *     // ...your existing JSX...
 *     // Add onClick handlers to navigation links:
 *     <a
 *       href="#about"
 *       onClick={() => handleNavigation('about')}
 *     >
 *       About
 *     </a>
 *     <a
 *       href="#projects"
 *       onClick={() => handleNavigation('projects')}
 *     >
 *       Projects
 *     </a>
 *   );
 * };
 */

// ============================================
// EXAMPLE 6: Adding PortfolioStats Component
// ============================================

/**
 * Add this to your App.jsx to include the statistics component:
 * 
 * import PortfolioStats from './components/PortfolioStats';
 * 
 * const App = () => {
 *   return (
 *     <>
 *       <Navbar />
 *       <Hero />
 *       <About />
 *       <Skills />
 *       
 *       {/* Add the statistics component here */}
 *       <PortfolioStats 
 *         title="Portfolio Statistics"
 *         subtitle="Here's what I've accomplished"
 *         stats={[
 *           {
 *             icon: '👁️',
 *             title: 'Portfolio Views',
 *             value: 2500,
 *             suffix: '+',
 *             description: 'Total visitors to this portfolio'
 *           },
 *           {
 *             icon: '🚀',
 *             title: 'Projects Completed',
 *             value: 15,
 *             suffix: '',
 *             description: 'Successfully delivered projects'
 *           },
 *           {
 *             icon: '📜',
 *             title: 'Certifications',
 *             value: 8,
 *             suffix: '',
 *             description: 'Professional certifications'
 *           },
 *           {
 *             icon: '💼',
 *             title: 'Internships',
 *             value: 3,
 *             suffix: '',
 *             description: 'Internship experiences'
 *           }
 *         ]}
 *       />
 *       
 *       <Projects />
 *       <Contact />
 *       <Footer />
 *     </>
 *   );
 * };
 */

// ============================================
// ADVANCED: Custom Analytics Hook
// ============================================

/**
 * You can create a custom hook for tracking specific interactions:
 * 
 * Create src/hooks/useProjectTracking.js:
 * 
 * import { useAnalytics } from '../analytics';
 * 
 * export const useProjectTracking = () => {
 *   const { trackProjectView, trackEvent } = useAnalytics();
 * 
 *   return {
 *     trackProjectView: (projectName, projectId) => {
 *       trackProjectView(projectName, projectId);
 *     },
 *     trackProjectDownload: (projectName) => {
 *       trackEvent('project_download', { project_name: projectName });
 *     },
 *     trackProjectShare: (projectName, platform) => {
 *       trackEvent('project_share', { 
 *         project_name: projectName,
 *         platform 
 *       });
 *     },
 *   };
 * };
 * 
 * Then use it in your component:
 * 
 * const Projects = () => {
 *   const { trackProjectView, trackProjectShare } = useProjectTracking();
 *   
 *   return (...);
 * };
 */

// ============================================
// COMPLETE EXAMPLE: Updated Projects Component
// ============================================

const COMPLETE_PROJECTS_EXAMPLE = `
import React from 'react';
import { motion } from 'framer-motion';
import { useAnalytics } from '../analytics';

const Projects = () => {
  const { trackProjectView } = useAnalytics();

  const projects = [
    {
      id: 'project-1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution',
      // ... other properties
    },
    // ... more projects
  ];

  const handleProjectClick = (project) => {
    // Track the project view
    trackProjectView(project.title, project.id);
    
    // Navigate to project details or external link
    // ... your navigation logic
  };

  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project)}
            whileHover={{ y: -5 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
`;

export default {
  COMPLETE_PROJECTS_EXAMPLE,
};
