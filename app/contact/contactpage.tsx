const contacts = [
    {
        label: "Email",
        value: "itorekpen@gmail.com", 
        href: "mailto: itorekpen@gmail.com",
    },
    {
        label: "Phone",
        value: "(903) 291-7283", 
        href: "tel:+19032917283",
    },
    {
        label: "GitHub",
        value: "github.com/ItoroE", 
        href: "https://github.com/ItoroE",
    },
];

export default function Contact() {
    return (
        <main className="contact-page">
            <h1>Get in touch</h1>
            <p className="contact-intro">
                Have a question, an opportunity, or just want to say hi? Reach me through any of these.
            </p>
            <ul className="contact-list">
                {contacts.map((contact) => (
                    <li key={contact.label}>
                        <a
                            className="contact-card"
                            href={contact.href}
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                        >
                            <span className="contact-label">{contact.label}</span>
                            <span className="contact-value">{contact.value}</span>
                            <span className="contact-arrow" aria-hidden="true">→</span>
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
}
