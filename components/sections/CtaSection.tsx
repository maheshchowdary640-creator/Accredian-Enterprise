import React from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ArrowRight } from "../icons";

interface CtaSectionProps {
  onBookDemoClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onBookDemoClick }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Banner with gradient background */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-8 md:p-14 text-center overflow-hidden shadow-soft-lg select-none">
          
          {/* Ambient overlay drawing (soft diagonal nodes) */}
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-white/5 blur-3xl rounded-full translate-x-12 -translate-y-12" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-white/5 blur-2xl rounded-full -translate-x-12 translate-y-12" />

          {/* Banner content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <Badge variant="cyan" size="md" className="bg-white/10 text-white border-white/20">
              Get Started Now
            </Badge>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Establish Absolute Observatory Diagnostics Today
            </h2>

            <p className="text-sm md:text-base text-blue-100 max-w-xl leading-relaxed">
              Speak with a solutions architect and provision a dynamic evaluation sandbox account in under two business hours.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={onBookDemoClick}
                className="bg-white text-blue-600 hover:bg-slate-50 rounded-full font-semibold px-8 py-3.5 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Request Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#contact"
                rightIcon={<ArrowRight size={16} />}
                className="border-white/30 text-white hover:bg-white/10 rounded-full font-semibold px-8 py-3.5 transition-all"
              >
                Contact Sales
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CtaSection;
