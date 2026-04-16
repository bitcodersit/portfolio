import type { ProjectItem } from "@/types/site-content";

type ProjectsSectionProps = {
  projects: ProjectItem[];
  showViewMore?: boolean;
};

export function ProjectsSection({ projects, showViewMore = false }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Projects</h2>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
        Case studies that highlight our product engineering and delivery quality.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="rounded-xl border border-slate-200 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h3>
            {project.owner ? <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">By {project.owner}</p> : null}
            <p className="mt-3 text-slate-600 dark:text-slate-300">{project.summary}</p>
            <p className="mt-4 text-sm font-semibold text-blue-600 dark:text-cyan-300">{project.result}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tool) => (
                <li key={tool} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {tool}
                </li>
              ))}
            </ul>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-cyan-300 dark:hover:text-cyan-200"
              >
                View on GitHub
              </a>
            ) : null}
          </article>
        ))}
      </div>
      {showViewMore ? (
        <div className="mt-10">
          <a
            href="/projects"
            className="inline-block rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 dark:bg-cyan-600 dark:hover:bg-cyan-500"
          >
            View More Projects
          </a>
        </div>
      ) : null}
    </section>
  );
}
