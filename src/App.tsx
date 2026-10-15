import React, { useState, useEffect } from 'react';
import { 
  Car, 
  HeartPulse, 
  Home, 
  Briefcase, 
  TrendingUp, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Award, 
  Building2, 
  ArrowRight, 
  Quote, 
  Star, 
  Navigation, 
  Calendar, 
  Sparkles, 
  MessageSquare, 
  PhoneCall,
  Truck,
  HardHat,
  Laptop,
  Plane,
  Shield,
  Calculator,
  MessageCircle,
  Facebook,
  Linkedin,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, PRO_SERVICES, TESTIMONIALS } from './constants';
import { PRODUCTS_DATA, ProductData } from './data/products';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CatalogPage } from './components/CatalogPage';
import { QuoteModal } from './components/QuoteModal';

const SaadaMonogram = ({ 
  isScrolled = false, 
  variant = 'auto',
  className = "h-11 sm:h-12 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105" 
}: { 
  isScrolled?: boolean;
  variant?: 'auto' | 'light' | 'dark';
  className?: string;
}) => {
  const isLight = variant === 'light' || (variant === 'auto' && !isScrolled);
  const primaryColor = isLight ? "#ffffff" : "#2d2d2d";
  const contrastA = isLight ? "#111827" : "#ffffff";

  return (
    <svg
      className={className}
      viewBox="0 0 540 375"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Officiel Assurances Hay Saada"
    >
      <defs>
        {isLight && (
          <filter id="saadaLogoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        )}
      </defs>

      <g filter={isLight ? "url(#saadaLogoGlow)" : undefined}>
        {/* Cercle principal anthracite */}
        <circle cx="175" cy="175" r="125" fill={primaryColor} />
        
        {/* Lettre A blanche géométrique et grasse à l'intérieur du cercle */}
        <path 
          fill={contrastA} 
          fillRule="evenodd" 
          d="
            M 163 75 
            L 187 75 
            L 272 255 
            L 226 255 
            L 210 216 
            L 154 216 
            L 138 255 
            L 92 255 
            Z
            M 175 130 
            L 159 182 
            L 191 182 
            Z
          " 
        />

        {/* Lettre H majuscule bold */}
        <path 
          fill={primaryColor} 
          d="
            M 274 75 
            L 322 75 
            L 322 148 
            L 392 148 
            L 392 75 
            L 440 75 
            L 440 255 
            L 392 255 
            L 392 186 
            L 322 186 
            L 322 255 
            L 274 255 
            Z
          " 
        />

        {/* Point circulaire '.' après le H */}
        <circle cx="480" cy="235" r="20" fill={primaryColor} />

        {/* Typographie officielle : HAY SAADA et ASSURANCES sous le H. */}
        <g fill={primaryColor} fontFamily="Montserrat, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="900">
          <text x="274" y="306" fontSize="36" letterSpacing="0.5">HAY SAADA</text>
          <text x="274" y="350" fontSize="36" letterSpacing="0.2">ASSURANCES</text>
        </g>
      </g>
    </svg>
  );
};

const Navbar = ({
  currentView = 'home',
  onNavigate,
  onOpenQuoteModal
}: {
  currentView?: string;
  onNavigate?: (view: 'home' | 'particuliers' | 'entreprises', targetHash?: string) => void;
  onOpenQuoteModal?: () => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', view: 'home' as const, hash: '#' },
    { name: 'Particuliers', view: 'particuliers' as const, hash: '#particuliers' },
    { name: 'Entreprises', view: 'entreprises' as const, hash: '#entreprises' },
    { name: 'Contact', view: 'home' as const, hash: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(item.view, item.hash);
    } else {
      window.location.hash = item.hash;
    }
  };

  const isDarkNav = !isScrolled && currentView === 'home';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || currentView !== 'home'
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-gray-100' 
          : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center w-full">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onNavigate?.('home'); }}
            className="flex items-center gap-3 group shrink-0 cursor-pointer" 
            aria-label="Accueil Assurances Hay Saada"
          >
            {/* Logo officiel Assurances Hay Saada (photo attachée) */}
            <SaadaMonogram isScrolled={isScrolled || currentView !== 'home'} className="h-11 sm:h-12 w-auto shrink-0" />
            <div className="hidden sm:flex flex-col justify-center pl-3 border-l border-gray-300/40">
              <span className={`text-[11px] font-black uppercase tracking-wider block whitespace-nowrap leading-tight ${isDarkNav ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]' : 'text-[#001f5c]'}`}>
                Agent Général Agréé
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#ff0000] block mt-0.5 whitespace-nowrap">
                AXA Assurance Maroc
              </span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-auto">
            <div className="flex items-baseline space-x-7">
              {navItems.map((item) => {
                const isActive = (item.view === currentView && currentView !== 'home') || 
                  (currentView === 'home' && item.name === 'Accueil');
                return (
                  <a
                    key={item.name}
                    href={item.hash}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`text-sm font-bold transition-colors ${
                      isActive 
                        ? 'text-[#ff0000]' 
                        : isDarkNav 
                          ? 'text-white hover:text-[#ff2a2a] drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]' 
                          : 'text-gray-700 hover:text-[#ff0000]'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-3 pl-3 border-l border-gray-200/40">
              {/* Réseaux Sociaux : Facebook, LinkedIn, Instagram */}
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 rounded-lg transition-colors ${
                    isDarkNav
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-gray-500 hover:text-[#002b80] hover:bg-blue-50'
                  }`}
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 rounded-lg transition-colors ${
                    isDarkNav
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-gray-500 hover:text-[#002b80] hover:bg-blue-50'
                  }`}
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 rounded-lg transition-colors ${
                    isDarkNav
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-gray-500 hover:text-[#002b80] hover:bg-blue-50'
                  }`}
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>

              <button
                type="button"
                onClick={() => onOpenQuoteModal?.()}
                className="bg-gradient-to-r from-[#002b80] to-[#001f5c] hover:from-[#0038a8] hover:to-[#002b80] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide uppercase transition-all shadow-md hover:shadow-lg border border-white/10 flex items-center gap-2 cursor-pointer"
              >
                <span>Devis Gratuit</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff0000] inline-block animate-pulse" />
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${isDarkNav ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'}`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white absolute top-full left-0 w-full shadow-2xl border-t border-gray-100 divide-y divide-gray-100 max-h-[calc(100vh-4.5rem)] overflow-y-auto"
          >
            <div className="p-4 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <SaadaMonogram isScrolled={true} className="h-10 w-auto shrink-0" />
                <div className="min-w-0 pl-2.5 border-l border-gray-200">
                  <div className="text-[11px] font-black uppercase text-[#001f5c] tracking-wider whitespace-nowrap">
                    Agent Général Agréé
                  </div>
                  <div className="text-[10px] text-[#ff0000] font-black uppercase tracking-widest whitespace-nowrap mt-0.5">
                    AXA Assurance Maroc
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Agence Ouverte
              </span>
            </div>

            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.hash}
                  className="block px-3 py-3 rounded-lg text-sm font-bold text-gray-800 hover:bg-blue-50 hover:text-[#002b80] transition-colors"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="p-4 bg-gray-50 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+212522000000"
                  className="flex items-center justify-center gap-2 bg-[#001f5c] text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-sm"
                >
                  <Phone size={14} />
                  <span>Appeler</span>
                </a>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-sm"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
              <button
                type="button"
                className="block w-full text-center bg-gradient-to-r from-[#ff0000] to-[#d60000] text-white py-3 rounded-xl text-sm font-black uppercase tracking-wider shadow-md cursor-pointer"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal?.();
                }}
              >
                Obtenir un Devis Gratuit
              </button>

              {/* Réseaux Sociaux Mobile */}
              <div className="flex items-center justify-center gap-6 pt-2 pb-1 border-t border-gray-200/50">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#002b80] transition-colors p-1.5"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#002b80] transition-colors p-1.5"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#002b80] transition-colors p-1.5"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface SlideData {
  id: number;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  highlightText: string;
  description: string;
  image: string;
  alt: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  floatingBadgeTitle: string;
  floatingBadgeSubtitle: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    badge: "CONSEIL & SOUSCRIPTION EN AGENCE",
    titleLine1: "VOTRE PROTECTION,",
    titleLine2: "NOTRE EXPERTISE.",
    highlightText: "CONTRAT SUR-MESURE",
    description: "Audit personnalisé de vos risques, garanties transparentes et souscription rapide avec votre Agent Général AXA au cœur de Casablanca.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000",
    alt: "Conseiller en assurance AXA en entretien personnalisé avec un client en agence",
    primaryCtaText: "NOS SOLUTIONS",
    primaryCtaHref: "#services",
    secondaryCtaText: "DEVIS GRATUIT",
    secondaryCtaHref: "#contact",
    floatingBadgeTitle: "Conseil & Souscription",
    floatingBadgeSubtitle: "Boulevard Zerktouni, Casablanca"
  },
  {
    id: 2,
    badge: "ASSURANCE AUTO & MOBILITÉ",
    titleLine1: "ROULEZ EN TOUTE",
    titleLine2: "SÉRÉNITÉ.",
    highlightText: "ASSISTANCE 24/7",
    description: "Protection complète de votre véhicule, remise des clés sans stress, remorquage express 0 km partout au Maroc et véhicule de courtoisie.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=2000",
    alt: "Remise des clés de voiture et protection automobile AXA",
    primaryCtaText: "DEVIS AUTO EXPRESS",
    primaryCtaHref: "#contact",
    secondaryCtaText: "DÉCOUVRIR LE PACK AUTO",
    secondaryCtaHref: "#services",
    floatingBadgeTitle: "Assistance Immédiate",
    floatingBadgeSubtitle: "Dépannage & Constat 24h/24"
  },
  {
    id: 3,
    badge: "SANTÉ & PRÉVOYANCE FAMILLE",
    titleLine1: "LA SANTÉ DE VOS",
    titleLine2: "PROCHES D'ABORD.",
    highlightText: "TIERS PAYANT CLINIQUE",
    description: "Prise en charge médicale directe dans les meilleures cliniques de Casablanca, remboursements en 48h et couverture hospitalière optimale.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
    alt: "Consultation médicale, prise en charge et mutuelle santé AXA",
    primaryCtaText: "PROTÉGER MA FAMILLE",
    primaryCtaHref: "#contact",
    secondaryCtaText: "NOS FORMULES SANTÉ",
    secondaryCtaHref: "#services",
    floatingBadgeTitle: "Tiers Payant Cliniques",
    floatingBadgeSubtitle: "Remboursements en 48h"
  },
  {
    id: 4,
    badge: "HABITATION & PATRIMOINE",
    titleLine1: "PROTÉGEZ VOTRE",
    titleLine2: "FOYER & VOS BIENS.",
    highlightText: "MULTIRISQUE HABITATION",
    description: "Sécurisez votre logement contre les dégâts des eaux, incendies, vols et bris de glace avec notre assistance dépannage d'urgence à domicile.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000",
    alt: "Clés de maison et protection multirisque habitation AXA",
    primaryCtaText: "ASSURER MON LOGEMENT",
    primaryCtaHref: "#contact",
    secondaryCtaText: "DÉCOUVRIR PACK HABITATION",
    secondaryCtaHref: "#services",
    floatingBadgeTitle: "Assistance Domicile",
    floatingBadgeSubtitle: "Dépannage serrurerie & plomberie"
  },
  {
    id: 5,
    badge: "SOLUTIONS ENTREPRISES & FLOTTES",
    titleLine1: "SÉCURISEZ VOTRE",
    titleLine2: "ACTIVITÉ & SALARIÉS.",
    highlightText: "RC PRO & FLOTTE",
    description: "Responsabilité Civile Professionnelle, couverture multirisque des locaux, gestion simplifiée de flotte et prévoyance collective pour vos équipes.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2000",
    alt: "Poignée de main et partenariat d'assurance entreprise AXA",
    primaryCtaText: "AUDIT DES RISQUES PRO",
    primaryCtaHref: "#professionnels",
    secondaryCtaText: "PARLER À UN CONSEILLER",
    secondaryCtaHref: "#contact",
    floatingBadgeTitle: "Espace Entreprises",
    floatingBadgeSubtitle: "Flotte, RC Pro & Décennale"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 5000; // 5 secondes de défilement automatique continu

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section 
      className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[680px] lg:h-screen lg:max-h-[950px] flex items-center overflow-hidden bg-gray-950"
      aria-label="Carrousel principal des offres AXA Casablanca"
    >
      {/* Background Sliding Images with Ken-Burns and smooth cross-fade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={activeSlide.image}
            alt={activeSlide.alt}
            className="w-full h-full object-cover object-center filter brightness-[1.08] contrast-[1.02]"
            referrerPolicy="no-referrer"
          />
          {/* Voiles AXA allégés pour une photo de fond beaucoup plus claire et lumineuse */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00153d]/75 via-[#001c52]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-black/15" />
        </motion.div>
      </AnimatePresence>

      {/* 3D Decorative Floating Motifs */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Floating 3D AXA Red Diamond Accent */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [12, 18, 12]
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-28 right-12 md:right-28 w-44 h-44 bg-[#ff0000]/20 border-2 border-[#ff0000]/40 rounded-3xl backdrop-blur-md shadow-[0_20px_50px_rgba(255,0,0,0.3)] hidden lg:block"
        />

        {/* Floating 3D AXA Blue Square Accent (carreau arrière-plan en bas) */}
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [-15, -8, -15]
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-32 right-1/4 w-36 h-36 bg-blue-600/30 border-2 border-blue-400/50 rounded-2xl backdrop-blur-lg shadow-[0_20px_50px_rgba(37,99,235,0.35)] hidden md:block"
        />

        {/* Moroccan Geometric Grid Accent (Subtle) */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Main Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-3xl lg:max-w-4xl"
              >
                {/* Category Badge with AXA Red Switch indicator */}
                <div className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4 sm:mb-6">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#ff0000] rounded-full animate-ping" />
                  <span className="text-white text-[11px] sm:text-xs font-black tracking-widest uppercase">
                    {activeSlide.badge}
                  </span>
                </div>

                {/* Main Heading sur la même ligne */}
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-black text-white leading-[1.15] sm:leading-tight mb-4 sm:mb-6 tracking-tight drop-shadow-lg break-words">
                  <span className="inline">{activeSlide.titleLine1}</span>{' '}
                  <span className="inline text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#ff4d4d]">
                    {activeSlide.titleLine2}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg lg:text-xl text-blue-50/95 mb-6 sm:mb-8 md:mb-10 leading-relaxed font-medium drop-shadow-md">
                  {activeSlide.description}
                </p>

                {/* Action Button (un seul bouton principal) */}
                <div className="flex w-full sm:w-auto">
                  <a
                    href={activeSlide.primaryCtaHref}
                    className="w-full sm:w-auto bg-[#ff0000] hover:bg-red-700 text-white px-6 sm:px-9 py-3.5 sm:py-4 font-black text-sm sm:text-base transition-all text-center shadow-xl shadow-red-600/40 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>{activeSlide.primaryCtaText}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Floating Info Card (3D Glassmorphism Card with Dynamic Data) */}
          <div className="hidden lg:block lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff0000]/20 rounded-full blur-2xl" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff0000] flex items-center justify-center text-white shadow-lg transform -skew-x-6">
                    <Sparkles size={24} className="transform skew-x-6" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#ff4d4d] block">
                      Avantage Exclusif
                    </span>
                    <h3 className="text-xl font-black text-white">
                      {activeSlide.floatingBadgeTitle}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-blue-100/80 mb-6 font-medium leading-relaxed">
                  {activeSlide.floatingBadgeSubtitle}
                </p>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-white">
                  <div>
                    <span className="text-2xl font-black text-white">2000+</span>
                    <p className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">Assurés Actifs</p>
                  </div>
                  <div className="h-8 w-[1px] bg-white/20" />
                  <div>
                    <span className="text-2xl font-black text-[#ff4d4d]">100%</span>
                    <p className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">Casablanca</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Indicators: Clean Automated Slide Tabs with Progress Animation */}
      <div className="absolute bottom-6 left-0 w-full z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-start">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 max-w-full">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`group relative text-left py-2 px-3 sm:px-4 rounded-lg transition-all duration-300 border flex items-center gap-3 shrink-0 overflow-hidden ${
                    isActive 
                      ? "bg-white/15 border-white/30 backdrop-blur-md shadow-lg" 
                      : "bg-black/30 border-white/10 hover:bg-white/5 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Aller au slide ${idx + 1}: ${slide.badge}`}
                >
                  <span className={`text-xs font-black transition-colors ${isActive ? "text-[#ff4d4d]" : "text-gray-400 group-hover:text-white"}`}>
                    0{idx + 1}
                  </span>
                  <div className="hidden sm:block">
                    <p className={`text-xs font-bold leading-tight ${isActive ? "text-white" : "text-gray-300"}`}>
                      {slide.badge.split(" ")[0]} {slide.badge.split(" ")[1] || ""}
                    </p>
                  </div>

                  {/* Automated Progress Bar for the active slide */}
                  {isActive && (
                    <motion.div 
                      key={currentSlide}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-0.5 bg-[#ff0000]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Car': return <Car className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'Home': return <Home className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Plane': return <Plane className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Building2': return <Building2 className={className} />;
    case 'Truck': return <Truck className={className} />;
    case 'HardHat': return <HardHat className={className} />;
    case 'Laptop': return <Laptop className={className} />;
    default: return <ShieldCheck className={className} />;
  }
};

const Services = ({
  onSelectProduct,
  onExploreCategory
}: {
  onSelectProduct?: (product: ProductData) => void;
  onExploreCategory?: (category: 'particulier' | 'entreprise') => void;
}) => {
  const particulierProducts = PRODUCTS_DATA.filter(p => p.category === 'particulier' && p.id !== 'emprunteur');

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#000a28] via-[#00133c] to-[#00081d] text-white relative overflow-hidden">
      {/* Grille de points subtile (Dot Matrix) comme dans la référence AXA */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Lignes diagonales architecturales AXA subtiles */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.18) 0, rgba(255,255,255,0.18) 1px, transparent 0, transparent 48px)'
        }}
      />

      {/* Accents diagonaux géométriques AXA discrets */}
      <div className="absolute -top-32 -right-20 w-[500px] h-[700px] bg-gradient-to-b from-blue-500/[0.04] to-transparent transform -skew-x-[20deg] border-l border-white/[0.06] pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-[450px] h-[600px] bg-gradient-to-t from-red-600/[0.04] to-transparent transform -skew-x-[20deg] border-r border-[#ff0000]/10 pointer-events-none" />

      {/* Halos d'ambiance discrets */}
      <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-[#ff0000]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tighter">PARTICULIERS</h2>
          
          <div className="flex justify-center items-center gap-3">
            <div className="w-12 h-1 bg-[#ff0000]" />
            <div className="w-4 h-1 bg-blue-400/60" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {particulierProducts.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => onSelectProduct?.(service)}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_20px_45px_rgba(0,15,50,0.25)] border-t-4 border-[#ff0000] axa-card-3d group text-gray-900 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-[#001f5c] transition-all duration-300 shadow-xs">
                    <ServiceIcon name={service.iconName} className="text-[#001f5c] group-hover:text-white transition-colors w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
                    {service.subcategory}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-gray-900 group-hover:text-[#001f5c] transition-colors mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-medium text-xs sm:text-sm line-clamp-3">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                <a
                  href={`https://wa.me/212600000000?text=${encodeURIComponent(`Bonjour Assurances Hay Saada, je souhaite un devis personnalisé pour : ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors"
                >
                  <MessageCircle size={14} className="text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>

                <span className="inline-flex items-center text-[#ff0000] font-black uppercase text-xs tracking-wider group-hover:gap-2 transition-all">
                  PAGE DÉDIÉE <ArrowRight size={15} className="ml-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore all CTA */}
        <div className="mt-10 sm:mt-14 text-center">
          <button
            onClick={() => onExploreCategory?.('particulier')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white text-white hover:text-[#001f5c] border border-white/25 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-lg backdrop-blur-md cursor-pointer"
          >
            <span>Consulter l'Espace Particuliers complet</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

const ProfessionalSection = ({
  onSelectProduct,
  onExploreCategory,
  onOpenQuoteModal
}: {
  onSelectProduct?: (product: ProductData) => void;
  onExploreCategory?: (category: 'particulier' | 'entreprise') => void;
  onOpenQuoteModal?: (title?: string) => void;
}) => {
  const proProducts = PRODUCTS_DATA.filter(p => p.category === 'entreprise');
  const [proCompany, setProCompany] = useState('');
  const [proSector, setProSector] = useState('Services / Commerce');
  const [proPhone, setProPhone] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleProSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proCompany || !proPhone) return;
    setIsSent(true);
  };

  return (
    <section id="professionnels" className="py-16 sm:py-20 lg:py-24 bg-[#fcfdfe] relative overflow-hidden border-b border-gray-100">
      {/* Moroccan Geometric Diamond Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2394a3b8' stroke-width='0.75'%3E%3Cpath d='M36 0l36 36-36 36L0 36z'/%3E%3Cpath d='M0 0l72 72M72 0L0 72'/%3E%3Ccircle cx='36' cy='36' r='2.2' fill='%23ef4444' stroke='none'/%3E%3Ccircle cx='0' cy='0' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3Ccircle cx='72' cy='0' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3Ccircle cx='0' cy='72' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3Ccircle cx='72' cy='72' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '72px 72px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-12 sm:mb-16">
          <div className="lg:w-7/12 w-full">
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 sm:w-12 h-1 bg-[#ff0000]" />
                <h2 className="text-xs sm:text-sm font-black text-[#002b80] uppercase tracking-[0.25em] sm:tracking-[0.3em]">Espace Entreprises & Professionnels</h2>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001f5c] mb-6 sm:mb-8 tracking-tighter leading-tight">
                L'EXPERTISE PRO <br /><span className="text-[#001f5c]">SANS COMPROMIS.</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {proProducts.slice(0, 4).map((pro) => (
                <motion.div 
                  key={pro.id}
                  onClick={() => onSelectProduct?.(pro)}
                  className="bg-white p-5 sm:p-7 rounded-2xl shadow-[0_15px_35px_rgba(0,31,92,0.06)] border border-gray-200/90 hover:border-[#ff0000] transition-all group axa-card-3d cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#001f5c] group-hover:bg-[#ff0000] rounded-xl flex items-center justify-center text-white shadow-md transition-colors shrink-0">
                        <ServiceIcon name={pro.iconName} className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">{pro.subcategory}</span>
                        <h4 className="font-black text-[#001f5c] text-sm sm:text-base leading-tight tracking-tight">{pro.title}</h4>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed font-medium line-clamp-2">
                      {pro.shortDescription}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {pro.keyGuarantees.slice(0, 2).map((g, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-[11px] font-bold text-gray-700">
                          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                          <span className="truncate">{g.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs gap-2">
                    <a
                      href={`https://wa.me/212600000000?text=${encodeURIComponent(`Bonjour Assurances Hay Saada, je souhaite un devis personnalisé pour l'offre Entreprise : ${pro.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors"
                    >
                      <MessageCircle size={12} className="text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                    <span className="font-bold text-[#ff0000] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Page dédiée <ArrowRight size={13} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => onExploreCategory?.('entreprise')}
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#001f5c] hover:text-[#ff0000] transition-colors cursor-pointer"
              >
                <span>Voir les 8 solutions Entreprises & BTP</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="lg:w-5/12 w-full lg:sticky lg:top-28">
            <div className="bg-white p-6 sm:p-8 lg:p-10 shadow-[0_25px_60px_rgba(0,31,92,0.1)] border border-gray-200/90 rounded-2xl sm:rounded-3xl relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#ff0000] rounded-lg shadow-md flex items-center justify-center text-white font-black text-xs z-20">
                PRO
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-[#001f5c] mb-1 tracking-tight">CONTACT PRO CASABLANCA</h4>
              <p className="text-[#ff0000] text-xs mb-6 font-black uppercase tracking-widest">Audit gratuit de vos risques d'entreprise</p>
              
              {isSent ? (
                <div className="py-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
                  <CheckCircle2 size={36} className="text-emerald-600 mx-auto mb-3" />
                  <h5 className="font-bold text-emerald-900 text-sm">Demande d'audit reçue !</h5>
                  <p className="text-xs text-emerald-700 mt-1">
                    Notre chargé de clientèle Entreprises va contacter <strong>{proCompany}</strong> au {proPhone}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleProSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-black text-gray-500 uppercase mb-1 tracking-wider">Entreprise *</label>
                    <input 
                      type="text" 
                      required
                      value={proCompany}
                      onChange={(e) => setProCompany(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 sm:py-2.5 text-sm sm:text-xs text-gray-900 focus:outline-none focus:border-[#001f5c] focus:bg-white transition-all font-semibold"
                      placeholder="Raison sociale (SARL, SA, Auto-entrepreneur...)"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-gray-500 uppercase mb-1 tracking-wider">Secteur d'activité</label>
                    <select 
                      value={proSector}
                      onChange={(e) => setProSector(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 sm:py-2.5 text-sm sm:text-xs text-gray-900 focus:outline-none focus:border-[#001f5c] focus:bg-white transition-all font-semibold"
                    >
                      <option>Services / Conseil / IT</option>
                      <option>Industrie & Production</option>
                      <option>BTP / Construction / Promotion</option>
                      <option>Transport & Logistique</option>
                      <option>Commerce de détail / Franchise</option>
                      <option>Professions Libérales & Santé</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-gray-500 uppercase mb-1 tracking-wider">Téléphone Professionnel *</label>
                    <input 
                      type="tel" 
                      required
                      value={proPhone}
                      onChange={(e) => setProPhone(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 sm:py-2.5 text-sm sm:text-xs text-gray-900 focus:outline-none focus:border-[#001f5c] focus:bg-white transition-all font-semibold"
                      placeholder="05 XX XX XX XX ou 06 XX XX XX XX"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[#001f5c] hover:bg-[#ff0000] text-white font-black py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest text-xs shadow-md mt-2 cursor-pointer"
                  >
                    <span>ÊTRE RAPPELLÉ PAR UN EXPERT</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Second row showing remaining 4 Entreprises products */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl font-black text-[#001f5c] tracking-tight">
              Autres solutions spécialisées pour entreprises
            </h4>
            <button
              onClick={() => onExploreCategory?.('entreprise')}
              className="text-xs font-bold text-[#ff0000] hover:underline"
            >
              Voir le catalogue Pro complet →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proProducts.slice(4).map((pro) => (
              <div
                key={pro.id}
                onClick={() => onSelectProduct?.(pro)}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#001f5c] hover:shadow-lg transition-all group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-[#001f5c] flex items-center justify-center mb-3 transition-colors">
                    <ServiceIcon name={pro.iconName} className="w-5 h-5 text-[#001f5c] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-1">{pro.subcategory}</span>
                  <h5 className="font-black text-gray-900 text-sm mb-2 group-hover:text-[#001f5c] transition-colors leading-tight">{pro.title}</h5>
                  <p className="text-xs text-gray-500 line-clamp-2 font-medium mb-4">{pro.shortDescription}</p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs gap-2">
                  <a
                    href={`https://wa.me/212600000000?text=${encodeURIComponent(`Bonjour Assurances Hay Saada, je souhaite un devis personnalisé pour l'offre Entreprise : ${pro.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors"
                  >
                    <MessageCircle size={12} className="text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                  <span className="text-[#ff0000] font-bold text-[11px] group-hover:translate-x-0.5 transition-transform">Page dédiée →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = ({
  onOpenQuoteModal
}: {
  onOpenQuoteModal?: (productTitle?: string) => void;
}) => {
  return (
    <section id="temoignages" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[#000638] via-[#000a4a] to-[#00105c] text-white">
      {/* Arrière-plan bleu avec motif répété AXA & Zellij géométrique marocain adouci (moins visible et discret) */}
      <div 
        className="absolute inset-0 pointer-events-none select-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='100' viewBox='0 0 180 100' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- Entrelacs Zellij discrets --%3E%3Cpath d='M90 0 L180 50 L90 100 L0 50 Z' fill='none' stroke='%23254bc4' stroke-width='0.5' stroke-opacity='0.25'/%3E%3Cpath d='M0 0 L180 100 M180 0 L0 100' fill='none' stroke='%23193599' stroke-width='0.35' stroke-opacity='0.2'/%3E%3Cpolygon points='90,14 96,28 110,34 96,40 90,54 84,40 70,34 84,28' fill='none' stroke='%232850cc' stroke-width='0.5' stroke-opacity='0.2'/%3E%3Ccircle cx='90' cy='34' r='1.5' fill='%23ff0000' fill-opacity='0.25'/%3E%3C!-- Répétition typographique AXA estompée --%3E%3Ctext x='90' y='66' text-anchor='middle' font-family='system-ui, -apple-system, sans-serif' font-weight='900' font-size='28' fill='%231f42bf' fill-opacity='0.2' letter-spacing='2.5'%3EAXA%3C/text%3E%3C/svg%3E")`,
          backgroundSize: '180px 100px'
        }}
      />

      {/* Lueur d'ambiance et accents de marque discrets */}
      <div className="absolute top-0 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-52 h-52 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">
            Ce que disent nos clients
          </h2>

          <div className="flex justify-center items-center gap-3">
            <div className="w-12 h-1 bg-[#ff0000]" />
            <p className="text-xs font-black text-blue-300 uppercase tracking-[0.25em]">
              Assurances Hay Saada • Agence AXA Casablanca
            </p>
            <div className="w-12 h-1 bg-[#ff0000]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border-t-4 border-[#ff0000] relative flex flex-col justify-between text-gray-900 group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 sm:right-8 text-blue-100 group-hover:text-blue-200 transition-colors">
                <Quote size={40} />
              </div>
              
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={17} 
                      className={i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"} 
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 sm:mb-8 italic relative z-10 text-xs sm:text-sm leading-relaxed font-medium">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-blue-50 shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-black text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 font-semibold">
                    {testimonial.role} {testimonial.company && `• ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-12 sm:mt-16 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black text-white mb-2">Rejoignez nos clients satisfaits</h4>
            <p className="text-blue-100 text-xs sm:text-sm font-medium">
              Plus de 2 000 assurés nous font confiance à Hay Mohammadi et Casablanca pour leurs contrats d'assurance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="https://wa.me/212600000000?text=Bonjour%20Assurances%20Hay%20Saada,%20je%20souhaite%20un%20devis%20personnalis%C3%A9%20d%27assurance."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Direct</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : window.location.hash = '#contact'}
              className="bg-[#ff0000] hover:bg-[#d60000] text-white px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer text-center"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const [showCallWidget, setShowCallWidget] = useState(true);

  return (
    <section id="hay-mohammadi" className="py-16 sm:py-20 lg:py-24 relative bg-white overflow-hidden border-b border-gray-100">
      <div id="about" className="absolute -top-24" />

      {/* Motif d'arrière-plan avec visibilité équilibrée */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.13]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2394a3b8' stroke-width='0.7'%3E%3Cpath d='M36 0l36 36-36 36L0 36z'/%3E%3Cpath d='M0 0l72 72M72 0L0 72'/%3E%3Ccircle cx='36' cy='36' r='1.8' fill='%23ef4444' stroke='none'/%3E%3Ccircle cx='0' cy='0' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3Ccircle cx='72' cy='0' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3Ccircle cx='0' cy='72' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3Ccircle cx='72' cy='72' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '72px 72px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Framed Image with Navy Border + Bottom Red Ribbon + Floating Call Widget */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Blue Frame matching image */}
              <div className="border-[6px] border-[#001f5c] p-1.5 bg-white shadow-2xl relative">
                <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1000"
                    alt="Deux collaborateurs célébrant avec un high five chez Assurances Hay Saada AXA"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Bottom Red Banner */}
                <div className="bg-[#ff0000] text-white py-3 text-center shadow-md">
                  <span className="font-black text-sm tracking-wider uppercase">
                    AGENCE AGRÉÉE AXA MAROC
                  </span>
                </div>
              </div>

              {/* Floating "Besoin d'un conseil ?" Widget on bottom-left */}
              {showCallWidget && (
                <div className="absolute -bottom-6 left-2 sm:-bottom-8 sm:-left-6 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,31,92,0.18)] border border-gray-100 p-3.5 sm:p-4 max-w-[calc(100%-1rem)] sm:max-w-[275px] z-20">
                  <button 
                    onClick={() => setShowCallWidget(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                    aria-label="Fermer"
                  >
                    <X size={14} />
                  </button>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#001f5c] rounded-xl flex items-center justify-center text-white shrink-0 shadow-md">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-gray-900 leading-tight">
                        Besoin d'un conseil ?
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                        Nos experts vous rappellent gratuitement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+212522000000"
                      className="flex-1 bg-[#001f5c] hover:bg-[#001540] text-white text-center py-2 px-3 rounded-lg text-xs font-bold transition-all shadow-sm"
                    >
                      Appeler
                    </a>
                    <a
                      href="https://wa.me/212600000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366] hover:bg-[#1ebe5b] text-white text-center py-2 px-3 rounded-lg text-xs font-bold transition-all shadow-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Title + Paragraphs + 2 Cards + Address Pill */}
          <div className="lg:col-span-7">
            {/* Main Heading in bold uppercase navy */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#001f5c] leading-[1.1] tracking-tight mb-4 sm:mb-6 uppercase">
              VOTRE PARTENAIRE ASSURANCE DE CONFIANCE À HAY MOHAMMADI
            </h2>

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              Implantée au cœur de Hay Mohammadi, l'agence <strong className="font-extrabold text-[#001f5c]">Assurances Hay Saada</strong> vous accompagne avec rigueur et écoute en tant qu'agent général agréé <strong className="font-extrabold text-[#001f5c]">AXA Assurance Maroc</strong>.
            </p>

            {/* Two Side-by-Side Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              
              {/* Card 1: CONSEIL SUR MESURE */}
              <div className="bg-slate-50/70 border-l-4 border-[#ff0000] border-y border-r border-gray-100 p-4 rounded-r-xl shadow-sm">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <MessageSquare size={16} className="text-[#001f5c]" />
                  <h3 className="text-xs font-black text-[#001f5c] uppercase tracking-wider">
                    CONSEIL SUR MESURE
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Étude personnalisée gratuite selon votre budget.
                </p>
              </div>

              {/* Card 2: GESTION SINISTRES LOCALE */}
              <div className="bg-slate-50/70 border-l-4 border-[#001f5c] border-y border-r border-gray-100 p-4 rounded-r-xl shadow-sm">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <PhoneCall size={16} className="text-[#001f5c]" />
                  <h3 className="text-xs font-black text-[#001f5c] uppercase tracking-wider">
                    GESTION SINISTRES LOCALE
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Suivi direct à Hay Mohammadi pour indemnisation rapide.
                </p>
              </div>

            </div>

            {/* Bottom Address Bar */}
            <div className="bg-white border border-gray-200/90 rounded-xl p-3.5 flex items-center gap-3 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#001f5c] shrink-0">
                <MapPin size={18} className="text-[#001f5c]" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#001f5c] leading-snug">
                271, Certificat Bloc 17, Hay Mohammadi, 20250 - Hay Mohammadi (AR)
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Auto',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({
        name: '',
        phone: '',
        email: '',
        type: 'Auto',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white text-gray-900 border-t border-gray-100">
      {/* Texture de fond subtile et halos très doux */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 0.75px, transparent 0.75px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#001f5c] mb-3 sm:mb-4 tracking-tight leading-tight">
              Prêt à être mieux protégé ?
            </h2>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-[#ff0000]" />
              <div className="w-4 h-1 bg-[#002b80]/40" />
            </div>

            <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base md:text-lg leading-relaxed">
              Nos conseillers sont à votre disposition pour réaliser une étude gratuite de vos besoins et vous proposer la meilleure solution d'assurance.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-gray-200/90 hover:border-[#002b80] hover:shadow-md transition-all">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-[#002b80]" size={20} />
                </div>
                <div>
                  <p className="text-[#002b80] text-xs font-bold uppercase tracking-wider mb-1">Téléphone</p>
                  <a href="tel:+212522000000" className="text-lg sm:text-xl font-bold text-[#001f5c] hover:text-[#ff0000] transition-colors">
                    05 22 00 00 00
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Du lundi au vendredi 8h30-18h30, samedi matin</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-gray-200/90 hover:border-[#002b80] hover:shadow-md transition-all">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-[#002b80]" size={20} />
                </div>
                <div>
                  <p className="text-[#002b80] text-xs font-bold uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:contact@assuranceshaysaada.ma" className="text-base sm:text-lg md:text-xl font-bold text-[#001f5c] hover:text-[#ff0000] transition-colors break-all">
                    contact@assuranceshaysaada.ma
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Réponse garantie sous 24h ouvrées</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-gray-200/90 hover:border-[#002b80] hover:shadow-md transition-all">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-[#002b80]" size={20} />
                </div>
                <div>
                  <p className="text-[#002b80] text-xs font-bold uppercase tracking-wider mb-1">Adresse</p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-[#001f5c] leading-snug">
                    271, Certificat Bloc 17, Hay Mohammadi, 20250 - Hay Mohammadi (AR)
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Casablanca, Maroc • Parking à proximité</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-200 text-gray-900">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black text-[#001f5c]">Demande envoyée avec succès !</h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm">
                  Merci pour votre confiance. Un conseiller de l'agence Assurances Hay Saada étudie votre demande et vous contactera dans les plus brefs délais.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm transition-colors cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002b80] focus:bg-white transition-all text-sm"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002b80] focus:bg-white transition-all text-sm"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002b80] focus:bg-white transition-all text-sm"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2">
                    Type d'Assurance
                  </label>
                  <select 
                    value={contactForm.type}
                    onChange={(e) => setContactForm({ ...contactForm, type: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002b80] focus:bg-white transition-all text-sm font-medium"
                  >
                    <option value="Auto">Auto & Moto</option>
                    <option value="Santé">Santé & Mutuelle</option>
                    <option value="Habitation">Multirisque Habitation</option>
                    <option value="Professionnelle">Professionnelle & Entreprise</option>
                    <option value="Épargne & Retraite">Épargne & Retraite</option>
                    <option value="Autre">Autre solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2">
                    Message (Optionnel)
                  </label>
                  <textarea
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002b80] focus:bg-white transition-all text-sm"
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#002b80] hover:bg-[#001f5c] text-white font-bold py-3.5 sm:py-4 rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <span>Envoyer ma demande</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  const operatingHours = [
    { day: 'Lundi - Vendredi', hours: '08:30 - 12:30, 14:30 - 18:30' },
    { day: 'Samedi', hours: '09:00 - 12:00' },
    { day: 'Dimanche', hours: 'Fermé' },
  ];

  const address = "271, Certificat Bloc 17, Hay Mohammadi, 20250 - Hay Mohammadi (AR), Casablanca";
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26590.23114979144!2d-7.581896799999999!3d33.5936858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd6010530739%3A0x633512a2cb58ad57!2sHay%20Mohammadi%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1680000000000!5m2!1sfr!2sma`;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#001744] via-[#001b52] to-[#001d5a] text-white relative overflow-hidden border-t border-blue-900/30">
      {/* Texture discrète de micro-points */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
          <div className="lg:w-1/3 w-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-1 bg-[#ff0000]" />
                <h2 className="text-xs font-black text-blue-300 uppercase tracking-widest">Nous Trouver</h2>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 tracking-tight">Venez nous rencontrer</h3>
              <p className="text-blue-100/80 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Notre agence est idéalement située au cœur de Casablanca pour vous accueillir et vous conseiller.
              </p>

              <div className="space-y-4 mb-6 sm:mb-8">
                {/* Carte Adresse */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm shadow-inner">
                  <div className="w-10 h-10 bg-blue-600/25 border border-blue-400/30 rounded-xl flex items-center justify-center shrink-0 text-blue-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs uppercase tracking-wider mb-1">Adresse</p>
                    <p className="text-blue-100/90 text-sm leading-snug">{address}</p>
                  </div>
                </div>

                {/* Carte Horaires */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm shadow-inner">
                  <div className="w-10 h-10 bg-blue-600/25 border border-blue-400/30 rounded-xl flex items-center justify-center shrink-0 text-blue-300">
                    <Calendar size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-xs uppercase tracking-wider mb-2">Horaires d'ouverture</p>
                    <div className="space-y-1.5">
                      {operatingHours.map((item, i) => (
                        <div key={i} className="flex justify-between items-center gap-4 text-xs">
                          <span className="text-blue-200/70">{item.day}</span>
                          {item.hours === 'Fermé' ? (
                            <span className="text-red-300 font-bold bg-red-950/50 border border-red-800/40 px-2 py-0.5 rounded text-[11px]">
                              Fermé
                            </span>
                          ) : (
                            <span className="text-white font-medium">{item.hours}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ff0000] hover:bg-[#d60000] text-white font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl transition-all shadow-lg shadow-red-600/30 group text-center cursor-pointer"
            >
              <Navigation size={18} />
              <span>Obtenir l'itinéraire</span>
            </a>
          </div>

          <div className="lg:w-2/3 w-full h-[320px] sm:h-[420px] lg:h-auto min-h-[300px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 ring-1 ring-white/10">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation AXA Casablanca"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({
  onNavigate,
  onSelectProduct
}: {
  onNavigate?: (view: 'home' | 'particuliers' | 'entreprises', targetHash?: string) => void;
  onSelectProduct?: (product: ProductData) => void;
}) => {
  const particulierIds = ['auto', 'habitation', 'sante', 'epargne-retraite', 'voyage'];
  const particulierList = particulierIds
    .map(id => PRODUCTS_DATA.find(p => p.id === id))
    .filter(Boolean) as ProductData[];

  const entrepriseIds = ['rc-pro', 'mrp', 'flotte-auto', 'sante-collective', 'accidents-travail'];
  const entrepriseList = entrepriseIds
    .map(id => PRODUCTS_DATA.find(p => p.id === id))
    .filter(Boolean) as ProductData[];

  return (
    <footer className="bg-gradient-to-b from-[#001d5a] via-[#00184c] to-[#00123b] text-blue-100/80 py-14 sm:py-16 lg:py-20 border-t border-white/10 relative overflow-hidden">
      {/* Texture géométrique subtile */}
      <div className="axa-pattern-3d absolute inset-0 opacity-[0.06] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Bloc Marque & Coordonnées */}
          <div className="lg:col-span-2">
            <div className="flex items-start gap-3.5 mb-5">
              <SaadaMonogram variant="light" className="h-14 w-auto shrink-0 drop-shadow-md" />
              <div>
                <span className="text-white font-black text-base sm:text-lg tracking-wider block leading-tight">
                  HAY SAADA
                </span>
                <span className="text-blue-300 font-extrabold text-[11px] tracking-widest block uppercase mt-0.5">
                  ASSURANCES
                </span>
                <div className="mt-2 pt-1.5 border-t border-white/15">
                  <span className="text-white/85 font-bold text-[10px] uppercase tracking-wider block">
                    Agent Général Agréé
                  </span>
                  <span className="text-[#ff3b30] text-xs font-black uppercase tracking-widest block mt-0.5">
                    AXA Assurance Maroc
                  </span>
                </div>
              </div>
            </div>

            <p className="max-w-sm text-blue-100/80 font-medium leading-relaxed text-xs sm:text-sm mb-6">
              Votre partenaire d'assurance de référence au Maroc. Protection des particuliers, familles, professionnels et entreprises avec la solidité du groupe AXA.
            </p>

            <div className="text-xs text-blue-100/80 space-y-2 mb-5">
              <p className="flex items-center gap-2">
                <span className="text-sm">📍</span>
                <span>271, Certificat Bloc 17, Hay Mohammadi, Casablanca</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-sm">📞</span>
                <span>
                  <a href="tel:+212522000000" className="hover:text-white transition-colors font-medium">05 22 00 00 00</a>
                  {' '}•{' '}
                  <a href="mailto:contact@assuranceshaysaada.ma" className="hover:text-white transition-colors font-medium">contact@assuranceshaysaada.ma</a>
                </span>
              </p>
            </div>

            {/* Réseaux Sociaux */}
            <div className="flex items-center gap-5 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200/80 hover:text-white hover:scale-110 transition-all cursor-pointer p-1"
                aria-label="Facebook"
                title="Suivez-nous sur Facebook"
              >
                <Facebook size={19} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200/80 hover:text-white hover:scale-110 transition-all cursor-pointer p-1"
                aria-label="LinkedIn"
                title="Suivez-nous sur LinkedIn"
              >
                <Linkedin size={19} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200/80 hover:text-white hover:scale-110 transition-all cursor-pointer p-1"
                aria-label="Instagram"
                title="Suivez-nous sur Instagram"
              >
                <Instagram size={19} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-black mb-5 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-3 text-xs font-bold">
              <li>
                <button 
                  onClick={() => onNavigate?.('home')} 
                  className="text-blue-100/90 hover:text-[#ff3b30] transition-colors cursor-pointer text-left"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('particuliers')} 
                  className="text-blue-100/90 hover:text-[#ff3b30] transition-colors cursor-pointer text-left"
                >
                  Espace Particuliers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('entreprises')} 
                  className="text-blue-100/90 hover:text-[#ff3b30] transition-colors cursor-pointer text-left"
                >
                  Espace Entreprises
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('home', '#contact')} 
                  className="text-blue-100/90 hover:text-[#ff3b30] transition-colors cursor-pointer text-left"
                >
                  Contact & Agence
                </button>
              </li>
            </ul>
          </div>

          {/* Particuliers */}
          <div>
            <h4 className="text-white font-black mb-5 uppercase tracking-widest text-xs">Particuliers</h4>
            <ul className="space-y-3 text-xs font-semibold">
              {particulierList.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onSelectProduct?.(p)}
                    className="text-blue-100/80 hover:text-white transition-colors cursor-pointer text-left truncate max-w-full block"
                  >
                    {p.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprises */}
          <div>
            <h4 className="text-white font-black mb-5 uppercase tracking-widest text-xs">Entreprises</h4>
            <ul className="space-y-3 text-xs font-semibold">
              {entrepriseList.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onSelectProduct?.(p)}
                    className="text-blue-100/80 hover:text-white transition-colors cursor-pointer text-left truncate max-w-full block"
                  >
                    {p.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Ligne inférieure de Copyright, Mentions Légales et Réseaux Sociaux */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/10 text-xs">
          <p className="text-blue-200/70 font-medium text-center md:text-left">
            © 2026 Assurances Hay Saada - Intermédiaire Agréé AXA Assurance Maroc. Conforme ACAPS.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200/70 font-medium">
            <span className="hover:text-white transition-colors cursor-pointer">Mentions Légales</span>
            <span className="hover:text-white transition-colors cursor-pointer">Protection Données CNDP</span>
            <span className="hover:text-white transition-colors cursor-pointer">Code des Assurances Maroc</span>
          </div>
          <div className="flex items-center gap-5 text-blue-200/80">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white hover:scale-110 transition-all p-1"
            >
              <Facebook size={17} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white hover:scale-110 transition-all p-1"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white hover:scale-110 transition-all p-1"
            >
              <Instagram size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TrustFeaturesBar = () => {
  const features = [
    {
      icon: <Clock className="w-7 h-7 text-[#ff0000] stroke-[2.2] shrink-0" />,
      title: "ASSISTANCE 24H/24",
      description: "Dépannage 0 km et remorquage express en cas de panne ou d'accident."
    },
    {
      icon: <CheckCircle2 className="w-7 h-7 text-[#ff0000] stroke-[2.2] shrink-0" />,
      title: "RÈGLEMENT RAPIDE",
      description: "Prise en charge simplifiée et remboursement accéléré de vos sinistres."
    },
    {
      icon: <MapPin className="w-7 h-7 text-[#ff0000] stroke-[2.2] shrink-0" />,
      title: "CONSEIL DE PROXIMITÉ",
      description: "Une agence dédiée à Casablanca animée par des conseillers qualifiés."
    },
    {
      icon: <Shield className="w-7 h-7 text-[#ff0000] stroke-[2.2] shrink-0" />,
      title: "GARANTIE AXA MAROC",
      description: "La puissance d'un groupe leader au service de vos intérêts quotidiens."
    }
  ];

  return (
    <section className="py-6 sm:py-7 bg-[#000a28] border-y border-white/[0.08] relative overflow-hidden">
      {/* Texture de fond subtile */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-3.5">
              {item.icon}
              <div>
                <h4 className="text-xs sm:text-[13px] font-black text-white uppercase tracking-wider leading-tight mb-0.5">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-blue-200/75 leading-snug font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  type ViewMode = 'home' | 'particuliers' | 'entreprises' | 'product-detail';

  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalProduct, setQuoteModalProduct] = useState('Assurance Auto & Moto');

  // Handle URL Hash deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#produit-')) {
        const slug = hash.replace('#produit-', '');
        const found = PRODUCTS_DATA.find(p => p.slug === slug || p.id === slug);
        if (found) {
          setSelectedProduct(found);
          setCurrentView('product-detail');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (hash === '#particuliers') {
        setCurrentView('particuliers');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (hash === '#entreprises') {
        setCurrentView('entreprises');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (hash === '#services' || hash === '#professionnels' || hash === '#contact') {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.getElementById(hash.replace('#', ''));
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
      if (!hash || hash === '#' || hash === '#accueil') {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: ViewMode, targetHash?: string) => {
    setCurrentView(view);
    if (view === 'particuliers') {
      window.location.hash = '#particuliers';
    } else if (view === 'entreprises') {
      window.location.hash = '#entreprises';
    } else if (targetHash) {
      window.location.hash = targetHash;
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: ProductData) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
    window.location.hash = `#produit-${product.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (productTitle?: string) => {
    if (productTitle) {
      setQuoteModalProduct(productTitle);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden w-full">
      <Navbar 
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {currentView === 'product-detail' && selectedProduct ? (
        <ProductDetailPage
          product={selectedProduct}
          onBack={() => handleNavigate(selectedProduct.category === 'particulier' ? 'particuliers' : 'entreprises')}
          onNavigateCategory={(cat) => handleNavigate(cat === 'particulier' ? 'particuliers' : 'entreprises')}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      ) : currentView === 'particuliers' ? (
        <CatalogPage
          category="particulier"
          onBack={() => handleNavigate('home')}
          onSelectProduct={handleSelectProduct}
          onSwitchCategory={(cat) => handleNavigate(cat === 'particulier' ? 'particuliers' : 'entreprises')}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      ) : currentView === 'entreprises' ? (
        <CatalogPage
          category="entreprise"
          onBack={() => handleNavigate('home')}
          onSelectProduct={handleSelectProduct}
          onSwitchCategory={(cat) => handleNavigate(cat === 'particulier' ? 'particuliers' : 'entreprises')}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      ) : (
        <main>
          <Hero />
          
          {/* Trust Features Card */}
          <TrustFeaturesBar />

          <About />
          
          <Services 
            onSelectProduct={handleSelectProduct}
            onExploreCategory={(cat) => handleNavigate(cat === 'particulier' ? 'particuliers' : 'entreprises')}
          />
          
          <ProfessionalSection 
            onSelectProduct={handleSelectProduct}
            onExploreCategory={(cat) => handleNavigate(cat === 'particulier' ? 'particuliers' : 'entreprises')}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
          
          <Testimonials onOpenQuoteModal={handleOpenQuoteModal} />
          <Contact />
          <MapSection />
        </main>
      )}

      <Footer 
        onNavigate={handleNavigate}
        onSelectProduct={handleSelectProduct}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProductTitle={quoteModalProduct}
      />
    </div>
  );
}
