export function Roadmap() {
  const roadmapItems = [
    {
      phase: "Q1 2025",
      title: "Campus Launch v1",
      description: "Initial deployment with food ordering and printout system.",
      status: "Live"
    },
    {
      phase: "Q2 2025",
      title: "Runner Network",
      description: "Enable student delivery partners across campus.",
      status: "In Progress"
    },
    {
      phase: "Q3 2025",
      title: "Vendor Dashboard",
      description: "Analytics & order management panel for vendors.",
      status: "Planned"
    },
    {
      phase: "Q4 2025",
      title: "AI Smart Recommendations",
      description: "Personalized food & tutor suggestions using AI.",
      status: "Planned"
    }
  ];

  return (
    <section className="relative py-32 px-6 z-10">

      {/* Section Title */}
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-6xl font-bold text-neon-green neon-text-glow">
          Product Roadmap
        </h2>
        <p className="mt-6 text-foreground/60 max-w-2xl mx-auto">
          Our phased expansion strategy to scale SideQuest into a
          full campus ecosystem platform.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">

        {/* Vertical Neon Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-neon-green/30 shadow-[0_0_20px_#39FF14]" />

        <div className="space-y-20">

          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-neon-green rounded-full shadow-[0_0_20px_#39FF14]" />

              {/* Card */}
              <div
                className={`mt-10 md:mt-0 md:w-1/2 p-8 rounded-xl border border-neon-green/30 bg-card/40 backdrop-blur-md hover:shadow-[0_0_25px_#39FF14] transition duration-300 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-16"
                    : "md:ml-auto md:pl-16"
                }`}
              >

                {/* Phase */}
                <span className="text-sm text-neon-green font-semibold tracking-wider">
                  {item.phase}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold mt-2 text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-foreground/70 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Status Badge */}
                <div className="mt-6">
                  <span
                    className={`px-4 py-1 text-xs rounded-full ${
                      item.status === "Live"
                        ? "bg-green-500/20 text-green-400"
                        : item.status === "In Progress"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}