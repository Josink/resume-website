import Image from "next/image";

export default function frcCode() {
    return(
        <section id = "project-page" className = "project-page">
            <div className = "deliverable">
                <Image
                    src="/project-thumbnails/frc-2025-code-thumbnail.png"
                    alt="3D CAD model of Team TESLA (FRC Team 4998)'s 2025 competition robot. The robot features a red bumper,
                    front intake system with roller mechanisms, a vertical elevator for game-piece manipulation,
                    and multiple articulated subsystems for scoring and autonomous operation."
                    width = {500}
                    height = {500}
                    className = "projects-image"
                />

                <div className="projects-links">
                    <Image src= "/Icons/github.svg" alt="GitHub" className="contact-icon" width = {500} height = {500}/>
                    <a href = "https://github.com/Josink/demolition2026" target="_blank">GitHub</a>
                </div>
            </div>

            <div className="projects-description">
                <p>
                    This is the code for Team TESLA(4998)&#39;s 2025 robot. I was the lead programmer on the team and wrote this solely. This program uses Java and uses an object-oriented framework. This program allows the operator to control the robot with input from a console controller and to also move autonomously. I implemented path-planning and vision software in this project, and retrieved data from sensors on the robot and used it to adjust the robot&#39;s position or actions.                </p>
            </div>

        </section>
    );
}