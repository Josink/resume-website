"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
    const bubbleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const bubble = bubbleRef.current;

        if (!bubble) return;

        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        const move = () => {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;

            bubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(move);
        }

        const handleMouseMove = (e: MouseEvent) => {
            tgX = e.clientX;
            tgY = e.clientY;
        }

        window.addEventListener("mousemove", handleMouseMove);

        move();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    return (
        <section id = "home" className = "hero">

            <div className="gradient-bg">

                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>

                <div className="gradients-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                    <div ref = {bubbleRef} className = "interactive"></div>
                </div>

            </div>

            <div className= "hero-text">
                <h1 className = "hero-greeting">
                    Hello, <br /> I&#39;m Jay
                </h1>
            </div>

        </section>
);
}