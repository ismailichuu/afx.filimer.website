import BackButton from "@/components/BackButton";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
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
            Gallery
          </a>
          <a className="transition hover:text-[#1f1b16]" href="/service">
            Services
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

      <footer className="border-t border-[#dbcbb7]">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-xs uppercase tracking-[0.3em] text-[#7d7467] md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <span>afx.filimer </span>
              <div className="flex items-center gap-4">
              <a
                className="text-[#7d7467] transition hover:text-[#1f1b16]"
                href="https://www.instagram.com/afx.filmer/?hl=en"
                aria-label="Instagram"
              >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm5-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
                </svg>
              </a>
              <a
                className="text-[#7d7467] transition hover:text-[#1f1b16]"
                href="https://www.youtube.com/@AfxFilmer"
                aria-label="YouTube"
              >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.6A3 3 0 0 0 2.4 7.2 31.2 31.2 0 0 0 1.8 12a31.2 31.2 0 0 0 .6 4.8 3 3 0 0 0 2.1 2.1c1.8.6 7.5.6 7.5.6s5.7 0 7.5-.6a3 3 0 0 0 2.1-2.1 31.2 31.2 0 0 0 .6-4.8 31.2 31.2 0 0 0-.6-4.8ZM10 15.5v-7l6 3.5Z" />
                  </svg>
                </a>
              </div>
            </div>
            <span>Dubai · India · Singapore</span>
            <span>© 2026 afx.filimer</span>
          </div>
        </footer>
    </div>
  );
}
