"use client";

import React, { useState } from "react";
import { USE_CASES } from "../../data/content";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { CheckIcon, ArrowRight } from "../icons";

export const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(USE_CASES[0].id);
  const currentCase = USE_CASES.find((item) => item.id === activeTab) || USE_CASES[0];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Glowing Mesh light behind use-cases */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <Badge variant="cyan" size="md">
            ENTERPRISE USE CASES
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Tailored Industry Solutions for Real-World Demands
          </h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed">
            See how organizations across various sectors trust NetPrism to validate their critical transactions, secure network paths, and assure customer satisfaction.
          </p>
        </div>

        {/* Tab Buttons bar (Responsive Scroll) */}
        <div className="flex border-b border-white/5 overflow-x-auto pb-px mb-12 scrollbar-none justify-start md:justify-center gap-2">
          {USE_CASES.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-6 py-3.5 text-sm font-semibold border-b-2 transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "border-accent-cyan text-accent-cyan"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                {item.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[400px]">
          {/* Details Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 animate-[fadeIn_0.5s_ease-out]">
            <div>
              <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-2 font-mono">
                {currentCase.subtitle}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                {currentCase.title}
              </h3>
            </div>
            
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              {currentCase.description}
            </p>

            <div className="space-y-3 w-full">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Key Observability Challenges Solved:
              </h4>
              <ul className="space-y-2.5">
                {currentCase.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
                    <CheckIcon size={16} className="text-accent-cyan mt-0.5 flex-shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="cyan" size="md" rightIcon={<ArrowRight size={14} />}>
              {currentCase.ctaText}
            </Button>
          </div>

          {/* Results Metric Column */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <Card glowOnHover glowColor="blue" className="w-full max-w-[380px] bg-slate-900/60">
              <div className="flex flex-col gap-6">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5 pb-3">
                  PROVEN OUTCOMES
                </span>
                
                <div className="space-y-6">
                  {currentCase.results.map((result, idx) => (
                    <div key={idx} className="flex flex-col border-b border-white/5 last:border-b-0 pb-4 last:pb-0">
                      <span className="text-3xl md:text-4xl font-extrabold font-mono text-white tracking-tight">
                        {result.value}
                      </span>
                      <span className="text-xs text-slate-400 mt-1 leading-normal">
                        {result.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
