import Link from "next/link";

const plans = [
  ["Free", "$0", "Basic dashboard, 1 server slot, public setup guide"],
  ["Plus", "$5/mo", "3 server slots, resource-pack manager, stats dashboard"],
  ["Pro", "$12/mo", "10 server slots, priority routing, advanced controls"],
];

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[#08080b] px-6 py-12 text-white">
      <Link href="/" className="text-gray-400 hover:text-white">← Back</Link>

      <h1 className="mt-10 text-center text-6xl font-black">Choose Your Plan</h1>
      <p className="mt-4 text-center text-gray-400">Start free. Upgrade when you need more tools.</p>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
        {plans.map(([name, price, desc]) => (
          <div key={name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-3xl font-black">{name}</h2>
            <p className="mt-4 text-5xl font-black">{price}</p>
            <p className="mt-4 text-gray-400">{desc}</p>
            <Link
              href="/signup"
              className="mt-8 block rounded-2xl bg-white py-4 text-center font-black text-black"
            >
              Select {name}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}