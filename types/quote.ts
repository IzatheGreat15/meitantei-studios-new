
export type QuoteStatus =
  | "Draft"
  | "Pending approval"
  | "Sent"
  | "Accepted"
  | "Declined"
  | "Expired";

export interface QuoteLineItem {
  id: string;
  serviceId?: string;
  description: string;
  quantity: number;

  // Default price from the service catalogue when the item is added.
  defaultUnitPrice: number;

  // Actual unit price used in this quote. Can be overridden.
  unitPrice: number;
}

export interface Quote {
  id: string;
  reference: string;
  customerName: string;
  customerEmail: string;
  enquiryReference?: string;
  status: QuoteStatus;
  createdAt: string;
  validUntil: string;
  lineItems: QuoteLineItem[];
  discount: number;
  taxRate: number;
  notes: string;
}

export interface ServiceOption {
  id: string;
  name: string;
  description: string;
  defaultPrice: number;
  unitLabel: string;
}
