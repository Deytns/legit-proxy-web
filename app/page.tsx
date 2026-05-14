export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-tight">Legit Proxy</h1>
        <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-200">
          Dashboard
        </button>
      </nav>

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          Minecraft Bedrock proxy for Xbox, mobile, and PC
        </div>

        <h2 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
          A clean proxy for safer Bedrock connections.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Manage servers, resource packs, stats, ping, armor HUD, and player sessions
          from one modern dashboard.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-2xl bg-white px-8 py-4 font-bold text-black hover:bg-gray-200">
            Create Proxy
          </button>
          <button className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-bold text-white hover:bg-white/10">
            View Setup
          </button>
        </div>

        <div className="mt-16 grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left">
            <h3 className="text-xl font-bold">Xbox Connect</h3>
            <p className="mt-3 text-gray-400">
              Use a DNS/server selector flow to connect Xbox to approved Bedrock servers.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left">
            <h3 className="text-xl font-bold">Resource Packs</h3>
            <p className="mt-3 text-gray-400">
              Manage clean visual packs, HUDs, armor displays, and accessibility tools.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left">
            <h3 className="text-xl font-bold">Live Stats</h3>
            <p className="mt-3 text-gray-400">
              Track ping, sessions, online players, and connection logs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}