import React, { useEffect } from 'react';
import { 
  Cpu, Database, Code, Cloud, Globe, Smartphone, 
  Layers, Lock, Zap, Server, Layout, Settings, Binary
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Technologies() {
  useEffect(() => {
    document.title = "Technologies | Our Enterprise Tech Stack | Rajes Solutions";
    window.scrollTo(0, 0);
  }, []);

  const stack = [
    {
      category: "Enterprise ERP Stack",
      icon: Layout,
      techs: [
        { name: "React & Vite", icon: Code, desc: "Modern frontend for high-speed, data-heavy user interfaces." },
        { name: "Node.js / Express", icon: Binary, desc: "Scalable backend services for business logic and API gateways." },
        { name: "SQL Server", icon: Database, desc: "Robust data persistence for complex enterprise transactional processing." },
        { name: "PHP / Laravel", icon: Code, desc: "Stable frameworks for mission-critical web application backends." }
      ]
    },
    {
      category: "Database & Cloud DBA",
      icon: Server,
      techs: [
        { name: "SQL Server (All Versions)", icon: Database, desc: "Expertise from legacy 2005 to modern 2022 clusters and AlwaysOn." },
        { name: "Sybase ASE & IQ", icon: Database, desc: "Specialized maintenance and optimization for legacy enterprise systems." },
        { name: "PostgreSQL", icon: Database, desc: "Open-source high-performance database management and scaling." },
        { name: "Azure & AWS Cloud", icon: Cloud, desc: "Cloud database management (RDS, Azure SQL) and hybrid migrations." }
      ]
    },
    {
      category: "DevOps & Infrastructure",
      icon: Settings,
      techs: [
        { name: "CI/CD Pipelines", icon: Zap, desc: "Automating deployments to ensure zero-downtime application updates." },
        { name: "PowerShell & Scripting", icon: Binary, desc: "Advanced automation for database maintenance and system health checks." },
        { name: "Environment Monitoring", icon: Server, desc: "Proactive tracking of system CPU, IO, and blocking processes." },
        { name: "Security Hardening", icon: Lock, desc: "Implementing SSL, encryption at rest, and granular firewall policies." }
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="Cybersecurity Technology" 
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
            Elite Engineering Stack
          </span>
          <h1 className="font-sans font-black text-5xl sm:text-7xl mb-8 leading-tight text-white">
            Future-Proof <span className="text-gradient-gold">Technologies</span>
          </h1>
          <p className="text-navy-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            We leverage a curated selection of industry-leading technologies to build scalable, secure, and high-performance enterprise systems.
          </p>
        </motion.div>
      </section>

      {/* Technology Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {stack.map((group, i) => (
            <div key={i}>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-12 h-12 rounded-xl bg-navy-900 dark:bg-navy-800 text-gold-500 flex items-center justify-center shadow-lg">
                  <group.icon className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-black text-navy-900 dark:text-white uppercase tracking-tight">{group.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {group.techs.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-[2rem] bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800 hover:border-gold-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-navy-800 text-navy-400 group-hover:text-gold-500 flex items-center justify-center mb-6 shadow-sm transition-colors">
                      <tech.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-navy-900 dark:text-white mb-3">{tech.name}</h3>
                    <p className="text-sm text-navy-500 dark:text-navy-400 leading-relaxed">
                      {tech.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Strength */}
      <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-400/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="glass-card bg-white/5 border-white/10 p-12 sm:p-20 rounded-[3rem] flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h3 className="text-3xl sm:text-5xl font-black mb-8 leading-tight">Beyond Tools: Deep Engineering Discipline</h3>
              <p className="text-navy-300 text-lg leading-relaxed mb-8">
                We don't just use tools; we understand the underlying systems. Our engineering approach prioritizes efficiency at the byte level, ensuring your applications remain responsive even as your data grows to terabytes.
              </p>
              <div className="flex flex-wrap gap-4">
                {["High Availability", "Query Optimization", "Load Balancing", "Zero-Downtime Migration", "API First Design"].map((item, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-bold uppercase tracking-widest">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="p-10 rounded-[2rem] bg-navy-900 border border-navy-800 text-center">
                <div className="text-4xl font-black text-gold-500 mb-2">99.9%</div>
                <div className="text-[10px] text-navy-500 uppercase tracking-widest font-bold">Reliability Target</div>
              </div>
              <div className="p-10 rounded-[2rem] bg-navy-900 border border-navy-800 text-center translate-y-8">
                <div className="text-4xl font-black text-gold-500 mb-2">Micro</div>
                <div className="text-[10px] text-navy-500 uppercase tracking-widest font-bold">Latency Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 text-center">
        <h3 className="text-3xl sm:text-4xl font-black text-navy-900 dark:text-white mb-8">Architect Your System with Modern Tech</h3>
        <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black text-lg shadow-xl">
          Request Technical Consultation
        </button>
      </section>

    </div>
  );
}
