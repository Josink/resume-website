import Image from "next/image";

export default function frcCode() {
    return(
        <section id = "projects" className = "projects">
            <Image
                src="/project-thumbnails/frc-2025-code-thumbnail.png"
                alt="Image of the Richard Siken Quote Generator Website"
                width = {1000}
                height = {1000}
                className = "project-image"
            />

            <div className="projects-description">
                <p>
                    This is the code for Team TESLA(4998)&#39;s 2025 robot. I was the lead programmer on the team and wrote this solely. This program uses Java and uses an object-oriented framework. This program allows the operator to control the robot with input from a console controller and to also move autonomously. I implemented path-planning and vision software in this project, and retrieved data from sensors on the robot and used it to adjust the robot&#39;s position or actions.                </p>
            </div>

            <div className="projects-links">
                <a href = "https://github.com/Josink/demolition2026">GitHub</a>
            </div>
        </section>
    );
}