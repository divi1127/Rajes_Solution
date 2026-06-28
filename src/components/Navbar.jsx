import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Sun, Moon, Database, ChevronDown, 
  Code, Cpu, Layers, Brain, Layout, BarChart, PhoneCall, Briefcase, FileText, Settings, Rocket 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { 
      name: 'Solutions', 
      path: '#',
      subItems: [
        { name: 'ERP Products', path: '/erp-solutions', icon: Layout, desc: 'Modular Enterprise ERP Systems' },
        { name: 'Remote DBA', path: '/remote-dba-support', icon: Database, desc: '24/7 Managed Database Services' },
      ]
    },
    { name: 'Industries', path: '/industries' },
    { 
      name: 'Expertise', 
      path: '#',
      subItems: [
        { name: 'Technologies', path: '/technologies', icon: Cpu, desc: 'Our Enterprise Tech Stack' },
        { name: 'Case Studies', path: '/case-studies', icon: BarChart, desc: 'Real-world Implementations' },
        { name: 'Resources', path: '/resources', icon: FileText, desc: 'Enterprise Knowledge Center' },
      ]
    },
    { name: 'About', path: '/about-us' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/90 dark:bg-navy-950/90 backdrop-blur-md shadow-lg border-b border-navy-100/50 dark:border-navy-900/40' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform">
                <Database className="w-5.5 h-5.5 text-navy-950 font-bold" />
              </div>
              <span className="font-sans font-bold text-xl tracking-tight text-navy-900 dark:text-white transition-colors">
                RAJES <span className="text-gold-500 group-hover:text-gold-400 transition-colors">SOLUTIONS</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const hasSubItems = !!link.subItems;

              return (
                <div 
                  key={link.name}
                  className="relative group py-2"
                  onMouseEnter={() => hasSubItems && setActiveDropdown(link.name)}
                  onMouseLeave={() => hasSubItems && setActiveDropdown(null)}
                >
                  {hasSubItems ? (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg font-sans font-semibold text-sm transition-all duration-200 ${
                        activeDropdown === link.name 
                          ? 'text-gold-600 dark:text-gold-400 bg-gold-50/50 dark:bg-gold-500/10' 
                          : 'text-navy-700 hover:text-gold-600 dark:text-navy-200 dark:hover:text-gold-400 hover:bg-navy-50/50 dark:hover:bg-navy-900/50'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg font-sans font-semibold text-sm transition-all duration-200 ${
                        isActive 
                          ? 'text-gold-600 dark:text-gold-400 bg-gold-50/50 dark:bg-gold-500/10' 
                          : 'text-navy-700 hover:text-gold-600 dark:text-navy-200 dark:hover:text-gold-400 hover:bg-navy-50/50 dark:hover:bg-navy-900/50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {hasSubItems && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 top-full mt-1 w-72 bg-white dark:bg-navy-900 rounded-2xl shadow-2xl border border-navy-100 dark:border-navy-800 overflow-hidden z-50 p-2"
                        >
                          <div className="grid grid-cols-1 gap-1">
                            {link.subItems.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <Link
                                  key={sub.name}
                                  to={sub.path}
                                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-navy-50 dark:hover:bg-navy-850 transition-colors group/sub"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover/sub:bg-gold-500 group-hover/sub:text-white transition-all">
                                    <SubIcon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-navy-900 dark:text-white group-hover/sub:text-gold-500 transition-colors">
                                      {sub.name}
                                    </div>
                                    <div className="text-xs text-navy-500 dark:text-navy-400 line-clamp-1">
                                      {sub.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Utilities */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-navy-100/50 hover:bg-navy-200 dark:bg-navy-900/50 dark:hover:bg-navy-800 text-navy-800 dark:text-navy-100 transition-colors border border-navy-200/20 dark:border-navy-800"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-gold-400" /> : <Moon className="w-5 h-5 text-navy-900" />}
            </button>

            <Link
              to="/contact-us"
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold tracking-wide bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20 active:scale-95 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-100"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-gold-400" /> : <Moon className="w-5 h-5 text-navy-900" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-navy-950 border-b border-navy-100 dark:border-navy-900 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => {
                const hasSubItems = !!link.subItems;
                const isDropdownOpen = activeDropdown === link.name;

                return (
                  <div key={link.name}>
                    {hasSubItems ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => setActiveDropdown(isDropdownOpen ? null : link.name)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-navy-700 dark:text-navy-200 font-bold hover:bg-navy-50 dark:hover:bg-navy-900/50"
                        >
                          {link.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-navy-50/50 dark:bg-navy-900/30 rounded-xl mx-2"
                            >
                              {link.subItems.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.path}
                                  className="flex items-center gap-3 px-6 py-3 text-sm font-semibold text-navy-600 dark:text-navy-400 hover:text-gold-500"
                                >
                                  <sub.icon className="w-4 h-4" />
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 rounded-xl font-bold transition-colors ${
                          location.pathname === link.path 
                            ? 'bg-gold-50 text-gold-600 dark:bg-navy-900 dark:text-gold-400' 
                            : 'text-navy-700 dark:text-navy-200 hover:bg-navy-50 dark:hover:bg-navy-900/50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 border-t border-navy-100 dark:border-navy-900">
                <Link
                  to="/contact-us"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 shadow-lg"
                >
                  <PhoneCall className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
