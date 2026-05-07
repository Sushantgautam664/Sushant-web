import { OWNER } from "@/lib/data";

const stats = [
  { num: OWNER.projects, label: "projects shipped" },
  { num: OWNER.experience + " yrs", label: "experience" },
  { num: OWNER.seoRank, label: "SEO rankings achieved" },
  { num: "1", label: "company founded" },
];

export default function Stats() {
  return (
    <div className="py-8 px-6 bg-[var(--bg2)] border-t border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-mono text-3xl font-bold text-[var(--accent)]">
              {s.num}
            </div>
            <div className="font-mono text-[11px] text-[var(--muted)] tracking-widest mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
