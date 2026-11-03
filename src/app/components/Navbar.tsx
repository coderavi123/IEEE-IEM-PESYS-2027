"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useState } from "react";

const ieeeLinks = [

  {

    label: "IEEE.org",

    href: "https://www.ieee.org/",

  },

  {

    label: "IEEE Xplore®",

    href: "https://ieeexplore.ieee.org/Xplore/home.jsp",

  },

  {

    label: "IEEE Standards",

    href: "https://standards.ieee.org/",

  },

  {

    label: "IEEE Spectrum",

    href: "https://spectrum.ieee.org/",

  },

  {

    label: "IEEE Sites",

    href: "https://www.ieee.org/sitemap.html",

  },

];

const navItems = [

  { label: "Home", href: "/" },

  { label: "Speakers", href: "/speakers" },

  { label: "Topics", href: "/topics" },

  { label: "Committee", href: "/committee" },

  { label: "Registration", href: "/registration" },

  {

    label: "CMT Acknowledgement",

    href: "/cmt-acknowledgement",

  },

  { label: "Venue", href: "/venue" },

  { label: "Sponsorship", href: "/sponsorship" },

  { label: "Contact", href: "/contact" },

];

const programItems = [

  ["Program Details", "/program#program-details"],

  ["Social Program", "/program#social-program"],

  ["PES YP Sessions", "/program#pes-yp"],

  ["Keynote Speakers", "/program#keynote-speakers"],

  ["Tutorials", "/program#tutorials"],

  ["Technical Tours", "/program#technical-tours"],

  ["Call for Industry Sessions", "/program#industry-sessions"],

];

const attendeeItems = [

  ["Venue & Accommodation", "/attendee#venue-accommodation"],

  ["Program Floorplan", "/attendee#program-floorplan"],

  ["Visa", "/attendee/visa"],

];

export default function Navbar() {

  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const [programOpen, setProgramOpen] = useState(false);

  const [attendeeOpen, setAttendeeOpen] = useState(false);

  const [mobileProgramOpen, setMobileProgramOpen] = useState(false);

  const [mobileAttendeeOpen, setMobileAttendeeOpen] = useState(false);

  const isActive = (href: string) => {

    if (href === "/") {

      return pathname === "/";

    }

    return (

      pathname === href ||

      pathname.startsWith(`${href}/`)

    );

  };

  const programIsActive =

    pathname === "/program" ||

    pathname.startsWith("/program/");

  const attendeeIsActive =

    pathname === "/attendee" ||

    pathname.startsWith("/attendee/");

  const closeDesktopMenus = () => {

    setProgramOpen(false);

    setAttendeeOpen(false);

  };

  const closeMobileMenu = () => {

    setMenuOpen(false);

    setMobileProgramOpen(false);

    setMobileAttendeeOpen(false);

  };

  return (

    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">

      {/* =========================================================

          IEEE TOP UTILITY BAR

          \========================================================= */}

      <div className="relative hidden overflow-hidden border-b border-white/10 bg-gradient-to-r from-[#071b2d] via-[#0b2833] via-50% to-[#06352f] lg:block">

        {/* Emerald glow */}

        <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-80 rounded-full bg-emerald-400/15 blur-3xl" />

        {/* Cyan glow */}

        <div className="pointer-events-none absolute left-[42%] -top-20 h-40 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        {/* Green glow */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-80 rounded-full bg-green-300/10 blur-3xl" />

        {/* Glass overlay */}

        <div className="pointer-events-none absolute inset-0 bg-white/[0.015]" />

        {/* Subtle grid */}

        <div

          className="pointer-events-none absolute inset-0 opacity-[0.055]"

          style={{

            backgroundImage:

              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",

            backgroundSize: "42px 42px",

          }}

        />

        <div className="relative mx-auto flex h-[46px] max-w-[1880px] items-center px-6 xl:px-10">

          <div className="flex items-center">

            {ieeeLinks.map((link, index) => (

              <a

                key={link.href}

                href={link.href}

                target="_blank"

                rel="noopener noreferrer"

                className="group relative flex h-[46px] items-center px-5 text-[13px] font-semibold tracking-wide text-slate-200 transition-all duration-300 hover:bg-white/[0.06] hover:text-white xl:px-6"

              >

                <span className="relative whitespace-nowrap">

                  {link.label}

                  <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)] transition-all duration-300 group-hover:w-full" />

                </span>

                {index < ieeeLinks.length - 1 && (

                  <span className="absolute right-0 top-1/2 h-4 w-px -translate-y-1/2 bg-white/10" />

                )}

              </a>

            ))}

          </div>

        </div>

      </div>

      {/* =========================================================

          DESKTOP BRANDING

          \========================================================= */}

      <div className="hidden lg:block">

        <div className="mx-auto flex min-h-[158px] max-w-[1880px] items-center px-6 xl:px-10">

          {/* LEFT LOGOS */}

          <div className="flex w-[32%] shrink-0 items-center justify-start gap-5">

            {/* IEEE */}

            <Link

              href="/"

              className="group flex h-[108px] w-[142px] shrink-0 items-center justify-center"

            >

              <img

                src="/logos/IEEE_LOGO-BG_REMOVE.png"

                alt="IEEE"

                className="h-[104px] w-[142px] object-contain transition duration-300 group-hover:scale-[1.04]"

              />

            </Link>

            {/* IEEE PES */}

            <Link

              href="/"

              className="group flex h-[108px] w-[142px] shrink-0 items-center justify-center"

            >

              <img

                src="/logos/ieee_pes.webp"

                alt="IEEE Power & Energy Society"

                className="h-[104px] w-[142px] object-contain transition duration-300 group-hover:scale-[1.04]"

              />

            </Link>

            {/* IEEE PES Singapore Chapter */}

            <Link

              href="/"

              className="group flex h-[108px] w-[180px] shrink-0 items-center justify-center"

            >

              <img

                src="/logos/singapore_chapter_pes.png"

                alt="IEEE PES Singapore Chapter"

                className="h-[104px] w-[180px] object-contain transition duration-300 group-hover:scale-[1.04]"

              />

            </Link>

          </div>

          {/* CENTER CONFERENCE BRANDING */}

          <Link

            href="/"

            className="flex min-w-0 flex-1 flex-col items-center justify-center px-8 text-center"

          >

            <p className="text-[17px] font-black uppercase tracking-[0.20em] text-emerald-700 xl:text-[19px]">

              1st IEEE INTERNATIONAL CONFERENCE ON

            </p>

            <p className="mt-3 max-w-[820px] text-[19px] font-bold leading-tight tracking-[0.01em] text-slate-600 xl:text-[21px]">

              Integrated Energy Systems, Microgrids & Power Engineering

              Systems

            </p>

            <h1 className="mt-3 text-[34px] font-black tracking-tight text-slate-950 xl:text-[40px]">

              IEEE IEM - PESYS 2027

            </h1>

          </Link>

          {/* RIGHT LOGOS */}

          
{/* RIGHT LOGOS — balanced size and spacing */}

<div className="flex w-[29%] min-w-0 shrink-0 items-center justify-end gap-3">

  {/* Conference Logo */}
  <Link
    href="/"
    aria-label="IEEE IEM-PESYS 2027 Conference"
    className="group flex h-[108px] min-w-0 flex-1 items-center justify-center"
  >
    <img
      src="/logos/Conference_logo_03.png"
      alt="IEEE IEM-PESYS 2027 Conference"
      className="h-[104px] w-full max-w-[150px] object-contain transition duration-300 group-hover:scale-[1.03]"
    />
  </Link>

  {/* IEM Logo */}
  <Link
    href="/"
    aria-label="Institute of Engineering and Management"
    className="group flex h-[108px] min-w-0 flex-1 items-center justify-center"
  >
    <img
      src="/logos/iem_logo_new.png"
      alt="Institute of Engineering & Management"
      className="h-[104px] w-full max-w-[150px] object-contain transition duration-300 group-hover:scale-[1.03]"
    />
  </Link>

  {/* UEM Logo */}
  <Link
    href="/"
    aria-label="University of Engineering and Management"
    className="group flex h-[108px] min-w-0 flex-1 items-center justify-center"
  >
    <img
      src="/logos/uem_logo_new.png"
      alt="University of Engineering & Management"
      className="h-[104px] w-full max-w-[150px] object-contain transition duration-300 group-hover:scale-[1.03]"
    />
  </Link>

</div>


        </div>

        {/* =======================================================

            DESKTOP NAVIGATION

            \======================================================= */}

        <nav className="border-t border-slate-200 bg-white">

          <div className="mx-auto flex h-[58px] max-w-[1880px] items-center justify-center px-6 xl:px-10">

            <div className="flex items-center gap-1.5 xl:gap-2">

              {/* NORMAL NAVIGATION */}

              {navItems.map((item) => (

                <Link

                  key={item.href}

                  href={item.href}

                  className={`group relative rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 xl:px-5 ${

                    isActive(item.href)

                      ? "bg-emerald-50 text-emerald-700"

                      : "text-slate-700 hover:-translate-y-[1px] hover:bg-slate-50 hover:text-emerald-700"

                  }`}

                >

                  {item.label}

                  <span

                    className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-emerald-600 transition-all duration-300 ${

                      isActive(item.href)

                        ? "w-6"

                        : "w-0 group-hover:w-6"

                    }`}

                  />

                </Link>

              ))}

              {/* =================================================

                  PROGRAM DROPDOWN

                  \================================================= */}

              <div className="relative">

                <button

                  type="button"

                  onClick={() => {

                    setProgramOpen((current) => !current);

                    setAttendeeOpen(false);

                  }}

                  className={`relative flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 xl:px-5 ${

                    programIsActive

                      ? "bg-emerald-50 text-emerald-700"

                      : "text-slate-700 hover:-translate-y-[1px] hover:bg-slate-50 hover:text-emerald-700"

                  }`}

                >

                  Program

                  <span

                    className={`text-[11px] transition-transform duration-200 ${

                      programOpen ? "rotate-180" : ""

                    }`}

                  >

                    ▼

                  </span>

                </button>

                {programOpen && (

                  <div className="absolute left-1/2 top-full z-[70] mt-2 w-[330px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl animate-soft-fade-in">

                    {programItems.map(([label, href]) => (

                      <Link

                        key={href}

                        href={href}

                        onClick={closeDesktopMenus}

                        className="block rounded-xl px-4 py-3 text-sm font-semibold leading-5 text-slate-700 transition-all duration-200 hover:translate-x-1 hover:bg-emerald-50 hover:text-emerald-700"

                      >

                        {label}

                      </Link>

                    ))}

                  </div>

                )}

              </div>

              {/* =================================================

                  ATTENDEE INFORMATION DROPDOWN

                  \================================================= */}

              <div className="relative">

                <button

                  type="button"

                  onClick={() => {

                    setAttendeeOpen((current) => !current);

                    setProgramOpen(false);

                  }}

                  className={`relative flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 xl:px-5 ${

                    attendeeIsActive

                      ? "bg-emerald-50 text-emerald-700"

                      : "text-slate-700 hover:-translate-y-[1px] hover:bg-slate-50 hover:text-emerald-700"

                  }`}

                >

                  Attendee Information

                  <span

                    className={`text-[11px] transition-transform duration-200 ${

                      attendeeOpen ? "rotate-180" : ""

                    }`}

                  >

                    ▼

                  </span>

                </button>

                {attendeeOpen && (

                  <div className="absolute left-1/2 top-full z-[70] mt-2 w-[280px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl animate-soft-fade-in">

                    {attendeeItems.map(([label, href]) => (

                      <Link

                        key={href}

                        href={href}

                        onClick={closeDesktopMenus}

                        className="block rounded-xl px-4 py-3 text-sm font-semibold leading-5 text-slate-700 transition-all duration-200 hover:translate-x-1 hover:bg-emerald-50 hover:text-emerald-700"

                      >

                        {label}

                      </Link>

                    ))}

                  </div>

                )}

              </div>

            </div>

          </div>

        </nav>

      </div>

      {/* =======================================================

          MOBILE / TABLET HEADER

          \======================================================= */}

      <nav className="flex min-h-[82px] items-center px-4 sm:px-6 lg:hidden">

        <Link

          href="/"

          className="flex min-w-0 items-center gap-3"

        >

          <div className="flex h-12 w-12 shrink-0 items-center justify-center">

            <img

              src="/logos/IEEE_LOGO-BG_REMOVE.png"

              alt="IEEE"

              className="max-h-9 w-auto object-contain"

            />

          </div>

          <div className="min-w-0">

            <p className="truncate text-[9px] font-black uppercase tracking-[0.18em] text-emerald-700">

              1st IEEE International Conference on

            </p>

            <p className="mt-1 text-base font-black tracking-tight text-slate-900">

              IEEE IEM - PESYS 2027

            </p>

          </div>

        </Link>

        {/* MOBILE MENU BUTTON */}

        <button

          type="button"

          aria-label={

            menuOpen

              ? "Close navigation menu"

              : "Open navigation menu"

          }

          aria-expanded={menuOpen}

          onClick={() =>

            setMenuOpen((current) => !current)

          }

          className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-emerald-200 hover:text-emerald-700"

        >

          <span className="relative block h-5 w-5">

            <span

              className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition ${

                menuOpen

                  ? "top-2 rotate-45"

                  : ""

              }`}

            />

            <span

              className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-current transition ${

                menuOpen

                  ? "opacity-0"

                  : ""

              }`}

            />

            <span

              className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition ${

                menuOpen

                  ? "top-2 -rotate-45"

                  : ""

              }`}

            />

          </span>

        </button>

      </nav>

      {/* =======================================================

          MOBILE MENU

          \======================================================= */}

      <div

        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${

          menuOpen

            ? "max-h-[1500px] opacity-100"

            : "max-h-0 opacity-0"

        }`}

      >

        <div className="px-4 pb-5 pt-3 sm:px-6">

          {/* MOBILE IEEE LINKS */}

          <div className="mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-2">

            <p className="px-3 pb-2 pt-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">

              IEEE Resources

            </p>

            <div className="grid grid-cols-2 gap-1">

              {ieeeLinks.map((link) => (

                <a

                  key={link.href}

                  href={link.href}

                  target="_blank"

                  rel="noopener noreferrer"

                  onClick={closeMobileMenu}

                  className="rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:bg-white hover:text-emerald-700 hover:shadow-sm"

                >

                  {link.label}

                </a>

              ))}

            </div>

          </div>

          {/* MOBILE TOP LOGOS */}

          <div className="grid grid-cols-3 gap-2 border-b border-slate-200 pb-4">

            <div className="flex h-16 items-center justify-center">

              <img

                src="/logos/IEEE_LOGO-BG_REMOVE.png"

                alt="IEEE"

                className="max-h-10 w-auto object-contain"

              />

            </div>

            <div className="flex h-16 items-center justify-center">

              <img

                src="/logos/ieee_pes.webp"

                alt="IEEE PES"

                className="max-h-11 w-auto object-contain"

              />

            </div>

            <div className="flex h-16 items-center justify-center">

              <img

                src="/logos/singapore_chapter_pes.png"

                alt="IEEE PES Singapore Chapter"

                className="max-h-10 w-auto max-w-full object-contain"

              />

            </div>

          </div>

          {/* MOBILE CONFERENCE BRANDING */}

          <div className="mt-4 text-center">

            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700">

              1st IEEE International Conference on

            </p>

            <p className="mt-2 text-sm font-bold leading-6 text-slate-600">

              Integrated Energy Systems, Microgrids &

              Power Engineering Systems

            </p>

            <p className="mt-2 text-xl font-black text-slate-900">

              IEEE IEM - PESYS 2027

            </p>

          </div>

          {/* MOBILE LINKS */}

          <div className="mt-4 grid gap-1">

            {navItems.map((item) => (

              <Link

                key={item.href}

                href={item.href}

                onClick={closeMobileMenu}

                className={`rounded-xl px-4 py-3.5 text-sm font-bold transition ${

                  isActive(item.href)

                    ? "bg-emerald-50 text-emerald-700"

                    : "text-slate-700 hover:bg-slate-50 hover:text-emerald-700"

                }`}

              >

                {item.label}

              </Link>

            ))}

            {/* MOBILE PROGRAM */}

            <button

              type="button"

              onClick={() =>

                setMobileProgramOpen(

                  (current) => !current

                )

              }

              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition ${

                programIsActive ||

                mobileProgramOpen

                  ? "bg-emerald-50 text-emerald-700"

                  : "text-slate-700 hover:bg-slate-50 hover:text-emerald-700"

              }`}

            >

              <span>Program</span>

              <span

                className={`transition-transform duration-200 ${

                  mobileProgramOpen

                    ? "rotate-180"

                    : ""

                }`}

              >

                ▼

              </span>

            </button>

            {mobileProgramOpen && (

              <div className="ml-3 space-y-1 border-l-2 border-emerald-100 pl-3">

                {programItems.map(([label, href]) => (

                  <Link

                    key={href}

                    href={href}

                    onClick={closeMobileMenu}

                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"

                  >

                    {label}

                  </Link>

                ))}

              </div>

            )}

            {/* MOBILE ATTENDEE INFORMATION */}

            <button

              type="button"

              onClick={() =>

                setMobileAttendeeOpen(

                  (current) => !current

                )

              }

              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition ${

                attendeeIsActive ||

                mobileAttendeeOpen

                  ? "bg-emerald-50 text-emerald-700"

                  : "text-slate-700 hover:bg-slate-50 hover:text-emerald-700"

              }`}

            >

              <span>Attendee Information</span>

              <span

                className={`transition-transform duration-200 ${

                  mobileAttendeeOpen

                    ? "rotate-180"

                    : ""

                }`}

              >

                ▼

              </span>

            </button>

            {mobileAttendeeOpen && (

              <div className="ml-3 space-y-1 border-l-2 border-emerald-100 pl-3">

                {attendeeItems.map(([label, href]) => (

                  <Link

                    key={href}

                    href={href}

                    onClick={closeMobileMenu}

                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"

                  >

                    {label}

                  </Link>

                ))}

              </div>

            )}

          </div>

          {/* MOBILE IEM + UEM */}

          <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-200 pt-5">

            <div className="flex h-20 w-full items-center justify-center">

              <img

                src="/logos/iem_logo_new.png"

                alt="IEM"

                className="h-[64px] w-[150px] object-contain"

              />

            </div>

            <div className="flex h-20 w-full items-center justify-center">

              <img

                src="/logos/uem_logo_new.png"

                alt="UEM"

                className="h-[64px] w-[150px] object-contain"

              />

            </div>

          </div>

        </div>

      </div>

    </header>

  );

}