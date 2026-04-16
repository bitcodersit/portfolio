import type { ServiceItem } from "@/types/site-content";

type ServicesSectionProps = {
  services: ServiceItem[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Services</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          End-to-end technology services designed to solve business problems and accelerate growth.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
