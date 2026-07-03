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
    <div className="bg-white dark:bg-navy-950 min-h-screen text-navy-900 dark:text-white transition-colors">
      <section className="relative py-20 px-4 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-navy-950/60 to-navy-950/90" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-bold tracking-widest uppercase mb-6">Legal</span>
          <h1 className="font-sans font-black text-5xl sm:text-7xl mb-8 leading-tight text-white">
            Terms & <span className="text-gradient-gold">Conditions</span>
          </h1>
        </motion.div>
      </section>

      <section className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-8rem]">
        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-6 p-8 rounded-3xl bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800"
            >
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 text-gold-500 flex items-center justify-center shrink-0">
                <section.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-navy-900 dark:text-white mb-3">{section.title}</h3>
                <p className="text-navy-600 dark:text-navy-300 leading-relaxed">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-navy-900 text-white text-center">
          <p className="text-navy-300 text-sm">
            Effective Date: July 4, 2026. These Terms & Conditions were last updated on the date above.
          </p>
        </div>
      </section>
    </div>
  );
}
