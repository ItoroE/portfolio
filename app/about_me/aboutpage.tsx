import Image from "next/image";


const photo = "";

const intro = ""; 

const sections = [
    {
        label: "Education",
        content: "", 
    },
    {
        label: "Experience",
        content: "", 
    },
    {
        label: "Skills",
        content: "",
    },
    {
        label: "Hobbies",
        content: "", 
    },
];

export default function About() {
    return (
        <main className="about-page">
            <section className="about-hero">
                <div className="about-photo">
                    {photo ? (
                        <Image src={photo} alt="Portrait of me" fill sizes="180px" />
                    ) : (
                        <span>Add photo</span>
                    )}
                </div>
                <div className="about-intro">
                    <h1>About Me</h1>
                    <p className="about-text">{intro}</p>
                </div>
            </section>
            {sections.map((section) => (
                <section className="about-section" key={section.label}>
                    <h2>{section.label}</h2>
                    <hr className="project-divider" />
                    <p className="about-text">{section.content}</p>
                </section>
            ))}
        </main>
    );
}
