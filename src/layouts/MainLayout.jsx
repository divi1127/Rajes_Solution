import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { motion, AnimatePresence } from 'framer-motion';

export default function MainLayout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top on every path change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-navy-50 text-navy-900 dark:bg-navy-950 dark:text-navy-100 transition-colors duration-300">
      
      {/* Global styling overrides/background vectors */}
      <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none opacity-40 dark:opacity-20 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent dark:from-navy-800" />

      {/* Scroll indicator bar */}
      <ScrollProgress />

      {/* Header Navigation */}
      <Navbar />

      {/* Page Content wrapped in Framer Motion transition animation */}
      <main className="flex-grow z-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Social and Support Utilities */}
      <WhatsAppFloat />
    </div>
  );
}
