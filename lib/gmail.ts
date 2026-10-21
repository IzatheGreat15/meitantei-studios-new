
import { google } from "googleapis";

function getGmailClient() {
  const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI,
    GOOGLE_REFRESH_TOKEN,
  } = process.env;

  const requiredEnvVars = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
  GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
};

console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
  console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET);
  console.log("GOOGLE_REDIRECT_URI:", process.env.GOOGLE_REDIRECT_URI);
  console.log("GOOGLE_REFRESH_TOKEN:", process.env.GOOGLE_REFRESH_TOKEN);
  console.log("GMAIL_SENDER_EMAIL:", process.env.GMAIL_SENDER_EMAIL);
  console.log("CONTACT_RECIPIENT_EMAIL:", process.env.CONTACT_RECIPIENT_EMAIL);

const missing = Object.entries(requiredEnvVars)
  .filter(([, value]) => !value?.trim())
  .map(([key]) => key);

if (missing.length > 0) {
  console.error("Missing environment variables:", missing);

  throw new Error(
    `Missing Google Gmail environment variables: ${missing.join(", ")}`,
  );
}

  if (
    !GOOGLE_CLIENT_ID ||
    !GOOGLE_CLIENT_SECRET ||
    !GOOGLE_REDIRECT_URI ||
    !GOOGLE_REFRESH_TOKEN
  ) {
    throw new Error("Missing Google Gmail environment variables.");
  }

  const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI,
  );

  oauth2Client.setCredentials({
    refresh_token: GOOGLE_REFRESH_TOKEN,
  });

  return google.gmail({
    version: "v1",
    auth: oauth2Client,
  });
}

function encodeEmail(value: string) {
  return Buffer.from(value, "utf-8").toString("base64url");
}

interface SendEmailOptions {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}

export async function sendGmail({
  to,
  subject,
  text,
  replyTo,
}: SendEmailOptions) {
  const sender = process.env.GMAIL_SENDER_EMAIL;

  if (!sender) {
    throw new Error("GMAIL_SENDER_EMAIL is not configured.");
  }

  const headers = [
    `From: ${sender}`,
    `To: ${to}`,
    `Subject: =?UTF-8?B?${encodeEmail(subject)}?=`,
    ...(replyTo ? [`Reply-To: ${replyTo}`] : []),
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
  ];

  const message = [
    ...headers,
    "",
    text,
  ].join("\r\n");

  const raw = Buffer.from(message, "utf-8").toString("base64url");

  const gmail = getGmailClient();

  await gmail.users.messages.send({
    userId: "me",
    requestBody: { raw },
  });
}
