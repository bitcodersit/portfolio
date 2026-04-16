import type { ContactContent } from "@/types/site-content";

type ContactSectionProps = {
  contact: ContactContent;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{contact.title}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Tell us about your goals. We will get back with a practical roadmap and estimate.
            </p>
            <div className="mt-6 space-y-2 text-slate-700 dark:text-slate-200">
              <p>
                <strong>Email:</strong> {contact.email}
              </p>
              <p>
                <strong>Phone:</strong> {contact.phone}
              </p>
              <p>
                <strong>Address:</strong> {contact.address}
              </p>
            </div>
          </div>
          <form className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Name
                <input className="rounded-md border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100" name="name" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Email
                <input className="rounded-md border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100" name="email" type="email" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Company
                <input className="rounded-md border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100" name="company" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Message
                <textarea className="min-h-28 rounded-md border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100" name="message" required />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-md bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500 dark:bg-cyan-600 dark:hover:bg-cyan-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
