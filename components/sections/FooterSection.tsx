import type { FooterContent } from "@/types/site-content";

type FooterSectionProps = {
  footer: FooterContent;
};

export function FooterSection({ footer }: FooterSectionProps) {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-600 dark:text-slate-300 md:flex-row">
        <p>{footer.copyright}</p>
        <ul className="flex gap-4">
          {footer.links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-cyan-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
