import { Database, Monitor, PenTool, Palette } from "lucide-react";

const services = [
  {
    title: "Back-End Developer",
    subtitle: "APIs, database, server logic",
    icon: Database,
  },
  {
    title: "Front-End Developer",
    subtitle: "Modern responsive interfaces",
    icon: Monitor,
  },
  {
    title: "Web Design",
    subtitle: "Creative futuristic layouts",
    icon: PenTool,
  },
  {
    title: "Graphic Designer",
    subtitle: "Structured scalable systems",
    icon: Palette,
  },
];

export default function Services() {
  return (
    <section className="px-6 pb-8 md:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="group rounded-[26px] border border-yellow-400/15 bg-[#080a0f] p-7 shadow-[0_0_20px_rgba(255,215,0,0.03)] transition duration-300 hover:-translate-y-1 hover:border-yellow-400/35 hover:shadow-[0_0_35px_rgba(255,215,0,0.08)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                <Icon size={22} />
              </div>

              <h3 className="text-[20px] font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-base leading-7 text-gray-400">
                {service.subtitle}
              </p>

              <div className="mt-6 text-yellow-400 transition group-hover:translate-x-1">
                →
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}