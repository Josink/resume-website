import Image from "next/image";
import {JSX} from "react";

export default function weatherApp(): JSX.Element {
    return(
        <section id = "projects" className = "projects">
            <Image
                src="/project-thumbnails/weather-app-thumbnail.png"
                alt="Image of the Richard Siken Quote Generator Website"
                width = {1000}
                height = {1000}
                className = "project-image"
            />

            <div className="projects-description">
                <p>
                    This is a program that takes in the name of a city and returns weather conditions in the city. This program uses HTML, CSS, and JavaScript. It also uses data from an open-source weather API called Open-Meteo.
                </p>
            </div>

            <div className="projects-links">
                <a href = "https://github.com/Josink/WeatherApp">GitHub</a>
                <a href= "https://jaycityweather.netlify.app/">Weather App</a>
            </div>
        </section>
    );
}