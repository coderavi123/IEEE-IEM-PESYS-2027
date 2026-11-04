import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Member = {
  name: string;
  role?: string;
  photo?: string;
};

const committeeSections: {
  title: string;
  members: Member[];
}[] = [
  {
    title: "Advisory Chair",
    members: [
      {
        name: "Dr. Satyajit Chakrabarti",
        role: "Advisory Chair",
        photo: "/committee/satyajit-chakrabarty1.jpg",
      },
      {
        name: "Dr. Banani Chakrabarti",
        role: "Advisory Chair",
        photo: "/committee/banani-chakrabarty.jpg",
      },
    ],
  },

  {
    title: "General Chair",
    members: [
      {
        name: "To Be Announced",
        role: "General Chair",
      },
      {
        name: "To Be Announced",
        role: "General Chair",
      },
      {
        name: "To Be Announced",
        role: "General Chair",
      },
    ],
  },

  {
    title: "General Co-Chair",
    members: [
      {
        name: "To Be Announced",
        role: "General Co-Chair",
      },
    ],
  },

  {
    title: "Technical Program Chair",
    members: [
      {
        name: "Prof. Dr. Sourav Das",
        role: "Technical Program Committee",
        photo: "/committee/sourav-das.jpg",
      },
      {
        name: "Prof. Dr. Unmesha Ray",
        role: "Technical Program Committee",
        photo: "/committee/unmesha-ray_chaudhury.jpeg",
      },
      {
        name: "Prof. Dr. Deepro Sen",
        role: "Technical Program Committee",
        photo: "/committee/Prof-Deepro-Sen.jpeg",
      },
      {
        name: "Prof. Sayak Mondal",
        role: "Technical Program Committee",
        photo: "/committee/sayak-mondal.jpg",
      },
    ],
  },

  {
    title: "Finance Chair",
    members: [
      {
        name: "Prof. Somnath Hazra",
        role: "Finance Chair",
        photo: "/committee/Prof-Somnath-Hazra.jpg",
      },
      {
        name: "Prof. Dr. Deepro Sen",
        role: "Finance",
        photo: "/committee/Prof-Deepro-Sen.jpeg",
      },
    ],
  },

  {
    title: "Registration Chair",
    members: [
      {
        name: "Prof. Sayak Mondal",
        role: "Registration Chair",
        photo: "/committee/sayak-mondal.jpg",
      },
      {
        name: "Prof. Debashis Jana",
        role: "Registration Chair",
        photo: "/committee/Prof-Debashis Jana.jpg"
      },
    ],
  },

  {
    title: "Publicity Chair",
    members: [
      {
        name: "Prof. Dr. Sourav Das",
        role: "Publicity Chair",
        photo: "/committee/sourav-das.jpg",
      },
    ],
  },

  {
    title: "Local Arrangement Chair",
    members: [],
  },

  {
    title: "Publication Chair",
    members: [
      {
        name: "Prof. Dr. Unmesha Ray",
        role: "Publication Chair",
        photo: "/committee/unmesha-ray_chaudhury.jpeg",
      },
      {
        name: "To Be Announced",
        role: "Publication Chair",
      },
      {
        name: "To Be Announced",
        role: "Publication Chair",
      },
    ],
  },

  {
    title: "Industry & Technical Chair",
    members: [
      {
        name: "Prof. Dr. Debasis Chatterjee",
        role: "Industry & Technical Chair",
        photo: "/committee/debasis-chatterjee.jpg",
      },
      {
        name: "Prof. Dr. Deepro Sen",
        role: "Industry & Technical Chair",
        photo: "/committee/Prof-Deepro-Sen.jpeg",
      },
    ],
  },

  {
    title: "Website Chair",
    members: [
      {
        name: "Abhik Biswas",
        role: "Website Chair",
        photo: "/committee/abhik-biswas.jpg",
      },
      {
        name: "Prof. Dr. Unmesha Ray",
        role: "Website Chair",
        photo: "/committee/unmesha-ray_chaudhury.jpeg",
      },
      {
        name: "Prof. Dr. Deepro Sen",
        role: "Website Chair",
        photo: "/committee/Prof-Deepro-Sen.jpeg",
      },
      {
        name: "Prof. Dr. Sourav Das",
        role: "Website Chair",
        photo: "/committee/sourav-das.jpg",
      },
    ],
  },
];

function getInitials(name: string) {
  if (name === "To Be Announced") {
    return "TBA";
  }

  return name
    .replace("Dr.", "")
    .replace("Prof.", "")
    .replace(/\./g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

function getGridClass(memberCount: number) {
  if (memberCount === 1) {
    return "mx-auto grid w-full max-w-md grid-cols-1";
  }

  if (memberCount === 2) {
    return "mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2";
  }

  if (memberCount === 3) {
    return "mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";
  }

  return "mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4";
}

function MemberCard({ member }: { member: Member }) {
  const isTBA = member.name === "To Be Announced";

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Photo */}
      <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-md ring-1 ring-emerald-100">
        {member.photo && !isTBA ? (
          <img
            src={member.photo}
            alt={member.name}
            className="h-full w-full object-contain bg-slate-100 p-1 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100">
            <span className="text-2xl font-bold text-emerald-700">
              {getInitials(member.name)}
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <div className="mt-6">
        <h3
          className={`text-lg font-bold ${
            isTBA ? "text-slate-500" : "text-green-900"
          }`}
        >
          {member.name}
        </h3>

        {/* Highlight */}
        {!isTBA && (
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-400 to-green-700" />
        )}

        {/* Role */}
        <p
          className={`mt-3 text-sm font-medium ${
            isTBA ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {member.role}
        </p>
      </div>
    </div>
  );
}

export default function CommitteePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-700 px-6 py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center animate-soft-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-200">
            IEEE IEM-PESYS
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Conference Committee
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-100">
            The organizing, technical and supporting committee of IEEE
            IEM-PESYS.
          </p>
        </div>
      </section>

      {/* Committee */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
              Committee Members
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
              Organizing & Technical Committee
            </h2>

            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-emerald-600" />
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {committeeSections.map((section) => (
              <section
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"
              >
                {/* Section title */}
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-9 w-1 rounded-full bg-emerald-500" />

                  <h3 className="text-2xl font-bold text-slate-900">
                    {section.title}
                  </h3>
                </div>

                {/* Empty section */}
                {section.members.length === 0 ? (
                  <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">
                    <p className="font-semibold text-slate-500">
                      To Be Announced
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      Details will be updated soon.
                    </p>
                  </div>
                ) : (
                  <div className={getGridClass(section.members.length)}>
                    {section.members.map((member, index) => (
                      <MemberCard
                        key={`${section.title}-${member.name}-${index}`}
                        member={member}
                      />
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}