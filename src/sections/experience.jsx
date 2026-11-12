import React, { useState, useRef, useEffect } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const experiences = [
  {
    company: "Savvy",
    role: "Backend Developer",
    period: "09/2026 – Present",
    location: "Lahore, Pakistan",
    type: "Current Role",
    description: "Spearheading backend architecture, API engineering, and e-commerce extensibility.",
    highlights: [
      "Architected and integrated high-throughput REST APIs and core application business logic.",
      "Engineered Shopify App Extensions utilizing GraphQL to deliver reliable, high-performance merchant solutions.",
      "Diagnosed and resolved critical technical bottlenecks across microservices and data pipelines.",
    ],
    tech: ["Node.js", "Express.js", "Shopify Extensions", "GraphQL", "REST APIs", "PostgreSQL"],
  },
  {
    company: "Spark logicX",
    role: "Full Stack Developer",
    period: "04/2026 – 08/2026",
    location: "Remote",
    type: "Full-Time Remote",
    description: "Built scalable full-stack applications with modern frontend frameworks and headless CMS architectures.",
    highlights: [
      "Developed high-conversion web applications utilizing React, Next.js, and NestJS.",
      "Engineered seamless integrations with headless CMS platforms and complex third-party external APIs.",
      "Built custom Shopify app extensions leveraging GraphQL for bespoke client workflows.",
    ],
    tech: ["React.js", "Next.js", "NestJS", "GraphQL", "Headless CMS", "Shopify"],
  },
  {
    company: "The Web Hunters",
    role: "Software Engineer – MERN Stack",
    period: "08/2024 – 11/2025",
    location: "Lahore, Pakistan",
    type: "On-Site",
    description: "Engineered and maintained end-to-end web applications with robust authentication and relational/NoSQL databases.",
    highlights: [
      "Engineered full-stack solutions using React.js, Next.js, TypeScript, Node.js, and Express.js.",
      "Designed database schemas and managed operations across MongoDB, PostgreSQL, and Supabase.",
      "Implemented secure JWT authentication, RBAC (Role-Based Access Control), and API performance optimization.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Supabase", "JWT"],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Single shared observer — only opacity + transform, no blur, no paint triggers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.index, 10);
            setActiveIndex(idx);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-25% 0px -25% 0px',
      }
    );

    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="relative bg-[#090d16] py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 text-base mt-4">
            2+ years of proven industry track record building scalable web apps, GraphQL services, and Shopify extensions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 md:ml-32 space-y-10">
          {experiences.map((exp, index) => {
            const isActive = activeIndex === index;
            const isDim = activeIndex !== null && !isActive;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className="relative pl-8 md:pl-10"
              >
                {/* Timeline Dot — only scale + border-color, no paint */}
                <div
                  className={`absolute -left-[17px] top-2 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10
                    transition-transform duration-300
                    ${isActive
                      ? 'border-cyan-400 bg-cyan-950 scale-125'
                      : 'border-slate-700 bg-[#090d16] scale-100'
                    }`}
                >
                  <FiBriefcase className={`text-xs transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                </div>

                {/* Date (desktop) — only opacity */}
                <div
                  className={`hidden md:block absolute -left-36 top-2 text-right w-28 text-xs font-mono transition-opacity duration-300 ${isActive ? 'text-cyan-400 opacity-100' : 'text-slate-500 opacity-40'
                    }`}
                >
                  {exp.period}
                </div>

                {/* Card — ONLY transform + opacity (compositor-only, zero repaint) */}
                <div
                  className={`relative rounded-2xl border p-6 sm:p-8 shadow-xl
                    transition-[transform,opacity,border-color,background-color] duration-400 ease-out
                    ${isActive
                      ? 'bg-[#111827] border-cyan-500/50 opacity-100 translate-y-0 scale-100'
                      : isDim
                        ? 'bg-[#0f1623] border-slate-800/40 opacity-30 translate-y-0 scale-[0.98]'
                        : 'bg-[#111827]/85 border-slate-800/90 opacity-100 scale-100'
                    }`}
                  style={{ willChange: 'transform, opacity' }}
                >
                  {/* Active left accent bar */}
                  <div
                    className={`absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-gradient-to-b from-cyan-400 to-blue-600
                      transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  />

                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-white'}`}>
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-base font-semibold text-cyan-400">{exp.company}</span>
                        <span className="text-slate-600">&bull;</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <FiMapPin className="text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                      <span className={`w-1.5 h-1.5 rounded-full bg-cyan-400 ${isActive ? 'animate-pulse' : ''}`} />
                      {exp.type}
                    </span>
                  </div>

                  {/* Mobile date */}
                  <div className="md:hidden flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-4">
                    <FiCalendar className="text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        <FiCheckCircle className={`text-sm mt-0.5 flex-shrink-0 transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-slate-700'}`} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-md border transition-colors duration-300 ${isActive
                            ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300'
                            : 'bg-slate-900 border-slate-800 text-slate-500'
                          }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
