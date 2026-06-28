import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Settings, Wrench, ShoppingCart, GraduationCap, HeartPulse, Scissors, 
  ArrowRight, ShieldCheck, Bed, Hotel, Warehouse, Building2, CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Industries() {
  useEffect(() => {
    document.title = "Industries Served | Vertical Enterprise Expertise | Rajes Solutions";
    window.scrollTo(0, 0);
  }, []);

  const industriesList = [
    {
      name: "Manufacturing",
      icon: Settings,
      desc: "Streamline raw material procurement, track WIP floor cycles, and manage complex Bill of Materials.",
      challenges: ["Inventory Leakage", "Downtime Risks", "Quality Control"],
      link: "/erp/manufacturing-erp"
    },
    {
      name: "Automotive & Garages",
      icon: Wrench,
      desc: "Digital job cards, automated spare parts tracking, and SMS/WhatsApp status updates for customers.",
      challenges: ["Parts pilferage", "Manual Scheduling", "Billing Errors"],
      link: "/erp/workshop-erp"
    },
    {
      name: "Hospitality & Hotels",
      icon: Bed,
      desc: "Integrated room reservations, guest billing, and restaurant POS for seamless hospitality operations.",
      challenges: ["OTA Sync", "Housekeeping Latency", "Billing Fragmentation"],
      link: "/erp/hotel-erp"
    },
    {
      name: "Retail & Supermarkets",
      icon: ShoppingCart,
      desc: "High-speed offline POS billing, batch-expiry management, and automated purchase reordering.",
      challenges: ["Checkout Queues", "Stock Wastage", "Inventory Accuracy"],
      link: "/erp/supermarket-erp"
    },
    {
      name: "Education & Schools",
      icon: GraduationCap,
      desc: "Complete campus administration from student admissions to automated fee collection and exams.",
      challenges: ["Fee Collection", "Parent Communication", "Record Management"],
      link: "/erp/school-erp"
    },
    {
      name: "Healthcare & Clinics",
      icon: HeartPulse,
      desc: "Unified patient management covering Emergency, OPD, IPD, Diagnostics, and Pharmacy billing.",
      challenges: ["Patient Wait Time", "EHR Fragmentation", "Inventory Control"],
      link: "/erp/hospital-erp"
    }
  ];

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors">
      
      {/* Hero Header */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Buildings" 
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
            Industry Specialization
          </span>
          <h1 className="font-sans font-black text-5xl sm:text-7xl mb-8 leading-tight text-white">
            Vertical <span className="text-gradient-gold">Excellence</span>
          </h1>
          <p className="text-navy-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            We solve unique business challenges by engineering technical software and database models tailored to specific industry verticals.
          </p>
        </motion.div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesList.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800 hover:border-gold-500/50 transition-all flex flex-col h-full group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-navy-800 text-gold-500 flex items-center justify-center mb-8 shadow-sm group-hover:bg-gold-500 group-hover:text-navy-950 transition-all">
                <ind.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-navy-900 dark:text-white mb-4 group-hover:text-gold-500 transition-colors uppercase tracking-tight">{ind.name}</h3>
              <p className="text-navy-600 dark:text-navy-400 text-sm leading-relaxed mb-8 flex-grow">
                {ind.desc}
              </p>
              
              <div className="space-y-3 mb-10">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-400 dark:text-navy-500 mb-4 px-1">Common Pain Points Solved</div>
                {ind.challenges.map((c, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-bold text-navy-500 dark:text-navy-300">
                    <CheckCircle2 className="w-4 h-4 text-gold-500" />
                    {c}
                  </div>
                ))}
              </div>

              <Link
                to={ind.link}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-white dark:bg-navy-800 border border-navy-200 dark:border-navy-700 text-navy-900 dark:text-white font-bold text-sm group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:border-gold-500 transition-all"
              >
                View Solution Overview <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-8 leading-tight">Supporting High-Stakes Operations</h2>
          <p className="text-navy-300 text-lg mb-12 max-w-2xl mx-auto">
            Whether it's a 24/7 hospital environment or a multi-thousand SKU supermarket, our systems are built to handle the heat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-black text-gold-500 mb-2">1,000+</div>
              <p className="text-xs font-bold text-navy-400 uppercase tracking-widest">Active Installs</p>
            </div>
            <div>
              <div className="text-4xl font-black text-gold-500 mb-2">99.9%</div>
              <p className="text-xs font-bold text-navy-400 uppercase tracking-widest">Client Retention</p>
            </div>
            <div>
              <div className="text-4xl font-black text-gold-500 mb-2">24/7</div>
              <p className="text-xs font-bold text-navy-400 uppercase tracking-widest">SLA Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-black text-navy-900 dark:text-white mb-8">Does Your Industry Need a Technical Edge?</h3>
          <p className="text-navy-600 dark:text-navy-400 text-lg mb-10 leading-relaxed">
            We specialize in developing custom blueprints for businesses that have unique requirements that standard off-the-shelf software can't meet.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black text-xl shadow-xl"
          >
            Request Industry Blueprint
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
