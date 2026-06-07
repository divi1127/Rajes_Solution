import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Database, Code, CheckCircle2, ArrowRight, 
  Brain, Layout, BarChart, Server, Globe, Zap, Smartphone, Cloud
} from 'lucide-react';
import { motion } from 'framer-motion';

// Import images
import frontendImg from '../assets/services/frontend.png';
import backendImg from '../assets/services/backend.png';
import databaseImg from '../assets/services/database.png';
import aiImg from '../assets/services/ai.png';
import mobileImg from '../assets/services/mobile.png';
import cloudImg from '../assets/services/cloud.png';

export default function Services() {
  useEffect(() => {
    document.title = "Our Services | Enterprise Technology Solutions | Rajes Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Comprehensive enterprise services including Mobile Apps, Cloud Infrastructure, Frontend, Backend, Database Management, and AI Support.");
    }
  }, []);

  const services = [
    {
      id: "mobile",
      title: "Mobile App Development",
      icon: Smartphone,
      image: mobileImg,
      description: "Building cross-platform, enterprise-grade mobile applications with seamless user experiences.",
      features: [
        "iOS & Android Development",
        "React Native & Flutter",
        "Mobile ERP Integration",
        "Offline-First Architecture"
      ],
      color: "from-rose-500 to-pink-500"
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure",
      icon: Cloud,
      image: cloudImg,
      description: "Scaling your business with secure, high-availability cloud environments and DevOps automation.",
      features: [
        "AWS/Azure/GCP Setup",
        "Kubernetes & Docker",
        "CI/CD Pipelines",
        "Cloud Security Audits"
      ],
      color: "from-blue-600 to-indigo-500"
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Layout,
      image: frontendImg,
      description: "Crafting immersive, high-performance user interfaces using modern frameworks like React and Next.js.",
      features: [
        "Responsive & Adaptive UI/UX",
        "Single Page Applications (SPA)",
        "Performance Optimization",
        "Progressive Web Apps (PWA)"
      ],
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: Code,
      image: backendImg,
      description: "Building scalable, secure, and robust server-side architectures to power your complex business logic.",
      features: [
        "RESTful & GraphQL APIs",
        "Microservices Architecture",
        "Cloud-Native Solutions",
        "Serverless Computing"
      ],
      color: "from-purple-500 to-indigo-400"
    },
    {
      id: "database",
      title: "Database Management",
      icon: Database,
      image: databaseImg,
      description: "Expert design, optimization, and management of high-traffic database systems for maximum reliability.",
      features: [
        "SQL & NoSQL Specialization",
        "Performance Tuning & Indexing",
        "High Availability Clusters",
        "Data Migration & Integration"
      ],
      color: "from-amber-500 to-orange-400"
    },
    {
      id: "ai",
      title: "AI Support & Integration",
      icon: Brain,
      image: aiImg,
      description: "Infusing intelligence into your applications with state-of-the-art AI and machine learning models.",
      features: [
        "LLM Integration (GPT, Claude)",
        "Predictive Analytics",
        "Process Automation",
        "NLP & Computer Vision"
      ],
      color: "from-emerald-500 to-teal-400"
    }
  ];

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors">
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/64/85/9f/64859fdf25295a476096c3e8d5b91d3f.jpg" 
            alt="Services Hero" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-navy-950/30 bg-gradient-to-b from-navy-950/50 via-transparent to-white dark:to-navy-950" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-bold tracking-widest uppercase mb-6">
            Elite Engineering
          </span>
          <h1 className="font-sans font-black text-5xl sm:text-7xl mb-8 leading-tight text-white">
            Our <span className="text-gradient-gold">Services</span> Portfolio
          </h1>
          <p className="text-navy-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            From mobile ecosystems to distributed cloud architectures, we deliver high-impact technology solutions designed for enterprise scale.
          </p>
        </motion.div>
      </section>

      {/* Unique UI: Staggered Services Display */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} opacity-10 blur-2xl rounded-3xl group-hover:opacity-20 transition-opacity`} />
                <div className="relative rounded-3xl overflow-hidden border border-navy-100 dark:border-white/10 shadow-2xl bg-navy-900">
                  <div className="absolute inset-0 bg-navy-950/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Floating Icon */}
                <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-20 h-20 rounded-2xl bg-navy-900 border border-white/10 flex items-center justify-center p-5 shadow-2xl z-20`}>
                  <service.icon className={`w-full h-full text-gradient-gold`} />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-4 text-navy-900 dark:text-white">
                  <span className="text-gold-500 text-5xl opacity-10 dark:opacity-20 font-black">0{index + 1}</span>
                  {service.title}
                </h3>
                <p className="text-navy-600 dark:text-navy-200 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-navy-700 dark:text-navy-100 group">
                      <div className="w-8 h-8 rounded-lg bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800 flex items-center justify-center shrink-0 group-hover:border-gold-500/50 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-gold-500" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold hover:shadow-lg hover:shadow-gold-500/20 transition-all active:scale-95"
                >
                  Request Enquiry
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-12 sm:p-20 rounded-[3rem] overflow-hidden group">
            <div className="absolute inset-0 bg-navy-900 border border-white/5" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-4xl sm:text-5xl font-black mb-8 text-white">
                Build the Future with <br className="hidden sm:block" /> Rajes Solutions
              </h3>
              <p className="text-navy-100 text-lg mb-12 max-w-2xl mx-auto">
                Our team is ready to architect your next high-performance system. Contact our advisory lead for a discovery session.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black text-lg hover:from-gold-400 hover:to-gold-500 transition-all shadow-2xl"
              >
                Start Your Project
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
