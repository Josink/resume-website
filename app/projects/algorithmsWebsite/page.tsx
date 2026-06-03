import Image from "next/image";

export default function algorithmsWebsite() {
    return(
        <section id = "project-page" className = "project-page">
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
                <p>
                    An extra credit assignment for my CS 203-Computing and Algorithms III class. This is a website that provides information about the most common sorting and searching algorithms used in the computer science field and allows the user to create an account and run instances of the algorithms. The website saves all data from the previously ran instances in a dashboard available to the user. *Takes a while to load*                </p>
            </div>

        </section>
    );
}