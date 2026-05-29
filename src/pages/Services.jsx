import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Database, Code, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  useEffect(() => {
    document.title = "Our Services | ERP & Remote DBA | Rajes Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore our enterprise service portfolio. Specialized ERP product implementation, 24/7 Remote DBA support, and custom software development.");
    }
  }, []);

  const categories = [
    {
      title: "ERP Products & Services",
      icon: Cpu,
      intro: "We build and implement specialized ERP suites designed around unique business workflows.",
      items: [
        "Custom ERP design & architecture",
        "Biometric and payroll module integration",
        "Inventory and billing automation",
        "Employee self-service and TPA integrations"
      ],
      link: "/erp-solutions",
      linkText: "Explore ERP products"
    },
    {
      title: "Remote DBA Support",
      icon: Database,
      intro: "SLA-backed 24/7 database administration, monitoring, and index optimization.",
      items: [
        "SQL Server AlwaysOn setup & administration",
        "Proactive slow query tuning & lock checks",
        "Automated backup verify & recovery verify",
        "Cloud-native re-platform migrations"
      ],
      link: "/remote-dba-support",
      linkText: "Explore DBA capabilities"
    },
    {
      title: "Web & Custom Development",
      icon: Code,
      intro: "Custom web applications and systems scaling your digital footprint.",
      items: [
        "Full stack custom web applications",
        "Legacy system API integrations",
        "SSRS & Power BI reporting dashboards",
        "Secure cloud hosting configurations"
      ],
      link: "/contact-us",
      linkText: "Discuss custom projects"
    }
  ];

  return (
    <div className="py-12 bg-navy-50/20 dark:bg-navy-950/20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <h1 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Enterprise Catalog</h1>
        <h2 className="font-sans font-black text-4xl sm:text-5xl text-navy-900 dark:text-white mb-6">
          Our Services Portfolio
        </h2>
        <p className="text-navy-600 dark:text-navy-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Comprehensive technology offerings designed to optimize your backend database architectures and automate frontline business workflows.
        </p>
      </section>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => {
            const IconComp = cat.icon;
            return (
              <div key={i} className="glass-card hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-navy-100/40 dark:border-navy-850">
                <div className="p-6 sm:p-8 flex-grow">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-navy-900 dark:text-white mb-4">
                    {cat.title}
                  </h3>
                  <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed mb-6">
                    {cat.intro}
                  </p>
                  <ul className="space-y-3.5 mb-8">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-600 dark:text-navy-305">
                        <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-navy-100/20 dark:bg-navy-900/30 border-t border-navy-100/30 dark:border-navy-800/30 rounded-b-2xl">
                  <Link
                    to={cat.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-500 hover:text-gold-400 group transition-colors"
                  >
                    {cat.linkText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="glass-card p-12 bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 text-white border-none shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[80px]" />
          <h3 className="font-sans font-bold text-3xl mb-4 relative z-10">Need a Custom Software Solution?</h3>
          <p className="text-navy-300 max-w-xl mx-auto text-sm leading-relaxed mb-8 relative z-10">
            Let's build web apps or reporting systems matching your specific infrastructure. Speak with our lead architect today.
          </p>
          <Link
            to="/contact-us"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold transition-all relative z-10 active:scale-95 shadow-lg shadow-gold-500/10"
          >
            Consult with Our Architect
          </Link>
        </div>
      </section>

    </div>
  );
}
