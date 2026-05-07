import Image from "next/image";
import { OWNER, SKILLS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Avatar */}
          <div className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0 bg-[var(--card)] border border-[var(--border)] rounded-lg flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(0,229,255,0.1), transparent 60%), radial-gradient(circle at 70% 70%, rgba(124,58,237,0.1), transparent 60%)",
              }}
            />
            <Image
              src="/sushant.jpg"
              alt="Sushant Gautam"
              fill
              className="object-cover relative z-10"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <div className="font-mono text-[11px] text-[var(--accent)] tracking-[0.2em] mb-3">
              // about me
            </div>
            <h2 className="text-4xl font-extrabold mb-4">
              The Builder Behind{" "}
              <span className="text-[var(--accent)]">Nexolinx</span>
            </h2>

            {/* Role badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="font-mono text-[11px] px-3 py-1 rounded border border-[rgba(124,58,237,0.3)] bg-[rgba(124,58,237,0.1)] text-[var(--accent2)] tracking-wide">
                CEO & Founder
              </span>
              <span className="font-mono text-[11px] px-3 py-1 rounded border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.1)] text-[var(--accent)] tracking-wide">
                Developer
              </span>
              <span className="font-mono text-[11px] px-3 py-1 rounded border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.1)] text-[var(--accent3)] tracking-wide">
                SEO Expert
              </span>
            </div>

            <p className="font-mono text-[13px] text-[var(--muted)] leading-8 mb-4">
              {OWNER.bio1}
            </p>
            <p className="font-mono text-[13px] text-[var(--muted)] leading-8 mb-6">
              {OWNER.bio2}
            </p>

            {/* Skill bars */}
            <div className="grid grid-cols-2 gap-2">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-[var(--card)] border border-[var(--border)] rounded px-3 py-2 flex items-center justify-between gap-3"
                >
                  <span className="font-mono text-[11px] text-[var(--text)] whitespace-nowrap">
                    {skill.name}
                  </span>
                  <div className="w-14 h-0.5 bg-[var(--border)] rounded-full overflow-hidden flex-shrink-0">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${skill.pct}%`, background: skill.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
