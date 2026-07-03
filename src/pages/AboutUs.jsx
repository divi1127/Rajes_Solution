import React, { useEffect } from 'react';
import { Database, ShieldCheck, Award, Heart, ShieldAlert, Cpu, HeartPulse, CheckCircle2, UserCheck, Star, Zap, Activity, ArrowRight, Rocket, Eye, Target, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import leaderPhoto from '../assets/SaravananSoundararajanRaje\'sSolutions.png';

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us | Enterprise Engineering Excellence | Raje's Solutions";
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    { 
      title: "Simplicity", 
      desc: "Powerful software should feel intuitive. Enterprise solutions should reduce complexity, accelerate adoption, and help people become productive from day one.", 
      icon: Zap 
    },
    { 
      title: "Scalability", 
      desc: "Businesses evolve continuously. Software should grow alongside them without costly reimplementation or operational disruption.", 
      icon: Activity 
    },
    { 
      title: "Reliability", 
      desc: "Organizations rely on enterprise software every minute of every day. Security, performance, resilience, and availability are not optional—they are essential.", 
      icon: ShieldCheck 
    },
    { 
      title: "Innovation", 
      desc: "Innovation is valuable only when it solves real business problems. We embrace cloud computing, AI, automation, and analytics to deliver measurable outcomes.", 
      icon: Cpu 
    }
  ];

  const highlights = [
    "26+ Years of Enterprise Technology Leadership",
    "Founder of Fleet ERP & StockPilot ERP",
    "Enterprise Software Product Architect",
    "ERP & Digital Transformation Strategist",
    "AI-Driven Enterprise Solutions",
    "Cloud-Native Application Architecture",
    "Enterprise Architecture & Solution Design",
    "Business Process Automation",
    "High Availability & Disaster Recovery",
    "Cloud Migration & Modernization",
    "DevOps & Infrastructure Automation",
    "Performance Engineering & Business Analytics",
    "Expertise in Microsoft SQL Server, Sybase ASE, PostgreSQL, Oracle, SAP HANA, and DB2"
  ];

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/vwebpf/1200x/34/ce/d2/34ced28077ef3b3c8f4fd932a9b422eb.webp" 
            alt="About Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/5 via-navy-950/15 to-navy-950/30" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-bold tracking-widest uppercase mb-6">
            About the Founder
          </span>
          <h1 className="font-sans font-black text-5xl sm:text-7xl mb-8 leading-tight text-white">
            Building the Future of <span className="text-gradient-gold">Intelligent Enterprise</span> Software
          </h1>
          <p className="text-navy-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            For more than 26 years, Saravanan Soundararajan has worked at the intersection of enterprise technology and business transformation.
          </p>
        </motion.div>
      </section>

      {/* Founder Profile */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gold-500/20 blur-[80px] rounded-full group-hover:blur-[100px] transition-all" />
              <div className="relative glass-card bg-navy-900 border-navy-800 p-8 rounded-[3rem] overflow-hidden">
                <img 
                  src={leaderPhoto} 
                  alt="Saravanan Soundararajan" 
                  className="w-full aspect-square object-cover rounded-2xl mb-8 grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-black text-white">Saravanan Soundararajan</h3>
                  <p className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-4">Founder & Chief Executive Officer</p>
                  <div className="flex items-center justify-center gap-4 text-navy-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-gold-500" />
                      B.E Engineering
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-gold-500" />
                      26+ Years Exp.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-4">Founder & CEO</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-navy-900 dark:text-white mb-8 leading-tight">Technology Should Simplify Business</h3>
            <div className="space-y-6 text-navy-600 dark:text-navy-300 text-lg leading-relaxed">
              <p>
                Hello, I'm <strong>Saravanan Soundararajan</strong>, Founder & Chief Executive Officer of <strong>StockPilot</strong>.
              </p>
              <p>
                My career began in enterprise database engineering, where I designed, optimized, and managed large-scale database platforms powering business-critical applications. As technology evolved, so did my expertise—expanding into enterprise architecture, cloud computing, automation, artificial intelligence, DevOps, and digital transformation.
              </p>
              <p>
                Across every project and every industry, one lesson became increasingly clear: <strong>technology should simplify business—not complicate it.</strong>
              </p>
              <p>
                Businesses didn't need more applications. They needed <strong>better enterprise software</strong>—software that is connected, intelligent, scalable, and designed around the way people actually work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-24 bg-navy-50 dark:bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Our Philosophy</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-navy-900 dark:text-white mb-6">The Principles Behind Every Product</h3>
            <p className="text-navy-600 dark:text-navy-400 text-lg">
              Technology should empower people—not overwhelm them. Every architectural decision, feature, and product roadmap is guided by these principles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 hover:border-gold-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-navy-50 dark:bg-navy-800 text-gold-500 flex items-center justify-center mb-8 shadow-sm group-hover:bg-gold-500 group-hover:text-navy-950 transition-all">
                  <principle.icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-black text-navy-900 dark:text-white mb-4 uppercase tracking-tighter">{principle.title}</h4>
                <p className="text-navy-600 dark:text-navy-400 leading-relaxed text-sm">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Enterprise Expertise to Product Innovation */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-4">Product Innovation</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-navy-900 dark:text-white mb-8 leading-tight">From Enterprise Expertise to Product Innovation</h3>
            <div className="space-y-6 text-navy-600 dark:text-navy-300 text-lg leading-relaxed">
              <p>
                My first product, <strong>Fleet ERP</strong>, was created to modernize fleet and transportation management by bringing every operational process into one connected platform—integrating vehicle management, preventive maintenance, fuel management, logistics, compliance, driver administration, and business analytics.
              </p>
              <p>
                Building on that experience, I founded <strong>StockPilot ERP</strong>—a modern, AI-ready, cloud-native Enterprise Resource Planning platform designed for businesses that require enterprise-grade capabilities without enterprise-level complexity.
              </p>
              <p>
                StockPilot brings every essential business function together in one intelligent platform, including Inventory & Warehouse Management, Purchasing & Procurement, Sales & Distribution, Financial Management, Manufacturing & Production, CRM, Human Resources, Project Management, Workflow Automation, Business Intelligence, and AI-driven insights.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="glass-card bg-navy-900 dark:bg-navy-950 border-navy-800 p-10 rounded-[3rem]">
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Inventory & Warehouse",
                  "Purchasing & Procurement",
                  "Sales & Distribution",
                  "Financial Management",
                  "Manufacturing & Production",
                  "CRM",
                  "Human Resources & Payroll",
                  "Project & Service Management",
                  "Workflow Automation",
                  "Business Intelligence",
                  "AI & Predictive Insights",
                  "And more..."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                    <span className="text-sm font-bold text-navy-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Profile */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-bold tracking-widest uppercase mb-4">Executive Profile</span>
            <h2 className="text-4xl sm:text-6xl font-black mb-4">Saravanan Soundararajan</h2>
            <p className="text-lg text-gold-400 font-semibold">Enterprise Software Architect &bull; Product Innovator &bull; Technology Entrepreneur</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-6">Professional Highlights</h3>
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-gold-500/10 hover:border-gold-500/30 transition-all group">
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-navy-200 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/20 text-center">
                  <div className="text-5xl font-black text-gold-500 mb-2">26+</div>
                  <div className="text-xs text-navy-300 uppercase tracking-widest font-bold">Years of Leadership</div>
                </div>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/20 text-center">
                  <div className="text-5xl font-black text-gold-500 mb-2">2</div>
                  <div className="text-xs text-navy-300 uppercase tracking-widest font-bold">ERP Products Founded</div>
                </div>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/20 text-center">
                  <div className="text-5xl font-black text-gold-500 mb-2">99.9%</div>
                  <div className="text-xs text-navy-300 uppercase tracking-widest font-bold">System Reliability</div>
                </div>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/20 text-center">
                  <div className="text-5xl font-black text-gold-500 mb-2">24/7</div>
                  <div className="text-xs text-navy-300 uppercase tracking-widest font-bold">Managed Support</div>
                </div>
              </div>
              
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
                <p className="text-navy-300 text-sm italic">
                  "Passionate about building enterprise software that combines technical excellence with outstanding user experience."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-navy-900 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 text-gold-500 flex items-center justify-center mb-8">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-black mb-6">Vision</h3>
              <p className="text-navy-200 text-lg leading-relaxed">
                To build globally trusted enterprise software that empowers organizations through intelligent automation, connected data, and artificial intelligence—enabling businesses of every size to achieve operational excellence, sustainable growth, and long-term success.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-12 rounded-[3rem] bg-navy-900 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 text-gold-500 flex items-center justify-center mb-8">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-black mb-6">Mission</h3>
              <p className="text-navy-200 text-lg leading-relaxed">
                To simplify business through intelligent, secure, scalable, and user-centric enterprise software that transforms how organizations operate, innovate, and grow.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-navy-50 dark:bg-navy-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-12 sm:p-16 rounded-[3rem] bg-navy-900 text-white border border-navy-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />
            <Quote className="w-12 h-12 text-gold-500 mx-auto mb-8 opacity-50" />
            <blockquote className="text-xl sm:text-2xl italic text-navy-100 leading-relaxed mb-8 relative z-10">
              "The most successful enterprise software is not the software people notice—it's the software they rely on every day without thinking about it. Our mission is to build technology that quietly empowers businesses to operate smarter, move faster, and grow with confidence."
            </blockquote>
            <div className="relative z-10">
              <p className="font-bold text-gold-500 text-lg">— Saravanan Soundararajan</p>
              <p className="text-navy-400 text-sm">Founder & Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h3 className="text-3xl sm:text-4xl font-black text-navy-900 dark:text-white mb-8">Partner with Us</h3>
        <Link
          to="/contact-us"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black text-lg shadow-xl"
        >
          Get In Touch
          <ArrowRight className="w-6 h-6" />
        </Link>
      </section>
    </div>
  );
}