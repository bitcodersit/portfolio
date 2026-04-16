import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { getAllFounderProjects } from "@/lib/github";
import { getSiteContent } from "@/lib/content";
import Link from "next/link";

export default async function ProjectsPage() {
  const content = getSiteContent();
  const allProjects = await getAllFounderProjects();
  const projects = allProjects.length > 0 ? allProjects : content.projects;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">All Projects</h1>
          <Link
            href="/"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Back to Home
          </Link>
        </div>
      </header>
      <ProjectsSection projects={projects} />
    </div>
  );
}
