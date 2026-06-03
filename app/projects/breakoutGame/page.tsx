import Image from "next/image";

export default function breakoutGame() {
    return(
        <section id = "project-page" className = "project-page">
            <div className = "deliverable">
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
                    <a href = "https://github.com/Josink/BreakAwayGame" target="_blank">GitHub</a>
                </div>
            </div>

            <div className="projects-description">
                <p>
                    A simple slider game that uses LibGDX which is cross-platform Java game development framework based on OpenGL. It can be controlled using the arrow keys on the keyboard or touchscreen. This program uses Java.                </p>
            </div>

        </section>
    );
}