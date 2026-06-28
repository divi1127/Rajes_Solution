import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle2, ChevronDown, HelpCircle, Laptop, ShieldCheck, 
  Settings, Users, Wrench, GraduationCap, Briefcase, Sun, HeartPulse, ShoppingCart, 
  Scissors, ClipboardList, Layers, FileText, MessageSquare, Bell, UserPlus, CreditCard, 
  CheckSquare, FileSpreadsheet, Calendar, Smartphone, Cpu, ShieldAlert, DollarSign, 
  Clock, Sparkles, Heart, Home, Database, Box, Bed, FolderHeart, PlusSquare, 
  Activity, FileCheck, Zap, CalendarRange, Barcode, Gift, RotateCw, MapPin, Grid, 
  Sliders, LayoutGrid, Droplets, Ship, Image 
} from 'lucide-react';
import { erpProducts } from '../data/erpData';
import RequestModal from '../components/RequestModal';

export default function ERPProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Find product detail
  useEffect(() => {
    const found = erpProducts.find(p => p.slug === slug);
    if (!found) {
      navigate('/erp-solutions');
    } else {
      setProduct(found);
      // SEO tags updates
      document.title = found.seo.title || `${found.name} | Rajes Solutions`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", found.seo.description);
      }
    }
  }, [slug, navigate]);

  if (!product) return null;

  // Icon mapping
  const iconMap = {
    Wrench: Wrench,
    GraduationCap: GraduationCap,
    Briefcase: Briefcase,
    Sun: Sun,
    HeartPulse: HeartPulse,
    ShoppingCart: ShoppingCart,
    Settings: Settings,
    Scissors: Scissors,
    ClipboardList: ClipboardList,
    Layers: Layers,
    FileText: FileText,
    MessageSquare: MessageSquare,
    Bell: Bell,
    UserPlus: UserPlus,
    CreditCard: CreditCard,
    CheckSquare: CheckSquare,
    FileSpreadsheet: FileSpreadsheet,
    Calendar: Calendar,
    Smartphone: Smartphone,
    Cpu: Cpu,
    ShieldAlert: ShieldAlert,
    DollarSign: DollarSign,
    Clock: Clock,
    Sparkles: Sparkles,
    Heart: Heart,
    Home: Home,
    Database: Database,
    Box: Box,
    Bed: Bed,
    FolderHeart: FolderHeart,
    PlusSquare: PlusSquare,
    Activity: Activity,
    FileCheck: FileCheck,
    Zap: Zap,
    CalendarRange: CalendarRange,
    Barcode: Barcode,
    Gift: Gift,
    RotateCw: RotateCw,
    MapPin: MapPin,
    Grid: Grid,
    Sliders: Sliders,
    LayoutGrid: LayoutGrid,
    Droplets: Droplets,
    Ship: Ship,
    Image: Image
  };

  const HeroIcon = iconMap[product.icon] || Cpu;

  return (
    <div className="pt-24 py-8 bg-navy-50/20 dark:bg-navy-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link 
          to="/erp-solutions" 
          className="inline-flex items-center gap-2 text-sm font-bold text-navy-600 dark:text-navy-455 hover:text-gold-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to ERP Solutions
        </Link>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 dark:text-gold-400 text-xs font-semibold mb-4">
              Premium ERP Module
            </div>
            <h1 className="font-sans font-black text-4xl sm:text-5xl text-navy-900 dark:text-white leading-tight mb-4">
              {product.name}
            </h1>
            <p className="text-gold-500 dark:text-gold-400 font-semibold text-lg sm:text-xl mb-6">
              {product.tagline}
            </p>
            <p className="text-navy-600 dark:text-navy-300 text-base leading-relaxed mb-8">
              {product.longDesc}
            </p>
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 shadow-lg shadow-gold-500/10 transition-all cursor-pointer"
            >
              Request Live {product.name} Demo
            </button>
          </div>

          {/* Visual Canvas Representation */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gold-500/10 rounded-3xl blur-2xl opacity-60" />
            <div className="glass-card p-6 border-white/20 dark:border-navy-850 shadow-2xl flex flex-col items-center justify-center text-center relative z-10 min-h-[300px]">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-950 shadow-xl shadow-gold-500/20 mb-6">
                <HeroIcon className="w-10 h-10" />
              </div>
              <h3 className="font-sans font-bold text-xl text-navy-900 dark:text-white mb-2">
                {product.name} Framework
              </h3>
              <p className="text-xs text-navy-500 dark:text-navy-400 max-w-xs">
                Built with a high-availability SQL architecture and real-time ledger accounting.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="text-[10px] font-bold px-2 py-1 bg-navy-100 dark:bg-navy-900 text-navy-600 dark:text-navy-300 rounded border dark:border-navy-800">
                  SQL Server
                </span>
                <span className="text-[10px] font-bold px-2 py-1 bg-navy-100 dark:bg-navy-900 text-navy-600 dark:text-navy-300 rounded border dark:border-navy-800">
                  ASP.NET Core
                </span>
                <span className="text-[10px] font-bold px-2 py-1 bg-navy-100 dark:bg-navy-900 text-navy-600 dark:text-navy-300 rounded border dark:border-navy-800">
                  REST APIs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="font-sans font-black text-2xl sm:text-3xl text-navy-900 dark:text-white text-center mb-12">
          Core Module Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.features.map((feature, idx) => {
            const FeatIcon = iconMap[feature.icon] || Cpu;
            return (
              <div key={idx} className="glass-card p-6 sm:p-8 hover:shadow-lg transition-all border border-navy-100/40 dark:border-navy-800/40">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center mb-6">
                  <FeatIcon className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-lg text-navy-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-navy-900 text-white py-20 mb-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-center mb-12 text-white">
            Operational Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-navy-850 border border-navy-800">
                <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-450 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-navy-200 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-24">
        <h2 className="font-sans font-black text-2xl sm:text-3xl text-center mb-12 text-navy-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {product.faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div 
                key={i} 
                className="glass-card overflow-hidden border border-navy-100/40 dark:border-navy-800/40"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-navy-800 dark:text-white hover:text-gold-500 focus:outline-none transition-colors"
                >
                  <span className="font-sans text-sm sm:text-base flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-navy-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-navy-600 dark:text-navy-300 leading-relaxed border-t border-navy-100/20 dark:border-navy-850 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center pb-12">
        <div className="glass-card p-10 bg-gradient-to-r from-navy-900 to-navy-950 text-white border-none shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-[80px]" />
          <h3 className="font-sans font-bold text-2xl mb-3">Begin Your Integration Blueprint</h3>
          <p className="text-navy-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed mb-6">
            Contact us for a detailed deployment plan and custom invoice calculations for your {product.name} setup.
          </p>
          <button
            onClick={() => setIsDemoOpen(true)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold transition-all active:scale-95 shadow-md shadow-gold-500/10"
          >
            Get Quote &amp; Request Demo
          </button>
        </div>
      </section>

      <RequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} type="demo" />
    </div>
  );
}
