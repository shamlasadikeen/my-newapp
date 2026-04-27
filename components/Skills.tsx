type Skill = {
  name: string;
  value: number;
};

const skills: Skill[] = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 90 },
  { name: "JAVA", value: 89 },
  { name: "REACT", value: 80 },
  { name: "ADOBE", value: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-2">
        <div className="rounded-[30px] border border-yellow-400/15 bg-[#080a0f] p-8">
          <div className="flex items-center gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-yellow-400 text-3xl font-bold text-black">
              S
            </div>
            <div>
              <h2 className="text-3xl font-bold">Shamla</h2>
              <p className="mt-1 text-gray-400">Developer Full Stack</p>
            </div>
          </div>

          <p className="mt-8 leading-8 text-gray-400">
            I am passionate about building modern interfaces and scalable web
            applications with a premium dark visual style.
          </p>
        </div>

        <div className="rounded-[30px] border border-yellow-400/15 bg-[#080a0f] p-8">
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium uppercase tracking-wide text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-400">%{skill.value}</span>
                </div>

                <div className="h-2.5 w-full rounded-full bg-white/10">
                  <div
                    className="h-2.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(255,215,0,0.35)]"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}