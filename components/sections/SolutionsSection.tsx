import React from "react";
import { ENTERPRISE_SOLUTIONS } from "../../data/features";
import { SolutionCard } from "../ui/SolutionCard";
import { Badge } from "../ui/Badge";

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      {/* Background radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <Badge variant="cyan" size="md" className="bg-blue-50 text-blue-700 border-blue-100">
            Enterprise Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Tailored Assurances for High-Performance Infrastructures
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed">
            Eliminate traditional visibility blindspots. NetPrism provides dedicated telemetry integrations to fulfill the most demanding service requirements.
          </p>
        </div>

        {/* 3 Columns Grid for Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {ENTERPRISE_SOLUTIONS.map((sol) => (
            <div key={sol.id}>
              <SolutionCard
                title={sol.title}
                description={sol.description}
                iconName={sol.iconName}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;
