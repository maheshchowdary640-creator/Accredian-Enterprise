import React from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ArrowRight } from "../icons";

interface CtaProps {
  onBookDemoClick: () => void;
}

export const Cta: React.FC<CtaProps> = ({ onBookDemoClick }) => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Decorative cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="glass-panel p-8 md:p-12 border border-white/10 rounded-2xl relative overflow-hidden">
          {/* Top light bar */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent" />
          
          <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <Badge variant="cyan" size="md">
              GET IN TOUCH
            </Badge>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Establish Absolute Infrastructure Observability?
            </h2>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Join leading financial institutions, telecommunications carriers, and hyperscale SaaS vendors. Provision a secure sandbox instance in minutes.
            </p>

            <div className="flex flex-wrap gap-4 justify-center w-full sm:w-auto mt-4">
              <Button variant="cyan" size="lg" onClick={onBookDemoClick}>
                Request Access Code
              </Button>
              <a href="mailto:sales@netprism.com">
                <Button variant="outline" size="lg" rightIcon={<ArrowRight size={16} />}>
                  Speak with an Architect
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
