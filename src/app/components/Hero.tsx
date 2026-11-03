"use client";

import { useEffect, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const conferenceStart = new Date(
  "2027-06-21T00:00:00+08:00"
).getTime();

function getCountdown(): Countdown {
  const difference = conferenceStart - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

const organizerLogos = [
  {
    name: "IEEE PES Singapore Chapter",
    src: "/logos/singapore_chapter_pes.png",
    className:
      "h-[88px] w-[210px] sm:h-[98px] sm:w-[230px] lg:h-[108px] lg:w-[250px]",
  },
  {
    name: "Institute of Engineering & Management",
    src: "/logos/iem_logo_new.png",
    className:
      "h-[82px] w-[170px] sm:h-[92px] sm:w-[190px] lg:h-[102px] lg:w-[205px]",
  },
  {
    name: "University of Engineering & Management",
    src: "/logos/uem_logo_new.png",
    className:
      "h-[82px] w-[170px] sm:h-[92px] sm:w-[190px] lg:h-[102px] lg:w-[205px]",
  },
  {
    name: "Smart Society USA",
    src: "/logos/smart-society-usa.jpg",
    className:
      "h-[82px] w-[170px] sm:h-[92px] sm:w-[190px] lg:h-[102px] lg:w-[205px]",
  },
];

export default function Hero() {
  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setCountdown(getCountdown());

    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const countdownItems = [
    ["days", "Days"],
    ["hours", "Hours"],
    ["minutes", "Minutes"],
    ["seconds", "Seconds"],
  ] as const;

  return (
    <section className="relative overflow-hidden bg-emerald-950 text-white">

      {/* ================================================= */}
      {/* CINEMATIC BACKGROUND VIDEO                       */}
      {/* ================================================= */}

      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/places/singapore-skyline-1.jpeg"
          className="h-full w-full object-cover"
        >
          <source
            src="/videos/singapore-cinematic.mp4"
            type="video/mp4"
          />
        </video>

        {/* Lighter green overlay so the video remains clearly visible */}
        <div className="absolute inset-0 bg-emerald-950/40" />

        {/* Soft readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/55 via-emerald-950/30 to-emerald-900/45" />

        {/* Subtle bottom darkening */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-950/50 to-transparent" />

        {/* Very subtle cinematic green glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(110,231,183,0.10),transparent_35%)]" />

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,44,34,0.20)_100%)]" />
      </div>

      {/* ================================================= */}
      {/* SUBTLE BACKGROUND GLOWS                          */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute -left-40 top-10 z-[1] h-96 w-96 rounded-full bg-emerald-400/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 z-[1] h-96 w-96 rounded-full bg-green-300/5 blur-3xl" />

      {/* ================================================= */}
      {/* GRID OVERLAY                                     */}
      {/* ================================================= */}

      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ================================================= */}
      {/* HERO CONTENT                                     */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl animate-soft-fade-up">

          {/* CONFERENCE LABEL */}
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200 sm:text-base lg:text-lg">
            1st IEEE International Conference on
          </p>

          {/* MAIN TITLE */}
          <h1 className="mx-auto mt-7 max-w-6xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            Integrated Energy Systems, Microgrids &amp; Power Engineering
            Systems
            <span className="text-emerald-100">
              {" "}
              (IEEE IEM - PESYS), 2027
            </span>
          </h1>

          {/* DATE */}
          <div className="mt-9 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white px-8 py-4 text-lg font-black tracking-wide text-emerald-900 shadow-2xl shadow-emerald-950/30 sm:px-10 sm:text-xl">
              21
              <sup className="relative -top-1 ml-0.5 text-xs sm:text-sm">
                st
              </sup>

              <span className="mx-2 sm:mx-3">-</span>

              23
              <sup className="relative -top-1 ml-0.5 text-xs sm:text-sm">
                rd
              </sup>

              <span className="ml-2 sm:ml-3">
                June, 2027
              </span>
            </div>
          </div>

          {/* ================================================= */}
          {/* ORGANIZED BY                                    */}
          {/* ================================================= */}

          <div className="mt-12">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-200 sm:text-sm">
              Organized by
            </p>

            <div className="mx-auto mt-7 grid max-w-6xl grid-cols-2 items-center justify-items-center gap-5 md:grid-cols-4 md:gap-7">
              {organizerLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex h-[118px] w-full max-w-[270px] items-center justify-center rounded-[22px] border border-slate-200 bg-white px-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[126px]"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`${logo.className} object-contain`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* SINGAPORE                                      */}
          {/* ================================================= */}

          <div className="mt-9">
            <p className="text-3xl font-black uppercase tracking-[0.16em] text-white sm:text-4xl">
              📍Singapore
            </p>
          </div>

          {/* ================================================= */}
          {/* COUNTDOWN                                      */}
          {/* ================================================= */}

          <div className="mt-11">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-emerald-200">
              Conference Begins In
            </p>

            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
              {countdownItems.map(([key, label]) => (
                <div
                  key={key}
                  className="rounded-2xl border border-white/20 bg-white/10 px-5 py-7 shadow-lg backdrop-blur-md"
                >
                  <div className="text-4xl font-black text-white md:text-5xl">
                    {String(countdown[key]).padStart(2, "0")}
                  </div>

                  <div className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-emerald-200">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* BUTTONS                                        */}
          {/* ================================================= */}

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/registration"
              className="rounded-xl bg-white px-8 py-4 font-bold text-emerald-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-xl"
            >
              Register Now
            </a>

            <a
              href="/topics"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              Call for Papers
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}