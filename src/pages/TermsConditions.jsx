import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Shield, UserCheck, Lock, DollarSign, RefreshCw, AlertTriangle, Scale, Mail, Eye, Ban, BookOpen } from 'lucide-react';

const sections = [
  {
    title: "Acceptance of Terms",
    icon: FileText,
    content: "By using our website and services, you agree to these Terms & Conditions. If you do not agree, discontinue use immediately."
  },
  {
    title: "About the Company",
    icon: Shield,
    content: "Raje's Solutions provides ERP and DBA services. Registered at Shirdi Sai Baba Temple, TS NO 1045 North Fourth Street, Pudukkottai - 622001, Tamilnadu, India."
  },
  {
    title: "Services Offered",
    icon: BookOpen,
    content: "Custom ERP software, Remote DBA (SQL Server, Sybase, PostgreSQL, Oracle, SAP HANA, MySQL), cloud migration, performance tuning, monitoring, and IT consulting."
  },
  {
    title: "Eligibility",
    icon: UserCheck,
    content: "You must be 18+ and have legal capacity. If representing an organization, you warrant authority to bind it."
  },
  {
    title: "User Accounts",
    icon: Lock,
    content: "Provide accurate information and maintain credential security. Notify us immediately of unauthorized access."
  },
  {
    title: "Acceptable Use",
    icon: CheckCircle,
    content: "Use our services only for lawful purposes. No hacking, scraping, malware, harassment, or unauthorized access."
  },
  {
    title: "User Responsibilities",
    icon: Eye,
    content: "Provide accurate information, comply with laws, use services without disrupting our infrastructure, and report security issues."
  },
  {
    title: "Intellectual Property",
    icon: Shield,
    content: "All content, software, and materials on our site are owned by Raje's Solutions. Reproduction without written consent is prohibited."
  },
  {
    title: "Software License",
    icon: FileText,
    content: "Software is licensed, not sold. You receive a limited, non-transferable license for internal business use. No reverse engineering."
  },
  {
    title: "Subscription and Pricing",
    icon: DollarSign,
    content: "Services are subscription-based. Fees as per your agreement. We may modify pricing with reasonable notice."
  },
  {
    title: "Payment Terms",
    icon: DollarSign,
    content: "Invoices due within 15 days unless otherwise agreed. Late payments incur 1.5% monthly interest. Taxes are additional."
  },
  {
    title: "Refund Policy",
    icon: RefreshCw,
    content: "Subscription fees may be eligible for pro-rata refund within 30 days. Custom development and consulting fees are non-refundable."
  },
  {
    title: "Cancellation and Termination",
    icon: Ban,
    content: "Either party may terminate with 30 days written notice. Immediate termination for breach, fraud, or illegal activity."
  },
  {
    title: "Service Availability",
    icon: Eye,
    content: "We target 99.9% uptime but do not guarantee uninterrupted service. Maintenance and unforeseen events may cause downtime."
  },
  {
    title: "Limitation of Liability",
    icon: AlertTriangle,
    content: "We are not liable for indirect or consequential damages. Total liability capped at fees paid in the preceding 12 months."
  },
  {
    title: "Disclaimer of Warranties",
    icon: AlertTriangle,
    content: "Services are provided as is without any warranties, express or implied, to the fullest extent permitted by law."
  },
  {
    title: "Indemnification",
    icon: Shield,
    content: "You agree to indemnify us against claims arising from your use of services, violation of terms, or infringement of rights."
  },
  {
    title: "Confidentiality",
    icon: Lock,
    content: "Both parties protect confidential information disclosed during the business relationship. Obligation survives termination."
  },
  {
    title: "Privacy",
    icon: Eye,
    content: "Your use is governed by our Privacy Policy, which is incorporated into these terms by reference."
  },
  {
    title: "Governing Law",
    icon: Scale,
    content: "These terms are governed by Indian law. Disputes shall be subject to the exclusive jurisdiction of courts in Namakkal, Tamilnadu."
  },
  {
    title: "Dispute Resolution",
    icon: Scale,
    content: "Disputes shall first be resolved through good-faith negotiations within 30 days, then by binding arbitration per the Arbitration and Conciliation Act, 1996."
  },
  {
    title: "Changes to These Terms",
    icon: RefreshCw,
    content: "We may update these terms at any time. Continued use after changes constitutes acceptance."
  },
  {
    title: "Contact Information",
    icon: Mail,
    content: "Email: saravanan.soundararajan@rajessolutions.com. Phone: +91 98844 98549. Address: Shirdi Sai Baba Temple, TS NO 1045 North Fourth Street, Pudukkottai - 622001, Tamilnadu, India."
  }
];

export default function TermsConditions() {
  useEffect(() => {
    document.title = "Terms & Conditions | Raje's Solutions";
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
          <h1 className="font-sans font-black text-6xl sm:text-8xl mb-4 tracking-tighter text-white uppercase">
            TERMS<span className="text-gold-500"></span>
          </h1>
          <p className="text-gold-500 font-bold uppercase tracking-[0.4em] text-sm">Agreement & Service Conditions</p>
        </motion.div>
      </section>

      {/* Document Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-6rem] relative z-20">
        <div className="bg-white dark:bg-navy-900 rounded-[2rem] shadow-2xl border border-navy-100 dark:border-navy-800 overflow-hidden">
          {/* Document Header */}
          <div className="p-12 border-b border-navy-50 dark:border-navy-800 bg-navy-50/50 dark:bg-navy-950/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="text-navy-400 dark:text-navy-500 text-xs font-bold uppercase tracking-widest mb-2">Legal Agreement</div>
              <h2 className="text-2xl font-black text-navy-900 dark:text-white uppercase tracking-tight">Raje's Solutions</h2>
            </div>
            <div className="text-right">
              <div className="text-navy-400 dark:text-navy-500 text-xs font-bold uppercase tracking-widest mb-2">Last Modified</div>
              <div className="text-gold-600 dark:text-gold-500 font-black">July 04, 2026</div>
            </div>
          </div>

          {/* Document Content */}
          <div className="p-12 md:p-20">
            <div className="prose prose-lg prose-navy dark:prose-invert max-w-none">
              <p className="text-xl text-navy-600 dark:text-navy-300 font-medium leading-relaxed mb-16 border-l-4 border-gold-500 pl-8">
                By accessing or utilizing the enterprise software and database administration services provided by Raje's Solutions, you explicitly agree to be bound by the following terms and conditions.
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
                      <h3 className="text-2xl font-black text-navy-900 dark:text-white tracking-tight uppercase group-hover:text-gold-500 transition-colors">
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
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-navy-500 dark:text-navy-400">
                  <div>
                    <h4 className="font-black text-navy-900 dark:text-white uppercase tracking-widest mb-4">Governing Authority</h4>
                    <p className="leading-relaxed">
                      This agreement is interpreted in accordance with the laws of India. Any litigation arising from these terms shall be conducted within the exclusive jurisdiction of the state courts.
                    </p>
                  </div>
                  <div className="flex flex-col justify-end items-end space-y-4">
                     <div className="text-right">
                        <div className="font-black text-navy-900 dark:text-white uppercase tracking-widest mb-1 italic">Authorized Documentation</div>
                        <div className="text-[10px] text-navy-400">Ref ID: RS-LEG-2026-001</div>
                     </div>
                     <div className="w-48 h-12 bg-navy-50 dark:bg-navy-950 border border-navy-100 dark:border-navy-800 rounded flex items-center justify-center grayscale opacity-50">
                        <span className="font-serif italic text-navy-300">Raje's Solutions</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
