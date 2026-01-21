export interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  projectType: string;
  estimatedBudget: string;
}

export interface FormStatus {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  project_type: string;
  estimated_budget: string;
}

export interface CaseStudy {
  id?: string;
  title: string;
  client?: string;
  company: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
  metrics?: { label: string; value: string }[];
  technologies?: string[];
  results?: string[];
}

export interface Client {
  id?: string;
  name: string;
  logo: string;
  industry: string;
  description?: string;
}

export interface ExpertiseArea {
  id?: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  level: number;
  skills?: string[];
}

export interface FooterSection {
  id?: string;
  title: string;
  links: { label: string; path: string }[];
}

export interface Methodology {
  id?: string;
  title: string;
  description: string;
  steps?: string[];
  icon?: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

export interface ProofPoint {
  id?: string;
  metric?: string;
  label?: string;
  title: string;
  icon: string;
  description?: string;
}

export interface TeamMember {
  id?: string;
  name: string;
  role: string;
  bio?: string;
  imageUrl?: string;
  background: string;
  expertise?: string[];
  socialLinks?: SocialLink[];
}

export interface PortfolioProject {
  id?: string;
  title: string;
  category?: string;
  description: string;
  company: string;
  imageUrl?: string;
  technologies?: string[];
  link?: string;
  results?: string[];
}

export interface Service {
  id?: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}
