
export type EnquiryStatus =
  | "New"
  | "In review"
  | "Awaiting information"
  | "Preparing quote"
  | "Quoted"
  | "Converted"
  | "Declined";

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export interface Enquiry {
  id: string;
  reference: string;

  // Common fields shared across all industries
  customerName: string;
  email: string;
  phone?: string;
  serviceId?: string;
  serviceName: string;
  status: EnquiryStatus;
  receivedAt: string;

  // A short summary for the table
  summary: string;

  // Industry-specific answers from the enquiry form
  formAnswers: Record<string, JsonValue>;

  // Preserve the form definition as it existed when submitted
  formSchemaSnapshot: FormFieldSnapshot[];

  // Internal notes for the business
  internalNotes?: string;
}

export interface FormFieldSnapshot {
  key: string;
  label: string;
  type: string;
}
