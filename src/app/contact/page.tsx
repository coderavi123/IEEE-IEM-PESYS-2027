"use client";

import { FormEvent, useState } from "react";
import * as NavbarModule from "../components/Navbar";
const NavbarComponent =
  (NavbarModule as any)?.default ??
  (NavbarModule as any)?.Navbar ??
  NavbarModule;
import Footer from "../components/Footer";
import { supabase } from "../../lib/supabase/client";

type SocialIcon =
  | "mail"
  | "outlook"
  | "instagram"
  | "whatsapp"
  | "facebook"
  | "telegram"
  | "linkedin";

const socialLinks: {
  name: string;
  icon: SocialIcon;
  label: string;
}[] = [
  { name: "Email", icon: "mail", label: "Coming Soon" },
  { name: "Outlook", icon: "outlook", label: "Coming Soon" },
  { name: "Instagram", icon: "instagram", label: "Coming Soon" },
  { name: "WhatsApp", icon: "whatsapp", label: "Coming Soon" },
  { name: "Facebook", icon: "facebook", label: "Coming Soon" },
  { name: "Telegram", icon: "telegram", label: "Coming Soon" },
  { name: "LinkedIn", icon: "linkedin", label: "Coming Soon" },
];

function SocialIconSvg({ type }: { type: SocialIcon }) {
  if (type === "mail") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "outlook") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M13.5 4.5 20 6v12l-6.5 1.5V4.5Z" />
        <path d="M4 7.5 13 5.5v13L4 16.5v-9Z" opacity=".8" />
        <path
          d="M7.4 9.4c-.9 0-1.6.9-1.6 2.5s.7 2.5 1.6 2.5c.9 0 1.6-.9 1.6-2.5s-.7-2.5-1.6-2.5Zm0 3.8c-.35 0-.65-.45-.65-1.3s.3-1.3.65-1.3.65.45.65 1.3-.3 1.3-.65 1.3Z"
          fill="white"
        />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-7 w-7"
      >
        <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L4 20l1.2-3.7A8.5 8.5 0 1 1 20.5 11.5Z" />
        <path d="M8.8 8.5c.2-.4.4-.4.7-.4h.4c.2 0 .35.05.5.4l.55 1.35c.1.25.08.4-.08.62l-.5.65c-.12.15-.12.28-.03.45.32.55 1 1.28 1.65 1.65.2.12.34.12.5-.03l.62-.58c.2-.18.38-.17.63-.08l1.28.55c.3.13.48.2.5.45.03.27-.1.77-.36 1.02-.27.27-.72.38-1.16.33-.46-.05-1.3-.34-2.3-1.15-1.05-.85-1.83-1.83-2.26-2.55-.4-.66-.6-1.2-.55-1.7.04-.5.27-.87.4-.98Z" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M14 8h3V4.5c-.5-.07-1.65-.2-3.03-.2-2.99 0-5.04 1.83-5.04 5.2V12H5.5v4h3.43v7.5H13V16h3.4l.54-4H13V9.9c0-1.15.32-1.9 1-1.9Z" />
      </svg>
    );
  }

  if (type === "telegram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
      >
        <path d="m21 3-6.7 18-3.8-7.2L3 10.2 21 3Z" />
        <path d="m10.5 13.7 4.2-4.2" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7"
    >
      <path d="M5.2 3.5A2.7 2.7 0 0 0 2.5 6.2v11.6a2.7 2.7 0 0 0 2.7 2.7h13.6a2.7 2.7 0 0 0 2.7-2.7V6.2a2.7 2.7 0 0 0-2.7-2.7H5.2Zm2.1 5.3V18H4.7V8.8h2.6ZM5.9 4.8c.84 0 1.52.69 1.52 1.53S6.74 7.85 5.9 7.85 4.37 7.16 4.37 6.33 5.05 4.8 5.9 4.8ZM9.3 8.8h2.5v1.26h.04c.35-.66 1.2-1.52 2.48-1.52 2.65 0 3.14 1.75 3.14 4.03V18H14.8v-4.8c0-1.15-.02-2.64-1.6-2.64-1.6 0-1.84 1.25-1.84 2.56V18H9.3V8.8Z" />
    </svg>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage("");
    setSubmitted(false);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const institution = String(
      formData.get("institution") || ""
    ).trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!fullName || !email || !subject || !message) {
      setErrorMessage(
        "Please complete all required fields before submitting."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from("contact_enquiries")
        .insert({
          full_name: fullName,
          email,
          institution: institution || null,
          subject,
          message,
          status: "new",
        });

      if (error) {
        throw new Error(
          error.message || "Unable to submit your enquiry."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Contact enquiry error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <NavbarComponent />

      {/* ========================================================= */}
      {/* HERO                                                      */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src="/places/singapore-cityscape.jpeg"
            alt="Singapore cityscape"
            className="h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-emerald-950/50" />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200 backdrop-blur-md">
                Get In Touch
              </div>

              <h1 className="mt-7 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                Contact
                <span className="block text-emerald-400">
                  IEEE IEM-PESYS
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                Connect with the conference team for information about
                participation, submissions, registration, sponsorship and
                conference-related enquiries.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Conference
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    IEEE IEM-PESYS 2027
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Date
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    21st - 23rd June, 2027
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Venue
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    Singapore
                  </p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                <div className="relative overflow-hidden rounded-[2rem]">
                  <img
                    src="/places/singapore-skyline-2.jpeg"
                    alt="Singapore at night"
                    className="h-[430px] w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                      International Conference
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-white">
                      See You in Singapore
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Integrated Energy Systems, Microgrids &amp; Power
                      Engineering Systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT INFORMATION                                       */}
      {/* ========================================================= */}

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <SocialIconSvg type="mail" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Email
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                ieeeiempesys@gmail.com
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Official conference email information will be published here.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7"
                >
                  <path d="M6.5 3.5h3l1.3 4-2 1.5a13.5 13.5 0 0 0 6.2 6.2l1.5-2 4 1.3v3c0 .83-.67 1.5-1.5 1.5C11.8 19 5 12.2 5 4.5 5 3.95 5.45 3.5 6.5 3.5Z" />
                </svg>
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Phone
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Coming Soon
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Official conference contact numbers will be published here.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7"
                >
                  <path d="M20 10.2c0 5.1-8 10.3-8 10.3S4 15.3 4 10.2a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.6" />
                </svg>
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Location
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Singapore
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                The conference will be held in Singapore. Detailed venue
                information will be announced soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ENQUIRY + CONNECT                                         */}
      {/* ========================================================= */}

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Conference Enquiry
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                We&apos;re Here to
                <span className="block text-emerald-600">
                  Help
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Whether you are an author, researcher, student, academic,
                industry professional or prospective participant, you can use
                this form for conference-related enquiries.
              </p>

              {/* CONNECT WITH US */}
              <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Connect With Us
                </p>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  Stay Connected
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Follow the official conference channels for announcements,
                  updates and important information.
                </p>

                <div className="mt-7 grid grid-cols-4 gap-3 sm:grid-cols-7">
                  {socialLinks.map((social) => (
                    <div
                      key={social.name}
                      className="group flex min-h-[94px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-2 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-emerald-100 group-hover:text-emerald-700">
                        <SocialIconSvg type={social.icon} />
                      </div>

                      <p className="mt-2 text-[11px] font-bold text-slate-800">
                        {social.name}
                      </p>

                      <p className="mt-0.5 text-[9px] text-slate-400">
                        {social.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Conference Date
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    21st - 23rd June, 2027
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Technical Sponsor
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    IEEE PES Singapore Chapter
                  </p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl sm:p-8 lg:p-10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Full Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="institution"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Institution / Organization
                      </label>

                      <input
                        id="institution"
                        name="institution"
                        type="text"
                        placeholder="Your institution"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Subject
                      </label>

                      <select
                        id="subject"
                        name="subject"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                      >
                        <option value="" disabled>
                          Select an enquiry type
                        </option>

                        <option value="Abstract Submission">
                          Abstract Submission
                        </option>

                        <option value="Registration">
                          Registration
                        </option>

                        <option value="Sponsorship">
                          Sponsorship
                        </option>

                        <option value="Technical Programme">
                          Technical Programme
                        </option>

                        <option value="General Enquiry">
                          General Enquiry
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Write your enquiry here..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </div>

                  {errorMessage && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-400">
                    Your enquiry will be securely stored for conference
                    administration.
                  </p>
                </form>
              ) : (
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl text-emerald-700">
                    ✓
                  </div>

                  <h3 className="mt-7 text-3xl font-bold text-slate-900">
                    Enquiry Received
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-slate-600">
                    Thank you for contacting IEEE IEM-PESYS. Your enquiry has
                    been securely submitted to the conference system.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-100"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MAP                                                       */}
      {/* ========================================================= */}

      <section className="bg-slate-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                Conference Destination
              </p>

              <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
                Find Us in
                <span className="block text-emerald-400">
                  Singapore
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                The conference venue details will be announced soon. For now,
                explore Singapore as the official destination of IEEE
                IEM-PESYS 2027.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  Location
                </p>

                <p className="mt-2 text-xl font-bold text-white">
                  Singapore
                </p>

                <p className="mt-2 text-sm text-white/50">
                  Venue details coming soon
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
              <iframe
                src="https://www.google.com/maps?q=Singapore&output=embed"
                className="h-[400px] w-full border-0 sm:h-[500px]"
                loading="lazy"
                title="Google Map of Singapore"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA                                                 */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700 px-6 py-24">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">
            IEEE IEM-PESYS 2027
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white sm:text-6xl">
            Let&apos;s Connect
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            We look forward to welcoming researchers, academics, professionals
            and industry participants to Singapore.
          </p>

          <div className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-emerald-700 shadow-xl">
            21st - 23rd June, 2027 · Singapore
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}