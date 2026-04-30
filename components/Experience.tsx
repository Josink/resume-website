const experiences = [
    {
        location: "Kettering University, Flint, MI",
        time: "April 2026 - present",
        title: "IT student Worker",
        description: "Provide frontline technical support to students, faculty, and staff by troubleshooting hardware, software, " +
            "and network issues, installing and configuring systems, and assisting with campus IT services and equipment maintenance"
    },
    {
        location: "Atlas Copco, New Hudson, MI",
        time: "January 2026 - present",
        title: "Controls Engineer Co-Op Intern",
        description: "Developed and executed comprehensive test plans to validate PLC-based control systems and automated equipment functionality.\n" +
            "Diagnosed and resolved control logic and system performance issues through structured testing and root-cause analysis.\n" +
            "Collaborated cross-functionally during system validation and commissioning to ensure reliable deployment of industrial automation solutions"
    },
    {
        location: "Kettering University, Flint, MI",
        time: "Nov 2025 - present",
        title: "FIRST Robotics center assistant",
        description: "Set up and monitor robotic competitions, assist teams with equipment, and monitor teams while in center"
    },
    {
        location: "Genesee Early College, Flint, MI",
        time: "August 2022 - May 2025",
        title: "Science teacher's assistant",
        description: "Volunteered to help with setting up labs, monitoring tests, and tutoring students for over 400 hours during high school."
    },
    {
        location: "Kettering University, Flint, MI",
        time: "August 2024 - December 2024",
        title: "Video Game Development Intern",
        description: "Worked closely with a Kettering professor on building a 3d video game using C# in the Unity engine."
    },
    {
        location: "Kettering University, Flint, MI",
        time: "June 2024 - August 2024",
        title: "Summer camp assistant",
        description: "Taught students about basics of programming a robot in Java during the Robotic summer camps Kettering hosted"
    }
]
export default function Experience() {
    return (
        <section id = "experience" className = "experience">
            <h2 className = "experience-title">Experience</h2>

            <div className="experiences">
                {experiences.map((experience, i) => (
                    <div
                        key={i}
                        className="card">
                        <div className = "details">
                            <h3 className="card-title">{experience.title}</h3>
                            <p className="time">{experience.time}</p>
                        </div>
                        <p className="location">{experience.location}</p>
                        <p className="description">{experience.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}