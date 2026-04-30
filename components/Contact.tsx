import GitHubIcon from "@/components/Icons/github.svg";

export default function Contact() {
    return (
        <section id = "contact" className = "contact">
            <div className = "contact-container">
                <h2 className = "contact-title">Contact me!</h2>
                <p className = "contact-spiel">
                    Have an employment opportunity or project in mind? Contact me!
                </p>
                <div className = "email">
                    <a href = "mailto:Jorsinkaiye@gmail.com">Jorsinkaiye@gmail.com</a>
                </div>
                <div className = "linkedin">
                    <a href = "https://www.linkedin.com/in/jael-ruby-sinkaiye-8b130a325/">Linkedin</a>
                </div>
                <div className = "github">
                    <GitHubIcon className = "icon"/>
                    <a href = "https://github.com/Josink" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </section>
    );
}