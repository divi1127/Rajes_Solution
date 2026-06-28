import React, { useEffect } from 'react';
import { Database, ShieldCheck, Award, Heart, ShieldAlert, Cpu, HeartPulse, CheckCircle2, UserCheck, Star, Zap, Activity, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import leaderPhoto from '../assets/SaravananSoundararajanRaje\'sSolutions.png';

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us | Enterprise Engineering Excellence | Rajes Solutions";
    window.scrollTo(0, 0);
  }, []);

  const corePillars = [
    { 
      title: "Performance First", 
      desc: "Our engineering DNA is focused on speed. We eliminate bottlenecks in code and database queries to ensure lightning-fast operations.", 
      icon: Zap 
    },
    { 
      title: "Uncompromising Security", 
      desc: "Data is your most valuable asset. We implement enterprise-grade hardening and encryption to protect it at every layer.", 
      icon: ShieldCheck 
    },
    { 
      title: "High Availability", 
      desc: "We build systems that don't sleep. Our HA and DR strategies ensure 99.9% uptime for mission-critical production environments.", 
      icon: Activity 
    }
  ];

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Team Working" 
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
            Our Journey & DNA
          </span>
          <h1 className="font-sans font-black text-5xl sm:text-7xl mb-8 leading-tight text-white">
            Engineering <span className="text-gradient-gold">Digital</span> Stability
          </h1>
          <p className="text-navy-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Rajes Solutions delivers high-performance enterprise systems and database support, backed by over 26 years of technical leadership in mission-critical environments.
          </p>
        </motion.div>
      </section>

      {/* Leadership Profile */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gold-500/20 blur-[80px] rounded-full group-hover:blur-[100px] transition-all" />
              <div className="relative glass-card bg-navy-900 border-navy-800 p-8 rounded-[3rem] overflow-hidden">
                <img 
                  src={leaderPhoto} 
                  alt="Saravanan Soundararajan" 
                  className="w-full aspect-square object-cover rounded-2xl mb-8 grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-black text-white">Saravanan Soundararajan</h3>
                  <p className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-4">Technical Lead & Advisory</p>
                  <div className="flex items-center justify-center gap-4 text-navy-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-gold-500" />
                      B.E Engineering
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-gold-500" />
                      26+ Years Exp.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-4">Leadership Philosphy</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-navy-900 dark:text-white mb-8 leading-tight">Expertise That Matters</h3>
            <div className="space-y-6 text-navy-600 dark:text-navy-300 text-lg leading-relaxed">
              <p>
                Founded and led by <strong>S. Rajesh</strong>, an industry veteran with 26 years of hands-on experience in complex production environments, Rajes Solutions operates at the intersection of application performance and database stability.
              </p>
              <p>
                Our philosophy is simple: Enterprise systems must be built for reliability first. We specialize in custom ERP modules and database architectures that don't just work—they excel under heavy load, ensuring your business stays profitable and operational 24/7.
              </p>
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "SQL Server / Sybase Expertise",
                  "24/7 Production Support",
                  "Performance Tuning Specialist",
                  "Cloud Modernization Lead"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <UserCheck className="w-5 h-5 text-gold-500" />
                    <span className="font-bold text-navy-800 dark:text-navy-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 bg-navy-50 dark:bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">What Drives Us</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-navy-900 dark:text-white mb-6">Our Core Pillars</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((pillar, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 hover:border-gold-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-navy-50 dark:bg-navy-800 text-gold-500 flex items-center justify-center mb-8 shadow-sm group-hover:bg-gold-500 group-hover:text-navy-950 transition-all">
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-black text-navy-900 dark:text-white mb-4 uppercase tracking-tighter">{pillar.title}</h4>
                <p className="text-navy-600 dark:text-navy-400 leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-4">The Rajes Solutions Edge</h2>
              <h3 className="text-3xl sm:text-5xl font-black mb-8 leading-tight">What Makes Us Different?</h3>
              <div className="space-y-6">
                {[
                  { t: "Deep Technical Logic", d: "We don't just offer support; we understand the underlying database engines and application code better than anyone." },
                  { t: "26+ Years of Trust", d: "A track record of success in manufacturing, automotive, and IT sectors across multiple decades." },
                  { t: "Specialized Vertical Expertise", d: "Our ERPs aren't generic; they are custom-built for specific industries like hospital and school management." },
                  { t: "Proactive, Not Reactive", d: "We monitor systems to fix problems before they impact your end-users." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center text-navy-950 mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-1">{item.t}</h4>
                      <p className="text-navy-300 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="glass-card bg-white/5 border-white/10 p-10 rounded-[3rem]">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-black text-gold-500 mb-2">26+</div>
                    <div className="text-xs text-navy-400 uppercase tracking-widest font-bold">Years Industry Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-black text-gold-500 mb-2">24/7</div>
                    <div className="text-xs text-navy-400 uppercase tracking-widest font-bold">Managed Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-black text-gold-500 mb-2">101%</div>
                    <div className="text-xs text-navy-400 uppercase tracking-widest font-bold">Data Reliability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-black text-gold-500 mb-2">Custom</div>
                    <div className="text-xs text-navy-400 uppercase tracking-widest font-bold">ERP Architectures</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h3 className="text-3xl sm:text-4xl font-black text-navy-900 dark:text-white mb-8">Partner with Enterprise Specialists</h3>
        <Link
          to="/contact-us"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black text-lg shadow-xl"
        >
          Work With Us
          <ArrowRight className="w-6 h-6" />
        </Link>
      </section>
    </div>
  );
}
