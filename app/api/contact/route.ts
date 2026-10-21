
import { NextRequest, NextResponse } from "next/server";
import { sendGmail } from "@/lib/gmail";

const allowedServices = [
  "Business website",
  "Website redesign",
  "Landing page",
  "Website maintenance",
  "Something else",
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const service =
      typeof body.service === "string" ? body.service.trim() : "";
    const details =
      typeof body.details === "string" ? body.details.trim() : "";

    // Validate the submitted form.
    if (
      !name ||
      name.length > 120 ||
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !allowedServices.includes(service) ||
      !details ||
      details.length > 5000
    ) {
      return NextResponse.json(
        { message: "Please check your form details and try again." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL;

    if (!recipient) {
      throw new Error("CONTACT_RECIPIENT_EMAIL is not configured.");
    }

    // 1. Send the enquiry to Meitantei Studios.
    await sendGmail({
      to: recipient,
      subject: `New website enquiry: ${service}`,
      replyTo: email,
      text: [
        "You received a new enquiry through Meitantei Studios.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Service: ${service}`,
        "",
        "Project details:",
        details,
      ].join("\n"),
    });

    // 2. Send a confirmation to the visitor.
    await sendGmail({
      to: email,
      subject: "Thanks for contacting Meitantei Studios!",
      text: [
        `Hi ${name},`,
        "",
        "Thanks for reaching out to Meitantei Studios!",
        "I've received your enquiry and will review your project details.",
        "I'll get back to you as soon as I can.",
        "",
        "Best regards,",
        "Meitantei Studios",
      ].join("\n"),
    });

    return NextResponse.json({
      message: "Your enquiry has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      {
        message:
          "We couldn't send your enquiry right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
