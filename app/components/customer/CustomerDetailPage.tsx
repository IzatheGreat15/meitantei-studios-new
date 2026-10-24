
"use client";

import { useState } from "react";
import {
  ArrowLeft,
  BriefcaseBusiness,
  ClipboardList,
  FileText,
  Mail,
  MapPin,
  Pencil,
  Phone,
  StickyNote,
  UserRound,
} from "lucide-react";

import type { Customer, CustomerTab } from "@/types/customer";

interface CustomerDetailPageProps {
  customer: Customer;
  onBack: () => void;
  onEdit: () => void;
}

const tabs: { label: CustomerTab; icon: typeof UserRound }[] = [
  { label: "Overview", icon: UserRound },
  { label: "Enquiries", icon: ClipboardList },
  { label: "Quotes", icon: FileText },
  { label: "Jobs", icon: BriefcaseBusiness },
  { label: "Notes", icon: StickyNote },
];

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function displayName(customer: Customer) {
  if (customer.type === "Business" && customer.companyName) {
    return customer.companyName;
  }

  return `${customer.firstName} ${customer.lastName}`.trim();
}

function EmptyRecords({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-dashed border-slate-200 p-10 text-center">
      <p className="font-medium text-slate-800">No {label.toLowerCase()} yet</p>
      <p className="mt-1 text-sm text-slate-500">
        Related {label.toLowerCase()} will appear here when connected.
      </p>
    </div>
  );
}

export default function CustomerDetailPage({
  customer,
  onBack,
  onEdit,
}: CustomerDetailPageProps) {
  const [activeTab, setActiveTab] = useState<CustomerTab>("Overview");

  const address = customer.address;
  const addressText = address
    ? [
        address.line1,
        address.line2,
        address.suburb,
        address.state,
        address.postcode,
        address.country,
      ]
        .filter(Boolean)
        .join(", ")
    : "No address added";

  return (
    <div className="space-y-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
      >
        <ArrowLeft size={16} />
        Back to customers
      </button>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-lg font-semibold text-blue-700">
              {displayName(customer)
                .split(/\s+/)
                .slice(0, 2)
                .map((part) => part[0])
                .join("")
                .toUpperCase()}
            </div>

            <div className="min-w-0">
              <h1 className="break-words text-2xl font-bold text-slate-900">
                {displayName(customer)}
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                {customer.reference} · {customer.type}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  customer.status === "Active"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-slate-100 text-slate-600"
                }`}>
                  {customer.status}
                </span>

                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                  Added via {customer.source}
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onEdit}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <Pencil size={16} />
            Edit customer
          </button>
        </div>

        <div className="mt-6 grid gap-4 border-t border-slate-100 pt-5 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <Mail size={18} className="mt-0.5 text-slate-400" />
            <div className="min-w-0">
              <p className="text-xs text-slate-500">Email</p>
              <p className="break-words text-sm font-medium text-slate-800">
                {customer.email || "Not provided"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone size={18} className="mt-0.5 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500">Phone</p>
              <p className="text-sm font-medium text-slate-800">
                {customer.phone || "Not provided"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500">Primary address</p>
              <p className="text-sm font-medium text-slate-800">
                {addressText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex gap-1 overflow-x-auto border-b border-slate-100 px-3 pt-2 sm:px-5">
          {tabs.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveTab(label)}
              className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-3 py-3 text-sm font-medium ${
                activeTab === label
                  ? "border-blue-700 text-blue-700"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        <div className="p-5 sm:p-6">
          {activeTab === "Overview" && (
            <div className="space-y-6">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Customer information
                </h2>

                <dl className="mt-4 grid gap-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm text-slate-500">First name</dt>
                    <dd className="mt-1 text-sm font-medium text-slate-800">
                      {customer.firstName || "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Last name</dt>
                    <dd className="mt-1 text-sm font-medium text-slate-800">
                      {customer.lastName || "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Business name</dt>
                    <dd className="mt-1 text-sm font-medium text-slate-800">
                      {customer.companyName || "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Created</dt>
                    <dd className="mt-1 text-sm font-medium text-slate-800">
                      {formatDate(customer.createdAt)}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <h2 className="font-semibold text-slate-900">
                  Record summary
                </h2>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { label: "Enquiries", count: customer.enquiryIds.length },
                    { label: "Quotes", count: customer.quoteIds.length },
                    { label: "Jobs", count: customer.jobIds.length },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-slate-50 p-4"
                    >
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="mt-1 text-2xl font-semibold text-slate-900">
                        {item.count}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "Enquiries" &&
            (customer.enquiryIds.length ? (
              <div className="space-y-3">
                {customer.enquiryIds.map((id) => (
                  <div
                    key={id}
                    className="rounded-lg border border-slate-200 p-4"
                  >
                    <p className="font-medium text-slate-900">{id}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Linked enquiry reference (mock data)
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyRecords label="Enquiries" />
            ))}

          {activeTab === "Quotes" &&
            (customer.quoteIds.length ? (
              <div className="space-y-3">
                {customer.quoteIds.map((id) => (
                  <div
                    key={id}
                    className="rounded-lg border border-slate-200 p-4"
                  >
                    <p className="font-medium text-slate-900">{id}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Linked quote reference (mock data)
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyRecords label="Quotes" />
            ))}

          {activeTab === "Jobs" &&
            (customer.jobIds.length ? (
              <div className="space-y-3">
                {customer.jobIds.map((id) => (
                  <div
                    key={id}
                    className="rounded-lg border border-slate-200 p-4"
                  >
                    <p className="font-medium text-slate-900">{id}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Linked job reference (mock data)
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyRecords label="Jobs" />
            ))}

          {activeTab === "Notes" && (
            <div className="space-y-3">
              <h2 className="font-semibold text-slate-900">
                Internal notes
              </h2>

              {customer.notes ? (
                <p className="whitespace-pre-wrap text-sm leading-6 text-slate-700">
                  {customer.notes}
                </p>
              ) : (
                <EmptyRecords label="Notes" />
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
