const projects = [
    {
        title: "FIRST Robotics 2025 Season Robot Code(Team 4998)",
        description: "This is the code for Team TESLA(4998)'s 2025 robot. I was the lead programmer on the team and wrote this solely. " +
            "This program uses Java and uses an object-oriented framework. This program allows the operator to control the robot with input " +
            "from a console controller and to also move autonomously. I implemented path-planning and vision software in this project, and " +
            "retrieved data from sensors on the robot and used it to adjust the robot's position or actions.",
        image: "/project-thumbnails/frc-2025-code-thumbnail.png"
    },
    {
        title:"Weather App",
        description: "This is a program that takes in the name of a city and returns weather conditions in the city. This program uses HTML, CSS, " +
            "and JavaScript. It also uses data from an open-source weather API called Open-Meteo.",
        image: "/project-thumbnails/weather-app-thumbnail.png"
    },
    {
        title: "Waterdrop Game",
        description: "A simple slider game that uses LibGDX which is cross-platform Java game development framework based on OpenGL. " +
            "It can be controlled using the arrow keys on the keyboard or touchscreen. This program uses Java.",
        image: "/project-thumbnails/waterdrop-game-thumbnail.png"
    },
    {
        title: "Computer Science Algorithms Website",
        description: "An extra credit assignment for my CS 203-Computing and Algorithms III class. This is a website that provides information " +
            "about the most common sorting and searching algorithms used in the computer science field and allows the user to create an account and " +
            "run instances of the algorithms. The website saves all data from the previously ran instances in a dashboard available to the user. " +
            "*Takes a while to load*",
        image: "/project-thumbnails/algorithms-website-thumbnail.png"
    },
    {
        title: "Break-Out Game",
        description: "A simple game using LIBGDX framework that features a paddle, balls, and breakout tiles that need to be destroyed.",
        image: "/project-thumbnails/breakout-game-thumbnail.png"
    },
    {
        title: "Richard Siken Quote Generator*In progress",
        description: "A program that randomly generates a quote from the works or \"Crush\" and \"War Of The Foxes\" by Richard Siken and " +
            "displays it along with the name of the poem and the work it's from.",
        image: "/project-thumbnails/siken-quote-generator-website-thumbnail.png"
    }
]

export default function Projects() {
    return (
        <section id = "projects" className = "projects">
            <h2 className = "projects-title">Projects</h2>

            <div className="projects-layout">
                {projects.map((project, i) => (
                    <div
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
                    </div>
                ))}
            </div>
        </section>
    );
}