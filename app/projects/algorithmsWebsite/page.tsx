import Image from "next/image";
import {JSX} from "react";

export default function algorithmsWebsite(): JSX.Element {
    return(
        <section id = "projects" className = "projects">
            <Image
                src="/project-thumbnails/algorithms-website.png"
                alt="Image of the Richard Siken Quote Generator Website"
                width = {1000}
                height = {1000}
                className = "project-image"
            />

            <div className="projects-description">
                <p>
                    An extra credit assignment for my CS 203-Computing and Algorithms III class. This is a website that provides information about the most common sorting and searching algorithms used in the computer science field and allows the user to create an account and run instances of the algorithms. The website saves all data from the previously ran instances in a dashboard available to the user. *Takes a while to load*                </p>
            </div>

            <div className="projects-links">
                <a href = "https://github.com/Josink/Sinkaiye-CS203-F25-G6-Project2-Website/blob/master/views/dashboard.ejs">GitHub</a>
                <a href= "https://sinkaiye-cs203-f25-g6-project2-website.onrender.com/">Computer Science Algorithms Website</a>
            </div>
        </section>
    );
}