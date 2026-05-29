import Image from "next/image";

export default function waterdropGame() {
    return(
        <section id = "projects" className = "projects">
            <Image
                src="/project-thumbnails/waterdrop-game-thumbnail.png"
                alt="Image of the Richard Siken Quote Generator Website"
                width = {1000}
                height = {1000}
                className = "project-image"
            />

            <div className="projects-description">
                <p>
                    A simple slider game that uses LibGDX which is cross-platform Java game development framework based on OpenGL. It can be controlled using the arrow keys on the keyboard or touchscreen. This program uses Java.                </p>
            </div>

            <div className="projects-links">
                <a href = "https://github.com/Josink/Drop">GitHub</a>
                <a href= "https://waterdropgame.netlify.app/">Waterdrop Game</a>
            </div>
        </section>
    );
}