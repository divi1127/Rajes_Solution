import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle2, Globe } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Support & Consultation | Rajes Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Connect with Rajes Solutions. Reach out via email, phone, or WhatsApp. Request a custom ERP quote or standard SQL Server audits.");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="py-12 bg-navy-50/20 dark:bg-navy-950/20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <h1 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Communication</h1>
        <h2 className="font-sans font-black text-4xl sm:text-5xl text-navy-900 dark:text-white mb-6">
          Connect With Our Engineers
        </h2>
        <p className="text-navy-600 dark:text-navy-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Have an optimization query or interested in our ERP frameworks? Contact us to receive an integration review.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (Contact details) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-8 border border-navy-100/40 dark:border-navy-850">
              <h3 className="font-sans font-bold text-2xl text-navy-900 dark:text-white mb-6">
                Office Information
              </h3>
              
              <div className="space-y-6">
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-navy-850 dark:text-white mb-1">Office Location</h4>
                    <p className="text-xs sm:text-sm text-navy-600 dark:text-navy-300">
                      Rajes Solutions Headquarters,<br />
                      Tamil Nadu, India.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-navy-850 dark:text-white mb-1">Direct Calling</h4>
                    <p className="text-xs sm:text-sm text-navy-605 dark:text-navy-300">
                      <a href="tel:+918825733129" className="hover:text-gold-500 transition-colors">+91 88257 33129</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-navy-850 dark:text-white mb-1">Email Queries</h4>
                    <p className="text-xs sm:text-sm text-navy-605 dark:text-navy-300">
                      <a href="mailto:info@rajessolutions.com" className="hover:text-gold-500 transition-colors">info@rajessolutions.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-navy-850 dark:text-white mb-1">WhatsApp Chat</h4>
                    <p className="text-xs sm:text-sm text-navy-605 dark:text-navy-300">
                      <a href="https://wa.me/919443725515" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">Chat Live Now</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-navy-850 dark:text-white mb-1">Business Hours</h4>
                    <p className="text-xs sm:text-sm text-navy-505 dark:text-navy-400">
                      General: 9:00 AM - 6:00 PM (IST)<br />
                      Emergency DBA Support: <strong className="text-emerald-500">24/7/365</strong>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Embedded interactive styling placeholder */}
            <div className="glass-card p-1 text-center border-none overflow-hidden relative rounded-2xl shadow-xl h-[200px]">
              <div className="absolute inset-0 bg-navy-900/90 flex flex-col items-center justify-center text-white p-4">
                <Globe className="w-8 h-8 text-gold-500 mb-3 animate-spin-slow" />
                <h4 className="font-bold font-sans text-sm mb-1">Global Support Node</h4>
                <p className="text-[11px] text-navy-400 max-w-xs">
                  Connecting remote shell protocols securely to client datacenters across Asia, Middle East, and Europe.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Contact Form) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 border border-navy-100/40 dark:border-navy-850 shadow-2xl relative overflow-hidden">
              
              {submitted ? (
                <div className="py-24 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-500 border border-emerald-450/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-navy-900 dark:text-white mb-3">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-navy-600 dark:text-navy-300 text-sm max-w-md">
                    Thank you. Our database and systems engineering specialists will review your parameters and follow up shortly.
                  </p>
                  <div className="mt-8 text-xs text-gold-500 dark:text-gold-400 bg-gold-550/10 px-3 py-1 rounded-full border border-gold-500/20 animate-pulse">
                    Priority SLA Queue Assigned
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="font-sans font-bold text-2xl text-navy-900 dark:text-white mb-2">
                    Request a Custom Proposal
                  </h3>
                  <p className="text-xs text-navy-500 dark:text-navy-400 mb-8">
                    Submit your configurations to receive customized pricing packages and system blueprints.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-navy-700 dark:text-navy-300 mb-2 uppercase tracking-wider">Your Name *</label>
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 rounded-xl text-sm focus:outline-none focus:border-gold-500 text-navy-950 dark:text-white transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-navy-700 dark:text-navy-300 mb-2 uppercase tracking-wider">Business Email *</label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 rounded-xl text-sm focus:outline-none focus:border-gold-500 text-navy-950 dark:text-white transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-navy-700 dark:text-navy-300 mb-2 uppercase tracking-wider">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 rounded-xl text-sm focus:outline-none focus:border-gold-500 text-navy-950 dark:text-white transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-navy-700 dark:text-navy-300 mb-2 uppercase tracking-wider">Subject Topic</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 rounded-xl text-sm focus:outline-none focus:border-gold-500 text-navy-950 dark:text-white transition-colors"
                        >
                          <option value="general">General Support / Enquiry</option>
                          <option value="erp-workshop">Workshop ERP Demo</option>
                          <option value="erp-custom">Other ERP Customizations</option>
                          <option value="dba-tuning">SQL Performance Tuning</option>
                          <option value="dba-remote">24/7 Remote DBA support</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-700 dark:text-navy-300 mb-2 uppercase tracking-wider">Message Details *</label>
                      <textarea
                        required
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 rounded-xl text-sm focus:outline-none focus:border-gold-500 text-navy-950 dark:text-white transition-colors"
                        placeholder="Detail your database size, user volumes, or business workflows."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
