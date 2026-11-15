import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { insertContactApi } from '../services/contactService';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const { success, error } = await insertContactApi(formData);

      if (success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been delivered to Muhammad Hashim Dawood.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: error?.message || 'Could not deliver message. Please reach out via email directly.',
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Could not send message. Please contact via direct email.',
      });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 7000);
    }
  };

  return (
    <section id="contact" className="relative bg-[#090d16] py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Discuss Your Next <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="text-slate-400 text-base mt-4">
            Available for full-time engineering roles, contract development, and custom Shopify / MERN integrations.
          </p>
        </div>

        {/* Contact Layout: 2 Columns */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Direct Contacts</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reach out anytime for developer inquiries, consultation, or software collaborations. I respond promptly within 24 hours.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              <a
                href="mailto:ch.hashimdawood@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#111827]/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500">Email Address</p>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    ch.hashimdawood@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:03105120388"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#111827]/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500">Direct Phone</p>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    03105120388 (+92 310 5120388)
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111827]/80 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500">Current Location</p>
                  <p className="text-sm font-semibold text-slate-200">Johar Town, Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Quick Profile Links */}
            <div className="pt-2">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">Professional Channels</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/ChHashim88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#111827] border border-slate-800 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
                >
                  <span>GitHub Profile</span>
                  <FiArrowUpRight className="text-xs" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hashim-dawood-a8aab3277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#111827] border border-slate-800 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
                >
                  <span>LinkedIn Profile</span>
                  <FiArrowUpRight className="text-xs" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphic Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#111827]/90 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-8 sm:p-10 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  Your Full Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  required
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="e.g. alex@company.com"
                  required
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  Message / Project Scope
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Describe your project, role opportunity, or timeline..."
                  required
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending to Hashim...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="text-base" />
                  </>
                )}
              </button>

              {/* Status Alert */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-sm flex items-center gap-3 ${status.type === 'success'
                    ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/60 border border-rose-500/40 text-rose-300'
                    }`}
                >
                  {status.type === 'success' && <FiCheck className="text-emerald-400 text-lg flex-shrink-0" />}
                  <span>{status.message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
