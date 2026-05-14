import Link from "next/link";

const plans = [
  ["Free", "$0", "Basic dashboard, 1 proxy profile, community support"],
  ["Premium", "$5/mo", "3 proxy profiles, resource-pack manager, live stats"],
  ["Ultra", "$12/mo", "10 proxy profiles, advanced dashboard, priority features"],
];

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-12 text-white">
      <Link href="/" className="text-gray-400 hover:text-white">
        ← Back Home
      </Link>

      <section className="mx-auto max-w-6xl py-20 text-center">
        <h1 className="text-6xl font-black">Choose Your Plan</h1>
        <p className="mt-4 text-gray-400">
          Start free. Upgrade when you need more power.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map(([name, price, desc]) => (
            <div
              key={name}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-left"
            >
              <h2 className="text-3xl font-black">{name}</h2>
              <p className="mt-5 text-5xl font-black">{price}</p>
              <p className="mt-5 text-gray-400">{desc}</p>

              <Link
                href="/signup"
                className="mt-8 block rounded-2xl bg-white px-6 py-4 text-center font-black text-black"
              >
                Choose {name}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}