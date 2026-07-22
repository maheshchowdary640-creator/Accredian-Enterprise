import { NavItem } from "../types";

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    label: "Solutions",
    megaMenu: {
      categories: [
        {
          title: "By Industry",
          items: [
            {
              title: "Telecommunications & 5G",
              href: "#solutions",
              description: "Optimize virtualized radio access networks and core infrastructure with 5G cell-site observability.",
              badge: "5G Ready"
            },
            {
              title: "Financial Services",
              href: "#solutions",
              description: "Maintain microsecond-precision network monitoring for low-latency electronic trading platforms."
            },
            {
              title: "Global Enterprise & SD-WAN",
              href: "#solutions",
              description: "Isolate enterprise network performance bottlenecks across hybrid clouds and remote worksites."
            },
            {
              title: "Cloud & Hyperscalers",
              href: "#solutions",
              description: "Gain dynamic tenant-level visibility in high-throughput containerized environments."
            }
          ]
        },
        {
          title: "By Capability",
          items: [
            {
              title: "Threat Detection & NDR",
              href: "#pillars",
              description: "Analyze encrypted packet flows to identify lateral threats without introducing decryption latency.",
              badge: "SecOps"
            },
            {
              title: "Autonomous Root Cause",
              href: "#pillars",
              description: "Leverage machine learning telemetry analysis to resolve incident tickets up to 80% faster."
            },
            {
              title: "Active Synthetic Testing",
              href: "#pillars",
              description: "Proactively inject mock traffic to validate SaaS application paths before user traffic arrives."
            },
            {
              title: "Unified Cloud Observability",
              href: "#pillars",
              description: "Consolidate telemetry from AWS, Azure, GCP, and Kubernetes clusters into a single pane of glass."
            }
          ]
        }
      ],
      featured: {
        tag: "CASE STUDY",
        title: "Scaling Telecom Observability to 100M+ Devices",
        description: "Learn how a tier-1 operator reduced mean-time-to-resolution (MTTR) by 74% using NetPrism active sensors.",
        ctaText: "Read Success Story",
        href: "#insights"
      }
    }
  },
  {
    label: "Products",
    megaMenu: {
      categories: [
        {
          title: "Core Platform",
          items: [
            {
              title: "NetPrism Sensors",
              href: "#architecture",
              description: "Lightweight containerized agents, virtual taps, and physical capture appliances for raw traffic monitoring.",
              badge: "v2.4"
            },
            {
              title: "NetPrism Analytics Engine",
              href: "#architecture",
              description: "A high-performance cloud-native analytics backend running anomaly detection at scale."
            },
            {
              title: "NetPrism Portal",
              href: "#architecture",
              description: "An intuitive web interface for visualization, automated alerts, and multi-tenant diagnostics."
            }
          ]
        },
        {
          title: "Integrations & Add-ons",
          items: [
            {
              title: "OpenTelemetry Collector",
              href: "#architecture",
              description: "Incorporate OpenTelemetry standard metrics directly into NetPrism databases."
            },
            {
              title: "SecOps API Pipeline",
              href: "#architecture",
              description: "Stream alerts to SIEM/SOAR platforms like Splunk, Sentinel, and QRadar with minimal config."
            }
          ]
        }
      ],
      featured: {
        tag: "PRODUCT RELEASE",
        title: "NetPrism Sensor Core v2.4",
        description: "Introducing smart eBPF-based kernel tracing, reducing host resource utilization below 0.8%.",
        ctaText: "Explore Release Notes",
        href: "#architecture"
      }
    }
  },
  {
    label: "Resources",
    href: "#insights"
  },
  {
    label: "Pricing",
    href: "#cta"
  }
];
export const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "NetPrism Sensors", href: "#architecture" },
      { label: "Analytics Engine", href: "#architecture" },
      { label: "Prism Portal", href: "#architecture" },
      { label: "Security Analytics", href: "#pillars" },
      { label: "Release Notes", href: "#architecture" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { label: "Telecom & 5G", href: "#solutions" },
      { label: "Financial Services", href: "#solutions" },
      { label: "Enterprise SD-WAN", href: "#solutions" },
      { label: "Cloud Hyperscale", href: "#solutions" },
      { label: "Incident Triage", href: "#pillars" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "#insights" },
      { label: "Technical Whitepapers", href: "#insights" },
      { label: "API Reference", href: "#architecture" },
      { label: "System Status", href: "#livetelemetry" },
      { label: "Documentation", href: "#insights" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Security & Trust", href: "#" },
      { label: "Careers", href: "#", badge: "We're hiring!" },
      { label: "Contact Sales", href: "#cta" },
      { label: "Newsroom", href: "#insights" }
    ]
  }
];
