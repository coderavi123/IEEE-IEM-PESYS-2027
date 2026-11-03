"use client";

import { useState } from "react";

const agenda = {
  "Day 1": [
    {
      time: "09:00",
      title: "Registration & Welcome",
      description: "Conference registration and welcome kit distribution.",
    },
    {
      time: "10:00",
      title: "Inaugural Session",
      description: "Details Coming Soon",
    },
    {
      time: "11:30",
      title: "Keynote / Plenary Session",
      description: "Details Coming Soon",
    },
    {
      time: "14:00",
      title: "Technical Session",
      description: "Details Coming Soon",
    },
    {
      time: "16:30",
      title: "Poster Session",
      description: "Details Coming Soon",
    },
  ],

  "Day 2": [
    {
      time: "09:30",
      title: "Technical Session",
      description: "Details Coming Soon",
    },
    {
      time: "11:30",
      title: "Keynote / Plenary Session",
      description: "Details Coming Soon",
    },
    {
      time: "14:00",
      title: "Technical Session",
      description: "Details Coming Soon",
    },
    {
      time: "16:30",
      title: "Panel / Industry Session",
      description: "Details Coming Soon",
    },
  ],

  "Day 3": [
    {
      time: "09:30",
      title: "Technical Session",
      description: "Details Coming Soon",
    },
    {
      time: "11:30",
      title: "Special Session",
      description: "Details Coming Soon",
    },
    {
      time: "14:00",
      title: "Valedictory Session",
      description: "Details Coming Soon",
    },
    {
      time: "16:00",
      title: "Conference Concludes",
      description: "Details Coming Soon",
    },
  ],
};

type Day = keyof typeof agenda;

export default function ConferenceAgenda() {
  const [activeDay, setActiveDay] = useState<Day>("Day 1");

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
            Schedule
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
            Conference Agenda
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Detailed conference schedule will be announced soon.
          </p>

          {/* OVERALL CONFERENCE DATE */}
          <div className="mt-7 flex justify-center">
            <div className="rounded-full bg-emerald-900 px-7 py-3 text-base font-bold text-white shadow-md sm:text-lg">
              21
              <sup className="relative -top-1 ml-0.5 text-xs">
                st
              </sup>{" "}
              June – 23
              <sup className="relative -top-1 ml-0.5 text-xs">
                rd
              </sup>{" "}
              June, 2027
            </div>
          </div>
        </div>

        {/* Day Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {(Object.keys(agenda) as Day[]).map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => setActiveDay(day)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                activeDay === day
                  ? "bg-green-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-800 hover:bg-slate-200"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Agenda Cards */}
        <div className="mt-10 space-y-4">
          {agenda[activeDay].map((item, index) => (
            <div
              key={`${item.time}-${item.title}`}
              className={`rounded-2xl border bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:px-6 ${
                index === 0
                  ? "border-emerald-400"
                  : "border-slate-200"
              }`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                {/* Time */}
                <div className="flex w-fit min-w-[105px] items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-green-800">
                  <span className="text-base">◷</span>
                  {item.time}
                </div>

                {/* Session */}
                <div>
                  <h3
                    className={`text-lg font-bold ${
                      index === 0
                        ? "text-green-800"
                        : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 px-6 py-5 text-center">
          <p className="text-sm font-medium text-emerald-700">
            Detailed session titles, speakers and timings will be updated
            after the official programme is finalized.
          </p>
        </div>
      </div>
    </section>
  );
}