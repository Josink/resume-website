export default function Contact() {
    return (
        <section id = "contact" className = "contact">
            <div className = "contact-container">
                <h2 className = "contact-title">Contact me!</h2>
                <p className = "contact-spiel">
                    Have an employment opportunity or project in mind? Contact me!
                </p>
                <div className = "contact-link">
                    <img src= "/Icons/gmail.svg" alt="Gmail" className="contact-icon" />
                    <a href = "mailto:Jorsinkaiye@gmail.com" target="_blank" rel="noopener noreferrer">Jorsinkaiye@gmail.com</a>
                </div>
                <div className = "contact-link">
                    <img src= "/Icons/linkedin.svg" alt="LinkedIn" className="contact-icon" />
                    <a href = "https://www.linkedin.com/in/jael-ruby-sinkaiye-8b130a325/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </div>
                <div className = "contact-link">
                    <img src= "/Icons/github.svg" alt="GitHub" className="contact-icon" />
                    <a href = "https://github.com/Josink" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </section>
    );
}