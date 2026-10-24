
"use client";

import { startTransition, useEffect, useMemo, useState } from "react";
import {
    Archive,
    ArrowDownUp,
    ArrowRight,
    Building2,
    ChevronRight,
    CirclePlus,
    Download,
    Eye,
    Mail,
    Pencil,
    Phone,
    Search,
    UserRound,
    Users,
} from "lucide-react";

import type {
    Customer,
    CustomerFormValues,
    CustomerSource,
    CustomerStatus,
    CustomerType,
} from "@/types/customer";

import CustomerFormModal from "./CustomerFormModal";
import CustomerDetailPage from "./CustomerDetailPage";
import { mockCustomers } from "./mock-data";

type TypeFilter = "All types" | CustomerType;
type StatusFilter = "All statuses" | CustomerStatus;

interface CustomersPageProps {
    initialCustomers?: Customer[];
}

function displayName(customer: Customer) {
    if (customer.type === "Business" && customer.companyName) {
        return customer.companyName;
    }

    return `${customer.firstName} ${customer.lastName}`.trim();
}

function initials(customer: Customer) {
    return displayName(customer)
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0] ?? "")
        .join("")
        .toUpperCase();
}

function createReference(customers: Customer[]) {
    const highest = customers.reduce((max, customer) => {
        const number = Number(customer.reference.replace("CUS-", ""));
        return Number.isFinite(number) ? Math.max(max, number) : max;
    }, 0);

    return `CUS-${String(highest + 1).padStart(4, "0")}`;
}

function formatDate(value: string) {
    return new Date(value).toLocaleDateString("en-AU", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

export default function CustomersPage({
    initialCustomers,
}: CustomersPageProps) {
    const [customers, setCustomers] = useState<Customer[]>(
        initialCustomers ?? mockCustomers,
    );

    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState<TypeFilter>("All types");
    const [statusFilter, setStatusFilter] =
        useState<StatusFilter>("All statuses");

    const [selectedCustomerId, setSelectedCustomerId] =
        useState<string | null>(null);
    const [editingCustomer, setEditingCustomer] =
        useState<Customer | null>(null);
    const [showForm, setShowForm] = useState(false);

    const selectedCustomer = customers.find(
        (customer) => customer.id === selectedCustomerId,
    );

    const filteredCustomers = useMemo(() => {
        const term = search.trim().toLowerCase();

        return customers
            .filter((customer) => {
                const searchable = [
                    customer.reference,
                    displayName(customer),
                    customer.firstName,
                    customer.lastName,
                    customer.companyName ?? "",
                    customer.email,
                    customer.phone,
                    customer.address?.suburb ?? "",
                ]
                    .join(" ")
                    .toLowerCase();

                const matchesSearch = !term || searchable.includes(term);
                const matchesType =
                    typeFilter === "All types" || customer.type === typeFilter;
                const matchesStatus =
                    statusFilter === "All statuses" ||
                    customer.status === statusFilter;

                return matchesSearch && matchesType && matchesStatus;
            })
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }, [customers, search, typeFilter, statusFilter]);


    const [currentMonthCount, setCurrentMonthCount] = useState<number | null>(
        null,
    );

    useEffect(() => {
        startTransition(() => {
            const now = new Date();

            const count = customers.filter((customer) => {
                const date = new Date(customer.createdAt);

                return (
                    date.getMonth() === now.getMonth() &&
                    date.getFullYear() === now.getFullYear()
                );
            }).length;

            setCurrentMonthCount(count);
        });
    }, [customers]);

    const activeCount = customers.filter(
        (customer) => customer.status === "Active",
    ).length;

    const businessCount = customers.filter(
        (customer) => customer.type === "Business",
    ).length;

    function openCreateForm() {
        setEditingCustomer(null);
        setShowForm(true);
    }

    function openEditForm(customer: Customer) {
        setEditingCustomer(customer);
        setShowForm(true);
    }

    function saveCustomer(values: CustomerFormValues) {
        const timestamp = new Date().toISOString();

        if (editingCustomer) {
            const updated: Customer = {
                ...editingCustomer,
                type: values.type,
                firstName: values.firstName.trim(),
                lastName: values.lastName.trim(),
                companyName: values.companyName.trim(),
                email: values.email.trim(),
                phone: values.phone.trim(),
                address: values.addressLine1.trim()
                    ? {
                        line1: values.addressLine1.trim(),
                        line2: values.addressLine2.trim(),
                        suburb: values.suburb.trim(),
                        state: values.state.trim(),
                        postcode: values.postcode.trim(),
                        country: values.country.trim(),
                    }
                    : undefined,
                notes: values.notes.trim(),
                updatedAt: timestamp,
            };

            setCustomers((previous) =>
                previous.map((customer) =>
                    customer.id === updated.id ? updated : customer,
                ),
            );
        } else {
            const newCustomer: Customer = {
                id: crypto.randomUUID(),
                reference: createReference(customers),
                type: values.type,
                status: "Active",
                source: "Manual" as CustomerSource,
                firstName: values.firstName.trim(),
                lastName: values.lastName.trim(),
                companyName: values.companyName.trim(),
                email: values.email.trim(),
                phone: values.phone.trim(),
                address: values.addressLine1.trim()
                    ? {
                        line1: values.addressLine1.trim(),
                        line2: values.addressLine2.trim(),
                        suburb: values.suburb.trim(),
                        state: values.state.trim(),
                        postcode: values.postcode.trim(),
                        country: values.country.trim(),
                    }
                    : undefined,
                notes: values.notes.trim(),
                createdAt: timestamp,
                updatedAt: timestamp,
                enquiryIds: [],
                quoteIds: [],
                jobIds: [],
                customFields: {},
            };

            setCustomers((previous) => [newCustomer, ...previous]);
            setSelectedCustomerId(newCustomer.id);
        }

        setShowForm(false);
        setEditingCustomer(null);
    }

    function archiveCustomer(customer: Customer) {
        const confirmed = window.confirm(
            `Archive ${displayName(customer)}?`,
        );

        if (!confirmed) return;

        setCustomers((previous) =>
            previous.map((item) =>
                item.id === customer.id
                    ? { ...item, status: "Archived", updatedAt: new Date().toISOString() }
                    : item,
            ),
        );
    }

    function exportCsv() {
        const headers = [
            "Reference",
            "Type",
            "Name",
            "Business",
            "Email",
            "Phone",
            "Suburb",
            "Status",
            "Created",
        ];

        const rows = filteredCustomers.map((customer) => [
            customer.reference,
            customer.type,
            displayName(customer),
            customer.companyName ?? "",
            customer.email,
            customer.phone,
            customer.address?.suburb ?? "",
            customer.status,
            formatDate(customer.createdAt),
        ]);

        const escapeCell = (value: string) =>
            `"${value.replace(/"/g, '""')}"`;

        const csv = [headers, ...rows]
            .map((row) => row.map(escapeCell).join(","))
            .join("\r\n");

        const blob = new Blob(["\uFEFF" + csv], {
            type: "text/csv;charset=utf-8;",
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "customers.csv";
        link.click();
        URL.revokeObjectURL(url);
    }

    if (selectedCustomer) {
        return (
            <div className="mx-auto w-full max-w-[1600px]">
                <CustomerDetailPage
                    customer={selectedCustomer}
                    onBack={() => setSelectedCustomerId(null)}
                    onEdit={() => openEditForm(selectedCustomer)}
                />

                {showForm && (
                    <CustomerFormModal
                        customer={editingCustomer}
                        onClose={() => {
                            setShowForm(false);
                            setEditingCustomer(null);
                        }}
                        onSave={saveCustomer}
                    />
                )}
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                        Customers
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Manage your customers and their service history.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <button
                        type="button"
                        onClick={exportCsv}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                        <Download size={16} />
                        Export
                    </button>

                    <button
                        type="button"
                        onClick={openCreateForm}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-800"
                    >
                        <CirclePlus size={17} />
                        Add customer
                    </button>
                </div>
            </div>

            <div className="grid gap-4 grid-cols-2 xl:grid-cols-4">
                {[
                    {
                        label: "Total customers",
                        value: customers.length,
                        detail: "All customer records",
                        icon: Users,
                    },
                    {
                        label: "New this month",
                        value: currentMonthCount,
                        detail: "Based on creation date",
                        icon: CirclePlus,
                    },
                    {
                        label: "Active customers",
                        value: activeCount,
                        detail: "Not archived",
                        icon: UserRound,
                    },
                    {
                        label: "Business customers",
                        value: businessCount,
                        detail: "Organisations and businesses",
                        icon: Building2,
                    },
                ].map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-slate-200 bg-white p-5"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-slate-500">{stat.label}</p>
                                    <p className="mt-2 text-2xl font-bold text-slate-900">
                                        {stat.value}
                                    </p>
                                </div>
                                <div className="rounded-xl bg-blue-50 p-2.5 text-blue-700">
                                    <Icon size={19} />
                                </div>
                            </div>
                            <p className="mt-3 text-xs text-slate-500">{stat.detail}</p>
                        </div>
                    );
                })}
            </div>

            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="flex flex-col gap-3 border-b border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                    <div>
                        <h2 className="font-semibold text-slate-900">
                            Customer directory
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            {filteredCustomers.length}{" "}
                            {filteredCustomers.length === 1 ? "customer" : "customers"} found
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row">
                        <div className="relative min-w-0 sm:w-64">
                            <Search
                                size={17}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            />
                            <input
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Search customers..."
                                className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        <select
                            value={typeFilter}
                            onChange={(event) =>
                                setTypeFilter(event.target.value as TypeFilter)
                            }
                            className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500"
                        >
                            <option>All types</option>
                            <option>Individual</option>
                            <option>Business</option>
                        </select>

                        <select
                            value={statusFilter}
                            onChange={(event) =>
                                setStatusFilter(event.target.value as StatusFilter)
                            }
                            className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500"
                        >
                            <option>All statuses</option>
                            <option>Active</option>
                            <option>Archived</option>
                        </select>
                    </div>
                </div>

                {filteredCustomers.length === 0 ? (
                    <div className="p-12 text-center">
                        <Users size={28} className="mx-auto text-slate-300" />
                        <h3 className="mt-3 font-semibold text-slate-900">
                            No customers found
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Try another search or create a new customer.
                        </p>
                        <button
                            type="button"
                            onClick={openCreateForm}
                            className="mt-4 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
                        >
                            Add customer
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Desktop directory */}
                        <div className="hidden overflow-x-auto md:block">
                            <table className="w-full min-w-[900px] text-left">
                                <thead className="bg-slate-50">
                                    <tr className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        <th className="px-5 py-3.5">Customer</th>
                                        <th className="px-5 py-3.5">Contact</th>
                                        <th className="px-5 py-3.5">Type</th>
                                        <th className="px-5 py-3.5">Records</th>
                                        <th className="px-5 py-3.5">Created</th>
                                        <th className="px-5 py-3.5">Status</th>
                                        <th className="px-5 py-3.5">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-slate-100">
                                    {filteredCustomers.map((customer) => (
                                        <tr
                                            key={customer.id}
                                            className="transition hover:bg-slate-50/70"
                                        >
                                            <td className="px-5 py-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedCustomerId(customer.id)}
                                                    className="flex items-center gap-3 text-left"
                                                >
                                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-700">
                                                        {initials(customer)}
                                                    </span>
                                                    <span>
                                                        <span className="block font-medium text-slate-900 hover:text-blue-700">
                                                            {displayName(customer)}
                                                        </span>
                                                        <span className="mt-1 block text-xs text-slate-500">
                                                            {customer.reference}
                                                        </span>
                                                    </span>
                                                </button>
                                            </td>

                                            <td className="px-5 py-4">
                                                <p className="flex items-center gap-2 text-sm text-slate-700">
                                                    <Mail size={14} className="text-slate-400" />
                                                    {customer.email || "—"}
                                                </p>
                                                <p className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                                                    <Phone size={13} className="text-slate-400" />
                                                    {customer.phone || "—"}
                                                </p>
                                            </td>

                                            <td className="px-5 py-4">
                                                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                                                    {customer.type}
                                                </span>
                                            </td>

                                            <td className="px-5 py-4 text-sm text-slate-600">
                                                <div>{customer.enquiryIds.length} enquiries</div>
                                                <div className="mt-1 text-xs text-slate-400">
                                                    {customer.quoteIds.length} quotes ·{" "}
                                                    {customer.jobIds.length} jobs
                                                </div>
                                            </td>

                                            <td className="px-5 py-4 text-sm text-slate-600">
                                                {formatDate(customer.createdAt)}
                                            </td>

                                            <td className="px-5 py-4">
                                                <span
                                                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${customer.status === "Active"
                                                            ? "bg-emerald-50 text-emerald-700"
                                                            : "bg-slate-100 text-slate-500"
                                                        }`}
                                                >
                                                    {customer.status}
                                                </span>
                                            </td>

                                            <td className="px-5 py-4">
                                                <div className="flex items-center justify-end gap-1">
                                                    {/* View profile */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setSelectedCustomerId(customer.id)}
                                                        className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-700"
                                                        aria-label={`View ${displayName(customer)}`}
                                                        title="View profile"
                                                    >
                                                        <Eye size={17} />
                                                    </button>

                                                    {/* Edit customer */}
                                                    <button
                                                        type="button"
                                                        onClick={() => openEditForm(customer)}
                                                        className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                                                        aria-label={`Edit ${displayName(customer)}`}
                                                        title="Edit customer"
                                                    >
                                                        <Pencil size={17} />
                                                    </button>

                                                    {/* Archive customer */}
                                                    {customer.status === "Active" && (
                                                        <button
                                                            type="button"
                                                            onClick={() => archiveCustomer(customer)}
                                                            className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                                                            aria-label={`Archive ${displayName(customer)}`}
                                                            title="Archive customer"
                                                        >
                                                            <Archive size={17} />
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile customer cards */}
                        <div className="divide-y divide-slate-100 md:hidden">
                            {filteredCustomers.map((customer) => (
                                <div key={customer.id} className="p-4">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedCustomerId(customer.id)}
                                        className="flex w-full items-start gap-3 text-left"
                                    >
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-semibold text-blue-700">
                                            {initials(customer)}
                                        </span>

                                        <span className="min-w-0 flex-1">
                                            <span className="block break-words font-semibold text-slate-900">
                                                {displayName(customer)}
                                            </span>
                                            <span className="mt-1 block text-xs text-slate-500">
                                                {customer.reference}
                                            </span>
                                            <span className="mt-2 block break-all text-sm text-slate-600">
                                                {customer.email || "No email"}
                                            </span>
                                            <span className="mt-1 block text-sm text-slate-500">
                                                {customer.phone || "No phone"}
                                            </span>
                                        </span>

                                        <ChevronRight size={18} className="shrink-0 text-slate-400" />
                                    </button>

                                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pl-14">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                                                {customer.type}
                                            </span>
                                            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs text-blue-700">
                                                {customer.enquiryIds.length} enquiries
                                            </span>
                                            <span className={`rounded-full px-2.5 py-1 text-xs ${customer.status === "Active"
                                                    ? "bg-emerald-50 text-emerald-700"
                                                    : "bg-slate-100 text-slate-500"
                                                }`}>
                                                {customer.status}
                                            </span>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => openEditForm(customer)}
                                            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                                            aria-label={`Edit ${displayName(customer)}`}
                                        >
                                            <Pencil size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                <div className="flex flex-col gap-3 border-t border-slate-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                    <p className="text-xs text-slate-500">
                        Showing {filteredCustomers.length} of {customers.length} customers
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                        <ArrowDownUp size={14} />
                        Sorted by newest first
                    </div>
                </div>
            </section>

            {showForm && (
                <CustomerFormModal
                    customer={editingCustomer}
                    onClose={() => {
                        setShowForm(false);
                        setEditingCustomer(null);
                    }}
                    onSave={saveCustomer}
                />
            )}
        </div>
    );
}

/**
 * Future integration point for EnquiriesPage:
 *
 * Convert a qualified enquiry to a customer by passing its contact details
 * into the same customer creation logic. In production, use a server action
 * or API route and enforce duplicate detection on the server.
 */
export function createCustomerFromEnquiry(
    values: CustomerFormValues,
    enquiryId: string,
    existingCustomers: Customer[],
): Customer {
    const timestamp = new Date().toISOString();

    return {
        id: crypto.randomUUID(),
        reference: createReference(existingCustomers),
        type: values.type,
        status: "Active",
        source: "Enquiry" as CustomerSource,
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        companyName: values.companyName.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        address: values.addressLine1.trim()
            ? {
                line1: values.addressLine1.trim(),
                line2: values.addressLine2.trim(),
                suburb: values.suburb.trim(),
                state: values.state.trim(),
                postcode: values.postcode.trim(),
                country: values.country.trim(),
            }
            : undefined,
        notes: values.notes.trim(),
        createdAt: timestamp,
        updatedAt: timestamp,
        enquiryIds: [enquiryId],
        quoteIds: [],
        jobIds: [],
        customFields: {},
    };
}
