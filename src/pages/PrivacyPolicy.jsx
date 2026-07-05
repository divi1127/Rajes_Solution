import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Cookie, Mail, Trash2, Download, RefreshCw, Globe } from 'lucide-react';

const sections = [
  {
    title: "Introduction",
    icon: Shield,
    content: "Raje's Solutions collects, uses, and protects your personal data as described in this policy. By using our website and services, you consent to these practices."
  },
  {
    title: "Information We Collect",
    icon: Database,
    content: "We collect personal, business, account, payment, and technical data necessary to deliver and improve our enterprise software and DBA services."
  },
  {
    title: "Personal Information",
    icon: Eye,
    content: "Name, email, phone, company name, and job title when you contact us, request demos, or communicate via email, phone, or WhatsApp."
  },
  {
    title: "Business Information",
    icon: Database,
    content: "Company details, industry, size, infrastructure, and requirements to tailor our solutions to your organization's needs."
  },
  {
    title: "Account Information",
    icon: Lock,
    content: "Username, password, and preferences for registered accounts. You are responsible for maintaining credential confidentiality."
  },
  {
    title: "Payment Information",
    icon: Lock,
    content: "Billing name, address, GST, and payment details processed through secure third-party gateways. We do not store full card numbers."
  },
  {
    title: "Technical Information",
    icon: Globe,
    content: "IP address, browser type, device info, pages viewed, and usage data collected automatically via cookies and server logs."
  },
  {
    title: "How We Collect Information",
    icon: Database,
    content: "Directly through forms and communications, automatically via cookies and analytics, and from third-party sources where compliant with law."
  },
  {
    title: "How We Use Your Information",
    icon: Eye,
    content: "To deliver services, communicate updates, personalize experience, analyze usage, prevent fraud, and comply with legal obligations."
  },
  {
    title: "Cookies and Tracking Technologies",
    icon: Cookie,
    content: "We use cookies to enhance browsing and analyze traffic. You can control cookies via browser settings."
  },
  {
    title: "Information Sharing and Disclosure",
    icon: Eye,
    content: "We do not sell your data. We share with trusted partners, when required by law, or in connection with business transactions."
  },
  {
    title: "Third-Party Services",
    icon: Globe,
    content: "Our site may link to third-party services. We are not responsible for their privacy practices."
  },
  {
    title: "Data Security",
    icon: Lock,
    content: "We use encryption, access controls, firewalls, and regular audits. No method of transmission is 100% secure."
  },
  {
    title: "Data Retention",
    icon: Database,
    content: "We retain data as long as needed for its purpose or as required by law, then securely delete or anonymize it."
  },
  {
    title: "Your Rights",
    icon: Shield,
    content: "You may have rights to access, correct, delete, or port your data under applicable laws like GDPR. Contact us to exercise them."
  },
  {
    title: "Right to Access",
    icon: Eye,
    content: "Request confirmation of whether we process your data and receive a copy in a structured format."
  },
  {
    title: "Right to Correct",
    icon: Eye,
    content: "Request correction of inaccurate or incomplete personal information we hold about you."
  },
  {
    title: "Right to Delete",
    icon: Trash2,
    content: "Request deletion of your data when no longer needed, consent is withdrawn, or processing is unlawful."
  },
  {
    title: "Right to Data Portability",
    icon: Download,
    content: "Receive your data in a machine-readable format (CSV, JSON) and transmit it to another provider where feasible."
  },
  {
    title: "Children's Privacy",
    icon: Shield,
    content: "Our services are not directed at individuals under 18. We do not knowingly collect children's data."
  },
  {
    title: "International Data Transfers",
    icon: Globe,
    content: "Your data may be transferred across borders with appropriate safeguards such as Standard Contractual Clauses."
  },
  {
    title: "Changes to This Privacy Policy",
    icon: RefreshCw,
    content: "We may update this policy. Changes are posted on this page with a revised effective date."
  },
  {
    title: "Contact Information",
    icon: Mail,
    content: "Email: saravanan.soundararajan@rajessolutions.com. Phone: +91 98844 98549. Address: Shirdi Sai Baba Temple, TS NO 1045 North Fourth Street, Pudukkottai - 622001, Tamilnadu, India."
  }
];

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Raje's Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-navy-50 dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors pb-24">
      {/* Abstract Header */}
      <section className="relative py-32 px-4 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-navy-950" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <h1 className="font-sans font-black text-6xl sm:text-8xl mb-4 tracking-tighter text-white">
            PRIVACY<span className="text-gold-500"></span>
          </h1>
          <p className="text-gold-500 font-bold uppercase tracking-[0.4em] text-sm">Policy & Data Protection</p>
        </motion.div>
      </section>

      {/* Document Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-6rem] relative z-20">
        <div className="bg-white dark:bg-navy-900 rounded-[2rem] shadow-2xl border border-navy-100 dark:border-navy-800 overflow-hidden">
          {/* Document Header */}
          <div className="p-12 border-b border-navy-50 dark:border-navy-800 bg-navy-50/50 dark:bg-navy-950/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="text-navy-400 dark:text-navy-500 text-xs font-bold uppercase tracking-widest mb-2">Internal Document</div>
              <h2 className="text-2xl font-black text-navy-900 dark:text-white uppercase tracking-tight">Raje's Solutions</h2>
            </div>
            <div className="text-right">
              <div className="text-navy-400 dark:text-navy-500 text-xs font-bold uppercase tracking-widest mb-2">Effective Date</div>
              <div className="text-gold-600 dark:text-gold-500 font-black">July 04, 2026</div>
            </div>
          </div>

          {/* Document Content */}
          <div className="p-12 md:p-20">
            <div className="prose prose-lg prose-navy dark:prose-invert max-w-none">
              <p className="text-xl text-navy-600 dark:text-navy-300 font-medium leading-relaxed mb-16 italic">
                This Privacy Policy outlines how Raje's Solutions collects, utilizes, and safeguards your corporate and personal data. Our commitment to data integrity and client confidentiality is the foundation of our enterprise operations.
              </p>

              <div className="space-y-20">
                {sections.map((section, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-baseline gap-6 mb-6">
                      <span className="text-5xl font-black text-navy-100 dark:text-navy-800 group-hover:text-gold-500/20 transition-colors duration-500">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-3xl font-black text-navy-900 dark:text-white tracking-tight uppercase group-hover:text-gold-500 transition-colors">
                        {section.title}
                      </h3>
                    </div>
                    <div className="pl-16 border-l-2 border-navy-50 dark:border-navy-800 group-hover:border-gold-500/30 transition-colors py-2">
                       <p className="text-navy-600 dark:text-navy-300 leading-relaxed text-lg font-medium">
                         {section.content}
                       </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Document Footer */}
            <div className="mt-32 pt-16 border-t border-navy-100 dark:border-navy-800">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
                  <div>
                    <h4 className="font-black text-navy-900 dark:text-white uppercase tracking-widest mb-4">Official Verification</h4>
                    <p className="text-navy-500 dark:text-navy-400 leading-relaxed">
                      This document serves as the primary governing policy for data handling within Raje's Solutions. Any deviations or specific client requirements must be addressed via a separate Master Service Agreement (MSA).
                    </p>
                  </div>
                  <div className="p-8 rounded-2xl bg-navy-50 dark:bg-navy-950 border border-navy-100 dark:border-navy-800">
                     <p className="text-navy-400 dark:text-navy-500 italic mb-4">"We uphold the highest standards of data security to ensure the resilience of your enterprise operations."</p>
                     <div className="font-bold text-navy-900 dark:text-white">— Compliance Office</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
