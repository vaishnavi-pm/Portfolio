import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaJava } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiVuedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiPhp,
  SiBootstrap,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiSqlite,
  SiOpencv,
  SiGooglegemini,
  SiGooglecolab,
  SiVercel,
  SiNetlify,
  SiCanva,
  SiFigma,
  SiOpenai,
  SiPython,
  SiLeetcode,
} from 'react-icons/si';
import wallImage from '../assets/wall2.jpg';
import './CoreSkills.css';

const Service = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const reduceMotion = useReducedMotion();

  const handleSkillCardPointerMove = (event) => {
    if (event.pointerType === 'touch' || reduceMotion) return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    card.style.setProperty('--tilt-x', `${(0.5 - y) * 8}deg`);
    card.style.setProperty('--tilt-y', `${(x - 0.5) * 8}deg`);
    card.style.setProperty('--light-x', `${x * 100}%`);
    card.style.setProperty('--light-y', `${y * 100}%`);
  };

  const resetSkillCardPointer = (event) => {
    ['--tilt-x', '--tilt-y', '--light-x', '--light-y'].forEach((property) => {
      event.currentTarget.style.removeProperty(property);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const githubProjects = [
    {
      id: 1,
      title: 'React Portfolio',
      description: 'A polished personal portfolio with animation, dark mode, and responsive UI.',
      skills: ['React', 'Vite', 'JSX', 'Tailwind CSS', 'Framer Motion', 'Responsive'],
      link: 'https://github.com/vaishnavi-pm/Portfolio',
      badge: 'Portfolio',
    },
    {
      id: 2,
      title: 'E-commerce UI',
      description: 'A full-stack clothing shopping platform with frontend and backend integration, featuring CRUD operations for product management and a seamless user experience.',
      skills: ['Laravel', 'PHP', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'Responsive'],
      link: 'https://github.com/vaishnavi-pm/Zaraa-Ecommerce',
      badge: 'UI/UX',
    },
    {
      id: 3,
      title: 'TRIPORA',
      description: 'A modern travel booking platform that helps users explore destinations, discover travel packages, and plan seamless journeys with a responsive and user-friendly experience.',
      skills: ['React', 'JavaScript', 'UX'],
      link: 'https://github.com/vaishnavi-pm/TRIPORA',
      badge: 'Productivity',
    },
    {
      id: 4,
      title: 'INVENTORY MANAGEMENT SYSTEM',
      description:
        'A Java Swing desktop application inspired by SAP Materials Management (SAP MM) concepts. It manages products, suppliers, customers, stock, purchases, sales, and user activity with automated inventory tracking.',
      skills: [
        'Java',
        'Java Swing',
        'MySQL',
        'JDBC',
        'SAP MM',
        'SQL'
      ],
      link: 'https://github.com/vaishnavi-pm/Inventory-Management-System-project',
      badge: 'Desktop App',
    },
    {
      id: 5,
      title: 'E-COMMERCE RECOMMENDATION MLOPS',
      description:
        'An end-to-end MLOps pipeline for an e-commerce product recommendation system, featuring model tracking, API deployment, containerization, and automated ML workflow management.',
      skills: [
        'Python',
        'Machine Learning',
        'FastAPI',
        'MLflow',
        'Docker',
        'MLOps'
      ],
      link: 'https://github.com/vaishnavi-pm/Ecommerce-Recommendation-MLOps',
      badge: 'MLOps',
    },
  ];

  const skillCategories = [
    {
      title: 'Database',
      accent: '#0ea5e9',
      skills: [
        { name: 'MySQL', icon: <SiMysql size={36} className="text-blue-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql size={36} className="text-blue-600" /> },
        { name: 'MongoDB', icon: <SiMongodb size={36} className="text-emerald-500" /> },
        { name: 'SQLite', icon: <SiSqlite size={36} className="text-slate-800" /> },
      ],
    },
    {
      title: 'Design Tools',
      accent: '#d946ef',
      skills: [
        { name: 'Photoshop', icon: <DiPhotoshop size={36} className="text-sky-600" /> },
        { name: 'Illustrator', icon: <DiIllustrator size={36} className="text-orange-500" /> },
        { name: 'Figma', icon: <SiFigma size={36} className="text-fuchsia-500" /> },
        { name: 'Canva', icon: <SiCanva size={36} className="text-cyan-500" /> },
      ],
    },
    {
      title: 'Cloud & DevOps',
      accent: '#06b6d4',
      skills: [
        { name: 'Vercel', icon: <SiVercel size={36} className="text-slate-900" /> },
        { name: 'Netlify', icon: <SiNetlify size={36} className="text-cyan-400" /> },
        { name: 'GitHub', icon: <SiGithub size={36} className="text-slate-950" /> },
        { name: 'VS Code', icon: <TbBrandVscode size={36} className="text-sky-500" /> },
      ],
    },
    {
      title: 'AI & ML',
      accent: '#6366f1',
      skills: [
        { name: 'OpenCV', icon: <SiOpencv size={36} className="text-sky-500" /> },
        { name: 'Gemini API', icon: <SiGooglegemini size={36} className="text-indigo-500" /> },
        { name: 'Google Colab', icon: <SiGooglecolab size={36} className="text-sky-500" /> },
        { name: 'OpenAI', icon: <SiOpenai size={36} className="text-fuchsia-500" /> },
      ],
    },
    {
      title: 'Programming Languages',
      accent: '#f97316',
      skills: [
        { name: 'Java', icon: <FaJava size={36} className="text-red-500" /> },
        { name: 'JavaScript', icon: <SiJavascript size={36} className="text-yellow-500" /> },
        { name: 'Python', icon: <SiPython size={36} className="text-sky-500" /> },
        { name: 'PHP', icon: <SiPhp size={36} className="text-blue-600" /> },
      ],
    },
    {
      title: 'Frameworks',
      accent: '#0891b2',
      skills: [
        { name: 'React', icon: <SiReact size={36} className="text-cyan-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs size={36} className="text-slate-100" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={36} className="text-sky-400" /> },
        { name: 'Vue.js', icon: <SiVuedotjs size={36} className="text-emerald-500" /> },
      ],
    },
    {
      title: 'Development Tools',
      accent: '#22c55e',
      skills: [
        { name: 'Git', icon: <SiGit size={36} className="text-orange-500" /> },
        { name: 'Node.js', icon: <SiNodedotjs size={36} className="text-[#8cc84b]" /> },
        { name: 'Express', icon: <SiExpress size={36} className="text-slate-900" /> },
        { name: 'Bootstrap', icon: <SiBootstrap size={36} className="text-sky-500" /> },
      ],
    },
    {
      title: 'CS Concepts',
      accent: '#f43f5e',
      skills: [
        { name: 'DSA', icon: <SiLeetcode size={36} className="text-orange-500" /> },
        { name: 'SQL', icon: <SiMysql size={36} className="text-blue-500" /> },
      ],
    },
  ];

  const visibleCategories =
    activeCategory === 'All'
      ? skillCategories
      : skillCategories.filter((category) => category.title === activeCategory);


  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-100 py-28">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-white" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-8xl font-bold tracking-tight text-slate-950">Web Works</h1>
                <p className="text-lg font-medium text-slate-600">Bringing bold ideas to life through code and creativity.</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                
                <div className="inline-flex items-center gap-6">
                  <a
                    href="https://github.com/vaishnavi-pm/Portfolio"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View GitHub project"
                    className="inline-flex items-center justify-center transition hover:text-black"
                  >
                    <FaGithub size={28} color="#000000" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourlinkedinid"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View LinkedIn profile"
                    className="inline-flex items-center justify-center transition hover:text-black"
                  >
                    <FaLinkedin size={28} color="#000000" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative rounded-[40px] border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60">
              <img
                src={wallImage}
                alt="Web service showcase"
                className="h-[520px] w-full rounded-[32px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 space-y-3 text-center md:space-y-4">
            <h2 className="text-4xl font-bold text-slate-100">Projects</h2>
            <p className="mx-auto max-w-2xl text-slate-100">
              Selected work that highlights polished UI, strong code structure, and responsive design.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {githubProjects.map((project) => (
              <article key={project.id} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                    {project.badge}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-slate-950 hover:text-slate-700"
                  >
                    Repo -&gt;
                  </a>
                </div>
                <h3 className="text-2xl font-semibold text-slate-950 mb-3">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    <section id="sectionSkills" className="core-skills-section py-16 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="mt-3 text-5xl font-bold bg-gradient-to-r from-slate-950 via-slate-700 to-slate-950 bg-clip-text text-transparent">My Core Skills</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Scroll through my expertise
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter skills by category">
          {['All', ...skillCategories.map((category) => category.title)].map((name) => {
            const active = activeCategory === name;

            return (
              <button
                key={name}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCategory(name)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 ${
                  active
                    ? 'border-cyan-600 bg-cyan-600 text-white'
                    : 'border-slate-200 bg-white/70 text-slate-700 hover:border-cyan-300 hover:text-cyan-800'
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>

        <div className="core-skills-grid grid auto-rows-fr grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.04 }}
                className={activeCategory === 'All' ? '' : 'sm:col-span-2 lg:col-span-2 lg:col-start-2'}
              >
                <article
                  onPointerMove={handleSkillCardPointerMove}
                  onPointerLeave={resetSkillCardPointer}
                  className="core-skill-card group relative flex h-full min-h-[27rem] flex-col overflow-hidden rounded-[32px] border border-white/70 bg-white/65 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-7"
                >
                  <div className="core-skill-glass-shine pointer-events-none absolute inset-0" />
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: category.accent }}
                  />

                  <div className="relative z-10 mb-6 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-700 drop-shadow-sm">
                        {category.title}
                      </p>
                      <h3 className="mt-2 break-words bg-gradient-to-r from-slate-950 to-slate-700 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                        {category.title}
                      </h3>
                    </div>
                    <span
                      className="grid h-8 min-w-8 place-items-center rounded-full px-2 text-xs font-bold text-white"
                      style={{ backgroundColor: category.accent }}
                    >
                      {category.skills.length}
                    </span>
                  </div>

                  <div className="relative z-10 grid flex-1 auto-rows-[7rem] grid-cols-2 content-start gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/card relative flex min-w-0 flex-col justify-between overflow-hidden rounded-[20px] border border-white/70 bg-white/55 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-lg transition-colors duration-300 hover:border-cyan-200"
                      >
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-cyan-100/20 opacity-70" />
                        <div className="core-skill-icon-depth relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100/80 text-slate-950 shadow-sm">
                          {skill.icon}
                        </div>
                        <p className="relative z-10 truncate text-sm font-semibold text-slate-900">
                          {skill.name}
                        </p>
                        <span
                          className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover/card:scale-x-100"
                          style={{ backgroundColor: category.accent }}
                        />
                      </div>
                    ))}
                  </div>
                </article>
              </motion.div>
          ))}
        </div>
      </div>
    </section>

    </main>
  );
};

export default Service;