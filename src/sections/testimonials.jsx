import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Alex Turner",
    role: "Product Lead",
    company: "TechNova Solutions",
    feedback: "Hashim delivered exceptional quality on our full-stack application. His ability to understand complex requirements and execute with clean, scalable code saved our team weeks of work.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Founder",
    company: "Creative Pulse Studio",
    feedback: "Outstanding communication, proactive problem solving, and great attention to detail. Hashim turned our design concepts into a snappy, responsive web experience effortlessly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Engineering Manager",
    company: "ScaleFlow Systems",
    feedback: "A dependable full-stack engineer. The MERN stack backend and custom APIs he developed are fast, well-documented, and rock-solid in production.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-[#090d16] py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
            Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Client <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Feedback</span>
          </h2>
          <p className="text-slate-400 text-base mt-4">
            Hear from founders, product teams, and engineering leaders I've collaborated with.
          </p>
        </div>

        {/* Testimonials Grid (30% Surface, 10% Accent) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#111827]/80 hover:bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-8 flex flex-col justify-between shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-cyan-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-xs" />
                    ))}
                  </div>
                  <FaQuoteLeft className="text-slate-700 group-hover:text-cyan-500/40 transition-colors text-lg" />
                </div>

                {/* Quote Content */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{item.feedback}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400 text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role} &middot; <span className="text-cyan-400/90">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
