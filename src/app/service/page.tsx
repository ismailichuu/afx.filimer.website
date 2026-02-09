import BackButton from "@/components/BackButton";
import ServiceSection from "@/components/sections/ServiceSection";
import Reveal from "@/components/Reveal";

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(244,240,232,0.95)_45%,_rgba(229,221,210,1)_100%)] text-[#1f1b16]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <img
              src="/logo.png"
              alt="afx.filimer logo"
              className="h-10 w-auto"
            />
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
          <ServiceSection />
        </Reveal>
      </main>
    </div>
  );
}
