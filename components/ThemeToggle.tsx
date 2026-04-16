"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const {theme, resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
      aria-label="Toggle color theme"
    >
     Theme
    </button>
  );
}
