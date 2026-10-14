import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Car, 
  HeartPulse, 
  Home, 
  Briefcase, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Building2, 
  Truck, 
  HardHat, 
  Laptop, 
  Plane,
  CheckCircle2, 
  Phone, 
  Mail, 
  Calendar, 
  FileText, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Calculator, 
  MapPin, 
  Shield, 
  Sparkles,
  ArrowRight,
  Send,
  MessageCircle
} from 'lucide-react';
import { ProductData } from '../data/products';

interface ProductDetailPageProps {
  product: ProductData;
  onBack: () => void;
  onNavigateCategory: (category: 'particulier' | 'entreprise') => void;
  onOpenQuoteModal: (productTitle: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onNavigateCategory,
  onOpenQuoteModal
}) => {
  const [selectedFormuleId, setSelectedFormuleId] = useState<string>(
    product.formules.find(f => f.isPopular)?.id || product.formules[0]?.id || ''
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Configurateur state
  const [autoCv, setAutoCv] = useState('6');
  const [autoUsage, setAutoUsage] = useState('prive');
  const [autoFormule, setAutoFormule] = useState('tiers-etendu');

  const [habType, setHabType] = useState('appartement');
  const [habPieces, setHabPieces] = useState('3');
  const [habStatut, setHabStatut] = useState('locataire');

  const [santeFormule, setSanteFormule] = useState('sante-confort');
  const [santeFamille, setSanteFamille] = useState('famille');

  const [retraiteMensuel, setRetraiteMensuel] = useState(1000);
  const [retraiteDuree, setRetraiteDuree] = useState(20);

  const [rcProSector, setRcProSector] = useState('services');
  const [rcProTurnover, setRcProTurnover] = useState('moyen');

  const [flotteVehicules, setFlotteVehicules] = useState(5);

  // Quote callback form inside page
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadNotes, setLeadNotes] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Build WhatsApp URL with contextual message
  const getWhatsAppUrl = (extraText = '') => {
    let msg = `Bonjour Assurances Hay Saada, je souhaite un devis personnalisé sans engagement pour l'offre : *${product.title}*.`;
    if (extraText) {
      msg += ` ${extraText}`;
    }
    return `https://wa.me/212600000000?text=${encodeURIComponent(msg)}`;
  };

  const getConfigurationSummary = () => {
    if (product.id === 'auto') {
      const usageLabel = autoUsage === 'pro' ? 'Usage Professionnel' : 'Usage Privé';
      return `(Véhicule: ${autoCv} CV, ${usageLabel}, Formule: ${autoFormule})`;
    }
    if (product.id === 'habitation') {
      return `(Bien: ${habType}, ${habPieces} pièces, Statut: ${habStatut})`;
    }
    if (product.id === 'sante') {
      return `(Formule: ${santeFormule}, Composition: ${santeFamille})`;
    }
    if (product.id === 'epargne-retraite') {
      return `(Projet: épargne retraite sur ${retraiteDuree} ans)`;
    }
    if (product.id === 'rc-pro') {
      return `(Secteur: ${rcProSector}, Profil: ${rcProTurnover})`;
    }
    if (product.id === 'flotte-auto') {
      return `(Flotte: ${flotteVehicules} véhicules professionnels)`;
    }
    return '';
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadPhone) return;
    setLeadSubmitted(true);
  };

  const getProductIcon = (name: string) => {
    switch (name) {
      case 'Car': return <Car className="w-8 h-8 text-white" />;
      case 'HeartPulse': return <HeartPulse className="w-8 h-8 text-white" />;
      case 'Home': return <Home className="w-8 h-8 text-white" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-white" />;
      case 'Users': return <Users className="w-8 h-8 text-white" />;
      case 'Plane': return <Plane className="w-8 h-8 text-white" />;
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-white" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-white" />;
      case 'Truck': return <Truck className="w-8 h-8 text-white" />;
      case 'HardHat': return <HardHat className="w-8 h-8 text-white" />;
      case 'Laptop': return <Laptop className="w-8 h-8 text-white" />;
      default: return <Briefcase className="w-8 h-8 text-white" />;
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 pb-20">
      {/* Top Breadcrumb & Action bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500 overflow-x-auto whitespace-nowrap">
            <button 
              onClick={onBack}
              className="hover:text-[#001f5c] transition-colors flex items-center gap-1.5 font-bold text-gray-700"
            >
              <ArrowLeft size={16} />
              <span>Accueil</span>
            </button>
            <span>/</span>
            <button 
              onClick={() => onNavigateCategory(product.category)}
              className="hover:text-[#001f5c] transition-colors font-semibold"
            >
              {product.category === 'particulier' ? 'Particuliers' : 'Entreprises & Pro'}
            </button>
            <span>/</span>
            <span className="text-[#001f5c] font-extrabold truncate max-w-[200px] sm:max-w-none">
              {product.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors border border-emerald-200"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              <span className="hidden sm:inline">WhatsApp Devis</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal(product.title)}
              className="bg-[#ff0000] hover:bg-[#d60000] text-white px-4 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-colors shadow-sm"
            >
              Formulaire de Contact
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#001438] via-[#001f5c] to-[#002b80] text-white py-14 sm:py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="absolute top-0 right-1/4 w-3 h-56 bg-gradient-to-b from-[#ff0000] to-transparent transform -skew-x-[16deg] opacity-75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-blue-200 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md border border-white/15">
                  {product.subcategory}
                </span>
                <span className="text-xs font-bold text-red-300 uppercase tracking-wider bg-red-500/20 px-3 py-1 rounded-md border border-red-500/30">
                  {product.badge}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-lg">
                  {getProductIcon(product.iconName)}
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                    {product.title}
                  </h1>
                  <p className="text-blue-100/90 text-sm sm:text-base font-semibold mt-1">
                    {product.tagline}
                  </p>
                </div>
              </div>

              <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-3xl mt-6 font-normal">
                {product.fullDescription}
              </p>

              {/* Main Action CTAs : WhatsApp & Contact Form */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all shadow-lg flex items-center gap-2.5"
                >
                  <MessageCircle size={20} />
                  <span>Demander un devis sur WhatsApp</span>
                </a>
                
                <a
                  href="#contact-form"
                  className="bg-[#ff0000] hover:bg-[#d60000] text-white px-6 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <Mail size={18} />
                  <span>Formulaire de contact</span>
                </a>

                <a
                  href="tel:+212522000000"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-4 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
                >
                  <Phone size={16} />
                  <span>05 22 00 00 00</span>
                </a>
              </div>
            </div>

            {/* Quick Action & Agency Card (NO PRICE) */}
            <div className="lg:col-span-4">
              <div className="bg-white text-gray-900 rounded-3xl p-7 shadow-2xl border-t-4 border-[#ff0000]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#001f5c] text-xs font-black uppercase tracking-wider mb-3">
                  <Shield size={14} className="text-[#ff0000]" />
                  <span>Étude Gratuite & Sur-Mesure</span>
                </div>

                <h3 className="text-2xl font-black text-[#001f5c] mb-2 leading-tight">
                  Devis Sur-Mesure & Conseil
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium mb-5">
                  Aucun tarif standard préétabli : nos conseillers évaluent précisément votre situation pour vous proposer la formule la plus avantageuse sans engagement.
                </p>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 mb-6 flex items-start gap-3">
                  <Sparkles size={18} className="text-[#001f5c] shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-[#001f5c] leading-snug">
                    {product.heroHighlight}
                  </p>
                </div>

                {/* Primary WhatsApp Action Button */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 mb-3"
                >
                  <MessageCircle size={17} />
                  <span>Contacter sur WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenQuoteModal(product.title)}
                  className="w-full bg-[#001f5c] hover:bg-[#002b80] text-white py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-widest transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail size={16} />
                  <span>Remplir le formulaire</span>
                </button>

                <div className="space-y-2 pt-4 mt-4 border-t border-gray-100 text-[11px] text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>Réponse immédiate sous 2 heures ouvrées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>Agence physique à Hay Mohammadi, Casablanca</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Section 1: Formules & Niveaux de Garantie (NO PRICE) */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#001f5c] tracking-tight">
              Nos formules disponibles
            </h2>
            <p className="text-gray-600 font-medium text-sm mt-1">
              Des formules modulables adaptées à vos besoins, sans engagement.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-${Math.min(product.formules.length, 3)} gap-6`}>
            {product.formules.map((formule) => {
              const isSelected = selectedFormuleId === formule.id;
              const formuleWhatsAppUrl = getWhatsAppUrl(`(Formule souhaitée : ${formule.name})`);

              return (
                <div
                  key={formule.id}
                  onClick={() => setSelectedFormuleId(formule.id)}
                  className={`bg-white rounded-2xl p-7 border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                    isSelected 
                      ? 'border-[#001f5c] shadow-xl ring-2 ring-[#001f5c]/20' 
                      : 'border-gray-200 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  {formule.isPopular && (
                    <div className="absolute -top-3 right-6 bg-[#ff0000] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                      Le + Choisi
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-1">{formule.name}</h3>
                    <p className="text-xs text-gray-500 font-medium mb-4">{formule.tagline}</p>
                    
                    <div className="text-xs font-black text-[#001f5c] uppercase tracking-wider mb-5 pb-3 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-gray-400 font-bold">Proposition :</span>
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1">
                        <MessageCircle size={12} className="text-[#25D366]" />
                        Devis gratuit sur mesure
                      </span>
                    </div>

                    <div className="space-y-3">
                      {formule.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-semibold">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 space-y-2">
                    <a
                      href={formuleWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xs flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle size={15} />
                      <span>Demander sur WhatsApp</span>
                    </a>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuoteModal(`${product.title} - ${formule.name}`);
                      }}
                      className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all bg-gray-100 text-gray-800 hover:bg-gray-200"
                    >
                      Formulaire de contact
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Configurateur & Demande de Devis (NO PRICE) */}
        <div id="contact-form" className="mb-16 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-gray-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 text-[#ff0000] text-xs font-black uppercase tracking-wider mb-2">
                <Calculator size={14} />
                <span>Configurateur de Garanties</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#001f5c]">
                Préparez votre demande de devis
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Indiquez vos préférences ci-dessous et transmettez-les en 1 clic par WhatsApp ou via le formulaire.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center sm:text-right shrink-0">
              <span className="text-xs font-bold text-gray-500 block uppercase">Option directe</span>
              <a
                href={getWhatsAppUrl(getConfigurationSummary())}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <MessageCircle size={16} />
                <span>Envoyer ma sélection sur WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Configurator Inputs by product type */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {product.id === 'auto' && (
              <>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Puissance Fiscale (CV)
                  </label>
                  <select
                    value={autoCv}
                    onChange={(e) => setAutoCv(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#001f5c]"
                  >
                    <option value="6">Jusqu'à 6 CV (Essence / Diesel)</option>
                    <option value="7">7 à 8 CV (Berline moyenne)</option>
                    <option value="9">9 à 10 CV (SUV / Grande berline)</option>
                    <option value="11">11 CV et plus (Sportive / Luxe)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Usage du véhicule
                  </label>
                  <select
                    value={autoUsage}
                    onChange={(e) => setAutoUsage(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#001f5c]"
                  >
                    <option value="prive">Privé & Trajet domicile-travail</option>
                    <option value="pro">Usage Professionnel / Commercial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Niveau de couverture
                  </label>
                  <select
                    value={autoFormule}
                    onChange={(e) => setAutoFormule(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#001f5c]"
                  >
                    <option value="tiers-simple">Tiers Simple (RC + Défense)</option>
                    <option value="tiers-etendu">Tiers Étendu (Collision + Vol + Bris)</option>
                    <option value="tous-risques">Tous Risques Intégrale</option>
                  </select>
                </div>
              </>
            )}

            {product.id === 'habitation' && (
              <>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Type de bien
                  </label>
                  <select
                    value={habType}
                    onChange={(e) => setHabType(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#001f5c]"
                  >
                    <option value="appartement">Appartement en résidence</option>
                    <option value="villa">Villa individuelle</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Nombre de pièces principales
                  </label>
                  <select
                    value={habPieces}
                    onChange={(e) => setHabPieces(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#001f5c]"
                  >
                    <option value="2">Studio / 2 pièces</option>
                    <option value="3">3 pièces (Salon + 2 chambres)</option>
                    <option value="4">4 pièces (Salon + 3 chambres)</option>
                    <option value="5">5 pièces ou plus</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Qualité de l'occupant
                  </label>
                  <select
                    value={habStatut}
                    onChange={(e) => setHabStatut(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#001f5c]"
                  >
                    <option value="locataire">Locataire (Risques locatifs)</option>
                    <option value="proprietaire">Propriétaire occupant</option>
                  </select>
                </div>
              </>
            )}

            {product.id === 'sante' && (
              <>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Formule de remboursement
                  </label>
                  <select
                    value={santeFormule}
                    onChange={(e) => setSanteFormule(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#001f5c]"
                  >
                    <option value="sante-essentielle">Hospi & Chirurgie seule</option>
                    <option value="sante-confort">Confort : Hospi + Soins ambulatoires 80%</option>
                    <option value="sante-serenite">Sérénité : Couverture 90% + Dentaire/Optique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Composition du foyer
                  </label>
                  <select
                    value={santeFamille}
                    onChange={(e) => setSanteFamille(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#001f5c]"
                  >
                    <option value="solo">Assuré individuel seul</option>
                    <option value="couple">Couple (Souscripteur + Conjoint)</option>
                    <option value="famille">Famille complète (Parents + Enfants)</option>
                  </select>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <span className="text-xs font-bold text-emerald-800 block mb-1">Réseau Tiers-Payant</span>
                  <span className="text-[11px] text-emerald-700 leading-tight block">
                    Accès sans avance de frais dans les cliniques privées partenaires de Casablanca.
                  </span>
                </div>
              </>
            )}

            {product.id === 'epargne-retraite' && (
              <>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Profil de versement envisagé
                  </label>
                  <select
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#001f5c]"
                  >
                    <option value="progressif">Épargne progressive (démarrage modulable)</option>
                    <option value="confort">Épargne confort (constitution régulière)</option>
                    <option value="optimale">Épargne optimale (optimisation fiscale maximale)</option>
                    <option value="patrimoniale">Épargne patrimoniale & transmission</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Horizon d'épargne : <span className="text-[#001f5c] font-black">{retraiteDuree} ans</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="35"
                    step="1"
                    value={retraiteDuree}
                    onChange={(e) => setRetraiteDuree(Number(e.target.value))}
                    className="w-full accent-[#001f5c] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                    <span>5 ans</span>
                    <span>20 ans</span>
                    <span>35 ans</span>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <span className="text-xs font-bold text-[#001f5c] block mb-1">Avantage Fiscal Maroc</span>
                  <span className="text-[11px] text-blue-800 leading-tight block">
                    Déductibilité intégrale de l'IR selon le Code Général des Impôts marocain.
                  </span>
                </div>
              </>
            )}

            {product.id === 'rc-pro' && (
              <>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Secteur d'activité
                  </label>
                  <select
                    value={rcProSector}
                    onChange={(e) => setRcProSector(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#001f5c]"
                  >
                    <option value="services">Services, IT, Conseil, Agences</option>
                    <option value="commerce">Commerce de détail, Restauration</option>
                    <option value="btp">BTP, Artisans du bâtiment</option>
                    <option value="industrie">Industrie, Production, Transport</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Taille de structure
                  </label>
                  <select
                    value={rcProTurnover}
                    onChange={(e) => setRcProTurnover(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#001f5c]"
                  >
                    <option value="petit">TPE / Indépendant / Profession libérale</option>
                    <option value="moyen">PME / Société de services</option>
                    <option value="grand">Grande Entreprise / Groupe</option>
                  </select>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-gray-800 block mb-1">Attestation Marchés Publics</span>
                  <span className="text-[11px] text-gray-600 leading-tight block">
                    Délivrée sous 24h avec plafonds adaptés à vos cahiers des charges.
                  </span>
                </div>
              </>
            )}

            {product.id === 'flotte-auto' && (
              <>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Nombre de véhicules dans le parc : <span className="text-[#001f5c] font-black">{flotteVehicules} véhicules</span>
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="50"
                    step="1"
                    value={flotteVehicules}
                    onChange={(e) => setFlotteVehicules(Number(e.target.value))}
                    className="w-full accent-[#001f5c] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                    <span>3 véhicules</span>
                    <span>25 véhicules</span>
                    <span>50+ véhicules</span>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <span className="text-xs font-bold text-[#001f5c] block mb-1">Audit de Flotte Gratuit</span>
                  <span className="text-[11px] text-blue-800 leading-tight block">
                    Nos conseillers étudient votre parc pour optimiser vos conditions de couverture.
                  </span>
                </div>
              </>
            )}

            {!['auto', 'habitation', 'sante', 'epargne-retraite', 'rc-pro', 'flotte-auto'].includes(product.id) && (
              <div className="md:col-span-3 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Ce contrat fait l'objet d'une étude technique sur-mesure conforme à la réglementation marocaine.
                </p>
                <p className="text-xs text-gray-500">
                  Remplissez le formulaire ci-dessous ou contactez notre agence de Hay Mohammadi par WhatsApp.
                </p>
              </div>
            )}
          </div>

          {/* Formulaire de Contact Direct */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            {leadSubmitted ? (
              <div className="p-6 bg-emerald-50 rounded-xl text-center border border-emerald-200">
                <CheckCircle2 size={36} className="text-emerald-600 mx-auto mb-2" />
                <h4 className="text-base font-bold text-emerald-900">Demande de devis enregistrée !</h4>
                <p className="text-xs text-emerald-700 mt-1">
                  Un conseiller de l'agence Assurances Hay Saada va vous contacter au <strong>{leadPhone}</strong> sous 2 heures ouvrées pour vous présenter votre devis personnalisé.
                </p>
                <a
                  href={getWhatsAppUrl(`(Demande envoyée par ${leadName} au ${leadPhone})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-xs hover:bg-[#20ba5a] transition-colors"
                >
                  <MessageCircle size={15} />
                  <span>Accélérer ma demande sur WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-200">
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#001f5c]">
                      Formulaire de Devis Personnalisé
                    </h4>
                    <p className="text-xs text-gray-500">
                      Remplissez vos coordonnées pour recevoir votre proposition chiffrée
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 shrink-0">
                    Sans engagement
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom & prénom"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-[#001f5c]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                      Téléphone (GSM) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 XX XX XX XX"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-[#001f5c]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-[#001f5c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Précisions éventuelles (facultatif)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Modèle du véhicule, date d'échéance du contrat actuel, superficie du local..."
                    value={leadNotes}
                    onChange={(e) => setLeadNotes(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-[#001f5c] resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#001f5c] hover:bg-[#ff0000] text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send size={14} />
                    <span>Envoyer ma demande de devis</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(getConfigurationSummary())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={15} />
                    <span>Préférer WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Section 3: Avantages Agence & Pièces à fournir */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#001f5c] text-white p-7 sm:p-8 rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-black uppercase tracking-wider mb-5 flex items-center gap-2.5">
                <Shield className="text-[#ff0000]" size={20} />
                <span>Pourquoi choisir Assurances Hay Saada ?</span>
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm text-gray-200">
                {product.advantages.map((adv, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-blue-300 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-blue-200 font-semibold">Agent Général Agréé AXA Maroc</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
              >
                <MessageCircle size={14} />
                <span>Contacter l'agence</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-7 sm:p-8 rounded-3xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-black uppercase tracking-wider text-gray-900 mb-5 flex items-center gap-2.5">
                <FileText size={20} className="text-[#ff0000]" />
                <span>Pièces à fournir pour la souscription</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600 font-medium">
                {product.documentsRequired.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="font-bold text-[#001f5c] w-5">{index + 1}.</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-gray-100">
              <a
                href={getWhatsAppUrl("(Envoi des documents justificatifs)")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 py-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span>Transmettre mes documents par WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section 4: FAQ Accordion */}
        {product.faq && product.faq.length > 0 && (
          <div className="mb-16">
            <div className="mb-6">
              <h2 className="text-2xl font-black text-[#001f5c] tracking-tight flex items-center gap-2">
                <HelpCircle className="text-[#ff0000]" size={24} />
                <span>Questions fréquentes sur ce contrat</span>
              </h2>
            </div>

            <div className="space-y-3">
              {product.faq.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-gray-900 hover:text-[#001f5c] transition-colors"
                    >
                      <span>{item.question}</span>
                      {isOpen ? <ChevronUp size={18} className="text-[#ff0000]" /> : <ChevronDown size={18} className="text-gray-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="bg-gradient-to-r from-[#001f5c] to-[#002b80] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black mb-3">
              Prêt à souscrire ou besoin d'un conseil personnalisé ?
            </h2>
            <p className="text-blue-100 text-sm font-medium mb-8">
              Nos conseillers vous accueillent du lundi au vendredi à l'agence de Hay Mohammadi ou répondent instantanément par WhatsApp et téléphone.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center gap-2"
              >
                <MessageCircle size={17} />
                <span>WhatsApp Conseiller</span>
              </a>
              <button
                onClick={() => onOpenQuoteModal(product.title)}
                className="bg-[#ff0000] hover:bg-[#d60000] text-white px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-lg cursor-pointer"
              >
                Formulaire de Contact
              </button>
              <a
                href="tel:+212522000000"
                className="bg-white text-[#001f5c] hover:bg-gray-100 px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <Phone size={14} className="text-[#ff0000]" />
                <span>05 22 00 00 00</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
