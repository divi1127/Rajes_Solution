import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, 
  MessageSquare, ArrowRight,
  Database, Layout, Code, Brain, Cpu, Server
} from 'lucide-react';

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

  const footerLinks = [
    {
      title: "Our Services",
      links: [
        { name: "ERP Development", path: "/services" },
        { name: "Custom Software", path: "/services#custom-software" },
        { name: "Cloud & DevOps", path: "/services" },
        { name: "Remote DBA Support", path: "/remote-dba-support" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Workshop ERP", path: "/erp/workshop-erp" },
        { name: "Manufacturing ERP", path: "/erp/manufacturing-erp" },
        { name: "School ERP", path: "/erp/school-erp" },
        { name: "Industries", path: "/industries" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", path: "/case-studies" },
        { name: "Technologies", path: "/technologies" },
        { name: "Knowledge Center", path: "/resources" },
        { name: "Careers", path: "/careers" },
      ]
    }
  ];

  return (
    <footer className="relative bg-[#020617] text-navy-200 border-t border-navy-900/50 pt-20 pb-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-4 mb-8 group -mt-6">
              <img src="/logo.png" alt="Raje's Solutions" className="w-24 h-24 object-contain" />
              <span className="font-sans font-black text-2xl tracking-tighter text-white">
                RAJE'S <span className="text-gold-500">SOLUTIONS</span>
              </span>
            </Link>
            <p className="text-navy-400 text-lg leading-relaxed mb-8 max-w-sm">
              Engineering high-performance digital ecosystems through specialized ERP products, cloud-native backend logic, and elite 24/7 database administration.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: MessageSquare, href: "https://wa.me/918825709105" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  className="w-11 h-11 rounded-xl bg-navy-900 border border-navy-800 hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center text-navy-400 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className={idx === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}>
              <h3 className="font-bold text-white text-lg mb-8 relative inline-block">
                {section.title}
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold-500 rounded-full" />
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className="text-navy-400 hover:text-gold-400 transition-colors flex items-center gap-2 group/link">
                      <ArrowRight className="w-3.5 h-3.5 text-navy-600 group-hover/link:text-gold-500 transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-navy-500">
            <p>&copy; {currentYear} Raje's Solutions. All rights reserved.</p>
            <div className="flex items-center gap-6 border-l border-navy-900 pl-6 hidden md:flex">
              <div className="flex items-center gap-2 text-navy-300">
                <MapPin className="w-4 h-4 text-gold-500/70" />
                <span className="font-semibold uppercase tracking-wider text-[10px]">Global Support</span>
              </div>
              <div className="flex flex-row gap-6 items-center text-[11px] font-medium text-navy-400">
                <a href="tel:04322222646" className="hover:text-gold-500 transition-colors flex items-center gap-1.5 whitespace-nowrap">
                  <Phone className="w-3 h-3 text-gold-500/50" />
                  04322 222646
                </a>
                <a href="https://wa.me/918825709105" className="hover:text-gold-500 transition-colors flex items-center gap-1.5 whitespace-nowrap">
                  <MessageSquare className="w-3 h-3 text-gold-500/50" />
                  +91 88257 09105
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-navy-600">
            <Link to="/privacy-policy" className="hover:text-gold-500 transition-colors">Privacy</Link>
            <Link to="/terms-conditions" className="hover:text-gold-500 transition-colors">Terms</Link>
            <Link to="/contact-us" className="text-gold-500 hover:text-gold-400 transition-colors flex items-center gap-1">
              Support <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
