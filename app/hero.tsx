import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <main className="hero">
            <div className="hero-photo">
                <Image src="/profile.png" alt="Portrait of Itoro Ekpenyong" fill sizes="200px" priority />
            </div>
            <p className="hero-greeting">Hi, I&apos;m</p>
            <h1 className="hero-name">Itoro Ekpenyong</h1>
            <p className="hero-tagline">
                A Princeton Computer Science graduate (Class of 2026) building intuitive, engaging technology at the
                intersection of machine learning and human-computer interaction.
            </p>
            <div className="hero-actions">
                <Link className="hero-button hero-button--primary" href="/projects">View my projects</Link>
                <Link className="hero-button" href="/contact">Get in touch</Link>
            </div>
        </main>
    );
}
