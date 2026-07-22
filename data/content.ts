import { Pillar, UseCase, ResourceItem } from "../types";

export const CORE_PILLARS: Pillar[] = [
  {
    id: "telemetry",
    title: "Ultra-Precision Telemetry",
    tagline: "Microsecond Resolution Ingestion",
    description: "Capture every frame and track transaction round-trip times with microsecond-level precision. NetPrism senses and stores network flows without dropping packets or inducing performance overhead.",
    iconName: "Activity",
    features: [
      "Microsecond-level transaction tracking",
      "Non-intrusive flow capturing",
      "eBPF kernel-level traffic inspection",
      "Lossless data serialization pipelines"
    ],
    metrics: [
      { value: "100%", label: "Packet Capture Rate" },
      { value: "<0.8%", label: "Host CPU Overhead" }
    ]
  },
  {
    id: "diagnostics",
    title: "AI-Driven Diagnostics",
    tagline: "Autonomous Incident Isolation",
    description: "Move past noisy alert thresholds. Our AI-driven engine maps system dependencies, isolates micro-bursts, and pinpoints root causes across hybrid clouds, service providers, and multi-tenant systems.",
    iconName: "BrainCircuit",
    features: [
      "Dynamic baseline anomaly profiling",
      "Automated cross-layer telemetry correlation",
      "Micro-burst bottleneck alerts",
      "Prescriptive remediation recommendations"
    ],
    metrics: [
      { value: "82%", label: "Reduction in MTTR" },
      { value: "10B+", label: "Daily Data Points Analysed" }
    ]
  },
  {
    id: "security",
    title: "Decrypted Flow Security",
    tagline: "Passive Threat Monitoring",
    description: "Scan traffic signatures, monitor lateral movement, and run payload diagnostics directly on encrypted SSL/TLS 1.3 flows without costly decryption proxies or security compromises.",
    iconName: "ShieldAlert",
    features: [
      "Encrypted traffic analytics (ETA)",
      "Continuous compliance verification",
      "SIEM/SOAR immediate alert forwarding",
      "Zero-trust lateral flow analytics"
    ],
    metrics: [
      { value: "Zero", label: "Decryption Decapsulation Overhead" },
      { value: "99.4%", label: "Threat Detection Accuracy" }
    ]
  },
  {
    id: "testing",
    title: "Active Synthetic Testing",
    tagline: "Proactive Path Validation",
    description: "Validate link reliability, cloud interconnect speeds, and user application experiences before real users connect. NetPrism injects lightweight synthetic test traffic across multi-protocol environments.",
    iconName: "Route",
    features: [
      "Continuous path discovery mappings",
      "Multi-protocol synthetic injection",
      "SaaS endpoint latency simulations",
      "Proactive SLA warning alerts"
    ],
    metrics: [
      { value: "24/7", label: "Path Validation Coverage" },
      { value: "15+", label: "Protocol Standard Integrations" }
    ]
  }
];

export const USE_CASES: UseCase[] = [
  {
    id: "telecom",
    tabLabel: "Telecommunications & 5G",
    title: "Optimizing 5G RAN and Multi-Access Edge Compute (MEC)",
    subtitle: "Guarantee ultra-reliable low latency (URLLC) for next-generation network slices.",
    description: "Next-gen 5G deployments require rigorous performance guarantees. NetPrism allows operators to trace sessions across gNodeB base stations, virtualized gateways, and user planes, ensuring SLA fulfillment at the absolute network edge.",
    challenges: [
      "Isolating latency bottlenecks between virtualized RAN and packet core components",
      "Correlating cellular radio signal degradation with real-world user application performance",
      "Assuring strict SLA requirements for high-margin dedicated industrial network slices"
    ],
    results: [
      { value: "68%", label: "Faster network slice provisioning times" },
      { value: "4.2x", label: "Reduction in subscriber-reported dropping cases" },
      { value: "<2ms", label: "End-to-End Jitter Control Validation" }
    ],
    ctaText: "Explore 5G Solutions"
  },
  {
    id: "finance",
    tabLabel: "Financial Services",
    title: "Microsecond Latency Assurance for HFT Networks",
    subtitle: "Protect high-frequency trading revenues from invisible latency anomalies.",
    description: "In low-latency electronic trading, a 100-microsecond delay can represent millions in lost execution margin. NetPrism passive sensors sit directly on optical fibers to detect queue micro-bursts and buffer bloats with absolute timing accuracy.",
    challenges: [
      "Capturing packet sequences at full 100Gbps line-rates without altering traffic flows",
      "Providing high-precision hardware timestamps (PTP IEEE 1588) for regulatory compliance",
      "Pinpointing intermittent network micro-congestion that causes trade order drop-outs"
    ],
    results: [
      { value: "100ns", label: "Timestamp precision validation limit" },
      { value: "90%", label: "Fewer execution slip anomalies" },
      { value: "100Gbps", label: "Wire-rate passive packet inspection" }
    ],
    ctaText: "Read Trading Architecture"
  },
  {
    id: "cloud",
    tabLabel: "Cloud & Hyperscalers",
    title: "Observability Across Distributed Microservices",
    subtitle: "Trace traffic bottlenecks down to specific pods and serverless containers.",
    description: "Dynamic cloud architectures blur traditional network perimeters. NetPrism's lightweight eBPF agents capture request paths and transport latencies inside Kubernetes clusters and service meshes without modifying application code.",
    challenges: [
      "Tracking container performance anomalies across dynamic, transient serverless deployments",
      "Identifying slow network transactions across external public API endpoints",
      "Eliminating the developer overhead of manual logging and custom tracing integrations"
    ],
    results: [
      { value: "0%", label: "Application code modification needed" },
      { value: "12x", label: "Increase in container request tracing density" },
      { value: "<0.8%", label: "Host compute overhead footprint" }
    ],
    ctaText: "See Container Specs"
  },
  {
    id: "enterprise",
    tabLabel: "Global Enterprise",
    title: "End-to-End SaaS Performance Validation",
    subtitle: "Bridge the visibility gap between corporate branches and cloud SaaS backbones.",
    description: "Enterprise IT teams are held accountable for application performance they do not host. NetPrism synthetic probes proactively test application access paths over SD-WAN networks and public ISPs, resolving SaaS lags before users complain.",
    challenges: [
      "Determining if application performance lag lies in the local LAN, ISP paths, or SaaS host",
      "Continuous audit tracking of third-party cloud vendor SLA performance promises",
      "Mitigating troubleshooting cycles between branch networks and host SaaS data centers"
    ],
    results: [
      { value: "74%", label: "Decrease in SaaS performance support tickets" },
      { value: "30+", label: "Global SaaS applications pre-modeled" },
      { value: "15 min", label: "System integration deployment setup time" }
    ],
    ctaText: "View SD-WAN Case Study"
  }
];

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    id: "study-1",
    type: "Case Study",
    title: "Global Investment Bank Mitigates Slip Anomalies on Trading Floor",
    description: "How a leading investment bank integrated NetPrism microsecond packet sensors to capture transient buffer congestions, reducing order slippages by 38% in the first quarter of deployment.",
    date: "July 12, 2026",
    readTime: "8 min read",
    href: "#",
    tag: "Finance"
  },
  {
    id: "whitepaper-1",
    type: "Whitepaper",
    title: "Measuring 5G Network Slicing Performance: Standards and Best Practices",
    description: "An in-depth technical analysis outlining methodologies for tracking throughput, packet jitter, and edge compute execution delay in active network slices under heavy user density.",
    date: "June 28, 2026",
    readTime: "15 min read",
    href: "#",
    tag: "Telecommunications"
  },
  {
    id: "blog-1",
    type: "Blog",
    title: "Leveraging eBPF for Zero-Overhead Container Telemetry",
    description: "Explore the internal architecture of NetPrism's lightweight container agent. Learn how eBPF hooks into kernel network stacks to capture full telemetry without code changes.",
    date: "May 19, 2026",
    readTime: "6 min read",
    href: "#",
    tag: "Cloud Native"
  },
  {
    id: "study-2",
    type: "Case Study",
    title: "Tier-1 Carrier Standardizes SD-WAN Edge Telemetry",
    description: "A comprehensive case study explaining how an international telecommunications company rolled out active synthetic testing across 12,000 corporate locations to validate SD-WAN path shifts.",
    date: "April 11, 2026",
    readTime: "10 min read",
    href: "#",
    tag: "Enterprise"
  }
];
