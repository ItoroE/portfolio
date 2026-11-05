const projects = [
    {
        name: "Yuwo",
        description: "A Peer to Peer Fintech Solution",
        href: "https://yuwo.app",
        iconClass: "project-icon--yuwo",
        summary: "Yuwo is a fintech application defined for peer to peer money transfers. It’s designed to be clean cut,  What makes this different from every other fintech app??", 
    },
    {
        name: "Emote",
        description: "An Emotion-Conditioned Music Generator",
        href: "add affter i deploy",
        iconClass: "project-icon--emote",
        summary: "This project  createis a more updated version of the music generation model built for my senior thesisthe documentation down below goes through every thing I did differently between the two models, how I chose to define music between the two, and overall why the second way I chose to represent sound is a lot better. Furthermore, delving into the reason as to why the first model wasn’t accurate enough and hypothetically if we more to add more aspects of the second model to the first one is it possible. Essentially this project creates a web application in which a user can put there face", 
    },
    {
        name: "Taskmaster",
        description: "An RL powered Scheduling Agent",
        href: "/taskmaster.pdf",
        iconClass: "project-icon--taskmaster",
        summary: "Taskmaster is a research project that ", 
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
                        {/* Only Yuwo gets special styling */}
                        <span className={project.name === "Yuwo" ? "project-name--yuwo" : undefined}>
                            {project.name}
                        </span>
                    </a>
                    <div className="project-details">
                        <h1 className={project.name === "Yuwo" ? "project-name--yuwo-side" : undefined}>
                            {project.name}
                        </h1>
                        <h2>{project.description}</h2>
                        <hr className="project-divider" />
                        <p className="project-summary">{project.summary}</p>
                        <hr className="project-divider" />
                    </div>
                </article>
            ))}
        </main>
    );
}