export default function CommitteeSection() {
  const committees = [
    {
      title: "General Chair",
      description: "Details Coming Soon",
    },
    {
      title: "Technical Program Chair",
      description: "Details Coming Soon",
    },
    {
      title: "Organizing Committee",
      description: "Details Coming Soon",
    },
    {
      title: "Technical Committee",
      description: "Details Coming Soon",
    },
    {
      title: "Finance & Registration",
      description: "Details Coming Soon",
    },
    {
      title: "Publicity & Media",
      description: "Details Coming Soon",
    },
  ];

  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center animate-soft-fade-up">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
            Conference Committee
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Meet the Conference Committee
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-600" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            The conference committee brings together academic, research and
            industry professionals responsible for the successful organization
            of IEEE IEM-PESYS.
          </p>
        </div>

        {/* Committee cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {committees.map((committee) => (
            <article
              key={committee.title}
              className="hover-soft-card rounded-3xl border border-slate-200 bg-slate-50 p-7 text-center shadow-sm"
            >
              {/* Placeholder */}
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-600 text-3xl font-bold text-white">
                +
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                Committee
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                {committee.title}
              </h3>

              <p className="mt-3 text-sm font-medium text-slate-500">
                {committee.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-emerald-100 bg-emerald-50 px-6 py-7 text-center">
          <p className="text-sm leading-7 text-slate-600">
            Official committee members, affiliations and profiles will be
            published here once the conference committee is finalized.
          </p>
        </div>
      </div>
    </section>
  );
}