import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Send, Phone, MessageCircle } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductTitle?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProductTitle = 'Assurance Auto & Moto'
}) => {
  const [selectedProduct, setSelectedProduct] = useState(initialProductTitle);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Casablanca');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border-t-4 border-[#ff0000] relative animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-black text-[#001f5c] mb-2">
              Demande transmise avec succès !
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">
              Merci <strong>{name}</strong>. Votre demande de devis pour <strong>{selectedProduct}</strong> a bien été enregistrée par l'agence Assurances Hay Saada (Hay Mohammadi, Casablanca).
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-gray-700 mb-6">
              Un conseiller AXA vous contactera au <strong>{phone}</strong> sous 2 heures ouvrées pour vous faire part de la proposition la plus avantageuse.
            </div>
            <button
              onClick={handleResetAndClose}
              className="bg-[#001f5c] hover:bg-[#002b80] text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Fermer la fenêtre
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 bg-[#ff0000] rotate-45" />
              <span className="text-xs font-black uppercase tracking-wider text-[#001f5c]">
                Assurances Hay Saada • Agent Général AXA Casablanca
              </span>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mb-1">
              Demande de Devis Gratuit
            </h3>
            <p className="text-xs text-gray-500 font-medium mb-6">
              Étude personnalisée et sans engagement. Réponse rapide par nos conseillers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Solution d'assurance souhaitée
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-[#001f5c]"
                >
                  <optgroup label="Gamme Particuliers">
                    {PRODUCTS_DATA.filter(p => p.category === 'particulier').map(p => (
                      <option key={p.id} value={p.title}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Gamme Entreprises & Professionnels">
                    {PRODUCTS_DATA.filter(p => p.category === 'entreprise').map(p => (
                      <option key={p.id} value={p.title}>{p.title}</option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex: Mohamed Alami"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-[#001f5c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Téléphone (GSM) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="06 61 00 00 00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-[#001f5c]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-[#001f5c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Ville
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Casablanca"
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-[#001f5c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Précisions sur vos besoins (facultatif)
                </label>
                <textarea
                  rows={2}
                  placeholder="Véhicule (marque/modèle), surface logement, activité de l'entreprise..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-[#001f5c] resize-none"
                />
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full bg-[#ff0000] hover:bg-[#d60000] text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={14} />
                  <span>Envoyer la demande de devis</span>
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="grow border-t border-gray-200"></div>
                  <span className="shrink mx-3 text-[10px] uppercase font-bold text-gray-400">ou en direct</span>
                  <div className="grow border-t border-gray-200"></div>
                </div>

                <a
                  href={`https://wa.me/212600000000?text=${encodeURIComponent(`Bonjour Assurances Hay Saada, je souhaite un devis personnalisé pour : ${selectedProduct}${name ? ` (Nom: ${name})` : ''}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Demander sur WhatsApp</span>
                </a>
              </div>

              <div className="text-center pt-2">
                <p className="text-[10px] text-gray-400">
                  Vos coordonnées sont confidentielles et traitées exclusivement par l'agence Assurances Hay Saada.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
