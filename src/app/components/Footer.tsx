import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.3fr]">
          {/* ===================================================== */}
          {/* BRAND                                                  */}
          {/* ===================================================== */}

          <div>
            <div className="flex items-center gap-5">
              {/* IEEE LOGO */}
              <Link
                href="/"
                className="flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-2xl bg-white p-3 transition duration-300 hover:scale-[1.03]"
              >
                <img
                  src="/logos/IEEE_LOGO-BG_REMOVE.png"
                  alt="IEEE"
                  className="h-[58px] w-[58px] object-contain"
                />
              </Link>

              {/* BRAND TEXT */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
                  1st IEEE International Conference on
                </h3>

                <h3 className="mt-2 text-2xl font-black tracking-tight text-white">
                  IEEE IEM - PESYS 2027
                </h3>
              </div>
            </div>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-400">
              1st IEEE International Conference on Integrated Energy Systems,
              Microgrids &amp; Power Engineering Systems.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Organized by Institute of Engineering &amp; Management and
              University of Engineering &amp; Management, Kolkata, India.
            </p>

            {/* DATE + LOCATION */}
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-300">
                21st - 23rd June, 2027
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-300">
                Singapore
              </span>
            </div>
          </div>

          {/* ===================================================== */}
          {/* QUICK LINKS                                            */}
          {/* ===================================================== */}

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.28em] text-emerald-400">
              Quick Links
            </h4>

            <div className="mt-6 space-y-4 text-sm">
              <Link
                href="/"
                className="block text-slate-400 transition hover:text-emerald-300"
              >
                Home
              </Link>

              <Link
                href="/speakers"
                className="block text-slate-400 transition hover:text-emerald-300"
              >
                Speakers
              </Link>

              <Link
                href="/topics"
                className="block text-slate-400 transition hover:text-emerald-300"
              >
                Topics
              </Link>

              <Link
                href="/committee"
                className="block text-slate-400 transition hover:text-emerald-300"
              >
                Committee
              </Link>

              <Link
                href="/registration"
                className="block text-slate-400 transition hover:text-emerald-300"
              >
                Registration
              </Link>

              <Link
                href="/venue"
                className="block text-slate-400 transition hover:text-emerald-300"
              >
                Venue
              </Link>

              <Link
                href="/contact"
                className="block text-slate-400 transition hover:text-emerald-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* ===================================================== */}
          {/* CONFERENCE                                             */}
          {/* ===================================================== */}

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.28em] text-emerald-400">
              Conference
            </h4>

            <div className="mt-6 space-y-4 text-sm leading-6">
              <div>
                <p className="text-slate-500">Location</p>
                <p className="mt-1 font-semibold text-slate-300">
                  Singapore
                </p>
              </div>

              <div>
                <p className="text-slate-500">Conference Dates</p>
                <p className="mt-1 font-semibold text-slate-300">
                  21st - 23rd June, 2027
                </p>
              </div>

              <div>
                <p className="text-slate-500">Conference</p>
                <p className="mt-1 font-semibold text-slate-300">
                  IEEE IEM-PESYS 2027
                </p>
              </div>

              <div>
                <p className="text-slate-500">Organized By</p>
                <p className="mt-1 font-semibold text-slate-300">
                  IEM &amp; UEM
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* SUPPORTED BY                                           */}
          {/* ===================================================== */}

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.28em] text-emerald-400">
              Supported By
            </h4>

            <div className="mt-7 grid grid-cols-2 gap-5">
              {/* IEM */}
              <div className="flex h-[110px] items-center justify-center rounded-2xl bg-white px-5 py-4 shadow-lg transition duration-300 hover:-translate-y-1">
                <img
                  src="/logos/iem_logo_new.png"
                  alt="Institute of Engineering & Management"
                  className="h-[82px] w-[145px] object-contain"
                />
              </div>

              {/* UEM */}
              <div className="flex h-[110px] items-center justify-center rounded-2xl bg-white px-5 py-4 shadow-lg transition duration-300 hover:-translate-y-1">
                <img
                  src="/logos/uem_logo_new.png"
                  alt="University of Engineering & Management"
                  className="h-[82px] w-[145px] object-contain"
                />
              </div>

              {/* IEEE PES Singapore Chapter */}
              <div className="col-span-2 flex h-[110px] items-center justify-center rounded-2xl bg-white px-6 py-4 shadow-lg transition duration-300 hover:-translate-y-1">
                <img
                  src="/logos/singapore_chapter_pes.png"
                  alt="IEEE PES Singapore Chapter"
                  className="h-[78px] w-[270px] object-contain"
                />
              </div>
              <div className="col-span-2 flex h-[110px] items-center justify-center rounded-2xl bg-white px-6 py-4 shadow-lg transition duration-300 hover:-translate-y-1">
                <img
                  src="/logos/smart-society-usa.jpg"
                  alt="IEEE Smart Society USA"
                  className="h-[78px] w-[270px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* DIVIDER                                                */}
        {/* ===================================================== */}

        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-slate-400">
                © 2027 IEEE IEM-PESYS. All rights reserved.
              </p>

              <p className="mt-1 text-slate-600">
                Institute of Engineering &amp; Management · University of
                Engineering &amp; Management
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </footer>
  );
}