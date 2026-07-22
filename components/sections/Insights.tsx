"use client";

import React, { useState } from "react";
import { RESOURCE_ITEMS } from "../../data/content";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { ArrowRight } from "../icons";

export const Insights: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Case Study", "Whitepaper", "Blog"];

  const filteredItems = filter === "All"
    ? RESOURCE_ITEMS
    : RESOURCE_ITEMS.filter((item) => item.type === filter);

  return (
    <section id="insights" className="py-24 relative overflow-hidden bg-brand-dark/30">
      {/* Glow overlays */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header and Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <Badge variant="purple" size="md" className="mb-4">
              RESOURCES & RESEARCH
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              NetPrism Knowledge & Tech Center
            </h2>
            <p className="text-sm md:text-base text-slate-400 mt-2">
              Stay updated with our technical publications, implementation blueprints, and network analytics engineering findings.
            </p>
          </div>

          {/* Filters */}
          <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-1 gap-1 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4.5 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap cursor-pointer ${
                  filter === cat
                    ? "bg-slate-800 text-accent-cyan"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat}s
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <a href={item.href} key={item.id} className="group block cursor-pointer">
              <Card
                glowOnHover
                glowColor={item.type === "Case Study" ? "blue" : "indigo"}
                className="h-full flex flex-col justify-between bg-slate-900/30"
              >
                <div>
                  {/* Top line: Category and Metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold font-mono tracking-widest text-slate-500 uppercase">
                      {item.type}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card footer details */}
                <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                  <Badge variant={item.type === "Case Study" ? "cyan" : "purple"} size="sm">
                    {item.tag}
                  </Badge>
                  <span className="inline-flex items-center text-xs font-semibold text-accent-cyan group-hover:text-white transition-colors gap-1.5">
                    Read Publication
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Card>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Insights;
