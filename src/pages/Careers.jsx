import React, { useState, useEffect } from 'react';
import { 
  Rocket, Brain, ArrowRight, 
  Globe, Star, MapPin, Search, X, Send, Paperclip
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Careers() {
  useEffect(() => {
    document.title = "Careers | Join Our Engineering Team | Rajes Solutions";
    window.scrollTo(0, 0);
  }, []);

  const [applyJob, setApplyJob] = useState(null);
  const [applyForm, setApplyForm] = useState({ name: '', email: '', phone: '', message: '', resumeName: '' });

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) setApplyForm(p => ({ ...p, resumeName: file.name }));
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Job Application - ${applyJob}`);
    const body = encodeURIComponent(`Position: ${applyJob}\nName: ${applyForm.name}\nEmail: ${applyForm.email}\nPhone: ${applyForm.phone}\nResume: ${applyForm.resumeName || 'See attachment'}\n\nCover Note:\n${applyForm.message}\n\nPlease find my resume attached.`);
    window.location.href = `mailto:saravanan.soundararajan@rajessolutions.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setApplyJob(null);
      setApplyForm({ name: '', email: '', phone: '', message: '', resumeName: '' });
    }, 500);
  };

  const culture = [
    { title: "Engineering Excellence", desc: "We prioritize deep technical knowledge and clean, efficient architectures above all else.", icon: Brain },
    { title: "Continuous Growth", desc: "Our team members are encouraged to certify in latest database technologies and modern frameworks.", icon: Rocket },
    { title: "Global Impact", desc: "Work on systems that power large-scale enterprises across diverse international sectors.", icon: Globe }
  ];

  const jobs = [
    { 
      title: "Senior SQL Server DBA", 
      location: "Remote / Namakkal", 
      type: "Full-Time",
      desc: "Expert in performance tuning, AlwaysOn, and complex query optimization. 5+ years experience required."
    },
    { 
      title: "Full-Stack React Developer", 
      location: "Namakkal Office", 
      type: "Full-Time",
      desc: "Skilled in React, Node.js, and Vite. Experience in building data-heavy ERP dashboards preferred."
    },
    { 
      title: "ERP Implementation Specialist", 
      location: "On-Site (Traveling)", 
      type: "Full-Time",
      desc: "Experience in deploying enterprise modules for hospital or manufacturing sectors. Strong client-facing skills."
    }
  ];

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" 
            alt="Office Team" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-navy-950/60 to-navy-950/90" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-bold tracking-widest uppercase mb-6">
            Build Your Future
          </span>
          <h1 className="font-sans font-black text-5xl sm:text-7xl mb-8 leading-tight text-white">
            Join the <span className="text-gradient-gold">Next Decade</span> of Tech
          </h1>
          <p className="text-navy-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            We're looking for elite database engineers and passionate software developers to architect the future of enterprise stability.
          </p>
        </motion.div>
      </section>

      {/* Culture Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Our Culture</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-navy-900 dark:text-white mb-6">Why Engineers Love It Here</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {culture.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 rounded-[2rem] bg-navy-50 dark:bg-navy-900 text-gold-500 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-gold-500 group-hover:text-navy-950 transition-all group-hover:scale-110 duration-500">
                <item.icon className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-navy-900 dark:text-white mb-4 uppercase tracking-tighter">{item.title}</h4>
              <p className="text-navy-600 dark:text-navy-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Openings Grid */}
      <section className="py-24 bg-navy-50 dark:bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-navy-900 dark:text-white uppercase tracking-tight">Active Openings</h2>
              <p className="text-navy-600 dark:text-navy-400 mt-4">Current opportunities to join our team in Namakkal or remotely.</p>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-navy-950 px-6 py-4 rounded-2xl border border-navy-200 dark:border-navy-800">
              <Search className="w-5 h-5 text-navy-400" />
              <input type="text" placeholder="Search roles..." className="bg-transparent focus:outline-none font-bold text-sm" />
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 sm:p-12 rounded-[2.5rem] bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 hover:border-gold-500/50 transition-all flex flex-col md:flex-row items-center gap-8 justify-between"
              >
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-950 text-navy-500 dark:text-navy-400 text-[10px] font-black uppercase tracking-widest border border-navy-100 dark:border-navy-800">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gold-500/10 text-gold-500 text-[10px] font-black uppercase tracking-widest border border-gold-500/20 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-navy-900 dark:text-white mb-3 group-hover:text-gold-500 transition-colors uppercase tracking-tight">{job.title}</h3>
                  <p className="text-navy-600 dark:text-navy-400 text-sm max-w-2xl">{job.desc}</p>
                </div>
                <button
                  onClick={() => setApplyJob(job.title)}
                  className="px-10 py-5 rounded-2xl bg-navy-900 dark:bg-navy-800 text-white font-black hover:bg-gold-500 hover:text-navy-950 transition-all whitespace-nowrap shadow-xl">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Wrapper */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-black text-navy-900 dark:text-white mb-8">Work Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { t: "Performance Bonuses", d: "Periodic rewards for project milestones and engineering excellence." },
                { t: "Continuous Training", d: "Paid certifications and workshops for latest tech stacks." },
                { t: "Health Insurance", d: "Comprehensive coverage for you and your direct family members." },
                { t: "Flexible Hours", d: "We focus on outcomes and stability, not just seat time." }
              ].map((b, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-3 text-gold-500 mb-2">
                    <Star className="w-5 h-5 fill-current" />
                    <h4 className="font-bold text-navy-900 dark:text-white">{b.t}</h4>
                  </div>
                  <p className="text-navy-600 dark:text-navy-400 text-xs leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gold-400/20 blur-[100px] rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                alt="Workspace" 
                className="rounded-[3rem] shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Wrapper */}
      <section className="py-24 text-center px-4">
        <div className="max-w-4xl mx-auto p-12 sm:p-20 rounded-[3rem] bg-navy-900 text-white border border-navy-800 shadow-2xl">
          <h3 className="text-3xl sm:text-5xl font-black mb-8 leading-tight">Don't See Your Specialty?</h3>
          <p className="text-navy-300 text-lg mb-10">
            We are always looking for exceptional talent in database engineering and enterprise software development. Send us your resume for future considerations.
          </p>
          <a
            href="mailto:saravanan.soundararajan@rajessolutions.com?subject=Resume%20Submission%20-%20Rajes%20Solutions&body=Hi%20Rajes%20Solutions%20Team,%0A%0APlease%20find%20my%20resume%20attached%20for%20your%20consideration.%0A%0AName:%0APhone:%0ASpecialty:%0A%0AThank%20you."
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black text-xl hover:shadow-gold-500/20 transition-all">
            Email Your Resume <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Apply Modal */}
      {applyJob && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
          <div className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm" onClick={() => setApplyJob(null)} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative w-full max-w-lg bg-white dark:bg-navy-900 rounded-3xl shadow-2xl z-10 p-8 border border-navy-100 dark:border-navy-800"
          >
            <button onClick={() => setApplyJob(null)} className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-navy-100 dark:hover:bg-navy-800 text-navy-400 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-black text-xl text-navy-900 dark:text-white mb-1">Apply for Position</h3>
            <p className="text-gold-500 font-bold text-sm mb-6">{applyJob}</p>
            <form onSubmit={handleApplySubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-navy-400 mb-1 block">Full Name *</label>
                <input type="text" required value={applyForm.name} onChange={e => setApplyForm(p => ({...p, name: e.target.value}))}
                  className="w-full px-4 py-3 rounded-xl bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 focus:border-gold-500 focus:outline-none font-bold text-navy-900 dark:text-white text-sm" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-navy-400 mb-1 block">Email *</label>
                <input type="email" required value={applyForm.email} onChange={e => setApplyForm(p => ({...p, email: e.target.value}))}
                  className="w-full px-4 py-3 rounded-xl bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 focus:border-gold-500 focus:outline-none font-bold text-navy-900 dark:text-white text-sm" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-navy-400 mb-1 block">Phone *</label>
                <input type="tel" required value={applyForm.phone} onChange={e => setApplyForm(p => ({...p, phone: e.target.value}))}
                  className="w-full px-4 py-3 rounded-xl bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 focus:border-gold-500 focus:outline-none font-bold text-navy-900 dark:text-white text-sm" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-navy-400 mb-1 block">Cover Note</label>
                <textarea rows="3" value={applyForm.message} onChange={e => setApplyForm(p => ({...p, message: e.target.value}))}
                  className="w-full px-4 py-3 rounded-xl bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 focus:border-gold-500 focus:outline-none font-bold text-navy-900 dark:text-white text-sm" placeholder="Brief introduction and years of experience..." />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-navy-400 mb-1 block">Resume / CV *</label>
                <label className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 hover:border-gold-500 cursor-pointer transition-all group">
                  <Paperclip className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span className="text-sm font-bold text-navy-500 dark:text-navy-400 truncate">
                    {applyForm.resumeName || 'Click to attach your resume (PDF/DOC)'}
                  </span>
                  <input type="file" accept=".pdf,.doc,.docx" required onChange={handleResumeChange} className="hidden" />
                </label>
                {applyForm.resumeName && (
                  <p className="text-[10px] text-emerald-500 font-bold mt-1 ml-1">✓ {applyForm.resumeName} selected</p>
                )}
                <p className="text-[10px] text-navy-400 mt-1 ml-1">Attach the file manually in the email compose window that opens.</p>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black transition-all hover:from-gold-400 hover:to-gold-500">
                <Send className="w-4 h-4" /> Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      )}

    </div>
  );
}
