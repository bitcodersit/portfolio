"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedTheme = theme ?? "system";

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        aria-label="Change color theme"
      >
        Theme
      </button>

      {open ? (
        <div className="absolute right-0 mt-2 w-40 rounded-md border border-slate-200 bg-white p-1 shadow-lg dark:border-slate-700 dark:bg-slate-900">
          <button
            type="button"
            onClick={() => {
              setTheme("system");
              setOpen(false);
            }}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800 ${
              selectedTheme === "system" ? "bg-slate-100 dark:bg-slate-800" : ""
            }`}
          >
            <span>🖥️</span>
            <span>System</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setTheme("light");
              setOpen(false);
            }}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800 ${
              selectedTheme === "light" ? "bg-slate-100 dark:bg-slate-800" : ""
            }`}
          >
            <span>☀️</span>
            <span>Light</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setTheme("dark");
              setOpen(false);
            }}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800 ${
              selectedTheme === "dark" ? "bg-slate-100 dark:bg-slate-800" : ""
            }`}
          >
            <span>🌙</span>
            <span>Dark</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
