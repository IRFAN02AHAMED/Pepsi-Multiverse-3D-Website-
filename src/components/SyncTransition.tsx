"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useFlavorStore } from "@/store/useFlavorStore";
import { Loader2, Zap } from "lucide-react";

export function SyncTransition() {
  const { isSyncing } = useFlavorStore();

  return (
    <AnimatePresence>
      {isSyncing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black backdrop-blur-2xl"
        >
          {/* Futuristic Grid Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="w-full h-full" style={{ 
              backgroundImage: `linear-gradient(to right, #00d9ff 1px, transparent 1px), linear-gradient(to bottom, #00d9ff 1px, transparent 1px)`,
              backgroundSize: '40px 40px' 
            }} />
          </div>

          {/* Central Animation */}
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360],
                borderColor: ["#00d9ff", "#ffffff", "#00d9ff"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 rounded-full border-2 border-tertiary flex items-center justify-center relative"
            >
              <Zap className="text-tertiary w-12 h-12" />
              
              {/* Outer scanning rings */}
              <motion.div 
                animate={{ scale: [1, 2], opacity: [1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 border border-tertiary rounded-full"
              />
            </motion.div>

            <div className="mt-12 text-center space-y-4">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-technical-label text-2xl text-white tracking-[0.5em] uppercase"
              >
                LOADING WORLD
              </motion.h2>
              
              <div className="flex flex-col items-center gap-2">
                <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    className="h-full bg-tertiary shadow-[0_0_15px_#00d9ff]"
                  />
                </div>
                <div className="flex justify-between w-full font-technical-label text-[10px] text-tertiary opacity-60">
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    CONNECTING TO UNIVERSE...
                  </motion.span>
                  <span>99.98%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cinematic Light Rays */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-tertiary to-transparent opacity-30" />
             <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[2px] w-full bg-gradient-to-r from-transparent via-tertiary to-transparent opacity-30" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
