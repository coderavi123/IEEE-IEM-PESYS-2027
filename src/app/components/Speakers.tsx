export default function Speakers() {
  const speakers = [
    {
      type: "Keynote Speaker",
      title: "Keynote Speaker",
    },
    {
      type: "Tutorial Speaker",
      title: "Tutorial Speaker",
    },
  ];

  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center animate-soft-fade-up">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
            Speakers
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Our Distinguished Speakers
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-600" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Distinguished speakers and experts from academia, research and
            industry will be featured at IEEE IEM-PESYS.
          </p>
        </div>

        {/* Speaker cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-7 md:grid-cols-2">
          {speakers.map((speaker) => (
            <article
              key={speaker.type}
              className="hover-soft-card overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
            >
              {/* Photo placeholder */}
              <div className="flex h-72 items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-600">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl text-white/80 backdrop-blur-sm">
                  +
                </div>
              </div>

              {/* Details */}
              <div className="p-7 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  {speaker.type}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {speaker.title}
                </h3>

                <p className="mt-3 text-sm font-medium text-slate-500">
                  Details Coming Soon
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}