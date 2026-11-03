const sponsors = [
  {
    label: "Technical Sponsor",
    name: "IEEE PES Singapore Chapter",
    logo: "/logos/singapore_chapter_pes.png",
  },
  {
    label: "Technical Co-sponsors",
    name: "IEM-UEM Group",
    logo: null,
  },
  {
    label: "Financial Support",
    name: "Smart Society",
    logo: "/logos/smart-society-usa.jpg",
  },
];

export default function SponsorshipSection() {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
            Support &amp; Partnership
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
            Sponsors &amp; Partners
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            The conference is supported by leading academic, professional and
            industry organizations.
          </p>
        </div>

        {/* Sponsor Cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                {sponsor.label}
              </p>

              {/* Logo Area */}
              <div className="mx-auto mt-7 flex h-32 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-5">
                {sponsor.name === "IEM-UEM Group" ? (
                  <div className="flex w-full items-center justify-center gap-5">
                    {/* IEM */}
                    <div className="flex h-[100px] w-[145px] items-center justify-center">
                      <img
                        src="/logos/iem_logo_new.png"
                        alt="IEM"
                        className="h-[100px] w-[145px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* UEM */}
                    <div className="flex h-[100px] w-[145px] items-center justify-center">
                      <img
                        src="/logos/uem_logo_new.png"
                        alt="UEM"
                        className="h-[100px] w-[145px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={sponsor.logo ?? ""}
                    alt={sponsor.name}
                    className="max-h-24 max-w-[210px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                )}
              </div>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                {sponsor.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-emerald-100 bg-emerald-50 px-6 py-5 text-center">
          <p className="text-sm font-medium leading-6 text-emerald-700">
            Additional sponsors, partners and supporting organizations will be
            added as they are officially confirmed.
          </p>
        </div>
      </div>
    </section>
  );
}