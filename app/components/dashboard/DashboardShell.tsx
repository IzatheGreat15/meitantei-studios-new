
"use client";

import { useState } from "react";
import { Menu, Search, Bell } from "lucide-react";
import AppSidebar from "./AppSidebar";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-slate-50 md:flex">
      <AppSidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onToggleCollapse={() => setCollapsed((value) => !value)}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="flex min-h-dvh min-w-0 flex-1 flex-col">
        {/* Top navigation */}
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between gap-3 border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            >
              <Menu size={22} />
            </button>

            <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:flex">
              <Search size={17} className="text-slate-400" />
              <input
                type="search"
                placeholder="Search..."
                aria-label="Search dashboard"
                className="w-32 bg-transparent text-sm outline-none placeholder:text-slate-400 md:w-48"
              />
            </div>

            <p className="truncate text-sm font-semibold text-slate-800 sm:hidden">
              Meitantei
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Notifications"
              className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            >
              <Bell size={20} />
              <span className="absolute right-2 top-2 size-2 rounded-full bg-blue-600" />
            </button>

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-800">
                Bright Cleaning Co.
              </p>
              <p className="text-xs text-slate-500">Business owner</p>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
