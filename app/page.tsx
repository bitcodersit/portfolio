import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { getSiteContent } from "@/lib/content";
import { getAllFounderProjects } from "@/lib/github";
import Image from "next/image";

export default async function Home() {
  const content = getSiteContent();
  const allProjects = await getAllFounderProjects();
  const featuredProjects = allProjects.slice(0, 6);

  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-white">
            <Image src="/logo.webp" alt={`${content.company.name} logo`} width={36} height={36} className="rounded-md" />
            <span>{content.company.name}</span>
          </a>
          <nav aria-label="Main navigation" className="flex items-center gap-4">
            <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex">
              <li>
                <a href="#about" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-blue-500">
                  All Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main>
        <HeroSection hero={content.hero} companyName={content.company.name} />
        <AboutSection company={content.company} about={content.about} />
        <ServicesSection services={content.services} />
        <ProjectsSection projects={featuredProjects.length > 0 ? featuredProjects : content.projects} showViewMore />
        <TestimonialsSection testimonials={content.testimonials} />
        <TeamSection team={content.team} />
        <ContactSection contact={content.contact} />
      </main>
      <FooterSection footer={content.footer} />
    </div>
  );
}
