import React, { useEffect } from 'react';
import { Database, ShieldCheck, Award, Heart, ShieldAlert, Cpu } from 'lucide-react';

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us | Rajes Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn about Rajes Solutions. With over 20 years of experience, we provide elite Remote DBA support and custom ERP products globally.");
    }
  }, []);

  const values = [
    { title: "20+ Years Experience", desc: "Our database engineering DNA goes back over two decades, working on early SQL Server versions up to complex modern hybrid cloud instances.", icon: Award },
    { title: "Technical Integrity", desc: "We write clean code, configure robust database setups, and never cut corners on security, backups, or compliance standards.", icon: ShieldCheck },
    { title: "24/7/365 On-Call", desc: "Databases do not sleep, nor do we. Our team operates on rotating support shifts to resolve critical database incidents in minutes.", icon: Database }
  ];

  return (
    <div className="py-12 bg-navy-50/20 dark:bg-navy-950/20">
      
      {/* Intro Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4 overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/62/1c/db/621cdb56e2d5d80107ad95ca23fa79fa.jpg" 
            alt="About Us Hero" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-navy-950/20 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-50/20 dark:to-navy-950/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Company Profile</h1>
              <h2 className="font-sans font-black text-4xl sm:text-6xl text-white mb-6">
                Engineering High-Availability Solutions
              </h2>
              <p className="text-navy-100 text-base sm:text-lg leading-relaxed mb-6">
                Founded in India, Rajes Solutions was built on a simple foundation: database administration and custom software development require elite expertise. Over the past 20 years, we have transitioned from local server consultants to an international technology partner.
              </p>
              <p className="text-navy-100 text-base sm:text-lg leading-relaxed">
                We specialize in custom systems where standard SaaS solutions fail. Our team bridges the gap between systems administration and application code, ensuring your queries run fast and your data is secure.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gold-500/10 rounded-3xl blur-2xl opacity-60" />
              <div className="glass-card p-10 border-white/20 dark:border-navy-850 shadow-2xl relative z-10 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="font-sans font-bold text-3xl text-navy-900 dark:text-white mb-2">
                  20+ Years
                </h3>
                <p className="text-sm text-navy-500 dark:text-navy-400 max-w-xs">
                  Active in Database Optimization, AlwaysOn Systems, and Tailored ERP Implementations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-navy-900 text-white py-24 mb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/[0.01] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-navy-850 border border-navy-800">
              <h3 className="font-sans font-bold text-2xl text-gold-400 mb-4">Our Mission</h3>
              <p className="text-navy-300 text-base leading-relaxed">
                To empower growing enterprises by providing specialized vertical software modules and elite database support. We strive to automate manual administration workloads and guarantee continuous data availability, ensuring your systems scale seamlessly.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-navy-850 border border-navy-800">
              <h3 className="font-sans font-bold text-2xl text-gold-400 mb-4">Our Vision</h3>
              <p className="text-navy-300 text-base leading-relaxed">
                To be recognized globally as the premier niche enterprise partner for high-performance database management and tailored ERP architectures, setting benchmarks in technical integrity, customer support, and system uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="font-sans font-black text-3xl text-center text-navy-900 dark:text-white mb-16">
          Why Rajes Solutions?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="glass-card p-8 border border-navy-100/40 dark:border-navy-850">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-bold text-xl text-navy-900 dark:text-white mb-3">
                  {v.title}
                </h3>
                <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
