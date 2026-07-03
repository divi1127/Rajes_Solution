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
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
        </motion.div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-7rem]">
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
            Effective Date: July 4, 2026. This Privacy Policy was last updated on the date above.
          </p>
        </div>
      </section>
    </div>
  );
}
