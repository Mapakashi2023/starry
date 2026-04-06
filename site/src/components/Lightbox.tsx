"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Painting } from "@/lib/paintings";

interface LightboxProps {
  painting: Painting | null;
  onClose: () => void;
}

export function Lightbox({ painting, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {painting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 max-h-[70vh] lg:max-h-[80vh] flex items-center justify-center">
              <Image
                src={painting.image}
                alt={painting.title}
                width={1200}
                height={1500}
                className="max-h-[70vh] lg:max-h-[80vh] w-auto object-contain"
                priority
              />
            </div>

            <div className="lg:w-72 text-cream shrink-0">
              <h2 className="font-display text-2xl lg:text-3xl font-bold">
                {painting.title}
              </h2>
              <div className="mt-4 space-y-2 text-cream/70 text-sm">
                <p>{painting.medium}</p>
                <p>{painting.size}</p>
                <p>{painting.year}</p>
                {painting.collection && (
                  <p className="text-gold mt-4">
                    Collection: {painting.collection}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
