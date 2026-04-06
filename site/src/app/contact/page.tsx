"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-widest uppercase text-warm-gray mb-3">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl lg:text-6xl font-bold">
            Contact
          </h1>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimateOnScroll>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm tracking-wider uppercase text-warm-gray mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-0 py-3 bg-transparent border-b border-light-gray focus:border-cobalt outline-none transition-colors text-charcoal"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm tracking-wider uppercase text-warm-gray mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-0 py-3 bg-transparent border-b border-light-gray focus:border-cobalt outline-none transition-colors text-charcoal"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm tracking-wider uppercase text-warm-gray mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-0 py-3 bg-transparent border-b border-light-gray focus:border-cobalt outline-none transition-colors text-charcoal"
                >
                  <option value="">Select a subject</option>
                  <option value="artwork">Artwork Inquiry</option>
                  <option value="exhibition">Exhibition Opportunity</option>
                  <option value="foundation">Black Mountain Foundation</option>
                  <option value="intanda">Intanda Creative</option>
                  <option value="press">Press / Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm tracking-wider uppercase text-warm-gray mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-0 py-3 bg-transparent border-b border-light-gray focus:border-cobalt outline-none transition-colors text-charcoal resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-8 py-3 bg-charcoal text-cream text-sm tracking-widest uppercase hover:bg-cobalt transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </AnimateOnScroll>

          {/* Contact Info */}
          <AnimateOnScroll delay={0.2}>
            <div className="space-y-12">
              <div>
                <h3 className="text-xs tracking-widest uppercase text-warm-gray mb-4">
                  Email
                </h3>
                <a
                  href="mailto:starymwaba@gmail.com"
                  className="text-lg hover:text-cobalt transition-colors"
                >
                  starymwaba@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xs tracking-widest uppercase text-warm-gray mb-4">
                  Phone
                </h3>
                <a
                  href="tel:+260962590021"
                  className="text-lg hover:text-cobalt transition-colors"
                >
                  +260 962 590 021
                </a>
              </div>

              <div>
                <h3 className="text-xs tracking-widest uppercase text-warm-gray mb-6">
                  Studios
                </h3>
                <div className="space-y-6">
                  <div className="pl-5 border-l-2 border-cobalt/20">
                    <p className="font-display text-lg font-semibold">
                      BlackMountain Art Studio
                    </p>
                    <p className="text-warm-gray mt-1">
                      Wusakile, Kitwe
                      <br />
                      Copperbelt, Zambia
                    </p>
                  </div>
                  <div className="pl-5 border-l-2 border-burnt-orange/20">
                    <p className="font-display text-lg font-semibold">
                      Studio Ibexhill
                    </p>
                    <p className="text-warm-gray mt-1">
                      Lusaka, Zambia
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs tracking-widest uppercase text-warm-gray mb-4">
                  Representation
                </h3>
                <p className="text-charcoal/70">
                  For exhibition inquiries, artwork sales, and commissions,
                  please contact the artist directly.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
