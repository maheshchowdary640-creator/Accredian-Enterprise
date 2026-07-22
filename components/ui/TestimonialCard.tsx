import React from "react";
import { Card } from "./Card";

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole: string;
  companyName: string;
  initials: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorRole,
  companyName,
  initials
}) => {
  return (
    <Card
      glowOnHover
      glowColor="indigo"
      className="p-8 flex flex-col justify-between h-full group"
    >
      {/* Decorative quote SVG mark */}
      <div className="absolute top-6 right-6 text-slate-100 select-none pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24" className="opacity-40" aria-hidden="true">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-4.995 3.566-4.995 7.151h5v8.7c0 2.2-1.8 4-4 4h-6.983zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-4.996 3.566-4.996 7.151h5v8.7c0 2.2-1.8 4-4 4h-5.995z"/>
        </svg>
      </div>

      <div className="flex-1">
        {/* Quote text block */}
        <p className="text-slate-700 italic text-sm md:text-base leading-relaxed relative z-10">
          "{quote}"
        </p>
      </div>

      {/* Author and Avatar info */}
      <div className="flex items-center gap-4 mt-8 border-t border-slate-50 pt-6">
        {/* Avatar placeholder with initials */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold font-mono shadow-md shadow-blue-500/10 flex-shrink-0" aria-hidden="true">
          {initials}
        </div>
        
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-bold text-slate-900 truncate">
            {authorName}
          </span>
          <span className="text-[11px] font-semibold text-slate-500 truncate uppercase tracking-wider">
            {authorRole} at <span className="text-blue-600 font-bold">{companyName}</span>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
