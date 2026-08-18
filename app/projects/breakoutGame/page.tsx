import Image from "next/image";

export default function breakoutGame() {
    return(
        <section id = "project-page" className = "project-page">
            <div className = "deliverable">
                <div className = "project-title">
                    <p>BreakAway Game | Java, libGDX, OpenGL</p>
                </div>

                <a href="https://breakoutgamelibdgx.netlify.app/" target="_blank">
                    <Image
                        src="/project-thumbnails/breakout-game-thumbnail.png"
                        alt="Screenshot of a simple Breakout-style game built with the LibGDX framework. The game features a black background with white rectangular bricks arranged in clusters near the top of the screen. Several white balls are visible moving around the play area, and a small paddle is positioned near the bottom-left corner. Some bricks have already been destroyed, leaving gaps in the formations. The objective is to bounce the balls with the paddle and break all remaining tiles."
                        width = {500}
                        height = {500}
                        className = "projects-image"
                    />
                </a>

                <div className="projects-links">
                    <Image src= "/Icons/github.svg" alt="GitHub" className="contact-icon" width = {500} height = {500}/>
                    <a href = "https://github.com/Josink/BreakAwayGame" target="_blank">GitHub</a>
                </div>
            </div>

            <div className="projects-description">
                <ul className="project-bullets">
                    <li>Developed a 2D Breakout-style game in Java using the libGDX cross-platform game development
                        framework and OpenGL.
                    </li>
                    <li>Implemented core gameplay mechanics, player input, object movement, and collision-based
                        interactions to create a responsive game experience.
                    </li>
                    <li>Added keyboard and touchscreen controls to support gameplay across desktop and mobile
                        platforms.
                    </li>
                    <li>Utilized libGDX&#39;s modular architecture and Gradle build system to organize dependencies and
                        support cross-platform development. </li>
                </ul>
            </div>

        </section>
    );
}