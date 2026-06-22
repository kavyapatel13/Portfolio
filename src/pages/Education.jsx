function Education() {
  const data = [
    {
      year: "2025 - Present",
      title: "Bachelor In Information Technology",
      school: "JG University",
    },
    {
      year: "2023 - 2025",
      title: "Diploma in Information Technology",
      school: "Government Polytechnic, Ahmedabad",
    },
  ];

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-white underline underline-offset-8 decoration-purple-500">Education</h2>

        <div className="relative border-l border-purple-500/30 pl-10">
          {data.map((item) => (
            <div key={item.title} className="relative mb-10">
              <div className="absolute -left-[49px] h-5 w-5 rounded-full bg-purple-500" />

              <div className="glass rounded-3xl p-8">
                <p className="text-blue-400">{item.year}</p>

                <h3 className="mt-2 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-400">{item.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;