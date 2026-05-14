"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Globe2,
  Activity,
  Server,
  Cpu,
  Sparkles,
} from "lucide-react";

const features = [
  ["Ultra Low Latency", "Fast routing built for smooth Bedrock sessions.", Zap],
  ["Secure Sessions", "Clean connection management with safe dashboard tools.", Shield],
  ["Region Routing", "Pick optimized regions for better connection quality.", Globe2],
  ["Live Analytics", "Track ping, sessions, traffic, and proxy health.", Activity],
  ["Server Manager", "Save servers, ports, profiles, and connection presets.", Server],
  ["Lightweight Core", "Built for speed, clean UI, and high performance.", Cpu],
];

const plans = [
  ["Free", "$0", ["1 proxy profile", "Basic dashboard", "Community support"]],
  ["Premium", "$5/mo", ["3 proxy profiles", "Resource pack manager", "Live stats"], true],
  ["Ultra", "$12/mo", ["10 proxy profiles", "Advanced dashboard", "Priority features"]],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-white/10 p-2 ring-1 ring-white/10">
            <Sparkles className="h-5 w-5 text-purple-400" />
          </div>
          <span className="text-xl font-black tracking-tight">Legit Proxy</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
          <Link href="/signin" className="hover:text-white">Sign In</Link>
          <Link
            href="/signup"
            className="rounded-full bg-white px-5 py-2 font-bold text-black transition hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-xl"
        >
          Minecraft Bedrock Web Proxy Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-5xl text-6xl font-black tracking-tight md:text-8xl"
        >
          The Fastest Minecraft Bedrock Proxy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400"
}