import Image from "next/image";

export default function quoteGenerator(){
    return(
        <section id = "project-page" className = "project-page">
            <div className = "deliverable">
                <div className = "project-title">
                    <p>Richard Siken Quote Generator | Next.js, React, JavaScript, JSON, PDF Parsing</p>
                </div>

                <a href="https://richard-siken-quote-generator.vercel.app/" target="_blank">
                    <Image
                        src="/project-thumbnails/siken-quote-generator-thumbnail.png"
                        alt="Image of the Richard Siken Quote Generator Website"
                        width = {500}
                        height = {500}
                        className = "projects-image"
                    />
                </a>

                <div className="projects-links">
                    <Image src= "/Icons/github.svg" alt="GitHub" className="contact-icon" width = {500} height = {500}/>
                    <a href = "https://github.com/Josink/richard-siken-quote-generator" target="_blank">GitHub</a>
                </div>
            </div>

            <div className="projects-description">
                <ul className="project-bullets">
                    <li>Developed a Next.js/React web application that generates random quotes from Richard Siken&#39;s Crush
                        and War of the Foxes based on sentence-level text parsing.
                    </li>
                    <li>Built a data-processing script to extract and parse poem text from PDF documents, identify
                        complete sentences, and convert the processed data into structured JSON for use by the
                        application.
                    </li>
                    <li>Implemented interactive features allowing users to generate new quotes, copy quotes directly to
                        their clipboard, and share quotes to Tumblr and X.
                    </li>
                    <li>Designed the application to dynamically retrieve and display quote data through a responsive
                        React interface.
                    </li>
                </ul>
            </div>

        </section>
    );
}