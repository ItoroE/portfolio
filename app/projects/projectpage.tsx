const projects = [
    {
        name: "Yuwo",
        description: "A Peer to Peer Fintech Solution",
        href: "https://yuwo.app",
        iconClass: "project-icon--yuwo",
    },
    {
        name: "Emote",
        description: "An Emotion-Conditioned Music Generator",
        href: "https://example.com", // Replace with the Emote project URL.
        iconClass: "project-icon--emote",
    },
    {
        name: "Taskmaster",
        description: "An RL powered Scheduling Agent",
        href: "/taskmaster.pdf",
        iconClass: "project-icon--taskmaster",
    },
];

export default function Projects() {
    return (
        <main className="projects-list">
            {projects.map((project) => (
                <article className="project-card" key={project.name}>
                    <a
                        className={`project-icon ${project.iconClass}`}
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name} project`}
                    >
                        <span className={project.name === "Yuwo" ? "project-name--yuwo" : undefined}>
                            {project.name}
                        </span>
                    </a>
                    <div className="project-details">
                        <h1 className={project.name === "Yuwo" ? "project-name--yuwo-side" : undefined}>
                            {project.name}
                        </h1>
                        <h2>{project.description}</h2>
                    </div>
                </article>
            ))}
        </main>
    );
}