"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  { title: "Modern Dashboard", image: "/images/dashboard.jpg" },
  { title: "Portfolio Website", image: "/images/portfolioweb.jpg" },
  { title: "Product Landing Page", image: "/images/landing page.jpg" },
  { title: "Creative UI Concept", image: "/images/ui.png" },
  { title: "SaaS Interface", image: "/images/SaaS dashboard.jpg" },
  { title: "Admin Panel UI", image: "/images/dashboard.jpg" },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-bold text-white">My Products</h2>
            <p className="mt-2 text-gray-400">All history</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-[24px] border border-yellow-400/15 bg-[#080a0f] transition duration-300 hover:-translate-y-2 hover:border-yellow-400/35 hover:shadow-[0_0_30px_rgba(255,215,0,0.08)]"
            >
              <div className="relative h-56 overflow-hidden bg-[#111]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                <div className="absolute left-5 top-5 rounded-full bg-black/50 px-4 py-1 text-xs uppercase tracking-[0.2em] text-yellow-400 backdrop-blur-md">
                  Project 0{index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white transition group-hover:text-yellow-400">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Futuristic dark UI design with clean layout and modern interaction.
                </p>

                <button
                  onClick={() => setSelectedImage(project.image)}
                  className="mt-5 rounded-full border border-yellow-400/30 px-5 py-2 text-sm text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 IMAGE MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full view"
              width={1200}
              height={800}
              className="h-auto w-full rounded-xl object-contain"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}