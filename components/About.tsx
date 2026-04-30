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

export default function Education() {
    return (
        <section id = "about" className = "about">
            <div className = "personal-info">
                <h1 className = "personal-info-intro">
                    I&#39;m a college student at Kettering University majoring in Computer Science with
                    a concentration in Computer Gaming, and minoring in Computer Engineering. I&#39;m highly
                    adaptable and self-motivated and look forward to roles that allow me to show-case creativity.
                    I&#39;m currently looking for internship/co-op roles in any computer-science related fields,
                    especially any that lie in UI and Web
                    development/design and video game programming.
                </h1>

                <h3 className = "personal-info-text">
                    <p>
                        I was dual-enrolled at the University of Michigan-Flint during high school, so although
                        this is my freshman year in college, I&#39;m a sophomore by credit. During High School,
                        I was the captain of the programming/electrical subteam on my FIRST Robotics team.
                        I was also student president in my senior year, treasurer for Key club, a volunteer-based club,
                        and secretary for NHS. I was a member of my High School E-sports club and a student mentor.
                        I also volunteered as a teaching assistant for my High School science teacher for over 300 hours.
                        During High School, I was also enrolled in the Genesee Career Institute where I learned how to weld and
                        specialized in aluminum/stainless steel TIG welding.
                    </p>

                    <p>
                        During college, I became a member of my university&#39;s chapter of the National Society for
                        Black engineers, the Black Student&#39;s Union, and Volleyball club. I work on campus for our
                        IT department and Robotics center. In my free time, I also volunteer as a mentor for my previous
                        High School&#39;s Robotics club. My hobbies are reading, playing video games, creating video games,
                        web development, baking, and playing the violin. I&#39;m familiar with applications such as Unity,
                        Onshape, Git, Sourcetree, Microsoft Office, Google Suite, and Jira. I&#39;m experienced with Java,
                        C#, C++, Next.js/React, CSS, HTML. I&#39;m also skilled at writing and executing Test Plans.
                    </p>
                </h3>
            </div>

            <div className = "education">
                <h1 className = "education-title">Education</h1>
                {about.map((about, i) => (
                    <div key = {i} className = "edu">
                        <div className = "details">
                            <h1 className ="school">{about.school}</h1>
                            <h1 className = "time">{about.time}</h1>
                        </div>
                        <h1 className = "description">{about.description}</h1>
                    </div>
                ))}
            </div>
        </section>
    );
}