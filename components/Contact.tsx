export default function Contact() {
  return (
    <section id="contact" className="px-6 py-16">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-yellow-400/15 bg-white/[0.03] p-8 text-center backdrop-blur">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white">
          Let’s Work Together
        </h2>

        <p className="mt-4 text-gray-400">
          I design and develop modern, high-performing websites and dashboards.
          If you have a project in mind, feel free to reach out.
        </p>

        {/* Contact Info */}
        <div className="mt-8 space-y-3 text-sm text-gray-300">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:shamlasadikeen4@gmail.com"
              className="text-yellow-400 hover:underline"
            >
              shamlasadikeen4@gmail.com
            </a>
          </p>

          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/shamla-sadikeen-839953273"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              View Profile
            </a>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:shamlasadikeen4@gmail.com"
            className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/shamla-sadikeen-839953273"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-yellow-400/30 px-6 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            LinkedIn
          </a>

          <a
            href="#home"
            className="rounded-full border border-white/10 px-6 py-3 font-semibold text-gray-300 transition hover:border-yellow-400/30 hover:text-yellow-400"
          >
            Back to Top
          </a>
        </div>
      </div>
    </section>
  );
}