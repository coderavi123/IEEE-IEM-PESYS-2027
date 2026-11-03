"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const cards = [
  {
    icon: "🌐",
    title: "Singapore Immigration Updates",
    button: "Visit ICA Website",
    href: "https://www.ica.gov.sg/",
  },
  {
    icon: "☑",
    title: "Entry Requirements & Checklist",
    button: "View Entry Checklist",
    href: "https://www.ica.gov.sg/enter-depart/entry_requirements/visa_requirements",
  },
  {
    icon: "▣",
    title: "SG Arrival Card (SGAC)",
    button: "Submit SG Arrival Card",
    href: "https://eservices.ica.gov.sg/arrivalcard/sgac",
  },
];

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function VisaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO                                                       */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(110,231,183,0.18),transparent_35%)]" />
        <div className="absolute -left-28 top-8 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="max-w-4xl animate-soft-fade-up">
            <div className="inline-flex rounded-full border border-emerald-300/30 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-100 backdrop-blur-md">
              Attendee Information
            </div>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Visa &amp; Immigration
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50/90 sm:text-xl">
              Official Singapore immigration and arrival resources for
              international conference participants.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* QUICK ACCESS                                               */}
      {/* ========================================================= */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className="hover-soft-card rounded-[2rem] border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-8"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-700">
                  {card.icon}
                </div>

                <h2 className="mx-auto mt-5 max-w-sm text-2xl font-black leading-tight text-slate-900">
                  {card.title}
                </h2>

                <ExternalLink
                  href={card.href}
                  className="mt-6 inline-flex rounded-xl bg-emerald-700 px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-lg shadow-emerald-200/40 transition hover:bg-emerald-800"
                >
                  {card.button}
                </ExternalLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* IMMIGRATION CHECKLIST                                      */}
      {/* ========================================================= */}
      <section id="visa" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.55fr_0.65fr] lg:items-start">
            <div>
              <div className="flex items-center gap-4">
                <div className="h-11 w-1.5 rounded-full bg-emerald-600" />

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
                    Before You Travel
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                    Immigration &amp; Visa Checklist
                  </h2>
                </div>
              </div>

              <div className="mt-9 rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-9">
                <h3 className="text-2xl font-black text-slate-900">
                  Before You Travel
                </h3>

                <div className="mt-6 space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
                  <div>
                    <p>
                      • Check whether you require a Singapore entry visa based
                      on your nationality:
                    </p>
                    <div className="mt-1 break-all pl-5">
                      <ExternalLink href="https://www.ica.gov.sg/enter-depart/entry_requirements/visa_requirements">
                        https://www.ica.gov.sg/enter-depart/entry_requirements/visa_requirements
                      </ExternalLink>
                    </div>
                  </div>

                  <div>
                    <p>
                      • Review the official arrival checklist issued by
                      Singapore authorities:
                    </p>
                    <div className="mt-1 break-all pl-5">
                      <ExternalLink href="https://safetravel.ica.gov.sg/arriving/overview">
                        https://safetravel.ica.gov.sg/arriving/overview
                      </ExternalLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* SGAC */}
              <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                    🛂
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                      Arrival Requirement
                    </p>

                    <h3 className="mt-1 text-3xl font-black text-slate-900">
                      SG Arrival Card (SGAC)
                    </h3>
                  </div>
                </div>

                <h4 className="mt-7 text-xl font-black text-slate-900">
                  Automated Clearance Initiative (ACI)
                </h4>

                <div className="mt-4 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                  <p>
                    The SG Arrival Card (SGAC) is an electronic arrival
                    declaration that replaces the paper arrival card. All
                    foreign visitors must submit the SG Arrival Card before
                    entering Singapore.
                  </p>

                  <p>
                    It includes an electronic health declaration and allows
                    eligible travelers to use automated immigration clearance
                    lanes at Singapore checkpoints.
                  </p>
                </div>

                <div className="mt-7 grid gap-7 md:grid-cols-2">
                  <div>
                    <h4 className="text-xl font-black text-slate-900">
                      Who Needs to Submit
                    </h4>

                    <p className="mt-3 text-base leading-7 text-slate-600">
                      All travelers are required to submit the SG Arrival Card,
                      except:
                    </p>

                    <ul className="mt-3 space-y-2 text-base leading-7 text-slate-600">
                      <li>
                        • Travelers transiting through Singapore without
                        seeking immigration clearance
                      </li>
                      <li>• Residents traveling through land checkpoints</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-black text-slate-900">
                      When to Submit
                    </h4>

                    <p className="mt-3 text-base leading-7 text-slate-600">
                      Submit your SG Arrival Card within three (3) days prior
                      to your arrival date.
                    </p>

                    <p className="mt-3 text-base leading-7 text-slate-600">
                      Example: If you arrive in Singapore on 30 June,
                      submission is available from 28 June onwards.
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-700">
                    Submission Portal
                  </p>

                  <div className="mt-2 break-all text-base">
                    <ExternalLink href="https://eservices.ica.gov.sg/sgarrivalcard/">
                      https://eservices.ica.gov.sg/sgarrivalcard/
                    </ExternalLink>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDE */}
            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-7 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                  Official Resources
                </p>

                <div className="mt-6 space-y-3">
                  <ExternalLink
                    href="https://www.ica.gov.sg/"
                    className="block rounded-2xl border border-emerald-100 bg-white p-4 text-sm font-black text-slate-900 transition hover:border-emerald-300 hover:text-emerald-700"
                  >
                    Singapore Immigration Updates
                  </ExternalLink>

                  <ExternalLink
                    href="https://www.ica.gov.sg/enter-depart/entry_requirements/visa_requirements"
                    className="block rounded-2xl border border-emerald-100 bg-white p-4 text-sm font-black text-slate-900 transition hover:border-emerald-300 hover:text-emerald-700"
                  >
                    Entry Requirements
                  </ExternalLink>

                  <ExternalLink
                    href="https://eservices.ica.gov.sg/arrivalcard/sgac"
                    className="block rounded-2xl border border-emerald-100 bg-white p-4 text-sm font-black text-slate-900 transition hover:border-emerald-300 hover:text-emerald-700"
                  >
                    SG Arrival Card (SGAC)
                  </ExternalLink>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                  Conference Support
                </p>

                <h3 className="mt-3 text-2xl font-black text-slate-900">
                  Invitation Letters
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Information regarding official invitation letters for visa
                  applications will be published by the conference organizers.
                </p>

                <span className="mt-5 inline-flex rounded-full bg-amber-50 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-amber-700">
                  Details TBA
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* LOWER INFORMATION                                          */}
      {/* ========================================================= */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                Travel Insurance
              </p>

              <h3 className="mt-3 text-2xl font-black text-slate-900">
                Travel Insurance
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Information on COVID-19 travel insurance and medical treatment
                for inbound travelers is available at the official SafeTravel
                website:
              </p>

              <div className="mt-4 break-all text-base">
                <ExternalLink href="https://safetravel.ica.gov.sg/health/insurance-and-treatment">
                  https://safetravel.ica.gov.sg/health/insurance-and-treatment
                </ExternalLink>
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                Attendee Guidance
              </p>

              <h3 className="mt-3 text-2xl font-black text-slate-900">
                Climate &amp; Dress Code
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Singapore has a tropical climate with an average temperature of
                around 28°C throughout the year.
              </p>

              <p className="mt-3 text-base leading-7 text-slate-600">
                Light and breathable clothing is recommended. Formal attire may
                be required for conference sessions or official events.
              </p>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                Safety
              </p>

              <h3 className="mt-3 text-2xl font-black text-slate-900">
                Safety
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Singapore is widely regarded as one of the safest cities in
                Asia. Delegates can expect a high level of personal security,
                supported by effective law enforcement and a low crime rate.
              </p>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                Visa Support
              </p>

              <h3 className="mt-3 text-2xl font-black text-slate-900">
                Invitation Letters
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                An official Letter of Invitation for visa application purposes
                will be provided after successful conference registration,
                subject to the conference organizers&apos; procedures.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 px-6 py-20">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-200">
            IEEE IEM-PESYS
          </p>

          <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Plan Your Journey to Singapore
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50/90">
            Please use the official Singapore government resources linked above
            for the most current immigration and arrival information.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
