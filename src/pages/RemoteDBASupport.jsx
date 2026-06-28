import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, ShieldCheck, Zap, Activity, RefreshCw, Eye, 
  ArrowRight, CheckCircle2, ChevronRight, Play, Terminal, Cloud, ShieldAlert, Settings, Wrench
} from 'lucide-react';
import { dbaServices } from '../data/dbaData';
import RequestModal from '../components/RequestModal';
import { motion } from 'framer-motion';

export default function RemoteDBASupport() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "24/7 Remote DBA Support | Sybase, SQL Server, Postgres | Rajes Solutions";
    window.scrollTo(0, 0);
  }, []);

  const dbaExpertise = [
    {
      title: "24×7 Monitoring & Incident Management",
      icon: Activity,
      desc: "Proactive monitoring of database health, blocking processes, and automated incident response."
    },
    {
      title: "Performance Tuning & Optimization",
      icon: Zap,
      desc: "Query optimization, index management, and server-level configuration tuning for maximum speed."
    },
    {
      title: "High Availability & Disaster Recovery",
      icon: ShieldCheck,
      desc: "Implementing AlwaysOn, Clustering, and robust backup/recovery strategies."
    },
    {
      title: "Database Upgrades & Migration",
      icon: RefreshCw,
      desc: "Seamless upgrades of SQL Server, Sybase, and PostgreSQL with zero data loss."
    },
    {
      title: "Security & Compliance Audits",
      icon: ShieldAlert,
      desc: "Database hardening, permission audits, and ensuring industry compliance."
    },
    {
      title: "Cloud Database Support",
      icon: Cloud,
      desc: "Expert management of Azure SQL, AWS RDS, and hybrid cloud database environments."
    }
  ];

  const technologies = [
    { name: "SQL Server", versions: "2012 to 2022", icon: Database },
    { name: "Sybase ASE & IQ", versions: "Enterprise Maintenance", icon: Database },
    { name: "PostgreSQL", versions: "Open Source Excellence", icon: Database },
    { name: "Azure SQL / AWS RDS", versions: "Cloud Native", icon: Cloud }
  ];

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544380903-5961db1b7ebd?q=80&w=2070&auto=format&fit=crop" 
            alt="Database Server" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-navy-950/60 to-navy-950/90" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-bold tracking-widest uppercase mb-6">
              24×7 Managed Services
            </span>
            <h1 className="font-sans font-black text-5xl sm:text-7xl mb-8 leading-tight text-white">
              Remote <span className="text-gradient-gold">DBA</span> Support
            </h1>
            <p className="text-navy-100 text-lg sm:text-xl leading-relaxed mb-10">
              Expert database administration for SQL Server, Sybase, and PostgreSQL. We ensure your mission-critical data remains available, secure, and fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black text-lg transition-all shadow-xl hover:shadow-gold-500/20"
              >
                Free SQL Health Check
              </button>
              <Link
                to="/contact-us"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all text-center"
              >
                Talk to a DBA Lead
              </Link>
            </div>
          </motion.div>

          {/* Code/Terminal Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gold-500/20 blur-[100px] rounded-full" />
            <div className="relative glass-card bg-navy-900 border-navy-800 p-8 rounded-3xl overflow-hidden font-mono text-sm leading-relaxed text-navy-300">
              <div className="flex gap-2 mb-6 border-b border-navy-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-xs text-navy-500">ha_monitor.sql</span>
              </div>
              <div className="space-y-2">
                <p><span className="text-purple-400">SELECT</span> status, cluster_state <span className="text-purple-400">FROM</span> sys.dm_hadr_availability_replica_states;</p>
                <p className="text-emerald-400">-- [SYNCHRONIZED] All replicas healthy</p>
                <br />
                <p><span className="text-purple-400">EXEC</span> sp_configure <span className="text-gold-400">'max degree of parallelism'</span>, 8;</p>
                <p className="text-navy-500">-- Optimizing for OLTP workload...</p>
                <br />
                <p><span className="text-purple-400">DBCC</span> CHECKDB ('PROD_ERP') <span className="text-purple-400">WITH</span> NO_INFOMSGS;</p>
                <p className="text-emerald-400">-- Integrity Check: 0 Errors found</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DBA Expertise Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Enterprise DBA Services</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-navy-900 dark:text-white mb-6">Expert Database Management</h3>
          <p className="text-navy-600 dark:text-navy-300 text-lg">We provide specialized support for high-transaction enterprise databases where uptime is non-negotiable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dbaExpertise.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800 hover:border-gold-500/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-navy-800 text-gold-500 flex items-center justify-center mb-8 shadow-sm group-hover:bg-gold-500 group-hover:text-navy-950 transition-all">
                <item.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-navy-900 dark:text-white mb-4 group-hover:text-gold-500 transition-colors uppercase tracking-tight">{item.title}</h4>
              <p className="text-navy-600 dark:text-navy-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-4">Our Technology Stack</h2>
              <h3 className="text-3xl sm:text-5xl font-black mb-8 leading-tight">Databases We Manage & Optimize</h3>
              <p className="text-navy-300 text-lg mb-8 leading-relaxed">
                Whether it's legacy Sybase maintenance or modernizing to PostgreSQL in the cloud, our DBAs have the deep technical knowledge required.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                    <tech.icon className="w-6 h-6 text-gold-500" />
                    <div>
                      <div className="font-bold">{tech.name}</div>
                      <div className="text-[10px] text-navy-400 uppercase tracking-widest">{tech.versions}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 translate-y-8">
              {[
                { title: "Query Speed", val: "85%+", color: "gold-500" },
                { title: "Data Loss", val: "Zero", color: "gold-500" },
                { title: "Support", val: "24×7", color: "gold-500" },
                { title: "Latency", val: "<5ms", color: "gold-500" }
              ].map((stat, i) => (
                <div key={i} className={`p-8 rounded-[2rem] bg-navy-950 border border-navy-800 text-center ${i % 2 === 1 ? 'translate-y-6' : ''}`}>
                  <div className={`text-3xl font-black text-${stat.color} mb-1`}>{stat.val}</div>
                  <div className="text-[10px] text-navy-500 uppercase tracking-[0.2em] font-bold">{stat.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap/Steps */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Onboarding</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-navy-900 dark:text-white mb-6">Our Support Journey</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { n: "01", t: "SLA Audit", d: "Performance and health baseline assessment." },
            { n: "02", t: "Monitor Setup", d: "Deploying 24×7 proactive collection tools." },
            { n: "03", t: "Optimization", d: "Query tuning and high availability remediation." },
            { n: "04", t: "Maintenance", d: "Ongoing support and periodic deep-dive health checks." }
          ].map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl font-black text-navy-100 dark:text-navy-900 mb-4 group-hover:text-gold-500/20 transition-colors">{step.n}</div>
              <h4 className="text-lg font-black text-navy-900 dark:text-white mb-2">{step.t}</h4>
              <p className="text-sm text-navy-500 dark:text-navy-400">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto relative group">
          <div className="absolute inset-0 bg-gold-400/20 blur-[100px] rounded-full group-hover:blur-[120px] transition-all" />
          <div className="relative p-12 sm:p-20 rounded-[3rem] bg-navy-900 text-center border border-navy-800">
            <h3 className="text-4xl sm:text-5xl font-black text-white mb-6">Stop Reacting to Database Failures</h3>
            <p className="text-navy-300 text-lg mb-10 max-w-2xl mx-auto">
              Get ahead with proactive remote DBA support. We fix bottlenecks before they impact your users.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black text-xl hover:from-gold-400 hover:to-gold-500 transition-all shadow-2xl"
            >
              Start Free Health Check
            </button>
          </div>
        </div>
      </section>

      <RequestModal isOpen={isOpen} onClose={() => setIsOpen(false)} type="health" />
    </div>
  );
}
