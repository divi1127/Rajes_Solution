import React, { useEffect } from 'react';
import { 
  FileText, BookOpen, Video, Download, ArrowRight, 
  Database, ShieldCheck, Layout, Cpu, Newspaper
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Resources() {
  useEffect(() => {
    document.title = "Resources | Enterprise IT Insights | Rajes Solutions";
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      type: "Whitepaper",
      title: "Optimizing SQL Server for High-Traffic ERPs",
      desc: "A deep dive into indexing strategies and tempdb configuration for enterprise workloads.",
      icon: Database,
      category: "Database Engineering"
    },
    {
      type: "Guide",
      title: "Electronic Health Records (EHR) Security Compliance",
      desc: "Step-by-step guide to securing patient data in accordance with modern privacy standards.",
      icon: ShieldCheck,
      category: "Compliance"
    },
    {
      type: "Industry Insight",
      title: "The Future of Cloud-Native ERP Architectures",
      desc: "How multi-tenant cloud systems are revolutionizing manufacturing and retail sectors.",
      icon: Layout,
      category: "Software Architecture"
    },
    {
      type: "Checklist",
      title: "Remote DBA Transition Roadmap",
      desc: "What you need to prepare for a successful hand-off to 24/7 managed database support tasks.",
      icon: Cpu,
      category: "Managed Services"
    }
  ];

  const articles = [
    {
      title: "Why Standard SaaS Fails Large Garages",
      date: "May 15, 2024",
      author: "S. Rajesh",
      desc: "Exploring why local vertical-specific ERP modules outperform generic cloud SaaS."
    },
    {
      title: "AlwaysOn Availability vs. Standard Mirroring",
      date: "April 28, 2024",
      author: "DBA Lead",
      desc: "Choosing the right high-availability strategy for your server environment."
    }
  ];

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1510511459019-5dee997dd2cd?q=80&w=2070&auto=format&fit=crop" 
            alt="Knowledge Hub" 
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
            Knowledge Hub
          </span>
          <h1 className="font-sans font-black text-5xl sm:text-7xl mb-8 leading-tight text-white">
            Engineering <span className="text-gradient-gold">Resources</span>
          </h1>
          <p className="text-navy-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Gain deeper insights into enterprise architecture, database optimization, and industry-specific digital transformation.
          </p>
        </motion.div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800 hover:border-gold-500/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-navy-800 text-gold-500 flex items-center justify-center shadow-sm group-hover:bg-gold-500 group-hover:text-navy-950 transition-all">
                  <res.icon className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-400 dark:text-navy-500 bg-navy-100 dark:bg-navy-800 px-3 py-1 rounded-full">
                  {res.type}
                </span>
              </div>
              <h3 className="text-2xl font-black text-navy-900 dark:text-white mb-4 group-hover:text-gold-500 transition-colors uppercase tracking-tight">{res.title}</h3>
              <p className="text-navy-600 dark:text-navy-400 text-sm leading-relaxed mb-8">
                {res.desc}
              </p>
              <button className="inline-flex items-center gap-2 text-sm font-black text-navy-900 dark:text-white hover:text-gold-500 dark:hover:text-gold-500 transition-all">
                Download Resource <Download className="w-4 h-4 ml-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry Insights / Blog Articles */}
      <section className="py-24 bg-navy-50 dark:bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <Newspaper className="w-8 h-8 text-gold-500" />
            <h2 className="text-3xl font-black text-navy-900 dark:text-white uppercase tracking-tight">Technical Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {articles.map((art, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-8 p-1 rounded-[2rem] bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 hover:shadow-xl transition-all">
                <div className="sm:w-1/3 p-2">
                  <div className="w-full h-full aspect-square rounded-2xl bg-navy-100 dark:bg-navy-800 flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-navy-300" />
                  </div>
                </div>
                <div className="sm:w-2/3 p-8">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-gold-500 uppercase tracking-widest mb-4">
                    <span>{art.date}</span>
                    <span className="w-1 h-1 rounded-full bg-navy-300" />
                    <span>By {art.author}</span>
                  </div>
                  <h3 className="text-xl font-black text-navy-900 dark:text-white mb-3 hover:text-gold-500 transition-colors cursor-pointer">{art.title}</h3>
                  <p className="text-navy-600 dark:text-navy-400 text-sm leading-relaxed mb-6">{art.desc}</p>
                  <button className="text-sm font-bold text-navy-400 hover:text-gold-500 flex items-center gap-2 group">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Wrapper */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto p-12 sm:p-20 rounded-[3rem] bg-navy-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gold-400/5 blur-[100px] rounded-full" />
          <h3 className="text-3xl sm:text-5xl font-black mb-6 relative z-10">Stay Updated on Enterprise Tech</h3>
          <p className="text-navy-300 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Join our mailing list to receive monthly insights on database performance and ERP trends.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
            <input 
              type="email" 
              placeholder="Your Business Email" 
              className="flex-grow px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-gold-500 font-bold"
            />
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
