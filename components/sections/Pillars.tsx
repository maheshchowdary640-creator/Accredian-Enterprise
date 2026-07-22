"use client";

import React, { useState } from "react";
import { CORE_PILLARS } from "../../data/content";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Activity, BrainCircuit, ShieldAlert, Route, ArrowRight, CheckIcon } from "../icons";

export const Pillars: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Helper to resolve icon by string name
  const renderIcon = (name: string, isHovered: boolean) => {
    const props = {
      size: 24,
      className: `transition-all duration-300 ${
        isHovered ? "text-accent-cyan scale-110" : "text-slate-400"
      }`
    };

    switch (name) {
      case "Activity":
        return <Activity {...props} />;
      case "BrainCircuit":
        return <BrainCircuit {...props} />;
      case "ShieldAlert":
        return <ShieldAlert {...props} />;
      case "Route":
        return <Route {...props} />;
      default:
        return <Activity {...props} />;
    }
  };

  return (
    <section id="pillars" className="py-24 relative overflow-hidden bg-brand-dark/30">
      {/* Decorative side lights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <Badge variant="purple" size="md">
            CORE PLATFORM CAPABILITIES
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Engineering Precision. Mastering Network Observability.
          </h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed">
            Eliminate traditional visibility blindspots. NetPrism connects the transport layers of physical sites, virtual clouds, and private edges into a unified analytical stream.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_PILLARS.map((pillar) => {
            const isHovered = hoveredCard === pillar.id;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setHoveredCard(pillar.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card
                  glowOnHover
                  glowColor={pillar.id === "telemetry" || pillar.id === "testing" ? "blue" : "indigo"}
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon & Headline */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                        {renderIcon(pillar.iconName, isHovered)}
                      </div>
                      <Badge variant={pillar.id === "telemetry" || pillar.id === "testing" ? "cyan" : "purple"} size="sm">
                        {pillar.tagline}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-8">
                      {pillar.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckIcon size={12} className="text-accent-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics Footer */}
                  <div className="border-t border-white/5 pt-4 grid grid-cols-2 gap-4">
                    {pillar.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-lg font-bold font-mono text-white">
                          {metric.value}
                        </span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                          {metric.label}
                        </span>
                      </div>
                    ))}
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

export default Pillars;
