import React from "react";
import { Card } from "./Card";

interface StatCardProps {
  value: string;
  label: string;
  subtext: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  subtext
}) => {
  return (
    <Card
      glowOnHover
      glowColor="blue"
      className="p-8 flex flex-col justify-center items-center text-center select-none group"
    >
      {/* Value counter */}
      <span className="text-4xl md:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-indigo-600 tracking-tight">
        {value}
      </span>
      
      {/* Label */}
      <h4 className="text-base font-bold text-slate-900 mt-4 leading-snug">
        {label}
      </h4>
      
      {/* Subtext description */}
      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
        {subtext}
      </p>
    </Card>
  );
};

export default StatCard;
