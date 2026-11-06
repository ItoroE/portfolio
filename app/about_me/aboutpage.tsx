import Image from "next/image";


const photo = "/profile.png";

const intro = "Passionate about problem-solving with a deep interest in human-computer interaction, consumer technology, and designing intuitive, engaging user experiences."; 

const sections = [
    {
        label: "Education",
        content: <>I graduated from Princeton University in May 2026 with a <em>Bachelor of Arts in Computer Science</em>.</>,
    },
    {
        label: "Experience",
        content: "Alongside my technical projects, much of my experience comes from leading people and projects: running a large student organization, managing student teams, and organizing community events. These roles taught me how to plan, coordinate, and deliver work with a lot of moving parts.",
        items: [
            {
                title: "Vice President, Princeton Tower Club",
                dates: "Feb 2025 – Jan 2026",
                text: "Helped lead operations and member engagement for a 300+ member club during a period of record membership growth. Coordinated large-scale events with students, alumni, and university stakeholders, improved internal processes and communication, and mentored incoming officers.",
            },
            {
                title: "Project Manager, STEM Learning Program at Princeton University",
                dates: "May 2023 – Aug 2023",
                text: "Managed timelines, deliverables, and goals across multiple student teams working on technical and academic projects. Built recurring team processes that improved collaboration and kept projects on track.",
            },
            {
                title: "Co-Organizer, KidReach Charity Tournament",
                dates: "Jun 2021 – Jul 2021",
                text: "Co-organized a 12-hour charity tennis tournament in Longview, TX that collected school supplies for local students. Handled sponsorship outreach, scheduling, volunteer coordination, and event-day logistics.",
            },
        ],
    },
    {
        label: "Skills",
        content: "",
        skills: [
            {
                group: "Languages",
                tags: ["Java", "Dart", "Python", "C++", "C", "JavaScript", "SQL"],
            },
            {
                group: "Frameworks & Tools",
                tags: ["Unity", "Three.js", "Node.js", "Blender", "Google Colab", "Visual Studio"],
            },
            {
                group: "Technical Areas",
                tags: ["Reinforcement Learning", "Human-Computer Interaction", "Full-Stack Development"],
            },
        ],
    },
    {
        label: "Hobbies",
        content: "Outside of code, you'll usually find me on the tennis court. I also play the drums, and in my spare time I like digging into cybersecurity and learning how systems can be broken and protected.",
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
                    <p className="about-text about-tagline">{intro}</p>
                </div>
            </section>
            {sections.map((section) => (
                <section className="about-section" key={section.label}>
                    <h2>{section.label}</h2>
                    <hr className="project-divider" />
                    {(section.content || !section.skills) && (
                        <p className="about-text">{section.content}</p>
                    )}
                    {section.skills?.map((skill) => (
                        <div className="skill-group" key={skill.group}>
                            <h3>{skill.group}</h3>
                            <ul className="skill-tags">
                                {skill.tags.map((tag) => (
                                    <li className="skill-tag" key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {section.items?.map((item) => (
                        <div className="about-item" key={item.title}>
                            <div className="about-item-header">
                                <h3>{item.title}</h3>
                                <span className="about-item-dates">{item.dates}</span>
                            </div>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </section>
            ))}
        </main>
    );
}
