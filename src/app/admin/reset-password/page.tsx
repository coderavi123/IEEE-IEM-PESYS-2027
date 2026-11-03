
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { data: { subscription } } =
      supabase.auth.onAuthStateChange((event) => {
        if (
          event === "PASSWORD_RECOVERY" ||
          event === "SIGNED_IN"
        ) {
          setReady(true);
        }
      });

    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function changePassword(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (password.length < 12) {
      setMessage("Use a password with at least 12 characters.");
      return;
    }

    if (password !== confirm) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    await supabase.auth.signOut();
    setMessage(
      "Password changed successfully. Open /admin/login to sign in."
    );
    setReady(false);
    setLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-emerald-950 px-5">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-emerald-800">
          Set New Password
        </h1>

        {ready ? (
          <form onSubmit={changePassword} className="mt-6 space-y-4">
            <input
              type="password"
              required
              minLength={12}
              autoComplete="new-password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3 text-slate-900"
            />

            <input
              type="password"
              required
              autoComplete="new-password"
              placeholder="Confirm new password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3 text-slate-900"
            />

            <button
              disabled={loading}
              className="w-full rounded-xl bg-emerald-700 p-3 font-semibold text-white disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        ) : (
          <p className="mt-5 text-sm text-slate-600">
            No active recovery session. Request a new reset link
            from /admin/forgot-password.
          </p>
        )}

        {message && (
          <p className="mt-4 text-sm text-slate-600">{message}</p>
        )}
      </div>
    </main>
  );
}
