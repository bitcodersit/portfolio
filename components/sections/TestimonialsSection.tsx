import type { TestimonialItem } from "@/types/site-content";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";

type TestimonialsSectionProps = {
  testimonials: TestimonialItem[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="bg-slate-900 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-white">Testimonials</h2>
        <p className="mt-3 max-w-2xl text-slate-300">What our clients say about partnering with us.</p>
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
