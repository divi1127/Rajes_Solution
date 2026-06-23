import React, { useEffect } from 'react';
import { 
  Building2, GraduationCap, HeartPulse, Wrench, ArrowRight, 
  TrendingUp, Clock, ShieldCheck, Users, BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CaseStudies() {
  useEffect(() => {
    document.title = "Case Studies | Enterprise Success Stories | Rajes Solutions";
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      title: "Scaling Automotive Service Operations",
      client: "Global Garage Network",
      category: "Workshop ERP",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
      outcome: "35% Increase in mechanic productivity and 100% digital spare parts tracking.",
      desc: "Implemented a multi-branch Workshop ERP to unify job card management and inventory across 12 locations.",
      stats: [
        { label: "Turnaround", val: "-25%", icon: Clock },
        { label: "Revenue", val: "+18%", icon: TrendingUp }
      ]
    },
    {
      title: "24/7 Mission-Critical Database Stability",
      client: "Major Manufacturing Unit",
      category: "Remote DBA Support",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      outcome: "Zero unscheduled downtime over 3 years and 60% faster nightly batch processing.",
      desc: "Transitioned from reactive local support to 24/7 proactive Remote DBA monitoring for a high-availability production cluster.",
      stats: [
        { label: "Uptime", val: "99.9%", icon: ShieldCheck },
        { label: "Query Speed", val: "+45%", icon: BarChart3 }
      ]
    },
    {
      title: "Digitizing Campus Administration",
      client: "Premier Educational Trust",
      category: "School ERP",
      image: "https://images.unsplash.com/photo-1523050335392-9af560c12bb5?q=80&w=2070&auto=format&fit=crop",
      outcome: "Unified 5,000+ student records and automated fee collection for 15 campuses.",
      desc: "Deplpoyed a custom School ERP with integrated parent portals and automated statutory report card generation.",
      stats: [
        { label: "Admin Time", val: "-40%", icon: Users },
        { label: "Fee Collection", val: "+22%", icon: TrendingUp }
      ]
    },
    {
      title: "Hospital Workflow Optimization",
      client: "Multi-Specialty Care Center",
      category: "Hospital ERP",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
      outcome: "Reduced patient waiting time in OPD by 50% and centralized Electronic Health Records.",
      desc: "Integrated OPD, IPD, Diagnostics, and Pharmacy into a single unified patient journey system.",
      stats: [
        { label: "Wait Time", val: "-50%", icon: Clock },
        { label: "Data Error", val: "-95%", icon: ShieldCheck }
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
            alt="Business Success" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-navy-950/80 to-navy-950" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-bold tracking-widest uppercase mb-6">
            Real Impact & Results
          </span>
          <h1 className="font-sans font-black text-5xl sm:text-7xl mb-8 leading-tight text-white">
            Enterprise <span className="text-gradient-gold">Case Studies</span>
          </h1>
          <p className="text-navy-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped diverse organizations solve complex technical challenges and achieve digital stability.
          </p>
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {cases.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full rounded-[3rem] overflow-hidden bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800 hover:border-gold-500/50 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-navy-900/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
                  {study.category}
                </div>
              </div>
              
              <div className="p-10 flex-grow border-t border-navy-100 dark:border-navy-800">
                <div className="text-gold-500 font-bold uppercase tracking-widest text-[10px] mb-2">{study.client}</div>
                <h3 className="text-2xl font-black text-navy-900 dark:text-white mb-6 group-hover:text-gold-500 transition-colors uppercase tracking-tight leading-tight">{study.title}</h3>
                <p className="text-navy-600 dark:text-navy-400 text-sm leading-relaxed mb-8">
                  {study.desc}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                  {study.stats.map((stat, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-navy-950 border border-navy-100 dark:border-navy-800">
                      <div className="flex items-center gap-3 mb-2">
                        <stat.icon className="w-4 h-4 text-gold-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-navy-400 dark:text-navy-500">{stat.label}</span>
                      </div>
                      <div className="text-2xl font-black text-navy-900 dark:text-white">{stat.val}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 dark:text-white hover:text-gold-500 dark:hover:text-gold-500 transition-all"
                >
                  View Full Report <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcome Banner */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-navy-900 p-12 sm:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gold-400/5 blur-[100px] rounded-full" />
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-8 relative z-10 leading-tight">Ready to Become Our Next Success Story?</h2>
          <p className="text-navy-300 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            Our engineering team is ready to analyze your current environment and architect a solution that drives measurable growth.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black text-xl hover:from-gold-400 hover:to-gold-500 transition-all shadow-2xl relative z-10"
          >
            Start Discovery Session <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

    </div>
  );
}
