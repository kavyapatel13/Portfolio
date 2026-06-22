function About() {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
    "VS Code",
  ];

  return (
    <section id="about" className="px-6 py-24">
      <div className="min-h-[calc(100vh-350px)] mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-white underline underline-offset-8 decoration-purple-500">About Me</h2>

        <div className="glass rounded-3xl p-8 md:flex md:gap-10">
          <div className="flex-1">
            <p className="text-lg leading-8 text-slate-300">
              I'm a passionate web developer with a love for creating beautiful
              and functional websites.
            </p>
          </div>

          <div className="mt-8 flex flex-1 flex-wrap gap-4 md:mt-0">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-purple-500/30 px-5 py-3"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;