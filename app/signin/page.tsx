"use client";

import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();

  function signin() {
    localStorage.setItem("proxyUser", "User");
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08080b] px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8">
        <h1 className="text-4xl font-black">Sign In</h1>
        <p className="mt-2 text-gray-400">Welcome back.</p>

        <input className="mt-8 w-full rounded-xl bg-white/10 p-4 outline-none" placeholder="Username" />
        <button onClick={signin} className="mt-6 w-full rounded-xl bg-white p-4 font-black text-black">
          Sign In
        </button>
      </div>
    </main>
  );
}