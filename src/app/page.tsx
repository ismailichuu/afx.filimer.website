"use client";

import Reveal from "@/components/Reveal";
import { useEffect, useState } from "react";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const photos = [
    "https://res.cloudinary.com/dei9lxras/image/upload/v1770709480/DSC_2771_duqw2s.webp",
    "https://res.cloudinary.com/dei9lxras/image/upload/v1770709481/WBW09032_mn3iqf.webp",
    "https://res.cloudinary.com/dei9lxras/image/upload/v1770711120/WBW04288_a4cui7.webp",
    "https://res.cloudinary.com/dei9lxras/image/upload/v1770711121/DSC_3857_iqcjrw.webp",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <>
      {showLoader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 animate-bounce rounded-full bg-white" />
              <span className="h-3 w-3 animate-bounce rounded-full bg-white [animation-delay:120ms]" />
              <span className="h-3 w-3 animate-bounce rounded-full bg-white [animation-delay:240ms]" />
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Loading
            </p>
          </div>
        </div>
      )}
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
                Gallery
              </a>
              <a className="transition hover:text-white" href="/service">
                Services
              </a>
              <a className="transition hover:text-white" href="/contact">
                Contact
              </a>
            </nav>
            <button
              type="button"
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white/80 transition hover:border-white hover:text-white"
              aria-label="Open menu"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) {
                  menu.classList.toggle("hidden");
                }
              }}
            >
              ☰
            </button>

          </div>
        </header>

        <div
          id="mobile-menu"
          className="hidden md:hidden fixed top-20 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-sm rounded-2xl bg-black/80 backdrop-blur-md p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >
          <nav className="flex flex-col gap-4 text-base uppercase tracking-[0.2em]">
            <a className="hover:text-white/70" href="/work">
              Work
            </a>
            <a className="hover:text-white/70" href="/service">
              Services
            </a>
            <a className="hover:text-white/70" href="/contact">
              Contact
            </a>
          </nav>
        </div>

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
                <span>Dubai</span>
                <span>Sinapore</span>
                <span>India</span>
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
                  To know more
                </p>
                <h2 className="font-display text-4xl">
                  Visit the dedicated gallery, service, and contact routes.
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
                  Go to Gallery
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
            <section id="photos" className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7d7467]">
                  Photos
                </p>
                <h2 className="font-display text-4xl">
                  A rotating glimpse of recent frames.
                </h2>
              </div>
              <div className="relative h-[550px] w-full overflow-hidden rounded-[10px] border border-[#dbcbb7] shadow-[0_20px_60px_rgba(31,27,22,0.12)] lg:h-screen">
                {photos.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`afx.filimer photo ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover object-[50%_50%] transition-opacity duration-1000 ${index === activePhotoIndex ? "opacity-100" : "opacity-0"
                      }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b16]/35 via-transparent to-transparent" />
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
                  About Us
                </p>
                <h2 className="font-display mt-4 text-4xl">
                  Cinematic storytelling for brands and founders.
                </h2>
                <p className="mt-4 text-sm text-[#5f564a]">
                  We are a lean, senior crew focused on portraiture, lifestyle,
                  and campaign visuals. From concept to delivery, we build
                  images with direction, light, and emotional clarity.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1f1b16] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#f4f0e8] transition hover:bg-[#3a332d]"
                    href="https://wa.me/8129388309?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    aria-label="Chat with us on WhatsApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Chat on WhatsApp</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-[#25D366]"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.26 2 11.5c0 2.03.78 3.89 2.06 5.33L3 22l5.38-1.41A10.3 10.3 0 0 0 12 21c5.52 0 10-4.26 10-9.5S17.52 2 12 2zm0 17.2c-1.32 0-2.57-.32-3.68-.9l-.26-.13-3.2.84.85-3.1-.17-.3A7.74 7.74 0 0 1 4.27 11.5c0-4.22 3.5-7.65 7.73-7.65 4.23 0 7.73 3.43 7.73 7.65S16.23 19.2 12 19.2zm4.28-5.7c-.23-.11-1.36-.68-1.57-.76-.21-.08-.36-.11-.51.11-.15.23-.59.76-.73.92-.13.15-.26.17-.49.06-.23-.11-.96-.36-1.83-1.15-.67-.6-1.12-1.34-1.25-1.57-.13-.23-.01-.35.1-.47.1-.1.23-.26.34-.4.11-.14.15-.23.23-.39.08-.16.04-.3-.02-.41-.06-.11-.51-1.25-.7-1.71-.18-.47-.37-.4-.51-.41h-.43c-.16 0-.41.06-.62.3-.21.23-.81.8-.81 1.94 0 1.14.84 2.24.96 2.39.12.16 1.64 2.53 3.98 3.55.56.24 1 .39 1.34.5.56.18 1.06.16 1.46.1.45-.07 1.32-.55 1.5-1.08.18-.53.18-.99.13-1.08-.06-.09-.21-.15-.44-.26Z" />
                    </svg>
                  </a>
                  <a
                    className="rounded-full border border-[#1f1b16] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#1f1b16] transition hover:bg-[#1f1b16] hover:text-[#f4f0e8]"
                    href="/contact"
                  >
                    Send a Brief
                  </a>
                </div>
              </div>
              <div className="rounded-[32px] border border-[#dbcbb7] bg-[#1f1b16] p-8 text-[#f4f0e8] shadow-[0_30px_70px_rgba(31,27,22,0.3)]">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c9bcae]">
                  Testimonial
                </p>
                <p className="font-display mt-6 text-3xl leading-snug">
                  &quot;afx.filimer delivered a library of stills that feel cinematic and
                  timeless. The team translated our moodboard into a powerful visual
                  story.&quot;
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
    </>
  );
}
