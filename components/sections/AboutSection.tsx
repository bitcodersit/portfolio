import type { AboutContent, CompanyContent } from "@/types/site-content";

type AboutSectionProps = {
  company: CompanyContent;
  about: AboutContent;
};

export function AboutSection({ company, about }: AboutSectionProps) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{about.title}</h2>
      <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">{company.description}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Mission</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{about.mission}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Vision</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{about.vision}</p>
        </article>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {company.stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
