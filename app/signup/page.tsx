"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const router = useRouter();

  function signup() {
    localStorage.setItem("proxyUser", name || "User");
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08080b] px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8">
        <h1 className="text-4xl font-black">Create Account</h1>
        <p className="mt-2 text-gray-400">Start your proxy dashboard.</p>

        <input
          className="mt-8 w-full rounded-xl bg-white/10 p-4 outline-none"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={signup} className="mt-6 w-full rounded-xl bg-white p-4 font-black text-black">
          Sign Up
        </button>
      </div>
    </main>
  );
}