import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[var(--bg2)]">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-[11px] text-[var(--accent)] tracking-[0.2em] mb-3">
          // what i do
        </div>
        <h2 className="text-4xl font-extrabold mb-3">Services</h2>
        <p className="font-mono text-[13px] text-[var(--muted)] max-w-lg leading-8 mb-12">
          From concept to deployment — Web development, SEO, and digital
          strategy under one roof.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-7 hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300 cursor-default group"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
                {s.title}
              </h3>
              <p className="font-mono text-[12px] text-[var(--muted)] leading-7 mb-4">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 bg-[var(--bg3)] border border-[var(--border)] rounded text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
