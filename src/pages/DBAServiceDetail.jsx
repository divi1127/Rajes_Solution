import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle2, ChevronDown, HelpCircle, Database, Zap, 
  ShieldCheck, Activity, RefreshCw, Cpu 
} from 'lucide-react';
import { dbaServices } from '../data/dbaData';
import RequestModal from '../components/RequestModal';

export default function DBAServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const found = dbaServices.find(s => s.slug === slug);
    if (!found) {
      navigate('/remote-dba-support');
    } else {
      setService(found);
      // SEO
      document.title = found.seo.title || `${found.name} | Rajes Solutions`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", found.seo.description);
      }
    }
  }, [slug, navigate]);

  if (!service) return null;

  const iconMap = {
    Database: Database,
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    Activity: Activity,
    RefreshCw: RefreshCw,
    ShieldAlert: ShieldCheck
  };

  const ServiceIcon = iconMap[service.icon] || Database;

  return (
    <div className="pt-24 py-8 bg-navy-50/20 dark:bg-navy-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link 
          to="/remote-dba-support" 
          className="inline-flex items-center gap-2 text-sm font-bold text-navy-600 dark:text-navy-450 hover:text-gold-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to DBA Support
        </Link>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 dark:text-gold-400 text-xs font-semibold mb-4">
              Remote DBA Service Page
            </div>
            <h1 className="font-sans font-black text-4xl sm:text-5xl text-navy-900 dark:text-white leading-tight mb-4">
              {service.name}
            </h1>
            <p className="text-gold-500 dark:text-gold-400 font-semibold text-lg sm:text-xl mb-6">
              {service.tagline}
            </p>
            <p className="text-navy-600 dark:text-navy-300 text-base leading-relaxed mb-8">
              {service.longDesc}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 shadow-lg shadow-gold-500/10 transition-all cursor-pointer"
            >
              Get Free SQL Health Check
            </button>
          </div>

          {/* Visual console box */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gold-500/10 rounded-3xl blur-2xl opacity-60" />
            <div className="glass-card p-8 border-white/20 dark:border-navy-850 shadow-2xl flex flex-col items-center justify-center text-center relative z-10 min-h-[300px]">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-950 shadow-xl shadow-gold-500/20 mb-6 animate-pulse">
                <ServiceIcon className="w-10 h-10" />
              </div>
              <h3 className="font-sans font-bold text-xl text-navy-900 dark:text-white mb-2">
                {service.name} Support
              </h3>
              <p className="text-xs text-navy-500 dark:text-navy-450 max-w-xs">
                SLA backed engineers, regular auditing reports, and zero loss guarantees.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="text-[10px] font-bold px-2.5 py-1 bg-navy-100 dark:bg-navy-900 text-navy-600 dark:text-navy-300 rounded border dark:border-navy-800">
                  24/7/365 On-Call
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-navy-100 dark:bg-navy-900 text-navy-600 dark:text-navy-300 rounded border dark:border-navy-800">
                  SQL Audit
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="font-sans font-black text-2xl sm:text-3xl text-navy-900 dark:text-white text-center mb-12">
          Technical Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.capabilities.map((cap, idx) => (
            <div key={idx} className="glass-card p-6 sm:p-8 border border-navy-100/40 dark:border-navy-800/40 hover:border-gold-500/20 transition-all flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center flex-shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-navy-900 dark:text-white mb-2">
                  {cap.title}
                </h3>
                <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables Checklist */}
      <section className="bg-navy-900 text-white py-20 mb-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-center mb-12 text-white">
            What You Receive
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.deliverables.map((deliv, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl bg-navy-850 border border-navy-800">
                <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-450 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-navy-200 text-sm">{deliv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expandable FAQs */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-24">
        <h2 className="font-sans font-black text-2xl sm:text-3xl text-center mb-12 text-navy-900 dark:text-white">
          Service Questions &amp; Answers
        </h2>
        <div className="space-y-4">
          {service.faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div 
                key={i} 
                className="glass-card overflow-hidden border border-navy-100/40 dark:border-navy-800/40"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-navy-800 dark:text-white hover:text-gold-500 focus:outline-none transition-colors"
                >
                  <span className="font-sans text-sm sm:text-base flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-navy-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-navy-600 dark:text-navy-300 leading-relaxed border-t border-navy-100/20 dark:border-navy-850 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 text-center pb-12">
        <div className="glass-card p-10 bg-gradient-to-r from-navy-900 to-navy-950 text-white border-none shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-[80px]" />
          <h3 className="font-sans font-bold text-2xl mb-3">Claim Your SQL Health Check Today</h3>
          <p className="text-navy-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed mb-6">
            Get a clear diagnostic review detailing query speed improvements and data security vulnerabilities.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold transition-all active:scale-95 shadow-md shadow-gold-500/10"
          >
            Schedule Free Audit
          </button>
        </div>
      </section>

      <RequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type="health" />
    </div>
  );
}
