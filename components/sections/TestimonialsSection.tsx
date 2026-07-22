import React from "react";
import { TestimonialCard } from "../ui/TestimonialCard";
import { Badge } from "../ui/Badge";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "NetPrism transformed our 5G slice performance audits. We isolated virtual RAN jitter anomalies inside hours instead of days, keeping cell connections stable.",
      authorName: "Marcus Chen",
      authorRole: "Director of Network SRE",
      companyName: "TeleRift",
      initials: "MC"
    },
    {
      quote: "In high-frequency electronic trading, a 100-microsecond delay is the difference between margin and loss. NetPrism's IEEE 1588 timing gave us absolute visibility.",
      authorName: "Sarah Lindqvist",
      authorRole: "VP of Infrastructure",
      companyName: "Vortex Capital",
      initials: "SL"
    },
    {
      quote: "Deploying NetPrism's container eBPF probes required zero code changes. We got instant visibility into request paths across 1,200 Kubernetes nodes.",
      authorName: "David Kross",
      authorRole: "Principal Cloud DevOps",
      companyName: "Nexus Cloud",
      initials: "DK"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50/50 border-t border-slate-100 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <Badge variant="purple" size="md" className="bg-indigo-50 text-indigo-700 border-indigo-100">
            Customer Success
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Endorsed by Top-Tier Telemetry Specialists
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed">
            Discover how global financial markets, carrier operators, and modern cloud providers deploy NetPrism to protect their operations daily.
          </p>
        </div>

        {/* Mapped testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((test, idx) => (
            <div key={idx}>
              <TestimonialCard
                quote={test.quote}
                authorName={test.authorName}
                authorRole={test.authorRole}
                companyName={test.companyName}
                initials={test.initials}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
