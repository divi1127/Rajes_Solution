import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RequestModal({ isOpen, onClose, type = 'demo' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: type === 'demo' ? 'workshop-erp' : 'performance-tuning',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const waText = encodeURIComponent(`Hello Rajes Solutions,\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n${type === 'demo' ? 'Product' : 'Database'}: ${formData.product}\nMessage: ${formData.message}`);
    window.open(`https://wa.me/918825733129?text=${waText}`, '_blank');
    const subject = encodeURIComponent(`Rajes Solutions - ${type === 'demo' ? 'ERP Demo Request' : 'SQL Health Check'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n${type === 'demo' ? 'Product' : 'Database'}: ${formData.product}\nMessage: ${formData.message}`);
    setTimeout(() => {
      window.location.href = `mailto:saravanan.soundararajan@rajessolutions.com?subject=${subject}&body=${body}`;
    }, 300);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: type === 'demo' ? 'workshop-erp' : 'performance-tuning',
        message: ''
      });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg glass-card overflow-hidden z-10 p-6 sm:p-8"
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-navy-100 dark:hover:bg-navy-800 text-navy-400 dark:text-navy-500 hover:text-navy-700 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-500 mb-6 border border-emerald-400/20">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <h3 className="font-sans font-bold text-2xl text-navy-900 dark:text-white mb-2">
                  Request Submitted!
                </h3>
                <p className="text-navy-600 dark:text-navy-300 text-sm max-w-sm">
                  Thank you. Our database and systems engineering specialists will reach out within 2 hours to coordinate your custom roadmap.
                </p>
                <div className="mt-6 text-xs text-gold-500 dark:text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                  Priority Queue Active
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500">
                    {type === 'demo' ? <Cpu className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xl text-navy-900 dark:text-white">
                      {type === 'demo' ? 'Request an ERP Demo' : 'Free SQL Health Check'}
                    </h3>
                    <p className="text-xs text-navy-500 dark:text-navy-400">
                      {type === 'demo' ? 'Experience our modules tailormade for you.' : 'Identify query speed limits and storage risks.'}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy-700 dark:text-navy-300 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 rounded-xl text-sm focus:outline-none focus:border-gold-500 text-navy-950 dark:text-white transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy-700 dark:text-navy-300 mb-1.5">Business Email *</label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 rounded-xl text-sm focus:outline-none focus:border-gold-500 text-navy-950 dark:text-white transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy-700 dark:text-navy-300 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 rounded-xl text-sm focus:outline-none focus:border-gold-500 text-navy-950 dark:text-white transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy-700 dark:text-navy-300 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 rounded-xl text-sm focus:outline-none focus:border-gold-500 text-navy-950 dark:text-white transition-colors"
                        placeholder="Enterprise Inc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-700 dark:text-navy-300 mb-1.5">
                      {type === 'demo' ? 'Select ERP Product' : 'Database Type'}
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 rounded-xl text-sm focus:outline-none focus:border-gold-500 text-navy-950 dark:text-white transition-colors"
                    >
                      {type === 'demo' ? (
                        <>
                          <option value="workshop-erp">Workshop ERP</option>
                          <option value="school-erp">School ERP</option>
                          <option value="payroll-erp">Payroll ERP</option>
                          <option value="temple-erp">Temple ERP</option>
                          <option value="hospital-erp">Hospital ERP</option>
                          <option value="supermarket-erp">Supermarket ERP</option>
                          <option value="manufacturing-erp">Manufacturing ERP</option>
                          <option value="textile-erp">Textile ERP</option>
                        </>
                      ) : (
                        <>
                          <option value="sql-server">Microsoft SQL Server</option>
                          <option value="sap-hana">SAP HANA</option>
                          <option value="mysql">MySQL</option>
                          <option value="sybase">Sybase</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-700 dark:text-navy-300 mb-1.5">Requirements / Message</label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 rounded-xl text-sm focus:outline-none focus:border-gold-500 text-navy-950 dark:text-white transition-colors"
                      placeholder="Outline any special needs or volume specifications."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold rounded-xl shadow-lg transition-all active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    Submit Request
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
