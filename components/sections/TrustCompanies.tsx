import React from "react";

export const TrustCompanies: React.FC = () => {
  const brands = [
    { name: "Vortex Cap", category: "FINANCE" },
    { name: "TeleRift Mobile", category: "TELECOM" },
    { name: "Nexus Cloud", category: "HYPERSCALE" },
    { name: "Finacle Bank", category: "BANKING" },
    { name: "Orion Net", category: "5G CORE" }
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-10 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Supporting heading */}
        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
          TRUSTED BY LEADERS IN ENTERPRISE TELEMETRY AND HIGH-FREQUENCY DATA
        </p>

        {/* Logo Strip Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center transition-all duration-300 hover:opacity-100 group cursor-default"
            >
              <div className="flex items-center gap-1.5">
                {/* SVG Prism node logo emblem */}
                <div className="w-2 h-2 rotate-45 border border-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300" />
                <span className="text-xs font-extrabold tracking-widest text-slate-600 group-hover:text-slate-800 uppercase transition-colors duration-250">
                  {brand.name.split(" ")[0]}
                  <span className="text-slate-400 font-light group-hover:text-blue-600 transition-colors duration-250 ml-0.5">
                    {brand.name.split(" ")[1] || ""}
                  </span>
                </span>
              </div>
              <span className="text-[8px] font-mono text-slate-400 tracking-wider uppercase mt-0.5 group-hover:text-slate-500">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustCompanies;
