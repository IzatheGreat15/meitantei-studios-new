"use client";

import Link from "next/link";
import {
  Bell,
  Search,
  ExternalLink,
} from "lucide-react";

export default function AppNavbar() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search
          size={17}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="search"
          placeholder="Search enquiries, quotes, customers..."
          aria-label="Search workspace"
          className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Actions */}
      <div className="ml-4 flex shrink-0 items-center gap-2">
        <Link
          href="/demo"
          className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:flex"
        >
          View demo
          <ExternalLink size={15} />
        </Link>

        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-lg p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <Bell size={19} />

          <span className="absolute right-2 top-2 size-2 rounded-full bg-blue-600 ring-2 ring-white" />
        </button>
      </div>
    </header>
  );
}