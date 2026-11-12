import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiCloud,
  FiCheck,
} from 'react-icons/fi';

const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: <FiCode className="text-xl text-cyan-400" />,
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", status: "Core" },
      { name: "TypeScript", level: "Advanced", status: "Core" },
      { name: "Python", level: "Foundational", status: "Learning" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <FiLayout className="text-xl text-cyan-400" />,
    skills: [
      { name: "React.js", level: "Expert", status: "Core" },
      { name: "Next.js", level: "Advanced", status: "Core" },
      { name: "Nest.js", level: "Intermediate", status: "Active" },
      { name: "Redux Toolkit", level: "Advanced", status: "State" },
      { name: "Tailwind CSS", level: "Expert", status: "UI/UX" },
      { name: "Ant Design", level: "Advanced", status: "Component" },
      { name: "Material UI", level: "Proficient", status: "Component" },
    ],
  },
  {
    id: "backend",
    title: "Backend & API Architecture",
    icon: <FiServer className="text-xl text-cyan-400" />,
    skills: [
      { name: "Node.js", level: "Expert", status: "Core" },
      { name: "Express.js", level: "Expert", status: "Core" },
      { name: "REST APIs", level: "Expert", status: "Architecture" },
      { name: "GraphQL", level: "Advanced", status: "Query API" },
      { name: "JWT Auth", level: "Advanced", status: "Security" },
      { name: "RBAC (Access Control)", level: "Advanced", status: "Security" },
    ],
  },
  {
    id: "database",
    title: "Databases & Storage",
    icon: <FiDatabase className="text-xl text-cyan-400" />,
    skills: [
      { name: "PostgreSQL", level: "Advanced", status: "Relational" },
      { name: "SQL", level: "Advanced", status: "Querying" },
      { name: "MongoDB", level: "Expert", status: "NoSQL" },
      { name: "Supabase", level: "Advanced", status: "BaaS & Auth" },
    ],
  },
  {
    id: "tools",
    title: "Cloud, DevOps & Tooling",
    icon: <FiCloud className="text-xl text-cyan-400" />,
    skills: [
      { name: "Vercel", level: "Proficient", status: "Deployment" },
      { name: "Netlify", level: "Proficient", status: "Deployment" },
      { name: "Postman", level: "Advanced", status: "API Testing" },
      { name: "GitHub", level: "Advanced", status: "VCS" },
      { name: "GitLab", level: "Proficient", status: "CI/CD" },
      { name: "Docker", level: "Foundational", status: "Learning" },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="relative bg-[#090d16] py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skill Matrix</span>
          </h2>
          <p className="text-slate-400 text-base mt-4">
            Categorized technical stack honed over 2+ years of production engineering.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${activeTab === "all"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25"
                : "bg-[#111827] text-slate-400 hover:text-white border border-slate-800"
              }`}
          >
            All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${activeTab === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25"
                  : "bg-[#111827] text-slate-400 hover:text-white border border-slate-800"
                }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#111827]/85 border border-slate-800/85 hover:border-cyan-500/40 rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500">
                      {category.skills.length} competencies
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/70 hover:border-slate-700 transition"
                    >
                      <div className="flex items-center gap-2">
                        <FiCheck className="text-cyan-400 text-xs" />
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded ${skill.status === "Learning"
                              ? "bg-amber-950/60 border border-amber-500/30 text-amber-300"
                              : "bg-cyan-950/50 border border-cyan-500/30 text-cyan-300"
                            }`}
                        >
                          {skill.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

