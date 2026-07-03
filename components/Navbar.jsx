"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("nb-theme", next ? "dark" : "light");
    } catch (e) {}
  }

  return (
    <header className="bg-black   text-white sticky top-0 z-50 border-b border-line dark:border-line-dark bg-paper/90 dark:bg-paper-dark/90 backdrop-blur">
      <nav className=" mx-8 flex max-w-6xl items-center justify-between px-6 py-6 md:px-15">
        <a href="#top" className="flex items-center gap-2 font-display text-4xl tracking-tightest">
          <CompassMark className="h-10 w-10" />
          Northbound
        </a>

        <div className=" text-white hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm uppercase tracking-widest2  hover:text-gray-400 dark:text-steel-dark dark:hover:text-ink-dark"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className=" text-white rounded-full border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-widest2  hover:border-signal hover:text-signal dark:border-line-dark dark:text-steel-dark"
          >
            {isDark ? "Light" : "Dark"}
          </button>
          <a
            href="#contact"
            className="rounded-full bg-signal px-4 py-2 font-mono text-xs uppercase tracking-widest2 text-white transition-transform hover:-translate-y-0.5"
          >
            Start a project
          </a>
        </div>

        <button
          className="md:hidden  bg-white"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="block h-px w-6 bg-ink dark:bg-ink-dark" />
          <span className="mt-1.5 block h-px w-6 bg-ink dark:bg-ink-dark" />
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t text-white border-line px-6 py-6 md:hidden dark:border-line-dark">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs uppercase tracking-widest2 text-white dark:text-steel-dark"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="self-start rounded-full border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-widest2 text-steel dark:border-line-dark dark:text-steel-dark"
          >
            {isDark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      )}
    </header>
  );
}

export function CompassMark({ className = "" }) {
  return (
    <svg
      viewBox="0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 8L23.5 20L20 32L16.5 20L20 8Z" fill="currentColor" />
      <circle cx="20" cy="20" r="2" fill="var(--tw-color-paper, #ECEAE6)" />
    </svg>
  );
}
