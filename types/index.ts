export interface SubNavItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  megaMenu?: {
    categories: {
      title: string;
      items: SubNavItem[];
    }[];
    featured?: {
      title: string;
      description: string;
      ctaText: string;
      href: string;
      tag: string;
    };
  };
}

export interface Pillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  metrics: { value: string; label: string }[];
}

export interface UseCase {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  description: string;
  challenges: string[];
  results: { value: string; label: string }[];
  ctaText: string;
}

export interface TelemetryMetrics {
  latency: number;
  jitter: number;
  packetLoss: number;
  throughput: number;
  anomalyDetected: boolean;
  status: "optimal" | "warning" | "critical";
  timestamp: string;
}

export interface TelemetryData {
  region: string;
  metrics: TelemetryMetrics;
  history: {
    time: string;
    latency: number;
    throughput: number;
  }[];
}

export interface ResourceItem {
  id: string;
  type: "Case Study" | "Whitepaper" | "Blog" | "Press Release";
  title: string;
  description: string;
  date: string;
  readTime: string;
  href: string;
  tag: string;
}

export interface DemoRequestBody {
  fullName: string;
  email: string;
  companyName: string;
  role: string;
  useCase: string;
  notes?: string;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  title?: string;
}
