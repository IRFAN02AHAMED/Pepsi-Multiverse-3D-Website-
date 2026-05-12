"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { collectionsData } from "@/lib/data";
import { CheckCircle, Loader2, Zap, ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  dimension: z.string().min(1, "Please select a dimension"),
  quantity: z.string().refine(
    (v) => {
      const n = Number(v);
      return !isNaN(n) && n >= 1 && n <= 24;
    },
    { message: "Quantity must be between 1 and 24" }
  ),
  message: z.string().optional(),
  newsletter: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

function InputField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="font-technical-label text-technical-label text-on-surface-variant uppercase tracking-widest block">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="font-technical-label text-technical-label text-error"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputBase =
  "w-full bg-surface-container border border-white/10 rounded-lg px-4 py-3 font-nav-item text-nav-item text-on-surface placeholder:text-outline focus:outline-none focus:border-tertiary focus:shadow-[0_0_0_1px_#00d9ff] transition-all border-l-2 border-l-transparent focus:border-l-tertiary";

export default function CTAPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useForm<FormData>({
    resolver: zodResolver(schema) as any,
    defaultValues: { quantity: "1", newsletter: false },
  });

  async function onSubmit(data: FormData) {
    setLoading(true);
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1800));
    console.log("Form submitted:", data);
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <main className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-container/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary-container/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column — copy */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div>
              <span className="font-technical-label text-technical-label text-tertiary uppercase tracking-[0.3em] block mb-4">
                MULTIVERSE SYNC PROTOCOL
              </span>
              <h1 className="font-headline-lg text-headline-lg leading-none">
                INITIATE<br />YOUR SYNC
              </h1>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Reserve your portal to the next dimension. Select your preferred
              flavor vector and configure your shipment parameters. A Multiverse
              operative will confirm your order within 0.02ms.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Dimensions Active", value: "10" },
                { label: "Sync Rate", value: "99.98%" },
                { label: "Delivery Speed", value: "0.02ms" },
                { label: "Satisfaction", value: "100%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel rim-light p-4 rounded-xl border border-white/10"
                >
                  <div className="font-headline-lg text-[32px] text-tertiary leading-none">
                    {stat.value}
                  </div>
                  <div className="font-technical-label text-technical-label text-outline mt-1 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Can */}
            <div className="relative flex items-center justify-center py-8">
              <div className="absolute w-48 h-48 rounded-full border border-tertiary/20 animate-ping" />
              <motion.img
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src={collectionsData[0].image}
                alt="Pepsi Can"
                className="h-48 object-contain drop-shadow-[0_0_40px_rgba(0,92,180,0.6)] relative z-10"
              />
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-panel rim-light rounded-3xl p-12 text-center border border-tertiary/40 neon-glow flex flex-col items-center gap-6"
                >
                  <CheckCircle className="text-tertiary w-20 h-20" />
                  <h2 className="font-headline-lg text-headline-lg text-white">
                    SYNC CONFIRMED
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                    Your dimension has been locked in. A multiverse operative
                    will reach out to your email shortly.
                  </p>
                  <div className="glass-panel rim-light rounded-xl p-4 border border-white/10 w-full max-w-xs">
                    <span className="font-technical-label text-technical-label text-outline block">
                      CONFIRMATION CODE
                    </span>
                    <span className="font-technical-label text-[20px] text-tertiary font-bold tracking-wider">
                      PMV-{Math.random().toString(36).slice(2, 8).toUpperCase()}
                    </span>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-technical-label text-technical-label text-outline hover:text-on-surface transition-colors underline underline-offset-4"
                  >
                    Submit another order
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="glass-panel rim-light rounded-3xl p-8 md:p-10 border border-white/10 space-y-6"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tertiary to-transparent rounded-t-3xl opacity-60" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Full Name" error={errors.name?.message}>
                      <input
                        {...register("name")}
                        id="field-name"
                        placeholder="Your name"
                        className={cn(inputBase, errors.name && "border-error focus:border-error")}
                      />
                    </InputField>
                    <InputField label="Email Address" error={errors.email?.message}>
                      <input
                        {...register("email")}
                        id="field-email"
                        type="email"
                        placeholder="your@email.com"
                        className={cn(inputBase, errors.email && "border-error focus:border-error")}
                      />
                    </InputField>
                  </div>

                  <InputField label="Select Dimension" error={errors.dimension?.message}>
                    <select
                      {...register("dimension")}
                      id="field-dimension"
                      className={cn(inputBase, "appearance-none cursor-pointer", errors.dimension && "border-error")}
                    >
                      <option value="">— Choose your dimension —</option>
                      {collectionsData.map((c) => (
                        <option key={c.id} value={c.id} className="bg-surface-container">
                          {c.name} — {c.category}
                        </option>
                      ))}
                    </select>
                  </InputField>

                  <InputField label="Quantity (1–24 cans)" error={errors.quantity?.message}>
                    <input
                      {...register("quantity")}
                      id="field-quantity"
                      type="number"
                      min={1}
                      max={24}
                      className={cn(inputBase, errors.quantity && "border-error")}
                    />
                  </InputField>

                  <InputField label="Message (optional)" error={errors.message?.message}>
                    <textarea
                      {...register("message")}
                      id="field-message"
                      rows={3}
                      placeholder="Any special instructions for your operative..."
                      className={cn(inputBase, "resize-none")}
                    />
                  </InputField>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      {...register("newsletter")}
                      id="field-newsletter"
                      type="checkbox"
                      className="w-4 h-4 accent-[#00d9ff] rounded"
                    />
                    <span className="font-technical-label text-technical-label text-on-surface-variant group-hover:text-on-surface transition-colors">
                      Subscribe to interdimensional updates & new flavor alerts
                    </span>
                  </label>

                  <button
                    type="submit"
                    id="submit-btn"
                    disabled={loading}
                    className="w-full liquid-metallic-gradient text-on-primary font-nav-item text-nav-item py-4 rounded-full flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all neon-glow disabled:opacity-70 disabled:scale-100"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        SYNCING...
                      </>
                    ) : (
                      <>
                        <Zap size={20} />
                        INITIATE SYNC
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>

                  <p className="font-technical-label text-technical-label text-outline text-center">
                    All dimensions are secured and protected.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
