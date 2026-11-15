import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiDownload, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { SiGraphql, SiShopify } from 'react-icons/si';
import MyPhoto from '../assets/myphoto.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#090d16] overflow-hidden pt-28 pb-16 px-6"
    >
      {/* 60% Base Atmosphere: Ambient Glow & Subtle Grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">

        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-7/12 text-center md:text-left space-y-6"
        >
          {/* Status & Location Pill */}


          {/* Heading with Full Name */}
          <div className="space-y-2">
            <p className="text-sm font-mono uppercase tracking-widest text-cyan-400">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Muhammad <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Hashim Dawood
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-300">
              MERN Full-Stack Developer & Software Engineer
            </h2>
          </div>

          {/* Value proposition based on CV */}
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Full Stack Software Engineer with <span className="text-white font-medium">2+ years</span> of professional experience developing scalable web applications.
          </p>

          {/* Live Career Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
            <div className="p-3 rounded-xl bg-[#111827] border border-slate-800 text-center">
              <p className="text-2xl font-extrabold text-cyan-400">2+ Yrs</p>
              <p className="text-[11px] text-slate-400 font-medium">Experience</p>
            </div>
            <div className="p-3 rounded-xl bg-[#111827] border border-slate-800 text-center">
              <p className="text-2xl font-extrabold text-white">8+</p>
              <p className="text-[11px] text-slate-400 font-medium">Projects Shipped</p>
            </div>
            <div className="p-3 rounded-xl bg-[#111827] border border-slate-800 text-center">
              <p className="text-2xl font-extrabold text-cyan-400">3</p>
              <p className="text-[11px] text-slate-400 font-medium">Companies</p>
            </div>
            <div className="p-3 rounded-xl bg-[#111827] border border-slate-800 text-center">
              <p className="text-2xl font-extrabold text-white">BS CS</p>
              <p className="text-[11px] text-slate-400 font-medium">UCP Graduate</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Explore Projects</span>
              <FiArrowRight className="text-base" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#111827] hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-400 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <FiMail className="text-base" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Core Tech highlights */}
          <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-center md:justify-start gap-1.5 text-xs text-slate-400">
            <span className="text-slate-500 font-medium mr-1">Primary Stack:</span>
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL', 'Shopify Extensions', 'Supabase'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-[#111827] border border-slate-800 text-slate-300 font-mono text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Hero Visual / Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-5/12 flex justify-center relative"
        >
          {/* Subtle Ambient Backlight */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-3xl rounded-full -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

          {/* Image Frame with Glass Surface & Accent Border */}
          <div className="relative group">
            {/* Outer Accent Glow Border */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 opacity-30 group-hover:opacity-75 blur-md transition duration-500" />

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-[280px] h-[370px] sm:w-[320px] sm:h-[420px] rounded-3xl overflow-hidden bg-[#111827] border-2 border-slate-700/60 shadow-2xl shadow-black/80"
            >
              <img
                src={MyPhoto}
                alt="Muhammad Hashim Dawood - MERN Full-Stack Developer"
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Floating Shopify & GraphQL Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 px-4 py-2.5 rounded-2xl bg-[#111827]/95 border border-slate-700/80 shadow-xl backdrop-blur-md flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <SiShopify className="text-lg" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Expertise</p>
                <p className="text-xs font-bold text-slate-100">Full Stack</p>
              </div>
            </motion.div>

            {/* Floating Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden sm:flex absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl bg-[#111827]/95 border border-slate-700/80 shadow-xl backdrop-blur-md items-center gap-2"
            >
              <FiCheckCircle className="text-cyan-400 text-sm" />
              <span className="text-xs font-medium text-slate-200">2+ Years Production Exp.</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
