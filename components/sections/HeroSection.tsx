import type { HeroContent } from "@/types/site-content";

type HeroSectionProps = {
  hero: HeroContent;
  companyName: string;
};

export function HeroSection({ hero, companyName }: HeroSectionProps) {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white dark:from-slate-950 dark:to-blue-900">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">{companyName}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-blue-50">{hero.subheadline}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={hero.primaryCta.href}
            className="rounded-md bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-md border border-blue-100 px-6 py-3 font-semibold transition hover:border-white hover:text-cyan-100"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
