import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import ERPSolutions from './pages/ERPSolutions';
import ERPProductDetail from './pages/ERPProductDetail';
import RemoteDBASupport from './pages/RemoteDBASupport';
import DBAServiceDetail from './pages/DBAServiceDetail';
import Services from './pages/Services';
import Industries from './pages/Industries';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Technologies from './pages/Technologies';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';
import Careers from './pages/Careers';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/erp-solutions" element={<ERPSolutions />} />
            <Route path="/erp/:slug" element={<ERPProductDetail />} />
            <Route path="/remote-dba-support" element={<RemoteDBASupport />} />
            <Route path="/dba/:slug" element={<DBAServiceDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactUs />} />
            
            {/* Fallback route redirection */}
            <Route path="*" element={<Home />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}
