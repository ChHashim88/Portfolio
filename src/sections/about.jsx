import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiZap, FiLayout, FiCheck, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const highlights = [
  {
    icon: <FiLayers className="text-xl text-cyan-400" />,
    title: 'Scalable Full-Stack Engineering',
    desc: '2+ years developing enterprise web applications with React, Next.js, TypeScript, and NestJS.',
  },
  {
    icon: <FiZap className="text-xl text-cyan-400" />,
    title: 'APIs, GraphQL & Shopify',
    desc: 'Deep specialization building high-throughput REST APIs, GraphQL services, and custom Shopify app extensions.',
  },
  {
    icon: <FiLayout className="text-xl text-cyan-400" />,
    title: 'Relational & NoSQL Databases',
    desc: 'Robust schema design, migrations, and indexing across PostgreSQL, SQL, MongoDB, and Supabase.',
  },
];

const skills = [
  'React.js',
  'Next.js',
  'TypeScript',
  'JavaScript (ES6+)',
  'Node.js',
  'Express.js',
  'Nest.js',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Supabase',
  'Tailwind CSS',
  'Redux Toolkit',
  'Ant Design',
  'Shopify App Extensions',
  'Docker (Learning)',
];

const About = () => {
  return (
    <section id="about" className="relative bg-[#090d16] py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Crafting Resilient Code with <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Engineering Precision</span>
          </h2>
        </div>

        {/* Main Content Card (30% Surface) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111827]/70 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Corner Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Muhammad Hashim Dawood</span>, a Full Stack Software Engineer with <span className="text-cyan-400 font-medium">2+ years of professional experience</span> architecting scalable web applications across fast-paced product companies.
              </p>
              <p className="text-slate-400 text-base">
                My engineering repertoire spans the modern JavaScript/TypeScript ecosystem — building responsive frontends with <span className="text-slate-200">React and Next.js</span>, architecting resilient backends with <span className="text-slate-200">Node.js, Express, and NestJS</span>, and crafting high-performance database layers across <span className="text-slate-200">PostgreSQL, MongoDB, and Supabase</span>.
              </p>
              <p className="text-slate-400 text-base">
                Having engineered backend services at <span className="text-cyan-400 font-medium">Savvy</span>, full-stack systems at <span className="text-cyan-400 font-medium">Spark logicX</span>, and MERN applications at <span className="text-cyan-400 font-medium">The Web Hunters</span>, I focus on building maintainable, high-throughput software that solves real business problems.
              </p>

              {/* Skills Tags */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Key Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      <FiCheck className="text-cyan-400 text-xs" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Highlights Column */}
            <div className="md:col-span-5 flex flex-col gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#111827] border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Contact snippet in About */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-cyan-400" />
                  <span>Johar Town, Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMail className="text-cyan-400" />
                  <span>ch.hashimdawood@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone className="text-cyan-400" />
                  <span>03105120388</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
