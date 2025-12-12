export default function Home() {
  return (
    <section style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>Hi, I'm Md. Serajul Islam 👋</h1>
      <h2>Full-Stack Software Engineer</h2>
      <p style={{ marginTop: "1rem", color: "#94A3B8" }}>
        I build scalable SaaS platforms using React, Next.js, Laravel, and
        Node.js.
      </p>
      <div style={{ marginTop: "2rem" }}>
        <a href="/about" style={{ marginRight: "1rem", color: "#38BDF8" }}>
          View Resume
        </a>
        <a href="/projects" style={{ color: "#38BDF8" }}>
          See Projects
        </a>
      </div>
    </section>
  );
}
