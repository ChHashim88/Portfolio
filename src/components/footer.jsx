import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070a10] border-t border-slate-800/80 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand & Rights */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-cyan-500/20">
            HD
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-200">
              Muhammad Hashim Dawood <span className="text-slate-500 font-normal">&middot; MERN Full-Stack Developer</span>
            </p>
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Johar Town, Lahore, Pakistan.
            </p>
          </div>
        </div>

        {/* Social Links & Back To Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ChHashim88"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-[#111827] border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <FiGithub className="text-base" />
          </a>
          <a
            href="https://www.linkedin.com/in/hashim-dawood-a8aab3277"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-[#111827] border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <FiLinkedin className="text-base" />
          </a>
          <a
            href="mailto:ch.hashimdawood@gmail.com"
            aria-label="Email"
            className="p-2.5 rounded-xl bg-[#111827] border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <FiMail className="text-base" />
          </a>
          <a
            href="tel:03105120388"
            aria-label="Phone"
            className="p-2.5 rounded-xl bg-[#111827] border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <FiPhone className="text-base" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="ml-2 p-2.5 rounded-xl bg-[#111827] border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            title="Back to top"
          >
            <FiArrowUp className="text-base" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
