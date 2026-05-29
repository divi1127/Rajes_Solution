import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, ShieldCheck, Cpu, ArrowRight, CheckCircle2, Star, 
  Settings, Users, Wrench, GraduationCap, Briefcase, Sun, HeartPulse, ShoppingCart 
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import RequestModal from '../components/RequestModal';
import { erpProducts } from '../data/erpData';
import { dbaServices } from '../data/dbaData';

export default function Home() {
  const [modalState, setModalState] = useState({ isOpen: false, type: 'demo' });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const openModal = (type) => setModalState({ isOpen: true, type });
  const closeModal = () => setModalState({ isOpen: false, type: 'demo' });

  // Map icon strings to Lucide components
  const iconMap = {
    Wrench: Wrench,
    GraduationCap: GraduationCap,
    Briefcase: Briefcase,
    Sun: Sun,
    HeartPulse: HeartPulse,
    ShoppingCart: ShoppingCart,
    Settings: Settings,
    Database: Database,
    Zap: Cpu,
    ShieldCheck: ShieldCheck
  };

  const stats = [
    { target: 20, suffix: '+', label: 'Years Experience' },
    { target: 100, suffix: '+', label: 'Enterprise Clients' },
    { target: 24, suffix: '/7', label: 'Engineers Support' },
    { target: 99, suffix: '.9%', label: 'Database Uptime' }
  ];

  const technologies = [
    { name: 'SQL Server', category: 'Database' },
    { name: 'SAP HANA', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'ASP.NET', category: 'Framework' },
    { name: 'SSRS', category: 'Analytics' },
    { name: 'SSIS', category: 'Integration' }
  ];

  const testimonials = [
    {
      quote: "Rajes Solutions transformed our workshop administration. Billing takes seconds and customers love the automatic status alerts.",
      author: "Sundar Rajan",
      role: "Operations Director, TVS Motors Dealership",
      rating: 5
    },
    {
      quote: "Our production database suffered from locking deadlocks. Rajes Solutions' performance tuning speeded up response rates immediately, saving our cloud scale budget.",
      author: "Meera Krishnan",
      role: "CTO, FinTech Services Ltd",
      rating: 5
    },
    {
      quote: "Managing a hospital database requires complete reliability. Their 24/7 Remote DBA team resolves issues before users notice.",
      author: "Dr. K. Raghavan",
      role: "Medical Superintendent, Lifeline Hospital",
      rating: 5
    }
  ];

  const previewERPs = erpProducts.slice(0, 3);
  const previewDBAs = dbaServices.slice(0, 3);

  return (
    <div className="relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-navy-50/50 dark:to-navy-950/20">
        
        {/* Animated Particles background simulation */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-gold-500/5 dark:bg-gold-500/10 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-navy-800/25 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 dark:text-gold-400 text-xs font-semibold mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-ping" />
              Trusted Enterprise IT Partner
            </div>
            
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-navy-900 dark:text-white leading-[1.1] mb-6">
              Enterprise ERP Solutions <br />
              <span className="text-gradient-gold font-black">&amp; 24/7 Remote DBA</span>
            </h1>

            <p className="text-navy-600 dark:text-navy-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Unlock scaling limits with tailored ERP software modules and premium database optimization. We maintain and secure database engines (SQL Server, SAP HANA) while optimizing billing and inventory pipelines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => openModal('demo')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 active:scale-95 transition-all cursor-pointer"
              >
                Request Free Demo
              </button>
              <button
                onClick={() => openModal('health')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-white dark:bg-navy-900 hover:bg-navy-100 dark:hover:bg-navy-800 text-navy-900 dark:text-white border border-navy-200 dark:border-navy-800 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Free SQL Health Check
              </button>
            </div>
          </div>

          {/* Hero Right Graphics (Dashboard Mockup) */}
          <div className="lg:col-span-5 relative animate-float">
            <div className="relative mx-auto max-w-[400px] lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-70 -z-10" />

              {/* Glassmorphic Board */}
              <div className="glass-card p-6 shadow-2xl relative border-white/20 dark:border-navy-800/40">
                <div className="flex items-center justify-between border-b border-navy-100 dark:border-navy-800/60 pb-4 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs text-navy-400 font-mono">db_monitor_console.sh</span>
                </div>

                {/* Simulated charts/metrics */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-3 bg-navy-100/50 dark:bg-navy-950/50 rounded-lg">
                    <div className="flex justify-between text-navy-500 dark:text-navy-400 mb-1">
                      <span>Database CPU load</span>
                      <span className="text-emerald-500">Normal (12%)</span>
                    </div>
                    <div className="w-full bg-navy-200 dark:bg-navy-900 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[12%] transition-all" />
                    </div>
                  </div>

                  <div className="p-3 bg-navy-100/50 dark:bg-navy-950/50 rounded-lg">
                    <div className="flex justify-between text-navy-500 dark:text-navy-400 mb-1">
                      <span>Query response latency</span>
                      <span className="text-emerald-500">4ms (Optimized)</span>
                    </div>
                    <div className="w-full bg-navy-200 dark:bg-navy-900 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-500 to-gold-400 h-full w-[15%]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-navy-100/50 dark:bg-navy-950/50 rounded-lg text-center">
                      <div className="text-navy-400 text-[10px] uppercase">Active Locks</div>
                      <div className="text-lg font-bold text-white mt-1">0</div>
                    </div>
                    <div className="p-3 bg-navy-100/50 dark:bg-navy-950/50 rounded-lg text-center">
                      <div className="text-navy-400 text-[10px] uppercase">Backup Status</div>
                      <div className="text-lg font-bold text-emerald-400 mt-1 flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> OK
                      </div>
                    </div>
                  </div>

                  {/* Tech stack floaters overlay */}
                  <div className="border border-gold-500/20 bg-navy-900/90 text-gold-400 p-2.5 rounded-lg flex items-center gap-2 mt-2">
                    <ShieldCheck className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span>24/7 AlwaysOn Monitoring Active</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. TRUSTED TECHNOLOGIES LOGO SLIDER */}
      <section className="py-10 bg-navy-900 dark:bg-navy-950/60 border-y border-navy-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <p className="text-xs font-semibold text-navy-400 uppercase tracking-widest">
            Supporting Industry Leading Infrastructure &amp; Databases
          </p>
        </div>
        <div className="relative w-full flex items-center justify-center">
          {/* Logo slider wrapper */}
          <div className="w-full max-w-5xl overflow-hidden py-4 mask-gradient">
            <div className="logo-slider gap-16 flex items-center">
              {/* Double up the list for infinite loops */}
              {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2 text-white/40 hover:text-gold-400 transition-colors cursor-pointer select-none">
                  <Database className="w-4 h-4 text-gold-500/50" />
                  <span className="font-bold font-sans text-sm sm:text-base tracking-wider">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS HIGHLIGHTS */}
      <section className="py-20 bg-white dark:bg-navy-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 glass-card border-none hover:shadow-xl transition-all">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 dark:text-white mb-2 font-sans">
                  <span className="text-gold-500">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-navy-500 dark:text-navy-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ERP SOLUTIONS PREVIEW */}
      <section className="py-20 bg-navy-50/55 dark:bg-navy-900/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Enterprise Software</h2>
            <h3 className="font-sans font-black text-3xl sm:text-4xl text-navy-900 dark:text-white">
              Tailored ERP Products for Specific Verticals
            </h3>
            <p className="text-navy-600 dark:text-navy-300 mt-4 text-sm sm:text-base leading-relaxed">
              Don't compromise with generic systems. We build and maintain specialized ERP setups configured to automate your specific business workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {previewERPs.map((erp) => {
              const IconComp = iconMap[erp.icon] || Cpu;
              return (
                <div key={erp.slug} className="glass-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-navy-100/40 dark:border-navy-800/40">
                  <div className="p-6 sm:p-8 flex-grow">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="font-sans font-bold text-xl text-navy-900 dark:text-white mb-3">
                      {erp.name}
                    </h4>
                    <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed mb-6 line-clamp-3">
                      {erp.shortDesc}
                    </p>
                    <ul className="space-y-2">
                      {erp.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="text-xs text-navy-500 dark:text-navy-450 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" /> {f.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-navy-100/20 dark:bg-navy-900/30 border-t border-navy-100/30 dark:border-navy-800/30 rounded-b-2xl">
                    <Link
                      to={`/erp/${erp.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-500 hover:text-gold-400 group/link transition-colors"
                    >
                      Explore features 
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/erp-solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 dark:bg-navy-800 hover:bg-gold-500 dark:hover:bg-gold-500 hover:text-navy-950 text-white font-bold text-sm transition-all border border-navy-700/30 shadow-md"
            >
              View All ERP Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. DBA SERVICES PREVIEW */}
      <section className="py-20 bg-white dark:bg-navy-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Database Administration</h2>
            <h3 className="font-sans font-black text-3xl sm:text-4xl text-navy-900 dark:text-white">
              24/7 Professional Remote DBA Support
            </h3>
            <p className="text-navy-600 dark:text-navy-300 mt-4 text-sm sm:text-base leading-relaxed">
              Achieve continuous data availability and accelerate query performance. Our certified DBAs optimize indices, secure backups, and monitor metrics round the-clock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {previewDBAs.map((service) => {
              const IconComp = iconMap[service.icon] || Database;
              return (
                <div key={service.slug} className="glass-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-navy-100/40 dark:border-navy-800/40">
                  <div className="p-6 sm:p-8 flex-grow">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="font-sans font-bold text-xl text-navy-900 dark:text-white mb-3">
                      {service.name}
                    </h4>
                    <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed mb-6 line-clamp-3">
                      {service.shortDesc}
                    </p>
                    <div className="space-y-2">
                      {service.capabilities.slice(0, 2).map((c, i) => (
                        <div key={i} className="text-xs text-navy-500 dark:text-navy-400">
                          <strong className="text-navy-700 dark:text-navy-200">{c.title}:</strong> {c.description}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 bg-navy-100/20 dark:bg-navy-900/30 border-t border-navy-100/30 dark:border-navy-800/30 rounded-b-2xl">
                    <Link
                      to={`/dba/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-500 hover:text-gold-400 group/link transition-colors"
                    >
                      View deliverables 
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/remote-dba-support"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 dark:bg-navy-800 hover:bg-gold-500 dark:hover:bg-gold-500 hover:text-navy-950 text-white font-bold text-sm transition-all border border-navy-700/30 shadow-md"
            >
              Explore DBA Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="py-20 bg-navy-50/50 dark:bg-navy-900/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Target Sectors</h2>
            <h3 className="font-sans font-black text-3xl sm:text-4xl text-navy-900 dark:text-white">
              Industries Served
            </h3>
            <p className="text-navy-600 dark:text-navy-300 mt-4 text-sm sm:text-base leading-relaxed">
              We specialize in engineering technical infrastructure for challenging domains.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Manufacturing', icon: Settings, link: '/erp/manufacturing-erp' },
              { name: 'Automobile', icon: Wrench, link: '/erp/workshop-erp' },
              { name: 'Retail & Grocery', icon: ShoppingCart, link: '/erp/supermarket-erp' },
              { name: 'Education', icon: GraduationCap, link: '/erp/school-erp' },
              { name: 'Healthcare', icon: HeartPulse, link: '/erp/hospital-erp' }
            ].map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <Link
                  key={i}
                  to={ind.link}
                  className="glass-card border border-navy-100/40 dark:border-navy-800/40 p-6 flex flex-col items-center text-center hover:border-gold-500/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-100 dark:bg-navy-900 text-navy-700 dark:text-navy-200 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center mb-4 transition-all duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-navy-800 dark:text-white font-sans">
                    {ind.name}
                  </h4>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS SLIDER SECTION */}
      <section className="py-20 bg-white dark:bg-navy-950 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Client Success</h2>
          <h3 className="font-sans font-black text-2xl sm:text-3xl text-navy-900 dark:text-white mb-12">
            Trusted by Leaders
          </h3>

          <div className="relative glass-card border border-navy-100/30 dark:border-navy-850 p-8 sm:p-12 shadow-2xl">
            {/* Quote details */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
              ))}
            </div>
            
            <p className="text-navy-700 dark:text-navy-200 text-base sm:text-lg italic leading-relaxed mb-8">
              "{testimonials[activeTestimonial].quote}"
            </p>

            <div>
              <h4 className="font-bold text-navy-900 dark:text-white font-sans text-base">
                {testimonials[activeTestimonial].author}
              </h4>
              <p className="text-navy-500 dark:text-navy-450 text-xs mt-0.5">
                {testimonials[activeTestimonial].role}
              </p>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2.5 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeTestimonial 
                      ? 'bg-gold-500 w-6' 
                      : 'bg-navy-200 dark:bg-navy-800'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-950 text-white relative overflow-hidden border-t border-navy-850">
        <div className="absolute inset-0 bg-gold-500/[0.02] mix-blend-overlay" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            Accelerate Your Technical Infrastructure Today
          </h2>
          <p className="text-navy-300 text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Speak with an enterprise specialist. Request a complete system demonstration or register for a complimentary database integrity audit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => openModal('demo')}
              className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 shadow-xl transition-all cursor-pointer"
            >
              Get Free ERP Demo
            </button>
            <button
              onClick={() => openModal('health')}
              className="px-8 py-4 rounded-xl font-bold bg-navy-850 hover:bg-navy-800 text-white border border-navy-850 transition-all cursor-pointer"
            >
              Request Free SQL Health Check
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <RequestModal 
        isOpen={modalState.isOpen} 
        onClose={closeModal} 
        type={modalState.type} 
      />
    </div>
  );
}
