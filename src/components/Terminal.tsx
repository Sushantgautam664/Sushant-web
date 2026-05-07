"use client";
import { useState, useRef, useEffect } from "react";
import { useUI } from "@/lib/UIContext";
import { CV_TEXT, OWNER } from "@/lib/data";

interface TermLine {
  type: "accent" | "success" | "err" | "purple" | "out" | "cmd" | "prompt";
  text: string;
}

const COMMANDS: Record<string, () => TermLine[] | "__CLEAR__"> = {
  help: () => [
    { type: "accent", text: "Available commands:" },
    { type: "out", text: "  whoami          — who is this?" },
    { type: "out", text: "  skills          — list all skills" },
    { type: "out", text: "  projects        — view projects" },
    { type: "out", text: "  services        — list services" },
    { type: "out", text: "  contact         — contact info" },
    { type: "out", text: "  cv              — print full CV" },
    { type: "out", text: "  stack           — tech stack" },
    { type: "out", text: "  nexolinx        — about the company" },
    { type: "out", text: "  social          — social links" },
    { type: "out", text: "  hire            — hiring info" },
    { type: "out", text: "  clear           — clear terminal" },
  ],
  whoami: () => [
    { type: "success", text: `CEO & Founder — ${OWNER.company}` },
    { type: "out", text: "Full-Stack Developer · SEO Expert · Builder" },
    { type: "out", text: `${OWNER.experience} years · ${OWNER.projects} projects shipped` },
  ],
  skills: () => [
    { type: "accent", text: "Core Skills:" },
    { type: "purple", text: "  Frontend  " },
    { type: "out", text: "  Next.js 14 · React · TypeScript · Tailwind" },
    { type: "purple", text: "  Backend   " },
    { type: "out", text: "  Node.js · REST APIs · PostgreSQL · Redis" },
    { type: "purple", text: "  SEO       " },
    { type: "out", text: "  Technical SEO · Core Web Vitals · GA4 · Ahrefs" },
    { type: "purple", text: "  AI/Cloud  " },
    { type: "out", text: "  OpenAI · Claude · AWS · Vercel · Docker" },
  ],
  projects: () => [
    { type: "accent", text: "Featured Projects:" },
    { type: "success", text: "  [LIVE] 01 — Nexolinx Platform (Next.js 14)" },
    { type: "success", text: "  [LIVE] 02 — SEO Analytics Suite (React + Python)" },
    { type: "purple", text: "  [DEV]  03 — AI Content Engine (OpenAI + Node)" },
    { type: "success", text: "  [LIVE] 04 — E-Commerce Accelerator (Shopify)" },
  ],
  services: () => [
    { type: "accent", text: "Services Offered:" },
    { type: "out", text: "  ⚡  Full-Stack Development" },
    { type: "out", text: "  📈  Technical SEO & Strategy" },
    { type: "out", text: "  🏢  Digital Strategy & Growth" },
    { type: "out", text: "  🔌  API & Backend Systems" },
    { type: "out", text: "  🎨  UI/UX & Design Systems" },
    { type: "out", text: "  🤖  AI Integration" },
  ],
  contact: () => [
    { type: "accent", text: "Contact Information:" },
    { type: "out", text: `  📧  ${OWNER.email}` },
    { type: "out", text: `  💼  ${OWNER.linkedin}` },
    { type: "out", text: `  🐙  ${OWNER.github}` },
  ],
  cv: () =>
    CV_TEXT.split("\n").map((l) => ({
      type: (l.includes("━") ? "accent" : l.trim().startsWith("•") ? "success" : "out") as TermLine["type"],
      text: l,
    })),
  stack: () => [
    { type: "accent", text: "Tech Stack:" },
    { type: "out", text: "  next@14 · react@18 · typescript · tailwindcss" },
    { type: "out", text: "  node.js · express · postgresql · redis · prisma" },
    { type: "out", text: "  aws · vercel · docker · github-actions" },
    { type: "out", text: "  openai · anthropic · langchain · pinecone" },
  ],
  nexolinx: () => [
    { type: "accent", text: "Nexolinx — Digital Agency" },
    { type: "out", text: "  Founded & led by the CEO of this portfolio." },
    { type: "out", text: "  Specializing in web development + SEO." },
    { type: "out", text: "  Serving startups, SMBs, and enterprises." },
    { type: "success", text: "  Status: Active · Growing" },
    { type: "out", text: `  Web: ${OWNER.website}` },
  ],
  social: () => [
    { type: "accent", text: "Social & Links:" },
    { type: "out", text: `  LinkedIn    → ${OWNER.linkedin}` },
    { type: "out", text: `  GitHub      → ${OWNER.github}` },
    { type: "out", text: `  Email       → ${OWNER.email}` },
  ],
  hire: () => [
    { type: "accent", text: "Available for:" },
    { type: "success", text: "  ✓  Full-stack web projects" },
    { type: "success", text: "  ✓  SEO audits & campaigns" },
    { type: "success", text: "  ✓  Technical consulting" },
    { type: "success", text: "  ✓  Agency partnerships" },
    { type: "out", text: "" },
    { type: "out", text: `  📧  Reach out: ${OWNER.email}` },
  ],
  clear: () => "__CLEAR__",
};

const COLOR_MAP: Record<TermLine["type"], string> = {
  accent: "text-[var(--accent)]",
  success: "text-[var(--accent3)]",
  err: "text-red-400",
  purple: "text-[var(--accent2)]",
  out: "text-[var(--muted)]",
  cmd: "text-[var(--text)]",
  prompt: "text-[var(--accent3)]",
};

export default function Terminal() {
  const { termOpen, toggleTerm } = useUI();
  const [lines, setLines] = useState<TermLine[]>([
    { type: "accent", text: "Nexolinx Portfolio Terminal v1.0.0" },
    { type: "out", text: "Type 'help' for available commands" },
    { type: "out", text: " " },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (termOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [termOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  const runCmd = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setHistory((h) => [cmd, ...h]);
    setHistIdx(-1);

    const newLines: TermLine[] = [
      { type: "prompt", text: `visitor@nexolinx:~$ ${cmd}` },
    ];

    const fn = COMMANDS[cmd];
    if (!fn) {
      newLines.push({ type: "err", text: `command not found: ${cmd}. Type 'help' for commands.` });
      newLines.push({ type: "out", text: " " });
      setLines((prev) => [...prev, ...newLines]);
    } else {
      const res = fn();
      if (res === "__CLEAR__") {
        setLines([]);
        return;
      }
      newLines.push(...res);
      newLines.push({ type: "out", text: " " });
      setLines((prev) => [...prev, ...newLines]);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCmd(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistIdx((i) => {
        const next = Math.min(i + 1, history.length - 1);
        setInput(history[next] ?? "");
        return next;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistIdx((i) => {
        const next = Math.max(i - 1, -1);
        setInput(next === -1 ? "" : history[next] ?? "");
        return next;
      });
    }
  };

  return (
    <div
      className="fixed left-8 flex flex-col overflow-hidden z-[300] rounded-lg border border-[var(--border)] shadow-2xl"
      style={{
        bottom: "2rem",
        width: 600,
        maxHeight: 420,
        background: "#0a0f14",
        transform: termOpen ? "scale(1)" : "scale(0)",
        transformOrigin: "bottom left",
        transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-3 px-4 py-2.5 border-b border-[var(--border)]"
        style={{ background: "#111820" }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center font-mono text-[11px] text-[var(--muted)] tracking-widest">
          nexolinx — bash — 80×24
        </div>
        <button
          onClick={toggleTerm}
          className="bg-transparent border-none text-[var(--muted)] hover:text-[var(--accent)] cursor-pointer text-xs transition-colors duration-200"
        >
          ✕
        </button>
      </div>

      {/* Output */}
      <div
        ref={outputRef}
        className="flex-1 overflow-y-auto p-4 font-mono text-[12px] leading-7"
        style={{ minHeight: 200 }}
      >
        {lines.map((line, i) => (
          <div key={i} className="mb-0.5">
            {line.type === "prompt" ? (
              <span>
                <span className="text-[var(--accent3)]">visitor@nexolinx:~$</span>{" "}
                <span className="text-[var(--text)]">{line.text.replace("visitor@nexolinx:~$ ", "")}</span>
              </span>
            ) : (
              <span className={COLOR_MAP[line.type]}>{line.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-t border-[var(--border)]"
        style={{ background: "#0a0f14" }}
      >
        <span className="font-mono text-[12px] text-[var(--accent3)] whitespace-nowrap">
          visitor@nexolinx:~$
        </span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="enter command..."
          autoComplete="off"
          spellCheck={false}
          className="flex-1 bg-transparent border-none text-[var(--text)] font-mono text-[12px] outline-none placeholder:text-[var(--border)]"
        />
      </div>
    </div>
  );
}
