import Image from "next/image";

export default function quoteGenerator(){
    return(
        <section id = "project-page" className = "project-page">
            <div className = "deliverable">
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
                <p>
                    This is a website created using next.js/react to provide the
                    user with randomly generated quotes from Richard Siken&#39;s
                    &#34;Crush&#34; and &#34;War of the Foxes&#34;. A quote in this context is defined as
                    a full sentence ended with a period. I wrote a script to parse pdfs
                    of the poem and load them into .json file. These quotes can be copied
                    to the user&#39;s clipboard or be shared to tumblr and x directly from the
                    website.
                </p>
            </div>

        </section>
    );
}