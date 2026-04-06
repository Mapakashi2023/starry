"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { pressItems } from "@/lib/press";

export default function PressPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs tracking-widest uppercase text-warm-gray mb-3">
          Media Coverage
        </p>
        <h1 className="font-display text-4xl lg:text-6xl font-bold">Press</h1>
        <p className="mt-4 text-warm-gray max-w-2xl text-lg">
          Selected press coverage and features on Stary Mwaba&rsquo;s work and
          exhibitions.
        </p>
      </motion.div>

      <div className="mt-16 space-y-0 divide-y divide-light-gray">
        {pressItems.map((item, i) => (
          <AnimateOnScroll key={item.id} delay={i * 0.05}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-10 first:pt-0"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                <div className="lg:w-48 shrink-0">
                  <p className="font-display text-xl lg:text-2xl font-bold text-charcoal/25 group-hover:text-charcoal/50 transition-colors">
                    {item.publication}
                  </p>
                  <p className="text-warm-gray text-sm mt-1">{item.date}</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold group-hover:text-cobalt transition-colors leading-snug">
                    {item.title}
                  </h3>
                  {item.author && (
                    <p className="text-warm-gray text-sm mt-2">
                      By {item.author}
                    </p>
                  )}
                  <p className="text-charcoal/60 mt-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-warm-gray group-hover:text-cobalt transition-colors shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
                </svg>
              </div>
            </a>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
