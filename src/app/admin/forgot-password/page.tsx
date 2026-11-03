
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendResetEmail(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo: `${window.location.origin}/admin/reset-password`,
      }
    );

    setMessage(
      error
        ? error.message
        : "If this email belongs to an account, a password reset link will be sent."
    );

    setLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-emerald-950 px-5">
      <form
        onSubmit={sendResetEmail}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
      >
        <h1 className="text-2xl font-bold text-emerald-800">
          Reset Admin Password
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          Enter your administrator email address.
        </p>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Admin email"
          className="mt-6 w-full rounded-xl border border-slate-300 p-3 text-slate-900"
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full rounded-xl bg-emerald-700 p-3 font-semibold text-white disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        {message && (
          <p className="mt-4 text-sm text-slate-600">{message}</p>
        )}
      </form>
    </main>
  );
}
