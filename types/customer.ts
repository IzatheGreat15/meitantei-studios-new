
export type CustomerType = "Individual" | "Business";

export type CustomerStatus = "Active" | "Archived";

export type CustomerSource =
  | "Manual"
  | "Enquiry"
  | "Booking"
  | "Import";

export type CustomerTab =
  | "Overview"
  | "Enquiries"
  | "Quotes"
  | "Jobs"
  | "Notes";

export interface CustomerAddress {
  line1: string;
  line2?: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
}

export interface Customer {
  id: string;
  reference: string;

  type: CustomerType;
  status: CustomerStatus;
  source: CustomerSource;

  firstName: string;
  lastName: string;
  companyName?: string;

  email: string;
  phone: string;

  address?: CustomerAddress;

  notes: string;

  createdAt: string;
  updatedAt: string;

  // IDs linking this customer to other records.
  enquiryIds: string[];
  quoteIds: string[];
  jobIds: string[];

  // Future tenant-configurable fields.
  customFields: Record<string, unknown>;
}

export interface CustomerFormValues {
  type: CustomerType;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;

  addressLine1: string;
  addressLine2: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;

  notes: string;
}
