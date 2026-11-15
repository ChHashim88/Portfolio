import React from 'react';
import { motion } from 'framer-motion';
import {
  FiAward,
  FiCalendar,
  FiMapPin,
  FiBookOpen,
  FiCompass,
  FiActivity,
} from 'react-icons/fi';
import { IoGameControllerOutline } from 'react-icons/io5';
import { LuDumbbell } from 'react-icons/lu';
import { TbPuzzleFilled } from 'react-icons/tb';

const interests = [
  {
    title: "Exploring Technologies",
    desc: "Constantly testing emerging frameworks, AI tools, and architectural patterns.",
    icon: <FiCompass className="text-2xl text-cyan-400" />,
    badge: "Continuous Learning",
  },
  {
    title: "Competitive Gaming",
    desc: "Sharpening strategic decision making, quick reflexes, and teamwork dynamics.",
    icon: <IoGameControllerOutline className="text-2xl text-cyan-400" />,
    badge: "Tactics & Focus",
  },
  {
    title: "Algorithmic Problem-Solving",
    desc: "Dissecting complex logic, data structures, and optimizing algorithmic execution.",
    icon: <TbPuzzleFilled className="text-2xl text-cyan-400" />,
    badge: "Logic & Code",
  },
  {
    title: "Fitness & Gym Training",
    desc: "Building mental resilience, disciplined routines, and high energy for daily output.",
    icon: <LuDumbbell className="text-2xl text-cyan-400" />,
    badge: "Discipline",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative bg-[#090d16] py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
            Academic & Passions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Interests</span>
          </h2>
          <p className="text-slate-400 text-base mt-4">
            Formal computer science foundation complemented by discipline, logic, and active lifestyle.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Education Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#111827]/85 border border-slate-800/90 rounded-2xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <FiAward className="text-2xl" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                  Completed Degree
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2">
                BS in Computer Science
              </h3>
              <p className="text-cyan-400 font-semibold text-base mb-4">
                University Of Central Punjab (UCP)
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-slate-500" />
                  <span>10/2020 – 07/2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-slate-500" />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Comprehensive study covering Data Structures & Algorithms, Database Systems, Software Engineering, Object-Oriented Programming, and Web Architectures.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <FiBookOpen className="text-cyan-400" />
              <span>4-Year Accredited Undergraduate Degree</span>
            </div>
          </motion.div>

          {/* Interests Grid (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {interests.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#111827]/85 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-900/90 shadow-xl group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Creative quote badge */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="italic">
                "Writing clean code during the day, maintaining physical discipline & curiosity around the clock."
              </span>
              <FiActivity className="text-cyan-400 flex-shrink-0 ml-3 text-base" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

