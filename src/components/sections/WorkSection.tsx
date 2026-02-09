"use client";

import Reveal from "@/components/Reveal";
import Portal from "@/components/Portal";
import { useEffect, useMemo, useRef, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
};

const optimizeCloudinary = (url: string, width: number) => {
  const marker = "/image/upload/";
  if (!url.includes(marker)) return url;
  return url.replace(marker, `${marker}f_auto,q_auto,w_${width},c_fill/`);
};

const WorkSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const loadedSet = useRef<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const galleryItems = useMemo<GalleryItem[]>(
    () => [
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669951/IMG_9997_xnydn4.webp", alt: "Gallery image 1" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669950/IMG_9910_jrwswz.webp", alt: "Gallery image 2" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669938/IMG_8515_ogryvv.webp", alt: "Gallery image 3" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669937/IMG_7249_v8jkpm.webp", alt: "Gallery image 4" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669936/IMG_7156_cim8gb.webp", alt: "Gallery image 5" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669936/IMG_7157_gfmsxl.webp", alt: "Gallery image 6" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669932/IMG_7145_swbxm9.webp", alt: "Gallery image 7" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669920/IMG_6424_rw4y6k.webp", alt: "Gallery image 8" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669923/IMG_6930_mohiog.webp", alt: "Gallery image 9" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669921/IMG_6782_xw7l3v.webp", alt: "Gallery image 10" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669921/IMG_0009_tugjwd.webp", alt: "Gallery image 11" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669826/4_5_lvzb4p.webp", alt: "Gallery image 13" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669812/Everything_s_better_when_we_re_together_yfurdz.webp", alt: "Gallery image 14" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669811/Everything_s_better_when_we_re_together_Instagram_Post_45_nddp23.webp", alt: "Gallery image 15" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669329/1_darijl.webp", alt: "Gallery image 16" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669327/2_7_g9x9bg.webp", alt: "Gallery image 17" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669328/2_gil8b5.webp", alt: "Gallery image 18" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669327/1_3_dhm8yi.webp", alt: "Gallery image 19" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770669326/1_2_iutju4.webp", alt: "Gallery image 20" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770668869/WBW02494_jxscza.webp", alt: "Gallery image 21" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770668867/DSC_7532_vu95v2.webp", alt: "Gallery image 22" },
      { src: "https://res.cloudinary.com/dei9lxras/image/upload/v1770668858/DSC_4078_fisaqs.webp", alt: "Gallery image 23" },
    ],
    []
  );

  const visibleItems = showAll ? galleryItems : galleryItems.slice(0, 9);
  const waitCount = Math.min(visibleItems.length, isMobile ? 4 : 8);
  const isLoading = loadedCount < waitCount;
  const activeImage =
    activeIndex === null ? null : visibleItems[activeIndex] ?? null;

  useEffect(() => {
    setLoadedCount(0);
    loadedSet.current = new Set();
    const timeout = setTimeout(() => {
      setLoadedCount(waitCount);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [showAll, visibleItems.length, waitCount]);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const markLoaded = (src: string) => {
    if (loadedSet.current.has(src)) return;
    loadedSet.current.add(src);
    setLoadedCount((count) => count + 1);
  };

  const openImage = (index: number) => setActiveIndex(index);
  const closeImage = () => setActiveIndex(null);
  const nextImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % visibleItems.length);
  };
  const prevImage = () => {
    if (activeIndex === null) return;
    setActiveIndex(
      (activeIndex - 1 + visibleItems.length) % visibleItems.length
    );
  };
  return (
    <section className="space-y-12">
      <Reveal className="movie">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7d7467]">
              Gallery
            </p>
            <h1 className="font-display text-4xl">
              A curated gallery of stills and editorial moments.
            </h1>
          </div>
          <p className="max-w-md text-sm text-[#5f564a]">
            Scroll through recent campaigns and click to reveal more frames.
          </p>
        </div>
      </Reveal>

      <div className="relative min-h-[260px]">
        {isLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center rounded-3xl bg-[#f7f2ea]/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#1f1b16]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#1f1b16] [animation-delay:120ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#1f1b16] [animation-delay:240ms]" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7d7467]">
                Loading gallery
              </p>
            </div>
          </div>
        )}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {visibleItems.map((item, index) => (
          <div key={`${item.alt}-${index}`}>
            <button
              type="button"
              className="group relative h-56 w-full overflow-hidden rounded-2xl border border-[#dbcbb7] bg-[#f7f2ea] shadow-[0_18px_45px_rgba(31,27,22,0.08)] transition hover:-translate-y-1 sm:h-auto sm:aspect-[4/5]"
              onClick={() => openImage(index)}
              aria-label={`Open ${item.alt}`}
            >
              <img
                alt={item.alt}
                src={optimizeCloudinary(item.src, 800)}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading={index < waitCount ? "eager" : "lazy"}
                decoding="async"
                onLoad={() => {
                  if (index < waitCount) markLoaded(item.src);
                }}
                onError={() => {
                  if (index < waitCount) markLoaded(item.src);
                }}
              />
            </button>
          </div>
        ))}
      </div>
      </div>

      <div className="flex justify-center">
        <button
          className="rounded-full border border-[#1f1b16] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1f1b16] transition hover:bg-[#1f1b16] hover:text-[#f4f0e8]"
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show less" : "See more"}
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="movie">
          <div className="rounded-[28px] border border-[#dbcbb7] bg-[#efe7dc] p-6 shadow-[0_20px_60px_rgba(31,27,22,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7d7467]">
              Featured Motion
            </p>
            <h2 className="font-display mt-4 text-3xl">
              A behind-the-scenes reel from our Velvet Sound set.
            </h2>
            <p className="mt-2 text-sm text-[#5f564a]">
              We mix stills with short-form motion to build a richer editorial
              narrative across launch campaigns.
            </p>
          </div>
        </Reveal>
        <Reveal className="movie" delayMs={150}>
          <div className="overflow-hidden rounded-[28px] border border-[#dbcbb7] bg-black shadow-[0_20px_60px_rgba(31,27,22,0.15)]">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="afx.filimer reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>

      {activeImage && (
        <Portal>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={closeImage}
          >
            <button
              type="button"
              className="fixed right-6 top-6 text-2xl text-white/80 transition hover:text-white"
              onClick={closeImage}
              aria-label="Close"
            >
              ×
            </button>
            <button
              type="button"
              className="fixed left-6 top-1/2 -translate-y-1/2 rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-white hover:text-white"
              onClick={(event) => {
                event.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
            >
              Prev
            </button>
            <button
              type="button"
              className="fixed right-6 top-1/2 -translate-y-1/2 rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-white hover:text-white"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              Next
            </button>
            <div
              className="flex max-h-[85vh] max-w-[90vw] items-center justify-center rounded-2xl bg-black/20 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                alt={activeImage.alt}
                src={optimizeCloudinary(activeImage.src, 1600)}
                className="max-h-[80vh] max-w-[85vw] object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </Portal>
      )}
    </section>
  );
};

export default WorkSection;
