
"use client";

import { useMemo, useState } from "react";
import {
    Search,
    Plus,
    MoreHorizontal,
    Eye,
    X,
    Clock3,
    FileText,
    CheckCircle2,
    AlertCircle,
    ChevronLeft,
    ChevronRight,
    SlidersHorizontal,
} from "lucide-react";

import type {
    Enquiry,
    EnquiryStatus,
    JsonValue,
} from "@/types/enquiry";
import CustomSelect from "../ui/CustomSelect";

const statuses: EnquiryStatus[] = [
    "New",
    "In review",
    "Awaiting information",
    "Preparing quote",
    "Quoted",
    "Converted",
    "Declined",
];

const statusStyles: Record<EnquiryStatus, string> = {
    New: "bg-blue-50 text-blue-700 ring-blue-200",
    "In review": "bg-amber-50 text-amber-700 ring-amber-200",
    "Awaiting information":
        "bg-orange-50 text-orange-700 ring-orange-200",
    "Preparing quote": "bg-violet-50 text-violet-700 ring-violet-200",
    Quoted: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    Converted: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    Declined: "bg-slate-100 text-slate-600 ring-slate-200",
};

// Demonstration data only. In production, these enquiries would
// belong to individual businesses and their configured services.
const initialEnquiries: Enquiry[] = [
    {
        id: "1",
        reference: "ENQ-1001",
        customerName: "Daniel Cooper",
        email: "daniel@example.com",
        phone: "0412 345 678",
        serviceId: "svc-repair",
        serviceName: "Plumbing Repair",
        summary: "Leaking kitchen pipe; urgent",
        status: "New",
        receivedAt: "2026-10-22T09:30:00",
        formAnswers: {
            issue: "Leaking pipe under kitchen sink",
            urgency: "Within 24 hours",
            propertyType: "Residential house",
            address: "12 Example Street, Perth",
            accessInstructions: "Side gate is unlocked",
            photos: ["kitchen-pipe.jpg"],
        },
        formSchemaSnapshot: [
            { key: "issue", label: "Describe the issue", type: "textarea" },
            { key: "urgency", label: "How urgent is the job?", type: "select" },
            { key: "propertyType", label: "Property type", type: "select" },
            { key: "address", label: "Service address", type: "text" },
            { key: "accessInstructions", label: "Access instructions", type: "textarea" },
            { key: "photos", label: "Photos", type: "file" },
        ],
    },
    {
        id: "2",
        reference: "ENQ-1002",
        customerName: "Olivia Bennett",
        email: "olivia@example.com",
        phone: "0400 111 222",
        serviceId: "svc-clean",
        serviceName: "End of Lease Cleaning",
        summary: "Three-bedroom property; bond clean",
        status: "Preparing quote",
        receivedAt: "2026-10-22T08:15:00",
        formAnswers: {
            propertyType: "Apartment",
            bedrooms: 3,
            bathrooms: 2,
            cleaningType: "End of lease",
            carpetCleaning: true,
        },
        formSchemaSnapshot: [
            { key: "propertyType", label: "Property type", type: "select" },
            { key: "bedrooms", label: "Bedrooms", type: "number" },
            { key: "bathrooms", label: "Bathrooms", type: "number" },
            { key: "cleaningType", label: "Cleaning type", type: "select" },
            { key: "carpetCleaning", label: "Carpet cleaning required", type: "checkbox" },
        ],
    },
    {
        id: "3",
        reference: "ENQ-1003",
        customerName: "James Wilson",
        email: "james@example.com",
        phone: "0433 222 111",
        serviceId: "svc-inspection",
        serviceName: "Electrical Inspection",
        summary: "Switchboard inspection for rental property",
        status: "Awaiting information",
        receivedAt: "2026-10-21T16:45:00",
        formAnswers: {
            inspectionType: "Rental compliance",
            propertyType: "Townhouse",
            switchboardAge: "Unknown",
            preferredDate: "2026-10-29",
        },
        formSchemaSnapshot: [
            { key: "inspectionType", label: "Inspection type", type: "select" },
            { key: "propertyType", label: "Property type", type: "select" },
            { key: "switchboardAge", label: "Approximate switchboard age", type: "text" },
            { key: "preferredDate", label: "Preferred date", type: "date" },
        ],
    },
    {
        id: "4",
        reference: "ENQ-1004",
        customerName: "Sophia Taylor",
        email: "sophia@example.com",
        phone: "0411 555 888",
        serviceId: "svc-garden",
        serviceName: "Garden Maintenance",
        summary: "Overgrown backyard and hedge trimming",
        status: "Quoted",
        receivedAt: "2026-10-21T11:20:00",
        formAnswers: {
            gardenSize: "Medium",
            requestedWork: ["Lawn mowing", "Hedge trimming", "Weed removal"],
            recurringService: true,
        },
        formSchemaSnapshot: [
            { key: "gardenSize", label: "Garden size", type: "select" },
            { key: "requestedWork", label: "Requested work", type: "checkbox-group" },
            { key: "recurringService", label: "Recurring service?", type: "checkbox" },
        ],
    },
    {
        id: "5",
        reference: "ENQ-1005",
        customerName: "Noah Anderson",
        email: "noah@example.com",
        serviceId: "svc-repair",
        serviceName: "Plumbing Repair",
        summary: "Hot water system not working",
        status: "Converted",
        receivedAt: "2026-10-20T14:10:00",
        formAnswers: {
            issue: "No hot water",
            systemType: "Gas",
            propertyType: "Residential house",
            urgency: "As soon as possible",
        },
        formSchemaSnapshot: [
            { key: "issue", label: "Describe the issue", type: "textarea" },
            { key: "systemType", label: "Hot water system type", type: "select" },
            { key: "propertyType", label: "Property type", type: "select" },
            { key: "urgency", label: "Urgency", type: "select" },
        ],
    },
    {
        id: "6",
        reference: "ENQ-1006",
        customerName: "Emily Parker",
        email: "emily@example.com",
        serviceId: "svc-grooming",
        serviceName: "Pet Grooming",
        summary: "Full groom for a medium-sized dog",
        status: "In review",
        receivedAt: "2026-10-20T10:05:00",
        formAnswers: {
            petType: "Dog",
            breed: "Cocker Spaniel",
            petSize: "Medium",
            requestedServices: ["Bath", "Haircut", "Nail trimming"],
        },
        formSchemaSnapshot: [
            { key: "petType", label: "Pet type", type: "select" },
            { key: "breed", label: "Breed", type: "text" },
            { key: "petSize", label: "Pet size", type: "select" },
            { key: "requestedServices", label: "Requested services", type: "checkbox-group" },
        ],
    },
];

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-AU", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(new Date(date));
}

function displayValue(value: JsonValue): string {
    if (value === null) return "—";
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (Array.isArray(value)) return value.map(displayValue).join(", ");
    if (typeof value === "object") return JSON.stringify(value);
    return String(value);
}

function labelFromKey(key: string) {
    return key
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/[_-]/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function StatusBadge({ status }: { status: EnquiryStatus }) {
    return (
        <span
            className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[status]}`}
        >
            {status}
        </span>
    );
}

function MetricCard({
    title,
    value,
    description,
    icon: Icon,
}: {
    title: string;
    value: number;
    description: string;
    icon: typeof FileText;
}) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">{title}</p>
                <span className="rounded-lg bg-blue-50 p-2 text-blue-700">
                    <Icon size={18} />
                </span>
            </div>
            <p className="mt-3 text-2xl font-semibold text-slate-900">{value}</p>
            <p className="mt-1 text-xs text-slate-500">{description}</p>
        </div>
    );
}

export default function EnquiriesPage() {
    const [enquiries, setEnquiries] = useState(initialEnquiries);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All statuses");
    const [serviceFilter, setServiceFilter] = useState("All services");
    const [selected, setSelected] = useState<Enquiry | null>(null);
    const [page, setPage] = useState(1);
    const [showCreate, setShowCreate] = useState(false);

    const pageSize = 5;

    // In production, load this list from the current tenant's service catalogue.
    const services = useMemo(
        () => [...new Set(enquiries.map((item) => item.serviceName))].sort(),
        [enquiries]
    );

    const filtered = useMemo(() => {
        const query = search.trim().toLowerCase();

        return enquiries.filter((item) => {
            const matchesSearch =
                !query ||
                [
                    item.reference,
                    item.customerName,
                    item.email,
                    item.serviceName,
                    item.summary,
                    item.phone ?? "",
                ].some((value) => value.toLowerCase().includes(query));

            const matchesStatus =
                statusFilter === "All statuses" || item.status === statusFilter;

            const matchesService =
                serviceFilter === "All services" || item.serviceName === serviceFilter;

            return matchesSearch && matchesStatus && matchesService;
        });
    }, [enquiries, search, statusFilter, serviceFilter]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const currentPage = Math.min(page, totalPages);
    const paginated = filtered.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const updateStatus = (id: string, status: EnquiryStatus) => {
        setEnquiries((current) =>
            current.map((item) => (item.id === id ? { ...item, status } : item))
        );

        setSelected((current) =>
            current?.id === id ? { ...current, status } : current
        );
    };

    const stats = [
        {
            title: "Total enquiries",
            value: enquiries.length,
            description: "All received enquiries",
            icon: FileText,
        },
        {
            title: "New enquiries",
            value: enquiries.filter((item) => item.status === "New").length,
            description: "Need initial review",
            icon: AlertCircle,
        },
        {
            title: "In progress",
            value: enquiries.filter((item) =>
                ["In review", "Awaiting information", "Preparing quote"].includes(
                    item.status
                )
            ).length,
            description: "Being worked on",
            icon: Clock3,
        },
        {
            title: "Converted",
            value: enquiries.filter((item) => item.status === "Converted").length,
            description: "Turned into work",
            icon: CheckCircle2,
        },
    ];

    const createEnquiry = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const customerName = String(form.get("customerName") ?? "").trim();
        const email = String(form.get("email") ?? "").trim();
        const serviceName = String(form.get("serviceName") ?? "").trim();
        const summary = String(form.get("summary") ?? "").trim();
        const phone = String(form.get("phone") ?? "").trim();

        if (!customerName || !email || !serviceName || !summary) return;

        const enquiry: Enquiry = {
            id: crypto.randomUUID(),
            reference: `ENQ-${Date.now().toString().slice(-6)}`,
            customerName,
            email,
            phone: phone || undefined,
            serviceName,
            summary,
            status: "New",
            receivedAt: new Date().toISOString(),
            formAnswers: {},
            formSchemaSnapshot: [],
        };

        setEnquiries((current) => [enquiry, ...current]);
        setPage(1);
        setSearch("");
        setStatusFilter("All statuses");
        setServiceFilter("All services");
        setShowCreate(false);
        event.currentTarget.reset();
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                        Enquiries
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Manage customer requests from every service you offer.
                    </p>
                </div>

                <button
                    onClick={() => setShowCreate(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
                >
                    <Plus size={17} />
                    Add enquiry
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
                {stats.map((stat) => (
                    <MetricCard key={stat.title} {...stat} />
                ))}
            </div>

            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="flex flex-col gap-3 border-b border-slate-200 p-4 lg:flex-row lg:items-center">
                    <div className="relative min-w-0 flex-1">
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                            value={search}
                            onChange={(event) => {
                                setSearch(event.target.value);
                                setPage(1);
                            }}
                            placeholder="Search customer, reference, service..."
                            className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <SlidersHorizontal size={16} />
                            <span>Filter</span>
                        </div>

                        <CustomSelect
                            value={serviceFilter}
                            onChange={(value) => {
                                setServiceFilter(value);
                                setPage(1);
                            }}
                            ariaLabel="Filter by service"
                            options={[
                                { label: "All services", value: "All services" },
                                ...services.map((service) => ({
                                    label: service,
                                    value: service,
                                })),
                            ]}
                            className="w-full sm:w-48"
                        />

                        <CustomSelect
                            value={statusFilter}
                            onChange={(value) => {
                                setStatusFilter(value);
                                setPage(1);
                            }}
                            ariaLabel="Filter by status"
                            options={[
                                { label: "All statuses", value: "All statuses" },
                                ...statuses.map((status) => ({
                                    label: status,
                                    value: status,
                                })),
                            ]}
                            className="w-full sm:w-48"
                        />
                    </div>
                </div>

                <div className="hidden overflow-x-auto md:block">
                    <table className="w-full min-w-[850px] text-left">
                        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                            <tr>
                                <th className="px-5 py-3 font-medium">Customer</th>
                                <th className="px-5 py-3 font-medium">Service</th>
                                <th className="px-5 py-3 font-medium">Enquiry summary</th>
                                <th className="px-5 py-3 font-medium">Received</th>
                                <th className="px-5 py-3 font-medium">Status</th>
                                <th className="px-5 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                            {paginated.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/70">
                                    <td className="px-5 py-4">
                                        <p className="text-sm font-medium text-slate-900">
                                            {item.customerName}
                                        </p>
                                        <p className="mt-1 text-xs text-slate-500">{item.reference}</p>
                                    </td>
                                    <td className="px-5 py-4 text-sm text-slate-700">
                                        {item.serviceName}
                                    </td>
                                    <td className="max-w-xs px-5 py-4 text-sm text-slate-600">
                                        <p className="truncate">{item.summary}</p>
                                    </td>
                                    <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">
                                        {formatDate(item.receivedAt)}
                                    </td>
                                    <td className="px-5 py-4">
                                        <StatusBadge status={item.status} />
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                        <button
                                            aria-label={`More actions for ${item.reference}`}
                                            onClick={() => setSelected(item)}
                                            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                                        >
                                            <MoreHorizontal size={17} />
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {paginated.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-5 py-12 text-center">
                                        <p className="text-sm font-medium text-slate-700">
                                            No enquiries found
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
                    {paginated.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setSelected(item)}
                            className="block w-full p-4 text-left hover:bg-slate-50"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold text-slate-900">
                                        {item.customerName}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        {item.reference}
                                    </p>
                                </div>
                                <StatusBadge status={item.status} />
                            </div>
                            <p className="mt-3 text-sm font-medium text-slate-700">
                                {item.serviceName}
                            </p>
                            <p className="mt-1 text-sm text-slate-500">{item.summary}</p>
                            <p className="mt-3 text-xs text-slate-400">
                                Received {formatDate(item.receivedAt)}
                            </p>
                        </button>
                    ))}

                    {paginated.length === 0 && (
                        <p className="px-4 py-10 text-center text-sm text-slate-500">
                            No enquiries match your filters.
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-3 border-t border-slate-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-slate-500">
                        {filtered.length === 0
                            ? "No results"
                            : `Showing ${(currentPage - 1) * pageSize + 1}–${Math.min(
                                currentPage * pageSize,
                                filtered.length
                            )} of ${filtered.length} enquiries`}
                    </p>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                        <button
                            disabled={currentPage <= 1}
                            onClick={() => setPage((value) => Math.max(1, value - 1))}
                            className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                            aria-label="Previous page"
                        >
                            <ChevronLeft size={17} />
                        </button>
                        <span className="px-2 text-sm text-slate-600">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            disabled={currentPage >= totalPages}
                            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
                            className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                            aria-label="Next page"
                        >
                            <ChevronRight size={17} />
                        </button>
                    </div>
                </div>
            </section>

            {selected && (
                <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/30">
                    <button
                        className="absolute inset-0 cursor-default"
                        aria-label="Close enquiry details"
                        onClick={() => setSelected(null)}
                    />

                    <aside className="relative flex h-full w-full max-w-xl flex-col overflow-y-auto bg-white shadow-xl">
                        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-200 bg-white p-5">
                            <div>
                                <p className="text-xs font-medium text-blue-700">
                                    {selected.reference}
                                </p>
                                <h2 className="mt-1 text-xl font-semibold text-slate-900">
                                    {selected.customerName}
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    {selected.serviceName}
                                </p>
                            </div>
                            <button
                                onClick={() => setSelected(null)}
                                aria-label="Close"
                                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-6 p-5">
                            <section>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Enquiry status
                                </label>
                                <CustomSelect
                                    value={selected.status}
                                    onChange={(value) =>
                                        updateStatus(selected.id, value as EnquiryStatus)
                                    }
                                    ariaLabel="Enquiry status"
                                    options={statuses.map((status) => ({
                                        label: status,
                                        value: status,
                                    }))}
                                    className="w-full"
                                />
                            </section>

                            <section className="rounded-xl border border-slate-200 p-4">
                                <h3 className="text-sm font-semibold text-slate-900">
                                    Customer Details
                                </h3>
                                <div className="mt-3 space-y-2 text-sm text-slate-600">
                                    <p>{selected.email}</p>
                                    <p>{selected.phone || "No phone number provided"}</p>
                                    <p>Received {formatDate(selected.receivedAt)}</p>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-sm font-semibold text-slate-900">
                                    Enquiry details
                                </h3>
                                <p className="mt-1 text-sm text-slate-500">
                                    Answers submitted through the customer enquiry form.
                                </p>

                                <div className="mt-3 divide-y divide-slate-100 rounded-xl border border-slate-200">
                                    {Object.entries(selected.formAnswers).length > 0 ? (
                                        Object.entries(selected.formAnswers).map(([key, value]) => {
                                            const field = selected.formSchemaSnapshot.find(
                                                (item) => item.key === key
                                            );

                                            return (
                                                <div key={key} className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-[40%_60%]">
                                                    <p className="text-sm text-slate-500">
                                                        {field?.label ?? labelFromKey(key)}
                                                    </p>
                                                    <p className="break-words text-sm font-medium text-slate-800">
                                                        {displayValue(value)}
                                                    </p>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <p className="p-4 text-sm text-slate-500">
                                            No additional form answers were provided.
                                        </p>
                                    )}
                                </div>
                            </section>

                            <section>
                                <h3 className="text-sm font-semibold text-slate-900">
                                    Internal notes
                                </h3>
                                <textarea
                                    defaultValue={selected.internalNotes ?? ""}
                                    placeholder="Add notes for your team..."
                                    rows={4}
                                    className="mt-2 w-full rounded-lg border border-slate-200 p-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    onBlur={(event) => {
                                        const internalNotes = event.target.value;
                                        setEnquiries((current) =>
                                            current.map((item) =>
                                                item.id === selected.id
                                                    ? { ...item, internalNotes }
                                                    : item
                                            )
                                        );
                                        setSelected((current) =>
                                            current?.id === selected.id
                                                ? { ...current, internalNotes }
                                                : current
                                        );
                                    }}
                                />
                                <p className="mt-1 text-xs text-slate-400">
                                    Demo only: notes are not saved to a database.
                                </p>
                            </section>

                            <button
                                onClick={() => updateStatus(selected.id, "Preparing quote")}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-3 text-sm font-medium text-white hover:bg-blue-800"
                            >
                                <FileText size={17} />
                                Prepare quote
                            </button>
                            <p className="text-xs text-slate-500">
                                This demo changes the enquiry status only. Quote generation and
                                sending will be implemented separately.
                            </p>
                        </div>
                    </aside>
                </div>
            )}

            {showCreate && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/40 p-4">
                    <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-200 p-5">
                            <div>
                                <h2 className="text-lg font-semibold text-slate-900">
                                    Add enquiry
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    Record a customer request manually.
                                </p>
                            </div>
                            <button
                                onClick={() => setShowCreate(false)}
                                aria-label="Close form"
                                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                            >
                                <X size={19} />
                            </button>
                        </div>

                        <form onSubmit={createEnquiry} className="space-y-4 p-5">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Customer name *
                                </label>
                                <input
                                    required
                                    name="customerName"
                                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                                    placeholder="Customer name"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                                        Email *
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                                        placeholder="customer@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                                        Phone
                                    </label>
                                    <input
                                        name="phone"
                                        className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Service *
                                </label>
                                <CustomSelect
                                    value={serviceFilter}
                                    onChange={(value) => { }}
                                    ariaLabel="Filter by service"
                                    options={[
                                        { label: "All services", value: "All services" },
                                        ...services.map((service) => ({
                                            label: service,
                                            value: service,
                                        })),
                                    ]}
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Enquiry summary *
                                </label>
                                <textarea
                                    required
                                    name="summary"
                                    rows={3}
                                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                                    placeholder="Briefly describe what the customer needs..."
                                />
                            </div>

                            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                                <button
                                    type="button"
                                    onClick={() => setShowCreate(false)}
                                    className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
                                >
                                    Create enquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
