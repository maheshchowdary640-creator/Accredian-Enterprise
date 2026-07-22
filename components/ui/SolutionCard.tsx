import React from "react";
import { Card } from "./Card";
import { Activity, BrainCircuit, ServerIcon, ArrowRight } from "../icons";

interface SolutionCardProps {
  title: string;
  description: string;
  iconName: "Activity" | "BrainCircuit" | "ServerIcon";
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  iconName
}) => {
  const renderIcon = () => {
    const iconClass = "w-6 h-6 text-blue-600 transition-transform duration-300 group-hover:scale-110";
    switch (iconName) {
      case "Activity":
        return <Activity className={iconClass} />;
      case "BrainCircuit":
        return <BrainCircuit className={iconClass} />;
      case "ServerIcon":
        return <ServerIcon className={iconClass} />;
      default:
        return <Activity className={iconClass} />;
    }
  };

  return (
    <Card
      glowOnHover
      glowColor="blue"
      className="p-8 flex flex-col justify-between h-full group"
    >
      <div className="flex flex-col gap-6">
        {/* Icon slot */}
        <div className="w-12 h-12 rounded-xl bg-blue-50/50 flex items-center justify-center border border-blue-100/50 self-start group-hover:bg-blue-50 transition-colors duration-300">
          {renderIcon()}
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-205">
            {title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="pt-8">
        <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors focus:outline-none focus-visible:underline focus-visible:text-blue-700 cursor-pointer select-none">
          Learn More
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </Card>
  );
};

export default SolutionCard;
