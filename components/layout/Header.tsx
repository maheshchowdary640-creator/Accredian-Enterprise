"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { MenuIcon, XIcon } from "../icons";

interface HeaderProps {
  onBookDemoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookDemoClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Platform", href: "#features" },
    { label: "Resources", href: "#testimonials" },
    { label: "Company", href: "#stats" },
    { label: "Contact", href: "#contact" }
  ];

  // Listen for Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile drawer on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set background transparency based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-soft-sm py-4"
          : "bg-white border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-lg">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Net<span className="text-blue-600">Prism</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-lg cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="cyan"
            size="md"
            onClick={onBookDemoClick}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold px-6 shadow-sm shadow-blue-600/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Request Demo
          </Button>
        </div>

        {/* Mobile Hamburger toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-lg cursor-pointer"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
        >
          {mobileMenuOpen ? <XIcon size={24} aria-hidden="true" /> : <MenuIcon size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer menu overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-[73px] bottom-0 bg-white border-t border-slate-100 transition-all duration-300 transform z-40 ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <div className="h-full px-6 py-8 flex flex-col justify-between">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-semibold text-slate-700 hover:text-blue-600 border-b border-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 pb-12">
            <Button
              variant="cyan"
              className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 shadow-md shadow-blue-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookDemoClick();
              }}
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
