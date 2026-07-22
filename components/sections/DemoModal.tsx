"use client";

import React, { useState, useEffect, useRef } from "react";
import { DemoRequestBody } from "../../types";
import { Button } from "../ui/Button";
import { FormInput } from "../ui/FormInput";
import { XIcon } from "../icons";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState<DemoRequestBody>({
    fullName: "",
    email: "",
    companyName: "",
    role: "",
    useCase: "",
    notes: ""
  });

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<any | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [generalError, setGeneralError] = useState<string | null>(null);

  // ARIA Dialog keyboard trap & escape handler
  useEffect(() => {
    if (!isOpen) return;

    // Put focus on the close button initially
    const modal = modalRef.current;
    if (!modal) return;

    const focusableSelector = 'button, [href], input, select, textarea, [tabindex="0"]';
    const focusables = modal.querySelectorAll(focusableSelector);
    const firstElement = focusables[0] as HTMLElement;
    const lastElement = focusables[focusables.length - 1] as HTMLElement;

    // Focus first interactive element
    setTimeout(() => {
      firstElement?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleReset();
        return;
      }

      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      const res = await fetch("/api/demo-request", {
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

      setSuccessData(json.details);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setGeneralError("Network connection failure. Please try again.");
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      companyName: "",
      role: "",
      useCase: "",
      notes: ""
    });
    setSuccessData(null);
    setErrors({});
    setGeneralError(null);
    onClose();
  };

  const roleOptions = [
    { value: "Telecom Engineer", label: "Telecom Core / RAN Architect" },
    { value: "HFT Developer", label: "HFT Network Engineering" },
    { value: "DevOps Specialist", label: "Cloud DevOps / K8s SRE" },
    { value: "Director of IT/SecOps", label: "IT Director / VP Engineering" },
    { value: "Other", label: "Other Specialist" }
  ];

  const useCaseOptions = [
    { value: "5G Slice Optimisation", label: "5G Radio/Core Observability" },
    { value: "HFT Jitter Assurance", label: "HFT Low-Latency Audit" },
    { value: "Kubernetes Traffic Tracing", label: "Kubernetes Microservices" },
    { value: "SD-WAN Path Testing", label: "SD-WAN SaaS Active Testing" }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        onClick={handleReset}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-lg bg-white border border-slate-100 rounded-3xl shadow-soft-lg p-6 md:p-8 z-10 overflow-hidden"
      >
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full pointer-events-none" />
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-lg cursor-pointer"
          aria-label="Close dialog"
        >
          <XIcon size={18} aria-hidden="true" />
        </button>

        {/* Success Confirmation Screen */}
        {successData ? (
          <div className="text-center py-6 flex flex-col items-center gap-5 animate-[fadeIn_0.4s_ease-out]">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">Request Registered</h3>
              <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto">
                Thank you for requesting an evaluation of NetPrism. Our team has provisioned a temporary instance code.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 w-full text-left font-mono text-xs text-slate-700 space-y-2">
              <div>
                <span className="text-slate-400 font-bold">Contact Person:</span> {successData.registeredTo}
              </div>
              <div>
                <span className="text-slate-400 font-bold">Organization:</span> {successData.companyName}
              </div>
              <div>
                <span className="text-slate-400 font-bold">Scheduled SLA:</span> {successData.scheduledContact}
              </div>
              <div className="border-t border-slate-200/60 pt-2 mt-2 text-blue-600 font-bold">
                <span className="text-slate-400 font-bold">Assigned Expert:</span> {successData.assignedRep}
              </div>
            </div>

            <Button
              variant="cyan"
              className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3"
              onClick={handleReset}
            >
              Return to Homepage
            </Button>
          </div>
        ) : (
          /* Demo request form screen */
          <div>
            <div className="mb-6 text-left">
              <h2 id="modal-title" className="text-xl font-extrabold text-slate-900">
                Book an Enterprise Demo
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Access a sandboxed evaluation account and speak with an architecture specialist.
              </p>
            </div>

            {generalError && (
              <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3 text-xs text-red-600 font-semibold" role="alert">
                {generalError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <FormInput
                label="Full Name"
                id="fullName"
                required
                placeholder="Jane Doe"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
              />

              {/* Corporate Email */}
              <FormInput
                label="Corporate Email"
                id="email"
                type="email"
                required
                placeholder="jane.doe@company.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              {/* Company & Role grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Company Name"
                  id="companyName"
                  required
                  placeholder="Acme Systems"
                  value={formData.companyName}
                  onChange={handleChange}
                  error={errors.companyName}
                />

                <FormInput
                  label="Job Function"
                  id="role"
                  type="select"
                  required
                  placeholder="Select Role..."
                  value={formData.role}
                  onChange={handleChange}
                  error={errors.role}
                  options={roleOptions}
                />
              </div>

              {/* Primary Use Case */}
              <FormInput
                label="Primary Use Case"
                id="useCase"
                type="select"
                required
                placeholder="Select Use Case..."
                value={formData.useCase}
                onChange={handleChange}
                error={errors.useCase}
                options={useCaseOptions}
              />

              {/* Notes */}
              <FormInput
                label="Additional Details"
                id="notes"
                type="textarea"
                placeholder="Deployment scale, timeline requirements..."
                value={formData.notes || ""}
                onChange={handleChange}
                rows={2}
              />

              {/* Submit button */}
              <Button
                variant="cyan"
                type="submit"
                className="w-full justify-center text-center mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3"
                isLoading={loading}
              >
                Request Access Code
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
