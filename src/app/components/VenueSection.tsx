export default function VenueSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
            Venue
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Conference Venue
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Singapore
          </p>
        </div>

        {/* Venue Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left */}
          <div className="rounded-3xl bg-green-900 p-8 text-white shadow-sm hover-soft-card sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-200">
              IEEE IEM - PESYS 2027
            </p>

            <h3 className="mt-5 text-3xl font-bold">
              Singapore
            </h3>

            <p className="mt-5 leading-7 text-green-100">
              The 1st IEEE International Conference on Integrated Energy
              Systems, Microgrids &amp; Power Engineering Systems will be held
              in Singapore.
            </p>

            <div className="mt-8 rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-green-200">
                Conference Date
              </p>

              <p className="mt-2 text-xl font-semibold">
                21st - 23rd June, 2027
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm hover-soft-card">
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
                📍
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Venue Details Coming Soon
              </h3>

              <p className="mx-auto mt-3 max-w-md leading-7 text-slate-500">
                The detailed conference venue, address, accommodation
                information and transportation details will be announced
                officially.
              </p>
            </div>
          </div>
        </div>

        {/* Singapore Map */}
        <div className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            {/* Map Header */}
            <div className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
                  Location
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  Singapore
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Conference destination
                </p>
              </div>

              <div className="w-fit rounded-full bg-emerald-50 px-5 py-2.5 text-sm font-bold text-emerald-700">
                21st - 23rd June, 2027
              </div>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Singapore&output=embed"
                title="Google Map of Singapore"
                className="h-[380px] w-full border-0 sm:h-[460px] lg:h-[540px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}