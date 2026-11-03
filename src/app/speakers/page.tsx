
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const speakerGroups = [
  {
    title: "Plenary Speaker(s)",
    count: 2,
  },
  {
    title: "Keynote Speaker(s)",
    count: 4,
  },
  {
    title: "Invited Speaker(s)",
    count: 4,
  },
];

function SpeakerCard() {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Placeholder Photo */}
      <div className="mx-auto flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-slate-100 to-slate-200">
        <span className="text-4xl text-slate-400" aria-hidden="true">
          👤
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-6 text-lg font-bold text-slate-900">
        TBA
      </h3>

      {/* Designation */}
      <p className="mt-2 text-sm leading-6 text-slate-500">
        Speaker details will be announced soon.
      </p>
    </article>
  );
}

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-950 via-green-900 to-emerald-700 px-6 py-24 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center animate-soft-fade-up">
          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            People
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Conference Speakers
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">
            Distinguished speakers contributing to the 1st IEEE International
            Conference on Integrated Energy Systems, Microgrids &amp; Power
            Engineering Systems.
          </p>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="text-center animate-soft-fade-up">
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              People
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured Speakers
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Speaker details and profiles will be published as they are
              officially confirmed.
            </p>
          </div>

          {/* Speaker Groups */}
          <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
            {speakerGroups.map((group) => (
              <section key={group.title}>
                <h3 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
                  {group.title}
                </h3>

                <div
                  className={`mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7 ${
                    group.count === 2
                      ? "max-w-3xl lg:grid-cols-2"
                      : "max-w-6xl lg:grid-cols-4"
                  }`}
                >
                  {Array.from({ length: group.count }, (_, index) => (
                    <SpeakerCard key={`${group.title}-${index}`} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Participants */}
      <section className="bg-slate-100 px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            People
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Industry Participants
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            Industrial and corporate leaders joining IEEE IEM-PESYS.
          </p>

          <div className="mx-auto mt-12 flex min-h-[180px] max-w-2xl items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-white px-8 py-10 shadow-sm hover-soft-card">
            <div>
              <p className="text-2xl font-semibold text-slate-900">
                Coming Soon...
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Industry participants will be announced shortly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
