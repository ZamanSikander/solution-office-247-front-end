import React from "react";

interface SubService {
    title: string;
    description: string;
    icon: React.ElementType; // Icon component (e.g., from lucide-react or heroicons)
    gradientFrom: string; // Tailwind class e.g. "from-blue-200"
    gradientTo: string;   // Tailwind class e.g. "to-blue-400"
    bgColor: string;      // Tailwind class e.g. "bg-blue-100"
    color: string;        // Tailwind class e.g. "text-blue-600"
    link: string;
  }

interface ServicePageProps {
  title: string;
  intro: string;
  subServices: SubService[];
  benefits: string[];
  ctaText: string;
  ctaLink: string;
}

const MainServicesLayout: React.FC<ServicePageProps> = ({
  title,
  intro,
  subServices,
  benefits,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="max-w-5xl text-center container mx-auto px-6 py-12 min-h-screen flex flex-col items-center justify-center">
  <h1 className="text-4xl font-bold text-gradient-premium mb-4">
    {title}
  </h1>
  <p className="text-lg text-[var(--so-muted)]">{intro}</p>
</section>


       {/* Sub-services as Feature Cards */}
       <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-10 text-[var(--so-accent)] text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {subServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="relative service-card-premium border-0 text-center scroll-reveal animate overflow-hidden rounded-2xl shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo}`}
                ></div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${service.bgColor} mx-auto mb-6 shadow-medium`}
                  >
                    <IconComponent className={`h-10 w-10 ${service.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-neutral-800">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 leading-relaxed text-base mb-4">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <a
                    href={service.link}
                    className="inline-block text-[var(--so-primary)] font-medium hover:underline"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-[var(--so-accent)]">
          Why Choose Us?
        </h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="bg-[var(--so-surface)] p-4 rounded-xl shadow-sm"
            >
              ✅ {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-[var(--so-surface)]">
        <a
          href={ctaLink}
          className="px-6 py-3 rounded-xl font-semibold shadow hover:bg-opacity-90 transition"
        >
          {ctaText}
        </a>
      </section>
    </div>
  );
};

export default MainServicesLayout;
