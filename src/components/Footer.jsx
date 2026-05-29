import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-900 text-navy-200 border-t border-navy-800 pt-16 pb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center shadow-lg">
                <span className="font-extrabold text-navy-950 text-sm">RS</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                RAJES <span className="text-gold-400">SOLUTIONS</span>
              </span>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              Empowering enterprises with smart tailored ERP products and elite 24/7 Remote DBA administration. Accelerating database operations and business pipelines globally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-lg bg-navy-850 hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center text-navy-300 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-navy-850 hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center text-navy-300 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918825733129" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-navy-850 hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center text-navy-300 transition-all">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ERP Products shortcuts */}
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase text-sm mb-6 pb-2 border-b border-navy-800">
              ERP Solutions
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/erp/workshop-erp" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Workshop ERP
                </Link>
              </li>
              <li>
                <Link to="/erp/school-erp" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> School ERP
                </Link>
              </li>
              <li>
                <Link to="/erp/payroll-erp" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Payroll ERP
                </Link>
              </li>
              <li>
                <Link to="/erp/hospital-erp" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Hospital ERP
                </Link>
              </li>
              <li>
                <Link to="/erp-solutions" className="text-gold-400 font-semibold hover:underline transition-colors block mt-2">
                  View All ERP products &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* DBA Services shortcuts */}
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase text-sm mb-6 pb-2 border-b border-navy-800">
              DBA Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/dba/sql-server-administration" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> SQL Server Admin
                </Link>
              </li>
              <li>
                <Link to="/dba/performance-tuning" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Performance Tuning
                </Link>
              </li>
              <li>
                <Link to="/dba/backup-recovery" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Backup & Recovery
                </Link>
              </li>
              <li>
                <Link to="/dba/security-management" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Database Security
                </Link>
              </li>
              <li>
                <Link to="/remote-dba-support" className="text-gold-400 font-semibold hover:underline transition-colors block mt-2">
                  View All DBA support &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase text-sm mb-6 pb-2 border-b border-navy-800">
              Stay Updated
            </h3>
            <p className="text-navy-300 text-sm mb-4">
              Subscribe to receive DBA optimization tips and ERP insights.
            </p>
            <form onSubmit={handleSubmit} className="mb-6 relative">
              <div className="flex">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-navy-850 border border-navy-800 rounded-l-xl text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 rounded-r-xl transition-all flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {submitted && (
                <div className="absolute left-0 bottom-[-28px] text-xs text-emerald-400 flex items-center gap-1 animate-pulse">
                  <CheckCircle2 className="w-3 h-3" /> Subscribed successfully!
                </div>
              )}
            </form>

            <div className="space-y-2 text-sm text-navy-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>Rajes Solutions Office, TN, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="tel:+918825733129" className="hover:text-gold-400">+91 88257 33129</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@rajessolutions.com" className="hover:text-gold-400">info@rajessolutions.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright / policy */}
        <div className="border-t border-navy-850 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-navy-400">
          <p>&copy; {currentYear} Rajes Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
