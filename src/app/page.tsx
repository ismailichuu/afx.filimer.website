import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(244,240,232,0.95)_45%,_rgba(229,221,210,1)_100%)] text-[#1f1b16]">
      <div className="pointer-events-none absolute left-[-10%] top-[-5%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,_rgba(184,111,58,0.35),_rgba(184,111,58,0)_70%)] blur-2xl" />
      <div className="pointer-events-none absolute right-[-6%] top-[12%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,_rgba(76,93,108,0.35),_rgba(76,93,108,0)_70%)] blur-2xl" />
      <div className="pointer-events-none absolute bottom-[-6%] left-[25%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,_rgba(196,122,64,0.3),_rgba(196,122,64,0)_70%)] blur-2xl" />

      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-10">
          <div className="flex items-center gap-3">
            <img
              src="/AFX%20LOGO.PNG"
              alt="afx.filimer logo"
              className="h-10 w-auto"
            />

          </div>
          <nav className="hidden items-center gap-10 text-base font-medium text-[#f0e7db] md:flex">
            <a className="transition hover:text-white" href="/work">
              Work
            </a>
            <a className="transition hover:text-white" href="/service">
              Services
            </a>
            <a className="transition hover:text-white" href="/contact">
              Contact
            </a>
          </nav>
         
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24">
        <section className="space-y-10 pt-0">
          <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
            <div className="noise relative h-screen overflow-hidden border-y border-[#dbcbb7] shadow-[0_35px_95px_rgba(31,27,22,0.2)]">
            <img
              alt="afx.filimer hero banner"
              src="https://res.cloudinary.com/dei9lxras/image/upload/v1770667938/DSC_7557_ootvcf.webp"
              className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b16]/80 via-[#1f1b16]/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              <div className="flex flex-wrap items-end gap-10">
                <div className="text-center md:text-left" />
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/60 text-white/80 float-slow"
            >
              ↓
            </div>
            </div>
          </div>

          <Reveal className="movie">
            <div className="flex flex-wrap items-center justify-between gap-6 rounded-full border border-[#dbcbb7] bg-[#f7f2ea] px-6 py-4 text-xs uppercase tracking-[0.4em] text-[#7d7467] shadow-[0_20px_60px_rgba(31,27,22,0.08)]">
              <span>Lisbon</span>
              <span>Berlin</span>
              <span>Tokyo</span>
              <span>Marrakesh</span>
            </div>
          </Reveal>
        </section>

        <Reveal className="movie">
          <section
            id="explore"
            className="grid gap-8 rounded-[32px] border border-[#dbcbb7] bg-[#f7f2ea] p-8 shadow-[0_20px_60px_rgba(31,27,22,0.08)] lg:grid-cols-[1fr_1fr]"
          >
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7d7467]">
                Explore
              </p>
              <h2 className="font-display text-4xl">
                Visit the dedicated work, service, and contact routes.
              </h2>
              <p className="text-sm text-[#5f564a]">
                Each section now lives on its own page with a focused layout and
                a back button to return home.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                className="rounded-full bg-[#1f1b16] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#f4f0e8] transition hover:bg-[#3a332d]"
                href="/work"
              >
                Go to Work
              </a>
              <a
                className="rounded-full border border-[#1f1b16] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#1f1b16] transition hover:bg-[#1f1b16] hover:text-[#f4f0e8]"
                href="/service"
              >
                Go to Service
              </a>
              <a
                className="rounded-full border border-[#1f1b16] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#1f1b16] transition hover:bg-[#1f1b16] hover:text-[#f4f0e8]"
                href="/contact"
              >
                Go to Contact
              </a>
            </div>
          </section>
        </Reveal>

        <Reveal className="movie">
          <section id="process" className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7d7467]">
                Process
              </p>
              <h2 className="font-display text-4xl">
                A guided path from idea to polished delivery.
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#5f564a]">
              Transparency and pacing are built into every collaboration. We
              favor a tight, informed crew over bloated productions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                detail:
                  "We define the visual thesis, references, and production rhythm.",
              },
              {
                step: "02",
                title: "Pre-Production",
                detail:
                  "Moodboards, shot lists, and location planning aligned to goals.",
              },
              {
                step: "03",
                title: "Capture",
                detail:
                  "Guided sets that prioritize light, pace, and human nuance.",
              },
              {
                step: "04",
                title: "Delivery",
                detail:
                  "Curated selects with consistent color and ready-to-publish edits.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-[24px] border border-[#dbcbb7] bg-[#efe7dc] p-5 shadow-[0_16px_40px_rgba(31,27,22,0.08)]"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-[#7d7467]">
                  {item.step}
                </p>
                <h3 className="font-display mt-3 text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-[#5f564a]">{item.detail}</p>
              </div>
            ))}
          </div>
          </section>
        </Reveal>

        <Reveal className="movie">
          <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[32px] border border-[#dbcbb7] bg-[#f7f2ea] p-8 shadow-[0_20px_60px_rgba(31,27,22,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7d7467]">
              Clients
            </p>
            <h2 className="font-display mt-4 text-4xl">
              Trusted by design-forward studios.
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-[#5f564a]">
              {[
                "Arcadia Atelier",
                "Morae Studio",
                "Novo Objects",
                "Lumen Records",
                "Hotel Vesper",
                "Cinder & Co.",
              ].map((client) => (
                <span
                  key={client}
                  className="rounded-full border border-[#dbcbb7] bg-white/70 px-4 py-2 text-center"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-[#dbcbb7] bg-[#1f1b16] p-8 text-[#f4f0e8] shadow-[0_30px_70px_rgba(31,27,22,0.3)]">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c9bcae]">
              Testimonial
            </p>
            <p className="font-display mt-6 text-3xl leading-snug">
              "afx.filimer delivered a library of stills that feel cinematic and
              timeless. The team translated our moodboard into a powerful visual
              story."
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#c9bcae]">
              Rana A., Creative Director at Morae Studio
            </p>
          </div>
        </section>
        </Reveal>

      </main>

      <footer className="border-t border-[#dbcbb7]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-xs uppercase tracking-[0.3em] text-[#7d7467] md:flex-row md:items-center">
          <span>afx.filimer photography</span>
          <span>Lisbon · Berlin · Tokyo</span>
          <span>© 2026 afx.filimer</span>
        </div>
        <div className="flex justify-center pb-10">
          <div
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbcbb7] text-[#7d7467] float-slow"
          >
            ↓
          </div>
        </div>
      </footer>
    </div>
  );
}
