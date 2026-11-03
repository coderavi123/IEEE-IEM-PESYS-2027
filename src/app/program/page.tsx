import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const overviewRows = [
  { time: "TBA", program: "TBA", venue: "TBA" },
  { time: "TBA", program: "TBA", venue: "TBA" },
  { time: "TBA", program: "TBA", venue: "TBA" },
  { time: "TBA", program: "TBA", venue: "TBA" },
  { time: "TBA", program: "TBA", venue: "TBA" },
  { time: "TBA", program: "TBA", venue: "TBA" },
  { time: "TBA", program: "TBA", venue: "TBA" },
  { time: "TBA", program: "TBA", venue: "TBA" },
];

const detailedRows = [
  { time: "TBA", program: "TBA", room: "TBA" },
  { time: "TBA", program: "TBA", room: "TBA" },
  { time: "TBA", program: "TBA", room: "TBA" },
  { time: "TBA", program: "TBA", room: "TBA" },
  { time: "TBA", program: "TBA", room: "TBA" },
  { time: "TBA", program: "TBA", room: "TBA" },
  { time: "TBA", program: "TBA", room: "TBA" },
  { time: "TBA", program: "TBA", room: "TBA" },
  { time: "TBA", program: "TBA", room: "TBA" },
  { time: "TBA", program: "TBA", room: "TBA" },
];

const socialProgramItems = [
  {
    title: "Welcome Reception",
    subtitle: "Date · TBA  |  Time · TBA  |  Venue · TBA",
    description:
      "Details of the conference welcome reception will be announced by the organizing committee.",
  },
  {
    title: "Conference Banquet",
    subtitle: "Date · TBA  |  Time · TBA  |  Venue · TBA",
    description:
      "Details of the conference banquet and evening programme will be published here once officially confirmed.",
  },
  {
    title: "Singapore Experiences",
    subtitle: "Schedule · TBA  |  Meeting Point · TBA",
    description:
      "Optional social experiences and participant activities in Singapore will be announced as the programme is finalized.",
  },
];

export default function ProgramDetailsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* ========================================================= */}
      {/* PROGRAM DETAILS                                           */}
      {/* ========================================================= */}
      <section
        id="program-details"
        className="bg-white px-6 pb-10 pt-12 sm:pb-12 sm:pt-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Home <span className="mx-2 text-slate-300">»</span> Program Details
          </div>

          <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
                Program Overview
              </h1>

              <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
                IEEE IEM-PESYS 2027 conference programme and detailed schedule.
              </p>
            </div>

            <div className="inline-flex w-fit rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
              Programme Information · TBA
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Conference Date", "TBA"],
              ["Venue", "TBA"],
              ["Program Sessions", "TBA"],
              ["Technical Tracks", "TBA"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                  {label}
                </p>
                <p className="mt-3 text-2xl font-black text-slate-900">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Program Overview
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Conference Program Schedule
            </h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 px-6 py-6 text-center text-white sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-200">
                IEEE IEM-PESYS 2027
              </p>
              <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                Program Overview — TBA
              </h3>
            </div>

            <div className="border-b border-emerald-100 bg-emerald-50 px-6 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-emerald-800 sm:px-8">
              Conference Schedule · TBA
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100">
                    <th className="w-[20%] px-6 py-4 text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                      Time
                    </th>
                    <th className="w-[55%] px-6 py-4 text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                      Program
                    </th>
                    <th className="w-[25%] px-6 py-4 text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                      Venue
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {overviewRows.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-100 last:border-b-0"
                    >
                      <td className="px-6 py-5 font-bold text-emerald-700">
                        {row.time}
                      </td>
                      <td className="px-6 py-5 font-semibold text-slate-800">
                        {row.program}
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-500">
                        {row.venue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DETAILED PROGRAM                                          */}
      {/* ========================================================= */}
      <section className="bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Detailed Program
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Detailed Program — TBA
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Detailed session timings, programme items, rooms and related
              information will be published here after final confirmation.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="bg-emerald-950 px-6 py-5 text-center text-white sm:px-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-200">
                TBA
              </p>
              <p className="mt-1 text-xl font-black sm:text-2xl">
                Conference Day · TBA
              </p>
            </div>

            <div className="border-b border-slate-200 bg-emerald-50 px-6 py-3 text-center text-sm font-semibold text-emerald-800">
              Detailed Schedule · TBA
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100">
                    <th className="w-[20%] px-6 py-4 text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                      Time
                    </th>
                    <th className="w-[55%] px-6 py-4 text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                      Program
                    </th>
                    <th className="w-[25%] px-6 py-4 text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                      Room / Venue
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {detailedRows.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-100 last:border-b-0 transition hover:bg-emerald-50/40"
                    >
                      <td className="px-6 py-5 font-bold text-slate-700">
                        {row.time}
                      </td>
                      <td className="px-6 py-5 font-semibold text-slate-800">
                        {row.program}
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-500">
                        {row.room}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Official Program Update
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              All programme details are currently marked as TBA and will be
              updated once officially confirmed by the conference organizing
              committee.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SOCIAL PROGRAM                                             */}
      {/* ========================================================= */}
      <section id="social-program" className="bg-white px-6 py-20 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Home <span className="mx-2 text-slate-300">»</span> Social Program
          </div>

          <div className="mt-6 max-w-5xl">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Social Program &amp; Singapore Experiences
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
              Details of social activities, networking events and participant
              experiences will be announced by the conference organizing
              committee.
            </p>
          </div>

          <div className="mt-10 h-px w-full bg-slate-200" />

          <div className="mt-10 space-y-12 sm:space-y-14">
            {socialProgramItems.map((item, index) => (
              <article key={item.title} className="border-b border-slate-200 pb-12 last:border-b-0 last:pb-0 sm:pb-14">
                <div className="flex items-start gap-5">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-black text-emerald-700 ring-1 ring-emerald-100">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-3xl font-black tracking-tight text-emerald-800 sm:text-4xl">
                      {item.title}
                    </h3>

                    <div className="mt-4 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50/70 px-5 py-4 text-sm font-bold leading-7 text-slate-700 sm:text-base">
                      {item.subtitle}
                    </div>

                    <p className="mt-5 max-w-5xl text-base leading-8 text-slate-600 sm:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
              <div className="flex min-h-[280px] items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 p-8">
                <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-md">
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-200">
                    Singapore Experience
                  </div>
                  <div className="mt-4 text-5xl font-black text-white">
                    TBA
                  </div>
                  <div className="mt-3 text-sm leading-6 text-emerald-100/80">
                    Activity image and event information will be added after
                    official confirmation.
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                    Experience Details
                  </p>
                  <p className="mt-3 text-lg font-black text-slate-900">
                    TBA
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    Date, time, meeting point, participation information and
                    other details will be published here once finalized.
                  </p>
                </div>

                <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg">
                  The social programme will be designed to encourage informal
                  interaction, networking and memorable experiences alongside
                  the academic and technical programme of IEEE IEM-PESYS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
