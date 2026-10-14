export interface Formule {
  id: string;
  name: string;
  tagline: string;
  priceNote: string;
  isPopular?: boolean;
  features: string[];
}

export interface Guarantee {
  title: string;
  description: string;
  isIncluded: boolean;
  coverageLimit?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProductData {
  id: string;
  slug: string;
  category: 'particulier' | 'entreprise';
  subcategory: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge: string;
  startingPrice: string;
  period: string;
  heroHighlight: string;
  formules: Formule[];
  keyGuarantees: Guarantee[];
  options: string[];
  advantages: string[];
  documentsRequired: string[];
  faq: FAQItem[];
  simulationType: 'auto' | 'habitation' | 'sante' | 'retraite' | 'rcpro' | 'flotte' | 'mrp' | 'standard';
}

export const PRODUCTS_DATA: ProductData[] = [
  // ==========================================
  // PARTICULIERS (7 Produits complets)
  // ==========================================
  {
    id: 'auto',
    slug: 'assurance-auto',
    category: 'particulier',
    subcategory: 'Mobilité & Véhicules',
    title: 'Assurance Auto & Moto',
    tagline: 'Roulez en toute sérénité au Maroc et à l\'étranger avec l\'assistance AXA 24h/24',
    shortDescription: 'Protection sur mesure de votre véhicule avec assistance remorquage 0 km, bris de glace sans franchise et véhicule de courtoisie.',
    fullDescription: 'L\'assurance automobile AXA chez Assurances Hay Saada offre une couverture complète répondant aux exigences légales marocaines tout en apportant des garanties haut de gamme : assistance dépannage immédiate à Casablanca et dans tout le Royaume, réparation rapide dans les garages conventionnés et indemnisation accélérée en cas de sinistre.',
    iconName: 'Car',
    badge: 'Produit Phare Particuliers',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: 'Constat amiable assisté + Remorquage 24/7 au Maroc',
    formules: [
      {
        id: 'tiers-simple',
        name: 'Formule Tiers Simple',
        tagline: 'L\'essentiel obligatoire au meilleur tarif',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Responsabilité Civile obligatoire',
          'Défense et Recours juridique',
          'Assistance panne & accident (dès 50 km)',
          'Protection passagers transportés'
        ]
      },
      {
        id: 'tiers-etendu',
        name: 'Formule Tiers Étendu (Collision & Vol)',
        tagline: 'Le compromis idéal pour une protection renforcée',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'Toutes les garanties Tiers Simple',
          'Bris de glace sans franchise',
          'Vol du véhicule et accessoires',
          'Incendie et explosion',
          'Collision avec un tiers identifié',
          'Assistance 0 km à domicile'
        ]
      },
      {
        id: 'tous-risques',
        name: 'Formule Tous Risques Intégrale',
        tagline: 'La couverture maximale pour véhicules récents',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Toutes les garanties Tiers Étendu',
          'Dommages tous accidents (choc, renversement)',
          'Actes de vandalisme et intempéries',
          'Véhicule de remplacement garanti (jusqu\'à 15 jours)',
          'Valeur à neuf pendant 24 mois (selon options)',
          'Garantie conducteur jusqu\'à 500 000 DH'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Responsabilité Civile Obligatoire',
        description: 'Indemnisation des dommages corporels et matériels causés à des tiers par votre véhicule au Maroc.',
        isIncluded: true,
        coverageLimit: 'Illimitée pour dommages corporels'
      },
      {
        title: 'Assistance Dépannage & Remorquage 24h/24',
        description: 'Intervention sur place ou remorquage vers le garage de votre choix ou réseau agréé AXA.',
        isIncluded: true,
        coverageLimit: '0 km inclus en formule étendue'
      },
      {
        title: 'Bris de Glace Intégral',
        description: 'Prise en charge du pare-brise, vitres latérales, lunette arrière et optiques de phares.',
        isIncluded: true,
        coverageLimit: 'Remplacement immédiat sans avance'
      },
      {
        title: 'Garantie Conducteur',
        description: 'Protection corporelle du conducteur en cas d\'accident responsable ou non (décès, invalidité, frais médicaux).',
        isIncluded: true,
        coverageLimit: 'Jusqu\'à 500 000 DH de capital'
      },
      {
        title: 'Véhicule de Remplacement',
        description: 'Mise à disposition d\'une voiture de courtoisie pendant la durée d\'immobilisation de votre véhicule.',
        isIncluded: false,
        coverageLimit: 'Option 7 à 15 jours'
      }
    ],
    options: [
      'Garantie conducteur étendue à 1 000 000 DH',
      'Option Valeur à Neuf 24 ou 36 mois',
      'Assistance internationale Carte Verte',
      'Protection juridique avancée litiges automobiles',
      'Assurance des accessoires et équipements non de série'
    ],
    advantages: [
      'Constat amiable assisté par un expert dépêché sur les lieux à Casablanca',
      'Réseau conventionné de plus de 120 garages et carrosseries de référence au Maroc',
      'Paiement échelonné de votre prime d\'assurance sans frais cachés',
      'Attestation d\'assurance immédiate remise en main propre à l\'agence Hay Saada'
    ],
    documentsRequired: [
      'Copie de la Carte Grise du véhicule',
      'Copie du Permis de Conduire en cours de validité',
      'Copie de la Carte Nationale d\'Identité (CIN ou Carte de séjour)',
      'Relevé d\'information de votre précédent assureur (pour bénéfice du bonus)'
    ],
    faq: [
      {
        question: 'Comment bénéficier de la réduction Bonus-Malus au Maroc ?',
        answer: 'Sur présentation de votre relevé d\'information officiel de votre assureur précédent, nous appliquons votre coefficient de réduction (jusqu\'à 50% de bonus sur la garantie Responsabilité Civile).'
      },
      {
        question: 'Que faire en cas d\'accident à Casablanca ?',
        answer: 'Contactez immédiatement notre numéro d\'assistance 24/7. Un agent mobile peut intervenir pour sécuriser les lieux et vous assister dans la rédaction rigoureuse du constat amiable.'
      },
      {
        question: 'Mon pare-brise est fissuré, comment le remplacer ?',
        answer: 'Présentez-vous directement dans un centre agréé partenaire AXA à Casablanca avec votre attestation. Le vitrage est remplacé sans avance de frais selon votre contrat.'
      }
    ],
    simulationType: 'auto'
  },
  {
    id: 'habitation',
    slug: 'assurance-habitation',
    category: 'particulier',
    subcategory: 'Patrimoine & Logement',
    title: 'Multirisque Habitation (MRH)',
    tagline: 'Protégez votre appartement ou villa contre les aléas et les dégâts des eaux',
    shortDescription: 'Couverture complète des murs et du mobilier pour propriétaires et locataires avec assistance serrurerie et plomberie d\'urgence.',
    fullDescription: 'L\'assurance Multirisque Habitation AXA protège votre logement, vos biens précieux et votre responsabilité civile familiale. Que vous soyez locataire à Casablanca ou propriétaire d\'une villa, bénéficiez d\'une indemnisation rapide en cas de dégât des eaux, incendie, vol ou bris de vitres, assortie d\'une assistance artisan d\'urgence 24h/24.',
    iconName: 'Home',
    badge: 'Protection Foyer',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: 'Assistance serrurier & plombier d\'urgence 24/7 incluse',
    formules: [
      {
        id: 'mrh-essentielle',
        name: 'Formule Locataire Essentielle',
        tagline: 'L\'obligation locative et les risques locatifs couverts',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Risques locatifs (incendie, explosion)',
          'Dégâts des eaux causés à l\'immeuble',
          'Responsabilité civile chef de famille',
          'Assistance serrurerie d\'urgence'
        ]
      },
      {
        id: 'mrh-confort',
        name: 'Formule Propriétaire Confort',
        tagline: 'Protection complète du bâtiment et des biens mobiliers',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'Toutes les garanties de base',
          'Vol et vandalisme avec effraction',
          'Bris de glaces, miroirs et baies vitrées',
          'Dommages électriques aux appareils ménagers',
          'Frais de relogement d\'urgence',
          'Assistance plomberie & serrurerie'
        ]
      },
      {
        id: 'mrh-prestige',
        name: 'Formule Prestige & Villas',
        tagline: 'Pour résidences de standing et objets de valeur',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Couverture intégrale bâtiment et annexes/jardins',
          'Objets d\'art, bijoux et biens précieux',
          'Pertes indirectes et honoraires d\'expert',
          'Dommages causés par les surtensions et tempêtes',
          'Assistance premium avec relogement en hôtel'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Incendie & Explosion',
        description: 'Prise en charge intégrale des dégâts matériels causés à l\'appartement ou à la maison.',
        isIncluded: true,
        coverageLimit: 'Valeur à neuf des constructions'
      },
      {
        title: 'Dégâts des Eaux & Infiltrations',
        description: 'Réparation des fuites accidentelles, ruptures de canalisations et dommages aux voisins.',
        isIncluded: true,
        coverageLimit: 'Indemnisation rapide et recherche de fuite'
      },
      {
        title: 'Vol & Actes de Vandalisme',
        description: 'Indemnisation des meubles, appareils électroniques, bijoux et réparations de serrures endommagées.',
        isIncluded: true,
        coverageLimit: 'Selon déclaration du capital mobilier'
      },
      {
        title: 'Responsabilité Civile Vie Privée',
        description: 'Couvre les dommages causés par vous, vos enfants, vos animaux domestiques ou vos employés de maison.',
        isIncluded: true,
        coverageLimit: 'Conforme aux standards AXA'
      }
    ],
    options: [
      'Garantie piscines, jardins et clôtures',
      'Extension bijoux et montres de collection hors coffre-fort',
      'Assurance cave, débarras et garage séparé',
      'Protection juridique pour litiges de copropriété ou voisinage'
    ],
    advantages: [
      'Tarification transparente selon le nombre de pièces principales',
      'Assistance dépannage d\'urgence : serrurier, plombier, électricien',
      'Prise en charge directe des devis d\'artisans agréés AXA'
    ],
    documentsRequired: [
      'Contrat de bail (pour locataires) ou titre foncier / acte notarié (propriétaires)',
      'Copie de la CIN du souscripteur',
      'Estimation globale du capital mobilier à assurer'
    ],
    faq: [
      {
        question: 'L\'assurance habitation est-elle obligatoire pour un locataire au Maroc ?',
        answer: 'Elle est généralement exigée par le propriétaire dans le contrat de bail afin de couvrir la responsabilité locative en cas d\'incendie ou de dégât des eaux.'
      },
      {
        question: 'Comment évaluer mon capital mobilier ?',
        answer: 'Faites la somme de vos meubles, appareils électroménagers, vêtements et appareils numériques. Nos conseillers à l\'agence Hay Saada vous aident à établir une estimation juste pour éviter toute sous-assurance.'
      }
    ],
    simulationType: 'habitation'
  },
  {
    id: 'sante',
    slug: 'assurance-sante',
    category: 'particulier',
    subcategory: 'Santé & Prévoyance',
    title: 'Complémentaire Santé & Famille',
    tagline: 'Accédez aux meilleures cliniques et spécialistes avec des remboursements élevés et rapides',
    shortDescription: 'Couverture des soins ambulatoires, hospitalisations chirurgicales, maternité, dentaire et optique avec tiers payant national.',
    fullDescription: 'Face au coût croissant des soins médicaux, l\'assurance santé AXA proposée par Assurances Hay Saada garantit à vous et à vos proches une prise en charge médicale d\'excellence. Des remboursements rapides sur dossier, le tiers payant en clinique, et un accès sans avance de frais aux examens lourds (IRM, scanner, chirurgie).',
    iconName: 'HeartPulse',
    badge: 'Santé & Bien-être',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: 'Tiers-Payant dans plus de 200 cliniques privées au Maroc',
    formules: [
      {
        id: 'sante-essentielle',
        name: 'Formule Hospi & Chirurgie',
        tagline: 'La sécurité financière face aux coups durs',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Hospitalisation médicale et chirurgicale à 100%',
          'Frais de séjour et honoraires des chirurgiens',
          'Urgences médicales et transport en ambulance',
          'Plafond annuel de 250 000 DH'
        ]
      },
      {
        id: 'sante-confort',
        name: 'Formule Confort Ambulatoire & Hospi',
        tagline: 'Le suivi médical régulier pour toute la famille',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'Toutes les garanties de la Formule Hospi',
          'Consultations généralistes et spécialistes (remboursées à 80%)',
          'Analyses de biologie et radiologie / échographie',
          'Médicaments prescrits en pharmacie',
          'Forfait optique annuel (monture + verres)',
          'Plafond annuel jusqu\'à 500 000 DH'
        ]
      },
      {
        id: 'sante-serenite',
        name: 'Formule Sérénité Intégrale',
        tagline: 'La protection haut de gamme sans compromis',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Remboursement jusqu\'à 90% des frais réels',
          'Chambre individuelle en clinique',
          'Maternité, accouchement et soins du nouveau-né',
          'Prothèses dentaires et orthodontie pour enfants',
          'Évacuation sanitaire internationale en cas d\'urgence'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Hospitalisation Médicale & Chirurgicale',
        description: 'Prise en charge directe par entente préalable auprès des cliniques privées conventionnées AXA.',
        isIncluded: true,
        coverageLimit: 'Jusqu\'à 1 000 000 DH / personne'
      },
      {
        title: 'Soins Ambulatoires & Médicaments',
        description: 'Remboursement des visites médicales, actes de radiologie, analyses de laboratoire et ordonnances.',
        isIncluded: true,
        coverageLimit: 'Traitement dossier en 48-72h'
      },
      {
        title: 'Maternité & Accouchement',
        description: 'Couverture des consultations prénatales, accouchement par voie basse ou césarienne et soins pédiatriques.',
        isIncluded: true,
        coverageLimit: 'Forfait dédié selon formule'
      },
      {
        title: 'Dentaire & Optique',
        description: 'Forfaits pour soins dentaires courants, couronnes, détartrage, ainsi que verres et montures de vue.',
        isIncluded: true,
        coverageLimit: 'Renouvellement annuel'
      }
    ],
    options: [
      'Garantie Assistance Médicale Internationale (évacuation sanitaire)',
      'Option Médecines douces (ostéopathie, acupuncture, kinésithérapie)',
      'Rente éducation en cas de disparition du souscripteur'
    ],
    advantages: [
      'Dépôt et suivi instantané de vos feuilles de soins à l\'agence Hay Mohammadi',
      'Accord de prise en charge hospitalière délivré en moins de 2 heures',
      'Réseau étendu de professionnels de santé partenaires sans dépassement imprévu'
    ],
    documentsRequired: [
      'Questionnaire médical simplifié (selon l\'âge du souscripteur)',
      'Copie de la CIN du souscripteur et des ayants droit',
      'Extrait d\'acte de naissance pour les enfants à charge',
      'Relevé d\'Identité Bancaire (RIB) pour les virements de remboursement'
    ],
    faq: [
      {
        question: 'Comment fonctionne le tiers payant en clinique ?',
        answer: 'En cas d\'hospitalisation programmée ou urgente, la clinique conventionnée AXA contacte nos services avec votre carte d\'assuré. Nous délivrons un accord de prise en charge direct : vous ne réglez que l\'éventuel ticket modérateur.'
      },
      {
        question: 'Quel est le délai de remboursement d\'une feuille de soins ?',
        answer: 'Déposez votre dossier complet à notre agence Assurances Hay Saada : le remboursement est viré directement sur votre compte bancaire sous 48 à 72 heures.'
      }
    ],
    simulationType: 'sante'
  },
  {
    id: 'epargne-retraite',
    slug: 'epargne-retraite',
    category: 'particulier',
    subcategory: 'Avenir & Épargne',
    title: 'Épargne & Retraite Complémentaire',
    tagline: 'Valorisez votre capital et optimisez vos impôts selon le Code Général des Impôts marocain',
    shortDescription: 'Plan d\'épargne retraite défiscalisé avec rendements attractifs garantis, versements libres et disponibilité du capital.',
    fullDescription: 'Préparez l\'avenir de votre foyer avec les solutions d\'Épargne et Retraite AXA chez Assurances Hay Saada. Profitez des avantages fiscaux exceptionnels prévus par le droit marocain (déductibilité totale de vos cotisations de l\'Impôt sur le Revenu IR), tout en vous constituant un capital sûr pour votre retraite ou les études supérieures de vos enfants.',
    iconName: 'TrendingUp',
    badge: 'Avantage Fiscal Maroc',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: 'Déduction jusqu\'à 100% de votre Impôt sur le Revenu (IR)',
    formules: [
      {
        id: 'retraite-active',
        name: 'Plan Retraite Individuelle',
        tagline: 'Sécurité et allègement fiscal maximum',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'Versements mensuels, trimestriels ou libres',
          'Déductibilité fiscale intégrale de l\'IR au Maroc',
          'Taux de rendement garanti + participation aux bénéfices',
          'Sortie en capital net d\'impôt ou en rente viagère'
        ]
      },
      {
        id: 'epargne-etudes',
        name: 'Plan Éducation & Projets',
        tagline: 'Financer les études supérieures de vos enfants',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Constitution progressive d\'un capital dédié aux études',
          'Option rente d\'études versée trimestriellement',
          'Garantie de bonne fin : AXA prend le relais des versements en cas d\'aléa',
          'Disponibilité partielle en cas de besoin'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Capital Garanti à l\'Échéance',
        description: 'La totalité de vos cotisations nettes est garantie contractuellement avec revalorisation annuelle.',
        isIncluded: true,
        coverageLimit: 'Sécurité 100% groupe AXA'
      },
      {
        title: 'Déduction Fiscale de l\'Impôt sur le Revenu (IR)',
        description: 'Possibilité de déduire vos versements de votre salaire imposable dans la limite prévue par le Code des Impôts.',
        isIncluded: true,
        coverageLimit: 'Économie d\'impôt immédiate'
      },
      {
        title: 'Garantie Décès / Invalidité Intégrée',
        description: 'En cas de décès avant l\'échéance, le capital constitué majoré d\'une indemnité est versé aux bénéficiaires désignés.',
        isIncluded: true,
        coverageLimit: 'Versement net de droits de succession'
      }
    ],
    options: [
      'Clause bénéficiaire personnalisée modifiable à tout moment',
      'Possibilité de rachats partiels après la période de fidélité',
      'Option rente viagère réversible au conjoint survivant'
    ],
    advantages: [
      'Simulation fiscale gratuite réalisée à l\'agence Hay Saada selon votre barème d\'IR',
      'Relevé annuel clair de situation et performance financière',
      'Versements exceptionnels possibles à tout moment (primes de fin d\'année, etc.)'
    ],
    documentsRequired: [
      'Copie de la CIN du souscripteur',
      'Attestation de salaire ou dernier bulletin de paie (pour calcul de l\'optimisation fiscale)',
      'Spécimen de chèque ou RIB bancaire pour les prélèvements'
    ],
    faq: [
      {
        question: 'Comment fonctionne la déductibilité fiscale au Maroc ?',
        answer: 'Les cotisations versées au titre de la retraite complémentaire sont déductibles de l\'assiette de l\'IR, ce qui réduit directement votre prélèvement à la source ou vous ouvre droit à un remboursement d\'impôt.'
      },
      {
        question: 'Puis-je récupérer mon argent avant la retraite ?',
        answer: 'Oui, des rachats partiels ou totaux sont possibles selon les conditions contractuelles en cas d\'imprévu ou de projet immobilier.'
      }
    ],
    simulationType: 'retraite'
  },
  {
    id: 'voyage',
    slug: 'assurance-voyage',
    category: 'particulier',
    subcategory: 'Mobilité & Loisirs',
    title: 'Assurance Voyage & Assistance Monde',
    tagline: 'L\'attestation officielle reconnue par tous les consulats pour vos démarches Visa Schengen',
    shortDescription: 'Couverture médicale d\'urgence à l\'étranger, rapatriement sanitaire, retard de vol et indemnisation des bagages perdus.',
    fullDescription: 'Partez à l\'étranger l\'esprit tranquille avec l\'Assurance Voyage AXA délivrée instantanément par Assurances Hay Saada. Conforme aux obligations strictes des Visas Schengen (couverture médicale minimale de 30 000 €), elle vous protège aux États-Unis, en Europe, en Asie et dans le monde entier.',
    iconName: 'Plane',
    badge: 'Conforme Visa Schengen',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: 'Attestation consulaire délivrée en 10 minutes en agence',
    formules: [
      {
        id: 'voyage-schengen',
        name: 'Formule Visa Schengen & Europe',
        tagline: '100% conforme pour vos dépôts de visa consulaires',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'Frais médicaux et chirurgicaux couverts jusqu\'à 30 000 €',
          'Rapatriement sanitaire et retour des accompagnants',
          'Attestation bilingue instantanée avec QR code officiel',
          'Avance de caution hospitalière à l\'étranger'
        ]
      },
      {
        id: 'voyage-monde',
        name: 'Formule Monde & USA / Canada',
        tagline: 'Plafonds renforcés pour les pays aux frais de santé élevés',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Plafond de frais médicaux porté à 100 000 $ / 150 000 €',
          'Perte, vol ou retard de bagages (jusqu\'à 10 000 DH)',
          'Annulation ou interruption de voyage pour cause grave',
          'Responsabilité civile vie privée à l\'étranger',
          'Assistance juridique et avance de caution à l\'étranger'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Frais Médicaux & Hospitalisation à l\'Étranger',
        description: 'Prise en charge directe des soins urgents sans que vous ayez à débourser des sommes colossales à l\'étranger.',
        isIncluded: true,
        coverageLimit: '30 000 € à 150 000 €'
      },
      {
        title: 'Rapatriement Sanitaire d\'Urgence',
        description: 'Organisation et prise en charge du transport médicalisé vers le Maroc si votre état de santé l\'exige.',
        isIncluded: true,
        coverageLimit: 'Frais réels pris en charge à 100%'
      },
      {
        title: 'Indemnisation Perte de Bagages',
        description: 'Compensation financière en cas de bagages égarés ou détruits par la compagnie aérienne.',
        isIncluded: true,
        coverageLimit: 'Forfait d\'urgence + indemnisation au kg'
      }
    ],
    options: [
      'Garantie annulation de voyage toute cause justifiée',
      'Extension pour sports d\'hiver et activités nautiques',
      'Couverture multi-voyages annuelle pour voyageurs fréquents'
    ],
    advantages: [
      'Attestation Visa remise immédiatement imprimée à l\'agence ou envoyée par email/WhatsApp',
      'Plateau d\'assistance international multilingue joignable 24/7/365',
      'Remboursement intégral de l\'assurance si le visa consulaire est refusé (sur justificatif)'
    ],
    documentsRequired: [
      'Copie du passeport en cours de validité',
      'Dates exactes de départ et de retour',
      'Destination(s) du voyage'
    ],
    faq: [
      {
        question: 'L\'attestation AXA est-elle acceptée par les consulats de France, d\'Espagne ou d\'Italie ?',
        answer: 'Oui, sans aucune exception. AXA est l\'un des assureurs leaders officiellement accrédités auprès de tous les consulats de l\'Espace Schengen au Maroc.'
      },
      {
        question: 'Que se passe-t-il si mon visa est refusé ?',
        answer: 'Sur simple présentation du courrier officiel de refus du consulat avant la date d\'effet du contrat, nous procédons à l\'annulation et au remboursement de votre prime.'
      }
    ],
    simulationType: 'standard'
  },
  {
    id: 'prevoyance-deces',
    slug: 'assurance-prevoyance-famille',
    category: 'particulier',
    subcategory: 'Famille & Avenir',
    title: 'Protection Famille & Prévoyance Décès',
    tagline: 'Mettez vos proches à l\'abri du besoin financier en cas d\'aléa de la vie',
    shortDescription: 'Versement d\'un capital garanti et d\'une rente mensuelle d\'éducation pour protéger le train de vie de vos enfants.',
    fullDescription: 'La prévoyance familiale AXA permet d\'assurer la continuité du foyer face aux imprévus majeurs. En cas de décès ou d\'invalidité permanente, un capital financier net d\'impôt est immédiatement mis à la disposition de votre conjoint et de vos enfants pour régler les dépenses urgentes et financer leurs études.',
    iconName: 'Users',
    badge: 'Sérénité Familiale',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: 'Capital garanti de 100 000 DH à 2 000 000 DH versé sous 48h',
    formules: [
      {
        id: 'prevoyance-essentielle',
        name: 'Formule Sécurité Essentielle',
        tagline: 'Pour couvrir les frais immédiats et dettes courantes',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Capital décès toutes causes de 150 000 DH',
          'Doublement du capital en cas d\'accident',
          'Avance immédiate sur frais d\'obsèques',
          'Liberté totale de choix des bénéficiaires'
        ]
      },
      {
        id: 'prevoyance-famille-plus',
        name: 'Formule Famille Plus & Rente Éducation',
        tagline: 'La protection totale de l\'avenir scolaire des enfants',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'Capital décès / invalidité de 500 000 DH',
          'Rente mensuelle d\'éducation versée jusqu\'aux 25 ans de chaque enfant',
          'Rente annuelle de conjoint',
          'Exonération des cotisations en cas d\'incapacité de travail'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Capital Décès Toutes Causes',
        description: 'Versement rapide du montant convenu aux bénéficiaires désignés sans droits de succession.',
        isIncluded: true,
        coverageLimit: 'Jusqu\'à 2 000 000 DH'
      },
      {
        title: 'Perte Totale & Irréversible d\'Autonomie (PTIA)',
        description: 'Versement anticipé de l\'intégralité du capital au souscripteur lui-même pour adapter son quotidien.',
        isIncluded: true,
        coverageLimit: '100% du capital'
      },
      {
        title: 'Rente Éducation',
        description: 'Rente régulière versée pour garantir la poursuite sereine de la scolarité et des études supérieures.',
        isIncluded: true,
        coverageLimit: 'De 1 000 à 5 000 DH / mois / enfant'
      }
    ],
    options: [
      'Garantie Maladies Redoutées (cancer, AVC, chirurgie cardiaque) avec versement d\'un capital immédiat',
      'Assistance démarches administratives et successorales pour la famille'
    ],
    advantages: [
      'Tarifs attractifs calculés selon votre tranche d\'âge',
      'Adhésion simple sans formalités médicales lourdes en dessous d\'un certain seuil',
      'Conseil discret et confidentiel à notre agence de Hay Mohammadi'
    ],
    documentsRequired: [
      'Copie de la CIN du souscripteur',
      'Questionnaire de santé standard',
      'Livret de famille ou identification précise des bénéficiaires'
    ],
    faq: [
      {
        question: 'Qui peut être désigné bénéficiaire du contrat ?',
        answer: 'Vous êtes entièrement libre de désigner votre conjoint, vos enfants ou toute autre personne de votre choix, et de modifier cette clause par écrit à tout moment.'
      },
      {
        question: 'Le capital versé est-il imposable au Maroc ?',
        answer: 'Non, les capitaux décès issus des contrats d\'assurance prévoyance sont exonérés d\'impôt sur le revenu et des droits de mutation successorale.'
      }
    ],
    simulationType: 'standard'
  },
  {
    id: 'emprunteur',
    slug: 'assurance-emprunteur',
    category: 'particulier',
    subcategory: 'Crédit & Financement',
    title: 'Assurance Emprunteur & Crédit Immobilier',
    tagline: 'Économisez jusqu\'à 40% sur votre assurance de prêt immobilier par rapport aux banques marocaines',
    shortDescription: 'Délégation d\'assurance acceptée par toutes les banques du Maroc (Attijariwafa, BCP, CIH, BMCE, etc.) pour vos crédits habitat.',
    fullDescription: 'Lorsque vous souscrivez un prêt immobilier au Maroc, la banque vous impose une assurance décès-invalidité. Avec Assurances Hay Saada, vous pouvez opter pour la délégation d\'assurance AXA : garanties équivalentes ou supérieures à celles de la banque avec une économie pouvant atteindre plusieurs dizaines de milliers de dirhams sur la durée totale du prêt.',
    iconName: 'Building2',
    badge: 'Économie sur Crédit',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: 'Agrément garanti auprès de toutes les banques marocaines',
    formules: [
      {
        id: 'emprunteur-standard',
        name: 'Formule Crédit Habitat Particulier',
        tagline: 'Conforme aux exigences bancaires marocaines',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'Couverture du capital restant dû en cas de décès',
          'Perte totale et irréversible d\'autonomie (PTIA)',
          'Attestation bancaire immédiate conforme aux exigences du prêteur',
          'Paiement de la prime calqué sur les échéances du prêt'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Décès Toutes Causes',
        description: 'Remboursement direct du solde restant dû du prêt à la banque, protégeant ainsi vos héritiers.',
        isIncluded: true,
        coverageLimit: '100% du crédit immobilier'
      },
      {
        title: 'Perte Totale & Irréversible d\'Autonomie',
        description: 'Prise en charge intégrale du prêt si vous ne pouvez plus exercer d\'activité génératrice de revenus.',
        isIncluded: true,
        coverageLimit: 'Solde du prêt remboursé'
      }
    ],
    options: [
      'Option Incapacité Temporaire Totale de Travail (ITT) avec prise en charge des mensualités',
      'Assurance Perte d\'Emploi (selon conditions)'
    ],
    advantages: [
      'Tarification personnalisée selon votre profil médical et non pas un tarif groupe bancaire unique',
      'Dossier traité et attestation remise à votre banquier sous 48 heures',
      'Économies substantielles calculées noir sur blanc face à l\'offre de votre banque'
    ],
    documentsRequired: [
      'Offre ou tableau d\'amortissement prévisionnel de la banque',
      'Copie de la CIN',
      'Questionnaire médical'
    ],
    faq: [
      {
        question: 'Ma banque marocaine est-elle obligée d\'accepter une assurance AXA ?',
        answer: 'Oui, la réglementation bancaire et des assurances au Maroc consacre le libre choix de l\'assureur emprunteur (délégation d\'assurance) dès lors que les garanties sont au moins équivalentes.'
      }
    ],
    simulationType: 'standard'
  },

  // ==========================================
  // ENTREPRISES & PROFESSIONNELS (8 Produits complets)
  // ==========================================
  {
    id: 'rc-pro',
    slug: 'responsabilite-civile-professionnelle',
    category: 'entreprise',
    subcategory: 'Responsabilité & Droit',
    title: 'Responsabilité Civile Professionnelle (RC Pro)',
    tagline: 'Protégez votre entreprise contre les réclamations de tiers, clients et partenaires',
    shortDescription: 'Couverture des préjudices corporels, matériels et immatériels causés dans le cadre de vos prestations, avec prise en charge des frais juridiques.',
    fullDescription: 'Une faute professionnelle, un retard d\'exécution, une négligence ou un accident dans vos locaux peut entraîner des demandes de dommages et intérêts colossales. La RC Professionnelle et Exploitation d\'AXA chez Assurances Hay Saada protège votre trésorerie et la réputation de votre structure.',
    iconName: 'ShieldCheck',
    badge: 'Bouclier Juridique & Financier',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: 'Protection juridique & frais d\'avocat inclus',
    formules: [
      {
        id: 'rc-prof-liberale',
        name: 'Formule Prestataires & Professions Libérales',
        tagline: 'Consultants, informaticiens, agences, comptables, experts',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Erreurs, omissions, fautes professionnelles',
          'Pertes financières et immatérielles subies par vos clients',
          'Défense civile et recours (honoraires d\'avocats et experts)',
          'Plafond de garantie de 1 000 000 DH à 5 000 000 DH'
        ]
      },
      {
        id: 'rc-exploitation-commerce',
        name: 'Formule Commerces & Artisans',
        tagline: 'Magasins, restaurateurs, artisans, PME',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'RC Exploitation (accidents de clients dans vos locaux)',
          'Dommages aux biens confiés pour réparation ou stockage',
          'Intoxications alimentaires (métiers de bouche)',
          'Défense pénale et recours'
        ]
      },
      {
        id: 'rc-industrielle-btp',
        name: 'Formule BTP, Industrie & Grands Comptes',
        tagline: 'Constructeurs, industriels, distributeurs d\'envergure',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'RC après livraison de produits ou réception de chantiers',
          'Pollution accidentelle',
          'Dommages aux ouvrages voisins',
          'Plafonds élevés adaptés aux appels d\'offres publics et privés'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Fautes Professionnelles & Omissions',
        description: 'Indemnisation des préjudices subis par vos clients résultant d\'un conseil inadapté, d\'une erreur technique ou d\'un retard imputable.',
        isIncluded: true,
        coverageLimit: 'Jusqu\'à 10 000 000 DH'
      },
      {
        title: 'Responsabilité Civile Exploitation',
        description: 'Dommages causés aux tiers au quotidien (client qui glisse dans votre boutique, chute d\'un objet depuis votre échafaudage).',
        isIncluded: true,
        coverageLimit: 'Dommages corporels et matériels'
      },
      {
        title: 'Frais de Défense Juridique & Expertise',
        description: 'Prise en charge des frais d\'avocats, d\'huissiers et d\'experts mandatés pour vous défendre devant les tribunaux de commerce.',
        isIncluded: true,
        coverageLimit: 'Inclus d\'office'
      }
    ],
    options: [
      'Responsabilité Civile des Mandataires Sociaux (RC Dirigeants / D&O)',
      'Garantie Atteinte à l\'environnement accidentelle',
      'Extension géographique pour missions ou export à l\'international'
    ],
    advantages: [
      'Attestation de RC Pro rédigée sur mesure sous 24h pour vos réponses aux appels d\'offres',
      'Audit personnalisé des risques de votre activité réalisé par nos spécialistes à Casablanca',
      'Plafonds ajustables selon les clauses contractuelles de vos clients'
    ],
    documentsRequired: [
      'Copie du Registre de Commerce (RC), Modèle J récent',
      'Identifiant Fiscal (IF) et Taxe Professionnelle (TP)',
      'Chiffre d\'affaires prévisionnel ou dernier bilan comptable',
      'Description détaillée de l\'activité et type de contrats clients'
    ],
    faq: [
      {
        question: 'La RC Pro est-elle obligatoire au Maroc ?',
        answer: 'Elle est légalement obligatoire pour plusieurs professions réglementées (experts-comptables, notaires, architectes, agents de voyage, santé) et contractuellement indispensable pour répondre aux marchés et appels d\'offres des donneurs d\'ordres.'
      },
      {
        question: 'Comment est calculée la cotisation de la RC Pro ?',
        answer: 'Elle dépend principalement de votre secteur d\'activité, de votre chiffre d\'affaires annuel, du nombre de salariés et du plafond de garantie souhaité.'
      }
    ],
    simulationType: 'rcpro'
  },
  {
    id: 'mrp',
    slug: 'multirisque-professionnelle',
    category: 'entreprise',
    subcategory: 'Biens & Locaux',
    title: 'Multirisque Professionnelle (MRP)',
    tagline: 'Protégez vos locaux, vos machines et sécurisez votre perte d\'exploitation',
    shortDescription: 'Assurance globale de votre outil de travail : incendie, vol, dégât des eaux, bris de machine et maintien de votre marge brute en cas d\'arrêt d\'activité.',
    fullDescription: 'Un sinistre peut paralyser votre activité du jour au lendemain. La Multirisque Professionnelle AXA chez Assurances Hay Saada offre un bouclier complet protégeant votre patrimoine immobilier professionnel, vos stocks de marchandises, votre matériel informatique ainsi que la perte de revenus consécutive à un arrêt d\'exploitation.',
    iconName: 'Building2',
    badge: 'Protection Intégrale Entreprise',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: 'Maintien des salaires et charges fixes jusqu\'à 18 mois',
    formules: [
      {
        id: 'mrp-commercant',
        name: 'Formule Commerces & Boutiques',
        tagline: 'Magasins de détail, franchises, showrooms',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Incendie, explosion, dégât des eaux',
          'Vol des marchandises et fonds de caisse',
          'Bris de vitrine et enseigne lumineuse',
          'Assistance dépannage d\'urgence serrurerie/vitrerie'
        ]
      },
      {
        id: 'mrp-bureaux',
        name: 'Formule Bureaux & Cabinets',
        tagline: 'Cabinets médicaux, sièges sociaux, agences',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'Protection des locaux et aménagements',
          'Matériel informatique, serveurs et mobilier de bureau',
          'Perte de documents et frais de reconstitution d\'archives',
          'Perte d\'exploitation consécutive'
        ]
      },
      {
        id: 'mrp-industrie-atelier',
        name: 'Formule Usines & Ateliers de Production',
        tagline: 'Sites de production, dépôts logistiques, usines',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Bâtiments industriels et stocks volumineux',
          'Bris de machines et installations électriques',
          'Perte d\'exploitation sur 12 à 24 mois',
          'Frais de déblais et de dépollution'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Incendie, Foudre & Explosions',
        description: 'Reconstruction des bâtiments et rééquipement de vos machines et mobiliers à neuf.',
        isIncluded: true,
        coverageLimit: 'Valeur déclarée'
      },
      {
        title: 'Perte d\'Exploitation Après Sinistre',
        description: 'Versement d\'une indemnité compensant la perte de bénéfice et couvrant vos charges fixes (salaires, loyers, mensualités bancaires) pendant la fermeture.',
        isIncluded: true,
        coverageLimit: 'Période d\'indemnisation 12 à 18 mois'
      },
      {
        title: 'Vol, Vandalisme & Dégradations',
        description: 'Indemnisation des stocks volés, du matériel dérobé et réparation des dégradations commises.',
        isIncluded: true,
        coverageLimit: 'Avec ou sans effraction'
      },
      {
        title: 'Dégâts des Eaux & Inondations',
        description: 'Couvre les infiltrations de toiture, ruptures de canalisations et engorgements d\'eaux pluviales.',
        isIncluded: true,
        coverageLimit: 'Stocks et locaux protégés'
      }
    ],
    options: [
      'Garantie Bris de Machines spécifiques et automates industriels',
      'Assurance marchandises sous température dirigée (chambres froides)',
      'Pertes de valeur vénale du fonds de commerce'
    ],
    advantages: [
      'Visite de prévention et conseils techniques par nos experts à Casablanca',
      'Avance immédiate sur indemnité pour relancer l\'activité sans attendre la fin des expertises',
      'Accompagnement de proximité par un chargé d\'affaires dédié à l\'agence Hay Saada'
    ],
    documentsRequired: [
      'Plan et superficie des locaux professionnels',
      'Inventaire valorisé du matériel et des stocks marchands',
      'Dernière liasse fiscale ou compte de résultat (pour la perte d\'exploitation)',
      'Statuts de l\'entreprise et RC'
    ],
    faq: [
      {
        question: 'Pourquoi souscrire la garantie Perte d\'Exploitation ?',
        answer: 'Après un incendie ou une inondation majeure, reconstruire les murs prend des mois. La garantie Perte d\'Exploitation évite la faillite en payant vos salariés, vos impôts et vos charges fixes pendant que vous ne produisez rien.'
      }
    ],
    simulationType: 'mrp'
  },
  {
    id: 'flotte-auto',
    slug: 'assurance-flotte-automobile',
    category: 'entreprise',
    subcategory: 'Mobilité & Transport',
    title: 'Assurance Flotte Automobile',
    tagline: 'Optimisez les coûts et simplifiez la gestion du parc de véhicules de votre entreprise',
    shortDescription: 'Contrat unique dès 3 véhicules (voitures de fonction, utilitaires, camions, deux-roues) avec assistance 24/7 et gestion en ligne simplifiée.',
    fullDescription: 'Gérer une flotte de véhicules demande de la réactivité et un coût maîtrisé. Le contrat Flotte AXA auprès d\'Assurances Hay Saada regroupe l\'ensemble de vos véhicules professionnels sous une seule police d\'assurance, avec une facturation globale, des tarifs dégressifs et une assistance routière prioritaire pour que vos collaborateurs ne soient jamais bloqués.',
    iconName: 'Truck',
    badge: 'Dès 3 Véhicules',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: 'Gestionnaire de compte dédié + Assistance remorquage prioritaire',
    formules: [
      {
        id: 'flotte-tiers',
        name: 'Pack Flotte Tiers Pro',
        tagline: 'Idéal pour utilitaires anciens et trajets urbains',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Responsabilité Civile obligatoire flotte',
          'Défense et Recours groupe',
          'Assistance dépannage 24/7 au Maroc',
          'Gestion centralisée des mouvements d\'entrée/sortie'
        ]
      },
      {
        id: 'flotte-confort',
        name: 'Pack Flotte Confort (Vol/Incendie + Bris)',
        tagline: 'Pour parcs de livraison et véhicules commerciaux',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'Toutes les garanties Tiers Pro',
          'Bris de glace sans franchise',
          'Vol et Incendie du véhicule',
          'Véhicule de remplacement utilitaire'
        ]
      },
      {
        id: 'flotte-tous-risques',
        name: 'Pack Flotte Tous Risques Intégrale',
        tagline: 'Pour voitures de fonction et parcs récents',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Dommages tous accidents sans tiers identifié',
          'Garantie corporelle des conducteurs salariés',
          'Réseau prioritaire de réparation rapide AXA',
          'Tableau de bord de sinistralité trimestriel'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Contrat Cadre Unique & Flexibilité',
        description: 'Ajoutez ou retirez des véhicules de votre parc en un simple email à l\'agence Hay Saada avec régularisation au prorata temporis.',
        isIncluded: true,
        coverageLimit: 'De 3 à 500+ véhicules'
      },
      {
        title: 'Assistance Routière Prioritaire 24/7',
        description: 'Dépannage sur place ou remorquage rapide pour limiter l\'impact sur vos livraisons ou vos rendez-vous clients.',
        isIncluded: true,
        coverageLimit: 'Partout au Maroc'
      },
      {
        title: 'Protection Conducteurs Salariés',
        description: 'Prise en charge des dommages corporels subis par vos salariés au volant.',
        isIncluded: true,
        coverageLimit: 'Jusqu\'à 300 000 DH / conducteur'
      }
    ],
    options: [
      'Garantie des marchandises transportées dans les utilitaires',
      'Assurance des équipements professionnels embarqués (outillage, frigos, grues)',
      'Véhicule de remplacement utilitaire adapté (fourgons)'
    ],
    advantages: [
      'Économies d\'échelle substantielles sur la prime globale du parc',
      'Régularisation trimestrielle ou semestrielle des mouvements de flotte',
      'Interlocuteur unique à l\'agence de Hay Mohammadi joignable sur ligne directe'
    ],
    documentsRequired: [
      'Listing complet du parc avec copies des cartes grises',
      'Relevé de sinistralité de la flotte sur les 36 derniers mois',
      'RC et coordonnées de l\'entreprise'
    ],
    faq: [
      {
        question: 'À partir de combien de véhicules peut-on ouvrir une flotte ?',
        answer: 'Chez AXA, un contrat flotte peut être créé dès 3 véhicules enregistrés au nom de la société ou des dirigeants.'
      }
    ],
    simulationType: 'flotte'
  },
  {
    id: 'sante-collective',
    slug: 'assurance-sante-collective',
    category: 'entreprise',
    subcategory: 'Ressources Humaines',
    title: 'Santé & Prévoyance Collective',
    tagline: 'Fidélisez vos collaborateurs avec une mutuelle d\'entreprise moderne et avantageuse',
    shortDescription: 'Assurance maladie complémentaire de groupe pour les salariés et leurs familles, avec télétransmission rapide et tiers payant.',
    fullDescription: 'Le bien-être et la fidélisation des talents passent par une excellente couverture de santé. L\'Assurance Santé Collective AXA permet aux entreprises de Casablanca et du Maroc d\'offrir à leurs équipes des remboursements médicaux généreux, l\'accès aux cliniques partenaires sans avance de frais, ainsi qu\'un capital décès-invalidité protecteur.',
    iconName: 'HeartPulse',
    badge: 'Avantage Salariés RH',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: 'Application mobile assurés + Tiers payant clinique pour salariés',
    formules: [
      {
        id: 'groupe-base',
        name: 'Formule Groupe Essentielle (Taux 80%)',
        tagline: 'La couverture performante accessible à toutes les PME',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Hospitalisations et chirurgies à 80% ou 100%',
          'Consultations médicales et pharmacie remboursées à 80%',
          'Plafond annuel de 150 000 DH par assuré',
          'Gestion des dossiers dématérialisée'
        ]
      },
      {
        id: 'groupe-confort',
        name: 'Formule Groupe Confort (Taux 90%)',
        tagline: 'Idéal pour cadres, techniciens et employés',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'Remboursement à 90% des soins ambulatoires et cliniques',
          'Forfaits dentaires et optiques renforcés',
          'Maternité avec prise en charge directe',
          'Capital décès / invalidité inclus pour le salarié'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Tiers Payant National en Clinique Privée',
        description: 'Les salariés n\'avancent pas les frais d\'hospitalisation dans les établissements partenaires.',
        isIncluded: true,
        coverageLimit: 'Prise en charge dématérialisée'
      },
      {
        title: 'Prévoyance Décès & Rente Invalidité',
        description: 'Versement d\'un capital aux ayants droit du collaborateur en cas de décès ou d\'accident invalidant.',
        isIncluded: true,
        coverageLimit: 'Multiple du salaire annuel (12 à 36 mois)'
      }
    ],
    options: [
      'Prise en charge de la médecine douce et cures thermales',
      'Assistance médicale d\'urgence à l\'étranger pour déplacements professionnels',
      'Extension aux parents à charge des salariés'
    ],
    advantages: [
      'Plateforme RH dédiée pour déclarer les entrées et sorties de salariés en 1 clic',
      'Permanences régulières d\'un conseiller Hay Saada dans vos locaux pour accompagner vos salariés',
      'Cotisations patronales déductibles du résultat fiscal de l\'entreprise'
    ],
    documentsRequired: [
      'Liste du personnel avec dates de naissance et statut marital',
      'Masse salariale globale',
      'Historique de consommation médicale si contrat existant'
    ],
    faq: [
      {
        question: 'L\'assurance maladie d\'entreprise est-elle déductible fiscalement ?',
        answer: 'Oui, la part patronale de la cotisation est une charge d\'exploitation intégralement déductible pour le calcul de l\'Impôt sur les Sociétés (IS).'
      }
    ],
    simulationType: 'standard'
  },
  {
    id: 'accidents-travail',
    slug: 'accidents-du-travail-loi-18-12',
    category: 'entreprise',
    subcategory: 'Obligation Légale',
    title: 'Accidents du Travail (Loi 18-12)',
    tagline: 'L\'assurance obligatoire pour tout employeur au Maroc',
    shortDescription: 'Conformité légale stricte avec prise en charge immédiate des soins, indemnités journalières et rentes d\'incapacité pour les salariés.',
    fullDescription: 'La loi marocaine n° 18-12 fait obligation à toute entreprise, quelle que soit sa taille ou son statut, de souscrire une assurance couvrant ses salariés contre les accidents survenus pendant le travail ou le trajet domicile-travail. Le contrat AXA chez Assurances Hay Saada garantit une conformité légale totale et vous prémunit contre les poursuites pénales et financières.',
    iconName: 'HardHat',
    badge: 'Obligation Légale au Maroc',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: '100% conforme Loi 18-12 avec attestation d\'inspection du travail',
    formules: [
      {
        id: 'at-conforme',
        name: 'Contrat Conforme Loi 18-12',
        tagline: 'Garanties légales obligatoires complètes',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'Soins médicaux, chirurgicaux et pharmaceutiques à 100%',
          'Frais d\'hospitalisation et prothèses médicales',
          'Indemnités journalières versées en cas d\'arrêt de travail',
          'Rentes d\'incapacité permanente ou de décès aux ayants droit'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Prise en Charge Médicale & Hospitalière',
        description: 'Prise en charge intégrale des factures d\'hôpitaux, cliniques et médicaments consécutifs à l\'accident de travail.',
        isIncluded: true,
        coverageLimit: 'Frais réels légaux'
      },
      {
        title: 'Indemnités Journalières de Travail',
        description: 'Maintien de revenus versé au salarié temporairement incapable de travailler.',
        isIncluded: true,
        coverageLimit: 'Selon les barèmes de la loi 18-12'
      },
      {
        title: 'Rentes d\'Incapacité Permanente & Décès',
        description: 'Calcul et versement direct des rentes viagères homologuées par le tribunal.',
        isIncluded: true,
        coverageLimit: 'Gestion déléguée par AXA'
      }
    ],
    options: [
      'Garantie "Faute Inexcusable de l\'Employeur"',
      'Garantie Décès Accidentel complémentaire'
    ],
    advantages: [
      'Délivrance immédiate de l\'attestation d\'assurance pour l\'Inspection du Travail et les banques',
      'Assistance juridique dédiée pour la constitution des déclarations de sinistre dans les délais légaux (48h)',
      'Tarification optimisée en fonction du secteur d\'activité et des mesures de prévention mises en place'
    ],
    documentsRequired: [
      'Bordereau déclaratif de la CNSS (masse salariale brute)',
      'Déclaration de début d\'activité ou RC',
      'Effectif détaillé par catégorie d\'emploi'
    ],
    faq: [
      {
        question: 'Quel est le délai pour déclarer un accident du travail au Maroc ?',
        answer: 'L\'employeur dispose d\'un délai légal strict de 48 heures (hors jours fériés) pour déclarer l\'accident auprès de l\'assureur et des autorités compétentes.'
      }
    ],
    simulationType: 'standard'
  },
  {
    id: 'trc-decennale',
    slug: 'tous-risques-chantier-decennale',
    category: 'entreprise',
    subcategory: 'BTP & Construction',
    title: 'Tous Risques Chantier (TRC) & Décennale',
    tagline: 'Sécurisez vos projets de construction, rénovation et promotion immobilière',
    shortDescription: 'Garantie intégrale des ouvrages en cours de construction contre les effondrements, incendies, tempêtes et responsabilité civile du chantier.',
    fullDescription: 'Chaque chantier de construction comporte des risques imprévisibles. La Tous Risques Chantier (TRC) et l\'Assurance Responsabilité Décennale d\'AXA couvrent les maîtres d\'ouvrage, promoteurs, architectes et entreprises du BTP à Casablanca et partout au Maroc, depuis l\'ouverture du chantier jusqu\'à 10 ans après la réception des travaux.',
    iconName: 'HardHat',
    badge: 'BTP & Promotion',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: 'Couverture travaux neufs, rénovations et responsabilité décennale',
    formules: [
      {
        id: 'trc-standard',
        name: 'Tous Risques Chantier (TRC)',
        tagline: 'Pendant toute la durée des travaux',
        priceNote: 'Pourcentage du coût d\'ouvrage',
        isPopular: true,
        features: [
          'Dommages matériels à l\'ouvrage (effondrement, glissement de terrain)',
          'Incendie, explosion, dégât des eaux sur le chantier',
          'Vol des matériaux de construction et équipements',
          'RC Chantier à l\'égard des voisins et des tiers'
        ]
      },
      {
        id: 'decennale-pack',
        name: 'Responsabilité Civile Décennale',
        tagline: 'Garantie 10 ans après livraison',
        priceNote: 'Calculé sur l\'ouvrage livré',
        features: [
          'Solidité de l\'ouvrage principal (fondations, gros œuvre)',
          'Impropriété à la destination de l\'immeuble',
          'Défauts majeurs compromettant la stabilité'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Dommages à l\'Ouvrage en Construction',
        description: 'Prise en charge des réparations nécessaires pour remettre l\'ouvrage en état en cas d\'accident, effondrement partiel ou tempête.',
        isIncluded: true,
        coverageLimit: 'Valeur totale du marché'
      },
      {
        title: 'Responsabilité Civile Vis-à-vis des Voisins (RCO)',
        description: 'Fissures, tassements ou dégradations causés aux immeubles mitoyens par les fouilles ou travaux.',
        isIncluded: true,
        coverageLimit: 'Plafonds adaptés aux zones urbaines denses'
      }
    ],
    options: [
      'Garantie Maintenance Visite (période de garantie post-livraison)',
      'Assurance des baraquements et engins de levage'
    ],
    advantages: [
      'Souscription rapide avec un ingénieur souscripteur dédié',
      'Attestation TRC conforme pour déblocage des crédits bancaires promoteur',
      'Expertise sur site en cas d\'aléa'
    ],
    documentsRequired: [
      'Permis de construire et descriptif des travaux',
      'Rapport d\'étude de sol géotechnique',
      'Contrats d\'architecte et de bureau de contrôle',
      'Montant prévisionnel du marché'
    ],
    faq: [
      {
        question: 'Qui doit souscrire la TRC : le maître d\'ouvrage ou l\'entreprise générale ?',
        answer: 'Le contrat peut être souscrit par l\'un ou l\'autre, mais il couvre obligatoirement l\'ensemble des intervenants (maître d\'ouvrage, entreprises, sous-traitants) pour éviter les litiges croisés.'
      }
    ],
    simulationType: 'standard'
  },
  {
    id: 'transport-marchandises',
    slug: 'assurance-transport-marchandises',
    category: 'entreprise',
    subcategory: 'Logistique & Transit',
    title: 'Transport de Marchandises & Cargo',
    tagline: 'Protégez vos cargaisons maritimes, aériennes et terrestres au Maroc et à l\'international',
    shortDescription: 'Garantie Tous Risques Facultés protégeant vos expéditions et importations contre les avaries, pertes, casses et vols en cours de transit.',
    fullDescription: 'Que vous soyez importateur, exportateur, distributeur ou logisticien à Casablanca, vos marchandises sont exposées à de multiples périls durant leur transit. L\'assurance Transport de Marchandises AXA chez Assurances Hay Saada indemnise la valeur réelle des biens perdus ou endommagés lors des trajets portuaires, aéroportuaires et routiers.',
    iconName: 'Truck',
    badge: 'Import / Export & Transit',
    startingPrice: 'Au voyage ou police d\'abonnement',
    period: '',
    heroHighlight: 'Couverture internationale Incoterms (CIF, CIP, FOB)',
    formules: [
      {
        id: 'cargo-abonnement',
        name: 'Police d\'Abonnement Annuelle',
        tagline: 'Pour entreprises ayant des flux réguliers',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'Tous vos flux d\'importation et de distribution couverts d\'office',
          'Gestion simplifiée par déclaration mensuelle du chiffre d\'affaires',
          'Garantie Magasin à Magasin (Door to Door)',
          'Tous Risques Facultés maritimes, terrestres et aériennes'
        ]
      },
      {
        id: 'cargo-voyage',
        name: 'Police au Voyage Spécifique',
        tagline: 'Pour expéditions ponctuelles ou matériels lourds',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Couverture sur mesure d\'un conteneur ou convoi précis',
          'Attestation d\'assurance pour crédit documentaire (Credoc)',
          'Protection contre les avaries communes maritimes'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Tous Risques Facultés (All Risks)',
        description: 'Couvre la perte, le vol, la mouille, la casse et la détérioration de vos marchandises en cours de transport.',
        isIncluded: true,
        coverageLimit: 'Valeur déclarée facture commerciale'
      },
      {
        title: 'Contribution aux Avaries Communes',
        description: 'Prise en charge de la quote-part exigée par les armateurs en cas de sauvetage en mer.',
        isIncluded: true,
        coverageLimit: 'Inclus d\'office'
      }
    ],
    options: [
      'Garantie Risques de Guerre et Grèves (selon clauses internationales de l\'Institute of London Underwriters)',
      'Assurance des marchandises sous chaîne du froid'
    ],
    advantages: [
      'Certificats d\'assurance transport délivrés en quelques minutes pour vos formalités douanières au port de Casablanca',
      'Réseau mondial de commissaires d\'avaries AXA présent dans tous les grands ports mondiaux',
      'Règlement accéléré des dossiers d\'indemnisation'
    ],
    documentsRequired: [
      'Facture commerciale et liste de colisage (Packing List)',
      'Titre de transport : Connaissement maritime (Bill of Lading), LTA aérienne ou Lettre de voiture CMR',
      'Incoterm retenu pour la transaction'
    ],
    faq: [
      {
        question: 'Pourquoi la responsabilité du transporteur ne suffit-elle pas ?',
        answer: 'Les transporteurs bénéficient de limitations légales de responsabilité très faibles (au kilo) et sont exonérés en cas de force majeure. Seule une assurance Tous Risques Facultés garantit la valeur réelle de vos marchandises.'
      }
    ],
    simulationType: 'standard'
  },
  {
    id: 'cyber-risques',
    slug: 'assurance-cyber-risques',
    category: 'entreprise',
    subcategory: 'Numérique & Données',
    title: 'Cyber-Assurance & Protection des Données',
    tagline: 'Faites face aux ransomwares, attaques informatiques et respectez les normes CNDP',
    shortDescription: 'Gestion de crise informatique, prise en charge des rançons et reconstitution de vos données, ainsi que couverture de la perte d\'exploitation.',
    fullDescription: 'Les cyberattaques touchent désormais toutes les entreprises marocaines. L\'assurance Cyber-Risques AXA chez Assurances Hay Saada met à votre disposition une équipe d\'experts en cybersécurité disponible 24/7 pour stopper l\'attaque, restaurer vos sauvegardes, indemniser votre perte de chiffre d\'affaires et prendre en charge les frais juridiques liés aux sanctions CNDP.',
    iconName: 'Laptop',
    badge: 'Nouvelle Menace Digitale',
    startingPrice: 'Sur devis personnalisé',
    period: '',
    heroHighlight: 'Assistance gestion de crise cyber 24/7 en moins d\'1 heure',
    formules: [
      {
        id: 'cyber-essentiel',
        name: 'Pack Cyber Résilience PME',
        tagline: 'Protection fondamentale pour TPE et PME connectées',
        priceNote: 'Sur mesure • Devis gratuit',
        isPopular: true,
        features: [
          'Assistance technique d\'urgence 24/7 par des experts en sécurité',
          'Frais de reconstitution des données détruites ou chiffrées',
          'Indemnisation de l\'extorsion cyber (gestion du rançongiciel)',
          'Frais de notification aux clients et à la CNDP'
        ]
      },
      {
        id: 'cyber-integral',
        name: 'Pack Cyber Entreprise & E-commerce',
        tagline: 'Pour structures hébergeant des données sensibles ou plateformes web',
        priceNote: 'Sur mesure • Devis gratuit',
        features: [
          'Toutes les garanties du pack PME',
          'Indemnisation de la Perte d\'Exploitation liée à l\'indisponibilité du système',
          'Responsabilité civile envers les tiers en cas de fuite de données',
          'Frais de défense et accompagnement aux sanctions réglementaires'
        ]
      }
    ],
    keyGuarantees: [
      {
        title: 'Assistance Gestion de Crise 24/7',
        description: 'Mobilisation immédiate d\'experts en cyber-forensics pour endiguer la faille et sécuriser le réseau.',
        isIncluded: true,
        coverageLimit: 'Ligne directe d\'urgence'
      },
      {
        title: 'Perte de Chiffre d\'Affaires Consécutive',
        description: 'Compensation de la marge brute perdue pendant que vos serveurs ou terminaux sont bloqués.',
        isIncluded: true,
        coverageLimit: 'Jusqu\'à 3 mois d\'interruption'
      },
      {
        title: 'Reconstitution des Systèmes & Données',
        description: 'Prise en charge des honoraires des spécialistes pour réinstaller les systèmes et restaurer les bases de données.',
        isIncluded: true,
        coverageLimit: 'Frais réels engagés'
      }
    ],
    options: [
      'Garantie Fraude par ingénierie sociale (arnaque au président ou faux ordre de virement FOVI)',
      'Audit de vulnérabilité annuel préventif'
    ],
    advantages: [
      'Accès immédiat aux meilleurs spécialistes forensic en cas de crise',
      'Accompagnement de conformité avec la loi marocaine 09-08 relative à la protection des données',
      'Sensibilisation de vos collaborateurs aux réflexes anti-phishing'
    ],
    documentsRequired: [
      'Questionnaire technique cyber simplifié (politique de sauvegarde, antivirus, double authentification)',
      'Chiffre d\'affaires annuel et nombre de postes informatiques',
      'Statuts de l\'entreprise'
    ],
    faq: [
      {
        question: 'Les PME marocaines sont-elles réellement ciblées par les hackers ?',
        answer: 'Absolument. Plus de 70% des attaques de rançongiciels au Maroc ciblent les TPE/PME en raison de systèmes de sauvegarde moins protégés que les grandes banques.'
      }
    ],
    simulationType: 'standard'
  }
];
