import React from "react";
import { StatCard } from "../ui/StatCard";
import { Badge } from "../ui/Badge";

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "100Gbps",
      label: "Line-Rate Capture",
      subtext: "Lossless packet capture throughput at host level."
    },
    {
      value: "<0.8%",
      label: "Agent CPU Usage",
      subtext: "Zero-latency telemetry hooks with minimum overhead."
    },
    {
      value: "82%",
      label: "MTTR Reduction",
      subtext: "Faster root cause ticket triage and path diagnostics."
    },
    {
      value: "10B+",
      label: "Daily Data Points",
      subtext: "Aggregated metric events ingested on analytics engine."
    }
  ];

  return (
    <section id="stats" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <Badge variant="cyan" size="md" className="bg-blue-50 text-blue-700 border-blue-100">
            Metrics & Scale
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Assuring Performance and Timing Integrity
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed">
            See the engineering statistics that make NetPrism the primary choice for telecommunications carriers, low-latency financial systems, and hyperscale cloud grids.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <StatCard
                value={stat.value}
                label={stat.label}
                subtext={stat.subtext}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
