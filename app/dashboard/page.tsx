"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState("User");

  useEffect(() => {
    setUser(localStorage.getItem("proxyUser") || "User");
  }, []);

  return (
    <main className="min-h-screen bg-[#08080b] text-white">
      <nav className="flex items-center justify-between border-b border-white/10 px-8 py-6">
        <h1 className="text-2xl font-black">Dashboard</h1>
        <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-5xl font-black">Welcome, {user}</h2>
        <p className="mt-3 text-gray-400">Your proxy control panel.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["Proxy Status", "Offline"],
            ["Server Slots", "1 / 1"],
            ["Current Plan", "Free"],
          ].map(([title, value]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-gray-400">{title}</p>
              <h3 className="mt-3 text-4xl font-black">{value}</h3>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <h3 className="text-3xl font-black">Create Proxy</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="rounded-xl bg-white/10 p-4 outline-none" placeholder="Server IP" />
            <input className="rounded-xl bg-white/10 p-4 outline-none" placeholder="Port, example 19132" />
          </div>
          <button className="mt-6 rounded-xl bg-white px-6 py-4 font-black text-black">
            Save Proxy
          </button>
        </div>
      </section>
    </main>
  );
}