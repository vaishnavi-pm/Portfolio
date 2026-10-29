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
      image: 'https://via.placeholder.com/400x300?text=SAP+Digital+Experience',
      tags: ['SAP', 'Enterprise', 'Business'],
    },
    {
      company: 'Friendszion Technologies',
      duration: 'April 2025 - June 2025',
      description:
        'Developed responsive web pages using HTML, CSS, and JavaScript while improving website performance through code optimization. Integrated REST APIs and collaborated with an Agile team to build user-friendly and dynamic web applications.',
      tags: ['MERN Stack', 'Full Stack', 'REST APIs'],
    },
  ];

  const clubActivities = [
    {
      id: 2,
      name: 'Photoshop',
      description: 'Photo Editing & Design',
      logo: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      id: 3,
      name: 'Adobe Illustrator',
      description: 'Vector Graphics & Illustration',
      logo: 'https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc.svg',
      color: 'from-orange-400 to-orange-600',
    },
  ];

  return (
    <main className="min-h-screen bg-[#05060f] text-white">
      {/* Experience Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_20%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Experience</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              My Professional Journey
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
              Here's a quick look at my internship experience and the skills I gained.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-sky-400 to-purple-500" />

            <div className="relative space-y-12">
              {experiences.map((item) => (
                <div key={item.company} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 h-4 w-4 -translate-x-1/2 rounded-full bg-sky-400 ring-4 ring-[#05060f]" />

                  {/* Content - Centered */}
                  <div className="flex justify-center">
                    {/* Content Side */}
                    <div className="w-full lg:w-3/4 pt-4">
                      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/85 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.45)]">
                        <span className="text-xs uppercase tracking-[0.3em] text-sky-400 font-semibold">{item.company}</span>
                        <h2 className="mt-4 text-2xl font-semibold text-white">{item.role}</h2>
                        <p className="mt-2 text-sm text-slate-400">{item.duration}</p>
                        <p className="mt-4 text-slate-300 leading-relaxed">{item.description}</p>
                        
                        {/* Tags */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs rounded-full bg-sky-400/10 text-sky-300 border border-sky-400/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Club Activities Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.12),_transparent_25%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500 font-semibold">Creative Expertise</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Design Toolkit
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
              Professional design tools I master for creating stunning visual content.
            </p>
          </div>

          {/* Premium Timeline for Tools */}
          <div className="relative">
            <div className="relative flex justify-center gap-16 flex-wrap max-w-2xl mx-auto">
              {clubActivities.map((activity) => (
                <div key={activity.id} className="relative group">
                  {/* Compact Premium Card */}
                  <div className="relative flex flex-col items-center">
                    {/* Logo Square Box */}
                    <div className={`w-28 h-28 rounded-[16px] bg-gradient-to-br ${activity.color} p-4 mb-4 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer border border-white/10`}>
                      <img
                        src={activity.logo}
                        alt={activity.name}
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    </div>

                    {/* Tool Name Below */}
                    <h3 className="text-xl font-bold text-white text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-orange-500 transition-all duration-300">
                      {activity.name}
                    </h3>
                  </div>
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
