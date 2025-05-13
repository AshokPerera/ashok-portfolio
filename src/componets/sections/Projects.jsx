import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)] transition-all">
                            <h1 className="text-xl font-bold mb-1">Enterprise Provider Directory</h1>
                            <h3 className="text-sm mb-2">Telstra Health (2022/03 - 2025/02)</h3>
                            <p className="text-gray-400 mb-4">
                                The Enterprise Provider Directory has helped hospitals and large
                                health providers around Australia better manage their provider
                                information and communicate with confidence and accuracy.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[".NET 6", ".NET Framework 4.5", "React", "Fhir", "HL7", "MSSQL", "Azure DevOps", "Azure Service Bus", "Azure Functions", "Solr", "Rabbit MQ", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)] transition-all">
                            <h1 className="text-xl font-bold mb-1">BCON Taxi</h1>
                            <h3 className="text-sm mb-2">Avonet Technologies (2017/06 - 2020/02)</h3>
                            <p className="text-gray-400 mb-4">
                                BCON Taxi is an automated ride-hailing application developed to
                                modernize traditional taxi services in Sri Lanka by offering a
                                seamless and reliable platform for both passengers and drivers.
                                The system includes dedicated mobile apps for users and drivers,
                                along with a robust admin portal. It enables real-time taxi booking,
                                GPS-based vehicle tracking, fare estimation, in-app notifications,
                                and ride history management.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "Express.js", "MongoDB", "AWS", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)] transition-all">
                            <h1 className="text-xl font-bold mb-1">Okavango</h1>
                            <h3 className="text-sm mb-2">Avonet Technologies (2017/06 - 2020/02)</h3>
                            <p className="text-gray-400 mb-4">
                                Okavango is a comprehensive event management platform designed to
                                streamline the planning, scheduling, and coordination of events
                                across various organizations. The application enables users to
                                create and manage events, handle registrations, manage attendees,
                                and track event-related activities in real time.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "Express.js", "MySQL", "AWS"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)] transition-all">
                            <h1 className="text-xl font-bold mb-1">Affiniti CRM</h1>
                            <h3 className="text-sm mb-2">Avonet Technologies (2017/06 - 2020/02)</h3>
                            <p className="text-gray-400 mb-4">
                                Affiniti CRM is a customer relationship management platform designed to
                                help businesses effectively manage interactions with current and potential
                                customers. The system streamlines processes related to lead management,
                                sales tracking, customer support, and performance analytics, with a strong
                                focus on building long-term customer relationships.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "jQuery", "CSS", "Bootstrap", "Java", "Spring", "Spring Boot", "MySQL"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)] transition-all">
                            <h1 className="text-xl font-bold mb-1">Park Fine - City of Unley</h1>
                            <h3 className="text-sm mb-2">Avonet Technologies (2017/06 - 2020/02)</h3>
                            <p className="text-gray-400 mb-4">
                                The Unley Park Fine System is a custom-built infringement tracking and 
                                management application developed for the City of Unley, South Australia. 
                                It is designed to digitize and streamline the management of parking 
                                violations, fines, and penalty enforcement processes.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "jQuery", "CSS", "Bootstrap", "MySQL"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};