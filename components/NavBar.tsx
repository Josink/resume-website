"use client";
import React, {useEffect, useState} from "react";

export default function NavBar() {
    const links = [
        {id: "home", label: "Home"},
        {id: "about", label: "About"},
        {id: "experience", label: "Experience"},
        {id: "projects", label: "Projects"},
        {id: "contact", label: "Contact"},
    ];
    const [active, setActive] = useState("Home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting){
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className = "nav-wrapper">
            <ul className = "nav">
                {links.map((link) => (
                    <li key = {link.id} className = {`nav-link ${active === link.id ? "active" : ""}`}>
                        <a href={`#${link.id}`}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}