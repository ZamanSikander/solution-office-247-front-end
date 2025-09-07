import React from "react";


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

export interface WhatWeDoProps {
  eyebrow?: string;          // small pill text above heading
  heading: string;           // main heading
  description?: string;      // paragraph under the heading
  items: {
    title: string;
    description: string;
    icon: React.ElementType;
    gradientFrom: string;
    gradientTo: string;
    bgColor: string;
    color: string;
  }[];
}

export interface HowItWorksProps {
  eyebrow?: string;          // small pill text above heading
  heading: string;           // main heading
  description?: string;      // paragraph under the heading
  steps: {
    number: string;
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
}

export interface BenefitsProps {
  eyebrow?: string;          // small pill text above heading
  heading: string;           // main heading
  description?: string;      // paragraph under the heading
  benefits: {
    title: string;
    description: string;
    icon: React.ElementType;
    gradientFrom: string;
    gradientTo: string;
    bgColor: string;
    color: string;
  }[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface TestimonialsProps {
  eyebrow?: string;          // small pill text above heading
  heading: string;           // main heading
  description?: string;      // paragraph under the heading
  testimonials: TestimonialItem[];
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
  whatWeDo?: WhatWeDoProps;
  howItWorks?: HowItWorksProps;
  benefits?: BenefitsProps;
  testimonials?: TestimonialsProps;
  whyChooseUs?: WhyChooseUsProps;
  cta?: CtaProps;
  className?: string; // wrapper override if needed
}

const MainServicesLayout: React.FC<MainServicesLayoutProps> = ({
  hero,
  subServices,
  whatWeDo,
  howItWorks,
  benefits,
  testimonials,
  cta,
  className,
}) => {
  return (
    <div className={className ?? ""}>
      {/* ===================== Hero ===================== */}
      <section className="container mx-auto max-w-5xl px-6 py-12 min-h-screen flex flex-col items-center justify-center text-center mt-9">
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
        {hero.actions && <div className="mt-8 flex flex-wrap justify-center gap-2">{hero.actions}</div>}
      </section>

      {/* ===================== Sub Services ===================== */}
      {subServices && (
        <section id="what-we-do" className="container mx-auto max-w-6xl px-6 py-12">
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

      {/* ===================== What We Do ===================== */}
      {whatWeDo && (
        <section className="container mx-auto max-w-6xl px-6 py-12">
          <div className="text-center mb-20">
            {whatWeDo.eyebrow && (
              <div className="inline-flex items-center px-6 py-3 glass-card text-primary rounded-full text-sm font-semibold mb-6">
                {whatWeDo.eyebrow}
              </div>
            )}
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-display font-bold mb-8 text-balance">
              {whatWeDo.heading}
            </h2>
            {whatWeDo.description && (
              <p className="text-md lg:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                {whatWeDo.description}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDo.items.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="relative service-card-premium border-0 text-center overflow-hidden rounded-2xl shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo}`} />
                  <div className="relative p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${item.bgColor} mx-auto mb-6 shadow-medium`}>
                      <IconComponent className={`h-10 w-10 ${item.color}`} />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-neutral-800">{item.title}</h3>
                    <p className="text-neutral-600 leading-relaxed text-base">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ===================== How It Works ===================== */}
      {howItWorks && (
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-20">
              {howItWorks.eyebrow && (
                <div className="inline-flex items-center px-6 py-3 glass-card text-primary rounded-full text-sm font-semibold mb-6">
                  {howItWorks.eyebrow}
                </div>
              )}
              <h2 className="text-2xl sm:text-5xl lg:text-6xl font-display font-bold mb-8 text-balance">
                {howItWorks.heading}
              </h2>
              {howItWorks.description && (
                <p className="text-md lg:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                  {howItWorks.description}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary text-white text-2xl font-bold mb-4 shadow-medium">
                        {step.number}
                      </div>
                      <div className="absolute -top-2 -right-2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-medium">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-neutral-800">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed text-base">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===================== Benefits ===================== */}
      {benefits && (
        <section className="container mx-auto max-w-6xl px-6 py-12">
          <div className="text-center mb-20">
            {benefits.eyebrow && (
              <div className="inline-flex items-center px-6 py-3 glass-card text-primary rounded-full text-sm font-semibold mb-6">
                {benefits.eyebrow}
              </div>
            )}
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-display font-bold mb-8 text-balance">
              {benefits.heading}
            </h2>
            {benefits.description && (
              <p className="text-md lg:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                {benefits.description}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="relative service-card-premium border-0 text-center overflow-hidden rounded-2xl shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradientFrom} ${benefit.gradientTo}`} />
                  <div className="relative p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${benefit.bgColor} mx-auto mb-6 shadow-medium`}>
                      <IconComponent className={`h-10 w-10 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-neutral-800">{benefit.title}</h3>
                    <p className="text-neutral-600 leading-relaxed text-base">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ===================== Testimonials ===================== */}
      {testimonials && (
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-20">
              {testimonials.eyebrow && (
                <div className="inline-flex items-center px-6 py-3 glass-card text-primary rounded-full text-sm font-semibold mb-6">
                  {testimonials.eyebrow}
                </div>
              )}
              <h2 className="text-2xl sm:text-5xl lg:text-6xl font-display font-bold mb-8 text-balance">
                {testimonials.heading}
              </h2>
              {testimonials.description && (
                <p className="text-md lg:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                  {testimonials.description}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative service-card-premium border-0 overflow-hidden rounded-2xl shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative p-8">
                    {/* Rating Stars */}
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-neutral-700 leading-relaxed text-base mb-6 italic">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                        <p className="text-sm text-neutral-600">{testimonial.role}</p>
                        <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                    className="bg-white text-primary hover:bg-white/90 font-semibold px-6 py-4 rounded-2xl text-md"
                  >
                    {cta.primaryLabel}
                  </a>
                )}
                {cta.secondaryHref && cta.secondaryLabel && (
                  <a
                    href={cta.secondaryHref}
                    className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-2xl text-md"
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
