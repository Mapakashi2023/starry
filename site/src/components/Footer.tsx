import Link from "next/link";

const footerLinks = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
  { href: "/foundation", label: "Foundation" },
  { href: "/intanda", label: "Intanda Creative" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="font-display text-3xl font-bold text-cream">
              SM
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Stary Mwaba is a Zambian visual artist foregrounding the little
              narratives of ordinary people through paintings, installations, and
              mixed-media works.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream/40 mb-4">
              Studios
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-cream/90">BlackMountain Art Studio</p>
                <p>Wusakile, Kitwe, Copperbelt</p>
              </div>
              <div>
                <p className="text-cream/90">Studio Ibexhill</p>
                <p>Lusaka, Zambia</p>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:starymwaba@gmail.com"
                  className="hover:text-cream transition-colors"
                >
                  starymwaba@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Stary Mwaba. All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            All artwork images &copy; Stary Mwaba
          </p>
        </div>
      </div>
    </footer>
  );
}
