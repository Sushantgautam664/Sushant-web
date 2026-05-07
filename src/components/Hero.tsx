"use client";
import { useUI } from "@/lib/UIContext";

export default function Hero() {
  const { toggleAI } = useUI();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-8 px-6 relative overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <div className="animate-fadeInUp">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.2)] rounded px-3 py-1.5 font-mono text-[11px] text-[var(--accent)] tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse2" />
            available for projects
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4">
            Sushant Gautam
            <br />
            <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">CEO & SEO&#8209;Expert</span>
            <br />
            <span className="text-[var(--accent)]">Developer.</span>
          </h1>

          <p className="font-mono text-[13px] text-[var(--muted)] leading-8 mb-8">
            Founder & CEO of{" "}
            <span className="text-[var(--accent3)]">Nexolinx</span> · Full-Stack
            Engineer
            <br />
            SEO Strategist · Building digital products
            <br />
            that scale and rank.
          </p>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={toggleAI}
              className="font-mono text-xs font-bold px-6 py-3 rounded bg-[var(--accent)] text-black hover:bg-[#00c4e0] transition-all hover:-translate-y-0.5 duration-200"
            >
              Chat with my AI →
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-mono text-xs font-bold px-6 py-3 rounded border border-[var(--accent2)] text-[var(--accent2)] hover:bg-[rgba(124,58,237,0.1)] transition-all duration-200"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Right — code block */}
        <div className="animate-fadeInUp-d2">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6 font-mono text-[12px] leading-8">
            <div>
              <span className="text-[var(--accent3)]">~/nexolinx </span>
              <span className="text-[var(--accent)]">$</span>{" "}
              <span className="text-[var(--text)]">whoami</span>
            </div>
            <div className="text-[var(--muted)]">Hello I am Sushant Gautam! CEO, Developer &amp; SEO Expert</div>
            <div className="mt-2">
              <span className="text-[var(--accent3)]">~/nexolinx </span>
              <span className="text-[var(--accent)]">$</span>{" "}
              <span className="text-[var(--text)]">cat skills.json</span>
            </div>
            <div className="text-[var(--muted)]">{"{"}</div>
            <div>
              &nbsp;&nbsp;<span className="text-[var(--accent)]">&quot;role&quot;</span>:{" "}
              <span className="text-[var(--accent2)]">&quot;Founder &amp; CEO&quot;</span>,
            </div>
            <div>
              &nbsp;&nbsp;<span className="text-[var(--accent)]">&quot;stack&quot;</span>:{" "}
              <span className="text-[var(--accent2)]">[&quot;Next.js&quot;,&quot;React&quot;,&quot;Node&quot;]</span>,
            </div>
            <div>
              &nbsp;&nbsp;<span className="text-[var(--accent)]">&quot;seo&quot;</span>:{" "}
              <span className="text-[var(--accent2)]">&quot;Technical + Strategy&quot;</span>,
            </div>
            <div>
              &nbsp;&nbsp;<span className="text-[var(--accent)]">&quot;company&quot;</span>:{" "}
              <span className="text-[var(--accent2)]">&quot;Nexolinx&quot;</span>
            </div>
            <div className="text-[var(--muted)]">{"}"}</div>
            <div className="mt-2">
              <span className="text-[var(--accent3)]">~/nexolinx </span>
              <span className="text-[var(--accent)]">$</span>{" "}
              <span
                className="inline-block w-2 h-3.5 bg-[var(--accent)] align-bottom animate-blink"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
