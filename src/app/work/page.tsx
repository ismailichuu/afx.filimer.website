import BackButton from "@/components/BackButton";
import WorkSection from "@/components/sections/WorkSection";
import Reveal from "@/components/Reveal";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(244,240,232,0.95)_45%,_rgba(229,221,210,1)_100%)] text-[#1f1b16]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl tracking-[0.15em]">
            afx.filimer
          </span>
          <span className="rounded-full border border-[#d6c8b5] px-3 py-1 text-xs uppercase tracking-[0.35em] text-[#7d7467]">
            Work
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#5f564a] md:flex">
          <a className="transition hover:text-[#1f1b16]" href="/work">
            Work
          </a>
          <a className="transition hover:text-[#1f1b16]" href="/service">
            Services
          </a>
          <a className="transition hover:text-[#1f1b16]" href="/contact">
            Contact
          </a>
        </nav>
        <BackButton />
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24">
        <Reveal className="movie">
          <WorkSection />
        </Reveal>
      </main>
    </div>
  );
}
