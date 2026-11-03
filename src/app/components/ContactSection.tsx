export default function ContactSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
            Get In Touch
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
            Contact Us
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            For conference-related enquiries, please contact the organizing
            team.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {/* Email */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm hover-soft-card">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
              ✉
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Email
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Official conference email address
            </p>

            <p className="mt-4 font-semibold text-emerald-700">
              Coming Soon
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm hover-soft-card">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
              ☎
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Phone
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Conference office contact number
            </p>

            <p className="mt-4 font-semibold text-emerald-700">
              Coming Soon
            </p>
          </div>

          {/* Location */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm hover-soft-card">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
              📍
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Location
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Conference venue
            </p>

            <p className="mt-4 font-semibold text-emerald-700">
              Singapore
            </p>
          </div>
        </div>

        {/* Organizing Institution */}
        <div className="mt-10 rounded-3xl bg-green-900 px-8 py-10 text-center text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-200">
            Organized By
          </p>

          <h3 className="mt-4 text-2xl font-bold">
            Institute of Engineering & Management
          </h3>

          <h3 className="mt-4 text-2xl font-bold">
            University of Engineering & Management, Kolkata
          </h3>

          <p className="mt-5 text-sm leading-6 text-green-200">
            For official conference announcements and updates, please refer
            to the conference website.
          </p>
        </div>
      </div>
    </section>
  );
}