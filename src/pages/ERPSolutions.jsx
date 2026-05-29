import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, ArrowRight, CheckCircle2, LayoutGrid, Wrench, GraduationCap, 
  Briefcase, Sun, HeartPulse, ShoppingCart, Settings, Scissors 
} from 'lucide-react';
import { erpProducts } from '../data/erpData';
import RequestModal from '../components/RequestModal';

export default function ERPSolutions() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "ERP Solutions | Rajes Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore our smart vertical-specific ERP software. Workshop, School, Payroll, Temple, Hospital, Supermarket, Manufacturing, and Textile ERPs.");
    }
  }, []);

  const iconMap = {
    Wrench: Wrench,
    GraduationCap: GraduationCap,
    Briefcase: Briefcase,
    Sun: Sun,
    HeartPulse: HeartPulse,
    ShoppingCart: ShoppingCart,
    Settings: Settings,
    Scissors: Scissors
  };

  const coreFeatures = [
    { title: "Dynamic Invoicing & Billing", description: "Automated calculation of complex tariffs, taxes (GST), and instant receipts." },
    { title: "Inventory & Warehousing", description: "Batch numbers, barcode scanning, auto-stock alert thresholds, and tracking." },
    { title: "Statutory Reporting & BI", description: "Customizable visual reports, spreadsheet outputs, and dashboard metrics." },
    { title: "HR & Payroll Processing", description: "Integrated biometric attendance, shift structures, and salary calculations." },
    { title: "Client Relationship (CRM)", description: "SMS and WhatsApp automated notification triggers and status logs." },
    { title: "Cloud Integration", description: "Encrypted daily backup cycles, 24/7 web access, and role-based permissions." }
  ];

  const benefits = [
    { title: "Reduce Manual Friction", desc: "Eliminate spreadsheet workarounds. Unify departments into a single secure ledger." },
    { title: "Enhanced Audit Trail", desc: "Every transaction, invoice revision, and dispatch is logged with strict user identifiers." },
    { title: "Data-Driven Growth", desc: "Identify high-margin products and cost leakages with advanced analytics." }
  ];

  return (
    <div className="py-12 bg-navy-50/30 dark:bg-navy-950/20">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <h1 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Enterprise Suite</h1>
        <h2 className="font-sans font-black text-4xl sm:text-5xl text-navy-900 dark:text-white mb-6">
          Smart ERP Solutions for Modern Businesses
        </h2>
        <p className="text-navy-600 dark:text-navy-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Scale your enterprise operations with vertical-specific software modules. Our systems are built around your actual industry workflows, ensuring maximum user adoption and minimal setup friction.
        </p>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {erpProducts.map((erp) => {
            const IconComp = iconMap[erp.icon] || Cpu;
            return (
              <div key={erp.slug} className="glass-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-navy-100/40 dark:border-navy-800/40">
                <div className="p-6 sm:p-8 flex-grow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center flex-shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-lg text-navy-900 dark:text-white">
                        {erp.name}
                      </h3>
                      <span className="text-[10px] text-gold-500 font-semibold tracking-wider uppercase bg-gold-500/5 px-2 py-0.5 rounded border border-gold-500/10">
                        Active Module
                      </span>
                    </div>
                  </div>
                  <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed mb-6">
                    {erp.shortDesc}
                  </p>
                  <ul className="space-y-2">
                    {erp.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="text-xs text-navy-500 dark:text-navy-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                        <span>{feat.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-navy-100/20 dark:bg-navy-900/30 border-t border-navy-100/30 dark:border-navy-800/30 rounded-b-2xl">
                  <Link
                    to={`/erp/${erp.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-500 hover:text-gold-400 group/link transition-colors"
                  >
                    View detailed roadmap 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="bg-navy-900 text-white py-24 mb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/[0.01] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-3">Modular Engine</h2>
            <h3 className="font-sans font-bold text-3xl text-white">
              Core Capabilities in Every Implementation
            </h3>
            <p className="text-navy-300 mt-4 text-sm sm:text-base">
              Each vertical module shares our robust enterprise foundation, providing top-tier speed, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-navy-850 border border-navy-800 hover:border-gold-500/35 transition-colors">
                <h4 className="font-sans font-bold text-lg text-white mb-2">{f.title}</h4>
                <p className="text-navy-300 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="glass-card p-8 border border-navy-100/40 dark:border-navy-850">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-xl text-navy-900 dark:text-white mb-3">{b.title}</h4>
              <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="glass-card p-12 bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 text-white border-none shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[80px]" />
          <h3 className="font-sans font-bold text-3xl mb-4 relative z-10">Ready to Modernize Your Operations?</h3>
          <p className="text-navy-300 max-w-xl mx-auto text-sm leading-relaxed mb-8 relative z-10">
            Let's discuss your custom configurations. Request a priority layout review and demo session with our products team.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold transition-all relative z-10 active:scale-95 shadow-lg shadow-gold-500/10"
          >
            Schedule Custom Demo
          </button>
        </div>
      </section>

      <RequestModal isOpen={isOpen} onClose={() => setIsOpen(false)} type="demo" />
    </div>
  );
}
