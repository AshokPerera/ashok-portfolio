import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        "React",
        "Flutter",
        "JavaScript",
        "jQuery",
        "Material UI",
        "Bootstrap",
    ];

    const backendSkills = [
        "C#",
        ".NET 6",
        "Node.js",
        "Express.js",
        "Java",
        "Spring Boot",
        "Dart",
        "Python",
        "Azure",
        "Rabbit MQ",
        "Solr",
        "AWS Lambda",
        "Docker",
        "Fhir",
        "HL7",
        "MSSQL",
        "MySQL",
        "MongoDB"
    ];

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

                    <div className="rounded-xl p-8 border-white/12 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            A passionate and results-driven Software Engineer with expertise in
                            full-stack development, cloud technologies, and agile methodologies.
                            Adept at designing, developing, and maintaining high-performance
                            applications. Proven ability to lead software development initiatives,
                            optimize performance, and drive innovation in fast-paced environments.
                            Seeking to contribute my skills to a tech-driven organization focused
                            on cutting-edge solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-2 pr-6 hover:-translate-y-1 transition-all">
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

                            <div className="rounded-xl p-2 pl-6 hover:-translate-y-1 transition-all">
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
                        </div>
                    </div>

                    <div className="rounded-xl p-8 mt-8 border-white/12 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="pb-1">
                                    {" "}
                                    <span className="font-bold">Junior Software Engineer</span> | Telstra Health, Melbourne | March 2022 – February 2025{" "}
                                </h4>
                                <p className="pl-2 text-sm">
                                    Developed and maintained enterprise healthcare applications while collaborating
                                    with cross-functional teams in an agile environment. Led performance optimization
                                    initiatives to enhance system efficiency.

                                    <ul className="space-y-2 pt-2 text-gray-300">
                                        {[
                                            "Engineered scalable and secure healthcare applications using C#, .NET 6, .NET Framework and React.js.",
                                            "Designed and implemented RESTful APIs, reducing system integration failures by 30% and improving data processing speed by 40%.",
                                            "Implemented Azure cloud solutions, enhancing system scalability and resilience.",
                                            "Led code reviews, ensuring adherence to best coding practices and improving code maintainability."
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="mt-2 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </p>
                            </div>

                            <div>
                                <h4 className="pb-1">
                                    {" "}
                                    <span className="font-bold">Full-Stack Developer</span> | Avonet Technologies, Sri Lanka | June 2017 – January 2020{" "}
                                </h4>
                                <p className="pl-2 text-sm">
                                    Built high-performing full-stack applications with an emphasis on scalability and maintainability.

                                    <ul className="space-y-2 pt-2 text-gray-300">
                                        {[
                                            "Engineered scalable applications with Node.js, Spring Boot, and React.js, handling 10,000+ active users while enhancing system stability and minimizing downtime.",
                                            "Designed microservices architecture, improving modularity and ease of maintenance.",
                                            "Automated testing & deployment through CI/CD pipelines, significantly reducing manual errors."
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="mt-2 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl p-8 mt-8 border-white/12 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="pb-1">
                                    {" "}
                                    <span className="font-bold">Master of Business Information Systems</span>
                                    <div className="pl-2">
                                        <p>Torrens University, Australia</p>
                                        <p className="text-sm">March 2021 – September 2023</p>{" "}
                                    </div>
                                </h4>
                            </div>

                            <div>
                                <h4 className="pb-1">
                                    {" "}
                                    <span className="font-bold">BSc (Hons) in Software Engineering</span>
                                    <div className="pl-2">
                                        <p>University of Plymouth, UK (Affiliated with NSBM Green University, Sri Lanka)</p>
                                        <p className="text-sm">March 2015 – September 2018</p>{" "}
                                    </div>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};