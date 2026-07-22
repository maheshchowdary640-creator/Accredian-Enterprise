import React from "react";
import { TECHNICAL_FEATURES } from "../../data/features";
import { FeatureCard } from "../ui/FeatureCard";
import { Badge } from "../ui/Badge";

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50/50 border-t border-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <Badge variant="purple" size="md" className="bg-indigo-50 text-indigo-700 border-indigo-100">
            Platform Capabilities
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Designed for Precision Engineering at Scale
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed">
            From kernel-level hooks to real-time alerts, NetPrism unifies transport diagnostics under a single non-intrusive SaaS platform.
          </p>
        </div>

        {/* 6 Grid items (3 cols on large, 2 cols on med, 1 col on small) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {TECHNICAL_FEATURES.map((feat) => (
            <div key={feat.id}>
              <FeatureCard
                title={feat.title}
                description={feat.description}
                iconName={feat.iconName}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
