import Image from "next/image";

export default function breakoutGame() {
    return(
        <section id = "project-page" className = "projects">
            <Image
                src="/project-thumbnails/breakout-game-thumbnail.png"
                alt="Image of the Richard Siken Quote Generator Website"
                width = {1000}
                height = {1000}
                className = "projects-image"
            />

            <div className="projects-description">
                <p>
                    A simple slider game that uses LibGDX which is cross-platform Java game development framework based on OpenGL. It can be controlled using the arrow keys on the keyboard or touchscreen. This program uses Java.                </p>
            </div>

            <div className="projects-links">
                <a href = "https://github.com/Josink/BreakAwayGame">GitHub</a>
                <a href= "https://breakoutgamelibdgx.netlify.app/">Break-out Game</a>
            </div>
        </section>
    );
}