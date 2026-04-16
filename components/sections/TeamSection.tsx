import type { TeamMember } from "@/types/site-content";
import Image from "next/image";

type TeamSectionProps = {
  team: TeamMember[];
};

export function TeamSection({ team }: TeamSectionProps) {
  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Founding Team</h2>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
        A focused group of friends and builders covering product, engineering, and infrastructure.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {team.map((member) => (
          <article key={member.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            {member.avatar ? (
              <Image
                src={member.avatar}
                alt={member.name}
                width={72}
                height={72}
                className="mb-4 h-[72px] w-[72px] rounded-full border border-slate-200 object-cover dark:border-slate-700"
                unoptimized
              />
            ) : null}
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-blue-600 dark:text-cyan-300">{member.role}</p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{member.bio}</p>
            {member.location ? <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{member.location}</p> : null}
            {member.github ? (
              <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-cyan-300 dark:hover:text-cyan-200"
              >
                GitHub Profile
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
