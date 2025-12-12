export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1.5rem",
        borderTop: "1px solid #1E293B",
        color: "#94A3B8",
      }}
    >
      <p>© {new Date().getFullYear()} Md. Serajul Islam – devvify.dev</p>
    </footer>
  );
}
