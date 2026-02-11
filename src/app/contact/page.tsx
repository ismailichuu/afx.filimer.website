"use client";

import BackButton from "@/components/BackButton";
import Reveal from "@/components/Reveal";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSuccessMessage("");
    setIsSubmitted(false);

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(
        "Enquiry submitted. We will get back to you within 12 hours.",
      );
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      form.reset();
    }, 600);
  };

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
          <section className="grid items-start gap-8 rounded-[36px] border border-[#dbcbb7] bg-[#efe7dc] p-4 sm:p-6 lg:p-10 shadow-[0_25px_70px_rgba(31,27,22,0.1)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7d7467]">
                Contact
              </p>
              <h1 className="font-display text-4xl">
                Shape a visual story with a focused crew.
              </h1>
              <p className="text-sm text-[#5f564a]">
                We collaborate with founders and brands across India, Dubai, and
                Singapore. Share your brief and desired timeline.
              </p>
              <div className="text-sm text-[#5f564a]">
                <p>filimerafx@gmail.com</p>
                <p>+91 8129388309</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2 justify-center">
                <a
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1f1b16] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#f4f0e8] transition hover:bg-[#3a332d]"
                  href="https://wa.me/8129388309?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20project."
                  aria-label="Send enquiry on WhatsApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>WhatsApp Enquiry</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-[#25D366]"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.26 2 11.5c0 2.03.78 3.89 2.06 5.33L3 22l5.38-1.41A10.3 10.3 0 0 0 12 21c5.52 0 10-4.26 10-9.5S17.52 2 12 2zm0 17.2c-1.32 0-2.57-.32-3.68-.9l-.26-.13-3.2.84.85-3.1-.17-.3A7.74 7.74 0 0 1 4.27 11.5c0-4.22 3.5-7.65 7.73-7.65 4.23 0 7.73 3.43 7.73 7.65S16.23 19.2 12 19.2zm4.28-5.7c-.23-.11-1.36-.68-1.57-.76-.21-.08-.36-.11-.51.11-.15.23-.59.76-.73.92-.13.15-.26.17-.49.06-.23-.11-.96-.36-1.83-1.15-.67-.6-1.12-1.34-1.25-1.57-.13-.23-.01-.35.1-.47.1-.10.23-.26.34-.40.11-.14.15-.23.23-.39.08-.16.04-.30-.02-.41-.06-.11-.51-1.25-.70-1.71-.18-.47-.37-.4-.51-.41h-.43c-.16 0-.41.06-.62.30-.21.23-.81.80-.81 1.94 0 1.14.84 2.24.96 2.39.12.16 1.64 2.53 3.98 3.55.56.24 1 .39 1.34.50.56.18 1.06.16 1.46.10.45-.07 1.32-.55 1.50-1.08.18-.53.18-.99.13-1.08-.06-.09-.21-.15-.44-.26Z" />
                  </svg>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#1f1b16] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#1f1b16] transition hover:bg-[#1f1b16] hover:text-[#f4f0e8]"
                  href="https://www.instagram.com/afx.filmer/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="ig-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#F58529" />
                        <stop offset="30%" stopColor="#DD2A7B" />
                        <stop offset="60%" stopColor="#8134AF" />
                        <stop offset="100%" stopColor="#515BD4" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#ig-gradient)"
                      d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm5-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
                    />
                  </svg>
                  Visit Instagram
                </a>
              </div>
            </div>
            <form className="w-full justify-self-stretch flex flex-col gap-5 rounded-[28px] border border-[#dbcbb7] bg-[#f7f2ea] p-4 sm:p-6" onSubmit={handleSubmit} noValidate>
              {successMessage ? (
                <div className="flex items-start gap-3 rounded-2xl border border-[#9ccc9c] bg-[#e8f5e9] px-4 py-3 text-sm text-[#2e5e3a] shadow-[0_12px_30px_rgba(46,94,58,0.12)]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-5 w-5 text-[#2e7d32]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-6.22-9.15" />
                    <path d="m22 4-10 10-3-3" />
                  </svg>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">Enquiry submitted</p>
                    <p className="text-xs text-[#3f6f4b]">{successMessage}</p>
                  </div>
                </div>
              ) : null}
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7d7467]">
                  Project Brief
                </p>
                <p className="text-sm text-[#5f564a]">
                  Tell us what you are building. We will guide the next steps.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.3em] text-[#7d7467]">
                    Name
                  </label>
                  <input
                    className="w-full rounded-2xl border border-[#d6c8b5] bg-white/80 px-4 py-3 text-sm text-[#1f1b16] focus:outline-none"
                    name="name" placeholder="Your name" required
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.3em] text-[#7d7467]">
                    Email
                  </label>
                  <input
                    className="w-full rounded-2xl border border-[#d6c8b5] bg-white/80 px-4 py-3 text-sm text-[#1f1b16] focus:outline-none"
                    name="email" placeholder="you@email.com" required
                    type="email"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.3em] text-[#7d7467]">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-2xl border border-[#d6c8b5] bg-white/80 px-4 py-3 text-sm text-[#1f1b16] focus:outline-none"
                    name="phone" placeholder="+91"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.3em] text-[#7d7467]">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    className="w-full rounded-2xl border border-[#d6c8b5] bg-white/80 px-4 py-3 text-sm text-[#1f1b16] focus:outline-none"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option>Wedding</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-[#7d7467]">
                  Project Details
                </label>
                <textarea
                  className="min-h-[140px] w-full rounded-2xl border border-[#d6c8b5] bg-white/80 px-4 py-3 text-sm text-[#1f1b16] focus:outline-none"
                  name="details" placeholder="Tell us about your vision, locations, and dates." required
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <label className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7d7467]">
                  <input name="whatsappOptIn" type="checkbox" className="h-4 w-4 accent-[#1f1b16]" />
                  Contact me on WhatsApp
                </label>
                <button
                  className="rounded-full bg-[#1f1b16] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#f4f0e8] transition hover:bg-[#3a332d]"
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? "Sending..." : "Send enquiry"}
                </button>
              </div>
            </form>
          </section>
        </Reveal>
        <Reveal className="movie">
          <section className="rounded-[36px] border border-[#dbcbb7] bg-[#f7f2ea] shadow-[0_25px_70px_rgba(31,27,22,0.1)]">
            <div className="flex flex-col gap-4 border-b border-[#dbcbb7] px-8 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7d7467]">
                Visit Our Office
              </p>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2 text-sm text-[#5f564a]">
                  <p className="font-semibold text-[#1f1b16]">AFX filmer</p>
                  <p>Kalady, Kerala, India</p>
                  <p>Open by appointment</p>
                </div>
                <a
                  className="rounded-full border border-[#1f1b16] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1f1b16] transition hover:bg-[#1f1b16] hover:text-[#f4f0e8]"
                  href="https://www.google.com/maps/place/AFX+filmer/@10.1705657,76.4269863,17z/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <iframe
              title="AFX filmer location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.124115158459!2d76.42698627407977!3d10.170565670078535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080782a4b3d095%3A0xc43d625172da3f6!2sAFX%20filmer!5e0!3m2!1sen!2sin!4v1770756823489!5m2!1sen!2sin"
              className="h-[320px] w-full border-0 md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
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
                target="_blank"
                rel="noreferrer"
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
                target="_blank"
                rel="noreferrer"
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



