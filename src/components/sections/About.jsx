import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "JavaScript", "CSS", "HTML"];

  const backendSkills = ["Node.js", "Python", "C", "PostgreSQL", "MySQL"];

  const niceExperience = [
    "Support AI solution engineering efforts across NICE CXone, including CXone Copilot, Expert, Cognigy, routing, agent assist, and self-service use cases.",
    "Translate customer requirements into technical solution recommendations for contact center, automation, and CX AI workflows.",
    "Build and troubleshoot demo scenarios involving virtual agents, knowledge management, IVR flows, CRM integrations, and agent handoff experiences.",
    "Research and respond to technical requirements for RFPs and customer evaluations, including AI capabilities, reporting, SSO, workforce engagement, integrations, and automation.",
  ];

  const diverseMakersExperience = [
    "Led development efforts for a mobile application designed to improve accessibility between makerspaces and individuals with disabilities.",
    "Collaborated with teammates to gather requirements, define project scope, and deliver features aligned with user needs.",
    "Built and refined application features using React, JavaScript, Firebase, and REST API concepts.",
    "Tested, debugged, and documented application functionality to improve usability, reliability, and long-term maintainability.",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center">
              I’m Daniel, a CX AI Solution Engineer at NICE with a computer
              science background and a growing focus in machine learning,
              automation, and AI-driven system design. I built this site to
              document my technical projects, share my progress, and explore how
              AI can help modernize legacy workflows into more intelligent,
              effective solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Science</strong> - Northern Arizona
                  University (2020 - 2024)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Operating Systems, Web
                  Development, Database Systems, Linux
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    CX AI Solution Engineer - NICE (2025 - Present)
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {niceExperience.map((item, key) => (
                      <li key={key}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Software Engineer - Diverse Makers (2024 - 2025)
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {diverseMakersExperience.map((item, key) => (
                      <li key={key}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};