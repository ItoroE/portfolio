const projects = [
    {
        name: "Yuwo",
        description: "A Peer to Peer Fintech Solution",
        href: "https://yuwo.app",
        iconClass: "project-icon--yuwo",
        summary: "Yuwo is a peer-to-peer fintech app built for the moments when shared money gets messy, like trips and group dinners. Most payment apps only move money between two people. Yuwo is built around groups: you can split group bills, see at a glance who owes what, and use a network map to see how money flows across your friends. The goal is a clean, simple experience where you always know what you owe. Yuwo is launching mid-November to early December.",
        iconNote: "Click the icon to join the waitlist",
    },
    {
        name: "Emote",
        description: "An Emotion-Conditioned Music Generator",
        href: "https://github.com/ItoroE/Updating-Emote-to-ENotes",
        iconClass: "project-icon--emote",
        summary: "This project is an emotion-conditioned music generator that takes in human expressions and creates live music, shifting the music to match the emotion input (for example, a sad face makes the music sound sadder). I created this HCI-based project to introduce more interesting ways for people to interact with technology. Using machine learning, I created a VQ-VAE based on Meta's EnCodec model and trained a transformer on the emotion-labeled outputs (tokens) of the VQ-VAE. This is an updated approach to my senior thesis, which attempted emotion-labeled music generation with a conditional VAE.",
        iconNote: "Click the icon to view the code",
    },
    {
        name: "Taskmaster",
        description: "An RL powered Scheduling Agent",
        href: "/taskmaster.pdf",
        iconClass: "project-icon--taskmaster",
        summary: "Taskmaster is a reinforcement learning research project that takes on an online version of the classic job scheduling problem: where do you fit a new task when you don't know exactly how long anything will take? Built with two teammates for Princeton's COS 435, our agent combines PPO with a pointer network to learn task durations and arrival patterns, then places each new task into a live schedule. Over training, it learned to leave strategic gaps for urgent tasks that might arrive later, and to fill open slots when they would otherwise go to waste.",
        iconNote: "Click the icon to read the full paper",
    },
];

export default function Projects() {
    return (
        <main className="projects-list">
            {projects.map((project) => (
                <article className="project-card" key={project.name}>
                    <div>
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
                        <p className="project-icon-note">{project.iconNote}</p>
                    </div>
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