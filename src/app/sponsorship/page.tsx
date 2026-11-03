import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sponsors = [
  {
    title: "Technical Sponsor",
    name: "IEEE PES Singapore Chapter",
    description:
      "Technical sponsorship supporting the conference and its focus on integrated energy systems, microgrids and power engineering systems.",
    logo: "/logos/singapore_chapter_pes.png",
    size: "large",
  },
  {
    title: "Technical Co-sponsors",
    name: "IEM-UEM Group",
    description:
      "Institute of Engineering & Management and University of Engineering & Management, Kolkata.",
    logo: "/logos/iem_logo_new.png",
    size: "medium",
  },
  {
    title: "Financial Support",
    name: "Smart Society",
    description:
      "Financial support contributing to the successful organization of IEEE IEM-PESYS 2027.",
    logo: "/logos/smart-society-usa.jpg",
    size: "medium",
  },
];

export default function SponsorshipPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO                                                      */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-emerald-800">
        {/* Background glow */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        {/* Grid effect */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex rounded-full border border-emerald-300/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200 backdrop-blur-md">
              Conference Partners
            </div>

            <h1 className="mt-7 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Sponsors &amp; Supporters
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
              IEEE IEM-PESYS 2027 is supported by organizations contributing
              to the technical, institutional and financial success of the
              conference.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO                                                     */}
      {/* ========================================================= */}

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Our Support Network
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Building the Conference Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            The conference brings together technical expertise, academic
            leadership and institutional support to create a meaningful
            international platform for researchers, academics, professionals
            and industry participants.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SPONSORS                                                  */}
      {/* ========================================================= */}

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {sponsors.map((sponsor, index) => (
              <div
                key={sponsor.name}
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  index === 0 ? "lg:scale-[1.02]" : ""
                }`}
              >
                {/* Top accent */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

                {/* Number */}
                <div className="absolute right-6 top-6 text-6xl font-black text-slate-100">
                  0{index + 1}
                </div>

                {/* Label */}
                <div className="relative">
                  <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                    {sponsor.title}
                  </span>
                </div>

                {/* Logo */}
                <div className="relative mt-10 flex h-40 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-6 transition duration-500 group-hover:bg-emerald-50">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`max-h-28 w-auto object-contain transition duration-500 group-hover:scale-105 ${
                      sponsor.size === "large"
                        ? "max-w-[280px]"
                        : "max-w-[220px]"
                    }`}
                  />
                </div>

                {/* Name */}
                <h3 className="relative mt-8 text-center text-2xl font-bold text-slate-900">
                  {sponsor.name}
                </h3>

                {/* Description */}
                <p className="relative mt-4 text-center leading-7 text-slate-600">
                  {sponsor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TECHNICAL SUPPORT                                         */}
      {/* ========================================================= */}

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-8 shadow-2xl sm:p-12 lg:p-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
              {/* LEFT CONTENT */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  Technical Sponsorship
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  IEEE PES Singapore Chapter
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                  Technical sponsorship provides an important foundation for
                  the conference&apos;s academic and professional focus in
                  energy systems, microgrids and power engineering.
                </p>
              </div>

              {/* LOGO */}
              <div className="flex min-h-[230px] min-w-[340px] items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <img
                  src="/logos/singapore_chapter_pes.png"
                  alt="IEEE PES Singapore Chapter"
                  className="h-auto w-[310px] max-h-[155px] object-contain transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INSTITUTIONAL SUPPORT                                     */}
      {/* ========================================================= */}

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Institutional Partnership
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
              IEM &amp; UEM
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Institute of Engineering &amp; Management and University of
              Engineering &amp; Management, Kolkata serve as the organizing
              institutions of IEEE IEM-PESYS 2027.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row">
            {/* IEM */}
            <div className="flex h-44 w-full max-w-sm items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img
                src="/logos/iem_logo_new.png"
                alt="Institute of Engineering & Management"
                className="max-h-28 w-auto max-w-[230px] object-contain"
              />
            </div>

            {/* Divider */}
            <div className="hidden h-16 w-px bg-slate-200 sm:block" />

            {/* UEM */}
            <div className="flex h-44 w-full max-w-sm items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img
                src="/logos/uem_logo_new.png"
                alt="University of Engineering & Management"
                className="max-h-28 w-auto max-w-[230px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINANCIAL SUPPORT                                         */}
      {/* ========================================================= */}

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Financial Support
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Smart Society, USA
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Financially supported by Smart Society, USA, contributing to the
            successful organization of the international conference.
          </p>

          {/* Smart Society Logo */}
          <div className="mx-auto mt-10 flex min-h-48 max-w-md items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-10 py-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img
              src="/logos/smart-society-usa.jpg"
              alt="Smart Society, USA"
              className="max-h-32 w-auto max-w-[280px] object-contain"
            />
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

          <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
            Our Sponsors Make It Possible
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            We gratefully acknowledge the organizations supporting the
            conference and helping create a platform for international
            knowledge exchange and collaboration.
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