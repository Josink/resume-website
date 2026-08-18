import Image from "next/image";

export default function frcCode() {
    return(
        <section id = "project-page" className = "project-page">
            <div className="project-title">
                <p>Team TESLA 2025 Competition Robot | Java, WPILib, Phoenix 6, PathPlanner, Limelight</p>
            </div>

            <div className = "project-body">
                <div className="deliverable">
                    <Image
                        src="/project-thumbnails/frc-2025-code-thumbnail.png"
                        alt="3D CAD model of Team TESLA (FRC Team 4998)'s 2025 competition robot. The robot features a red bumper,
                    front intake system with roller mechanisms, a vertical elevator for game-piece manipulation,
                    and multiple articulated subsystems for scoring and autonomous operation."
                        width={500}
                        height={500}
                        className="projects-image"
                    />

                </div>

                <div className="projects-description">
                    <p>
                        Led software development for Team TESLA (FRC 4998)&#39;s 2025 competition robot, developing the
                        robot control system in Java using WPILib and an object-oriented architecture. Implemented
                        teleoperated and autonomous functionality, including swerve-drive control, PathPlanner
                        autonomous routines, and vision-based localization using Limelight. Integrated sensor data to
                        dynamically adjust robot positioning and behavior, and developed software for coordinating
                        multiple robot subsystems and mechanisms.
                    </p>
                </div>
            </div>

            <div className="projects-links">
                <Image src="/Icons/github.svg" alt="GitHub" className="contact-icon" width={500} height={500}/>
                <a href="https://github.com/Josink/demolition2026" target="_blank">GitHub</a>
            </div>

        </section>
    );
}