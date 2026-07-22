import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    const errors: { [key: string]: string } = {};

    if (!name || name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    if (!email) {
      errors.email = "Email address is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address.";
      }
    }

    if (!company || company.trim().length < 1) {
      errors.company = "Company name is required.";
    }

    if (!message || message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Validation failed." },
        { status: 400 }
      );
    }

    // Simulate lead registry lag
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting us."
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
