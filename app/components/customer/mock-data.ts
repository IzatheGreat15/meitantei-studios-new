
import type { Customer } from "@/types/customer";

export const mockCustomers: Customer[] = [
  {
    id: "customer-001",
    reference: "CUS-0001",
    type: "Individual",
    status: "Active",
    source: "Enquiry",

    firstName: "Olivia",
    lastName: "Bennett",
    companyName: "",

    email: "olivia.bennett@example.com",
    phone: "+61 412 345 678",

    address: {
      line1: "12 Example Street",
      line2: "",
      suburb: "Subiaco",
      state: "WA",
      postcode: "6008",
      country: "Australia",
    },

    notes: "Prefers email communication.",

    createdAt: "2026-10-05T09:30:00.000Z",
    updatedAt: "2026-10-12T04:00:00.000Z",

    enquiryIds: ["enquiry-001", "enquiry-004"],
    quoteIds: ["quote-001"],
    jobIds: ["job-001"],

    customFields: {},
  },
  {
    id: "customer-002",
    reference: "CUS-0002",
    type: "Business",
    status: "Active",
    source: "Manual",

    firstName: "James",
    lastName: "Wilson",
    companyName: "Westside Property Group",

    email: "accounts@westside.example",
    phone: "+61 8 6000 1234",

    address: {
      line1: "45 Business Road",
      line2: "Suite 4",
      suburb: "Osborne Park",
      state: "WA",
      postcode: "6017",
      country: "Australia",
    },

    notes: "Invoices should be sent to the accounts email.",

    createdAt: "2026-09-22T02:00:00.000Z",
    updatedAt: "2026-10-15T05:30:00.000Z",

    enquiryIds: ["enquiry-002"],
    quoteIds: ["quote-002", "quote-003"],
    jobIds: ["job-002", "job-003"],

    customFields: {},
  },
  {
    id: "customer-003",
    reference: "CUS-0003",
    type: "Individual",
    status: "Active",
    source: "Manual",

    firstName: "Noah",
    lastName: "Williams",
    companyName: "",

    email: "noah.williams@example.com",
    phone: "+61 433 222 111",

    address: {
      line1: "8 Sample Avenue",
      suburb: "Mount Lawley",
      state: "WA",
      postcode: "6050",
      country: "Australia",
    },

    notes: "",

    createdAt: "2026-10-18T03:00:00.000Z",
    updatedAt: "2026-10-18T03:00:00.000Z",

    enquiryIds: [],
    quoteIds: [],
    jobIds: [],

    customFields: {},
  },
];
