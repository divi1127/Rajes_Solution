import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, ShieldCheck, Zap, Activity, RefreshCw, Eye, 
  ArrowRight, CheckCircle2, ChevronRight, Play, Terminal 
} from 'lucide-react';
import { dbaServices } from '../data/dbaData';
import RequestModal from '../components/RequestModal';

export default function RemoteDBASupport() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "24/7 Remote DBA Support & SQL Tuning | Rajes Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Get high-performance remote DBA support. 24/7 database monitoring, query tuning, AlwaysOn configurations, backup planning, and migration support.");
    }
  }, []);

  const iconMap = {
    Database: Database,
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    Activity: Activity,
    RefreshCw: RefreshCw,
    ShieldAlert: ShieldCheck // Fallback
  };

  const steps = [
    { num: '01', title: 'Comprehensive Audit', desc: 'We assess server configurations, trace slow index queries, and flag storage limits.' },
    { num: '02', title: '24/7 Monitoring Setup', desc: 'Deploy lightweight collectors to track CPU levels, blocking processes, and disk states.' },
    { num: '03', title: 'Active Optimization', desc: 'Rewrite queries, reorganize indexing structures, and implement high availability clusters.' },
    { num: '04', title: 'Continuous Governance', desc: 'Provide weekly performance logs, verify database backups, and apply security patches.' }
  ];

  const dbTechs = [
    { name: 'Microsoft SQL Server', roles: 'AlwaysOn Availability Groups, SSRS/SSIS, Performance Tuning' },
    { name: 'SAP HANA', roles: 'Memory optimization, scale-out administrations, database audits' },
    { name: 'MySQL & PostgreSQL', roles: 'Replication setups, query index optimization, backup verification' },
    { name: 'Sybase ASE & IQ', roles: 'Legacy maintenance, security patching, storage analysis' }
  ];

  return (
    <div className="py-12 bg-navy-50/20 dark:bg-navy-950/20">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 dark:text-gold-400 text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-ping" />
              SLA Backed Database Reliability
            </div>
            <h1 className="font-sans font-black text-4xl sm:text-5xl text-navy-900 dark:text-white leading-tight mb-6">
              Enterprise Remote DBA Services
            </h1>
            <p className="text-navy-600 dark:text-navy-300 text-base sm:text-lg leading-relaxed mb-8">
              Protect your database assets and eliminate downtime. Our certified team of remote database administrators monitors, tunes, and secures your infrastructures round-the-clock.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 shadow-lg shadow-gold-500/10 transition-all active:scale-95 cursor-pointer"
            >
              Get Free SQL Health Check &rarr;
            </button>
          </div>

          {/* Database Monitor Graphic */}
          <div className="lg:col-span-5 relative animate-float">
            <div className="absolute inset-0 bg-gold-500/5 dark:bg-gold-500/10 rounded-2xl blur-xl opacity-60" />
            <div className="relative glass-card p-6 border-white/20 dark:border-navy-850 shadow-2xl bg-navy-900/90 text-navy-200 font-mono text-xs overflow-hidden">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-navy-800">
                <Terminal className="w-4 h-4 text-gold-500" />
                <span className="text-white font-semibold">sql_health_dashboard.sql</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-navy-400">Server Name:</span>
                  <span className="text-white">PROD-DB-CLUSTER</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-400">Uptime SLA:</span>
                  <span className="text-emerald-400 font-bold">99.998%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-400">Database Engine:</span>
                  <span className="text-gold-450">SQL Server 2022 Enterprise</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-400">AlwaysOn Sync State:</span>
                  <span className="text-emerald-400 font-semibold">SYNCHRONIZED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-400">TempDB Allocation:</span>
                  <span className="text-emerald-400">Healthy (0.2% Write Wait)</span>
                </div>
                <div className="p-3 bg-navy-950/80 rounded border border-navy-850 text-[10px] text-navy-300">
                  <span className="text-gold-400">$</span> exec sp_whoisactive;<br />
                  <span className="text-navy-400">-- 0 active locks, 18 background processes sleeping. --</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">DBA Capabilities</h2>
          <h3 className="font-sans font-black text-3xl text-navy-900 dark:text-white">
            Comprehensive Database Administration
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dbaServices.map((service) => {
            const IconComp = iconMap[service.icon] || Database;
            return (
              <div key={service.slug} className="glass-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-navy-100/40 dark:border-navy-800/40">
                <div className="p-6 sm:p-8 flex-grow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center flex-shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-sans font-bold text-lg text-navy-900 dark:text-white">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                  <ul className="space-y-2 text-xs text-navy-500 dark:text-navy-400">
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span><strong>{cap.title}:</strong> {cap.description}</span>
                      </li>
                    ))}
                  </ul>
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
      </section>

      {/* Database Technologies */}
      <section className="bg-navy-900 text-white py-24 mb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-gold-450 uppercase tracking-widest mb-3">Core Stack</h2>
            <h3 className="font-sans font-bold text-3xl text-white">
              Supported Database Technologies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dbTechs.map((tech, i) => (
              <div key={i} className="p-6 sm:p-8 rounded-2xl bg-navy-850 border border-navy-800 flex gap-4 hover:border-gold-500/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg text-white mb-2">{tech.name}</h4>
                  <p className="text-navy-300 text-sm leading-relaxed">{tech.roles}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Deployment</h2>
          <h3 className="font-sans font-black text-3xl text-navy-900 dark:text-white">
            Our Support Process
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card p-6 border border-navy-100/40 dark:border-navy-850 relative group">
              <div className="absolute top-4 right-4 text-3xl font-black text-navy-100 dark:text-navy-900 group-hover:text-gold-500/20 transition-colors font-mono">
                {step.num}
              </div>
              <h4 className="font-sans font-bold text-lg text-navy-900 dark:text-white mb-3 mt-4">
                {step.title}
              </h4>
              <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us & CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center pb-12">
        <div className="glass-card p-12 bg-gradient-to-r from-navy-900 to-navy-950 text-white border-none shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[80px]" />
          <h3 className="font-sans font-bold text-3xl mb-4">Request a Complimentary Database Audit</h3>
          <p className="text-navy-300 max-w-xl mx-auto text-sm leading-relaxed mb-8">
            Identify execution bottlenecks, trace index fragmentation, and confirm backup integrity. Register for a free security and optimization report.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold transition-all active:scale-95 shadow-lg shadow-gold-500/10"
          >
            Claim Free SQL Health Check
          </button>
        </div>
      </section>

      <RequestModal isOpen={isOpen} onClose={() => setIsOpen(false)} type="health" />
    </div>
  );
}
