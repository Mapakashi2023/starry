"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { paintings, categories } from "@/lib/paintings";
import { PaintingCard } from "@/components/PaintingCard";
import { Lightbox } from "@/components/Lightbox";
import type { Painting } from "@/lib/paintings";

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);

  const filteredPaintings =
    activeCategory === "all"
      ? paintings
      : paintings.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 lg:pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs tracking-widest uppercase text-warm-gray mb-3">
          Gallery
        </p>
        <h1 className="font-display text-4xl lg:text-6xl font-bold">Works</h1>
        <p className="mt-4 text-warm-gray max-w-2xl text-lg">
          Acrylic on perforated newspaper, canvas, and mixed media &mdash;
          foregrounding the little narratives of ordinary people.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 flex flex-wrap gap-3"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-sm tracking-wider transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-charcoal text-cream"
                : "bg-light-gray text-charcoal/70 hover:bg-charcoal/10"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <div className="mt-12 masonry-grid">
        <AnimatePresence mode="popLayout">
          {filteredPaintings.map((painting, i) => (
            <PaintingCard
              key={painting.id}
              painting={painting}
              onClick={() => setSelectedPainting(painting)}
              priority={i < 3}
            />
          ))}
        </AnimatePresence>
      </div>

      <Lightbox
        painting={selectedPainting}
        onClose={() => setSelectedPainting(null)}
      />
    </div>
  );
}
