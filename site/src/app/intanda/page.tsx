"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const pillars = [
  {
    title: "Artist Workshops",
    description:
      "Intensive training programmes for emerging artists, providing studio access, mentorship, and professional development opportunities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.764m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Creative Markets",
    description:
      "Curating art markets and exhibition spaces that connect Zambian artists with collectors, galleries, and international audiences.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.997 2.997 0 00.354-1.099A3 3 0 007.5 5.25H9m12 4.1A2.997 2.997 0 0120.646 8.25 3 3 0 0016.5 5.25H15" />
      </svg>
    ),
  },
  {
    title: "Skills Training",
    description:
      "Teaching creative entrepreneurship, digital literacy, and business skills to help artists build sustainable careers in the creative economy.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Cultural Exchange",
    description:
      "Facilitating international residencies, exhibitions, and collaborations that place Zambian art in global conversation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export default function IntandaPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] lg:h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/paintings/girl-yellow-top.jpg"
          alt="Intanda Creative"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/20" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8 pb-12 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-burnt-orange text-sm tracking-widest uppercase mb-3">
              Social Enterprise
            </p>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-cream">
              Intanda Creative
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="text-xs tracking-widest uppercase text-warm-gray mb-6">
              Our Vision
            </p>
            <h2 className="font-display text-2xl lg:text-4xl font-bold leading-relaxed">
              Building a thriving creative economy in Zambia through art,
              enterprise, and cultural innovation.
            </h2>
            <p className="mt-8 text-charcoal/70 text-lg leading-relaxed max-w-3xl mx-auto">
              Intanda Creative is a social enterprise founded by Stary Mwaba
              that harnesses the power of creativity to drive economic
              opportunity in Zambian communities. We believe that art is not
              just expression &mdash; it is a viable livelihood, a vehicle for
              change, and a bridge between cultures.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-28 bg-light-gray/50 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <p className="text-xs tracking-widest uppercase text-warm-gray mb-3">
              What We Do
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Our Pillars
            </h2>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <AnimateOnScroll key={pillar.title} delay={i * 0.1}>
                <div className="bg-cream p-8 lg:p-10 border border-light-gray hover:border-burnt-orange/30 transition-colors group">
                  <div className="text-burnt-orange mb-4">{pillar.icon}</div>
                  <h3 className="font-display text-xl font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-charcoal/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-28 bg-charcoal text-cream px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/paintings/girl-with-plant.jpg"
                alt="Community art workshop"
                fill
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="font-display text-xl lg:text-2xl italic leading-relaxed text-cream/90">
              &ldquo;By employing local narratives through socially engaged
              installations, paintings, photographs, film and drawings, I
              intervene in a broader discourse that is often driven by economics
              and politics &mdash; to create new meanings, experiences,
              understandings, relationships, and situations.&rdquo;
            </p>
            <p className="mt-6 text-cream/50 text-sm tracking-widest uppercase">
              &mdash; Stary Mwaba
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-burnt-orange text-cream text-center px-6">
        <AnimateOnScroll>
          <h2 className="font-display text-3xl lg:text-4xl font-bold">
            Collaborate With Us
          </h2>
          <p className="mt-4 text-cream/80 max-w-xl mx-auto text-lg">
            Partner with Intanda Creative to support Zambia&rsquo;s growing
            creative economy and empower the next generation of artists.
          </p>
          <a
            href="mailto:starymwaba@gmail.com?subject=Intanda Creative Partnership"
            className="inline-block mt-8 px-8 py-3 bg-cream text-burnt-orange text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Get in Touch
          </a>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
