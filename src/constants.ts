export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'particulier' | 'professionnel';
}

export const SERVICES: Service[] = [
  {
    id: 'auto',
    title: 'Assurance Auto',
    description: 'Une protection complète pour vous et votre véhicule avec des garanties modulables.',
    icon: 'Car',
    category: 'particulier'
  },
  {
    id: 'sante',
    title: 'Assurance Santé',
    description: 'Prenez soin de votre santé et celle de votre famille avec nos solutions de remboursement.',
    icon: 'HeartPulse',
    category: 'particulier'
  },
  {
    id: 'habitation',
    title: 'Assurance Habitation',
    description: 'Protégez votre foyer et vos biens contre les imprévus du quotidien.',
    icon: 'Home',
    category: 'particulier'
  },
  {
    id: 'pro',
    title: 'Assurance Professionnelle',
    description: 'Des solutions adaptées pour sécuriser votre activité et vos collaborateurs.',
    icon: 'Briefcase',
    category: 'professionnel'
  },
  {
    id: 'retraite',
    title: 'Épargne & Retraite',
    description: 'Préparez votre avenir sereinement avec nos solutions d\'épargne performantes.',
    icon: 'TrendingUp',
    category: 'particulier'
  },
  {
    id: 'vie',
    title: 'Assurance Vie',
    description: 'Protégez vos proches et constituez-vous un capital sur le long terme.',
    icon: 'Users',
    category: 'particulier'
  }
];

export interface ProService {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const PRO_SERVICES: ProService[] = [
  {
    title: 'Responsabilité Civile Professionnelle',
    description: 'Protégez votre entreprise contre les dommages causés à des tiers dans le cadre de votre activité.',
    icon: 'ShieldCheck',
    features: ['Dommages corporels', 'Dommages matériels', 'Pertes financières', 'Défense juridique']
  },
  {
    title: 'Assurance Flotte Automobile',
    description: 'Gérez et assurez l\'ensemble de vos véhicules professionnels avec un contrat unique et simplifié.',
    icon: 'Car',
    features: ['Assistance 24/7', 'Véhicule de remplacement', 'Garantie conducteur', 'Gestion simplifiée']
  },
  {
    title: 'Multirisque Professionnelle',
    description: 'Une protection globale pour vos locaux, votre matériel et votre perte d\'exploitation.',
    icon: 'Building2',
    features: ['Incendie & Explosion', 'Dégâts des eaux', 'Vol & Vandalisme', 'Bris de glace']
  },
  {
    title: 'Santé & Prévoyance Collective',
    description: 'Valorisez vos collaborateurs avec une couverture santé et prévoyance performante.',
    icon: 'HeartPulse',
    features: ['Remboursements rapides', 'Tiers payant', 'Garanties décès', 'Incapacité de travail']
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Amine Benjelloun',
    role: 'Chef d\'entreprise',
    company: 'Tech Solutions Casa',
    content: 'Un accompagnement exceptionnel pour la mise en place de notre assurance flotte. L\'équipe est réactive et comprend parfaitement les enjeux des PME à Casablanca.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5
  },
  {
    id: '2',
    name: 'Sara El Mansouri',
    role: 'Particulier',
    content: 'J\'ai souscrit à mon assurance auto et habitation en quelques minutes. Le service client est impeccable et les garanties sont très claires.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5
  },
  {
    id: '3',
    name: 'Youssef Alami',
    role: 'Professionnel Libéral',
    content: 'La RC Pro proposée par AXA Casablanca est la plus complète que j\'ai trouvée. Un grand merci pour les conseils avisés lors de la souscription.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    rating: 4
  }
];
