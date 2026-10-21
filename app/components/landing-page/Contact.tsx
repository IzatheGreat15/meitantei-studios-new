
"use client";

import { useState, type FormEvent } from "react";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setFeedback(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      details: String(formData.get("details") ?? "").trim(),
    };

    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();

      let result: { message?: string };

      try {
        result = JSON.parse(responseText);
      } catch {
        console.error("API returned non-JSON response:", responseText);

        throw new Error(
          `The server returned an unexpected response (HTTP ${response.status}). Check the terminal for errors.`
        );
      }

      if (!response.ok) {
        throw new Error(
          result.message || `Request failed (HTTP ${response.status}).`
        );
      }


      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your enquiry. Please try again."
        );
      }

      setFeedback({
        type: "success",
        message:
          "Thanks for reaching out! Your enquiry has been sent successfully.",
      });

      form.reset();
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#050d20] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute -left-32 bottom-[-10rem] h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-[-10rem] h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Left: Contact information */}
        <div className="flex flex-col lg:sticky lg:top-24">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[var(--brand-primary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Let’s work together
          </span>

          <h2 className="mt-6 max-w-xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Have a business?
            <span className="mt-2 block text-sky-400">
              Let’s build your website.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
            Tell me about your business and what you have in mind. I’ll
            get back to you to discuss how we can build a website that
            helps you get noticed online and attract more customers.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="mailto:meitanteistudios@gmail.com"
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-sky-400/40 hover:bg-white/[0.06]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-400/10 text-lg text-[var(--brand-primary)]">
                <FiMail />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-slate-400">
                  Email me
                </span>
                <span className="mt-1 block break-all text-sm font-semibold text-slate-100 transition group-hover:text-[var(--brand-primary)]">
                  meitanteistudios@gmail.com
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-400/10 text-lg text-[var(--brand-primary)]">
                <FiMapPin />
              </span>
              <span>
                <span className="block text-xs text-slate-400">
                  Availability
                </span>
                <span className="mt-1 block text-sm font-semibold text-slate-100">
                  Working remotely with Australian businesses
                </span>
              </span>
            </div>
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-500">
            No pressure, no complicated process—just a conversation about
            what your business needs.
          </p>
        </div>

        {/* Right: Enquiry form */}
        <div className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 sm:p-8 lg:p-9">
          <div className="mb-7 border-b border-white/10 pb-5">
            <h3 className="text-xl font-extrabold tracking-tight">
              Tell me about your project
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Share a few details and I’ll be in touch to discuss your
              goals and next steps.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-xs font-semibold text-slate-300">
                Your name
                <input
                  required
                  maxLength={120}
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#0b1730] px-4 text-sm font-normal text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/10"
                />
              </label>

              <label className="block text-xs font-semibold text-slate-300">
                Email address
                <input
                  required
                  type="email"
                  maxLength={254}
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#0b1730] px-4 text-sm font-normal text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/10"
                />
              </label>
            </div>

            <label className="block text-xs font-semibold text-slate-300">
              What do you need?
              <select
                required
                name="service"
                defaultValue=""
                className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#0b1730] px-4 text-sm font-normal text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/10"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Business website</option>
                <option>Website redesign</option>
                <option>Landing page</option>
                <option>Website maintenance</option>
                <option>Something else</option>
              </select>
            </label>

            <label className="block text-xs font-semibold text-slate-300">
              Project details
              <textarea
                required
                maxLength={5000}
                name="details"
                rows={5}
                placeholder="Tell me about your business, goals, and what you need..."
                className="mt-2 min-h-32 w-full resize-y rounded-xl border border-white/10 bg-[#0b1730] px-4 py-3 text-sm font-normal leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/10"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--brand-blue)] px-5 py-3.5 text-sm font-extrabold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#050d20] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send enquiry"}
              {!isSubmitting && <FiArrowRight className="text-base" />}
            </button>

            {feedback && (
              <p
                role="status"
                aria-live="polite"
                className={`rounded-xl border p-3 text-sm ${feedback.type === "success"
                    ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                    : "border-red-400/20 bg-red-400/10 text-red-300"
                  }`}
              >
                {feedback.message}
              </p>
            )}
          </form>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            Your project details will help me understand how I can help.
          </p>
        </div>
      </div>
    </section>
  );
}
