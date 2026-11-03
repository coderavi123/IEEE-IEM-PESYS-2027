"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EXTERNAL_LINK_CLASS =
  "font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-4 transition hover:text-emerald-800 hover:decoration-emerald-500";

const QUICK_LINK_CLASS =
  "group flex min-h-14 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50/80 px-5 py-4 text-center text-sm font-black text-emerald-800 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-100 hover:shadow-md";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={EXTERNAL_LINK_CLASS}
    >
      {children}
    </a>
  );
}

export default function AbstractInformationPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO                                                       */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(110,231,183,0.18),transparent_35%)]" />
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-300/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="max-w-4xl animate-soft-fade-up">
            <div className="inline-flex rounded-full border border-emerald-300/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-100 backdrop-blur-md">
              Call for Papers
            </div>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Manuscript Submission
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50/90 sm:text-xl">
              Submission guidance, author resources, official templates and
              the conference submission portal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/abstract/submit"
                className="rounded-xl bg-white px-6 py-3.5 font-black text-emerald-900 shadow-lg transition hover:bg-emerald-50"
              >
                Submit Abstract
              </a>

              <a
                href="#paper-guidelines"
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                View Guidelines
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MAIN CONTENT                                               */}
      {/* ========================================================= */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[1.65fr_0.75fr]">
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              {/* Paper Preparation */}
              <article
                id="paper-guidelines"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-1.5 shrink-0 rounded-full bg-emerald-600" />

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                      Author Resources
                    </p>

                    <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                      Paper Preparation Guidelines
                    </h2>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                  All papers must follow the IEEE PES conference paper
                  preparation guidelines. Authors are strongly advised to review
                  the official instructions carefully before preparing their
                  manuscripts.
                </p>

                <div className="mt-6">
                  <ExternalLink href="https://ieee-pes.org/publications/authors-kit/preparation-and-submission-of-conference-technical-papers/">
                    Author Guidelines
                  </ExternalLink>
                </div>
              </article>

              {/* Conference Templates */}
              <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-1.5 shrink-0 rounded-full bg-emerald-600" />

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                      Official Format
                    </p>

                    <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                      IEEE Conference Templates
                    </h2>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                  Manuscripts should be prepared using the official IEEE
                  conference templates. Authors are encouraged to use the
                  approved formatting resources before final submission.
                </p>

                <div className="mt-6">
                  <ExternalLink href="https://www.ieee.org/conferences/publishing/templates">
                    IEEE Conference Templates
                  </ExternalLink>
                </div>
              </article>

              {/* Submission Portal */}
              <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-1.5 shrink-0 rounded-full bg-emerald-600" />

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                      Submission Portal
                    </p>

                    <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                      Manuscript Submission Portal
                    </h2>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                  Authors are required to submit their manuscripts through the
                  designated conference submission system. Please ensure that
                  your paper complies with the applicable IEEE PES guidelines
                  before submission.
                </p>

                <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
                    Conference Submission
                  </p>

                  <div className="mt-3">
                    <ExternalLink href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F">
                      Microsoft CMT – IEEE 2026 Submission
                    </ExternalLink>
                  </div>
                </div>
              </article>

              {/* Abstract Information */}
              <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-1.5 shrink-0 rounded-full bg-emerald-600" />

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                      Conference Submission
                    </p>

                    <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                      Abstract Submission
                    </h2>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                  Submit your research abstract through the IEEE IEM-PESYS
                  submission system. The official abstract template will be
                  made available once finalized.
                </p>

                <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-lg font-black text-slate-900">
                        Abstract Template
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Official template: Coming Soon
                      </p>
                    </div>

                    <span className="inline-flex w-fit rounded-full bg-slate-200 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-600">
                      Template Coming Soon
                    </span>
                  </div>
                </div>

                <a
                  href="/abstract/submit"
                  className="mt-7 inline-flex rounded-xl bg-emerald-600 px-7 py-3.5 font-black text-white shadow-lg shadow-emerald-200/40 transition hover:bg-emerald-700"
                >
                  Submit Abstract
                </a>
              </article>

              {/* More Sections */}
              <div className="grid gap-8 md:grid-cols-2">
                <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                    Camera-Ready Paper
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-slate-900">
                    Camera-Ready Paper
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    Detailed instructions for preparing and submitting the
                    camera-ready version of accepted papers will be announced
                    after the review process.
                  </p>

                  <p className="mt-3 text-sm font-semibold italic text-slate-500">
                    To be announced.
                  </p>
                </article>

                <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                    Presentation Requirement
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-slate-900">
                    Presentation Requirement
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    Presentation format, session instructions and related
                    participation requirements will be published with the
                    official programme.
                  </p>

                  <p className="mt-3 text-sm font-semibold italic text-slate-500">
                    To be announced.
                  </p>
                </article>

                <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8 md:col-span-2">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                    Publication
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-slate-900">
                    Publication
                  </h2>

                  <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
                    Publication arrangements, proceedings information and
                    indexing details will be updated after they are officially
                    confirmed by the organizing committee.
                  </p>
                </article>
              </div>
            </div>

            {/* ===================================================== */}
            {/* QUICK LINKS                                            */}
            {/* ===================================================== */}
            <aside className="xl:sticky xl:top-28 xl:h-fit">
              <div className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-sm sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                  Quick Links
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={QUICK_LINK_CLASS}
                  >
                    Microsoft CMT Portal
                  </a>

                  <a
                    href="/topics"
                    className={QUICK_LINK_CLASS}
                  >
                    Call for Papers &amp; Important Dates
                  </a>

                  <a
                    href="https://ieee-pes.org/publications/authors-kit/preparation-and-submission-of-conference-technical-papers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={QUICK_LINK_CLASS}
                  >
                    IEEE PES Author Guidelines
                  </a>

                  <a
                    href="https://www.ieee.org/conferences/publishing/templates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={QUICK_LINK_CLASS}
                  >
                    IEEE Conference Templates
                  </a>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm leading-6 text-slate-600">
                    The conference submission portal, author guidance and IEEE
                    template resources can be accessed directly from the links
                    above.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                  Need Help?
                </p>

                <h3 className="mt-3 text-2xl font-black text-slate-900">
                  Submission Support
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Official contact details and manuscript-related support
                  information will be updated here once finalized.
                </p>

                <a
                  href="/contact"
                  className="mt-6 inline-flex rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-black text-emerald-800 transition hover:bg-emerald-100"
                >
                  Contact Conference Team
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA                                                        */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 px-6 py-20">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-200">
            IEEE IEM-PESYS
          </p>

          <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Ready to submit your research?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50/90">
            Review the author resources and proceed to the IEEE IEM-PESYS
            abstract submission form.
          </p>

          <a
            href="/abstract/submit"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-black text-emerald-900 transition hover:bg-emerald-50"
          >
            Submit Abstract
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
