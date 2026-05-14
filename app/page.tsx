import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080b] text-white">
      <nav className="flex items-center justify-between border-b border-white/10 px-8 py-6">
        <h1 className="text-2xl font-black">Legit Proxy</h1>
        <div className="flex gap-4">
          <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
          <Link href="/signin" className="text-gray-300 hover:text-white">Sign In</Link>
          <Link href="/signup" className="rounded-full bg-white px-5 py-2 font-bold text-black">
            Sign Up
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-gray-400">
          Bedrock Proxy Dashboard
        </p>

        <h2 className="text-6xl font-black tracking-tight md:text-8xl">
          Clean. Fast. Modern.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Manage Xbox Bedrock connections, server routing, resource packs, stats,
          ping tools, and safe HUD features from one sleek dashboard.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="/signup" className="rounded-2xl bg-white px-8 py-4 font-black text-black">
            Start Free
          </Link>
          <Link href="/pricing" className="rounded-2xl border border-white/15 px-8 py-4 font-black">
            View Plans
          </Link>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            ["Xbox Connect", "Server selector flow for Bedrock console players."],
            ["Resource Packs", "Upload and manage clean packs, HUDs, and visuals."],
            ["Live Dashboard", "Track sessions, ping, players, and proxy status."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-left">
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-3 text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}