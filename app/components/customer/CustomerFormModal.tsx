
"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type {
  Customer,
  CustomerFormValues,
} from "@/types/customer";

interface CustomerFormModalProps {
  customer?: Customer | null;
  onClose: () => void;
  onSave: (values: CustomerFormValues) => void;
}

const emptyForm: CustomerFormValues = {
  type: "Individual",
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  suburb: "",
  state: "",
  postcode: "",
  country: "Australia",
  notes: "",
};

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const labelClass =
  "mb-1.5 block text-sm font-medium text-slate-700";

export default function CustomerFormModal({
  customer,
  onClose,
  onSave,
}: CustomerFormModalProps) {
  const [form, setForm] = useState<CustomerFormValues>(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!customer) {
      setForm(emptyForm);
      return;
    }

    setForm({
      type: customer.type,
      firstName: customer.firstName,
      lastName: customer.lastName,
      companyName: customer.companyName ?? "",
      email: customer.email,
      phone: customer.phone,
      addressLine1: customer.address?.line1 ?? "",
      addressLine2: customer.address?.line2 ?? "",
      suburb: customer.address?.suburb ?? "",
      state: customer.address?.state ?? "",
      postcode: customer.address?.postcode ?? "",
      country: customer.address?.country ?? "Australia",
      notes: customer.notes,
    });
  }, [customer]);

  function update<K extends keyof CustomerFormValues>(
    key: K,
    value: CustomerFormValues[K],
  ) {
    setForm((previous) => ({ ...previous, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (form.type === "Individual" &&
        (!form.firstName.trim() || !form.lastName.trim())) {
      setError("Enter the customer's first and last name.");
      return;
    }

    if (form.type === "Business" && !form.companyName.trim()) {
      setError("Enter the business name.");
      return;
    }

    if (!form.email.trim() && !form.phone.trim()) {
      setError("Provide at least an email address or phone number.");
      return;
    }

    setError("");
    onSave(form);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/40 p-3 sm:items-center sm:p-6">
      <div className="my-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              {customer ? "Edit customer" : "Add customer"}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Manage contact and billing information.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Close customer form"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="max-h-[70dvh] space-y-6 overflow-y-auto p-5 sm:p-6">
            {/* <div>
              <label className={labelClass}>Customer type</label>
              <div className="flex gap-3">
                {(["Individual", "Business"] as const).map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => update("type", type)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium ${
                      form.type === type
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div> */}

            {form.type === "Business" && (
              <div>
                <label className={labelClass}>Business name *</label>
                <input
                  className={inputClass}
                  value={form.companyName}
                  onChange={(e) => update("companyName", e.target.value)}
                  placeholder="Business or organisation name"
                />
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>
                  {form.type === "Business"
                    ? "Contact first name"
                    : "First name *"}
                </label>
                <input
                  className={inputClass}
                  required={form.type === "Individual"}
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  placeholder="First name"
                />
              </div>

              <div>
                <label className={labelClass}>
                  {form.type === "Business"
                    ? "Contact last name"
                    : "Last name *"}
                </label>
                <input
                  className={inputClass}
                  required={form.type === "Individual"}
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  placeholder="Last name"
                />
              </div>

              <div>
                <label className={labelClass}>Email address</label>
                <input
                  type="email"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className={labelClass}>Phone number</label>
                <input
                  type="tel"
                  className={inputClass}
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+61 ..."
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-slate-900">
                Primary address
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={labelClass}>Address line 1</label>
                  <input
                    className={inputClass}
                    value={form.addressLine1}
                    onChange={(e) => update("addressLine1", e.target.value)}
                    placeholder="Street address"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass}>Address line 2</label>
                  <input
                    className={inputClass}
                    value={form.addressLine2}
                    onChange={(e) => update("addressLine2", e.target.value)}
                    placeholder="Unit, suite, etc."
                  />
                </div>

                <div>
                  <label className={labelClass}>Suburb / city</label>
                  <input
                    className={inputClass}
                    value={form.suburb}
                    onChange={(e) => update("suburb", e.target.value)}
                  />
                </div>

                <div>
                  <label className={labelClass}>State / region</label>
                  <input
                    className={inputClass}
                    value={form.state}
                    onChange={(e) => update("state", e.target.value)}
                  />
                </div>

                <div>
                  <label className={labelClass}>Postcode</label>
                  <input
                    className={inputClass}
                    value={form.postcode}
                    onChange={(e) => update("postcode", e.target.value)}
                  />
                </div>

                <div>
                  <label className={labelClass}>Country</label>
                  <input
                    className={inputClass}
                    value={form.country}
                    onChange={(e) => update("country", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className={labelClass}>Internal notes</label>
              <textarea
                rows={3}
                className={inputClass}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Communication preferences or other relevant details..."
              />
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-600">
                {error}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-3 border-t border-slate-100 px-5 py-4 sm:px-6">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
            >
              {customer ? "Save changes" : "Create customer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
