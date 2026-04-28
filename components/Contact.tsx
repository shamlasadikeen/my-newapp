export default function Contact() {
  return (
    <section id="contact" className="px-6 py-16">
      <div className="mt-8 space-y-4 text-sm text-gray-300 flex flex-col items-center">
  
  <div className="flex items-center gap-2">
    <span>📧</span>
    <span>Email:</span>
    <a
      href="mailto:shamlasadikeen4@gmail.com"
      className="text-yellow-400 hover:underline"
    >
      shamlasadikeen4@gmail.com
    </a>
  </div>

  <div className="flex items-center gap-2">
    <span>💼</span>
    <span>LinkedIn:</span>
    <a
      href="https://www.linkedin.com/in/shamla-sadikeen-839953273"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 hover:underline"
    >
      View Profile
    </a>
  </div>

  <div className="flex items-center gap-2">
    <span>💻</span>
    <span>GitHub:</span>
    <a
      href="https://github.com/shamlasadikeen"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 hover:underline"
    >
      View Repositories
    </a>
  </div>

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
            href="https://github.com/shamlasadikeen"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-yellow-400/30 px-6 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            GitHub
          </a>

          <a
            href="#home"
            className="rounded-full border border-white/10 px-6 py-3 font-semibold text-gray-300 transition hover:border-yellow-400/30 hover:text-yellow-400"
          >
            Back to Top
          </a>
        </div>
      
    </section>
  );
}