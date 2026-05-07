"use client";
import { useState } from "react";
import { OWNER } from "@/lib/data";

const links = [
  { icon: "📧", label: "EMAIL", val: OWNER.email, href: `mailto:${OWNER.email}` },
  { icon: "🐦", label: "TWITTER / X", val: "Not added", href: "#" },
  { icon: "💼", label: "LINKEDIN", val: OWNER.linkedin, href: "#" },
  { icon: "🐙", label: "GITHUB", val: OWNER.github, href: "#" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 bg-[var(--bg2)]">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-[11px] text-[var(--accent)] tracking-[0.2em] mb-3">
          // get in touch
        </div>
        <h2 className="text-4xl font-extrabold mb-10">Let&apos;s Build Something</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Links */}
          <div>
            <p className="font-mono text-[13px] text-[var(--muted)] leading-8 mb-6">
              Have a project in mind? Want to talk SEO, development, or a
              partnership with Nexolinx? Let&apos;s connect.
            </p>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="flex items-center gap-3 bg-[var(--card)] border border-[var(--border)] rounded-md px-4 py-3.5 no-underline hover:border-[var(--accent)] transition-colors duration-200 group"
                >
                  <span className="text-xl">{l.icon}</span>
                  <div className="flex-1">
                    <div className="font-mono text-[10px] text-[var(--muted)] tracking-widest">
                      {l.label}
                    </div>
                    <div className="font-mono text-[12px] text-[var(--text)] mt-0.5 group-hover:text-[var(--accent)] transition-colors duration-200">
                      {l.val}
                    </div>
                  </div>
                  <span className="font-mono text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-200">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[var(--muted)] tracking-widest">
                NAME
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="bg-[var(--card)] border border-[var(--border)] rounded px-4 py-2.5 text-[var(--text)] font-mono text-[12px] outline-none focus:border-[var(--accent)] transition-colors duration-200"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[var(--muted)] tracking-widest">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-[var(--card)] border border-[var(--border)] rounded px-4 py-2.5 text-[var(--text)] font-mono text-[12px] outline-none focus:border-[var(--accent)] transition-colors duration-200"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[var(--muted)] tracking-widest">
                MESSAGE
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={4}
                className="bg-[var(--card)] border border-[var(--border)] rounded px-4 py-2.5 text-[var(--text)] font-mono text-[12px] outline-none focus:border-[var(--accent)] transition-colors duration-200 resize-y"
              />
            </div>
            <button
              onClick={() => setSent(true)}
              className={`font-mono text-[12px] font-bold py-3 rounded border-none cursor-pointer tracking-widest transition-all duration-200 ${
                sent
                  ? "bg-[var(--accent3)] text-black"
                  : "bg-[var(--accent)] text-black hover:bg-[#00c4e0]"
              }`}
            >
              {sent ? "MESSAGE SENT ✓" : "SEND MESSAGE"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
