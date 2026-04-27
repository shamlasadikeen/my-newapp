export default function About() {
  return (
    <section id="about" className="px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div className="rounded-[32px] border border-yellow-400/15 bg-white/[0.03] p-8">
          <div className="flex items-center gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-yellow-400 text-3xl font-bold text-black">
             S
            </div>
            <div>
              <h2 className="text-3xl font-bold">Shamla</h2>
              <p className="text-gray-400">Developer Full Stack</p>
            </div>
          </div>

          <p className="mt-6 leading-7 text-gray-400">
            I am a full stack developer focused on creating premium interfaces
            and smooth user experiences. I enjoy building dark-themed modern
            websites with strong visuals, clean code, and scalable structure.
          </p>
        </div>

        <div className="rounded-[32px] border border-yellow-400/15 bg-white/[0.03] p-8">
          <h3 className="text-2xl font-bold">Experience Highlights</h3>
          <ul className="mt-6 space-y-4 text-gray-400">
            <li>• Modern UI development with React and Next.js</li>
            <li>• API integration and backend logic</li>
            <li>• Responsive layouts with Tailwind CSS</li>
            <li>• Type-safe scalable code with TypeScript</li>
          </ul>
        </div>
      </div>
    </section>
  );
}