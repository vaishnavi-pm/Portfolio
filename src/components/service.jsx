import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaJava } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
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
      skills: [
        { name: 'MySQL', icon: <SiMysql size={36} className="text-blue-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql size={36} className="text-blue-600" /> },
        { name: 'MongoDB', icon: <SiMongodb size={36} className="text-emerald-500" /> },
        { name: 'SQLite', icon: <SiSqlite size={36} className="text-slate-800" /> },
      ],
    },
    {
      title: 'Design Tools',
      skills: [
        { name: 'Photoshop', icon: <DiPhotoshop size={36} className="text-sky-600" /> },
        { name: 'Illustrator', icon: <DiIllustrator size={36} className="text-orange-500" /> },
        { name: 'Figma', icon: <SiFigma size={36} className="text-fuchsia-500" /> },
        { name: 'Canva', icon: <SiCanva size={36} className="text-cyan-500" /> },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Vercel', icon: <SiVercel size={36} className="text-slate-900" /> },
        { name: 'Netlify', icon: <SiNetlify size={36} className="text-cyan-400" /> },
        { name: 'GitHub', icon: <SiGithub size={36} className="text-slate-950" /> },
        { name: 'VS Code', icon: <TbBrandVscode size={36} className="text-sky-500" /> },
      ],
    },
    {
      title: 'AI & ML',
      skills: [
        { name: 'OpenCV', icon: <SiOpencv size={36} className="text-sky-500" /> },
        { name: 'Gemini API', icon: <SiGooglegemini size={36} className="text-indigo-500" /> },
        { name: 'Google Colab', icon: <SiGooglecolab size={36} className="text-sky-500" /> },
        { name: 'OpenAI', icon: <SiOpenai size={36} className="text-fuchsia-500" /> },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: <FaJava size={36} className="text-red-500" /> },
        { name: 'JavaScript', icon: <SiJavascript size={36} className="text-yellow-500" /> },
        { name: 'Python', icon: <SiPython size={36} className="text-sky-500" /> },
        { name: 'PHP', icon: <SiPhp size={36} className="text-blue-600" /> },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React', icon: <SiReact size={36} className="text-cyan-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs size={36} className="text-slate-100" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={36} className="text-sky-400" /> },
        { name: 'Vue.js', icon: <SiVuedotjs size={36} className="text-emerald-500" /> },
      ],
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'Git', icon: <SiGit size={36} className="text-orange-500" /> },
        { name: 'Node.js', icon: <SiNodedotjs size={36} className="text-[#8cc84b]" /> },
        { name: 'Express', icon: <SiExpress size={36} className="text-slate-900" /> },
        { name: 'Bootstrap', icon: <SiBootstrap size={36} className="text-sky-500" /> },
      ],
    },
    {
      title: 'CS Concepts',
      skills: [
        { name: 'DSA', icon: <SiLeetcode size={36} className="text-orange-500" /> },
      ],
    },
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

    <section id="sectionSkills" className="py-16 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <ScrollStack
        className="bg-transparent"
        itemDistance={120}
        itemScale={0.08}
        itemStackDistance={20}
        stackPosition="15%"
        scaleEndPosition="5%"
        baseScale={0.92}
        rotationAmount={0}
        blurAmount={0}
        useWindowScroll={true}
      >
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-6 w-full">
          <div className="mb-8 text-center">
            <h2 className="mt-3 text-5xl font-bold bg-gradient-to-r from-slate-950 via-slate-700 to-slate-950 bg-clip-text text-transparent">My Core Skills</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
              Scroll through my expertise
            </p>
          </div>
        </div>

        {skillCategories.map((category) => (
          <ScrollStackItem key={category.title}>
            <div className="flex items-center justify-center min-h-screen w-full px-6">
              <article className="group relative overflow-hidden rounded-[40px] border border-slate-200 bg-white p-10 shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition-all duration-700 w-full max-w-5xl">

                {/* Animated Background Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 transition-opacity duration-500" />

                {/* Header Section */}
                <div className="relative mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] font-bold text-cyan-600 drop-shadow-sm">{category.title}</p>
                    <h3 className="mt-2 text-4xl font-bold bg-gradient-to-r from-slate-950 to-slate-700 bg-clip-text text-transparent">{category.title}</h3>
                  </div>
                  <div className="hidden lg:flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-500">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="relative grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={skill.name}
                      className="group/card relative overflow-hidden rounded-[24px] border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white px-3 py-4 transition-all duration-300 hover:border-slate-300 hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)] hover:scale-105 cursor-pointer"
                      style={{
                        transitionDelay: `${idx * 50}ms`,
                      }}
                    >
                      {/* Card Background Shimmer */}
                      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 transition-opacity duration-500" />

                      {/* Icon Container */}
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-slate-100 to-slate-200 text-slate-950 shadow-md group-hover/card:shadow-lg group-hover/card:scale-110 transition-all duration-300">
                        {skill.icon}
                        <div className="absolute inset-0 rounded-[18px] opacity-0 group-hover/card:opacity-20 bg-gradient-to-br from-white to-slate-100 transition-opacity duration-300" />
                      </div>

                      {/* Text Content */}
                      <div className="relative mt-3">
                        <p className="text-base font-bold text-slate-950 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r from-slate-950 to-slate-700 transition-all duration-300">
                          {skill.name}
                        </p>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-center" />
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>

    </main>
  );
};

export default Service;