const about = [
    {
        school: "Kettering University",
        description: "Sophomore II \nBachelors of Science in Computer Science, Minor in Computer Engineering, Concentration in Computer Gaming",
        time: "October 2025 - Present"
    },
    {
        school: "Genesee Early College",
        description: "GPA: 3.88 \nSAT: 1450\n Dual-Enrollment at the University of Michigan-Flint",
        time: "September 2020 - May 2025"
    }
]

const ext = [
    {
        location: "Genesee Early College",
        description: "Mentor of local FIRST Robotics team(#4998)",
        time: "January 2026 - Present"
    },
    {
        location: "Kettering University",
        description: "Member of the National Society of Black Engineers (NSBE)",
        time: "October 2025 - Present"
    },
    {
        location: "Kettering University",
        description: "Member of the Black Student Union (BSU)",
        time: "October 2025 - Present"
    }
]

export default function Education() {
    return (
        <section id = "about" className = "about">
            <div className = "personal-info">
                <h1 className = "personal-info-intro">
                    I&#39;m a Computer Science student at Kettering University with a passion
                    for creating software that is both functional and engaging. My interests span
                    software engineering, web development, game development, robotics, and embedded
                    systems, and I enjoy tackling projects that combine creativity with technical
                    problem-solving.
                </h1>

                <h3 className = "personal-info-text">
                    <p>
                        Through my experiences as a Controls Engineering Co-op at Atlas Copco, an IT Student Worker,
                        and a Unity game development intern, I&#39;ve gained hands-on experience with software testing,
                        debugging, version control, Agile development, and technical support while working on real-world
                        engineering projects. Outside of the classroom, I&#39;ve continued to develop my leadership skills
                        by mentoring a FIRST Robotics team.
                    </p>

                    <p>
                        I enjoy building applications that make an impact—from responsive web applications and
                        interactive games to robotics software and automation tools. My technical toolkit
                        includes Java, C++, C#, JavaScript, HTML, CSS, React/Next.js, Git, Unity, and Jira,
                        and I&#39;m always looking for opportunities to learn new technologies and expand my skills.
                    </p>

                    <p>When I&#39;m not coding, you&#39;ll probably find me mentoring robotics students, reading, baking,
                        playing volleyball, or working on personal software projects. I&#39;m always excited to connect
                        with others who share a passion for technology and innovation.
                    </p>
                </h3>
            </div>

            <div className = "edetails">
                <div className="education">
                    <h1 className="education-title">Education</h1>
                    {about.map((about, i) => (
                        <div key={i} className="edu">
                            <div className="details">
                                <h6 className="school">{about.school}</h6>
                                <h6 className="time">{about.time}</h6>
                            </div>
                            <h1 className="description">{about.description}</h1>
                        </div>
                    ))}
                </div>

                <div className="extracurriculars">
                    <h1 className="extracurricular-title">Extracurriculars</h1>
                    {ext.map((ext, i) => (
                        <div key={i} className="edu">
                            <div className="details">
                                <h1 className="location">{ext.location}</h1>
                                <h1 className="time">{ext.time}</h1>
                            </div>
                            <h1 className="description">{ext.description}</h1>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
