"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { collectionsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useFlavorStore } from "@/store/useFlavorStore";
import { ChevronLeft, ChevronRight, RotateCcw, Zap, Droplets, Thermometer, Box } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PepsiScene } from "@/components/PepsiCan3D";

const flavorStats: Record<string, { co2: number; chill: number; energy: number; dimension: string }> = {
  original:            { co2: 100, chill: 85,  energy: 72,  dimension: "001" },
  "zero-sugar":        { co2: 98,  chill: 100, energy: 90,  dimension: "002" },
  "wild-cherry":       { co2: 88,  chill: 70,  energy: 95,  dimension: "003" },
  "electric-limited":  { co2: 100, chill: 60,  energy: 100, dimension: "004" },
  lime:                { co2: 92,  chill: 88,  energy: 65,  dimension: "005" },
  mango:               { co2: 85,  chill: 76,  energy: 60,  dimension: "006" },
  blue:                { co2: 95,  chill: 94,  energy: 78,  dimension: "007" },
  nitro:               { co2: 80,  chill: 100, energy: 100, dimension: "008" },
  vanilla:             { co2: 82,  chill: 80,  energy: 55,  dimension: "009" },
  max:                 { co2: 100, chill: 65,  energy: 100, dimension: "010" },
};

function StatBar({ label, value, icon: Icon }: { label: string; value: number; icon: React.ElementType }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-technical-label text-technical-label text-on-surface-variant uppercase flex items-center gap-1">
          <Icon size={12} /> {label}
        </span>
        <span className="font-technical-label text-technical-label text-tertiary">{value}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-tertiary shadow-[0_0_8px_#00d9ff] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function ViewerClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { activeFlavor, setFlavor, startSync } = useFlavorStore();
  const [rotating, setRotating] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [exploded, setExploded] = useState(false);
  const [showFizz, setShowFizz] = useState(false);

  const flavors = collectionsData.filter((c) => c.id in flavorStats);

  const hasSynced = useRef(false);

  useEffect(() => {
    // Automatically trigger sync transition on entry for immersion
    if (!hasSynced.current) {
      startSync();
      hasSynced.current = true;
    }

    const flavorParam = searchParams.get("flavor");
    if (flavorParam && flavorStats[flavorParam]) {
      setFlavor(flavorParam);
    }
  }, [searchParams, setFlavor, startSync]);

  const currentIndex = flavors.findIndex((f) => f.id === activeFlavor);
  const current = flavors[currentIndex >= 0 ? currentIndex : 0];
  const stats = flavorStats[current?.id] ?? flavorStats["original"];

  function navigate(dir: 1 | -1) {
    const next = (currentIndex + dir + flavors.length) % flavors.length;
    setFlavor(flavors[next].id);
    router.replace(`/viewer?flavor=${flavors[next].id}`, { scroll: false });
  }

  function handleRotate() {
    setRotating(true);
    setRotation((r) => r + 360);
    setTimeout(() => setRotating(false), 800);
  }

  if (!current) return null;

  return (
    <main className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-background">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-container/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-tertiary/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="font-technical-label text-technical-label text-tertiary uppercase tracking-[0.3em]">
            360° FLAVOR INTERFACE // DIMENSION {stats.dimension}
          </span>
          <h1 className="font-headline-lg text-headline-lg mt-2">MULTIVERSE VIEWER</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Flavor Selector Sidebar */}
          <div className="lg:col-span-3 relative h-[300px] lg:h-[600px] overflow-hidden group">
            <motion.div 
              drag="y"
              dragConstraints={{ top: -((flavors.length - 5) * 80), bottom: 0 }}
              className="flex lg:flex-col gap-3 pb-2 lg:pb-0 cursor-grab active:cursor-grabbing"
            >
            {flavors.map((flavor) => (
              <button
                key={flavor.id}
                id={`flavor-btn-${flavor.id}`}
                onClick={() => {
                  setFlavor(flavor.id);
                  router.replace(`/viewer?flavor=${flavor.id}`, { scroll: false });
                }}
                className={cn(
                  "flex-shrink-0 glass-panel rim-light rounded-xl p-3 flex items-center gap-3 transition-all duration-300 text-left border",
                  activeFlavor === flavor.id
                    ? "border-tertiary neon-glow"
                    : "border-white/5 hover:border-white/20"
                )}
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
                  <img src={flavor.image} alt={flavor.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-nav-item text-nav-item text-on-surface text-xs leading-tight">{flavor.name}</p>
                  <p className="font-technical-label text-technical-label text-outline">DIM-{flavorStats[flavor.id]?.dimension}</p>
                </div>
              </button>
            ))}
            </motion.div>
            
            {/* Ambient indicator for scrollability */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background to-transparent pointer-events-none opacity-60" />
            <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background to-transparent pointer-events-none opacity-60" />
          </div>

          {/* Central Viewer */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            <button
              id="viewer-prev"
              onClick={() => navigate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass-panel rim-light rounded-full p-3 hover:bg-white/10 transition-colors border border-white/10"
            >
              <ChevronLeft className="text-on-surface" size={24} />
            </button>
            <button
              id="viewer-next"
              onClick={() => navigate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass-panel rim-light rounded-full p-3 hover:bg-white/10 transition-colors border border-white/10"
            >
              <ChevronRight className="text-on-surface" size={24} />
            </button>

            {/* Viewer Stage */}
            <div className="relative w-full aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full border border-tertiary/20 animate-ping" />
              </div>
              
              <Canvas shadows className="w-full h-full">
                <PepsiScene 
                  flavorId={current.id} 
                  explodedProgress={exploded ? 1 : 0}
                  showFizz={showFizz}
                />
                <OrbitControls 
                  enableDamping 
                  dampingFactor={0.05}
                  rotateSpeed={0.8}
                  minDistance={5}
                  maxDistance={12}
                  enableZoom={true}
                  autoRotate={!rotating}
                  autoRotateSpeed={1}
                />
              </Canvas>

              {/* HUD Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none opacity-40">
                <Box size={14} className="text-tertiary" />
                <span className="font-technical-label text-[10px] text-tertiary uppercase tracking-widest">3D INTERACTIVE MODE</span>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button
                id="rotate-btn"
                onMouseEnter={() => setRotating(true)}
                onMouseLeave={() => setRotating(false)}
                onClick={handleRotate}
                className="glass-panel rim-light px-6 py-3 rounded-full flex items-center gap-2 font-technical-label text-technical-label text-tertiary border border-tertiary/30 hover:border-tertiary transition-all disabled:opacity-50"
              >
                <RotateCcw size={16} className={rotating ? "animate-spin" : ""} />
                SLOW ORBIT
              </button>

              <button
                onClick={() => setExploded(!exploded)}
                className={cn(
                  "glass-panel rim-light px-6 py-3 rounded-full flex items-center gap-2 font-technical-label text-technical-label transition-all border",
                  exploded ? "bg-tertiary/20 border-tertiary text-white shadow-[0_0_15px_#00d9ff]" : "text-tertiary border-tertiary/30 hover:border-tertiary"
                )}
              >
                <Box size={16} />
                {exploded ? "HIDE DETAILS" : "SHOW DETAILS"}
              </button>

              <button
                onClick={() => setShowFizz(!showFizz)}
                className={cn(
                  "glass-panel rim-light px-6 py-3 rounded-full flex items-center gap-2 font-technical-label text-technical-label transition-all border",
                  showFizz ? "bg-primary/20 border-primary text-white shadow-[0_0_15px_#2563eb]" : "text-primary border-primary/30 hover:border-primary"
                )}
              >
                <Droplets size={16} />
                {showFizz ? "STOP FIZZ" : "TRIGGER FIZZ"}
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "_name"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 text-center"
              >
                <h2 className="font-headline-lg text-headline-lg">{current.name}</h2>
                <p className="font-technical-label text-technical-label text-outline mt-1">
                  TASTE PROFILE: {stats.dimension}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats Panel */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <GlassCard className="p-6 rounded-2xl!">
              <div className="font-technical-label text-technical-label text-tertiary uppercase mb-4 tracking-widest">
                TASTE STATS
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={current.id + "_stats"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5">
                  <StatBar label="Fizziness" value={stats.co2} icon={Droplets} />
                  <StatBar label="Chill Factor" value={stats.chill} icon={Thermometer} />
                  <StatBar label="Energy Level" value={stats.energy} icon={Zap} />
                </motion.div>
              </AnimatePresence>
            </GlassCard>

            <GlassCard className="p-6 rounded-2xl!">
              <div className="font-technical-label text-technical-label text-tertiary uppercase mb-4 tracking-widest">
                WORLD LIVE STATS
              </div>
              <div className="space-y-3">
                {[
                  { label: "WORLD ID", value: `DIM-${stats.dimension}`, cls: "text-on-surface" },
                  { label: "STATUS", value: "ACTIVE", cls: "text-tertiary" },
                  { label: "CATEGORY", value: current.category, cls: "text-on-surface" },
                  { label: "SYNC", value: "99.98%", cls: "text-green-400" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between">
                    <span className="font-technical-label text-technical-label text-outline">{row.label}</span>
                    <span className={cn("font-technical-label text-technical-label text-right max-w-[140px] truncate", row.cls)}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </main>
  );
}
