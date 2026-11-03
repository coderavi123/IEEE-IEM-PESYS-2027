"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tracks = [
  {
    number: "01",
    title: "Track 1 – Power-Electronics-Dominated Grids",
    topics: [
      "Advanced AC/DC converter topologies, fault detection and stability",
      "Grid code compliance for inverter-based resources",
      "Control and stability of low-inertia power systems",
      "Volt/VAR optimisation and dynamic voltage support",
      "Advanced protection, FLISR, SCADA and OMS for IBR-rich networks",
    ],
  },
  {
    number: "02",
    title: "Track 2 – Future Network Architectures and Planning",
    topics: [
      "Hybrid AC–DC systems and DC infrastructure",
      "HVDC, EHV transmission and next-generation distribution architectures",
      "Grid planning for electrification, digital loads and high power density",
      "Reliability planning with high penetration of inverter-based resources",
      "IEC 61850-based digital substations",
    ],
  },
  {
    number: "03",
    title: "Track 3 – Clean Energy Integration and Sector Coupling",
    topics: [
      "Energy storage, hybrid plants and multi-energy coupling",
      "Green hydrogen and power-to-X systems",
      "Advanced inverter technologies and EV–grid (G2V/V2G) integration",
      "System-level innovations for sustainable economic growth",
      "Regulatory and policy frameworks for sustainable power systems",
    ],
  },
  {
    number: "04",
    title: "Track 4 – Flexible Markets and Active Consumers",
    topics: [
      "Transactive energy and digital energy platforms",
      "Demand-side management and flexibility services",
      "Local energy markets, prosumers, aggregators and microgrids",
      "Ancillary services procurement and market design",
      "Big data analytics for energy management and trading",
    ],
  },
  {
    number: "05",
    title: "Track 5 – Resilient and Climate-Ready Infrastructure",
    topics: [
      "Resilience against high-impact, low-probability events",
      "Climate adaptation and infrastructure hardening",
      "Risk-informed planning and resilience metrics",
      "Critical infrastructure protection and rapid system restoration",
      "Cyber-secure protection and automation frameworks",
    ],
  },
  {
    number: "06",
    title: "Track 6 – Intelligent and Secure Grid Operations",
    topics: [
      "AI/ML for grid operation and asset management",
      "Digital twins, real-time simulation and co-simulation (incl. HIL)",
      "Cybersecurity risk assessment and threat mitigation",
      "Physics-aware cyber defence and secure communications",
      "Interoperability and standardisation across modern power systems",
    ],
  },
];

const importantDates = [
  {
    title: "Abstract Submission",
    items: ["Opening Date: TBA", "Submission Deadline: TBA"],
  },
  {
    title: "Acceptance Notification",
    items: ["Notification Date: TBA"],
  },
  {
    title: "Registration",
    items: ["Early Registration Deadline: TBA", "Regular Registration: TBA"],
  },
  {
    title: "Conference",
    items: ["Conference Date: TBA", "Venue: Singapore"],
  },
];

export default function TopicsPage() {
  const [openTrack, setOpenTrack] = useState<number | null>(null);

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

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl animate-soft-fade-up">
            <div className="inline-flex rounded-full border border-emerald-300/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-100 backdrop-blur-md">
              Research
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Topics &amp; Call for Papers
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-emerald-50/90">
              Explore the research areas of interest for IEEE IEM-PESYS.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROPOSED THEME                                             */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="hover-soft-card relative overflow-hidden rounded-[2.5rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-7 py-10 shadow-lg shadow-emerald-100/30 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-300/10 blur-3xl" />

            <div className="relative">
              <div className="flex flex-wrap items-center gap-4">
                <div className="h-10 w-1.5 rounded-full bg-emerald-600" />
                <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-700 sm:text-sm">
                  Proposed Theme
                </p>
              </div>

              <h2 className="mt-7 max-w-6xl text-3xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
                “Converter-Rich, Climate-Ready, Data-Driven Grids:
                <span className="block bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Engineering Asia-Pacific&apos;s Net-Zero Transition”
                </span>
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
                  Power Systems
                </span>
                <span className="rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
                  Grid Modernisation
                </span>
                <span className="rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
                  Net-Zero Transition
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONFERENCE OVERVIEW                                        */}
      {/* ========================================================= */}

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[1.55fr_0.9fr] xl:items-stretch">
            <article className="rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
              <div className="flex items-start gap-5">
                <div className="mt-1 h-12 w-1.5 shrink-0 rounded-full bg-emerald-600" />

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">
                    Conference Overview
                  </p>

                  <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
                    Powering the next generation of energy systems
                  </h2>
                </div>
              </div>

              <div className="mt-9 space-y-7 text-[1.12rem] leading-[2.05] text-slate-600 sm:text-[1.2rem]">
                <p>
                  The 1st International Conference on IEEE IEM PESYS 2026 will
                  be held in Singapore. Its theme is{" "}
                  <strong className="font-black text-slate-900">
                    &quot;Converter-Rich, Climate-Ready, Data-Driven Grids:
                    Engineering Asia-Pacific&apos;s Net-Zero Transition.&quot;
                  </strong>
                </p>
                
<p
  className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9"
  style={{
    textAlign: "justify",
    textJustify: "inter-word",
  }}
>
  The conference brings together researchers, industry professionals,
  utilities, policymakers, and educators to exchange ideas and present
  advances in power and energy systems. It focuses on
  power-electronics-dominated grids, clean energy integration, flexible
  markets, climate resilience, and intelligent, secure grid operations. As
  the first edition of the series, IEEE IEM PESYS aims to become a regular
  forum where academia and industry work together on the challenges of the
  energy transition. The technical program will include keynote speeches,
  panel sessions, tutorials, and peer-reviewed paper and poster
  presentations, covering both research breakthroughs and field-ready
  applications. With six technical tracks, IEEE IEM PESYS 2026 offers a
  platform for knowledge sharing, collaboration, and professional
  development.
</p>

              </div>

              <div className="mt-9 rounded-2xl border border-emerald-100 bg-emerald-50/80 px-6 py-5 text-base font-bold leading-7 text-emerald-800 sm:text-lg">
                <span className="mr-2">ℹ</span>
                The venue will be announced soon.
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/abstract"
                  className="inline-flex rounded-xl bg-emerald-600 px-7 py-3.5 font-black text-white shadow-lg shadow-emerald-200/40 transition hover:bg-emerald-700"
                >
                  Submit Abstract
                </a>

                <p className="text-sm font-medium text-slate-500">
                  View the submission process and abstract template.
                </p>
              </div>
            </article>

            <aside className="flex flex-col rounded-[2.25rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 shadow-sm sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-700">
                At a Glance
              </p>

              <div className="mt-8 grid gap-7 sm:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-2xl border border-emerald-100/80 bg-white/75 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Conference
                  </p>
                  <p className="mt-2 text-xl font-black leading-tight text-slate-900 sm:text-2xl">
                    IEEE IEM - PESYS 2026
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100/80 bg-white/75 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Venue
                  </p>
                  <p className="mt-2 text-2xl font-black text-slate-900">
                    Singapore
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Official venue: TBA
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100/80 bg-white/75 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Technical Tracks
                  </p>
                  <p className="mt-2 text-3xl font-black text-emerald-700">
                    06
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Six technical tracks
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100/80 bg-white/75 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Programme
                  </p>
                  <p className="mt-2 text-lg font-black leading-8 text-slate-900">
                    Keynotes · Panels
                    <br />
                    Tutorials · Papers
                    <br />
                    Posters
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100/80 bg-white/75 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Focus Areas
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-7 text-slate-700">
                    Power-electronics-dominated grids · Clean energy
                    integration · Flexible markets · Climate resilience ·
                    Intelligent and secure grid operations
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100/80 bg-emerald-700 p-5 text-white shadow-lg shadow-emerald-200/40">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-100">
                    Status
                  </p>
                  <p className="mt-2 text-xl font-black">
                    Venue to be announced
                  </p>
                  <p className="mt-2 text-sm leading-6 text-emerald-50/90">
                    Official information will be updated once confirmed.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONFERENCE TRACKS                                          */}
      {/* ========================================================= */}

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
              Technical Programme
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Conference Tracks
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Select a track to view the detailed research areas.
            </p>
          </div>

          <div className="space-y-3">
            {tracks.map((track, index) => {
              const isOpen = openTrack === index;

              return (
                <article
                  key={track.number}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-emerald-200 shadow-xl shadow-emerald-100/40"
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenTrack(isOpen ? null : index)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black transition ${
                        isOpen
                          ? "bg-emerald-600 text-white"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {track.number}
                    </span>

                    <span className="min-w-0 flex-1 text-base font-black leading-6 text-emerald-800 sm:text-xl">
                      {track.title}
                    </span>

                    <span
                      className={`ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg font-medium transition ${
                        isOpen
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 bg-white text-slate-500"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-6 sm:pb-7">
                      <ul className="space-y-3">
                        {track.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex gap-3 text-sm leading-7 text-slate-600 sm:text-base"
                          >
                            <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* IMPORTANT DATES                                            */}
      {/* ========================================================= */}

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                Conference Planning
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Important Dates
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Official submission, notification and registration dates will
                be updated as soon as they are confirmed.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <div className="space-y-7">
                {importantDates.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-base font-black text-slate-900">
                      {item.title}
                    </h3>

                    <div className="mt-2 space-y-1.5">
                      {item.items.map((value) => (
                        <p
                          key={value}
                          className="text-sm leading-6 text-slate-600"
                        >
                          • {value}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
