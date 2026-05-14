"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { collectionsData } from "@/lib/data";
import Link from "next/link";
import { ChevronRight, PlusCircle, Activity, Droplets, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Canvas } from "@react-three/fiber";
import { PepsiScene } from "@/components/PepsiCan3D";

const filters = [
  "ALL WORLDS",
  "CORE FLAVORS",
  "SPECIAL EDITIONS",
  "ENERGY LEVELS",
];

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState("ALL WORLDS");

  const filteredData = collectionsData.filter((item) =>
    activeFilter === "ALL WORLDS" ? true : item.category === activeFilter
  );

  return (
    <main className="relative min-h-screen pt-32 pb-20 bg-background text-on-surface selection:bg-tertiary/30">
      {/* Refined Minimal Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-full h-[400px] bg-tertiary/5 blur-[100px] rounded-full opacity-20" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        {/* Header Section */}
        <header className="mb-20">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="space-y-4">
              <span className="font-technical-label text-[10px] text-tertiary uppercase tracking-[0.6em] block opacity-60">
                The Complete Archive
              </span>
              <h1 className="font-technical-label text-4xl md:text-[56px] leading-tight font-bold tracking-[0.15em] text-white uppercase">
                FLAVOR COLLECTIONS
              </h1>
            </div>

            {/* HUD Filters - Minimal Redesign */}
            <nav className="flex flex-wrap justify-center gap-2 p-1.5 glass-panel rounded-full border border-white/5 bg-white/2 backdrop-blur-xl">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "px-6 py-2 rounded-full font-technical-label text-[11px] transition-all duration-300 tracking-widest",
                    activeFilter === filter
                      ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      : "text-on-surface-variant hover:text-white hover:bg-white/5"
                  )}
                >
                  {filter}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Bento Grid Gallery */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                key={item.id}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/5 transition-all duration-500 hover:border-white/20 bg-surface-container-low",
                  `md:col-span-${item.colSpan || 4}`,
                  item.id === "original" ? "min-h-[500px]" : "min-h-[400px]"
                )}
              >
                <Link href={`/viewer?flavor=${item.id}`} className="block w-full h-full">
                  {/* Background Composition */}
                  <div className="absolute inset-0">
                    {item.id === "original" ? (
                      <div className="relative w-full h-full overflow-hidden bg-[#05070a]">
                        {/* Custom Minimal Futuristic Background */}
                        <div className="absolute inset-0 opacity-40">
                          <div className="absolute top-[-10%] right-[-5%] w-[70%] h-[70%] bg-primary/10 blur-[100px] rounded-full" />
                          <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[60%] bg-tertiary/5 blur-[80px] rounded-full" />
                        </div>
                        
                        {/* 3D Product Focal Point */}
                        <div className="absolute inset-0 flex items-center justify-center scale-110 translate-y-[-5%]">
                          <Canvas shadows camera={{ position: [0, 0, 5], fov: 40 }} className="w-full h-full pointer-events-none">
                            <PepsiScene flavorId="original" highIllumination={true} />
                          </Canvas>
                        </div>
                        
                        {/* Subtle depth layer */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/40 to-transparent" />
                      </div>
                    ) : (
                      <>
                        <img
                          className={cn(
                            "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
                            "opacity-40 group-hover:opacity-60"
                          )}
                          src={item.image}
                          alt={item.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      </>
                    )}
                  </div>

                  {/* Content Layout */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="font-technical-label text-[10px] px-2 py-0.5 rounded border border-white/10 text-outline uppercase tracking-widest bg-black/20">
                          ID: {item.profile}
                        </span>
                        {item.id === "electric-limited" && (
                          <span className="font-technical-label text-[10px] px-2 py-0.5 rounded bg-tertiary/20 text-tertiary uppercase tracking-widest border border-tertiary/30 animate-pulse">
                            Special Edition
                          </span>
                        )}
                      </div>
                      
                      <div>
                        <h2 className={cn(
                          "font-headline-lg leading-none mb-2 tracking-tighter uppercase",
                          item.id === "original" ? "text-5xl md:text-8xl" : "text-4xl md:text-5xl"
                        )}>
                          {item.name}
                        </h2>
                        {item.description && (
                          <p className="text-on-surface-variant text-sm max-w-sm line-clamp-2 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <div className="pt-4">
                        <div className="inline-flex items-center gap-2 text-white bg-white/5 border border-white/10 px-5 py-2 rounded-full font-technical-label text-[10px] tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all duration-500">
                          EXPLORE <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

          </AnimatePresence>
        </motion.div>

        {/* Minimal Statistics Section */}
        <section className="mt-32 border-t border-white/5 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <h2 className="font-headline-lg text-4xl tracking-tighter">
                MULTIVERSE<br />STATUS
              </h2>
              <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
                Real-time telemetry across core dimensions. System stability maintained at peak sync rate.
              </p>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: "Active Users", value: "2.4M", desc: "Concurrent dimension travelers", icon: Activity },
                { label: "Sync Rate", value: "99.9%", desc: "Cross-reality rendering stability", icon: Droplets },
                { label: "Load State", value: "Optimal", desc: "No dimensional instability detected", icon: Activity },
                { label: "Telemetry", value: "0.02ms", desc: "Latency between taste nodes", icon: Droplets },
              ].map((stat) => (
                <div key={stat.label} className="space-y-3 group cursor-help">
                  <div className="flex flex-col">
                    <span className="font-technical-label text-[10px] text-outline uppercase tracking-[0.2em]">
                      {stat.label}
                    </span>
                    <span className="text-[9px] text-tertiary/60 uppercase tracking-widest h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
                      {stat.desc}
                    </span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold tracking-tight">{stat.value}</span>
                    <stat.icon size={14} className="text-tertiary mb-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Subtle Floating Status */}
      <div className="fixed bottom-10 right-10 z-50 flex items-center gap-4 pointer-events-none opacity-50">
        <div className="font-technical-label text-[10px] text-tertiary tracking-[0.3em] uppercase">
          Core System Online
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_10px_#00d9ff]" />
      </div>
    </main>
  );
}
