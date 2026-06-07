import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Settings, Wrench, ShoppingCart, GraduationCap, HeartPulse, Scissors, 
  ArrowRight, ShieldCheck 
} from 'lucide-react';

export default function Industries() {
  useEffect(() => {
    document.title = "Industries Served | Vertical Expertise | Rajes Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore our industry solutions. Customized ERP software for Manufacturing, Automobile garages, Retail supermarkets, Education, Healthcare, and Textiles.");
    }
  }, []);

  const industriesList = [
    {
      name: "Manufacturing",
      icon: Settings,
      desc: "Manage raw material dispatches, track WIP floor cycles, log machine downtimes, and configure multi-tier Bill of Materials (BOM).",
      challenges: ["Component inventory leakage", "Overhead cost allocations", "Preventive plant shutdowns"],
      link: "/erp/manufacturing-erp"
    },
    {
      name: "Automobile & Garages",
      icon: Wrench,
      desc: "Process digital job cards, optimize mechanic schedules, coordinate spare parts, and automate customer update alerts.",
      challenges: ["Vague parts inventories", "Manual mechanic tracking", "Low repeat servicing rates"],
      link: "/erp/workshop-erp"
    },
    {
      name: "Retail & Supermarkets",
      icon: ShoppingCart,
      desc: "Maintain fast checkout billing with offline-ready POS consoles, track product batch numbers, and automate supplier orders.",
      challenges: ["FMCG stock expirations", "Internet billing downtimes", "Manual stock counts"],
      link: "/erp/supermarket-erp"
    },
    {
      name: "Education & Schools",
      icon: GraduationCap,
      desc: "Digitize student registration, automate recurring school fees, process online exam grade cards, and support parent portals.",
      challenges: ["Paper fee record-keeping", "Inefficient schedule allocations", "Poor parent notifications"],
      link: "/erp/school-erp"
    },
    {
      name: "Healthcare & Clinics",
      icon: HeartPulse,
      desc: "Unify outpatient (OPD) consults, bed assignments, EHR history logs, lab billing, and insurance approvals.",
      challenges: ["Disjoined patient data folders", "Slow bed allocations", "Complex insurance bills"],
      link: "/erp/hospital-erp"
    },
    {
      name: "Textile & Garments",
      icon: Scissors,
      desc: "Manage inventory using SKU color-size-design grid parameters, plan weaving loom runs, and export custom invoices.",
      challenges: ["Bloated stock catalog variants", "Loose loom efficiency checks", "Manual container pack lists"],
      link: "/erp/textile-erp"
    }
  ];

  return (
    <div className="py-12 bg-navy-50/20 dark:bg-navy-950/20">
      
      {/* Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-20 px-4 overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/736x/20/73/8c/20738cd66ff7cd69f89e236e5debe381.jpg" 
            alt="Industries Hero" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-navy-950/20 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-50/20 dark:to-navy-950/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Domain Focus</h1>
          <h2 className="font-sans font-black text-4xl sm:text-6xl text-white mb-6">
            Industries We Serve
          </h2>
          <p className="text-navy-100 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed text-shadow-sm">
            We engineer technical database models and custom ERP interfaces addressing the unique bottlenecks of specific industry verticals.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesList.map((ind, i) => {
            const IconComp = ind.icon;
            return (
              <div key={i} className="glass-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-navy-100/40 dark:border-navy-850">
                <div className="p-6 sm:p-8 flex-grow">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-sans font-bold text-2xl text-navy-900 dark:text-white mb-3">
                    {ind.name}
                  </h3>
                  
                  <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed mb-6">
                    {ind.desc}
                  </p>

                  <div className="border-t border-navy-100/30 dark:border-navy-800/40 pt-4">
                    <h4 className="text-xs font-bold text-navy-700 dark:text-navy-300 mb-2 uppercase tracking-wide">
                      Key Bottlenecks Solved:
                    </h4>
                    <ul className="space-y-1.5">
                      {ind.challenges.map((c, idx) => (
                        <li key={idx} className="text-xs text-navy-500 dark:text-navy-400 flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-gold-550 flex-shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-navy-100/20 dark:bg-navy-900/30 border-t border-navy-100/30 dark:border-navy-800/30 rounded-b-2xl">
                  <Link
                    to={ind.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-500 hover:text-gold-400 group transition-colors"
                  >
                    View system specs
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
