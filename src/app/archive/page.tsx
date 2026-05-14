"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { collectionsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronRight, PlusCircle } from "lucide-react";
import Link from "next/link";

const filters = ["ALL WORLDS", "CORE FLAVORS", "SPECIAL EDITIONS", "ENERGY LEVELS"];

export default function ArchivePage() {
  const [activeFilter, setActiveFilter] = useState("ALL WORLDS");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredData = collectionsData.filter((item) =>
    activeFilter === "ALL WORLDS" ? true : item.category === activeFilter
  );

  return (
    <main className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary-container/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-tertiary/10 blur-[100px] rounded-full" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,217,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        {/* Header */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="font-technical-label text-technical-label text-tertiary uppercase tracking-[0.3em] block mb-4">
                The Complete Archive
              </span>
              <h1 className="font-headline-lg text-headline-lg uppercase">
                Flavor Collections
              </h1>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-3 glass-panel p-2 rounded-xl border border-white/10">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={cn(
                    "px-6 py-2 rounded-lg font-technical-label text-technical-label transition-colors",
                    activeFilter === f
                      ? "bg-tertiary text-on-tertiary"
                      : "text-on-surface-variant hover:bg-white/5"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Archive Table */}
        <div className="glass-panel rim-light rounded-2xl overflow-hidden border border-white/10">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-8 py-4 bg-surface-container border-b border-white/10">
            <div className="col-span-1 font-technical-label text-technical-label text-outline uppercase">ID</div>
            <div className="col-span-3 font-technical-label text-technical-label text-outline uppercase">Flavor</div>
            <div className="col-span-3 font-technical-label text-technical-label text-outline uppercase hidden md:block">Category</div>
            <div className="col-span-2 font-technical-label text-technical-label text-outline uppercase hidden lg:block">Profile</div>
            <div className="col-span-2 font-technical-label text-technical-label text-outline uppercase hidden lg:block">Status</div>
            <div className="col-span-1 font-technical-label text-technical-label text-outline uppercase">Action</div>
          </div>

          <AnimatePresence>
            {filteredData.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
              >
                <div
                  className={cn(
                    "grid grid-cols-12 gap-4 px-8 py-5 border-b border-white/5 items-center cursor-pointer transition-colors hover:bg-white/[0.02]",
                    expandedId === item.id && "bg-surface-container-low"
                  )}
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                >
                  <div className="col-span-1 font-technical-label text-technical-label text-tertiary">
                    {String(i + 1).padStart(3, "0")}
                  </div>
                  <div className="col-span-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-nav-item text-nav-item text-on-surface">{item.name}</span>
                  </div>
                  <div className="col-span-3 hidden md:block">
                    <span className="font-technical-label text-technical-label text-on-surface-variant">
                      {item.category}
                    </span>
                  </div>
                  <div className="col-span-2 hidden lg:block font-technical-label text-technical-label text-outline">
                    {item.profile}
                  </div>
                  <div className="col-span-2 hidden lg:flex items-center gap-2">
                    <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse flex-shrink-0" />
                    <span className="font-technical-label text-technical-label text-tertiary">ACTIVE</span>
                  </div>
                  <div className="col-span-1">
                    <ChevronRight
                      size={16}
                      className={cn(
                        "text-outline transition-transform",
                        expandedId === item.id && "rotate-90"
                      )}
                    />
                  </div>
                </div>

                {/* Expanded Row */}
                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-surface-container-low"
                    >
                      <div className="px-8 py-6 flex flex-col md:flex-row gap-6 items-start border-b border-white/5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-32 h-32 object-contain rounded-xl border border-white/10 flex-shrink-0"
                        />
                        <div className="flex-1 space-y-3">
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            {item.description ?? `${item.name} — a super awesome flavor made just for you. Taste profile ${item.profile} is ready to drink.`}
                          </p>
                          <div className="flex gap-4 flex-wrap">
                            <span className="font-technical-label text-technical-label text-outline">
                              Category: <span className="text-on-surface">{item.category}</span>
                            </span>
                            <span className="font-technical-label text-technical-label text-outline">
                              Profile: <span className="text-tertiary">{item.profile}</span>
                            </span>
                          </div>
                          <Link href={`/viewer?flavor=${item.id}`}>
                            <button className="mt-2 liquid-metallic-gradient text-on-primary font-technical-label text-technical-label px-6 py-2 rounded-lg flex items-center gap-2 hover:scale-105 transition-all neon-glow">
                              View in 360° Viewer <ChevronRight size={14} />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>


        </div>
      </div>
    </main>
  );
}
