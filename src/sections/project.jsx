import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';
import Ecomrece from '../assets/ecommerce.jpg';
import Saas from '../assets/Saas.jpg';
import Saas1 from '../assets/Saas1.jpg';
import Freelancer from '../assets/freelancer.png';
import Bigstream from '../assets/Bigstream.png';
import Portfolio from '../assets/portfolio.jpg';
import ChatAppPic from '../assets/chatApp.jpg';
import Blog from '../assets/blog.jpg';

const projects = [
  {
    id: 1,
    title: "Misgenie",
    category: "React",
    description: "Enterprise web application crafted with Ant Design component system, Redux Toolkit state orchestration, and Supabase cloud data storage for seamless real-time workflows.",
    image: Saas1,
    tech: ["React.js", "Ant Design", "Redux Toolkit", "Supabase"],
    link: "https://misgenie.com/",
    github: "https://github.com/ChHashim88",
    featured: true,
  },
  {
    id: 2,
    title: "AI-Powered CV Builder",
    category: "Next.js",
    description: "Intelligent curriculum vitae builder allowing users to design, customize, and export ATS-compliant resumes with real-time Supabase synchronization.",
    image: Saas,
    tech: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    link: "https://cv-maker-h-squad.vercel.app/",
    github: "https://github.com/ChHashim88",
    featured: true,
  },
  {
    id: 3,
    title: "Aaagain Platform",
    category: "Full Stack",
    description: "Full-featured web platform built with modern frontend frameworks, robust REST APIs, and enterprise-grade state management for seamless user experience.",
    image: ChatAppPic,
    tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
    link: "https://aaagain-web-frontend.vercel.app/",
    github: "https://github.com/ChHashim88",
    featured: true,
  },
  {
    id: 4,
    title: "Freelancers U.A.E.",
    category: "Full Stack",
    description: "Regional freelance marketplace connecting enterprise clients with elite talent across the United Arab Emirates with profile showcases and secure hiring flows.",
    image: Freelancer,
    tech: ["React.js", "Node.js", "Supabase", "REST APIs"],
    link: "https://freelancers-uae.com/",
    github: "https://github.com/ChHashim88",
    featured: false,
  },
  {
    id: 5,
    title: "Big Stream",
    category: "React",
    description: "Low-latency media streaming web application built with responsive video playback, custom player controls, and an extensive catalog indexing system.",
    image: Bigstream,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://www.bigstream.to/",
    github: "https://github.com/ChHashim88",
    featured: false,
  },
  {
    id: 6,
    title: "Glens Geelong",
    category: "Next.js",
    description: "Commercial web application integrated with headless CMS architecture for high-speed dynamic page generation, SEO optimization, and search engine indexing.",
    image: Ecomrece,
    tech: ["Next.js", "Headless CMS", "React.js", "Tailwind CSS"],
    link: "https://glens-website.vercel.app/",
    github: "https://github.com/ChHashim88",
    featured: false,
  },
];

const categories = ["All", "Full Stack", "Next.js", "React"];

// Helper: does project have a real live link (not GitHub placeholder)?
const isLive = (url) => url && !url.includes("github.com");

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="relative bg-[#090d16] py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
            Portfolio & Code
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-base mt-4">
            Production web applications, e-commerce engines, and platforms built across my career.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${selectedFilter === cat
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25"
                : "bg-[#111827] text-slate-400 hover:text-white border border-slate-800"
                }`}
            >
              {cat} {cat === "All" ? `(${projects.length})` : `(${projects.filter(p => p.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-[#111827]/85 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group transition-all duration-300 hover:shadow-cyan-500/10"
            >
              <div>
                {/* Image Container with Zoom & Overlay */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />

                  {/* Category Pill Tag + Live Badge */}
                  <div className="absolute top-3 left-3 flex gap-2">

                    {isLive(project.link) && (
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/50 text-emerald-300 backdrop-blur-md flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                        Live
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{isLive(project.link) ? "View Live Site" : "Project Details"}</span>
                  <FiExternalLink className="text-sm" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <FiGithub className="text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
