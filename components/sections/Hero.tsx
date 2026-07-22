"use client";

import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight } from "../icons";

interface HeroProps {
  onBookDemoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookDemoClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white enterprise-grid">
      {/* Soft gradient lighting behind content */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[350px] h-[350px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        
        {/* Left Column: Headline and CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start gap-8 text-left">
          
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            Observability Platform v2.4
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Unified observability.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500">
              Absolute precision.
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
            Consolidate high-throughput network packets, distributed container workflows, and active path testing into real-time, microsecond-resolution insights. Isolate bottlenecks and safeguard SLA boundaries.
          </p>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <Button
              variant="cyan"
              size="lg"
              onClick={onBookDemoClick}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold px-8 py-3.5 shadow-md shadow-blue-500/10 active:scale-95 transition-all"
            >
              Request Demo
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              href="#contact"
              rightIcon={<ArrowRight size={16} />}
              className="border-slate-200 text-slate-700 hover:bg-slate-50 rounded-full font-semibold px-8 py-3.5"
            >
              Learn More
            </Button>
          </div>

          {/* Core Trust Indicators */}
          <div className="flex items-center gap-8 mt-6 border-t border-slate-100 pt-6 w-full max-w-lg">
            <div>
              <div className="text-xl font-bold text-slate-900 font-mono">100Gbps</div>
              <p className="text-xs text-slate-500 font-medium">Wire-rate capture</p>
            </div>
            <div className="border-l border-slate-150 h-8" />
            <div>
              <div className="text-xl font-bold text-slate-900 font-mono">82%</div>
              <p className="text-xs text-slate-500 font-medium">MTTR reduction</p>
            </div>
            <div className="border-l border-slate-150 h-8" />
            <div>
              <div className="text-xl font-bold text-slate-900 font-mono">&lt;0.8%</div>
              <p className="text-xs text-slate-500 font-medium">CPU Overhead</p>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract CSS & Gradient illustration */}
        <div className="lg:col-span-6 flex justify-center relative w-full h-[400px] lg:h-[480px]">
          {/* Main frame container */}
          <div className="relative w-full max-w-[460px] h-full flex items-center justify-center">
            
            {/* Glowing background circles for visual depth */}
            <div className="absolute w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 translate-x-12 translate-y-6" />
            <div className="absolute w-60 h-60 bg-teal-100 rounded-full blur-3xl opacity-50 -translate-x-12 -translate-y-6" />
            
            {/* Abstract connected telemetry node drawing */}
            <div className="relative w-72 h-72 rounded-full border border-slate-100 flex items-center justify-center animate-float shadow-soft-md bg-white/40 backdrop-blur-sm">
              <div className="w-56 h-56 rounded-full border border-dashed border-slate-200 flex items-center justify-center animate-[spin_40s_linear_infinite]">
                
                {/* Orbital nodes on the dashed border */}
                <div className="absolute top-0 w-3 h-3 rounded-full bg-blue-500 shadow shadow-blue-500/50" />
                <div className="absolute bottom-6 left-6 w-2.5 h-2.5 rounded-full bg-teal-500 shadow shadow-teal-500/50" />
                <div className="absolute right-0 w-2 h-2 rounded-full bg-indigo-500 shadow shadow-indigo-500/50" />
              </div>

              {/* Inner core Prism representation */}
              <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-teal-500 p-0.5 shadow-soft-lg flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  {/* Floating prism central graphic */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#blueIndigoTeal)"
                    strokeWidth="2.5"
                    className="w-12 h-12"
                  >
                    <defs>
                      <linearGradient id="blueIndigoTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="50%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#0d9488" />
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                    <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="2" y1="8.5" x2="22" y2="15.5" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Telemetry Cards (CSS visual elements) */}
            
            {/* Card 1: Latency */}
            <div className="absolute top-12 left-0 w-44 bg-white/80 backdrop-blur-md border border-slate-100 rounded-xl p-4 shadow-soft-md animate-float-slow select-none">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">RTT LATENCY</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              <div className="text-xl font-bold text-slate-800 font-mono">
                12.4<span className="text-xs font-semibold text-slate-500 ml-0.5">ms</span>
              </div>
              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden mt-2">
                <div className="bg-blue-600 h-1 rounded-full w-2/3" />
              </div>
            </div>

            {/* Card 2: Core Status */}
            <div className="absolute bottom-8 right-0 w-48 bg-white/85 backdrop-blur-md border border-slate-100 rounded-xl p-4 shadow-soft-lg animate-float select-none">
              <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider">ACTIVE INGESTION</span>
              </div>
              <p className="text-xs font-semibold text-slate-800">
                10B+ points daily scale
              </p>
              <div className="text-[9px] text-slate-500 font-mono mt-1">
                Zero telemetry packet drops
              </div>
            </div>

            {/* Micro connection line drawings */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <line x1="80" y1="120" x2="160" y2="180" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="380" y1="360" x2="280" y2="280" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
