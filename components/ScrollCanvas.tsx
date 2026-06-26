"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;

function pad(n: number): string {
  return String(n).padStart(3, "0");
}

function frameSrc(i: number): string {
  return `/frames/frame_${pad(i + 1)}.webp`;
}

function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v));
}

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const rafRef = useRef<number>(0);
  const currentRef = useRef(-1);

  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // --- Detect reduced motion ---
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // --- Detect mobile ---
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // --- Draw a single frame on canvas ---
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    const frames = framesRef.current;
    if (!canvas || !ctx || !frames[index]) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.width / dpr;
    const ch = canvas.height / dpr;
    const img = frames[index];
    const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth * s;
    const dh = img.naturalHeight * s;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
    currentRef.current = index;
  };

  // --- Set up canvas size (call on resize) ---
  const sizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctxRef.current = canvas.getContext("2d");
    if (currentRef.current >= 0) drawFrame(currentRef.current);
  };

  // --- Preload frames ---
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === TOTAL_FRAMES) {
          framesRef.current = images;
          setLoading(false);
        }
      };
      images.push(img);
    }
  }, []);

  // --- Canvas sizing ---
  useEffect(() => {
    sizeCanvas();
    window.addEventListener("resize", sizeCanvas);
    return () => window.removeEventListener("resize", sizeCanvas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  // --- GSAP ScrollTrigger (desktop + !reduced) ---
  useEffect(() => {
    if (isMobile || reducedMotion || loading) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: canvasRef.current?.parentElement,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=250vh",
        scrub: 1,
        onUpdate: (self) => {
          const idx = clamp(Math.floor(self.progress * (TOTAL_FRAMES - 1)), 0, TOTAL_FRAMES - 1);
          if (idx !== currentRef.current) drawFrame(idx);
        },
      });
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, reducedMotion, loading]);

  // --- Reduced motion: draw middle frame once ---
  useEffect(() => {
    if (loading) return;
    if (reducedMotion && !isMobile) {
      drawFrame(Math.floor(TOTAL_FRAMES / 2));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, reducedMotion, isMobile]);

  // --- Mobile: draw first frame once ---
  useEffect(() => {
    if (loading) return;
    if (isMobile) {
      drawFrame(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, isMobile]);

  // --- Draw frame 0 on initial load (desktop normal) ---
  useEffect(() => {
    if (loading) return;
    if (!isMobile && !reducedMotion) {
      drawFrame(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <>
      {/* Preloader */}
      {loading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-bg">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            className="text-accent animate-pulse"
          >
            <path
              d="M12 2C10.5 2 9 3 9 5V8C7.5 8 6 9 6 11V14C6 17 8 19 10 20V22H14V20C16 19 18 17 18 14V11C18 9 16.5 8 15 8V5C15 3 13.5 2 12 2Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-muted text-sm mt-4 font-medium">
            loading experience<span className="animate-pulse">...</span>
          </p>
        </div>
      )}

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: loading ? "none" : "block" }}
      />
    </>
  );
}
