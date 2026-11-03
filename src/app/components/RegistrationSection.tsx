const categories = [
  "IEEE PES Society Member",
  "IEEE Member",
  "Non-Member",
  "IEEE PES Student Member",
  "IEEE Student Member",
  "Student Non-Member",
  "Industry Participants",
];

export default function RegistrationSection() {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* ===================================================== */}
        {/* HEADING                                                */}
        {/* ===================================================== */}

        <div className="text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-600">
            Attendees
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Registration Categories
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-500">
            Registration details for IEEE IEM-PESYS will be announced soon.
          </p>
        </div>

        {/* ===================================================== */}
        {/* INCLUDED FEATURES                                      */}
        {/* ===================================================== */}

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500">
          {[
            "Technical sessions",
            "Conference kit & badge",
            "Refreshments & Banquet",
            "Conference participation",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-lg font-bold text-emerald-500">
                ✓
              </span>

              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* ===================================================== */}
        {/* ATTENDEES TABLE                                        */}
        {/* ===================================================== */}

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Table Heading */}
            <div className="border-b border-slate-200 px-6 py-6 text-center sm:px-8">
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Attendees
              </h3>

              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Registration categories and fees will be announced soon.
              </p>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-4 bg-green-900 px-5 py-4 text-sm font-semibold text-white sm:px-8">
              <span className="text-left">
                Category
              </span>

              <span className="text-center">
                Early Bird
              </span>

              <span className="text-center">
                After Deadline
              </span>

              <span className="text-center">
                On Spot
              </span>
            </div>

            {/* Table Rows */}
            {categories.map((category) => (
              <div
                key={category}
                className="grid grid-cols-4 items-center border-b border-slate-200 px-5 py-5 text-sm last:border-b-0 sm:px-8"
              >
                <span className="text-left font-semibold text-slate-800">
                  {category}
                </span>

                <span className="text-center font-semibold text-emerald-700">
                  Coming Soon
                </span>

                <span className="text-center font-semibold text-slate-700">
                  Coming Soon
                </span>

                <span className="text-center font-semibold text-slate-700">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================== */}
        {/* ACCOMPANYING PERSON                                    */}
        {/* ===================================================== */}

        <div className="mx-auto mt-7 max-w-6xl rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm sm:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-semibold text-slate-800">
              Accompanying Person
            </span>

            <span className="font-bold text-emerald-700">
              Coming Soon
            </span>
          </div>
        </div>

        {/* ===================================================== */}
        {/* REGISTRATION BUTTON                                    */}
        {/* ===================================================== */}

        <div className="mt-10 text-center">
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-xl bg-slate-300 px-8 py-4 font-semibold text-slate-600 shadow-sm"
          >
            Registration Portal Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
}