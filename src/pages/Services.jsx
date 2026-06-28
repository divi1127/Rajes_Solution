import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Database, Code, CheckCircle2, ArrowRight, 
  Brain, Layout, BarChart, Server, Globe, Zap, Smartphone, Cloud, Wrench, RefreshCw, Settings
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  useEffect(() => {
    document.title = "Our Services | Enterprise Technology Solutions | Rajes Solutions";
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "erp-dev",
      title: "Enterprise ERP Development",
      icon: Layout,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      description: "We design and develop scalable ERP systems that streamline business operations, improve decision-making, and integrate all core business functions into a unified platform.",
      features: [
        "ERP system design and architecture",
        "Custom module development",
        "Workflow automation",
        "Role-based dashboards",
        "API & third-party integrations",
        "Multi-branch/location systems"
      ],
      color: "from-blue-600 to-indigo-500"
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      icon: Code,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      description: "We build enterprise-grade software solutions tailored to specific business requirements and industry challenges.",
      features: [
        "Web application development",
        "Enterprise portal development",
        "Backend API development",
        "Legacy system modernization",
        "SaaS application development",
        "Workflow-based business apps"
      ],
      color: "from-purple-600 to-indigo-500"
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps Services",
      icon: Cloud,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      description: "We help enterprises modernize infrastructure using cloud technologies and DevOps automation practices.",
      features: [
        "Azure / AWS / Hybrid cloud solutions",
        "Cloud architecture design",
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Monitoring and alerting",
        "Cost optimization"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: "app-support",
      title: "Application Support & Maintenance",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      description: "We provide continuous support for enterprise applications to ensure smooth operations and minimal downtime.",
      features: [
        "24×7 production support",
        "Bug fixing and enhancements",
        "System health monitoring",
        "Performance tuning",
        "SLA-based support models",
        "Incident management & RCA"
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "data-migration",
      title: "Data Migration Services",
      icon: RefreshCw,
      image: "https://i.pinimg.com/1200x/47/e1/bf/47e1bf88c59a1d9c595cb578d1b78696.jpg",
      description: "We ensure secure, accurate, and seamless migration of enterprise data across platforms and environments.",
      features: [
        "Database migration (SQL, Sybase, Postgres)",
        "Cloud database migration",
        "Version & platform upgrades",
        "Data validation & reconciliation",
        "Zero data loss strategies",
        "Downtime minimization"
      ],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
            alt="Services Hero" 
            className="w-full h-full object-cover opacity-30"
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
            Enterprise Solutions
          </span>
          <h1 className="font-sans font-black text-5xl sm:text-7xl mb-8 leading-tight text-white">
            Our <span className="text-gradient-gold">Capabilities</span>
          </h1>
          <p className="text-navy-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            From ERP development to elite database administration, we provide the technical foundation for modern enterprise growth.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
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
              <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} opacity-10 blur-2xl rounded-3xl group-hover:opacity-20 transition-opacity`} />
                <div className="relative rounded-3xl overflow-hidden border border-navy-100 dark:border-white/10 shadow-2xl bg-navy-900">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-20 h-20 rounded-2xl bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 flex items-center justify-center p-5 shadow-2xl z-20`}>
                  <service.icon className="w-full h-full text-gold-500" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl sm:text-4xl font-black mb-6 text-navy-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-navy-600 dark:text-navy-300 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      <span className="text-sm font-bold text-navy-800 dark:text-navy-100">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy-900 dark:bg-navy-800 hover:bg-gold-500 dark:hover:bg-gold-500 hover:text-navy-950 text-white font-bold transition-all"
                >
                  Request Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering Strength */}
      <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Technical Prowess</h2>
            <h3 className="text-3xl sm:text-5xl font-black mb-6">Enterprise Engineering Strength</h3>
            <p className="text-navy-300 text-lg">Our services are backed by deep expertise in large-scale production environments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "High Availability Systems (Always-On, Clustering)",
              "Large-scale production database management",
              "Performance tuning for high-load systems",
              "Advanced Automation & Expert Scripting",
              "Cross-platform infrastructure expertise",
              "Disaster Recovery & Risk Management"
            ].map((strength, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-gold-500/50 transition-all">
                <Settings className="w-10 h-10 text-gold-500 mb-6" />
                <h4 className="text-xl font-bold text-white mb-2">{strength}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-24 bg-navy-50 dark:bg-navy-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card bg-white dark:bg-navy-900 p-12 sm:p-20 rounded-[3rem] border-navy-100 dark:border-navy-800 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h3 className="text-3xl sm:text-4xl font-black text-navy-900 dark:text-white mb-8">Business Outcomes</h3>
              <p className="text-navy-600 dark:text-navy-300 text-lg mb-8 leading-relaxed">
                We deliver measurable results that impact your bottom line and operational efficiency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Up to 99.9% system uptime",
                  "40% Increase in operational speed",
                  "Zero data loss migration",
                  "24/7 Security & Monitoring",
                  "Scalable Cloud architecture",
                  "Optimized Licensing Costs"
                ].map((outcome, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                    <span className="font-bold text-navy-800 dark:text-navy-100">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gold-400/20 blur-[80px] rounded-full" />
              <div className="relative p-10 bg-navy-900 rounded-3xl border border-navy-800 text-center">
                <div className="text-5xl font-black text-gold-500 mb-2">99.9%</div>
                <div className="text-navy-400 uppercase tracking-widest font-bold text-sm">System Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h3 className="text-3xl sm:text-4xl font-black text-navy-900 dark:text-white mb-8">Ready to Scale Your Infrastructure?</h3>
        <Link
          to="/contact-us"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-black text-lg transition-all shadow-xl hover:shadow-gold-500/20"
        >
          Get Started Today
          <ArrowRight className="w-6 h-6" />
        </Link>
      </section>
    </div>
  );
}
