import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, ArrowRight, CheckCircle2, LayoutGrid, Wrench, GraduationCap, 
  Briefcase, Sun, HeartPulse, ShoppingCart, Settings, Scissors, Bed, Layout, CreditCard, Package
} from 'lucide-react';
import { erpProducts } from '../data/erpData';
import RequestModal from '../components/RequestModal';
import { motion } from 'framer-motion';

export default function ERPSolutions() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "Enterprise ERP Solutions | Specialized Industry Software | Rajes Solutions";
    window.scrollTo(0, 0);
  }, []);

  const iconMap = {
    Wrench: Wrench,
    GraduationCap: GraduationCap,
    Briefcase: Briefcase,
    Sun: Sun,
    HeartPulse: HeartPulse,
    ShoppingCart: ShoppingCart,
    Settings: Settings,
    Scissors: Scissors,
    Bed: Bed,
    Layout: Layout
  };

  const coreCapabilities = [
    { title: "Dynamic Invoicing", desc: "Automated GST/tax calculations and instant digital receipts." },
    { title: "Inventory Control", desc: "Real-time stock tracking with barcode and expiry management." },
    { title: "Statutory Reporting", desc: "Compliance-ready reports and advanced business analytics." },
    { title: "Multi-Location Sync", desc: "Centralized management for businesses with multiple branches." },
    { title: "Cloud Reliability", desc: "Encrypted backups and 24/7 access from any device." },
    { title: "Process Automation", desc: "Streamlined workflows to eliminate manual data entry errors." }
  ];

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
            alt="ERP Systems" 
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
            Industry Specific Modules
          </span>
          <h1 className="font-sans font-black text-5xl sm:text-7xl mb-8 leading-tight text-white">
            Enterprise <span className="text-gradient-gold">ERP</span> Solutions
          </h1>
          <p className="text-navy-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Scale your operations with tailored software modules built for your specific industry. We don't believe in one-size-fits-all.
          </p>
        </motion.div>
      </section>

      {/* Product Categories */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {erpProducts.map((erp, i) => {
            const IconComp = iconMap[erp.icon] || Layout;
            return (
              <motion.div
                key={erp.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800 hover:border-gold-500/50 transition-all flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-navy-800 text-gold-500 flex items-center justify-center mb-8 shadow-sm group-hover:bg-gold-500 group-hover:text-navy-950 transition-all">
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-navy-900 dark:text-white mb-4 group-hover:text-gold-500 transition-colors uppercase tracking-tight">{erp.name}</h3>
                <p className="text-navy-600 dark:text-navy-400 text-sm leading-relaxed mb-8 flex-grow">
                  {erp.shortDesc}
                </p>
                <div className="space-y-3 mb-10">
                  {erp.features.slice(0, 3).map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-bold text-navy-500 dark:text-navy-300">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      {f.title}
                    </div>
                  ))}
                </div>
                <Link
                  to={`/erp/${erp.slug}`}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-white dark:bg-navy-800 border border-navy-200 dark:border-navy-700 text-navy-900 dark:text-white font-bold text-sm group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:border-gold-500 transition-all"
                >
                  Explore Features <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Modular Engine</h2>
            <h3 className="text-3xl sm:text-5xl font-black mb-6">Core ERP Capabilities</h3>
            <p className="text-navy-300 text-lg">Every module is built on our high-performance enterprise foundation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreCapabilities.map((cap, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-all">
                <h4 className="text-xl font-bold text-white mb-3">{cap.title}</h4>
                <p className="text-navy-300 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-24 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 sm:p-20 rounded-[3rem] bg-navy-50 dark:bg-navy-900/40 border border-navy-100 dark:border-navy-800 flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h3 className="text-3xl sm:text-5xl font-black text-navy-900 dark:text-white mb-8 leading-tight">Digital Transformation for Every Vertical</h3>
              <p className="text-navy-600 dark:text-navy-300 text-lg mb-10 leading-relaxed">
                By unifying your departments into a single secure ledger, you eliminate manual friction and gain real-time visibility into your business health.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-navy-950 border border-navy-100 dark:border-navy-800">
                  <div className="text-3xl font-black text-gold-500 mb-1">30%</div>
                  <div className="text-xs font-bold text-navy-500 uppercase">Efficiency Gain</div>
                </div>
                <div className="p-6 rounded-2xl bg-white dark:bg-navy-950 border border-navy-100 dark:border-navy-800">
                  <div className="text-3xl font-black text-gold-500 mb-1">100%</div>
                  <div className="text-xs font-bold text-navy-500 uppercase">Data Accuracy</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070&auto=format&fit=crop" 
                alt="Data Analytics" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-black text-navy-900 dark:text-white mb-8">Ready for a Custom Demonstration?</h3>
          <p className="text-navy-600 dark:text-navy-400 text-lg mb-10">
            Schedule a session with our product leads to see how our ERP can be configured for your specific needs.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black text-xl transition-all shadow-xl hover:shadow-gold-500/20"
          >
            Book Free Demo
          </button>
        </div>
      </section>

      <RequestModal isOpen={isOpen} onClose={() => setIsOpen(false)} type="demo" />
    </div>
  );
}
