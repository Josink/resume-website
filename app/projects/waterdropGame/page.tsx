import Image from "next/image";

export default function waterdropGame() {
    return(
        <section id = "project-page" className = "project-page">
            <div className = "deliverable">
                <a href="https://waterdropgame.netlify.app/" target="_blank">
                    <Image
                        src="/project-thumbnails/waterdrop-game-thumbnail.png"
                        alt="Image of the Richard Siken Quote Generator Website"
                        width = {500}
                        height = {500}
                        className = "projects-image"
                    />
                </a>

                <div className="projects-links">
                    <Image src= "/Icons/github.svg" alt="GitHub" className="contact-icon" width = {500} height = {500}/>
                    <a href = "https://github.com/Josink/Drop" target="_blank">GitHub</a>
                </div>
            </div>

            <div className="projects-description">
                <ul className="project-bullets">
                    <li>Developed a cross-platform 2D slider game in Java using the libGDX game development framework and
                        OpenGL.
                    </li>
                    <li>Implemented keyboard and touchscreen input handling, allowing players to interact with the game
                        across desktop and mobile platforms.
                    </li>
                    <li>Structured the project using libGDX&#39;s modular architecture and Gradle build system to support
                        desktop, Android, and web platforms. </li>
                </ul>
            </div>
        </section>
    );
}