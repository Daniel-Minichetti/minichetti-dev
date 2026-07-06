import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "CSS",
    "HTML",
  ];

  const backendSkills = ["Node.js", "Python", "C", "PostgreDB", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center">
              Hi I'm Daniel a current Solution Engineer at NiCE, I developed this personal website to share my progress into documenting my Machine Learning and AI journey. 
              I have a strong interest in research & system design around ML systems, and how AI can transform legacy systems into modern effective solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
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
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - Northern Arizona University
                  (2020-2024)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Operating Systems, Web Development, Database Systems, Linux
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    CX AI Solution Engineer - NiCE (2025 - present){" "}
                  </h4>
                  <p>
                  * Support AI solution engineering efforts across NICE CXone, including CXone Copilot, Expert, Cognigy, routing, agent assist, and self-service use cases.
                  * Assist with customer discovery by translating business requirements into technical solution recommendations for contact center and CX AI workflows.
                  * Build and troubleshoot demo scenarios involving virtual agents, knowledge management, call routing, IVR flows, CRM integrations, and agent handoff experiences.
                  * Research and respond to technical requirements for RFPs and customer evaluations, including AI capabilities, reporting, SSO, workforce engagement, integrations, and automation.
                  * Collaborate with internal teams to validate solution fit, troubleshoot configuration issues, and explain technical concepts to both technical and non-technical stakeholders.
                  * Develop customer-facing solution narratives that show how AI, automation, and CXone tools can improve agent efficiency and customer experience.

                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer - Diverse Makers (2024-2025) {""}
                  </h4>
                  <p>
                  Assess and troubleshoot computer problems brought by customers, offer replacement products as necessary
                  Deliver excellent customer service when reccomending products ranging from TVs, gaming consoles, monitors,
                  cables, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
