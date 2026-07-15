"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { normalFont, titleFont } from "@/app/fonts";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactItems = [
    { label: "OFFICE HQ", value: "126/127, city mall-1, kalol, gandhinagar" },
    { label: "PHONE", value: "+91 99999 99999", href: "tel:+919999999999" },
    { label: "EMAIL", value: "contact@overa.in", href: "mailto:contact@overa.in" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.name || !values.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setValues({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact-form" className="relative min-h-screen bg-[#030303] text-white py-24 sm:py-32 flex items-center">
      {/* Fine analog noise overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.012] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 lg:px-8">
        {/* Main Content Split Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">

          {/* LEFT COLUMN: Clean Stark Typography & Plain Contact Items */}
          <div className="lg:col-span-5 space-y-12 lg:pr-10">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`${titleFont.className} text-6xl sm:text-7xl font-extralight tracking-tight leading-[0.95] text-white`}
              >
                Ask for <br />
                <span className="italic font-serif text-white/90">any</span> <br />
                query.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`${normalFont.className} text-sm leading-relaxed text-zinc-500 max-w-sm`}
              >
                We partner with forward-thinking individuals, families, and corporations to design bespoke wealth, loan, and insurance structures.
              </motion.p>
            </div>

            {/* Plain text contact items */}
            <div className="space-y-8 pt-4">
              {contactItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                  className="space-y-1"
                >
                  <h4 className="text-[10px] font-semibold tracking-[0.25em] text-zinc-600 uppercase">
                    {item.label}
                  </h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-base font-light text-zinc-300 hover:text-white transition-colors duration-300 block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-light text-zinc-300">
                      {item.value}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Monochromatic form with underline inputs */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-transparent"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form-body"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    {/* Underline Input Fields */}
                    <div className="space-y-8">
                      {[
                        { id: "name", label: "Your Name", type: "text" },
                        { id: "email", label: "Email Address", type: "email" },
                        { id: "phone", label: "Phone Number (Optional)", type: "tel" },
                      ].map((field) => (
                        <div key={field.id} className="relative flex flex-col group">
                          <label className={cn(
                            "text-[10px] font-semibold uppercase tracking-[0.25em] transition-all duration-300",
                            focused === field.id || values[field.id as keyof typeof values]
                              ? "text-white/60"
                              : "text-zinc-500"
                          )}>
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            value={values[field.id as keyof typeof values]}
                            onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
                            onFocus={() => setFocused(field.id)}
                            onBlur={() => setFocused(null)}
                            className="w-full bg-transparent border-b border-zinc-800 focus:border-white pt-2.5 pb-2 text-base text-white outline-none transition-colors duration-500"
                            required={field.id !== "phone"}
                          />
                        </div>
                      ))}

                      {/* Requirements TextArea */}
                      <div className="relative flex flex-col group">
                        <label className={cn(
                          "text-[10px] font-semibold uppercase tracking-[0.25em] transition-all duration-300",
                          focused === "message" || values.message
                            ? "text-white/60"
                            : "text-zinc-500"
                        )}>
                          Project Details / Requirements
                        </label>
                        <textarea
                          rows={4}
                          value={values.message}
                          onChange={(e) => setValues({ ...values, message: e.target.value })}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                          className="w-full bg-transparent border-b border-zinc-800 focus:border-white pt-2.5 pb-2 text-base text-white outline-none resize-none transition-colors duration-500"
                        />
                      </div>
                    </div>

                    {/* Awwwards Minimalist Button: Solid white -> Solid Black on Hover */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative flex h-14 w-full items-center justify-between overflow-hidden rounded-full border border-white bg-white px-6 text-black transition-all duration-500 hover:bg-black hover:text-white cursor-pointer disabled:opacity-50"
                    >
                      <span className="relative z-10 text-xs font-semibold uppercase tracking-[0.25em]">
                        {isSubmitting ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
                      </span>
                      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                        <ArrowRight className="h-4.5 w-4.5 transition-transform duration-500 group-hover:translate-x-0.5" />
                      </div>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-16 flex flex-col items-center justify-center border border-white/10 rounded-2xl bg-[#0a0a0a]/50 backdrop-blur-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/20 text-white mb-6">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h3 className={`${titleFont.className} text-3xl font-light tracking-tight text-white mb-3`}>
                      Inquiry Transmitted
                    </h3>
                    <p className="text-zinc-500 text-sm max-w-sm mb-8 font-light leading-relaxed">
                      Thank you. Your request has been received securely. An advisor will contact you within 2 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-full border border-white/15 hover:border-white text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-all duration-500 cursor-pointer"
                    >
                      Submit Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}