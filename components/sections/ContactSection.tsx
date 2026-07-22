"use client";

import React, { useState } from "react";
import { FormInput } from "../ui/FormInput";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setGeneralError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const json = await res.json();

      if (!res.ok) {
        if (json.errors) {
          setErrors(json.errors);
        } else {
          setGeneralError(json.message || "An unexpected error occurred.");
        }
        setLoading(false);
        return;
      }

      setSuccessMessage(json.message);
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setGeneralError("Network connection failure. Please try again.");
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
    setSuccess(false);
    setSuccessMessage(null);
    setErrors({});
    setGeneralError(null);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left: Contact Info details */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-6">
            <Badge variant="cyan" size="md" className="bg-blue-50 text-blue-700 border-blue-100">
              Connect With Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Let's Discuss Your Observability Metrics
            </h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-md">
              Need custom integrations? Speak with our engineering architects to design an edge-native capture plan that works for your environment.
            </p>
          </div>

          {/* Core Info rows */}
          <div className="space-y-8 mt-12 lg:mt-0 font-sans">
            <div className="flex flex-col gap-1 border-l-2 border-blue-600 pl-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                EMAIL DIRECTORY
              </span>
              <a href="mailto:solutions@netprism.com" className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors">
                solutions@netprism.com
              </a>
            </div>

            <div className="flex flex-col gap-1 border-l-2 border-indigo-600 pl-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                OFFICE HEADQUARTERS
              </span>
              <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                NetPrism Technologies, Inc.<br />
                500 Innovation Parkway, Suite 1200<br />
                San Francisco, CA 94107
              </p>
            </div>

            <div className="flex flex-col gap-1 border-l-2 border-teal-600 pl-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                SLA ASSURANCES
              </span>
              <p className="text-xs text-slate-500 leading-normal">
                Standard technical queries are routed to senior support staff under 2 business hours.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form element */}
        <div className="lg:col-span-7">
          <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 md:p-10 shadow-soft-sm relative overflow-hidden">
            
            {success ? (
              <div className="text-center py-10 flex flex-col items-center gap-5 animate-[fadeIn_0.4s_ease-out]">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Success</h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-2 max-w-sm mx-auto">
                    {successMessage || "Thank you for contacting us."}
                  </p>
                </div>

                <Button variant="cyan" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 mt-2" onClick={handleReset}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  Submit Integration Query
                </h3>

                {generalError && (
                  <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-3.5 text-xs text-red-500 font-semibold">
                    {generalError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <FormInput
                    label="Name"
                    id="name"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />

                  {/* Email & Company Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormInput
                      label="Email"
                      id="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                    />

                    <FormInput
                      label="Company"
                      id="company"
                      required
                      placeholder="Acme Systems"
                      value={formData.company}
                      onChange={handleChange}
                      error={errors.company}
                    />
                  </div>

                  {/* Message Input */}
                  <FormInput
                    label="Message Details"
                    id="message"
                    type="textarea"
                    required
                    placeholder="Briefly describe your environment (SaaS scale, RAN nodes, latency tolerances)..."
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    rows={4}
                  />

                  <Button
                    variant="cyan"
                    type="submit"
                    className="w-full justify-center text-center bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 shadow-md shadow-blue-500/10"
                    isLoading={loading}
                  >
                    Submit Query
                  </Button>
                </form>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
