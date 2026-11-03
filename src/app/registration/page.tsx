
"use client";

import { FormEvent, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../../lib/supabase/client";

const registrationCategories = [
  {
    category: "Student / Research Scholar",
    earlyBird: "Coming Soon",
    regular: "Coming Soon",
    notes: "Valid institutional/student identification may be required.",
  },
  {
    category: "Faculty / Academic",
    earlyBird: "Coming Soon",
    regular: "Coming Soon",
    notes: "For faculty members, researchers and academic professionals.",
  },
  {
    category: "Industry Professional",
    earlyBird: "Coming Soon",
    regular: "Coming Soon",
    notes: "For professionals representing industry or private organizations.",
  },
  {
    category: "International Participant",
    earlyBird: "Coming Soon",
    regular: "Coming Soon",
    notes: "For participants joining the conference from outside India.",
  },
];

const registrationSteps = [
  {
    number: "01",
    title: "Choose Registration Category",
    description:
      "Select the category that best matches your participant type.",
  },
  {
    number: "02",
    title: "Complete Registration Form",
    description:
      "Provide your personal, institutional and conference-related information.",
  },
  {
    number: "03",
    title: "Complete Payment",
    description:
      "Proceed to the secure online payment gateway once payment is enabled.",
  },
  {
    number: "04",
    title: "Receive Confirmation",
    description:
      "A confirmation message and registration details will be provided after successful registration.",
  },
];

export default function RegistrationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const firstName = String(
      formData.get("firstName") || ""
    ).trim();

    const lastName = String(
      formData.get("lastName") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const phone = String(
      formData.get("phone") || ""
    ).trim();

    const institution = String(
      formData.get("institution") || ""
    ).trim();

    const country = String(
      formData.get("country") || ""
    ).trim();

    const category = String(
      formData.get("category") || ""
    ).trim();

    const paperSubmissionId = String(
      formData.get("paperId") || ""
    ).trim();

    const ieeeMember = String(
      formData.get("ieeeMember") || ""
    ).trim();

    const membershipNumber = String(
      formData.get("membershipNumber") || ""
    ).trim();

    const accommodationRequired = String(
      formData.get("accommodationRequired") || ""
    ).trim();

    const accompanyingPerson = String(
      formData.get("accompanyingPerson") || ""
    ).trim();

    const notes = String(
      formData.get("notes") || ""
    ).trim();

    const agreed = formData.get("terms") === "on";

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !institution ||
      !country ||
      !category ||
      !agreed
    ) {
      setErrorMessage(
        "Please complete all required fields and accept the registration terms."
      );
      setIsSubmitting(false);
      return;
    }

    const fullName = `${firstName} ${lastName}`.trim();

    try {
      const { error } = await supabase
        .from("registrations")
        .insert({
          full_name: fullName,
          email,
          phone,
          institution,
          country,
          participant_category: category,
          ieee_member: ieeeMember || null,
          ieee_membership_number:
            membershipNumber || null,
          paper_submission_id:
            paperSubmissionId || null,
          accommodation_required:
            accommodationRequired || null,
          accompanying_person:
            accompanyingPerson || null,
          registration_status: "pending",
          payment_status: "not_started",
          notes: notes || null,
        });

      if (error) {
        throw new Error(
          error.message ||
            "Unable to save your registration."
        );
      }

      setSubmitted(true);
      setErrorMessage("");
      form.reset();

      window.scrollTo({
        top: document.getElementById("registration-form")?.offsetTop
          ? document.getElementById("registration-form")!.offsetTop - 100
          : 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Registration submission error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO                                                       */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(110,231,183,0.18),transparent_35%)]" />

        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-24">
          <div className="mx-auto inline-flex rounded-full border border-emerald-300/40 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-100 backdrop-blur">
            Conference Registration
          </div>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-white md:text-6xl">
            Registration
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-emerald-50/90">
            Register for IEEE IEM-PESYS and join researchers, academicians,
            engineers and industry professionals from around the world.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* IMPORTANT DATES                                           */}
      {/* ========================================================= */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <div className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Timeline
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Registration Dates
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Official registration dates will be announced by the conference
              organizers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">
                Abstract Acceptance
              </p>

              <h3 className="mt-3 text-2xl font-black text-slate-900">
                Coming Soon
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Notification date will be published with the official
                conference schedule.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">
                Early Bird Registration
              </p>

              <h3 className="mt-3 text-2xl font-black text-slate-900">
                Coming Soon
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                The early bird deadline will be announced by the organizing
                committee.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">
                Conference
              </p>

              <h3 className="mt-3 text-2xl font-black text-slate-900">
                21st - 23rd June, 2027
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                IEEE IEM-PESYS will be held in Singapore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* REGISTRATION CATEGORIES                                   */}
      {/* ========================================================= */}

      {/* ========================================================= */}
{/* ATTENDEES                                                 */}
{/* ========================================================= */}

<section className="bg-slate-50 py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <div className="mb-4 inline-flex rounded-full bg-emerald-50 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-700">
        Attendees
      </div>

      <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
        Registration Categories
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
        Official registration fees will be announced by the conference
        organizers.
      </p>
    </div>

    {/* ===================================================== */}
    {/* TWO CATEGORY TABLES                                   */}
    {/* ===================================================== */}

    <div className="mt-12 grid gap-8 lg:grid-cols-2">

      {/* LEFT TABLE */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-7 py-6">
          <h3 className="text-2xl font-black text-slate-900">
            National Attendees
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-left">

            <thead>
              <tr className="bg-emerald-900 text-white">
                <th className="px-6 py-5 text-sm font-black">
                  Category
                </th>

                <th className="px-6 py-5 text-sm font-black">
                  Early Bird
                </th>

                <th className="px-6 py-5 text-sm font-black">
                  After Deadline
                </th>

                <th className="px-6 py-5 text-sm font-black">
                  On Spot
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                "IEEE PES Society Member",
                "IEEE Member",
                "Non-Member",
                "IEEE PES Student Member",
                "IEEE Student Member",
                "Student Non-Member",
                "Industry Participants",
              ].map((category) => (
                <tr
                  key={category}
                  className="border-b border-slate-200 last:border-b-0"
                >
                  <td className="px-6 py-6 font-bold text-slate-900">
                    {category}
                  </td>

                  <td className="px-6 py-6 font-semibold text-emerald-700">
                    Coming Soon
                  </td>

                  <td className="px-6 py-6 font-semibold text-slate-600">
                    Coming Soon
                  </td>

                  <td className="px-6 py-6 font-semibold text-slate-600">
                    Coming Soon
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* RIGHT TABLE */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-7 py-6">
          <h3 className="text-2xl font-black text-slate-900">
            International Attendees
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-left">

            <thead>
              <tr className="bg-emerald-900 text-white">
                <th className="px-6 py-5 text-sm font-black">
                  Category
                </th>

                <th className="px-6 py-5 text-sm font-black">
                  Early Bird
                </th>

                <th className="px-6 py-5 text-sm font-black">
                  After Deadline
                </th>

                <th className="px-6 py-5 text-sm font-black">
                  On Spot
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                "IEEE PES Society Member",
                "IEEE Member",
                "Non-Member",
                "IEEE PES Student Member",
                "IEEE Student Member",
                "Student Non-Member",
                "Industry Participants",
              ].map((category) => (
                <tr
                  key={category}
                  className="border-b border-slate-200 last:border-b-0"
                >
                  <td className="px-6 py-6 font-bold text-slate-900">
                    {category}
                  </td>

                  <td className="px-6 py-6 font-semibold text-emerald-700">
                    Coming Soon
                  </td>

                  <td className="px-6 py-6 font-semibold text-slate-600">
                    Coming Soon
                  </td>

                  <td className="px-6 py-6 font-semibold text-slate-600">
                    Coming Soon
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>

    {/* ===================================================== */}
    {/* ACCOMPANYING PERSON                                   */}
    {/* ===================================================== */}

    <div className="mt-8 rounded-3xl border border-slate-200 bg-white px-7 py-6 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-black text-slate-900">
          Accompanying Person
        </h3>

        <span className="font-black text-emerald-700">
          Coming Soon
        </span>
      </div>
    </div>

  </div>
</section>

      {/* ========================================================= */}
      {/* HOW TO REGISTER                                            */}
      {/* ========================================================= */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Registration Process
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              How to Register
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              The registration workflow will guide you from category
              selection to payment confirmation.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {registrationSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 font-black text-white">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* REGISTRATION FORM                                         */}
      {/* ========================================================= */}

      <section
        id="registration-form"
        className="bg-emerald-50 py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            {/* LEFT */}
            <div>
              <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
                Online Registration
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900">
                Register for IEEE IEM-PESYS
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Complete the registration form with your participant details.
                Payment will be connected later after the official gateway
                and registration fee structure are finalized.
              </p>

              <div className="mt-8 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <h3 className="font-black text-slate-900">
                  You will provide
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>• Full name</li>
                  <li>• Email address</li>
                  <li>• Phone number</li>
                  <li>• Institution / organization</li>
                  <li>• Country</li>
                  <li>• Registration category</li>
                  <li>• IEEE membership information</li>
                  <li>• Paper / submission information where applicable</li>
                  <li>• Accommodation preference</li>
                  <li>• Accompanying person information</li>
                </ul>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-100/40 md:p-9">
              <h3 className="text-2xl font-black text-slate-900">
                Registration Form
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Your registration details will be securely stored in the
                conference system.
              </p>

              {submitted && (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4">
                  <p className="font-semibold text-emerald-800">
                    Registration submitted successfully.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-emerald-700">
                    Your registration has been saved. Payment is not enabled
                    yet and no payment has been collected.
                  </p>
                </div>
              )}

              {errorMessage && (
                <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm leading-6 text-red-700">
                  {errorMessage}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                {/* NAME */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-sm font-bold text-slate-700"
                    >
                      First Name *
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="Enter first name"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="text-sm font-bold text-slate-700"
                    >
                      Last Name *
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Enter last name"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                {/* CONTACT */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-bold text-slate-700"
                    >
                      Email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-bold text-slate-700"
                    >
                      Phone *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                {/* INSTITUTION + COUNTRY */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="institution"
                      className="text-sm font-bold text-slate-700"
                    >
                      Institution / Organization *
                    </label>

                    <input
                      id="institution"
                      name="institution"
                      type="text"
                      required
                      placeholder="Enter institution or organization"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="text-sm font-bold text-slate-700"
                    >
                      Country *
                    </label>

                    <input
                      id="country"
                      name="country"
                      type="text"
                      required
                      placeholder="Enter country"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                {/* CATEGORY */}
                <div>
                  <label
                    htmlFor="category"
                    className="text-sm font-bold text-slate-700"
                  >
                    Registration Category *
                  </label>

                  <select
                    id="category"
                    name="category"
                    defaultValue=""
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="" disabled>
                      Select category
                    </option>

                    {registrationCategories.map((item) => (
                      <option
                        key={item.category}
                        value={item.category}
                      >
                        {item.category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* IEEE MEMBERSHIP */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="ieeeMember"
                      className="text-sm font-bold text-slate-700"
                    >
                      IEEE Member?
                    </label>

                    <select
                      id="ieeeMember"
                      name="ieeeMember"
                      defaultValue=""
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    >
                      <option value="">
                        Select
                      </option>

                      <option value="Yes">
                        Yes
                      </option>

                      <option value="No">
                        No
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="membershipNumber"
                      className="text-sm font-bold text-slate-700"
                    >
                      IEEE Membership Number
                      <span className="ml-1 font-normal text-slate-400">
                        (optional)
                      </span>
                    </label>

                    <input
                      id="membershipNumber"
                      name="membershipNumber"
                      type="text"
                      placeholder="Membership number"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                {/* PAPER */}
                <div>
                  <label
                    htmlFor="paperId"
                    className="text-sm font-bold text-slate-700"
                  >
                    Paper / Submission ID
                    <span className="ml-1 font-normal text-slate-400">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="paperId"
                    name="paperId"
                    type="text"
                    placeholder="Enter submission ID if applicable"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                {/* ACCOMMODATION + ACCOMPANYING PERSON */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="accommodationRequired"
                      className="text-sm font-bold text-slate-700"
                    >
                      Accommodation Required?
                    </label>

                    <select
                      id="accommodationRequired"
                      name="accommodationRequired"
                      defaultValue=""
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    >
                      <option value="">
                        Select
                      </option>

                      <option value="Yes">
                        Yes
                      </option>

                      <option value="No">
                        No
                      </option>

                      <option value="To Be Confirmed">
                        To Be Confirmed
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="accompanyingPerson"
                      className="text-sm font-bold text-slate-700"
                    >
                      Accompanying Person
                    </label>

                    <input
                      id="accompanyingPerson"
                      name="accompanyingPerson"
                      type="text"
                      placeholder="Name / number if applicable"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                {/* NOTES */}
                <div>
                  <label
                    htmlFor="notes"
                    className="text-sm font-bold text-slate-700"
                  >
                    Additional Notes
                    <span className="ml-1 font-normal text-slate-400">
                      (optional)
                    </span>
                  </label>

                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Any additional information..."
                    className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                {/* TERMS */}
                <label className="flex items-start gap-3">
                  <input
                    name="terms"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-emerald-600"
                  />

                  <span className="text-sm leading-6 text-slate-600">
                    I confirm that the information provided is accurate and
                    agree to the conference registration terms.
                  </span>
                </label>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-emerald-600 px-6 py-4 font-black text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Submitting Registration..."
                    : "Submit Registration"}
                </button>

                <p className="text-center text-xs leading-5 text-slate-400">
                  No payment will be collected at this stage. Payment
                  integration will be enabled after the official gateway is
                  confirmed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PAYMENT INFORMATION                                       */}
      {/* ========================================================= */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center md:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 font-black text-emerald-700">
              ₹
            </div>

            <h2 className="mt-5 text-3xl font-black text-slate-900">
              Secure Online Payment
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              A secure payment gateway will be integrated after the official
              payment provider and registration fee structure are finalized.
              Until then, registration information can be submitted without
              payment.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm font-semibold text-slate-600">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                Secure Checkout
              </span>

              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                Payment Verification
              </span>

              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                Confirmation Receipt
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* FLOATING REGISTER BUTTON */}
      <a
        href="#registration-form"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-emerald-600 px-6 py-3.5 font-bold text-white shadow-2xl shadow-emerald-900/20 transition hover:bg-emerald-700"
      >
        Register Now
      </a>
    </main>
  );
}