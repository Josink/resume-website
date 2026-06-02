"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    const links = [
        {id: "home", label: "Home", href: "/"},
        {id: "about", label: "About", href: "/#about"},
        {id: "experience", label: "Experience", href: "/#experience"},
        {id: "projects", label: "Projects", href: "/#projects"},
        {id: "contact", label: "Contact", href: "/#contact"},
    ];

    const isHomePage = pathname === "/";

    return (
        <nav className = "nav-wrapper">
            <ul className = "nav">
                {links.map((link) => {
                    const isActive = (!isHomePage && link.id === "projects"
                    && pathname.startsWith("/projects/")) ||
                        (isHomePage && link.id === "home");

                    return (
                        <li
                            key={link.id}
                            className={`nav-link ${isActive ? "active" : ""}`}
                        >
                            <Link href={link.href}>
                                {link.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}