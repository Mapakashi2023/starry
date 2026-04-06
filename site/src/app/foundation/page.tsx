"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const programs = [
  {
    title: "Art Workshops",
    description:
      "Drawing, photography, and performance workshops with young people in Wusakile and across the Copperbelt, giving voice to community stories through creative expression.",
  },
  {
    title: "Environmental Awareness",
    description:
      "Raising awareness about the toxic legacy of mining waste in the Copperbelt through art, documentation, and public discourse.",
  },
  {
    title: "Youth Mentorship",
    description:
      "Mentoring emerging artists and providing pathways out of informal mining through creative skills development and cultural entrepreneurship.",
  },
  {
    title: "Community Storytelling",
    description:
      "Documenting and preserving the personal narratives of residents living in the shadow of the black mountains through participatory art projects.",
  },
];

export default function FoundationPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] lg:h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/paintings/perforated-series-gallery.jpg"
          alt="Black Mountain Foundation"
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
            <p className="text-gold text-sm tracking-widest uppercase mb-3">
              Foundation
            </p>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-cream">
              Black Mountain
              <br />
              Foundation
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="text-xs tracking-widest uppercase text-warm-gray mb-6">
              Our Mission
            </p>
            <h2 className="font-display text-2xl lg:text-4xl font-bold leading-relaxed">
              Empowering young people in Zambia&rsquo;s Copperbelt mining
              communities through art, education, and environmental advocacy.
            </h2>
            <p className="mt-8 text-charcoal/70 text-lg leading-relaxed max-w-3xl mx-auto">
              The Black Mountain Foundation works at the intersection of art and
              social change in the communities surrounding Zambia&rsquo;s
              notorious &ldquo;black mountains&rdquo; &mdash; massive heaps of
              toxic mining waste that have scarred the Copperbelt skyline for
              nearly a century.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <div>
              <p className="text-xs tracking-widest uppercase text-cream/40 mb-6">
                Our Story
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold">
                In the Shadow of the Mountain
              </h2>
              <div className="mt-8 space-y-5 text-cream/70 leading-relaxed">
                <p>
                  The &ldquo;black mountains&rdquo; of Zambia&rsquo;s Copperbelt
                  are towering dumpsites containing millions of tonnes of mining
                  waste, full of toxic heavy metals, accumulated since the early
                  1930s. They wreak havoc on people&rsquo;s health and the
                  environment.
                </p>
                <p>
                  In the neighbourhood of Wusakile in Kitwe, young people known
                  as &ldquo;jerabos&rdquo; dig deep tunnels into these mountains,
                  extracting fragments of copper ore to sell. It is dangerous,
                  often illegal, and sometimes fatal work &mdash; but for many,
                  it is the only way to make ends meet.
                </p>
                <p>
                  Stary Mwaba comes from a family of miners. When he returned to
                  Kitwe after years away, the poverty and environmental
                  devastation he witnessed compelled him to act &mdash; not just
                  through his art, but through direct community engagement.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/paintings/three-figures.jpg"
                alt="Community members"
                fill
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <p className="text-xs tracking-widest uppercase text-warm-gray mb-3">
              What We Do
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Programs &amp; Initiatives
            </h2>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, i) => (
              <AnimateOnScroll key={program.title} delay={i * 0.1}>
                <div className="p-8 border border-light-gray hover:border-cobalt/30 transition-colors">
                  <h3 className="font-display text-xl font-semibold">
                    {program.title}
                  </h3>
                  <p className="mt-4 text-charcoal/60 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Art Connection */}
      <section className="py-20 lg:py-28 bg-cream border-t border-light-gray px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="text-xs tracking-widest uppercase text-warm-gray mb-6">
              Art as Advocacy
            </p>
            <h2 className="font-display text-2xl lg:text-3xl font-bold leading-relaxed italic">
              &ldquo;The worst thing that happened is when the black mountain
              was super-profitable, most of these young people quit
              school.&rdquo;
            </h2>
            <p className="mt-8 text-charcoal/70 text-lg leading-relaxed">
              The foundation&rsquo;s community workshops directly produce the
              artwork &mdash; the portraits emerge from real encounters, the
              stories become paintings. Art and advocacy are inseparable in
              Mwaba&rsquo;s practice.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-cobalt text-cream text-center px-6">
        <AnimateOnScroll>
          <h2 className="font-display text-3xl lg:text-4xl font-bold">
            Get Involved
          </h2>
          <p className="mt-4 text-cream/70 max-w-xl mx-auto text-lg">
            Support the Black Mountain Foundation&rsquo;s work with communities
            in Zambia&rsquo;s Copperbelt.
          </p>
          <a
            href="mailto:starymwaba@gmail.com?subject=Black Mountain Foundation"
            className="inline-block mt-8 px-8 py-3 bg-cream text-cobalt text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Contact Us
          </a>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
