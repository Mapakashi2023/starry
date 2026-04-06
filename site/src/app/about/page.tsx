"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const exhibitions = [
  {
    title: "Black Mountain Exhibition II",
    venue: "Lusaka National Museum",
    year: "2025",
  },
  {
    title: "Solace of a Migrant",
    venue: "Gallery Momo, Johannesburg, South Africa",
    year: "2009",
  },
  {
    title: "Freedom in Transition",
    venue: "Lusaka National Museum",
    year: "2008",
  },
  {
    title: "Crossing Over",
    venue: "Caribbean Contemporary Arts, Port of Spain, Trinidad and Tobago",
    year: "2005",
  },
];

const awards = [
  "Commonwealth Arts and Crafts Award",
  "Zambia National Arts Council Award",
  "KfW Stiftung Grant, Künstlerhaus Bethanien, Berlin (2014–2015)",
];

const residencies = [
  "Robert Wilson's Watermill Residence, New York",
  "CCA Lagos (Bisi Silva's Centre for Contemporary Art)",
  "FCa, Ghana",
  "Caribbean Contemporary Arts, Trinidad and Tobago",
  "Braziers International Workshop, London",
  "Asiko Art School",
];

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] lg:h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/paintings/studio-panorama.jpg"
          alt="Stary Mwaba studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8 pb-12 lg:pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl lg:text-6xl font-bold text-cream"
          >
            About the Artist
          </motion.h1>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <AnimateOnScroll>
              <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
                Stary Mwaba
              </h2>
              <p className="mt-2 text-warm-gray text-lg">
                b. Copperbelt, Zambia
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="mt-10 space-y-6 text-charcoal/80 text-lg leading-relaxed">
                <p>
                  Stary Mwaba obtained a Master of Fine Art Degree at Rhodes
                  University. He works from two studios: BlackMountain Studios
                  (Blackmass) in Wusakile, Kitwe on the Copperbelt, and Studio
                  Ibexhill in Lusaka, Zambia. Mwaba began his artistic journey
                  through the Rockston Studios (1985) apprentice programme under
                  Lutanda Mwamba.
                </p>
                <p>
                  Mwaba&rsquo;s work, research, and current working process
                  highlight specific subjects using personal &ldquo;little&rdquo;
                  narratives that engage with archival materials as components of
                  his work. These function as the starting point for works that
                  engage with the current socio-political circumstances in
                  Zambia.
                </p>
                <p>
                  Drawing on Fran&ccedil;ois Lyotard&rsquo;s concept of
                  &ldquo;petits r&eacute;cits&rdquo; &mdash; personal stories
                  that subvert dominant master-narratives &mdash; Mwaba refers
                  to the dichotomized narratives of the media as metanarratives
                  which pay little attention to the people on the ground.
                  He proposes the approach of &ldquo;little narratives&rdquo; to
                  foreground the lived-experiences of Zambians who have
                  individual encounters in various social spaces.
                </p>
                <p>
                  By employing local narratives through socially engaged
                  installations, paintings, photographs, film, and drawings,
                  Mwaba intervenes in a broader discourse often driven by
                  economics and politics &mdash; questioning, refunctioning, and
                  contesting prevailing norms and ideologies, creating new
                  meanings, experiences, and relationships.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="lg:col-span-2">
            <AnimateOnScroll delay={0.2}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/paintings/girl-with-comb.jpg"
                  alt="Stary Mwaba - Her Crown"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-20 lg:py-28 bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-xs tracking-widest uppercase text-cream/40 mb-6">
              Artist Statement
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold italic leading-relaxed">
              Knitting Narratives
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="mt-10 space-y-6 text-cream/75 text-lg leading-relaxed">
              <p>
                I use newspaper print as a representation of the media narrative
                for both the current and historical. I reconstruct and rearrange
                stories, insert and force small narratives (&ldquo;petits
                r&eacute;cits&rdquo;) into the spaces and gaps that are created
                by burning parts of the newsprint.
              </p>
              <p>
                Using a soldering gun, I burn out words from various stories,
                leaving words randomly that can be rearranged to create a new
                narrative. The idea of &ldquo;forcing the small narrative&rdquo;
                implies technically creating openings or spaces. I undertake the
                painstaking and laborious exercise of burning words out of
                newspaper articles, some of which I try to read in order to
                understand the stories during the burning process.
              </p>
              <p>
                The process of creating layers produces a form of palimpsest
                &mdash; a multilayered record where the original text has been
                partially erased and overwritten by another. I am creating layers
                that retell the stories and emphasize the importance of our
                little narrative.
              </p>
              <p className="text-cream font-display text-xl italic">
                &ldquo;I take these grand narratives, and I create holes so
                that you can&rsquo;t make sense of the stories any more. I then
                impose images of people I know on to them &mdash; to show that
                little stories, the little narratives of ordinary people also
                count. They have stories that are important and are part of the
                bigger story.&rdquo;
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Exhibitions, Awards, Residencies */}
      <section className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Exhibitions */}
          <AnimateOnScroll>
            <div>
              <h3 className="text-xs tracking-widest uppercase text-warm-gray mb-8">
                Solo Exhibitions
              </h3>
              <div className="space-y-6">
                {exhibitions.map((ex) => (
                  <div key={ex.title} className="border-l-2 border-cobalt/20 pl-5">
                    <p className="font-display text-lg font-semibold">
                      {ex.title}
                    </p>
                    <p className="text-warm-gray text-sm mt-1">{ex.venue}</p>
                    <p className="text-cobalt text-sm font-medium mt-1">
                      {ex.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Awards */}
          <AnimateOnScroll delay={0.1}>
            <div>
              <h3 className="text-xs tracking-widest uppercase text-warm-gray mb-8">
                Awards &amp; Grants
              </h3>
              <ul className="space-y-4">
                {awards.map((award) => (
                  <li
                    key={award}
                    className="text-charcoal/80 pl-5 border-l-2 border-gold/30"
                  >
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Residencies */}
          <AnimateOnScroll delay={0.2}>
            <div>
              <h3 className="text-xs tracking-widest uppercase text-warm-gray mb-8">
                Residencies &amp; Workshops
              </h3>
              <ul className="space-y-4">
                {residencies.map((res) => (
                  <li
                    key={res}
                    className="text-charcoal/80 pl-5 border-l-2 border-burnt-orange/30"
                  >
                    {res}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Studio Images */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <p className="text-xs tracking-widest uppercase text-warm-gray mb-8">
              The Studios
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimateOnScroll>
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/paintings/perforated-series-gallery-3.jpg"
                  alt="BlackMountain Art Studio, Kitwe"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/70 to-transparent">
                  <p className="text-cream text-sm font-display">
                    BlackMountain Art Studio, Wusakile, Kitwe
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/paintings/boy-drinking.jpg"
                  alt="Studio Ibexhill, Lusaka"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/70 to-transparent">
                  <p className="text-cream text-sm font-display">
                    Studio Ibexhill, Lusaka
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
