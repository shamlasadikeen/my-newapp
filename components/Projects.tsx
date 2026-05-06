"use client";

import Image from "next/image";

const projects = [
  {
    title: "Modern Dashboard",
    image: "/images/dashboard.jpg",
    link: "https://modern-dashboard-ui-g7un.vercel.app/",
    description:
      "A futuristic dashboard UI with cards, charts, and modern layout structure designed for admin and analytics platforms.",
  },
  {
   title: "Portfolio Website",
    image: "/images/portfolioweb.jpg",
    link: "https://my-portfolio-jet-nu-39.vercel.app/",
    description:
      "A modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS to showcase skills, projects, and contact details.",
  },
  {
      title: "Luxury Car Landing Page",
      image: "/images/landing page.jpg",
      link: "https://my-landing-page1-phi.vercel.app/",
      description:
      "A premium automotive landing page featuring modern UI design, smooth animations, responsive layouts, and a luxury-focused user experience built for showcasing high-end vehicles.",
  },
  {
     title: "Organic Market UI",
    image: "/images/ui.png",
    link: "https://organic-market-ui.vercel.app/",
    description:
      "A modern organic grocery marketplace UI featuring clean layouts, fresh product showcases, responsive design, and a smooth shopping experience focused on healthy lifestyle branding.",
  },
  {
    title: "SaaS Interface",
    image: "/images/SaaS dashboard.jpg",
    link: "#",
    description:
      "A futuristic dashboard UI with cards, charts, and modern layout structure designed for admin and analytics platforms.",
  },
    {
    title: "Modern Dashboard",
    image: "/images/dashboard.jpg",
    link: "https://modern-dashboard-ui-g7un.vercel.app/",
    description:
      "A futuristic dashboard UI with cards, charts, and modern layout structure designed for admin and analytics platforms.",
  },

];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-white">My Projects</h2>
          <p className="mt-2 text-gray-400">
            Featured websites and development work
          </p>
        </div>

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

                <p className="mt-3 min-h-[84px] text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-full border border-yellow-400/30 px-5 py-2 text-sm text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}