import { NextResponse } from "next/server";
import { DemoRequestBody } from "@/types";

export async function POST(request: Request) {
  try {
    const body: DemoRequestBody = await request.json();
    const { fullName, email, companyName, role, useCase, notes } = body;

    // Server-side validation
    const errors: { [key: string]: string } = {};

    if (!fullName || fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters.";
    }

    if (!email) {
      errors.email = "Email address is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address.";
      } else {
        // Flag public email providers for warning (Enterprise SaaS best practice)
        const publicDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com"];
        const domain = email.split("@")[1]?.toLowerCase();
        if (publicDomains.includes(domain)) {
          errors.email = "Please provide a valid corporate email address (e.g. name@company.com). We do not accept personal email accounts for enterprise evaluations.";
        }
      }
    }

    if (!companyName || companyName.trim().length < 1) {
      errors.companyName = "Company name is required.";
    }

    if (!role || role === "") {
      errors.role = "Please select your job function.";
    }

    if (!useCase || useCase === "") {
      errors.useCase = "Please select a primary use case.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Validation failed." },
        { status: 400 }
      );
    }

    // Simulate lead registration in enterprise CRM (Salesforce/Hubspot)
    // Wait for 1000ms to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Simulated lead ID and sales representative assignment
    const leadId = "L-" + Math.floor(100000 + Math.random() * 900000);
    const assignedRep = role.toLowerCase().includes("telecom") || useCase.toLowerCase().includes("telecom")
      ? "Sarah Jenkins (Telecom Observability Specialist)"
      : "David Miller (Enterprise Solutions Architect)";

    return NextResponse.json({
      success: true,
      message: "Lead successfully generated in CRM.",
      leadId,
      assignedRep,
      details: {
        registeredTo: fullName,
        companyName,
        email,
        assignedRep,
        scheduledContact: "Within 2 business hours"
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
