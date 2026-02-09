import BackButton from "@/components/BackButton";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(244,240,232,0.95)_45%,_rgba(229,221,210,1)_100%)] text-[#1f1b16]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl tracking-[0.15em]">
            afx.filimer
          </span>
          <span className="rounded-full border border-[#d6c8b5] px-3 py-1 text-xs uppercase tracking-[0.35em] text-[#7d7467]">
            Contact
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

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24">
        <Reveal className="movie">
          <section className="grid items-center gap-8 rounded-[36px] border border-[#dbcbb7] bg-[#efe7dc] p-10 shadow-[0_25px_70px_rgba(31,27,22,0.1)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7d7467]">
              Contact
            </p>
            <h1 className="font-display text-4xl">
              Let us build your next visual story.
            </h1>
            <p className="text-sm text-[#5f564a]">
              Based in Europe, available worldwide. Share your brief and
              timeline, and we will respond within two business days.
            </p>
            <div className="pt-4 text-sm text-[#5f564a]">
              <p>studio@afx.filimer.com</p>
              <p>+351 21 555 0412</p>
              <p>Lisbon · Berlin · Tokyo</p>
            </div>
          </div>
          <form className="flex flex-col gap-4 rounded-[28px] border border-[#dbcbb7] bg-[#f7f2ea] p-6">
            <input
              className="w-full rounded-2xl border border-[#d6c8b5] bg-white/80 px-4 py-3 text-sm text-[#1f1b16] focus:outline-none"
              placeholder="Name"
              type="text"
            />
            <input
              className="w-full rounded-2xl border border-[#d6c8b5] bg-white/80 px-4 py-3 text-sm text-[#1f1b16] focus:outline-none"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="min-h-[140px] w-full rounded-2xl border border-[#d6c8b5] bg-white/80 px-4 py-3 text-sm text-[#1f1b16] focus:outline-none"
              placeholder="Project details"
            />
            <button
              className="rounded-full bg-[#1f1b16] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#f4f0e8] transition hover:bg-[#3a332d]"
              type="button"
            >
              Send inquiry
            </button>
          </form>
          </section>
        </Reveal>
      </main>
    </div>
  );
}
