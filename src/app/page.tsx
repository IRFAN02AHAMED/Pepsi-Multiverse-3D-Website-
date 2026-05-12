"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { Bolt, Activity, ArrowUpRight, Sparkles } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { PepsiScene } from "@/components/PepsiCan3D";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center overflow-hidden pt-20 bg-[#0a0c10]">
      {/* Premium Subtle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#111319] to-background"></div>
        {/* Very subtle texture/glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-tertiary/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-max-width px-margin-desktop text-center min-h-[85vh]">
        {/* Minimal Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <span className="font-technical-label text-technical-label text-tertiary uppercase tracking-[0.4em] mb-4 block opacity-60">
            Dimension 001 // Core Sync
          </span>
          <h1 className="font-display-hero text-display-hero leading-[0.85] text-white md:text-[140px] tracking-tight">
            REFRESH <span className="text-tertiary">REALITY</span>
          </h1>
        </motion.div>

        {/* 3D Hero Product Preview */}
        <div className="relative w-full h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing">
          <Canvas shadows camera={{ position: [0, 0, 8], fov: 40 }}>
            <PepsiScene flavorId="original" />
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={0.5} 
              enablePan={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>
          
          {/* Subtle HUD hints */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-12 opacity-30">
            <div className="flex flex-col gap-1 items-start">
              <span className="font-technical-label text-[10px] text-outline uppercase">Molecular State</span>
              <span className="font-technical-label text-sm text-white">STABLE</span>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <span className="font-technical-label text-[10px] text-outline uppercase">Synchronization</span>
              <span className="font-technical-label text-sm text-tertiary">99.98%</span>
            </div>
          </div>
        </div>

        {/* Refined CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex flex-col md:flex-row gap-8 items-center"
        >
          <Link href="/cta">
            <button className="liquid-metallic-gradient text-on-primary font-nav-item text-nav-item px-14 py-5 rounded-full flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300 neon-glow group shadow-xl">
              INITIATE SYNC
              <Bolt className="transition-transform group-hover:rotate-12" size={18} />
            </button>
          </Link>
          <Link href="/collections" className="font-nav-item text-nav-item text-on-surface-variant hover:text-white transition-colors flex items-center gap-2 group border-b border-white/10 pb-1">
            VIEW ARCHIVES
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Simplified Bento Grid */}
      <section className="relative z-10 w-full max-w-max-width mx-auto px-margin-desktop py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px]">
          {/* Vision Card */}
          <Link href="/story" className="md:col-span-8 block h-full">
            <GlassCard className="h-full p-12 flex flex-col justify-end group transition-all duration-500 hover:bg-white/[0.05]">
              <div className="absolute top-8 right-8 p-3 rounded-full bg-tertiary/10 border border-tertiary/20">
                <Sparkles className="text-tertiary" size={24} />
              </div>
              <div className="relative z-10">
                <h3 className="font-headline-lg text-headline-lg text-white mb-3">
                  THE MULTIVERSE STORY
                </h3>
                <p className="font-body-md text-on-surface-variant max-w-lg leading-relaxed">
                  Go beyond the fizz. Explore how we re-engineered hydration across temporal dimensions to create the ultimate sensory node.
                </p>
              </div>
            </GlassCard>
          </Link>

          {/* Live Telemetry Card */}
          <div className="md:col-span-4 glass-panel rim-light rounded-[32px] p-10 flex flex-col justify-between border border-white/5 bg-surface-container-low/40">
            <div className="flex justify-between items-center">
              <Activity className="text-tertiary w-8 h-8" />
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [12, 24, 12] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1.5 bg-tertiary/60 rounded-full"
                  />
                ))}
              </div>
            </div>
            <div>
              <span className="font-technical-label text-outline uppercase block mb-1">System Status</span>
              <h3 className="font-headline-lg text-[32px] text-white leading-none">
                CORE SYNC<br />OPTIMAL
              </h3>
            </div>
          </div>

          {/* Flavor Profile Stats */}
          <GlassCard className="md:col-span-4 p-8 flex flex-col justify-between h-full border-white/5">
            <div className="font-technical-label text-outline uppercase tracking-widest">
              Active Particles
            </div>
            <div className="space-y-4">
              {[
                { label: "OAK_SMOKE", val: "12%" },
                { label: "CITRUS_GLITCH", val: "84%" },
                { label: "VANILLA_STREAM", val: "04%" }
              ].map((item) => (
                <div key={item.label} className="group cursor-default">
                  <div className="flex justify-between text-[10px] font-technical-label text-outline mb-1 uppercase">
                    <span>{item.label}</span>
                    <span className="text-tertiary">{item.val}</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.val }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-tertiary group-hover:bg-white transition-colors"
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Chrome Collection Card */}
          <Link href="/collections" className="md:col-span-8 block h-full">
            <GlassCard className="h-full group flex items-center justify-between p-12 border-white/5 transition-all duration-500 hover:bg-white/[0.05]">
              <div className="max-w-md">
                <h3 className="font-headline-lg text-headline-lg text-white mb-2 leading-none">
                  CHROME COLLECTION
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Limited edition skins for your dimensional interface. Available for immediate synchronization.
                </p>
              </div>
              <div className="p-6 rounded-full bg-white/5 border border-white/10 group-hover:bg-tertiary/10 group-hover:border-tertiary/30 transition-all">
                <ArrowUpRight className="text-white group-hover:text-tertiary transition-colors" size={32} />
              </div>
            </GlassCard>
          </Link>
        </div>
      </section>

      {/* Decorative Minimal Nodes */}
      <div className="fixed top-1/2 -right-4 z-0 opacity-10 pointer-events-none hidden xl:block">
        <div className="h-64 w-[1px] bg-gradient-to-b from-transparent via-tertiary to-transparent"></div>
      </div>
      <div className="fixed top-1/2 -left-4 z-0 opacity-10 pointer-events-none hidden xl:block">
        <div className="h-64 w-[1px] bg-gradient-to-b from-transparent via-tertiary to-transparent"></div>
      </div>
    </main>
  );
}

