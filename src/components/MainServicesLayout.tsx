import React from "react";

/**
 * STRUCTURE-ONLY LAYOUT (no hardcoded copy)
 * All content comes in via props from each service page (e.g., Ecommerce, Marketing, etc.).
 *
 * Sections:
 *  - Hero
 *  - Sub-Services grid
 *  - Why Choose Us
 *  - Call To Action
 */

// Reusable types
export interface SubServiceItem {
  title: string;
  description: string;
  icon: React.ElementType; // e.g., lucide-react icon component
  gradientFrom: string; // Tailwind class e.g. "from-blue-200"
  gradientTo: string;   // Tailwind class e.g. "to-blue-400"
  bgColor: string;      // Tailwind class e.g. "bg-blue-100"
  color: string;        // Tailwind class e.g. "text-blue-600"
  link: string;         // URL or route
}

export interface HeroProps {
  eyebrow?: string;
  title: string;
  intro: string;
  imageSrc?: string;
  imageAlt?: string;
  actions?: React.ReactNode; // buttons/links rendered under intro
}

export interface SubServicesProps {
  heading: string;           // e.g., "What We Offer"
  intro?: string;            // optional short paragraph under heading
  items: SubServiceItem[];   // the grid cards
  learnMoreLabel?: string;   // link label, defaults applied in page if you want
}

export interface WhyChooseUsProps {
  eyebrow?: string;          // small pill text above heading
  eyebrowIcon?: React.ElementType; // optional icon to show next to eyebrow
  heading: string;           // main heading first line
  highlight?: string;        // highlighted second line displayed as gradient text
  description?: string;      // paragraph under the headings
  bullets: string[];         // benefits list
}

export interface CtaProps {
  heading?: string;          // optional heading over the buttons
  subheading?: string;       // optional subheading
  primaryLabel: string;      // primary button label
  primaryHref: string;       // primary button link
  secondaryLabel?: string;   // optional secondary button label
  secondaryHref?: string;    // optional secondary button link
  note?: string;             // optional small note below buttons
}

export interface MainServicesLayoutProps {
  hero: HeroProps;
  subServices?: SubServicesProps;
  whyChooseUs?: WhyChooseUsProps;
  cta?: CtaProps;
  className?: string; // wrapper override if needed
}

const MainServicesLayout: React.FC<MainServicesLayoutProps> = ({
  hero,
  subServices,
  whyChooseUs,
  cta,
  className,
}) => {
  return (
    <div className={className ?? ""}>
      {/* ===================== Hero ===================== */}
      <section className="container mx-auto max-w-5xl px-6 py-12 min-h-screen flex flex-col items-center justify-center text-center">
        {hero.eyebrow && (
          <div className="mb-4 inline-flex items-center rounded-full border px-4 py-1 text-xs font-semibold tracking-wide text-neutral-600">
            {hero.eyebrow}
          </div>
        )}
        <h1 className="text-2xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight text-gradient-premium">
          {hero.title}
        </h1>
        <p className="text-sm mt-7 lg:text-xl text-gray-900/70 leading-relaxed max-w-3xl mx-auto">
          {hero.intro}
        </p>
        {hero.actions && <div className="mt-8 flex flex-wrap justify-center gap-3">{hero.actions}</div>}
        {hero.imageSrc && (
          <img
            src={hero.imageSrc}
            alt={hero.imageAlt ?? hero.title}
            className="mt-10 max-h-80 w-auto rounded-2xl shadow"
            loading="lazy"
          />
        )}
      </section>

      {/* ===================== Sub Services ===================== */}
      {subServices && (
        <section className="container mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 text-center">
            {subServices.heading}
          </h2>
          {subServices.intro && (
            <p className="text-md lg:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed text-center">
              {subServices.intro}
            </p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 mt-9">
            {subServices.items.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="relative service-card-premium border-0 text-center overflow-hidden rounded-2xl shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient backdrop */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo}`} />

                  <div className="relative p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${service.bgColor} mx-auto mb-6 shadow-medium`}>
                      <IconComponent className={`h-10 w-10 ${service.color}`} />
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-neutral-800">{service.title}</h3>
                    <p className="text-neutral-600 leading-relaxed text-base mb-4">{service.description}</p>

                    <a href={service.link} className="inline-block text-[var(--so-primary)] font-medium hover:underline">
                      {subServices.learnMoreLabel ?? "Learn More →"}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ===================== Why Choose Us ===================== */}
      {whyChooseUs && (
        <section className="container mx-auto max-w-6xl px-6 py-12">
          <div className="text-center mb-20">
            {(whyChooseUs.eyebrow || whyChooseUs.eyebrowIcon) && (
              <div className="inline-flex items-center px-6 py-3 glass-card text-primary rounded-full text-sm font-semibold mb-6">
                {whyChooseUs.eyebrowIcon && (
                  <whyChooseUs.eyebrowIcon className="h-4 w-4 mr-2" />
                )}
                {whyChooseUs.eyebrow}
              </div>
            )}

            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-display font-bold mb-8 text-balance">
              {whyChooseUs.heading}
              {whyChooseUs.highlight && (
                <span className="block text-gradient-premium">{whyChooseUs.highlight}</span>
              )}
            </h2>

            {whyChooseUs.description && (
              <p className="text-md lg:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                {whyChooseUs.description}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.bullets.map((benefit, idx) => (
              <div
                key={idx}
                className="relative service-card-premium border-0 text-center overflow-hidden rounded-2xl shadow"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative p-8">
                  <p className="text-neutral-700 leading-relaxed text-base">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===================== CTA ===================== */}
      {cta && (
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {cta.heading && (
                <h2 className="text-2xl lg:text-4xl font-display font-bold text-white mb-6">
                  {cta.heading}
                </h2>
              )}
              {cta.subheading && (
                <p className="text-md md:text-xl text-white/90 mb-8">
                  {cta.subheading}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {cta.primaryHref && cta.primaryLabel && (
                  <a
                    href={cta.primaryHref}
                    className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-2xl text-lg"
                  >
                    {cta.primaryLabel}
                  </a>
                )}
                {cta.secondaryHref && cta.secondaryLabel && (
                  <a
                    href={cta.secondaryHref}
                    className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-2xl text-lg"
                  >
                    {cta.secondaryLabel}
                  </a>
                )}
              </div>
              {cta.note && <p className="mt-4 text-xs text-white/80">{cta.note}</p>}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MainServicesLayout;
