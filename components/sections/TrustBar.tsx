import React from "react";

export const TrustBar: React.FC = () => {
  const partners = [
    { name: "Vortex Capital", type: "Low-Latency HFT" },
    { name: "TeleRift Mobile", type: "Tier-1 Carrier" },
    { name: "Nexus Cloud Systems", type: "SaaS Hyperscaler" },
    { name: "Finacle Bank", type: "Global Investment" },
    { name: "Orion 5G Network", type: "Core Telecom" },
    { name: "Hyperion Edge", type: "Industrial IoT" }
  ];

  return (
    <section className="bg-slate-950/40 border-y border-white/5 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
          TRUSTED BY LEADERS IN HIGH-THROUGHPUT, LOW-LATENCY INFRASTRUCTURES
        </p>

        {/* Logos Marquee wrapper */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16 lg:gap-x-20 opacity-60">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="flex flex-col items-center justify-center transition-opacity duration-300 hover:opacity-100 group cursor-default"
            >
              <div className="flex items-center gap-1.5">
                {/* Simulated high-tech logo icon */}
                <div className="w-2.5 h-2.5 rotate-45 border border-accent-cyan bg-accent-cyan/10 group-hover:bg-accent-cyan transition-colors" />
                <span className="text-sm font-extrabold tracking-widest text-slate-200 uppercase group-hover:text-white transition-colors">
                  {partner.name.split(" ")[0]}
                  <span className="text-slate-500 font-light group-hover:text-accent-cyan transition-colors">
                    {partner.name.split(" ")[1] || ""}
                  </span>
                </span>
              </div>
              <span className="text-[9px] font-mono text-slate-500 mt-1 uppercase tracking-wider group-hover:text-slate-400">
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
