"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { featuredPaintings } from "@/lib/paintings";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/paintings/girl-pink-top.jpg"
            alt="Stary Mwaba artwork"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-cream tracking-tight"
          >
            Stary Mwaba
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-cream/80 text-lg sm:text-xl lg:text-2xl font-display italic max-w-2xl mx-auto"
          >
            Forcing the small narrative
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link
              href="/works"
              className="inline-block mt-10 px-8 py-3 border border-cream/40 text-cream text-sm tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all duration-500"
            >
              View Works
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-12 bg-cream/40 animate-pulse" />
        </motion.div>
      </section>

      {/* Featured Works */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-widest uppercase text-warm-gray mb-3">
                Selected Works
              </p>
              <h2 className="font-display text-3xl lg:text-5xl font-bold">
                Little Narratives
              </h2>
            </div>
            <Link
              href="/works"
              className="hidden sm:inline-block text-sm tracking-widest uppercase text-cobalt hover:text-cobalt-light transition-colors border-b border-cobalt/30 pb-1"
            >
              View All
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredPaintings.map((painting, i) => (
            <AnimateOnScroll key={painting.id} delay={i * 0.1}>
              <Link href="/works" className="group block">
                <div className="relative overflow-hidden bg-light-gray aspect-[3/4]">
                  <Image
                    src={painting.image}
                    alt={painting.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500" />
                </div>
                <div className="mt-4">
                  <h3 className="font-display text-lg font-semibold">
                    {painting.title}
                  </h3>
                  <p className="text-warm-gray text-sm mt-1">
                    {painting.medium}, {painting.year}
                  </p>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Link
            href="/works"
            className="inline-block text-sm tracking-widest uppercase text-cobalt border-b border-cobalt/30 pb-1"
          >
            View All Works
          </Link>
        </div>
      </section>

      {/* Artist Intro */}
      <section className="py-24 lg:py-32 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/paintings/cobalt-faced.jpg"
                  alt="Stary Mwaba - Cobalt faced"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="text-xs tracking-widest uppercase text-cream/40 mb-6">
                About the Artist
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
                &ldquo;I take these grand narratives, and I create holes so that
                you can&rsquo;t make sense of the stories any more.&rdquo;
              </h2>
              <p className="mt-8 text-cream/70 leading-relaxed text-lg">
                Stary Mwaba is one of Zambia&rsquo;s leading contemporary visual
                artists, working from his studios on the Copperbelt and in
                Lusaka. His practice centres on what he calls &ldquo;little
                narratives&rdquo; &mdash; the personal stories of ordinary people
                that subvert the dominant narratives of media and power.
              </p>
              <p className="mt-4 text-cream/70 leading-relaxed">
                Using acrylic on perforated newspaper, Mwaba burns away words
                with a soldering gun and paints vibrant portraits over the
                gaps &mdash; foregrounding the lived experiences of Zambians
                who are too often overlooked.
              </p>
              <Link
                href="/about"
                className="inline-block mt-8 text-sm tracking-widest uppercase text-gold hover:text-cream transition-colors border-b border-gold/30 pb-1"
              >
                Read Full Bio
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Press Banner */}
      <section className="py-20 lg:py-24 px-6 lg:px-8 border-b border-light-gray">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <p className="text-xs tracking-widest uppercase text-warm-gray mb-8">
              As Featured In
            </p>
            <a
              href="https://www.bbc.com/news/articles/cvgewwvp00yo"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                <span className="font-display text-4xl lg:text-5xl font-bold text-charcoal/20 group-hover:text-charcoal/40 transition-colors">
                  BBC
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold group-hover:text-cobalt transition-colors">
                    &ldquo;Artist explores the toxic mining legacy of
                    Zambia&rsquo;s &lsquo;black mountains&rsquo;&rdquo;
                  </h3>
                  <p className="mt-2 text-warm-gray">
                    Penny Dale &middot; July 2025
                  </p>
                </div>
                <svg
                  className="w-6 h-6 text-warm-gray group-hover:text-cobalt transition-colors shrink-0"
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
        </div>
      </section>

      {/* Foundation & Intanda Cards */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimateOnScroll>
            <Link href="/foundation" className="group block relative overflow-hidden aspect-[16/10]">
              <Image
                src="/paintings/perforated-series-gallery.jpg"
                alt="Black Mountain Foundation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-xs tracking-widest uppercase text-gold mb-2">
                  Foundation
                </p>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-cream">
                  Black Mountain Foundation
                </h3>
                <p className="mt-2 text-cream/70 max-w-md text-sm">
                  Community empowerment and environmental advocacy in
                  Zambia&rsquo;s Copperbelt mining communities.
                </p>
              </div>
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <Link href="/intanda" className="group block relative overflow-hidden aspect-[16/10]">
              <Image
                src="/paintings/mother-and-child.jpg"
                alt="Intanda Creative"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-xs tracking-widest uppercase text-burnt-orange mb-2">
                  Social Enterprise
                </p>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-cream">
                  Intanda Creative
                </h3>
                <p className="mt-2 text-cream/70 max-w-md text-sm">
                  Driving economic opportunity through creativity, art, and
                  cultural enterprise in Zambian communities.
                </p>
              </div>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
