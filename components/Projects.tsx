import Link from 'next/link';

const projects = [
    {
        title: "Team TESLA 2025 Competition Robot | Java, WPILib, Phoenix 6, PathPlanner, Limelight",
        description: "Led software development for Team TESLA (FRC 4998)'s 2025 competition robot," +
            "developing the robot control system in Java using WPILib and an object-oriented " +
            "architecture. Implemented teleoperated and autonomous functionality, including " +
            "swerve-drive control, PathPlanner autonomous routines, and vision-based " +
            "localization using Limelight. Integrated sensor data to dynamically adjust " +
            "robot positioning and behavior, and developed software for coordinating multiple " +
            "robot subsystems and mechanisms.",
        image: "/project-thumbnails/frc-2025-code-thumbnail.png",
        link: "/projects/frcCode"
    },
    {
        title:"Weather App | HTML, CSS, JavaScript, Open-Meteo API",
        description: "Developed a responsive weather web application using HTML, CSS, and vanilla JavaScript that allows users to search for cities and retrieve real-time weather conditions.\n" +
            "Integrated the Open-Meteo API to asynchronously retrieve and process weather data, dynamically updating the user interface based on API responses.\n" +
            "Implemented interactive user input and DOM manipulation to display location-specific weather information in a user-friendly interface.",
        image: "/project-thumbnails/weather-app-thumbnail.png",
        link: "/projects/weatherApp"
    },
    {
        title: "Drop — Slider Game | Java, libGDX, OpenGL",
        description: "Developed a cross-platform 2D slider game in Java using the libGDX game development framework and OpenGL.\n" +
            "Implemented keyboard and touchscreen input handling, allowing players to interact with the game across desktop and mobile platforms.\n" +
            "Structured the project using libGDX's modular architecture and Gradle build system to support desktop, Android, and web platforms.",
        image: "/project-thumbnails/waterdrop-game-thumbnail.png",
        link: "/projects/waterdropGame"
    },
    {
        title: "Algorithm Analysis Website | JavaScript, Node.js, Express, EJS, HTML, CSS",
        description: "Developed a full-stack web application for exploring and executing common sorting and searching algorithms, including Binary Search, Merge Sort, Quick Sort, Heap Sort, and others.\n" +
            "Implemented user account functionality and a personalized dashboard that allows users to configure algorithm runs, execute instances, and access their previous results.\n" +
            "Built dynamic server-rendered pages using EJS and integrated frontend forms with backend routes to process algorithm execution requests and persist user activity.\n" +
            "Designed an interactive interface for selecting algorithms and configuring test inputs, providing users with a practical way to explore algorithm behavior and performance.",
        image: "/project-thumbnails/algorithms-website-thumbnail.png",
        link: "/projects/algorithmsWebsite"
    },
    {
        title: "BreakAway Game | Java, libGDX, OpenGL",
        description: "Developed a 2D Breakout-style game in Java using the libGDX cross-platform game development framework and OpenGL.\n" +
            "Implemented core gameplay mechanics, player input, object movement, and collision-based interactions to create a responsive game experience.\n" +
            "Added keyboard and touchscreen controls to support gameplay across desktop and mobile platforms.\n" +
            "Utilized libGDX's modular architecture and Gradle build system to organize dependencies and support cross-platform development.",
        image: "/project-thumbnails/breakout-game-thumbnail.png",
        link: "/projects/breakoutGame"
    },
    {
        title: "Richard Siken Quote Generator | Next.js, React, JavaScript, JSON, PDF Parsing",
        description: "Developed a Next.js/React web application that generates random quotes from Richard Siken's Crush and War of the Foxes based on sentence-level text parsing.\n" +
            "Built a data-processing script to extract and parse poem text from PDF documents, identify complete sentences, and convert the processed data into structured JSON for use by the application.\n" +
            "Implemented interactive features allowing users to generate new quotes, copy quotes directly to their clipboard, and share quotes to Tumblr and X.\n" +
            "Designed the application to dynamically retrieve and display quote data through a responsive React interface.",
        image: "/project-thumbnails/siken-quote-generator-thumbnail.png",
        link: "/projects/quoteGenerator"
    }
]

export default function Projects() {
    return (
        <section id = "projects" className = "projects">
            <h2 className = "projects-title">Projects</h2>

            <div className="projects-layout">
                {projects.map((project, i) => (
                    <Link
                        href={project.link}
                        key={i}
                        className= {`project project-${i}`}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />

                        <div className = "project-overlay">
                            <h3 className="card-title">{project.title}</h3>
                            <p className ="description project-description">{project.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
