import Image from "next/image";

export default function algorithmsWebsite() {
    return(
        <section id = "project-page" className = "project-page">
            <div className = "project-title">
                <p>Algorithm Analysis Website | JavaScript, Node.js, Express, EJS, HTML, CSS</p>
            </div>

            <div className = "deliverable">
                <a href="https://sinkaiye-cs203-f25-g6-project2-website.onrender.com/" target="_blank">
                    <Image
                    src="/project-thumbnails/algorithms-website-thumbnail.png"
                    alt="A web application landing page titled “ALGORITHMS” with a clean blue-and-white interface. A top navigation bar shows links such as GitHub, Algorithms, a Dashboard button, and a Log out button. The main content area introduces the site as a tool for generating and sorting integers using computer science algorithms, with references to a CS 203 course at Kettering University. Below the header are feature sections with icons describing how the system works, search algorithms, sorting algorithms, and performance analysis."
                    width = {500}
                    height = {500}
                    className = "projects-image"
                    />
                </a>

                <div className="projects-links">
                    <Image src= "/Icons/github.svg" alt="GitHub" className="contact-icon" width = {500} height = {500}/>
                    <a href = "https://github.com/Josink/Sinkaiye-CS203-F25-G6-Project2-Website/blob/master/views/dashboard.ejs" target="_blank">GitHub</a>
                </div>
            </div>

            <div className="projects-description">
                <ul className="project-bullets">
                    <li>Developed a full-stack web application for exploring and executing common sorting and searching
                        algorithms, including Binary Search, Merge Sort, Quick Sort, Heap Sort, and others.
                    </li>
                    <li>Implemented user account functionality and a personalized dashboard that allows users to
                        configure algorithm runs, execute instances, and access their previous results.
                    </li>
                    <li>Built dynamic server-rendered pages using EJS and integrated frontend forms with backend routes
                        to process algorithm execution requests and persist user activity.
                    </li>
                    <li>Designed an interactive interface for selecting algorithms and configuring test inputs, providing
                        users with a practical way to explore algorithm behavior and performance.
                    </li>
                </ul>
            </div>

        </section>
    );
}