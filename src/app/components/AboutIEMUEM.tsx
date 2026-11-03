export default function AboutIEMUEM() {
  return (
    <section className="bg-emerald-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm sm:p-10 lg:p-14">
          {/* HEADER */}
          <div className="flex items-start gap-5">
            <div className="mt-1 h-12 w-1.5 shrink-0 rounded-full bg-emerald-600" />

            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">
                About IEM-UEM Group
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Institute of Engineering &amp; Management
              </h2>
            </div>
          </div>

          {/* LOGOS */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="flex h-36 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <img
                src="/logos/iem_logo_new.png"
                alt="Institute of Engineering & Management"
                className="max-h-28 w-auto max-w-[240px] object-contain"
              />
            </div>

            <div className="flex h-36 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <img
                src="/logos/uem_logo_new.png"
                alt="University of Engineering & Management"
                className="max-h-28 w-auto max-w-[240px] object-contain"
              />
            </div>
          </div>

          {/* FULL JUSTIFIED CONTENT */}
          <div className="mx-auto mt-10 max-w-6xl">
            <p className="text-justify text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              The IEM group is an acclaimed educational group amongst the
              industry-centred academic training organisations of today. IEM
              has set sublime standards in addressing the technical and
              managerial resource shortage in the new era of dynamic
              globalisation. The IEM UEM group has risen to fame for its strong
              foundation in teaching and R&amp;D in multifaceted areas. It aims
              to serve the future generation as well as the Nation through its
              commitment towards self sufficiency and unmatchable excellence.
              Since its inception, the IEM UEM group has surpassed innumerable
              benchmarks of achievements and accreditations. Today IEM flaunts
              a colossal network of expansive operations led by an
              awe-inspiring student force who are the torchbearers of a better
              tomorrow. The IEM UEM Group has opened up the doors for young
              minds who dare to dream. It encourages the spirit of free enquiry
              and imagination. In this temple of learning, dreams take shape.
              The educational group attempts to inculcate the sense of human
              values and discipline in students to make them respectable human
              beings. It encourages learners to learn, to realize their
              potential and imbibe the best practices. Right from its inception
              the placement cells of both IEM and UEM have consistently
              provided for 1 to 2 jobs on average for all its students. IEM is
              established in Kolkata in the IT hub of the state of West Bengal
              since 1989 as the first self-financed engineering college of the
              state. Since then IEM has been socially accredited as the best
              self-financed engineering institute of West Bengal and admits
              students from the engineering merit lists of WBJEE and JEE Main.
              UEM Kolkata is established in the year 2014 by Act No 25 of 2014
              of Govt of West Bengal. Being located in New Town, the Smart City
              of Eastern India and very near to the Netaji Subhash International
              Airport, the students of the University are exposed to the top
              corporates. UEM Kolkata has stood one out of the top 10 institutes
              of India including all IITs and all NITs of the country in the
              NPTEL program ranked by IIT Kharagpur and IIT Chennai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}