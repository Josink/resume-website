import Image from "next/image";

export default function quoteGenerator(){
    return(
        <section id = "projects" className = "projects">
            <Image
                src="/project-thumbnails/siken-quote-generator-thumbnail.png"
                alt="Image of the Richard Siken Quote Generator Website"
                width = {1000}
                height = {1000}
                className = "project-image"
            />

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

            <div className="projects-links">
                <a href = "https://github.com/Josink/richard-siken-quote-generator">GitHub</a>
                <a href= "https://richard-siken-quote-generator.vercel.app/">Richard Siken Quote Generator</a>
            </div>
        </section>
    );
}