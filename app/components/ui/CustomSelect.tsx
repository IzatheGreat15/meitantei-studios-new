
"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type CustomSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  menuClassName?: string;
  ariaLabel?: string;
};

export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  disabled = false,
  className = "",
  menuClassName = "",
  ariaLabel,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative min-w-0 ${className}`}>
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
        onClick={() => setOpen((current) => !current)}
        className={[
          "flex w-full items-center justify-between gap-3 rounded-lg",
          "border border-slate-200 bg-white px-3 py-2.5",
          "text-left text-sm text-slate-700 shadow-sm",
          "transition-colors duration-150",
          "hover:border-slate-300 hover:bg-slate-50",
          "focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500",
          "disabled:cursor-not-allowed disabled:opacity-50",
          open ? "border-blue-500 ring-2 ring-blue-100" : "",
        ].join(" ")}
      >
        <span
          className={`truncate ${
            selectedOption ? "text-slate-700" : "text-slate-400"
          }`}
        >
          {selectedOption?.label ?? placeholder}
        </span>

        <ChevronDown
          size={16}
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && !disabled && (
        <div
          role="listbox"
          aria-label={ariaLabel ?? placeholder}
          className={[
            "absolute left-0 top-full z-50 mt-2 w-full min-w-max",
            "max-h-64 overflow-y-auto rounded-xl border border-slate-200",
            "bg-white p-1.5 shadow-lg shadow-slate-200/60",
            "animate-in fade-in slide-in-from-top-1 duration-150",
            menuClassName,
          ].join(" ")}
        >
          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                disabled={option.disabled}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={[
                  "flex w-full items-center justify-between gap-4",
                  "rounded-lg px-3 py-2.5 text-left text-sm",
                  "transition-colors",
                  isSelected
                    ? "bg-blue-50 font-medium text-blue-700"
                    : "text-slate-700 hover:bg-slate-50",
                  "disabled:cursor-not-allowed disabled:opacity-40",
                ].join(" ")}
              >
                <span className="truncate">{option.label}</span>

                {isSelected && (
                  <Check
                    size={16}
                    className="shrink-0 text-blue-700"
                  />
                )}
              </button>
            );
          })}

          {options.length === 0 && (
            <p className="px-3 py-4 text-center text-sm text-slate-400">
              No options available
            </p>
          )}
        </div>
      )}
    </div>
  );
}
