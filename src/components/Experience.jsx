import { useEffect } from 'react';

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      company: 'Titan Company Limited, Hosur',
      role: 'SAP Digital',
      duration: 'May 2026 - June 2026',
      description:
        'Gained hands-on experience in SAP and learned enterprise business workflows in a corporate environment. Collaborated with professionals to understand how technology supports business operations and improved teamwork and communication skills.',
    },
    {
      company: 'Friendszion Technologies',
      role: 'Web Development Intern',
      duration: 'April 2025 - June 2025',
      description:
        'Developed responsive web pages using HTML, CSS, and JavaScript while improving website performance through code optimization. Integrated REST APIs and collaborated with an Agile team to build user-friendly and dynamic web applications.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#05060f] text-white">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_20%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Experience</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              My Experience
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
              Here's a quick look at my internship experience and the skills I gained.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <div className="hidden md:block absolute right-8 top-10 text-[130px] font-bold text-white/5">01</div>
            <div className="relative space-y-8">
              {experiences.map((item) => (
                <div
                  key={item.company}
                  className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/85 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.45)]"
                >
                  <div className="absolute left-8 top-8 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_0_12px_rgba(56,189,248,0.16)]" />
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.company}</span>
                  <h2 className="mt-4 text-2xl font-semibold text-white">{item.role}</h2>
                  <p className="mt-2 text-sm text-slate-400">{item.duration}</p>
                  <p className="mt-4 text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
