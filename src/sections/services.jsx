import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt, FaCloud, FaRocket } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "Frontend Engineering",
    description: "Crafting blazing-fast, responsive, and intuitive web interfaces using React.js, Tailwind CSS, and modern interactive libraries.",
    icon: <FaReact className="text-2xl text-cyan-400" />,
    tags: ["React", "Tailwind CSS", "Vite", "UI/UX"],
  },
  {
    id: 2,
    title: "Backend & REST APIs",
    description: "Architecting secure, scalable backend solutions with Node.js and Express.js, featuring robust routing, authentication, and validation.",
    icon: <FaNodeJs className="text-2xl text-cyan-400" />,
    tags: ["Node.js", "Express", "REST", "JWT"],
  },
  {
    id: 3,
    title: "Database Architecture",
    description: "Structuring and optimizing high-performance databases with MongoDB and Supabase, ensuring fast querying and data integrity.",
    icon: <FaDatabase className="text-2xl text-cyan-400" />,
    tags: ["MongoDB", "Mongoose", "Supabase", "SQL/NoSQL"],
  },
  {
    id: 4,
    title: "Full Stack Web Apps",
    description: "Delivering end-to-end MERN stack solutions from initial architecture to final deployment, built for production reliability.",
    icon: <FaCloud className="text-2xl text-cyan-400" />,
    tags: ["MERN Stack", "CRUD", "Cloud API", "Full Lifecycle"],
  },
  {
    id: 5,
    title: "Mobile-First Design",
    description: "Designing seamless, touch-friendly interfaces that look and function impeccably across smartphones, tablets, and desktop displays.",
    icon: <FaMobileAlt className="text-2xl text-cyan-400" />,
    tags: ["Adaptive Layouts", "Cross-Browser", "Touch UX"],
  },
  {
    id: 6,
    title: "Performance & Security",
    description: "Optimizing bundle sizes, API response times, and web vitals, alongside secure data handling and authentication best practices.",
    icon: <FaRocket className="text-2xl text-cyan-400" />,
    tags: ["Optimization", "Web Vitals", "Security", "SEO"],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-[#090d16] py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Specialized Development <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-base mt-4">
            Comprehensive full-stack services engineered with modern industry standards.
          </p>
        </div>

        {/* Services Grid (30% Surface, 10% Accent) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#111827]/80 hover:bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-7 flex flex-col justify-between shadow-xl transition-all duration-300 group hover:shadow-cyan-500/5"
            >
              <div>
                {/* Icon Container with Accent Glow */}
                <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-950/70 group-hover:border-cyan-500/60 transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2.5">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-slate-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
