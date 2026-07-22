"use client";

import React from "react";

export const Footer: React.FC = () => {
  const footerColumns = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Security & Trust", href: "#" },
        { label: "Newsroom", href: "#" },
        { label: "Partners", href: "#" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Telecom & gNodeB", href: "#solutions" },
        { label: "HFT Latency Assurance", href: "#solutions" },
        { label: "Cloud Microservices", href: "#solutions" },
        { label: "Enterprise SD-WAN", href: "#solutions" },
        { label: "Threat NDR Response", href: "#solutions" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Case Studies", href: "#testimonials" },
        { label: "Technical Papers", href: "#testimonials" },
        { label: "API References", href: "#features" },
        { label: "Network status", href: "#stats" },
        { label: "Documentation", href: "#testimonials" }
      ]
    },
    {
      title: "Contact",
      links: [
        { label: "Sales & Evaluations", href: "#contact" },
        { label: "Technical Support", href: "#contact" },
        { label: "HQ Offices", href: "#contact" },
        { label: "Developer Community", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Top Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-slate-200/60">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest select-none">
                {col.title}
              </h5>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-semibold text-slate-600 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded px-1 -mx-1 transition-colors duration-200 cursor-pointer block w-fit"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Panel */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-semibold text-slate-500 select-none">
            © {new Date().getFullYear()} NetPrism Technologies, Inc. All rights reserved.
          </p>

          {/* Social media SVG list */}
          <div className="flex items-center gap-4">
            
            {/* LinkedIn */}
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-slate-200/60 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all active:scale-95 cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-slate-200/60 hover:bg-slate-900 hover:text-white flex items-center justify-center text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all active:scale-95 cursor-pointer"
              aria-label="X Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-slate-200/60 hover:bg-slate-900 hover:text-white flex items-center justify-center text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all active:scale-95 cursor-pointer"
              aria-label="GitHub Repository"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
