import { CompassMark } from "./Navbar";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 dark:border-line-dark md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-steel dark:text-steel-dark md:flex-row">
        <div className="flex items-center gap-2 font-display text-base text-ink dark:text-ink-dark">
          <CompassMark className="h-5 w-5" />
          Northbound Studio
        </div>
        <p className="font-mono text-xs uppercase tracking-widest2">
          &copy; {new Date().getFullYear()} — Design &amp; digital craft
        </p>
      </div>
    </footer>
  );
}
