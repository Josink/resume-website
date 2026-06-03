import Image from "next/image";

export default function weatherApp() {
    return(
        <section id = "project-page" className = "project-page">
            <div className = "deliverable">
                <a href="https://jaycityweather.netlify.app/" target="_blank">
                    <Image
                        src="/project-thumbnails/weather-app-thumbnail.png"
                        alt="Image of the Richard Siken Quote Generator Website"
                        width = {500}
                        height = {500}
                        className = "projects-image"
                    />
                </a>

                <div className="projects-links">
                    <Image src= "/Icons/github.svg" alt="GitHub" className="contact-icon" width = {500} height = {500}/>
                    <a href = "https://github.com/Josink/WeatherApp" target="_blank">GitHub</a>
                </div>
            </div>

            <div className="projects-description">
                <p>
                    This is a program that takes in the name of a city and returns weather conditions in the city. This program uses HTML, CSS, and JavaScript. It also uses data from an open-source weather API called Open-Meteo.
                </p>
            </div>

        </section>
    );
}