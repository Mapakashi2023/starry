"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Painting } from "@/lib/paintings";

interface PaintingCardProps {
  painting: Painting;
  onClick?: () => void;
  priority?: boolean;
}

export function PaintingCard({ painting, onClick, priority = false }: PaintingCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer break-inside-avoid mb-6"
      onClick={onClick}
    >
      <div className="relative overflow-hidden bg-light-gray">
        <Image
          src={painting.image}
          alt={painting.title}
          width={800}
          height={1000}
          priority={priority}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-end">
          <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-display text-lg text-cream font-semibold">
              {painting.title}
            </h3>
            <p className="text-cream/70 text-sm mt-1">{painting.year}</p>
          </div>
        </div>
      </div>
      <div className="mt-3 lg:hidden">
        <h3 className="font-display text-base font-semibold">{painting.title}</h3>
        <p className="text-warm-gray text-sm">{painting.medium}, {painting.year}</p>
      </div>
    </motion.div>
  );
}
