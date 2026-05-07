export default function Footer() {
  return (
    <footer className="bg-[var(--bg2)] border-t border-[var(--border)] py-6 px-6 text-center">
      <p className="font-mono text-[11px] text-[var(--muted)]">
        © {new Date().getFullYear()}{" "}
        <span className="text-[var(--accent)]">Nexolinx</span> · Built with
        Next.js &amp; Tailwind CSS · CEO, Developer &amp; SEO Expert
      </p>
    </footer>
  );
}
