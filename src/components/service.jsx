import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaJava } from 'react-icons/fa';
import {
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiVuedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFramer,
  SiJavascript,
  SiPhp,
  SiSass,
  SiBootstrap,
  SiPostgresql,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import wallImage from '../assets/wall2.jpg';

const Service = () => {

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
      title: 'EMERGENCY BLOOD DONOR',
      description: 'A web-based blood donor management platform built to connect donors and recipients quickly during emergencies, enabling efficient donor registration, search, and request management.',
      skills: ['Laravel', 'PHP', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'MySQL'],
      link: 'https://github.com/vaishnavi-pm?tab=repositories',
      badge: 'Productivity',
    },
    
  ];

  const coreSkills = [
    { name: 'React', icon: <SiReact size={36} className="text-cyan-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={36} className="text-sky-400" /> },
    { name: 'Vue.js', icon: <SiVuedotjs size={36} className="text-emerald-500" /> },
    { name: 'MySQL', icon: <SiMysql size={36} className="text-blue-500" /> },
    { name: 'HTML', icon: <SiHtml5 size={36} className="text-orange-500" /> },
    { name: 'CSS', icon: <SiCss size={36} className="text-sky-500" /> },
    { name: 'Framer Motion', icon: <SiFramer size={36} className="text-violet-500" /> },
    { name: 'JavaScript', icon: <SiJavascript size={36} className="text-yellow-500" /> },
    { name: 'PHP', icon: <SiPhp size={36} className="text-blue-600" /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={36} className="text-sky-500" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={36} className="text-blue-600" /> },
    { name: 'Git', icon: <SiGit size={36} className="text-orange-500" /> },
    { name: 'GitHub', icon: <SiGithub size={36} className="text-slate-100" /> },
    { name: 'Java', icon: <FaJava size={36} className="text-red-500" /> },
    { name: 'SCSS', icon: <SiSass size={36} className="text-pink-500" /> },
  ];



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
              <div className="flex flex-wrap items-center gap-4">
                
                <div className="inline-flex items-center gap-3">
                  <a
                    href="https://github.com/vaishnavi-pm/Portfolio"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View GitHub project"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourlinkedinid"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View LinkedIn profile"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800"
                  >
                    <FaLinkedin size={20} />
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

      <section id="sectionSkills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Core Skills</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950">My Core Skills</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              I specialize in building web projects with the strongest foundational tools and modern frontend workflows.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg shadow-slate-200/50">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100">
                  {skill.icon}
                </div>
                <p className="text-lg font-semibold text-slate-950">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Service;