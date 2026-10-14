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
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, PRO_SERVICES, TESTIMONIALS } from './constants';

const SaadaMonogram = ({ 
  isScrolled = false, 
  variant = 'auto',
  className = "h-10 sm:h-12 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105" 
}: { 
  isScrolled?: boolean;
  variant?: 'auto' | 'light' | 'dark';
  className?: string;
}) => {
  const isLight = variant === 'light' || (variant === 'auto' && !isScrolled);

  return (
    <svg
      className={className}
      viewBox="0 0 170 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Monogramme AH - Assurances Hay Saada"
    >
      <defs>
        <linearGradient id="ahNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0038a8" />
          <stop offset="100%" stopColor="#001844" />
        </linearGradient>
        <linearGradient id="ahWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0f5ff" />
        </linearGradient>
        <filter id="ahDropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Monogramme officiel Didone AH 100% conforme à la photo : Typographie Didone haute couture avec empattements fins, fûts contrastés et ligature fluide en S */}
      <g 
        fill={isLight ? "url(#ahWhiteGrad)" : "url(#ahNavyGrad)"}
        filter={isLight ? "url(#ahDropShadow)" : undefined}
      >
        {/* === LETTRE A === */}
        {/* Terminal en goutte Didone à la base de la jambe gauche galbée */}
        <circle cx="21" cy="72" r="3.8" />
        
        {/* Jambe gauche déliée et courbée avec élégance vers le sommet */}
        <path d="M 21.2 68.2 C 22.8 61.5 29.5 40 42.5 16 L 46 16 C 32.5 40 25.2 61.5 24.2 68.5 Z" />
        
        {/* Empattement sommital plat du A */}
        <rect x="36" y="14" width="16" height="2.2" rx="0.3" />
        
        {/* Fût diagonal massif et contrasté du A */}
        <polygon points="43.5,16 52,16 73.5,73 64.5,73" />
        
        {/* Empattement bilatéral à la base du A */}
        <rect x="57" y="73" width="22" height="2.5" rx="0.3" />

        {/* === LETTRE H === */}
        {/* Fût vertical gauche et ses empattements plats */}
        <rect x="79" y="14" width="20" height="2.2" rx="0.3" />
        <rect x="86" y="16" width="6" height="57" />
        <rect x="79" y="73" width="20" height="2.5" rx="0.3" />

        {/* Fût vertical droit Didone et ses empattements plats */}
        <rect x="115" y="14" width="24" height="2.2" rx="0.3" />
        <rect x="122" y="16" width="10" height="57" />
        <rect x="115" y="73" width="24" height="2.5" rx="0.3" />

        {/* === TRAIT DE LIGATURE SIGNATURE EN S === */}
        {/* Naissance sur la jambe gauche du A, traversée galbée en S montant, passage à travers le A et liaison continue à travers les deux fûts du H */}
        <path d="
          M 24 51
          C 30 47, 38 39, 51 39
          C 63 39, 72 45, 86 44
          C 97 43.2, 112 39, 126 39.5
          C 134 39.8, 142 41.5, 146 39
          C 147.5 38, 147.2 36.2, 145.5 36.5
          C 142 37.8, 134 36.8, 126 36.5
          C 112 36, 97 40.5, 86 41
          C 72 41.8, 63 36, 51 36
          C 38 36, 30 44, 24 48
          Z
        " />
        
        {/* Finition en goutte calligraphique sur l'extrémité droite */}
        <circle cx="146.5" cy="38.5" r="1.6" />
      </g>
    </svg>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Hay Mohammadi', href: '#hay-mohammadi' },
    { name: 'Particuliers', href: '#services' },
    { name: 'Entreprises', href: '#professionnels' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-gray-100' 
          : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group shrink-0" aria-label="Accueil Assurances Hay Saada">
            {/* Monogramme AH officiel sans cadran */}
            <SaadaMonogram isScrolled={isScrolled} />
            <div className="flex flex-col justify-center">
              <span className={`text-base sm:text-lg lg:text-xl font-black tracking-tight whitespace-nowrap leading-none ${isScrolled ? 'text-[#001f5c]' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'}`}>
                ASSURANCES <span className="text-[#ff0000]">HAY SAADA</span>
              </span>
              <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider block mt-1.5 whitespace-nowrap ${isScrolled ? 'text-gray-600' : 'text-blue-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]'}`}>
                Agent Général AXA Assurance Maroc
              </span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-colors hover:text-[#ff0000] ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-[#ff0000]' 
                      : 'text-white hover:text-[#ff2a2a] drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 pl-3 border-l border-gray-200/40">
              <a
                href="tel:+212522000000"
                className={`flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-lg transition-all ${
                  isScrolled
                    ? 'text-[#001f5c] hover:bg-blue-50'
                    : 'text-white hover:bg-white/10 drop-shadow-sm'
                }`}
                title="Appel direct agence"
              >
                <Phone size={14} className="text-[#ff0000]" />
                <span className="hidden xl:inline">05 22 00 00 00</span>
              </a>

              <a
                href="#contact"
                className="bg-gradient-to-r from-[#002b80] to-[#001f5c] hover:from-[#0038a8] hover:to-[#002b80] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide uppercase transition-all shadow-md hover:shadow-lg border border-white/10 flex items-center gap-2"
              >
                <span>Devis Gratuit</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff0000] inline-block animate-pulse" />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:+212522000000"
              className="p-2 rounded-lg bg-red-600 text-white shadow-sm"
              aria-label="Appeler l'agence"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
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
            className="md:hidden bg-white absolute top-full left-0 w-full shadow-2xl border-t border-gray-100 divide-y divide-gray-100"
          >
            <div className="p-4 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <SaadaMonogram isScrolled={true} className="h-9 w-auto shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-black text-[#001f5c] whitespace-nowrap">
                    ASSURANCES <span className="text-[#ff0000]">HAY SAADA</span>
                  </div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider whitespace-nowrap mt-0.5">
                    Agent Général AXA Assurance Maroc
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Agence Ouverte
              </span>
            </div>

            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 rounded-lg text-sm font-bold text-gray-800 hover:bg-blue-50 hover:text-[#002b80] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
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
              <a
                href="#contact"
                className="block w-full text-center bg-gradient-to-r from-[#ff0000] to-[#d60000] text-white py-3 rounded-xl text-sm font-black uppercase tracking-wider shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Obtenir un Devis Gratuit
              </a>
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
      className="relative h-screen min-h-[680px] max-h-[950px] flex items-center overflow-hidden bg-gray-950"
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
            className="w-full h-full object-cover object-center filter brightness-[0.88]"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layer AXA Branded Overlays for high contrast & elegance */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f5c]/95 via-[#002b80]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-black/40" />
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

        {/* Floating 3D Frosted Cube */}
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [-15, -8, -15]
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-32 right-1/4 w-36 h-36 bg-white/5 border border-white/20 rounded-2xl backdrop-blur-lg shadow-2xl hidden md:block"
        />

        {/* Moroccan Geometric Grid Accent (Subtle) */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Main Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-2xl"
              >
                {/* Category Badge with AXA Red Switch indicator */}
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                  <span className="w-2.5 h-2.5 bg-[#ff0000] rounded-full animate-ping" />
                  <span className="text-white text-xs font-black tracking-widest uppercase">
                    {activeSlide.badge}
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.95] mb-6 tracking-tighter">
                  {activeSlide.titleLine1} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#ff4d4d]">
                    {activeSlide.titleLine2}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-blue-50/90 mb-10 leading-relaxed font-medium">
                  {activeSlide.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a
                    href={activeSlide.primaryCtaHref}
                    className="bg-[#ff0000] hover:bg-red-700 text-white px-8 py-4 font-black text-base transition-all text-center shadow-xl shadow-red-600/40 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                  >
                    <span>{activeSlide.primaryCtaText}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={activeSlide.secondaryCtaHref}
                    className="bg-white/10 hover:bg-white text-white hover:text-[#003399] border border-white/30 px-8 py-4 font-black text-base transition-all text-center backdrop-blur-md shadow-lg transform hover:-translate-y-1"
                  >
                    {activeSlide.secondaryCtaText}
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
    default: return <ShieldCheck className={className} />;
  }
};

const Services = () => {
  return (
    <section id="services" className="py-24 axa-blue-bg-pattern text-white relative overflow-hidden">
      {/* Dynamic 3D AXA Brand Motifs in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Giant Watermark AXA Slanted Slash */}
        <div 
          className="absolute -right-20 -top-32 w-96 h-[600px] bg-white/[0.03] border-l-8 border-[#ff0000]/30 transform -skew-x-[14deg] pointer-events-none blur-[0.5px]" 
        />
        <div 
          className="absolute -left-24 bottom-10 w-72 h-[450px] bg-blue-400/[0.04] border-r-8 border-white/10 transform -skew-x-[14deg] pointer-events-none" 
        />

        {/* 3D Floating Geometric Glass Panels */}
        <div className="absolute top-16 right-12 w-64 h-64 border border-white/15 rounded-3xl rotate-12 bg-white/[0.03] backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)]" />
        <div className="absolute bottom-20 left-10 w-52 h-52 border border-[#ff0000]/40 rounded-2xl -rotate-12 bg-[#ff0000]/10 backdrop-blur-md shadow-[0_20px_50px_rgba(255,0,0,0.15)]" />
        
        {/* Luminous Ambient Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-10 right-1/4 w-[500px] h-[250px] bg-red-600/15 rounded-full blur-[100px]" />

        {/* Diagonal AXA Ribbon Accent */}
        <div className="absolute top-0 right-1/3 w-2.5 h-48 bg-gradient-to-b from-[#ff0000] to-transparent transform -skew-x-[14deg] opacity-80" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-4 shadow-sm">
            <div className="w-2.5 h-2.5 bg-[#ff0000] rotate-45" />
            <span className="text-xs font-black tracking-[0.25em] text-blue-200 uppercase">
              Gamme AXA Particuliers
            </span>
          </div>

          <div className="flex justify-center items-center gap-4 mb-3">
            <div className="w-12 h-1 bg-[#ff0000]" />
            <h2 className="text-sm font-black text-blue-300 uppercase tracking-[0.3em]">Nos Solutions</h2>
            <div className="w-12 h-1 bg-[#ff0000]" />
          </div>

          <p className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tighter">PARTICULIERS</p>
          <p className="text-lg text-blue-100/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Des garanties modulables et innovantes pour protéger votre famille, votre véhicule et votre patrimoine au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-[0_25px_50px_rgba(0,15,50,0.35)] border-t-4 border-[#ff0000] axa-card-3d group text-gray-900"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#001f5c] transition-all duration-500 shadow-sm">
                <ServiceIcon name={service.icon} className="text-[#001f5c] group-hover:text-white transition-colors w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-[#ff0000] font-black uppercase text-sm tracking-widest hover:gap-3 transition-all">
                VOIR L'OFFRE <ArrowRight size={18} className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProfessionalSection = () => {
  return (
    <section id="professionnels" className="py-24 bg-[#fcfdfe] relative overflow-hidden border-b border-gray-100">
      {/* Moroccan Geometric Diamond Grid Pattern with subtle red intersection dots matching uploaded visual */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2394a3b8' stroke-width='0.75'%3E%3Cpath d='M36 0l36 36-36 36L0 36z'/%3E%3Cpath d='M0 0l72 72M72 0L0 72'/%3E%3Ccircle cx='36' cy='36' r='2.2' fill='%23ef4444' stroke='none'/%3E%3Ccircle cx='0' cy='0' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3Ccircle cx='72' cy='0' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3Ccircle cx='0' cy='72' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3Ccircle cx='72' cy='72' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '72px 72px'
        }}
      />

      {/* Subtle 3D Depth Accents */}
      <div className="absolute top-0 right-0 w-full h-full opacity-35 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 border border-blue-200/60 rounded-3xl rotate-45 bg-blue-50/20" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#ff0000]/5 rounded-2xl rotate-12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          <div className="lg:w-7/12">
            <div className="mb-14">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-[#ff0000]" />
                <h2 className="text-sm font-black text-[#002b80] uppercase tracking-[0.3em]">Espace Entreprises</h2>
              </div>
              <h3 className="text-4xl sm:text-5xl font-black text-[#001f5c] mb-6 tracking-tighter leading-tight">
                L'EXPERTISE PRO <br /><span className="text-[#001f5c]">SANS COMPROMIS.</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Sécurisez votre avenir professionnel avec les solutions AXA. Nous protégeons vos actifs, vos salariés et votre responsabilité.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {PRO_SERVICES.map((pro, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-[0_15px_35px_rgba(0,31,92,0.06)] border border-gray-200/90 hover:border-[#ff0000] transition-all group axa-card-3d"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#001f5c] group-hover:bg-[#ff0000] rounded-xl flex items-center justify-center text-white shadow-md transition-all duration-300 transform -rotate-3 group-hover:rotate-0">
                      {pro.icon === 'ShieldCheck' && <ShieldCheck size={28} />}
                      {pro.icon === 'Car' && <Car size={28} />}
                      {pro.icon === 'Building2' && <Building2 size={28} />}
                      {pro.icon === 'HeartPulse' && <HeartPulse size={28} />}
                    </div>
                    <h4 className="font-black text-[#001f5c] text-lg leading-tight uppercase tracking-tight">{pro.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed font-medium">
                    {pro.description}
                  </p>
                  <ul className="space-y-3">
                    {pro.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-xs font-bold text-gray-800 uppercase tracking-wider">
                        <div className="w-2 h-2 bg-[#ff0000] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-5/12 w-full">
            <div className="bg-white p-8 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,31,92,0.1)] border border-gray-200/90 rounded-2xl relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#ff0000] rounded-lg shadow-md flex items-center justify-center text-white font-black text-xs z-20">
                PRO
              </div>
              <h4 className="text-3xl font-black text-[#001f5c] mb-2 tracking-tighter">CONTACT PRO</h4>
              <p className="text-[#ff0000] text-xs mb-8 font-black uppercase tracking-widest">Audit gratuit de vos risques d'entreprise</p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase mb-2 tracking-widest">Entreprise</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border-b-2 border-gray-300 px-3 py-3 text-gray-900 focus:outline-none focus:border-[#ff0000] focus:bg-white transition-all font-bold rounded-t-sm"
                    placeholder="Raison sociale"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase mb-2 tracking-widest">Secteur</label>
                  <select className="w-full bg-gray-50 border-b-2 border-gray-300 px-3 py-3 text-gray-900 focus:outline-none focus:border-[#ff0000] focus:bg-white transition-all font-bold appearance-none rounded-t-sm">
                    <option>Services / Commerce</option>
                    <option>Industrie</option>
                    <option>BTP / Construction</option>
                    <option>Transport / Logistique</option>
                    <option>Professions Libérales & Médical</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase mb-2 tracking-widest">Téléphone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-gray-50 border-b-2 border-gray-300 px-3 py-3 text-gray-900 focus:outline-none focus:border-[#ff0000] focus:bg-white transition-all font-bold rounded-t-sm"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
                <button className="w-full bg-[#001f5c] hover:bg-[#ff0000] text-white font-black py-4.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group uppercase tracking-widest text-sm shadow-lg shadow-[#001f5c]/15 hover:shadow-[#ff0000]/25">
                  ÊTRE RAPPELLÉ
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Témoignages</h2>
          <p className="text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              <div className="absolute top-6 right-8 text-blue-100">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} 
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-8 italic relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">
                    {testimonial.role} {testimonial.company && `• ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-blue-600/20">
          <div className="text-white">
            <h4 className="text-2xl font-bold mb-2">Rejoignez nos clients satisfaits</h4>
            <p className="text-blue-100">Plus de 2000 clients nous font déjà confiance à Casablanca.</p>
          </div>
          <a 
            href="#contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all whitespace-nowrap"
          >
            Obtenir mon devis
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const [showCallWidget, setShowCallWidget] = useState(true);

  return (
    <section id="hay-mohammadi" className="py-24 relative bg-[#fcfdfe] overflow-hidden border-b border-gray-100">
      <div id="about" className="absolute -top-24" />

      {/* Moroccan Geometric Zellij Pattern Background with subtle red center dots */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2394a3b8' stroke-width='0.75'%3E%3Cpath d='M36 0l36 36-36 36L0 36z'/%3E%3Cpath d='M0 0l72 72M72 0L0 72'/%3E%3Ccircle cx='36' cy='36' r='2.2' fill='%23ef4444' stroke='none'/%3E%3Ccircle cx='0' cy='0' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3Ccircle cx='72' cy='0' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3Ccircle cx='0' cy='72' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3Ccircle cx='72' cy='72' r='1.2' fill='%23cbd5e1' stroke='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '72px 72px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
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
                <div className="absolute -bottom-8 -left-3 sm:-left-8 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,31,92,0.18)] border border-gray-100 p-4 max-w-[275px] z-20">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001f5c] leading-[1.05] tracking-tight mb-6 uppercase">
              VOTRE PARTENAIRE ASSURANCE DE CONFIANCE À HAY MOHAMMADI
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Implantée au cœur de Hay Mohammadi, l'agence <strong className="font-extrabold text-[#001f5c]">Assurances Hay Saada</strong> vous accompagne avec rigueur et écoute en tant qu'agent général agréé <strong className="font-extrabold text-[#001f5c]">AXA Assurance Maroc</strong>.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              Nous allions la proximité humaine d'un cabinet de confiance et l'envergure internationale d'AXA pour protéger vos biens, votre santé, votre famille et votre patrimoine professionnel avec une réactivité irréprochable.
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
  return (
    <section id="contact" className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">Contactez-nous</h2>
            <h3 className="text-4xl font-bold mb-8">Prêt à être mieux protégé ?</h3>
            <p className="text-blue-100 mb-12 text-lg leading-relaxed">
              Nos conseillers sont à votre disposition pour réaliser une étude gratuite de vos besoins et vous proposer la meilleure solution d'assurance.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-blue-400" />
                </div>
                <div>
                  <p className="text-blue-300 text-sm font-bold uppercase mb-1">Téléphone</p>
                  <p className="text-xl font-semibold">+212 5 22 XX XX XX</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <p className="text-blue-300 text-sm font-bold uppercase mb-1">Email</p>
                  <p className="text-xl font-semibold">contact@axacasablanca.ma</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-blue-400" />
                </div>
                <div>
                  <p className="text-blue-300 text-sm font-bold uppercase mb-1">Adresse</p>
                  <p className="text-xl font-semibold">271, Certificat Bloc 17, Hay Mohammadi, 20250 - Hay Mohammadi (AR)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Nom Complet</label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Type d'Assurance</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                  <option>Auto</option>
                  <option>Santé</option>
                  <option>Habitation</option>
                  <option>Professionnelle</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Message (Optionnel)</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
              >
                Envoyer ma demande
              </button>
            </form>
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Nous Trouver</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Venez nous rencontrer</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre agence est idéalement située au cœur de Casablanca pour vous accueillir et vous conseiller.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">Adresse</p>
                    <p className="text-gray-600 text-sm">{address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Calendar className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">Horaires d'ouverture</p>
                    <div className="space-y-1">
                      {operatingHours.map((item, i) => (
                        <div key={i} className="flex justify-between gap-4 text-sm">
                          <span className="text-gray-500">{item.day}</span>
                          <span className="text-gray-900 font-medium">{item.hours}</span>
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
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 group"
            >
              <Navigation size={20} />
              Obtenir l'itinéraire
            </a>
          </div>

          <div className="lg:w-2/3 h-[500px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
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

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20 border-t border-gray-800 relative overflow-hidden">
      <div className="axa-pattern-3d absolute inset-0 opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3.5 mb-6">
              <SaadaMonogram variant="light" className="h-11 w-auto shrink-0" />
              <div>
                <span className="text-white font-black text-lg sm:text-xl tracking-tight whitespace-nowrap block leading-none">
                  ASSURANCES <span className="text-[#ff0000]">HAY SAADA</span>
                </span>
                <span className="text-gray-300 text-xs font-bold uppercase tracking-wider block mt-2 whitespace-nowrap">
                  Agent Général AXA Assurance Maroc
                </span>
              </div>
            </div>
            <p className="max-w-sm text-gray-400 font-medium leading-relaxed text-sm">
              Votre partenaire d'assurance de référence au Maroc. Protection des particuliers, familles, professionnels et entreprises avec la solidité du groupe AXA.
            </p>
          </div>
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-[#ff0000] transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-[#ff0000] transition-colors">Particuliers</a></li>
              <li><a href="#professionnels" className="hover:text-[#ff0000] transition-colors">Entreprises</a></li>
              <li><a href="#contact" className="hover:text-[#ff0000] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Légal</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-[#ff0000] transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-[#ff0000] transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-[#ff0000] transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-gray-800">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-600">
            © {new Date().getFullYear()} Assurances Hay Saada - Agent Général Agréé AXA Assurance Maroc. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#ff0000] transition-all cursor-pointer">
              <ShieldCheck size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TrustFeaturesBar = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 stroke-[2]" />,
      bgIcon: "bg-blue-50 text-[#002b80]",
      title: "Assistance 24h/24",
      description: "Dépannage 0 km et remorquage express en cas de panne ou d'accident."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 stroke-[2]" />,
      bgIcon: "bg-red-50 text-[#e63946]",
      title: "Règlement Rapide",
      description: "Prise en charge simplifiée et remboursement accéléré de vos sinistres."
    },
    {
      icon: <Users className="w-6 h-6 stroke-[2]" />,
      bgIcon: "bg-emerald-50 text-emerald-600",
      title: "Conseil de Proximité",
      description: "Une agence dédiée à Casablanca animée par des conseillers qualifiés."
    },
    {
      icon: <Star className="w-6 h-6 stroke-[2]" />,
      bgIcon: "bg-amber-50 text-amber-500",
      title: "Garantie AXA Maroc",
      description: "La puissance d'un groupe leader au service de vos intérêts quotidiens."
    }
  ];

  return (
    <section className="py-8 bg-slate-50/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${item.bgIcon} flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#002b80] mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trust Features Card matching uploaded visual */}
        <TrustFeaturesBar />

        <About />
        <Services />
        <ProfessionalSection />
        <Testimonials />
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
