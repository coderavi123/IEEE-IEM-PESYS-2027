const dates = [
  {
    date: "Coming Soon",
    title: "Deadline for Early Bird Registration",
    tag: "Early Bird",
  },
  {
    date: "Coming Soon",
    title: "Last Date for Abstract Submission",
    tag: "Abstracts",
  },
  {
    date: "Coming Soon",
    title: "Notification for Abstract Acceptance",
    tag: "Notification",
  },
  {
    date: "21st - 23rd June, 2027",
    title: "IEEE IEM-PESYS Conference",
    tag: "Conference",
    featured: true,
  },
];

export default function ImportantDates() {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
            Timeline
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
            Important Dates
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Mark your calendar.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute bottom-4 left-4 top-4 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-300 to-slate-200 sm:left-7" />

          <div className="space-y-8">
            {dates.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="relative flex items-start gap-5 sm:gap-7"
              >
                {/* Timeline Dot */}
                <div
                  className={`relative z-10 mt-4 h-4 w-4 shrink-0 rounded-full border-4 border-slate-50 sm:h-5 sm:w-5 ${
                    item.featured ? "bg-emerald-400" : "bg-blue-900"
                  }`}
                />

                {/* Card */}
                <div
                  className={`w-full rounded-2xl border bg-white px-6 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:px-7 ${
                    item.featured
                      ? "border-emerald-400"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p
                        className={`text-base font-semibold ${
                          item.featured
                            ? "text-emerald-500"
                            : "text-blue-900"
                        }`}
                      >
                        {item.date}
                      </p>

                      <h3
                        className={`mt-2 text-lg font-bold sm:text-xl ${
                          item.featured
                            ? "text-emerald-500"
                            : "text-slate-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <span
                      className={`w-fit rounded-full px-4 py-2 text-xs font-semibold ${
                        item.featured
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-orange-50 text-orange-500"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}