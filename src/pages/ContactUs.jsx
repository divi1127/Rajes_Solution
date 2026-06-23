import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle2, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'erp',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Enterprise IT Partner | Rajes Solutions";
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors">
      
      {/* Hero Header */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-navy-950/80 to-navy-950" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-bold tracking-widest uppercase mb-6">
            Get In Touch
          </span>
          <h1 className="font-sans font-black text-5xl sm:text-7xl mb-8 leading-tight text-white">
            Connect With <span className="text-gradient-gold">Our Team</span>
          </h1>
          <p className="text-navy-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to modernize your operations? Our specialists are available for discovery calls and technical consultations.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Info */}
          <div className="lg:col-span-12 xl:col-span-4 space-y-8">
            <div className="p-10 rounded-[3rem] bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800">
              <h3 className="text-2xl font-black mb-10 text-navy-900 dark:text-white uppercase tracking-tight">Corporate Office</h3>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-navy-800 text-gold-500 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-500 uppercase tracking-widest text-[10px] mb-2">Location</h4>
                    <p className="text-navy-800 dark:text-navy-200 font-bold leading-relaxed">
                      12, P.S. COMPLEX, TRICHY MAIN ROAD,<br />
                      OPP. GOVT. MEDICAL COLLEGE,<br />
                      NAMAKKAL - 637 001. TAMILNADU, INDIA.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-navy-800 text-gold-500 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-500 uppercase tracking-widest text-[10px] mb-2">Call Us</h4>
                    <p className="text-navy-800 dark:text-navy-200 font-bold">
                      +91 88257 33129<br />
                      +91 94437 25515
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-navy-800 text-gold-500 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-500 uppercase tracking-widest text-[10px] mb-2">Email</h4>
                    <p className="text-navy-800 dark:text-navy-200 font-bold">
                      rsrajesh99@gmail.com<br />
                      info@rajessolutions.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 border-t border-navy-200 dark:border-navy-800 pt-8">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 shadow-sm">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-500 uppercase tracking-widest text-[10px] mb-2">Live Chat</h4>
                    <a href="https://wa.me/919443725515" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 font-black flex items-center gap-2 hover:gap-3 transition-all">
                      WhatsApp Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Support Box */}
            <div className="p-8 rounded-[2rem] bg-navy-900 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gold-500/10 animate-pulse" />
              <div className="relative z-10 flex items-center gap-6">
                <Globe className="w-10 h-10 text-gold-500" />
                <div>
                  <h4 className="font-black uppercase tracking-widest text-xs mb-1">Support Status</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-bold text-sm">24/7 Global DBA Node Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-12 xl:col-span-8">
            <div className="p-10 sm:p-16 rounded-[3rem] bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 shadow-2xl relative overflow-hidden">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black mb-4">Message Received!</h3>
                  <p className="text-navy-600 dark:text-navy-400 text-lg max-w-md mx-auto">
                    Thank you for reaching out. A systems engineer will contact you shortly to discuss your requirements.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-400 dark:text-navy-500 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-navy-50 dark:bg-navy-950 border border-navy-100 dark:border-navy-800 focus:border-gold-500 focus:outline-none transition-all font-bold text-navy-900 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-400 dark:text-navy-500 ml-1">Business Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-navy-50 dark:bg-navy-950 border border-navy-100 dark:border-navy-800 focus:border-gold-500 focus:outline-none transition-all font-bold text-navy-900 dark:text-white"
                        placeholder="john@enterprise.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-400 dark:text-navy-500 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-navy-50 dark:bg-navy-950 border border-navy-100 dark:border-navy-800 focus:border-gold-500 focus:outline-none transition-all font-bold text-navy-900 dark:text-white"
                        placeholder="+91 88257 33129"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-400 dark:text-navy-500 ml-1">Service Interest</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-navy-50 dark:bg-navy-950 border border-navy-100 dark:border-navy-800 focus:border-gold-500 focus:outline-none transition-all font-bold text-navy-900 dark:text-white appearance-none">
                        <option>ERP Implementation</option>
                        <option>Remote DBA Support</option>
                        <option>App Development</option>
                        <option>Cloud Migration</option>
                        <option>Other Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-400 dark:text-navy-500 ml-1">Message</label>
                    <textarea 
                      rows="6"
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-navy-50 dark:bg-navy-950 border border-navy-100 dark:border-navy-800 focus:border-gold-500 focus:outline-none transition-all font-bold text-navy-900 dark:text-white"
                      placeholder="How can we help your business?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black text-lg hover:shadow-2xl hover:shadow-gold-500/30 transition-all flex items-center justify-center gap-3"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] w-full bg-navy-100 dark:bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 dark:opacity-30 grayscale invert">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.147346853757!2d78.161048674911!3d11.2223849889608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab070000000001%3A0x0!2zMTHCsDEzJzIwLjYiTiA3OMKwMDknNDguNiJF!5e0!3m2!1sen!2sin!4v1718870000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
