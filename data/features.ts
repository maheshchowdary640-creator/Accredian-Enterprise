export interface SolutionData {
  id: string;
  title: string;
  description: string;
  iconName: "Activity" | "BrainCircuit" | "ServerIcon";
}

export interface FeatureData {
  id: string;
  title: string;
  description: string;
  iconName: "Activity" | "BrainCircuit" | "ShieldAlert" | "Route" | "DatabaseIcon" | "LockIcon";
}

export const ENTERPRISE_SOLUTIONS: SolutionData[] = [
  {
    id: "sol-1",
    title: "5G & Telecom Observability",
    description: "Guarantee ultra-reliable low latency (URLLC) slices across virtualized RAN components, cell sites, and core networks with edge-native collectors.",
    iconName: "Activity"
  },
  {
    id: "sol-2",
    title: "Low-Latency Trading Auditing",
    description: "Assure trade execution integrity with microsecond-precision hardware timestamps (PTP IEEE 1588) to capture transient queue micro-bursts.",
    iconName: "BrainCircuit"
  },
  {
    id: "sol-3",
    title: "Cloud-Native Observability",
    description: "Trace transaction paths and transport latencies within Kubernetes clusters and distributed service meshes using zero-overhead eBPF probes.",
    iconName: "ServerIcon"
  }
];

export const TECHNICAL_FEATURES: FeatureData[] = [
  {
    id: "feat-1",
    title: "eBPF Socket Tracing",
    description: "Collect transport metrics and socket-level call times directly from the OS kernel without editing application code or restarting hosts.",
    iconName: "Activity"
  },
  {
    id: "feat-2",
    title: "IEEE 1588 Timing Sync",
    description: "Achieve nanosecond-precision hardware timestamps to document the exact transit times of fast trade executions and cloud RPCs.",
    iconName: "DatabaseIcon"
  },
  {
    id: "feat-3",
    title: "ML Anomaly Profiling",
    description: "Establish dynamic operation baselines that automatically separate regular peak hours from genuine server congestion or buffer bloat.",
    iconName: "BrainCircuit"
  },
  {
    id: "feat-4",
    title: "Encrypted Traffic Security",
    description: "Scan traffic signatures and check compliance on TLS 1.3 encrypted packet flows passively without requiring decapsulation proxies.",
    iconName: "LockIcon"
  },
  {
    id: "feat-5",
    title: "Proactive Synthetic Testing",
    description: "Inject lightweight test traffic along application paths to detect WAN routing updates and verify SLAs before customer complaints arise.",
    iconName: "Route"
  },
  {
    id: "feat-6",
    title: "SIEM API Webhooks",
    description: "Instantly route high-priority performance alerts or security disclosures to standard enterprise dashboards like Splunk, Sentinel, and QRadar.",
    iconName: "ShieldAlert"
  }
];
