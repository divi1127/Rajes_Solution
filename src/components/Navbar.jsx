import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Database, ShieldAlert, Wrench, Menu as MenuIcon, PhoneCall } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'ERP Solutions', path: '/erp-solutions' },
    { name: 'Remote DBA', path: '/remote-dba-support' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'About', path: '/about-us' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact-us' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/80 dark:bg-navy-950/85 backdrop-blur-md shadow-lg border-b border-navy-100/50 dark:border-navy-900/40' 
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
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-sans font-medium text-sm transition-colors relative py-2 ${
                    isActive 
                      ? 'text-gold-500 dark:text-gold-400' 
                      : 'text-navy-700 hover:text-gold-500 dark:text-navy-200 dark:hover:text-gold-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavLine" 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Utilities (Theme & CTA) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-navy-100 hover:bg-navy-200 dark:bg-navy-900 dark:hover:bg-navy-800 text-navy-800 dark:text-navy-100 transition-colors border border-transparent dark:border-navy-800"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-gold-400" /> : <Moon className="w-5 h-5 text-navy-900" />}
            </button>

            {/* CTA Button */}
            <Link
              to="/contact-us"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20 active:scale-95 transition-all border border-gold-400/20 glow-gold-hover"
            >
              <PhoneCall className="w-4 h-4" />
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden gap-3">
            {/* Theme toggle mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-100 border border-transparent dark:border-navy-850"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-gold-400" /> : <Moon className="w-5 h-5 text-navy-900" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-100 focus:outline-none border border-transparent dark:border-navy-850"
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
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white dark:bg-navy-950 border-b border-navy-100 dark:border-navy-900/60 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                      isActive 
                        ? 'bg-gold-50/50 text-gold-600 dark:bg-navy-900/60 dark:text-gold-400' 
                        : 'text-navy-700 hover:bg-navy-50 dark:text-navy-200 dark:hover:bg-navy-900/30'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-navy-100 dark:border-navy-900 px-4">
                <Link
                  to="/contact-us"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 shadow-md shadow-gold-500/10"
                >
                  <PhoneCall className="w-4 h-4" />
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
