export default function AboutConference() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
          {/* HEADING */}
          <div className="flex items-start gap-5">
            <div className="mt-1 h-12 w-1.5 shrink-0 rounded-full bg-emerald-600" />

            <div className="min-w-0">
              <p className="text-sm font-black uppercase tracking-[0.20em] text-emerald-700">
                Conference Overview
              </p>

              <h2 className="mt-3 max-w-6xl text-3xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[52px]">
                Advancing the Future of Integrated Energy Systems
              </h2>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-9">
            <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
              IEEE IEM - PESYS
            </h3>

            <p className="mt-6 text-justify text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              The 1st IEEE International Conference on Integrated Energy
              Systems, Microgrids &amp; Power Engineering Systems brings
              together the central themes represented by the conference:
              integrated energy systems, microgrids, and power engineering
              systems. The conference provides a professional platform for
              presenting ideas, research, developments and emerging
              perspectives in this rapidly evolving field. IEEE IEM - PESYS is
              organized by Institute of Engineering &amp; Management (IEM),
              under University of Engineering &amp; Management (UEM) Kolkata, in
              technical co-sponsorship with IEEE PES Singapore Chapter &amp;
              Smart Society, USA. It will be held in Singapore (exact venue
              TBA).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}