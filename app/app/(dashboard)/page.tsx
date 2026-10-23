import type { Metadata } from "next";
import {
  ArrowUpRight,
  Inbox,
  FileCheck,
  Send,
  CalendarDays,
  Plus,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Overview",
};

const stats = [
  {
    label: "New enquiries",
    value: "12",
    detail: "Awaiting review",
    icon: Inbox,
    href: "/app/enquiries",
  },
  {
    label: "Quotes to review",
    value: "5",
    detail: "Drafts awaiting approval",
    icon: FileCheck,
    href: "/app/quotes",
  },
  {
    label: "Quotes sent",
    value: "18",
    detail: "Awaiting customer response",
    icon: Send,
    href: "/app/quotes",
  },
  {
    label: "Upcoming jobs",
    value: "8",
    detail: "Scheduled jobs",
    icon: CalendarDays,
    href: "/app/jobs",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-slate-500">
            Your business at a glance
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
            Overview
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Here's what's happening with your business.
          </p>
        </div>

        <Link
          href="/app/enquiries"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
        >
          <Plus size={17} />
          View enquiries
        </Link>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100/50 transition hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">
                  {stat.label}
                </p>

                <div className="flex size-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon size={18} />
                </div>
              </div>

              <div className="mt-4 flex items-end justify-between">
                <p className="text-3xl font-semibold tracking-tight text-slate-900">
                  {stat.value}
                </p>

                <ArrowUpRight
                  size={17}
                  className="text-slate-300 transition group-hover:text-blue-600"
                />
              </div>

              <p className="mt-2 text-xs text-slate-500">
                {stat.detail}
              </p>
            </Link>
          );
        })}
      </section>

      {/* Getting started */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <FileCheck size={22} />
        </div>

        <h2 className="mt-4 text-lg font-semibold text-slate-900">
          Get your workspace ready
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Set up your services and pricing, customize your quote request
          form, and start collecting customer enquiries.
        </p>

        <div className="mt-6">
          <Link
            href="/app/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            Configure services and pricing
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}