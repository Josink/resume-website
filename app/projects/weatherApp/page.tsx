import Image from "next/image";

export default function weatherApp() {
    return(
        <section id = "project-page" className = "project-page">
            <div className = "project-title">
                <p>Weather App | HTML, CSS, JavaScript, Open-Meteo API</p>
            </div>

            <div className = "project-body">

                <div className="deliverable">
                    <a href="https://jaycityweather.netlify.app/" target="_blank">
                        <Image
                            src="/project-thumbnails/weather-app-thumbnail.png"
                            alt="Image of the Weather App Website"
                            width={500}
                            height={500}
                            className="projects-image"
                        />
                    </a>
                </div>

                <div className="projects-description">
                    <ul className="project-bullets">
                        <li>Developed a responsive weather web application using HTML, CSS, and vanilla JavaScript that
                            allows users to search for cities and retrieve real-time weather conditions.
                        </li>
                        <li>Integrated the Open-Meteo API to asynchronously retrieve and process weather data,
                            dynamically
                            updating the user interface based on API responses.
                        </li>
                        <li>Implemented interactive user input and DOM manipulation to display location-specific weather
                            information in a user-friendly interface.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="projects-links">
                <Image src= "/Icons/github.svg" alt="GitHub" className="contact-icon" width = {500} height = {500}/>
                <a href = "https://github.com/Josink/WeatherApp" target="_blank">GitHub</a>
            </div>
            
        </section>
    );
}