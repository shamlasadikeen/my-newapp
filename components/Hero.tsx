"use client";

import { useRef } from "react";
import { Bot, Code2, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const robotRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 25;
    const rotateX = (((rect.height / 2) - y) / (rect.height / 2)) * 25;

    if (robotRef.current) {
      robotRef.current.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.15)
      `;
      robotRef.current.style.filter =
        "drop-shadow(0 0 45px rgba(255,215,0,0.7))";
    }
  };

  const handleMouseLeave = () => {
    if (robotRef.current) {
      robotRef.current.style.transform =
        "rotateX(0deg) rotateY(0deg) scale(1)";
      robotRef.current.style.filter = "none";
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#05070d] px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20"
    >
      <div className="absolute left-0 top-10 h-[320px] w-[320px] rounded-full bg-yellow-400/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2">
        <div className="max-w-[620px]">
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Web Developer
          </p>

          <h1 className="text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-8xl">
            <span className="block text-white">Full Stack</span>
            <span className="mt-4 block text-yellow-400">Developer</span>
          </h1>

          <p className="mt-10 max-w-[620px] text-lg leading-8 text-gray-400">
            I design and develop modern, fast, and visually powerful web
            experiences using React, Next.js, TypeScript, and Tailwind CSS.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
            >
              About Me
            </a>

            <a
              href="#projects"
              className="rounded-full border border-yellow-400/30 px-8 py-4 text-lg font-semibold text-yellow-400 transition hover:bg-yellow-400/10"
            >
              My Work
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-yellow-400">
            <span className="floating-icon flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/5">
              <Code2 size={18} />
            </span>
            <span className="floating-icon-delayed flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/5">
              <Sparkles size={18} />
            </span>
            <span className="floating-icon-slow flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/5">
              <Bot size={18} />
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto flex h-[460px] max-w-[520px] items-center justify-center overflow-hidden rounded-[34px] border border-yellow-400/20 bg-[linear-gradient(180deg,#0c1018,#06080d)] shadow-[0_0_80px_rgba(255,215,0,0.12)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_0_120px_rgba(255,215,0,0.18)]">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_45%)]" />

            <div className="rotating-ring absolute z-10 h-[300px] w-[300px] rounded-full border border-yellow-400/30 shadow-[0_0_20px_rgba(255,215,0,0.15)]" />
            <div className="rotating-ring-reverse absolute z-10 h-[220px] w-[220px] rounded-full border border-yellow-400/25 shadow-[0_0_15px_rgba(255,215,0,0.10)]" />
            <div className="rotating-ring-slow absolute z-10 h-[140px] w-[140px] rounded-full border border-yellow-400/20 shadow-[0_0_10px_rgba(255,215,0,0.08)]" />

            <div className="floating-badge absolute left-10 top-10 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/15 bg-yellow-400/10 text-yellow-400">
              <Code2 size={20} />
            </div>

            <div className="floating-badge-delayed absolute bottom-12 right-10 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/15 bg-yellow-400/10 text-yellow-400">
              <Sparkles size={20} />
            </div>

            <div className="relative z-50 flex flex-col items-center text-center">
              <div
                className="floating-robot relative mb-6 h-[240px] w-[240px] cursor-pointer"
                style={{ perspective: "1000px" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  ref={robotRef}
                  className="relative z-50 h-full w-full transition-transform duration-200 ease-out"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 -z-10 rounded-full bg-yellow-400/20 blur-[70px]" />

                  <Image
                    src="/images/robot2.png"
                    alt="Robot"
                    fill
                    priority
                    sizes="240px"
                    className="pointer-events-none object-contain drop-shadow-[0_0_35px_rgba(255,215,0,0.35)]"
                  />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white">Shamla</h3>
              <p className="mt-2 text-gray-400">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}