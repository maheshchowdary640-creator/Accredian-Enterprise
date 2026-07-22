import React from "react";
import { Card } from "./Card";
import {
  Activity,
  BrainCircuit,
  ShieldAlert,
  Route,
  DatabaseIcon,
  LockIcon
} from "../icons";

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: "Activity" | "BrainCircuit" | "ShieldAlert" | "Route" | "DatabaseIcon" | "LockIcon";
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconName
}) => {
  const renderIcon = () => {
    const iconClass = "w-5 h-5 text-indigo-600 transition-transform duration-300 group-hover:scale-110";
    switch (iconName) {
      case "Activity":
        return <Activity className={iconClass} />;
      case "BrainCircuit":
        return <BrainCircuit className={iconClass} />;
      case "ShieldAlert":
        return <ShieldAlert className={iconClass} />;
      case "Route":
        return <Route className={iconClass} />;
      case "DatabaseIcon":
        return <DatabaseIcon className={iconClass} />;
      case "LockIcon":
        return <LockIcon className={iconClass} />;
      default:
        return <Activity className={iconClass} />;
    }
  };

  return (
    <Card
      glowOnHover
      glowColor="indigo"
      className="p-6 flex flex-col gap-4 group"
    >
      {/* Icon frame */}
      <div className="w-10 h-10 rounded-lg bg-indigo-50/50 flex items-center justify-center border border-indigo-100/30 group-hover:bg-indigo-50 transition-colors duration-300">
        {renderIcon()}
      </div>

      <div className="space-y-2">
        <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-200">
          {title}
        </h4>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default FeatureCard;
