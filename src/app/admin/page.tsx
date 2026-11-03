"use client";



import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { supabase } from "../../lib/supabase/client";



type AbstractSubmission = {

  id: string;

  full_name: string;

  email: string;

  institution: string | null;

  country: string | null;

  presentation_type: string;

  designation: string;

  paper_title: string;

  topic_category: string;

  abstract: string;

  supporting_file_name: string | null;

  supporting_file_path: string | null;

  status: string;

  submitted_at: string;

};



type ContactEnquiry = {

  id: string;

  full_name: string;

  email: string;

  institution: string | null;

  subject: string;

  message: string;

  status: string;

  submitted_at: string;

};



type Registration = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  institution: string;
  country: string;
  participant_category: string;
  ieee_member: boolean;
  ieee_membership_number: string | null;
  paper_title: string | null;
  paper_submission_id: string | null;
  accommodation_required: boolean;
  accompanying_person: string | null;
  registration_status: string;
  payment_status: string;
  notes: string | null;
  registered_at: string;
};

type ActiveTab = "abstracts" | "registrations" | "enquiries";



const abstractStatusOptions = [

  {

    value: "submitted",

    label: "Submitted",

  },

  {

    value: "under_review",

    label: "Under Review",

  },

  {

    value: "accepted",

    label: "Accepted",

  },

  {

    value: "rejected",

    label: "Rejected",

  },

];



const enquiryStatusOptions = [

  {

    value: "new",

    label: "New",

  },

  {

    value: "in_progress",

    label: "In Progress",

  },

  {

    value: "resolved",

    label: "Resolved",

  },

];

const registrationStatusOptions = [
  { value: "pending", label: "Pending" },
  { value: "confirmed", label: "Confirmed" },
  { value: "cancelled", label: "Cancelled" },
];

const paymentStatusOptions = [
  { value: "not_started", label: "Not Started" },
  { value: "pending", label: "Pending" },
  { value: "paid", label: "Paid" },
  { value: "failed", label: "Failed" },
  { value: "refunded", label: "Refunded" },
];



function formatDate(dateString: string) {

  return new Date(dateString).toLocaleString("en-IN", {

    day: "2-digit",

    month: "short",

    year: "numeric",

    hour: "2-digit",

    minute: "2-digit",

  });

}



function formatAbstractStatus(status: string) {

  return (

    abstractStatusOptions.find(

      (item) => item.value === status

    )?.label || status

  );

}



function formatEnquiryStatus(status: string) {

  return (

    enquiryStatusOptions.find(

      (item) => item.value === status

    )?.label || status

  );

}



function formatRegistrationStatus(status: string) {
  return registrationStatusOptions.find((item) => item.value === status)?.label || status;
}

function formatPaymentStatus(status: string) {
  return paymentStatusOptions.find((item) => item.value === status)?.label || status;
}

function getRegistrationStatusClasses(status: string) {
  switch (status) {
    case "confirmed":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "cancelled":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-amber-50 text-amber-700 border-amber-200";
  }
}

function getPaymentStatusClasses(status: string) {
  switch (status) {
    case "paid":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "failed":
    case "refunded":
      return "bg-red-50 text-red-700 border-red-200";
    case "pending":
      return "bg-amber-50 text-amber-700 border-amber-200";
    default:
      return "bg-slate-100 text-slate-600 border-slate-200";
  }
}

function getRegistrationCount(registrations: Registration[], status: string) {
  return registrations.filter((item) => item.registration_status === status).length;
}

function getAbstractStatusClasses(status: string) {

  switch (status) {

    case "accepted":

      return "bg-emerald-50 text-emerald-700 border-emerald-200";



    case "rejected":

      return "bg-red-50 text-red-700 border-red-200";



    case "under_review":

      return "bg-amber-50 text-amber-700 border-amber-200";



    default:

      return "bg-slate-100 text-slate-600 border-slate-200";

  }

}



function getEnquiryStatusClasses(status: string) {

  switch (status) {

    case "resolved":

      return "bg-emerald-50 text-emerald-700 border-emerald-200";



    case "in_progress":

      return "bg-amber-50 text-amber-700 border-amber-200";



    default:

      return "bg-blue-50 text-blue-700 border-blue-200";

  }

}



export default function AdminPage() {

  const router = useRouter();



  const [activeTab, setActiveTab] =

    useState<ActiveTab>("abstracts");



  const [abstracts, setAbstracts] = useState<

    AbstractSubmission[]

  >([]);



  const [enquiries, setEnquiries] = useState<

    ContactEnquiry[]

  >([]);


  const [registrations, setRegistrations] = useState<Registration[]>([]);



  const [loading, setLoading] = useState(true);

  const [loggingOut, setLoggingOut] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [search, setSearch] = useState("");



  const [selectedAbstract, setSelectedAbstract] =

    useState<AbstractSubmission | null>(null);



  const [selectedEnquiry, setSelectedEnquiry] =

    useState<ContactEnquiry | null>(null);


  const [selectedRegistration, setSelectedRegistration] =
    useState<Registration | null>(null);



  useEffect(() => {

    const loadDashboard = async () => {

      setLoading(true);

      setErrorMessage("");



      const { data: sessionData, error: sessionError } =

        await supabase.auth.getSession();



      if (sessionError || !sessionData.session) {

        router.replace("/admin/login");

        return;

      }



      const [abstractResult, enquiryResult, registrationResult] =

        await Promise.all([

          supabase

            .from("abstract_submissions")

            .select("*")

            .order("submitted_at", {

              ascending: false,

            }),



          supabase

            .from("contact_enquiries")

            .select("*")

            .order("submitted_at", {

              ascending: false,

            }),



          supabase
            .from("registrations")
            .select("*")
            .order("registered_at", { ascending: false }),
        ]);



      if (abstractResult.error) {

        console.error(abstractResult.error);



        setErrorMessage(

          abstractResult.error.message ||

            "Unable to load abstract submissions."

        );



        setLoading(false);

        return;

      }



      if (enquiryResult.error) {

        console.error(enquiryResult.error);



        setErrorMessage(

          enquiryResult.error.message ||

            "Unable to load contact enquiries."

        );



        setLoading(false);

        return;

      }



      setAbstracts(abstractResult.data || []);



      if (registrationResult.error) {
        console.error(registrationResult.error);
        setErrorMessage(
          registrationResult.error.message || "Unable to load registrations."
        );
        setLoading(false);
        return;
      }

      setRegistrations(registrationResult.data || []);
      setEnquiries(enquiryResult.data || []);

      setLoading(false);

    };



    loadDashboard();

  }, [router]);



  const handleLogout = async () => {

    setLoggingOut(true);



    await supabase.auth.signOut();



    router.replace("/admin/login");

    router.refresh();

  };



  const handleAbstractStatusChange = async (

    id: string,

    newStatus: string

  ) => {

    setErrorMessage("");



    const { error } = await supabase

      .from("abstract_submissions")

      .update({

        status: newStatus,

      })

      .eq("id", id);



    if (error) {

      console.error(error);



      setErrorMessage(

        error.message ||

          "Unable to update abstract status."

      );



      return;

    }



    setAbstracts((current) =>

      current.map((item) =>

        item.id === id

          ? {

              ...item,

              status: newStatus,

            }

          : item

      )

    );



    setSelectedAbstract((current) =>

      current?.id === id

        ? {

            ...current,

            status: newStatus,

          }

        : current

    );

  };



  const handleEnquiryStatusChange = async (

    id: string,

    newStatus: string

  ) => {

    setErrorMessage("");



    const { error } = await supabase

      .from("contact_enquiries")

      .update({

        status: newStatus,

      })

      .eq("id", id);



    if (error) {

      console.error(error);



      setErrorMessage(

        error.message ||

          "Unable to update enquiry status."

      );



      return;

    }



    setEnquiries((current) =>

      current.map((item) =>

        item.id === id

          ? {

              ...item,

              status: newStatus,

            }

          : item

      )

    );



    setSelectedEnquiry((current) =>

      current?.id === id

        ? {

            ...current,

            status: newStatus,

          }

        : current

    );

  };



const handleRegistrationStatusChange = async (
    id: string,
    newStatus: string
  ) => {
    setErrorMessage("");

    const { error } = await supabase
      .from("registrations")
      .update({ registration_status: newStatus })
      .eq("id", id);

    if (error) {
      console.error(error);
      setErrorMessage(
        error.message || "Unable to update registration status."
      );
      return;
    }

    setRegistrations((current) =>
      current.map((item) =>
        item.id === id ? { ...item, registration_status: newStatus } : item
      )
    );

    setSelectedRegistration((current) =>
      current?.id === id
        ? { ...current, registration_status: newStatus }
        : current
    );
  };

  const handlePaymentStatusChange = async (
    id: string,
    newStatus: string
  ) => {
    setErrorMessage("");

    const { error } = await supabase
      .from("registrations")
      .update({ payment_status: newStatus })
      .eq("id", id);

    if (error) {
      console.error(error);
      setErrorMessage(error.message || "Unable to update payment status.");
      return;
    }

    setRegistrations((current) =>
      current.map((item) =>
        item.id === id ? { ...item, payment_status: newStatus } : item
      )
    );

    setSelectedRegistration((current) =>
      current?.id === id
        ? { ...current, payment_status: newStatus }
        : current
    );
  };

  const handleDownload = async (

    submission: AbstractSubmission

  ) => {

    if (!submission.supporting_file_path) {

      setErrorMessage(

        "No supporting document is attached."

      );

      return;

    }



    const { data, error } = await supabase.storage

      .from("abstract-files")

      .createSignedUrl(

        submission.supporting_file_path,

        60

      );



    if (error || !data?.signedUrl) {

      console.error(error);



      setErrorMessage(

        "Unable to create a secure download link."

      );



      return;

    }



    window.open(

      data.signedUrl,

      "_blank",

      "noopener,noreferrer"

    );

  };



  const filteredAbstracts = abstracts.filter(

    (submission) => {

      const searchValue = search.toLowerCase();



      return (

        submission.full_name

          .toLowerCase()

          .includes(searchValue) ||

        submission.email

          .toLowerCase()

          .includes(searchValue) ||

        submission.paper_title

          .toLowerCase()

          .includes(searchValue) ||

        submission.topic_category

          .toLowerCase()

          .includes(searchValue) ||

        (submission.institution || "")

          .toLowerCase()

          .includes(searchValue)

      );

    }

  );



  const filteredEnquiries = enquiries.filter(

    (enquiry) => {

      const searchValue = search.toLowerCase();



      return (

        enquiry.full_name

          .toLowerCase()

          .includes(searchValue) ||

        enquiry.email

          .toLowerCase()

          .includes(searchValue) ||

        enquiry.subject

          .toLowerCase()

          .includes(searchValue) ||

        enquiry.message

          .toLowerCase()

          .includes(searchValue) ||

        (enquiry.institution || "")

          .toLowerCase()

          .includes(searchValue)

      );

    }

  );



const filteredRegistrations = registrations.filter((registration) => {
    const searchValue = search.toLowerCase();
    return (
      registration.full_name.toLowerCase().includes(searchValue) ||
      registration.email.toLowerCase().includes(searchValue) ||
      registration.phone.toLowerCase().includes(searchValue) ||
      registration.institution.toLowerCase().includes(searchValue) ||
      registration.country.toLowerCase().includes(searchValue) ||
      registration.participant_category.toLowerCase().includes(searchValue) ||
      (registration.paper_submission_id || "").toLowerCase().includes(searchValue) ||
      (registration.paper_title || "").toLowerCase().includes(searchValue)
    );
  });

  const abstractSubmittedCount = abstracts.filter(

    (item) => item.status === "submitted"

  ).length;



  const abstractReviewCount = abstracts.filter(

    (item) => item.status === "under_review"

  ).length;



  const abstractAcceptedCount = abstracts.filter(

    (item) => item.status === "accepted"

  ).length;



  const newEnquiryCount = enquiries.filter(

    (item) => item.status === "new"

  ).length;



  const inProgressEnquiryCount = enquiries.filter(

    (item) => item.status === "in_progress"

  ).length;



  const resolvedEnquiryCount = enquiries.filter(

    (item) => item.status === "resolved"

  ).length;



const pendingRegistrationCount = getRegistrationCount(registrations, "pending");

  const confirmedRegistrationCount = getRegistrationCount(registrations, "confirmed");

const activeCount =
    activeTab === "abstracts"
      ? filteredAbstracts.length
      : activeTab === "registrations"
        ? filteredRegistrations.length
        : filteredEnquiries.length;

  const totalActiveCount =
    activeTab === "abstracts"
      ? abstracts.length
      : activeTab === "registrations"
        ? registrations.length
        : enquiries.length;

  
  return (

    <main className="min-h-screen bg-slate-950">

      {/* ===================================================== */}

      {/* HEADER                                                 */}

      {/* ===================================================== */}



      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white p-2">

              <img

                src="/logos/IEEE_LOGO-BG_REMOVE.png"

                alt="IEEE"

                className="max-h-8 w-auto object-contain"

              />

            </div>



            <div>

              <p className="text-[10px] font-bold tracking-[0.22em] text-emerald-400">

                IEEE IEM-PESYS 2027

              </p>



              <h1 className="mt-1 text-base font-bold text-white sm:text-lg">

                Admin Dashboard

              </h1>

            </div>

          </div>



          <button

            type="button"

            onClick={handleLogout}

            disabled={loggingOut}

            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white disabled:opacity-50"

          >

            {loggingOut ? "Signing out..." : "Sign Out"}

          </button>

        </div>

      </header>



      {/* ===================================================== */}

      {/* CONTENT                                                */}

      {/* ===================================================== */}



      <section className="mx-auto max-w-[1600px] px-5 py-8 sm:px-8">

        <div className="mb-8">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">

            Conference Administration

          </p>



          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">

            Administration Center

          </h2>



          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">

            Manage abstract submissions and conference contact enquiries

            from one secure dashboard.

          </p>

        </div>



        {/* =================================================== */}

        {/* OVERVIEW CARDS                                       */}

        {/* =================================================== */}



        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">

              Abstracts

            </p>



            <p className="mt-3 text-4xl font-bold text-white">

              {abstracts.length}

            </p>



            <p className="mt-2 text-sm text-white/40">

              Total submissions

            </p>

          </div>



          <div className="rounded-2xl border border-amber-400/10 bg-amber-400/5 p-6">

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-300/60">

              Under Review

            </p>



            <p className="mt-3 text-4xl font-bold text-amber-400">

              {abstractReviewCount}

            </p>



            <p className="mt-2 text-sm text-white/40">

              Abstracts being reviewed

            </p>

          </div>



          <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-6">

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300/60">

              Accepted

            </p>



            <p className="mt-3 text-4xl font-bold text-emerald-400">

              {abstractAcceptedCount}

            </p>



            <p className="mt-2 text-sm text-white/40">

              Accepted abstracts

            </p>

          </div>



          <div className="rounded-2xl border border-blue-400/10 bg-blue-400/5 p-6">

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-300/60">

              New Enquiries

            </p>



            <p className="mt-3 text-4xl font-bold text-blue-400">

              {newEnquiryCount}

            </p>



            <p className="mt-2 text-sm text-white/40">

              Contact messages awaiting response

            </p>

          </div>


          <div className="rounded-2xl border border-violet-400/10 bg-violet-400/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-300/60">
              Registrations
            </p>
            <p className="mt-3 text-4xl font-bold text-violet-400">
              {registrations.length}
            </p>
            <p className="mt-2 text-sm text-white/40">
              {pendingRegistrationCount} pending · {confirmedRegistrationCount} confirmed
            </p>
          </div>

        </div>



        {/* =================================================== */}

        {/* TABS                                                 */}

        {/* =================================================== */}



        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-2">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">

            <button

              type="button"

              onClick={() => {

                setActiveTab("abstracts");

                setSearch("");

                setSelectedEnquiry(null);
                setSelectedRegistration(null);

              }}

              className={`rounded-xl px-5 py-3.5 text-sm font-semibold transition ${

                activeTab === "abstracts"

                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"

                  : "text-white/50 hover:bg-white/5 hover:text-white"

              }`}

            >

              Abstract Submissions

              <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-xs">

                {abstracts.length}

              </span>

            </button>



            <button
              type="button"
              onClick={() => {
                setActiveTab("registrations");
                setSearch("");
                setSelectedAbstract(null);
                setSelectedEnquiry(null);
              }}
              className={`rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                activeTab === "registrations"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                  : "text-white/50 hover:bg-white/5 hover:text-white"
              }`}
            >
              Registrations
              <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-xs">
                {registrations.length}
              </span>
            </button>

            <button

              type="button"

              onClick={() => {

                setActiveTab("enquiries");

                setSearch("");

                setSelectedAbstract(null);
                setSelectedRegistration(null);

              }}

              className={`rounded-xl px-5 py-3.5 text-sm font-semibold transition ${

                activeTab === "enquiries"

                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"

                  : "text-white/50 hover:bg-white/5 hover:text-white"

              }`}

            >

              Contact Enquiries

              <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-xs">

                {enquiries.length}

              </span>

            </button>

          </div>

        </div>



        {/* =================================================== */}

        {/* ERROR                                                */}

        {/* =================================================== */}



        {errorMessage && (

          <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-300">

            {errorMessage}

          </div>

        )}



        {/* =================================================== */}

        {/* ACTIVE TAB HEADER                                    */}

        {/* =================================================== */}



        <div className="mt-6">

          {activeTab === "abstracts" ? (
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Research Contributions
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Abstract Submissions
              </h3>
            </div>
          ) : activeTab === "registrations" ? (
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Participants
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Conference Registrations
              </h3>
            </div>
          ) : (
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Communication
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Contact Enquiries
              </h3>
            </div>
          )}

        </div>



        {/* =================================================== */}

        {/* SEARCH                                               */}

        {/* =================================================== */}



        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <input

              type="text"

              value={search}

              onChange={(event) =>

                setSearch(event.target.value)

              }

              placeholder={

activeTab === "abstracts"
                ? "Search by author, email, paper title, topic..."
                : activeTab === "registrations"
                  ? "Search by participant, email, institution, paper ID..."
                  : "Search by name, email, subject, message..."

              }

              className="w-full max-w-2xl rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-emerald-400/50 focus:bg-white/10"

            />



            <div className="text-sm text-white/40">

              Showing{" "}

              <span className="font-semibold text-white/70">

                {activeCount}

              </span>{" "}

              of{" "}

              <span className="font-semibold text-white/70">

                {totalActiveCount}

              </span>

            </div>

          </div>

        </div>



        {/* =================================================== */}

        {/* LOADING                                              */}

        {/* =================================================== */}



        {loading ? (

          <div className="mt-6 flex min-h-[400px] items-center justify-center rounded-2xl border border-white/10 bg-white/5">

            <div className="text-center">

              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-emerald-400" />



              <p className="mt-5 text-sm text-white/50">

                Loading administration data...

              </p>

            </div>

          </div>

        ) : activeTab === "abstracts" ? (

          /* ================================================= */

          /* ABSTRACT TABLE                                    */

          /* ================================================= */

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">

            {filteredAbstracts.length === 0 ? (

              <div className="flex min-h-[350px] items-center justify-center px-6 text-center">

                <div>

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-2xl">

                    📄

                  </div>



                  <h3 className="mt-5 text-xl font-bold text-white">

                    No abstract submissions found

                  </h3>



                  <p className="mt-2 text-sm text-white/40">

                    {search

                      ? "Try another search term."

                      : "There are currently no abstract submissions."}

                  </p>

                </div>

              </div>

            ) : (

              <>

                <div className="hidden overflow-x-auto lg:block">

                  <table className="w-full min-w-[1100px] text-left">

                    <thead className="border-b border-white/10 bg-white/[0.03]">

                      <tr>

                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">

                          Author

                        </th>



                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">

                          Paper

                        </th>



                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">

                          Topic

                        </th>



                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">

                          Submitted

                        </th>



                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">

                          Status

                        </th>



                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">

                          Action

                        </th>

                      </tr>

                    </thead>



                    <tbody>

                      {filteredAbstracts.map((submission) => (

                        <tr

                          key={submission.id}

                          className="border-b border-white/5 transition hover:bg-white/[0.03]"

                        >

                          <td className="px-6 py-5">

                            <p className="font-semibold text-white">

                              {submission.full_name}

                            </p>



                            <p className="mt-1 text-xs text-white/40">

                              {submission.email}

                            </p>



                            <p className="mt-1 text-xs text-white/30">

                              {submission.institution || "—"}

                            </p>

                          </td>



                          <td className="max-w-[320px] px-6 py-5">

                            <p className="font-medium leading-6 text-white/80">

                              {submission.paper_title}

                            </p>



                            <p className="mt-2 text-xs text-white/35">

                              {submission.presentation_type}

                            </p>

                          </td>



                          <td className="px-6 py-5">

                            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/60">

                              {submission.topic_category}

                            </span>

                          </td>



                          <td className="whitespace-nowrap px-6 py-5 text-xs text-white/40">

                            {formatDate(

                              submission.submitted_at

                            )}

                          </td>



                          <td className="px-6 py-5">

                            <select

                              value={submission.status}

                              onChange={(event) =>

                                handleAbstractStatusChange(

                                  submission.id,

                                  event.target.value

                                )

                              }

                              className={`rounded-full border px-3 py-2 text-xs font-semibold outline-none ${getAbstractStatusClasses(

                                submission.status

                              )}`}

                            >

                              {abstractStatusOptions.map(

                                (option) => (

                                  <option

                                    key={option.value}

                                    value={option.value}

                                  >

                                    {option.label}

                                  </option>

                                )

                              )}

                            </select>

                          </td>



                          <td className="px-6 py-5">

                            <button

                              type="button"

                              onClick={() =>

                                setSelectedAbstract(

                                  submission

                                )

                              }

                              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"

                            >

                              View

                            </button>

                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>



                <div className="divide-y divide-white/5 lg:hidden">

                  {filteredAbstracts.map((submission) => (

                    <div

                      key={submission.id}

                      className="p-5"

                    >

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <p className="font-bold text-white">

                            {submission.full_name}

                          </p>



                          <p className="mt-1 text-xs text-white/40">

                            {submission.email}

                          </p>

                        </div>



                        <span

                          className={`rounded-full border px-3 py-1.5 text-[10px] font-bold ${getAbstractStatusClasses(

                            submission.status

                          )}`}

                        >

                          {formatAbstractStatus(

                            submission.status

                          )}

                        </span>

                      </div>



                      <p className="mt-4 font-semibold leading-6 text-white/80">

                        {submission.paper_title}

                      </p>



                      <div className="mt-3 flex flex-wrap gap-2">

                        <span className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/50">

                          {submission.topic_category}

                        </span>



                        <span className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/50">

                          {submission.presentation_type}

                        </span>

                      </div>



                      <p className="mt-3 text-xs text-white/30">

                        {formatDate(

                          submission.submitted_at

                        )}

                      </p>



                      <div className="mt-4 flex gap-2">

                        <button

                          type="button"

                          onClick={() =>

                            setSelectedAbstract(

                              submission

                            )

                          }

                          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"

                        >

                          View Submission

                        </button>



                        <select

                          value={submission.status}

                          onChange={(event) =>

                            handleAbstractStatusChange(

                              submission.id,

                              event.target.value

                            )

                          }

                          className={`rounded-xl border px-3 py-3 text-xs font-semibold outline-none ${getAbstractStatusClasses(

                            submission.status

                          )}`}

                        >

                          {abstractStatusOptions.map(

                            (option) => (

                              <option

                                key={option.value}

                                value={option.value}

                              >

                                {option.label}

                              </option>

                            )

                          )}

                        </select>

                      </div>

                    </div>

                  ))}

                </div>

              </>

            )}

          </div>

        ) : activeTab === "registrations" ? (

          /* ================================================= */

          /* ================================================= */
          /* REGISTRATION TABLE                                 */
          /* ================================================= */

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {filteredRegistrations.length === 0 ? (
              <div className="flex min-h-[350px] items-center justify-center px-6 text-center">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                    🎫
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">
                    No registrations found
                  </h3>
                  <p className="mt-2 text-sm text-white/40">
                    {search
                      ? "Try another search term."
                      : "There are currently no conference registrations."}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="hidden overflow-x-auto lg:block">
                  <table className="w-full min-w-[1250px] text-left">
                    <thead className="border-b border-white/10 bg-white/[0.03]">
                      <tr>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">Participant</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">Category</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">Paper / ID</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">Registered</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">Registration</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">Payment</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRegistrations.map((registration) => (
                        <tr key={registration.id} className="border-b border-white/5 transition hover:bg-white/[0.03]">
                          <td className="px-6 py-5">
                            <p className="font-semibold text-white">{registration.full_name}</p>
                            <p className="mt-1 text-xs text-white/40">{registration.email}</p>
                            <p className="mt-1 text-xs text-white/30">{registration.institution || "—"}</p>
                          </td>
                          <td className="px-6 py-5">
                            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/60">
                              {registration.participant_category}
                            </span>
                          </td>
                          <td className="max-w-[300px] px-6 py-5">
                            <p className="font-medium leading-6 text-white/80">{registration.paper_title || "No paper title"}</p>
                            <p className="mt-2 text-xs text-white/35">{registration.paper_submission_id || "No submission ID"}</p>
                          </td>
                          <td className="whitespace-nowrap px-6 py-5 text-xs text-white/40">{formatDate(registration.registered_at)}</td>
                          <td className="px-6 py-5">
                            <select
                              value={registration.registration_status}
                              onChange={(event) => handleRegistrationStatusChange(registration.id, event.target.value)}
                              className={`rounded-full border px-3 py-2 text-xs font-semibold outline-none ${getRegistrationStatusClasses(registration.registration_status)}`}
                            >
                              {registrationStatusOptions.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                              ))}
                            </select>
                          </td>
                          <td className="px-6 py-5">
                            <select
                              value={registration.payment_status}
                              onChange={(event) => handlePaymentStatusChange(registration.id, event.target.value)}
                              className={`rounded-full border px-3 py-2 text-xs font-semibold outline-none ${getPaymentStatusClasses(registration.payment_status)}`}
                            >
                              {paymentStatusOptions.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                              ))}
                            </select>
                          </td>
                          <td className="px-6 py-5">
                            <button
                              type="button"
                              onClick={() => setSelectedRegistration(registration)}
                              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="divide-y divide-white/5 lg:hidden">
                  {filteredRegistrations.map((registration) => (
                    <div key={registration.id} className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-bold text-white">{registration.full_name}</p>
                          <p className="mt-1 break-all text-xs text-white/40">{registration.email}</p>
                        </div>
                        <span className={`rounded-full border px-3 py-1.5 text-[10px] font-bold ${getRegistrationStatusClasses(registration.registration_status)}`}>
                          {formatRegistrationStatus(registration.registration_status)}
                        </span>
                      </div>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl bg-white/5 p-4">
                          <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">Category</p>
                          <p className="mt-1 text-sm font-semibold text-white/80">{registration.participant_category}</p>
                        </div>
                        <div className="rounded-xl bg-white/5 p-4">
                          <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">Payment</p>
                          <p className="mt-1 text-sm font-semibold text-white/80">{formatPaymentStatus(registration.payment_status)}</p>
                        </div>
                      </div>

                      <p className="mt-4 font-semibold leading-6 text-white/80">{registration.paper_title || "No paper title"}</p>
                      <p className="mt-2 text-xs text-white/35">Submission ID: {registration.paper_submission_id || "—"}</p>
                      <p className="mt-3 text-xs text-white/30">{formatDate(registration.registered_at)}</p>

                      <div className="mt-4 flex gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedRegistration(registration)}
                          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
                        >
                          View Registration
                        </button>
                        <select
                          value={registration.registration_status}
                          onChange={(event) => handleRegistrationStatusChange(registration.id, event.target.value)}
                          className={`rounded-xl border px-3 py-3 text-xs font-semibold outline-none ${getRegistrationStatusClasses(registration.registration_status)}`}
                        >
                          {registrationStatusOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

        ) : (

          /* ================================================= */
          /* ENQUIRY TABLE                                      */
          /* ================================================= */

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">

            {filteredEnquiries.length === 0 ? (

              <div className="flex min-h-[350px] items-center justify-center px-6 text-center">

                <div>

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-2xl">

                    ✉️

                  </div>



                  <h3 className="mt-5 text-xl font-bold text-white">

                    No contact enquiries found

                  </h3>



                  <p className="mt-2 text-sm text-white/40">

                    {search

                      ? "Try another search term."

                      : "There are currently no contact enquiries."}

                  </p>

                </div>

              </div>

            ) : (

              <>

                <div className="hidden overflow-x-auto lg:block">

                  <table className="w-full min-w-[1050px] text-left">

                    <thead className="border-b border-white/10 bg-white/[0.03]">

                      <tr>

                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">

                          Sender

                        </th>



                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">

                          Subject

                        </th>



                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">

                          Message

                        </th>



                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">

                          Submitted

                        </th>



                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">

                          Status

                        </th>



                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">

                          Action

                        </th>

                      </tr>

                    </thead>



                    <tbody>

                      {filteredEnquiries.map((enquiry) => (

                        <tr

                          key={enquiry.id}

                          className="border-b border-white/5 transition hover:bg-white/[0.03]"

                        >

                          <td className="px-6 py-5">

                            <p className="font-semibold text-white">

                              {enquiry.full_name}

                            </p>



                            <p className="mt-1 text-xs text-white/40">

                              {enquiry.email}

                            </p>



                            <p className="mt-1 text-xs text-white/30">

                              {enquiry.institution || "—"}

                            </p>

                          </td>



                          <td className="px-6 py-5">

                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/60">

                              {enquiry.subject}

                            </span>

                          </td>



                          <td className="max-w-[350px] px-6 py-5">

                            <p className="line-clamp-2 text-sm leading-6 text-white/60">

                              {enquiry.message}

                            </p>

                          </td>



                          <td className="whitespace-nowrap px-6 py-5 text-xs text-white/40">

                            {formatDate(

                              enquiry.submitted_at

                            )}

                          </td>



                          <td className="px-6 py-5">

                            <select

                              value={enquiry.status}

                              onChange={(event) =>

                                handleEnquiryStatusChange(

                                  enquiry.id,

                                  event.target.value

                                )

                              }

                              className={`rounded-full border px-3 py-2 text-xs font-semibold outline-none ${getEnquiryStatusClasses(

                                enquiry.status

                              )}`}

                            >

                              {enquiryStatusOptions.map(

                                (option) => (

                                  <option

                                    key={option.value}

                                    value={option.value}

                                  >

                                    {option.label}

                                  </option>

                                )

                              )}

                            </select>

                          </td>



                          <td className="px-6 py-5">

                            <button

                              type="button"

                              onClick={() =>

                                setSelectedEnquiry(

                                  enquiry

                                )

                              }

                              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"

                            >

                              View

                            </button>

                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>



                <div className="divide-y divide-white/5 lg:hidden">

                  {filteredEnquiries.map((enquiry) => (

                    <div

                      key={enquiry.id}

                      className="p-5"

                    >

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <p className="font-bold text-white">

                            {enquiry.full_name}

                          </p>



                          <p className="mt-1 text-xs text-white/40">

                            {enquiry.email}

                          </p>

                        </div>



                        <span

                          className={`rounded-full border px-3 py-1.5 text-[10px] font-bold ${getEnquiryStatusClasses(

                            enquiry.status

                          )}`}

                        >

                          {formatEnquiryStatus(

                            enquiry.status

                          )}

                        </span>

                      </div>



                      <p className="mt-4 font-semibold text-white/80">

                        {enquiry.subject}

                      </p>



                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/50">

                        {enquiry.message}

                      </p>



                      <p className="mt-3 text-xs text-white/30">

                        {formatDate(enquiry.submitted_at)}

                      </p>



                      <div className="mt-4 flex gap-2">

                        <button

                          type="button"

                          onClick={() =>

                            setSelectedEnquiry(enquiry)

                          }

                          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"

                        >

                          View Enquiry

                        </button>



                        <select

                          value={enquiry.status}

                          onChange={(event) =>

                            handleEnquiryStatusChange(

                              enquiry.id,

                              event.target.value

                            )

                          }

                          className={`rounded-xl border px-3 py-3 text-xs font-semibold outline-none ${getEnquiryStatusClasses(

                            enquiry.status

                          )}`}

                        >

                          {enquiryStatusOptions.map(

                            (option) => (

                              <option

                                key={option.value}

                                value={option.value}

                              >

                                {option.label}

                              </option>

                            )

                          )}

                        </select>

                      </div>

                    </div>

                  ))}

                </div>

              </>

            )}

          </div>

        )}

      </section>



      {/* ===================================================== */}

      {/* ABSTRACT MODAL                                         */}

      {/* ===================================================== */}



      {selectedAbstract && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">

          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">

                  Abstract Submission

                </p>



                <h3 className="mt-1 text-xl font-bold text-white">

                  {selectedAbstract.paper_title}

                </h3>

              </div>



              <button

                type="button"

                onClick={() => setSelectedAbstract(null)}

                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-xl text-white/60 transition hover:bg-white/10 hover:text-white"

              >

                ×

              </button>

            </div>



            <div className="max-h-[calc(90vh-90px)] overflow-y-auto p-6 sm:p-8">

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl bg-white/5 p-4">

                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                    Author

                  </p>



                  <p className="mt-2 font-semibold text-white">

                    {selectedAbstract.full_name}

                  </p>

                </div>



                <div className="rounded-xl bg-white/5 p-4">

                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                    Email

                  </p>



                  <p className="mt-2 break-all font-semibold text-white">

                    {selectedAbstract.email}

                  </p>

                </div>



                <div className="rounded-xl bg-white/5 p-4">

                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                    Institution

                  </p>



                  <p className="mt-2 font-semibold text-white">

                    {selectedAbstract.institution || "—"}

                  </p>

                </div>



                <div className="rounded-xl bg-white/5 p-4">

                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                    Country

                  </p>



                  <p className="mt-2 font-semibold text-white">

                    {selectedAbstract.country || "—"}

                  </p>

                </div>



                <div className="rounded-xl bg-white/5 p-4">

                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                    Presentation

                  </p>



                  <p className="mt-2 font-semibold text-white">

                    {selectedAbstract.presentation_type}

                  </p>

                </div>



                <div className="rounded-xl bg-white/5 p-4">

                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                    Designation

                  </p>



                  <p className="mt-2 font-semibold text-white">

                    {selectedAbstract.designation}

                  </p>

                </div>

              </div>



              <div className="mt-4 rounded-xl bg-white/5 p-4">

                <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                  Topic

                </p>



                <p className="mt-2 font-semibold text-white">

                  {selectedAbstract.topic_category}

                </p>

              </div>



              <div className="mt-4 rounded-xl bg-white/5 p-5">

                <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                  Abstract

                </p>



                <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-white/70">

                  {selectedAbstract.abstract}

                </p>

              </div>



              <div className="mt-4 flex flex-col gap-3 rounded-xl bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                    Supporting Document

                  </p>



                  <p className="mt-2 break-all text-sm font-semibold text-white">

                    {selectedAbstract.supporting_file_name ||

                      "No file attached"}

                  </p>

                </div>



                {selectedAbstract.supporting_file_path && (

                  <button

                    type="button"

                    onClick={() =>

                      handleDownload(selectedAbstract)

                    }

                    className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"

                  >

                    Download Document

                  </button>

                )}

              </div>



              <div className="mt-4 rounded-xl bg-white/5 p-5">

                <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                  Submitted

                </p>



                <p className="mt-2 text-sm text-white/60">

                  {formatDate(

                    selectedAbstract.submitted_at

                  )}

                </p>

              </div>

            </div>

          </div>

        </div>

      )}



      {/* ===================================================== */}

      /* ===================================================== */
      /* REGISTRATION MODAL                                      */
      /* ===================================================== */

      {selectedRegistration && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Conference Registration</p>
                <h3 className="mt-1 text-xl font-bold text-white">{selectedRegistration.full_name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedRegistration(null)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-xl text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="max-h-[calc(90vh-90px)] overflow-y-auto p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.15em] text-white/30">Name</p><p className="mt-2 font-semibold text-white">{selectedRegistration.full_name}</p></div>
                <div className="rounded-xl bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.15em] text-white/30">Email</p><p className="mt-2 break-all font-semibold text-white">{selectedRegistration.email}</p></div>
                <div className="rounded-xl bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.15em] text-white/30">Phone</p><p className="mt-2 font-semibold text-white">{selectedRegistration.phone || "—"}</p></div>
                <div className="rounded-xl bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.15em] text-white/30">Country</p><p className="mt-2 font-semibold text-white">{selectedRegistration.country || "—"}</p></div>
                <div className="rounded-xl bg-white/5 p-4 sm:col-span-2"><p className="text-xs uppercase tracking-[0.15em] text-white/30">Institution / Organization</p><p className="mt-2 font-semibold text-white">{selectedRegistration.institution || "—"}</p></div>
                <div className="rounded-xl bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.15em] text-white/30">Registration Category</p><p className="mt-2 font-semibold text-white">{selectedRegistration.participant_category || "—"}</p></div>
                <div className="rounded-xl bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.15em] text-white/30">IEEE Member</p><p className="mt-2 font-semibold text-white">{selectedRegistration.ieee_member ? "Yes" : "No"}</p></div>
                <div className="rounded-xl bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.15em] text-white/30">IEEE Membership Number</p><p className="mt-2 break-all font-semibold text-white">{selectedRegistration.ieee_membership_number || "—"}</p></div>
                <div className="rounded-xl bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.15em] text-white/30">Paper / Submission ID</p><p className="mt-2 break-all font-semibold text-white">{selectedRegistration.paper_submission_id || "—"}</p></div>
              </div>

              <div className="mt-4 rounded-xl bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-white/30">Paper Title</p>
                <p className="mt-3 text-sm leading-7 text-white/70">{selectedRegistration.paper_title || "No paper title provided"}</p>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.15em] text-white/30">Accommodation</p><p className="mt-2 font-semibold text-white">{selectedRegistration.accommodation_required ? "Required" : "Not Required"}</p></div>
                <div className="rounded-xl bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.15em] text-white/30">Accompanying Person</p><p className="mt-2 font-semibold text-white">{selectedRegistration.accompanying_person || "None"}</p></div>
              </div>

              <div className="mt-4 rounded-xl bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-white/30">Notes</p>
                <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-white/70">{selectedRegistration.notes || "No additional notes."}</p>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="registrationModalStatus" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white/30">Registration Status</label>
                  <select
                    id="registrationModalStatus"
                    value={selectedRegistration.registration_status}
                    onChange={(event) => handleRegistrationStatusChange(selectedRegistration.id, event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white outline-none"
                  >
                    {registrationStatusOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="registrationModalPayment" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white/30">Payment Status</label>
                  <select
                    id="registrationModalPayment"
                    value={selectedRegistration.payment_status}
                    onChange={(event) => handlePaymentStatusChange(selectedRegistration.id, event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white outline-none"
                  >
                    {paymentStatusOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-white/30">Registered</p>
                <p className="mt-2 text-sm text-white/60">{formatDate(selectedRegistration.registered_at)}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ENQUIRY MODAL                                          */}

      {/* ===================================================== */}



      {selectedEnquiry && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">

          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">

                  Contact Enquiry

                </p>



                <h3 className="mt-1 text-xl font-bold text-white">

                  {selectedEnquiry.subject}

                </h3>

              </div>



              <button

                type="button"

                onClick={() => setSelectedEnquiry(null)}

                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-xl text-white/60 transition hover:bg-white/10 hover:text-white"

              >

                ×

              </button>

            </div>



            <div className="max-h-[calc(90vh-90px)] overflow-y-auto p-6 sm:p-8">

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl bg-white/5 p-4">

                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                    Name

                  </p>



                  <p className="mt-2 font-semibold text-white">

                    {selectedEnquiry.full_name}

                  </p>

                </div>



                <div className="rounded-xl bg-white/5 p-4">

                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                    Email

                  </p>



                  <p className="mt-2 break-all font-semibold text-white">

                    {selectedEnquiry.email}

                  </p>

                </div>



                <div className="rounded-xl bg-white/5 p-4 sm:col-span-2">

                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                    Institution

                  </p>



                  <p className="mt-2 font-semibold text-white">

                    {selectedEnquiry.institution || "—"}

                  </p>

                </div>

              </div>



              <div className="mt-4 rounded-xl bg-white/5 p-5">

                <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                  Message

                </p>



                <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-white/70">

                  {selectedEnquiry.message}

                </p>

              </div>



              <div className="mt-4 rounded-xl bg-white/5 p-5">

                <p className="text-xs uppercase tracking-[0.15em] text-white/30">

                  Submitted

                </p>



                <p className="mt-2 text-sm text-white/60">

                  {formatDate(

                    selectedEnquiry.submitted_at

                  )}

                </p>

              </div>



              <div className="mt-4">

                <label

                  htmlFor="enquiryModalStatus"

                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white/30"

                >

                  Enquiry Status

                </label>



                <select

                  id="enquiryModalStatus"

                  value={selectedEnquiry.status}

                  onChange={(event) =>

                    handleEnquiryStatusChange(

                      selectedEnquiry.id,

                      event.target.value

                    )

                  }

                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white outline-none"

                >

                  {enquiryStatusOptions.map((option) => (

                    <option

                      key={option.value}

                      value={option.value}

                    >

                      {option.label}

                    </option>

                  ))}

                </select>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>

  );

}
