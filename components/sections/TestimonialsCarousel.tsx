"use client";

import { useEffect, useMemo, useState } from "react";
import type { TestimonialItem } from "@/types/site-content";

type TestimonialsCarouselProps = {
  testimonials: TestimonialItem[];
};

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const items = useMemo(() => testimonials.filter((t) => t.feedback.trim().length > 0), [testimonials]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [items.length]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 overflow-hidden rounded-xl bg-slate-800 p-6 ring-1 ring-slate-700 dark:bg-slate-900 dark:ring-slate-800">
      <figure key={`${items[index].client}-${index}`} className="animate-[fadeSlide_350ms_ease-out]">
        <blockquote className="text-lg text-slate-200">&ldquo;{items[index].feedback}&rdquo;</blockquote>
        <figcaption className="mt-4 text-sm font-semibold text-cyan-300">{items[index].client}</figcaption>
      </figure>
      <div className="mt-5 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`h-2 w-8 rounded-full transition ${i === index ? "bg-cyan-300" : "bg-slate-600 hover:bg-slate-500"}`}
          />
        ))}
      </div>
    </div>
  );
}
