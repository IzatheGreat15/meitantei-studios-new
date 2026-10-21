
import { NextResponse } from "next/server";
import { sendGmail } from "@/lib/gmail";

export async function GET() {
  // Prevent accidental use in production.
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "This test route is development-only." },
      { status: 403 },
    );
  }

  try {
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL;

    if (!recipient) {
      throw new Error("CONTACT_RECIPIENT_EMAIL is not configured.");
    }

    await sendGmail({
      to: recipient,
      subject: "Meitantei Studios — Gmail API test",
      text: "Success! Your Next.js application can send email through the Gmail API.",
    });

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully.",
    });
  } catch (error) {
    console.error("Gmail test failed:", error);

    return NextResponse.json(
      { error: "Failed to send the test email. Check your server logs." },
      { status: 500 },
    );
  }
}
