"use client";

import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Activity, BrainCircuit, ServerIcon } from "../icons";

export const Architecture: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      num: 1,
      title: "Prism Sensors",
      subtitle: "Capture & Stream",
      description: "Lightweight containerized agents, virtual taps, or physical appliances capture wire-rate packet flows and kernel operations at the network edge with microsecond timestamps.",
      icon: <Activity className="text-accent-cyan" size={24} />,
      details: ["eBPF socket tracing", "IEEE 1588 timing precision", "Non-intrusive container taps"]
    },
    {
      num: 2,
      title: "Analytics Engine",
      subtitle: "Ingest & Correlate",
      description: "Our high-throughput SaaS backend ingests streams, aggregates metrics, and runs anomaly-detection algorithms to map dependencies and filter background noise.",
      icon: <BrainCircuit className="text-accent-purple" size={24} />,
      details: ["AI/ML baseline learning", "10B+ events daily capacity", "Root-cause tree generation"]
    },
    {
      num: 3,
      title: "Prism Portal",
      subtitle: "Visualize & Triage",
      description: "A centralized dashboard displays telemetry, triggers alerts, and offers deep-dive diagnostic tools. Seamlessly integrate findings with standard corporate SIEMs.",
      icon: <ServerIcon className="text-accent-blue" size={24} />,
      details: ["Multi-tenant dashboard", "SIEM/SOAR webhooks", "Microsecond transaction charts"]
    }
  ];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-brand-dark/40">
      {/* Light background nodes */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center gap-4">
          <Badge variant="purple" size="md">
            PLATFORM ARCHITECTURE
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            How NetPrism Unifies Telemetry Pipelines
          </h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed">
            From raw packet captures at remote edge nodes to automated alerts in your SIEM console—explore our modular, high-capacity observability pipeline.
          </p>
        </div>

        {/* 3 Step Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative">
          
          {/* Connector line overlay (hidden on mobile, shown on lg) */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-blue opacity-25 z-0" />

          {steps.map((step, idx) => {
            const isHovered = activeStep === idx;
            
            return (
              <div
                key={step.num}
                className="relative z-10 flex flex-col"
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <Card
                  glowOnHover
                  glowColor={idx === 0 ? "blue" : idx === 1 ? "indigo" : "blue"}
                  className="flex-1 flex flex-col justify-between h-full bg-slate-900/40"
                >
                  <div>
                    {/* Header: Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center font-mono font-bold text-sm text-slate-300">
                        {step.num}
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                        {step.icon}
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-mono">
                        {step.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Bullet specs list */}
                  <div className="border-t border-white/5 pt-4">
                    <ul className="space-y-2">
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            idx === 0 ? "bg-accent-cyan" : idx === 1 ? "bg-accent-purple" : "bg-accent-blue"
                          }`} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
