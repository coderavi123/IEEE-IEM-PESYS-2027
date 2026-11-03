"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { supabase } from "../../../lib/supabase/client";

const topics = [
  "Integrated Energy Systems",
  "Microgrids",
  "Power Engineering Systems",
  "Renewable Energy",
  "Smart Grid & Digitalisation",
  "Power Electronics",
  "Energy Storage",
  "Electric Mobility",
  "AI & Intelligent Energy Systems",
];

export default function SubmitAbstractPage() {
  const [abstract, setAbstract] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const wordCount = abstract.trim()
    ? abstract.trim().split(/\s+/).length
    : 0;

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    setErrorMessage("");

    if (!file) {
      setFileName("");
      setSelectedFile(null);
      return;
    }

    const fileNameLower = file.name.toLowerCase();

    const allowedExtensions = [".pdf", ".doc", ".docx"];

    const isAllowed = allowedExtensions.some((extension) =>
      fileNameLower.endsWith(extension)
    );

    if (!isAllowed) {
      setFileName("");
      setSelectedFile(null);
      event.target.value = "";

      setErrorMessage(
        "Please upload a PDF, DOC, or DOCX file."
      );

      return;
    }

    const maxFileSize = 10 * 1024 * 1024;

    if (file.size > maxFileSize) {
      setFileName("");
      setSelectedFile(null);
      event.target.value = "";

      setErrorMessage(
        "The supporting file must be smaller than 10 MB."
      );

      return;
    }

    setFileName(file.name);
    setSelectedFile(file);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(false);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const institution = String(formData.get("institution") || "").trim();
    const country = String(formData.get("country") || "").trim();
    const presentationType = String(
      formData.get("presentationType") || ""
    ).trim();
    const designation = String(
      formData.get("designation") || ""
    ).trim();
    const paperTitle = String(
      formData.get("paperTitle") || ""
    ).trim();
    const topicCategory = String(
      formData.get("topic") || ""
    ).trim();

    if (
      !fullName ||
      !email ||
      !institution ||
      !country ||
      !presentationType ||
      !designation ||
      !paperTitle ||
      !topicCategory ||
      !abstract.trim()
    ) {
      setErrorMessage(
        "Please complete all required fields before submitting."
      );
      return;
    }

    setIsSubmitting(true);

    let uploadedFilePath: string | null = null;

    try {
      /* ===================================================== */
      /* 1. UPLOAD SUPPORTING FILE IF PROVIDED                 */
      /* ===================================================== */

      if (selectedFile) {
        const safeFileName = selectedFile.name
          .replace(/[^a-zA-Z0-9._-]/g, "-")
          .replace(/-+/g, "-");

        uploadedFilePath = `submissions/${new Date()
          .toISOString()
          .slice(0, 10)}/${crypto.randomUUID()}-${safeFileName}`;

        const { error: uploadError } = await supabase.storage
          .from("abstract-files")
          .upload(uploadedFilePath, selectedFile, {
            cacheControl: "3600",
            upsert: false,
            contentType:
              selectedFile.type || "application/octet-stream",
          });

        if (uploadError) {
          throw new Error(
            uploadError.message ||
              "The supporting file could not be uploaded."
          );
        }
      }

      /* ===================================================== */
      /* 2. SAVE FORM DATA TO SUPABASE                          */
      /* ===================================================== */

      const { error: insertError } = await supabase
        .from("abstract_submissions")
        .insert({
          full_name: fullName,
          email,
          institution,
          country,
          presentation_type: presentationType,
          designation,
          paper_title: paperTitle,
          topic_category: topicCategory,
          abstract: abstract.trim(),
          supporting_file_name: selectedFile
            ? selectedFile.name
            : null,
          supporting_file_path: uploadedFilePath,
          status: "submitted",
        });

      if (insertError) {
        throw new Error(
          insertError.message ||
            "The abstract could not be saved."
        );
      }

      /* ===================================================== */
      /* 3. SUCCESS                                             */
      /* ===================================================== */

      setSubmitted(true);
      setErrorMessage("");
      setAbstract("");
      setFileName("");
      setSelectedFile(null);

      form.reset();
    } catch (error) {
      console.error("Abstract submission error:", error);

      /* ===================================================== */
      /* REMOVE UPLOADED FILE IF DATABASE INSERT FAILED        */
      /* ===================================================== */

      if (uploadedFilePath) {
        await supabase.storage
          .from("abstract-files")
          .remove([uploadedFilePath]);
      }

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ===================================================== */}
      {/* HERO                                                   */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-r from-green-950 via-green-900 to-emerald-700 px-6 py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center animate-soft-fade-up">
          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">
            Call for Papers
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Submit Abstract
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-green-100">
            Submit your research contribution to IEEE IEM-PESYS 2027.
          </p>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FORM                                                    */}
      {/* ===================================================== */}

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="mb-8">
              <p className="text-sm leading-7 text-slate-500">
                Please provide the required author, paper and abstract
                information below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* ================================================= */}
              {/* FULL NAME + EMAIL                                 */}
              {/* ================================================= */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              </div>

              {/* ================================================= */}
              {/* INSTITUTION + COUNTRY                             */}
              {/* ================================================= */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="institution"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Institution
                  </label>

                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    required
                    placeholder="University / Organization"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Country
                  </label>

                  <input
                    id="country"
                    name="country"
                    type="text"
                    required
                    placeholder="Enter your country"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              </div>

              {/* ================================================= */}
              {/* PRESENTATION + DESIGNATION                        */}
              {/* ================================================= */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="presentationType"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Presentation Type
                  </label>

                  <select
                    id="presentationType"
                    name="presentationType"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="" disabled>
                      Select a presentation type...
                    </option>

                    <option value="oral">
                      Oral Presentation
                    </option>

                    <option value="poster">
                      Poster Presentation
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="designation"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Designation
                  </label>

                  <select
                    id="designation"
                    name="designation"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="" disabled>
                      Select your designation...
                    </option>

                    <option value="student">
                      Student
                    </option>

                    <option value="research-scholar">
                      Research Scholar
                    </option>

                    <option value="postdoctoral">
                      Postdoctoral Fellow
                    </option>

                    <option value="faculty">
                      Faculty Member
                    </option>

                    <option value="industry">
                      Industry Professional
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              {/* ================================================= */}
              {/* PAPER TITLE                                        */}
              {/* ================================================= */}

              <div>
                <label
                  htmlFor="paperTitle"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  Paper Title
                </label>

                <input
                  id="paperTitle"
                  name="paperTitle"
                  type="text"
                  required
                  placeholder="Enter your paper title"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              {/* ================================================= */}
              {/* TOPIC                                               */}
              {/* ================================================= */}

              <div>
                <label
                  htmlFor="topic"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  Topic Category
                </label>

                <select
                  id="topic"
                  name="topic"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="" disabled>
                    Select a topic...
                  </option>

                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              {/* ================================================= */}
              {/* ABSTRACT                                            */}
              {/* ================================================= */}

              <div>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label
                    htmlFor="abstract"
                    className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Abstract
                  </label>

                  <span className="text-xs font-medium text-slate-400">
                    {wordCount} words
                  </span>
                </div>

                <textarea
                  id="abstract"
                  name="abstract"
                  required
                  value={abstract}
                  onChange={(event) =>
                    setAbstract(event.target.value)
                  }
                  rows={10}
                  placeholder="Enter your abstract here..."
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              {/* ================================================= */}
              {/* SUPPORTING FILE                                    */}
              {/* ================================================= */}

              <div>
                <label
                  htmlFor="supportingFile"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  Supporting File
                </label>

                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5">
                  <input
                    id="supportingFile"
                    name="supportingFile"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-green-900 file:px-5 file:py-2.5 file:font-semibold file:text-white hover:file:bg-green-800"
                  />

                  <p className="mt-2 text-xs text-slate-400">
                    Accepted formats: PDF, DOC, DOCX · Maximum size: 10 MB
                  </p>

                  {fileName && (
                    <p className="mt-3 text-sm text-slate-500">
                      Selected file:{" "}
                      <span className="font-medium text-slate-700">
                        {fileName}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              {/* ================================================= */}
              {/* ERROR MESSAGE                                      */}
              {/* ================================================= */}

              {errorMessage && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm leading-6 text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* ================================================= */}
              {/* SUBMIT                                              */}
              {/* ================================================= */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-green-900 px-6 py-4 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Abstract"}
              </button>

              {/* ================================================= */}
              {/* SUCCESS MESSAGE                                    */}
              {/* ================================================= */}

              {submitted && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-center">
                  <p className="font-semibold text-emerald-700">
                    Abstract submitted successfully.
                  </p>

                  <p className="mt-1 text-sm text-emerald-600">
                    Your submission has been saved successfully.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FOOTER                                                 */}
      {/* ===================================================== */}

      <footer className="bg-green-950 px-6 py-8 text-center text-sm text-green-200">
        IEEE IEM-PESYS · 10th June, 2027 · Singapore
      </footer>
    </main>
  );
}