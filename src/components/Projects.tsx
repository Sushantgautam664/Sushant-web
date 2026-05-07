import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-[11px] text-[var(--accent)] tracking-[0.2em] mb-3">
          // featured work
        </div>
        <h2 className="text-4xl font-extrabold mb-3">Projects</h2>
        <p className="font-mono text-[13px] text-[var(--muted)] max-w-lg leading-8 mb-12">
          Selected projects from Nexolinx and personal work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <div
              key={p.num}
              className="bg-[var(--card)] border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--accent2)] transition-colors duration-300 group"
            >
              <div className="px-5 py-4 border-b border-[var(--border)] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[var(--muted)]">
                  {p.num}
                </span>
                <span
                  className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                    p.status === "LIVE"
                      ? "bg-[rgba(16,185,129,0.1)] border-[rgba(16,185,129,0.25)] text-[var(--accent3)]"
                      : "bg-[rgba(124,58,237,0.1)] border-[rgba(124,58,237,0.25)] text-[var(--accent2)]"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="font-mono text-[12px] text-[var(--muted)] leading-7 mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 bg-[var(--bg3)] border border-[var(--border)] rounded text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
