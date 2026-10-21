
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const error = request.nextUrl.searchParams.get("error");

  if (error) {
    return NextResponse.json(
      { error: `Google authorization failed: ${error}` },
      { status: 400 },
    );
  }

  if (!code) {
    return NextResponse.json(
      { error: "Missing authorization code." },
      { status: 400 },
    );
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.json(
      { error: "Google OAuth environment variables are missing." },
      { status: 500 },
    );
  }

  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUri,
  );

  try {
    const { tokens } = await oauth2Client.getToken(code);

    if (!tokens.refresh_token) {
      return NextResponse.json(
        {
          error:
            "Google did not return a refresh token. Revoke this app's access in your Google Account and authorize it again.",
        },
        { status: 400 },
      );
    }

    // Temporary local-development step:
    // Copy this token into .env.local, then remove this response.
    return NextResponse.json({
      message:
        "Google authorization succeeded. Copy the refresh token into .env.local.",
      refresh_token: tokens.refresh_token,
    });
  } catch (error) {
    console.error("Google OAuth callback failed:", error);

    return NextResponse.json(
      { error: "Failed to exchange the authorization code." },
      { status: 500 },
    );
  }
}
