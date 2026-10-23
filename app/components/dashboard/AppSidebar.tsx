
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Inbox,
  FileText,
  Users,
  BriefcaseBusiness,
  Sparkles,
  UserRound,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
  X,
} from "lucide-react";

const navigation = [
  { label: "Overview", href: "/app", icon: LayoutDashboard },
  { label: "Enquiries", href: "/app/enquiries", icon: Inbox },
  { label: "Quotes", href: "/app/quotes", icon: FileText },
  { label: "Customers", href: "/app/customers", icon: Users },
  { label: "Jobs", href: "/app/jobs", icon: BriefcaseBusiness },
  { label: "Services", href: "/app/services", icon: Sparkles },
  { label: "Team", href: "/app/team", icon: UserRound },
  { label: "Settings", href: "/app/settings", icon: Settings },
];

type AppSidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onToggleCollapse: () => void;
  onCloseMobile: () => void;
};

export default function AppSidebar({
  collapsed,
  mobileOpen,
  onToggleCollapse,
  onCloseMobile,
}: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-950/50 md:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex h-dvh flex-col
          border-r border-slate-200 bg-white
          transition-all duration-200 ease-in-out
          md:sticky md:top-0 md:z-auto md:translate-x-0
          ${collapsed ? "md:w-[76px]" : "md:w-64"}
          w-72
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Brand */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-100 px-4">
          <Link
            href="/app"
            onClick={onCloseMobile}
            className="flex min-w-0 items-center gap-3"
          >
            <span className={`flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white ${
                collapsed ? "md:hidden" : ""
              }`}>
              M
            </span>

            <span
              className={`font-bold text-slate-900 ${
                collapsed ? "md:hidden" : ""
              }`}
            >
              Meitantei
            </span>
          </Link>

          {/* Close button on mobile */}
          <button
            type="button"
            onClick={onCloseMobile}
            aria-label="Close sidebar"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 md:hidden"
          >
            <X size={20} />
          </button>

          {/* Collapse button on desktop */}
          <button
            type="button"
            onClick={onToggleCollapse}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-expanded={!collapsed}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className={`hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 md:block ${
              collapsed ? "md:hidden" : ""
            }`}
          >
            <PanelLeftClose size={18} />
          </button>

          {collapsed && (
            <button
              type="button"
              onClick={onToggleCollapse}
              aria-label="Expand sidebar"
              title="Expand sidebar"
              className="hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 md:block"
            >
              <PanelLeftOpen size={18} />
            </button>
          )}
        </div>

        {/* Workspace */}
        <div className="shrink-0 px-3 py-4">
          <div
            className={`rounded-xl bg-blue-50 p-3 ${
              collapsed ? "md:flex md:justify-center md:p-2" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 font-semibold text-white">
                B
              </div>

              <div className={`min-w-0 ${collapsed ? "md:hidden" : ""}`}>
                <p className="truncate text-sm font-semibold text-slate-900">
                  Bright Cleaning Co.
                </p>
                <p className="text-xs text-slate-500">Business workspace</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className="flex-1 space-y-1 overflow-y-auto px-3 pb-4"
        >
          <p
            className={`mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 ${
              collapsed ? "md:hidden" : ""
            }`}
          >
            Workspace
          </p>

          {navigation.map(({ label, href, icon: Icon }) => {
            const active =
              href === "/app"
                ? pathname === href
                : pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                onClick={onCloseMobile}
                title={collapsed ? label : undefined}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                } ${collapsed ? "md:justify-center md:px-2" : ""}`}
              >
                <Icon size={20} className="shrink-0" />

                <span className={collapsed ? "md:hidden" : ""}>
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="shrink-0 border-t border-slate-100 p-3">
          <div className="flex items-center gap-3 rounded-xl p-2">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
              JD
            </div>

            <div className={`min-w-0 ${collapsed ? "md:hidden" : ""}`}>
              <p className="truncate text-sm font-semibold text-slate-900">
                John Doe
              </p>
              <p className="truncate text-xs text-slate-500">
                Business owner
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
