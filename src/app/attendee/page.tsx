import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const venueHighlights = [
  {
    image: "/places/singapore-skyline-1.jpeg",
    alt: "Singapore skyline",
  },
  {
    image: "/places/singapore-cityscape.jpeg",
    alt: "Singapore cityscape",
  },
  {
    image: "/places/singapore-skyline-2.jpeg",
    alt: "Singapore at night",
  },
];

const accommodationOptions = [
  {
    name: "Recommended Accommodation Option 01",
    image: "/places/marina-bay-sands.jpeg",
  },
  {
    name: "Recommended Accommodation Option 02",
    image: "/places/singapore-cityscape.jpeg",
  },
  {
    name: "Recommended Accommodation Option 03",
    image: "/places/sentosa-island.jpeg",
  },
];

function TbaLine({ label }: { label: string }) {
  return (
    <p className="text-sm leading-7 text-slate-600">
      <span className="font-bold text-slate-800">{label}:</span> TBA
    </p>
  );
}

export default function AttendeePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO                                                      */}
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
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl animate-soft-fade-up">
            <div className="inline-flex rounded-full border border-emerald-300/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-100 backdrop-blur-md">
              Attendee Information
            </div>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
              Venue &amp; Accommodation
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50/90">
              Information for delegates planning their visit to Singapore for
              IEEE IEM-PESYS 2027.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur">
                Singapore
              </div>

              <div className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur">
                Conference Venue: TBA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VISUAL HIGHLIGHTS                                         */}
      {/* ========================================================= */}

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {venueHighlights.map((item, index) => (
              <div
                key={item.image}
                className={`overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm ${
                  index === 1 ? "hover-soft-card" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VENUE                                                      */}
      {/* ========================================================= */}

      <section
        id="venue-accommodation"
        className="scroll-mt-28 border-t border-slate-200 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <div className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Conference Venue
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              IEEE IEM-PESYS 2027 Venue
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.55fr_0.65fr] lg:items-start">
            <div>
              <h3 className="text-3xl font-black italic tracking-tight text-emerald-800 sm:text-4xl">
                TBA
              </h3>

              <div className="mt-7 max-w-4xl space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  The official conference venue and detailed venue information
                  will be announced by the organizing committee.
                </p>

                <p>
                  Venue facilities, accessibility information, transportation
                  guidance and other attendee-related details will be updated
                  here once finalized.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Quick Facts
              </p>

              <div className="mt-5 space-y-5">
                <TbaLine label="Venue" />
                <TbaLine label="Location" />
                <TbaLine label="Conference Dates" />
                <TbaLine label="Nearest Transport" />
                <TbaLine label="Accessibility" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ACCOMMODATION                                             */}
      {/* ========================================================= */}

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Delegate Stay
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Accommodation
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Recommended hotels, conference rates, booking instructions and
              stay information will be published after confirmation by the
              organizers.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {accommodationOptions.map((hotel, index) => (
              <article
                key={hotel.name}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100"
              >
                <div className="grid lg:grid-cols-[360px_1fr]">
                  <div className="min-h-[280px] overflow-hidden bg-slate-100">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-7 sm:p-9">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                          Accommodation Option {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                          {hotel.name}
                        </h3>
                      </div>

                      <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
                        TBA
                      </span>
                    </div>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                      Official hotel description and conference-specific
                      accommodation information will be published here.
                    </p>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 p-5">
                        <p className="text-sm font-black text-slate-900">
                          Key Information
                        </p>
                        <div className="mt-3 space-y-1">
                          <TbaLine label="Distance to Venue" />
                          <TbaLine label="Nearest MRT" />
                          <TbaLine label="Stay Period" />
                          <TbaLine label="Room Type" />
                        </div>
                      </div>

                      <div className="rounded-2xl bg-emerald-50 p-5">
                        <p className="text-sm font-black text-slate-900">
                          Conference Rates
                        </p>
                        <div className="mt-3 space-y-1">
                          <TbaLine label="Special Rate" />
                          <TbaLine label="Rate Includes" />
                          <TbaLine label="Booking Link" />
                          <TbaLine label="Cancellation Policy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-center sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Accommodation Notice
            </p>

            <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-700">
              Hotel names, rates, booking links, negotiated conference rates
              and other accommodation details are currently TBA.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROGRAM FLOORPLAN                                          */}
      {/* ========================================================= */}

      <section
        id="program-floorplan"
        className="scroll-mt-28 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <div className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Attendee Information
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Program Floorplan
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              The official floorplan for IEEE IEM-PESYS 2027 will be published
              here once the venue and programme layout are finalized.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              { label: "Venue", value: "TBA" },
              { label: "Address", value: "TBA" },
              { label: "Nearest MRT Station", value: "TBA" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border-l-4 border-emerald-500 bg-slate-50 p-6 shadow-sm"
              >
                <p className="text-lg font-black text-emerald-700">
                  {item.label}
                </p>

                <p className="mt-3 text-base font-semibold leading-7 text-slate-700">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-black text-emerald-800 sm:text-3xl">
              Floorplan Details
            </h3>

            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              The floorplan will indicate the locations of conference halls,
              meeting rooms, registration, exhibition areas, attendee
              facilities and other programme-related spaces. All details are
              currently TBA.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
            <div className="flex min-h-[520px] items-center justify-center p-6 sm:p-10">
              <div className="flex min-h-[420px] w-full max-w-6xl items-center justify-center rounded-3xl border-2 border-dashed border-emerald-200 bg-white p-8 text-center shadow-inner sm:p-12">
                <div className="max-w-xl">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50 text-3xl text-emerald-700">
                    ⌘
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                    Floorplan Placeholder
                  </p>

                  <h4 className="mt-3 text-3xl font-black text-slate-900">
                    TBA
                  </h4>

                  <p className="mt-4 text-base leading-7 text-slate-600">
                    The official programme floorplan will be inserted here
                    after it is provided and approved by the organizing
                    committee.
                  </p>

                  <div className="mt-6 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                    Details to be updated later
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Conference Halls: TBA",
              "Registration Area: TBA",
              "Exhibition / Networking Area: TBA",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-bold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TRANSPORT & ACCESSIBILITY                                 */}
      {/* ========================================================= */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                Getting There
              </p>

              <h3 className="mt-4 text-2xl font-black text-slate-900">
                Transportation
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Airport, MRT, taxi and other transportation guidance: TBA.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                Accessibility
              </p>

              <h3 className="mt-4 text-2xl font-black text-slate-900">
                Accessibility Information
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Accessibility facilities and attendee support information:
                TBA.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                Attendee Support
              </p>

              <h3 className="mt-4 text-2xl font-black text-slate-900">
                Help &amp; Assistance
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                On-site attendee assistance, support desk and local guidance:
                TBA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER CTA                                                 */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 px-6 py-20">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-200">
            IEEE IEM-PESYS 2027
          </p>

          <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Venue &amp; Accommodation Details Coming Soon
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-100/90">
            Official attendee information will be updated here after the
            conference arrangements are finalized.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
