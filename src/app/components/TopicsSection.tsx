export default function TopicsSection() {
  const topics = [
    {
      icon: "⚡",
      title: "Integrated Energy Systems",
      description:
        "Emerging technologies, architectures and applications for integrated and intelligent energy systems.",
    },
    {
      icon: "🔋",
      title: "Microgrids",
      description:
        "Microgrid planning, operation, control, resilience, renewable integration and energy management.",
    },
    {
      icon: "⚙️",
      title: "Power Engineering Systems",
      description:
        "Modern developments in power generation, transmission, distribution, protection and control.",
    },
    {
      icon: "🌱",
      title: "Renewable Energy",
      description:
        "Solar, wind, hybrid systems, energy storage and sustainable power technologies.",
    },
    {
      icon: "🤖",
      title: "Smart Grid & Digitalization",
      description:
        "Artificial intelligence, digital technologies, automation and intelligent grid applications.",
    },
    {
      icon: "🔌",
      title: "Power Electronics",
      description:
        "Power converters, drives, grid-connected systems and advanced power electronic applications.",
    },
  ];

  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center animate-soft-fade-up">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
            Call for Papers
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Topics of Interest
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-600" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            IEEE IEM-PESYS invites researchers, academicians, professionals
            and industry experts to contribute original research and emerging
            ideas across a broad range of energy and power engineering areas.
          </p>
        </div>

        {/* Topic cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="hover-soft-card rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
                {topic.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {topic.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {topic.description}
              </p>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-700 p-8 text-center text-white shadow-lg sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-200">
            Submit Your Paper
          </p>

          <h3 className="mt-3 text-2xl font-black sm:text-3xl">
            Share Your Research with the IEEE IEM-PESYS Community
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-emerald-50">
            The official submission details,portal will be announced soon.
          </p>

          <div className="mt-6 inline-flex rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold backdrop-blur-sm">
            Submission Portal Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
}