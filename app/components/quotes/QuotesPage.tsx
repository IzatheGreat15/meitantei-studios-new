
"use client";

import { useMemo, useState } from "react";
import {
  Plus,
  Search,
  FileText,
  Send,
  Pencil,
  Trash2,
  X,
  ChevronDown,
  CheckCircle2,
  Clock3,
  CircleDollarSign,
  Copy,
} from "lucide-react";

import type {
  Quote,
  QuoteLineItem,
  QuoteStatus,
  ServiceOption,
} from "@/types/quote";
import CustomSelect from "../ui/CustomSelect";

const currency = "AUD";

const services: ServiceOption[] = [
  {
    id: "svc-001",
    name: "Plumbing Inspection",
    description: "Inspection and assessment",
    defaultPrice: 150,
    unitLabel: "inspection",
  },
  {
    id: "svc-002",
    name: "General Repair",
    description: "General labour and repairs",
    defaultPrice: 95,
    unitLabel: "hour",
  },
  {
    id: "svc-003",
    name: "Call-out Fee",
    description: "Travel and call-out",
    defaultPrice: 75,
    unitLabel: "visit",
  },
  {
    id: "svc-004",
    name: "Maintenance Service",
    description: "Scheduled maintenance",
    defaultPrice: 120,
    unitLabel: "service",
  },
  {
    id: "svc-005",
    name: "Custom Line Item",
    description: "Custom work or materials",
    defaultPrice: 0,
    unitLabel: "unit",
  },
];

const initialQuotes: Quote[] = [
  {
    id: "q-001",
    reference: "QUO-1001",
    customerName: "Daniel Cooper",
    customerEmail: "daniel@example.com",
    enquiryReference: "ENQ-1001",
    status: "Sent",
    createdAt: "2026-10-22",
    validUntil: "2026-11-05",
    lineItems: [
      {
        id: "li-001",
        serviceId: "svc-001",
        description: "Plumbing Inspection",
        quantity: 1,
        defaultUnitPrice: 150,
        unitPrice: 150,
      },
      {
        id: "li-002",
        serviceId: "svc-003",
        description: "Call-out Fee",
        quantity: 1,
        defaultUnitPrice: 75,
        unitPrice: 75,
      },
    ],
    discount: 0,
    taxRate: 10,
    notes: "Please confirm a suitable appointment time.",
  },
  {
    id: "q-002",
    reference: "QUO-1002",
    customerName: "Olivia Bennett",
    customerEmail: "olivia@example.com",
    status: "Draft",
    createdAt: "2026-10-22",
    validUntil: "2026-11-05",
    lineItems: [
      {
        id: "li-003",
        serviceId: "svc-004",
        description: "Maintenance Service",
        quantity: 2,
        defaultUnitPrice: 120,
        unitPrice: 110,
      },
    ],
    discount: 10,
    taxRate: 10,
    notes: "",
  },
  {
    id: "q-003",
    reference: "QUO-1003",
    customerName: "James Wilson",
    customerEmail: "james@example.com",
    status: "Accepted",
    createdAt: "2026-10-20",
    validUntil: "2026-11-03",
    lineItems: [
      {
        id: "li-004",
        serviceId: "svc-002",
        description: "General Repair",
        quantity: 3,
        defaultUnitPrice: 95,
        unitPrice: 95,
      },
    ],
    discount: 0,
    taxRate: 10,
    notes: "Work approved by customer.",
  },
];

const quoteStatuses: QuoteStatus[] = [
  "Draft",
  "Pending approval",
  "Sent",
  "Accepted",
  "Declined",
  "Expired",
];

const statusStyles: Record<QuoteStatus, string> = {
  Draft: "bg-slate-100 text-slate-700",
  "Pending approval": "bg-amber-50 text-amber-700",
  Sent: "bg-blue-50 text-blue-700",
  Accepted: "bg-emerald-50 text-emerald-700",
  Declined: "bg-red-50 text-red-700",
  Expired: "bg-orange-50 text-orange-700",
};

const customers = [
  { name: "Daniel Cooper", email: "daniel@example.com" },
  { name: "Olivia Bennett", email: "olivia@example.com" },
  { name: "James Wilson", email: "james@example.com" },
  { name: "Sophia Taylor", email: "sophia@example.com" },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency,
  }).format(value);
}

function formatDate(value: string) {
  if (!value) return "—";

  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

function makeId() {
  return crypto.randomUUID();
}

function createEmptyQuote(): Quote {
  const today = new Date();
  const expiry = new Date(today);
  expiry.setDate(expiry.getDate() + 14);

  const dateString = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  return {
    id: makeId(),
    reference: `QUO-${Date.now().toString().slice(-6)}`,
    customerName: "",
    customerEmail: "",
    status: "Draft",
    createdAt: dateString(today),
    validUntil: dateString(expiry),
    lineItems: [],
    discount: 0,
    taxRate: 10,
    notes: "",
  };
}

function calculateQuote(quote: Quote) {
  const subtotal = quote.lineItems.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );

  const discount = Math.min(Math.max(quote.discount, 0), subtotal);
  const taxableAmount = Math.max(0, subtotal - discount);
  const tax = taxableAmount * (quote.taxRate / 100);

  return {
    subtotal,
    discount,
    taxableAmount,
    tax,
    total: taxableAmount + tax,
  };
}

function StatusBadge({ status }: { status: QuoteStatus }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>(initialQuotes);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All statuses");
  const [editorQuote, setEditorQuote] = useState<Quote | null>(null);
  const [previewQuote, setPreviewQuote] = useState<Quote | null>(null);

  const filteredQuotes = useMemo(() => {
    const query = search.trim().toLowerCase();

    return quotes.filter((quote) => {
      const matchesSearch =
        !query ||
        quote.reference.toLowerCase().includes(query) ||
        quote.customerName.toLowerCase().includes(query) ||
        quote.customerEmail.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All statuses" || quote.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [quotes, search, statusFilter]);

  const totals = useMemo(
    () => ({
      all: quotes.length,
      drafts: quotes.filter((quote) => quote.status === "Draft").length,
      sent: quotes.filter((quote) => quote.status === "Sent").length,
      accepted: quotes.filter((quote) => quote.status === "Accepted").length,
    }),
    [quotes]
  );

  function saveQuote(quote: Quote) {
    setQuotes((current) => {
      const exists = current.some((item) => item.id === quote.id);

      return exists
        ? current.map((item) => (item.id === quote.id ? quote : item))
        : [quote, ...current];
    });

    setEditorQuote(null);
  }

  function duplicateQuote(quote: Quote) {
    const duplicate: Quote = {
      ...quote,
      id: makeId(),
      reference: `QUO-${Date.now().toString().slice(-6)}`,
      status: "Draft",
      createdAt: new Date().toISOString().slice(0, 10),
      lineItems: quote.lineItems.map((item) => ({
        ...item,
        id: makeId(),
      })),
    };

    setQuotes((current) => [duplicate, ...current]);
    setEditorQuote(duplicate);
  }

  function deleteQuote(id: string) {
    if (!window.confirm("Delete this quote? This cannot be undone.")) return;

    setQuotes((current) => current.filter((quote) => quote.id !== id));
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Quotes
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Create, customise, and manage customer quotes.
          </p>
        </div>

        <button
          onClick={() => setEditorQuote(createEmptyQuote())}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
        >
          <Plus size={17} />
          Create quote
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {[
          {
            label: "Total quotes",
            value: totals.all,
            icon: FileText,
          },
          {
            label: "Drafts",
            value: totals.drafts,
            icon: Pencil,
          },
          {
            label: "Awaiting response",
            value: totals.sent,
            icon: Clock3,
          },
          {
            label: "Accepted",
            value: totals.accepted,
            icon: CheckCircle2,
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500">{item.label}</p>
                <span className="rounded-lg bg-blue-50 p-2 text-blue-700">
                  <Icon size={18} />
                </span>
              </div>
              <p className="mt-3 text-2xl font-semibold text-slate-900">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:flex-row sm:items-center">
          <div className="relative min-w-0 flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search quote, customer, or email..."
              className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <CustomSelect
            value={statusFilter}
            onChange={setStatusFilter}
            ariaLabel="Filter quotes by status"
            className="w-full sm:w-48"
            options={[
              { label: "All statuses", value: "All statuses" },
              ...quoteStatuses.map((status) => ({
                label: status,
                value: status,
              })),
            ]}
          />
        </div>

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3 font-medium">Quote</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Created</th>
                <th className="px-5 py-3 font-medium">Valid until</th>
                <th className="px-5 py-3 font-medium">Total</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredQuotes.map((quote) => (
                <tr key={quote.id} className="hover:bg-slate-50/70">
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-slate-900">
                      {quote.reference}
                    </p>
                    {quote.enquiryReference && (
                      <p className="mt-1 text-xs text-slate-500">
                        {quote.enquiryReference}
                      </p>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-slate-800">
                      {quote.customerName || "No customer"}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {quote.customerEmail}
                    </p>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">
                    {formatDate(quote.createdAt)}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">
                    {formatDate(quote.validUntil)}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-slate-900">
                    {formatCurrency(calculateQuote(quote).total)}
                  </td>
                  <td className="px-5 py-4">
                    <StatusBadge status={quote.status} />
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-1">
                      <button
                        onClick={() => setPreviewQuote(quote)}
                        aria-label="Preview quote"
                        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                      >
                        <FileText size={16} />
                      </button>
                      <button
                        onClick={() => setEditorQuote({ ...quote })}
                        aria-label="Edit quote"
                        className="rounded-lg p-2 text-slate-500 hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => duplicateQuote(quote)}
                        aria-label="Duplicate quote"
                        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                      >
                        <Copy size={16} />
                      </button>
                      <button
                        onClick={() => deleteQuote(quote.id)}
                        aria-label="Delete quote"
                        className="rounded-lg p-2 text-slate-500 hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredQuotes.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center">
                    <p className="text-sm font-medium text-slate-700">
                      No quotes found
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Try changing your search or filters.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="divide-y divide-slate-100 md:hidden">
          {filteredQuotes.map((quote) => (
            <div key={quote.id} className="space-y-3 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {quote.reference}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {quote.customerName || "No customer"}
                  </p>
                </div>
                <StatusBadge status={quote.status} />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {formatDate(quote.createdAt)}
                </span>
                <span className="text-base font-semibold text-slate-900">
                  {formatCurrency(calculateQuote(quote).total)}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setPreviewQuote(quote)}
                  className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  Preview
                </button>
                <button
                  onClick={() => setEditorQuote({ ...quote })}
                  className="flex-1 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}

          {filteredQuotes.length === 0 && (
            <p className="p-8 text-center text-sm text-slate-500">
              No quotes found.
            </p>
          )}
        </div>
      </section>

      {editorQuote && (
        <QuoteEditor
          quote={editorQuote}
          onClose={() => setEditorQuote(null)}
          onSave={saveQuote}
        />
      )}

      {previewQuote && (
        <QuotePreview
          quote={previewQuote}
          onClose={() => setPreviewQuote(null)}
          onEdit={() => {
            setPreviewQuote(null);
            setEditorQuote({ ...previewQuote });
          }}
        />
      )}
    </div>
  );
}

function QuoteEditor({
  quote: initialQuote,
  onClose,
  onSave,
}: {
  quote: Quote;
  onClose: () => void;
  onSave: (quote: Quote) => void;
}) {
  const [quote, setQuote] = useState<Quote>(initialQuote);

  const totals = calculateQuote(quote);

  function updateQuote<K extends keyof Quote>(key: K, value: Quote[K]) {
    setQuote((current) => ({ ...current, [key]: value }));
  }

  function addLineItem(serviceId: string) {
    const service = services.find((item) => item.id === serviceId);
    if (!service) return;

    const lineItem: QuoteLineItem = {
      id: makeId(),
      serviceId: service.id,
      description: service.name,
      quantity: 1,
      defaultUnitPrice: service.defaultPrice,
      unitPrice: service.defaultPrice,
    };

    updateQuote("lineItems", [...quote.lineItems, lineItem]);
  }

  function updateLineItem(
    id: string,
    changes: Partial<QuoteLineItem>
  ) {
    updateQuote(
      "lineItems",
      quote.lineItems.map((item) =>
        item.id === id ? { ...item, ...changes } : item
      )
    );
  }

  function removeLineItem(id: string) {
    updateQuote(
      "lineItems",
      quote.lineItems.filter((item) => item.id !== id)
    );
  }

  function updateLineItemService(id: string, serviceId: string) {
    const service = services.find((item) => item.id === serviceId);
    if (!service) return;

    updateLineItem(id, {
      serviceId: service.id,
      description: service.name,
      defaultUnitPrice: service.defaultPrice,
      unitPrice: service.defaultPrice,
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40">
      <button
        aria-label="Close quote editor"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />

      <aside className="relative flex h-full w-full max-w-4xl flex-col bg-slate-50 shadow-2xl">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-7">
          <div>
            <p className="text-xs font-medium text-blue-700">
              {quote.reference}
            </p>
            <h2 className="mt-1 text-xl font-semibold text-slate-900">
              {quote.customerName ? "Edit quote" : "Create quote"}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </header>

        <div className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-7">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Customer and quote details
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Customer *
                </label>
                <CustomSelect
                  value={quote.customerEmail}
                  onChange={(email) => {
                    const customer = customers.find(
                      (item) => item.email === email
                    );
                    updateQuote("customerEmail", email);
                    updateQuote("customerName", customer?.name ?? "");
                  }}
                  ariaLabel="Select customer"
                  placeholder="Select customer"
                  className="w-full"
                  options={customers.map((customer) => ({
                    label: customer.name,
                    value: customer.email,
                  }))}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Status
                </label>
                <CustomSelect
                  value={quote.status}
                  onChange={(value) =>
                    updateQuote("status", value as QuoteStatus)
                  }
                  ariaLabel="Quote status"
                  className="w-full"
                  options={quoteStatuses.map((status) => ({
                    label: status,
                    value: status,
                  }))}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Quote date
                </label>
                <input
                  type="date"
                  value={quote.createdAt}
                  onChange={(event) =>
                    updateQuote("createdAt", event.target.value)
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Valid until
                </label>
                <input
                  type="date"
                  value={quote.validUntil}
                  onChange={(event) =>
                    updateQuote("validUntil", event.target.value)
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white">
            <div className="flex flex-col justify-between gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Line items
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Add services, materials, labour, or custom charges.
                </p>
              </div>

              <div className="w-full sm:w-64">
                <CustomSelect
                  value=""
                  onChange={addLineItem}
                  ariaLabel="Add a service"
                  placeholder="＋ Add a service"
                  className="w-full"
                  options={services.map((service) => ({
                    label: `${service.name} · ${formatCurrency(service.defaultPrice)}`,
                    value: service.id,
                  }))}
                />
              </div>
            </div>

            {quote.lineItems.length === 0 ? (
              <div className="p-10 text-center">
                <CircleDollarSign
                  size={30}
                  className="mx-auto text-slate-300"
                />
                <p className="mt-3 text-sm font-medium text-slate-700">
                  No line items yet
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Select a service above to start building this quote.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {quote.lineItems.map((item, index) => (
                  <div key={item.id} className="p-5">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-slate-900">
                        Item {index + 1}
                      </p>
                      <button
                        onClick={() => removeLineItem(item.id)}
                        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-red-600 hover:bg-red-50"
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
                      <div className="sm:col-span-5">
                        <label className="mb-1.5 block text-xs font-medium text-slate-500">
                          Description
                        </label>
                        <input
                          value={item.description}
                          onChange={(event) =>
                            updateLineItem(item.id, {
                              description: event.target.value,
                            })
                          }
                          className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                          placeholder="Describe the work or item"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-1.5 block text-xs font-medium text-slate-500">
                          Quantity
                        </label>
                        <input
                          type="number"
                          min="0.01"
                          step="0.01"
                          value={item.quantity}
                          onChange={(event) =>
                            updateLineItem(item.id, {
                              quantity: Math.max(
                                0,
                                Number(event.target.value) || 0
                              ),
                            })
                          }
                          className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label className="mb-1.5 block text-xs font-medium text-slate-500">
                          Unit price ({currency})
                        </label>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={item.unitPrice}
                          onChange={(event) =>
                            updateLineItem(item.id, {
                              unitPrice: Math.max(
                                0,
                                Number(event.target.value) || 0
                              ),
                            })
                          }
                          className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                        />

                        {item.unitPrice !== item.defaultUnitPrice && (
                          <button
                            type="button"
                            onClick={() =>
                              updateLineItem(item.id, {
                                unitPrice: item.defaultUnitPrice,
                              })
                            }
                            className="mt-1 text-xs font-medium text-blue-700 hover:text-blue-900"
                          >
                            Reset to {formatCurrency(item.defaultUnitPrice)}
                          </button>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-1.5 block text-xs font-medium text-slate-500">
                          Amount
                        </label>
                        <div className="flex h-[42px] items-center text-sm font-semibold text-slate-900">
                          {formatCurrency(item.quantity * item.unitPrice)}
                        </div>
                      </div>
                    </div>

                    {item.unitPrice !== item.defaultUnitPrice && (
                      <p className="mt-3 rounded-lg bg-blue-50 px-3 py-2 text-xs text-blue-700">
                        Custom price: catalogue price is{" "}
                        {formatCurrency(item.defaultUnitPrice)}. This override
                        applies to this quote only.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Notes and terms
              </h3>
              <textarea
                rows={5}
                value={quote.notes}
                onChange={(event) => updateQuote("notes", event.target.value)}
                placeholder="Add scope, exclusions, payment terms, or other notes..."
                className="mt-3 w-full rounded-lg border border-slate-200 p-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Quote summary
              </h3>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-3 text-slate-600">
                  <span>Subtotal</span>
                  <span>{formatCurrency(totals.subtotal)}</span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="quote-discount" className="text-slate-600">
                    Discount ({currency})
                  </label>
                  <input
                    id="quote-discount"
                    type="number"
                    min="0"
                    step="0.01"
                    value={quote.discount}
                    onChange={(event) =>
                      updateQuote(
                        "discount",
                        Math.max(0, Number(event.target.value) || 0)
                      )
                    }
                    className="w-28 rounded-lg border border-slate-200 px-2.5 py-2 text-right text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="quote-tax" className="text-slate-600">
                    Tax rate (%)
                  </label>
                  <input
                    id="quote-tax"
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={quote.taxRate}
                    onChange={(event) =>
                      updateQuote(
                        "taxRate",
                        Math.min(
                          100,
                          Math.max(0, Number(event.target.value) || 0)
                        )
                      )
                    }
                    className="w-28 rounded-lg border border-slate-200 px-2.5 py-2 text-right text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-between gap-3 text-slate-600">
                  <span>Taxable amount</span>
                  <span>{formatCurrency(totals.taxableAmount)}</span>
                </div>

                <div className="flex justify-between gap-3 text-slate-600">
                  <span>Tax</span>
                  <span>{formatCurrency(totals.tax)}</span>
                </div>

                <div className="border-t border-slate-200 pt-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-slate-900">Total</span>
                    <span className="text-xl font-bold text-slate-900">
                      {formatCurrency(totals.total)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="flex flex-col-reverse gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:flex-row sm:justify-between sm:px-7">
          <p className="self-center text-xs text-slate-400">
            Demo only · Not saved to a database
          </p>
          <div className="flex flex-col-reverse gap-3 sm:flex-row">
            <button
              onClick={onClose}
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (!quote.customerName || !quote.customerEmail) {
                  window.alert("Please select a customer.");
                  return;
                }

                if (quote.lineItems.length === 0) {
                  window.alert("Add at least one line item.");
                  return;
                }

                if (
                  quote.lineItems.some(
                    (item) =>
                      !item.description.trim() ||
                      item.quantity <= 0 ||
                      item.unitPrice < 0
                  )
                ) {
                  window.alert(
                    "Every line item needs a description, a positive quantity, and a valid price."
                  );
                  return;
                }

                onSave(quote);
              }}
              className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
            >
              Save quote · {formatCurrency(totals.total)}
            </button>
          </div>
        </footer>
      </aside>
    </div>
  );
}


function QuotePreview({
  quote,
  onClose,
  onEdit,
}: {
  quote: Quote;
  onClose: () => void;
  onEdit: () => void;
}) {
  const totals = calculateQuote(quote);

//   ADJUST THIS TO SHOW ACTUAL PDF
  function handlePrint() {
    window.print();
  }

  function handleSend() {
    const confirmed = window.confirm(
      `Send quote ${quote.reference} to ${quote.customerEmail}?\n\nEmail delivery has not been connected yet.`
    );

    if (confirmed) {
      window.alert(
        "Email sending is not configured yet. Connect an email service to send this quote to the customer."
      );
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/50 p-3 sm:p-6">
      <button
        aria-label="Close quote preview"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />

      <div className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-h-[calc(100dvh-3rem)]">
        {/* Fixed modal header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Quote preview
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {quote.reference}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close preview"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Independently scrollable quote content */}
        <div
          id="quote-print-content"
          className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-8"
        >
          <div className="space-y-6">
            {/* Quote heading */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                  QUOTE
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {quote.reference}
                </p>
              </div>

              <div className="sm:text-right">
                <StatusBadge status={quote.status} />
                <p className="mt-2 text-sm text-slate-500">
                  Issued {formatDate(quote.createdAt)}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Valid until {formatDate(quote.validUntil)}
                </p>
              </div>
            </div>

            {/* Customer details */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Prepared for
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                {quote.customerName}
              </p>
              <p className="mt-1 break-all text-sm text-slate-600">
                {quote.customerEmail}
              </p>
            </div>

            {/* Line items */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[450px] text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                    <th className="py-3 pr-3 font-medium">Description</th>
                    <th className="px-3 py-3 text-right font-medium">Qty</th>
                    <th className="px-3 py-3 text-right font-medium">
                      Unit price
                    </th>
                    <th className="py-3 pl-3 text-right font-medium">
                      Amount
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {quote.lineItems.map((item) => (
                    <tr key={item.id}>
                      <td className="py-3 pr-3 text-sm text-slate-800">
                        {item.description}
                      </td>
                      <td className="px-3 py-3 text-right text-sm text-slate-600">
                        {item.quantity}
                      </td>
                      <td className="px-3 py-3 text-right text-sm text-slate-600">
                        {formatCurrency(item.unitPrice)}
                      </td>
                      <td className="py-3 pl-3 text-right text-sm font-medium text-slate-900">
                        {formatCurrency(item.quantity * item.unitPrice)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="ml-auto max-w-xs space-y-2 text-sm">
              <div className="flex justify-between gap-4 text-slate-600">
                <span>Subtotal</span>
                <span>{formatCurrency(totals.subtotal)}</span>
              </div>

              <div className="flex justify-between gap-4 text-slate-600">
                <span>Discount</span>
                <span>−{formatCurrency(totals.discount)}</span>
              </div>

              <div className="flex justify-between gap-4 text-slate-600">
                <span>Tax ({quote.taxRate}%)</span>
                <span>{formatCurrency(totals.tax)}</span>
              </div>

              <div className="flex justify-between gap-4 border-t border-slate-200 pt-3 text-base font-bold text-slate-900">
                <span>Total</span>
                <span>{formatCurrency(totals.total)}</span>
              </div>
            </div>

            {/* Notes */}
            {quote.notes && (
              <div className="border-t border-slate-200 pt-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Notes and terms
                </h3>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-600">
                  {quote.notes}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Fixed action footer */}
        <div className="flex shrink-0 flex-col gap-3 border-t border-slate-200 bg-white px-5 py-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-400">
              Preview · {quote.reference}
            </p>

            <div className="grid grid-cols-2 gap-2 sm:flex">
              <button
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <FileText size={16} />
                Print
              </button>

              <button
                onClick={handleSend}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-3 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
              >
                <Send size={16} />
                Send quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

