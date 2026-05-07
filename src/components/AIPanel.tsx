"use client";
import { useState, useRef, useEffect } from "react";
import { useUI } from "@/lib/UIContext";
import { getAIResponse } from "@/lib/aiLogic";

interface Message {
  role: "user" | "ai";
  text: string;
}

const SUGGESTIONS = [
  { label: "📄 Download CV", q: "Show me the CV" },
  { label: "🛠 Services", q: "What services do you offer?" },
  { label: "🏢 Nexolinx", q: "Tell me about Nexolinx" },
  { label: "⚡ Tech Stack", q: "What is your tech stack?" },
];

export default function AIPanel() {
  const { aiOpen, toggleAI } = useUI();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hey! 👋 I'm **NEXO-AI**, the portfolio assistant of Sushant. Ask me about skills, projects, the CV, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const msgsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (aiOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [aiOpen]);

  useEffect(() => {
    if (msgsRef.current) {
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const send = (q?: string) => {
    const val = (q ?? input).trim();
    if (!val) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: val }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: getAIResponse(val) },
      ]);
    }, 600 + Math.random() * 400);
  };

  const renderText = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br/>");

  return (
    <div
      className="fixed right-8 flex flex-col overflow-hidden z-[300] rounded-xl border border-[var(--border)] bg-[var(--bg2)] shadow-2xl transition-all duration-300"
      style={{
        bottom: "9rem",
        width: 380,
        maxHeight: 520,
        transform: aiOpen ? "scale(1)" : "scale(0)",
        transformOrigin: "bottom right",
        transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      {/* Header */}
      <div className="bg-[var(--card)] border-b border-[var(--border)] px-4 py-3 flex items-center justify-between flex-shrink-0">
        <span className="font-mono text-[12px] text-[var(--accent)] tracking-widest">
          ⚡ NEXO-AI · Portfolio Assistant
        </span>
        <button
          onClick={toggleAI}
          className="bg-transparent border-none text-[var(--muted)] hover:text-[var(--accent)] cursor-pointer text-sm transition-colors duration-200"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div
        ref={msgsRef}
        className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
        style={{ minHeight: 200 }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={`font-mono text-[12px] leading-7 max-w-[90%] rounded-lg px-4 py-2.5 ${
              m.role === "ai"
                ? "self-start bg-[var(--card)] border border-[var(--border)] text-[var(--text)] rounded-tl-none"
                : "self-end bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.2)] text-[var(--accent)] rounded-tr-none"
            }`}
          >
            {m.role === "ai" && (
              <div className="text-[var(--accent)] text-[10px] tracking-widest mb-1">
                NEXO-AI
              </div>
            )}
            <span
              dangerouslySetInnerHTML={{ __html: renderText(m.text) }}
            />
          </div>
        ))}

        {/* Typing indicator */}
        {typing && (
          <div className="self-start bg-[var(--card)] border border-[var(--border)] rounded-lg rounded-tl-none px-4 py-3 flex gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] typing-dot"
              style={{ display: "inline-block" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] typing-dot"
              style={{ display: "inline-block", animationDelay: "0.2s" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] typing-dot"
              style={{ display: "inline-block", animationDelay: "0.4s" }}
            />
          </div>
        )}
      </div>

      {/* Suggestions */}
      <div className="px-4 py-2 flex gap-1.5 flex-wrap border-t border-[var(--border)] flex-shrink-0">
        {SUGGESTIONS.map((s) => (
          <button
            key={s.label}
            onClick={() => send(s.q)}
            className="font-mono text-[10px] px-2.5 py-1 bg-[var(--card)] border border-[var(--border)] rounded text-[var(--muted)] cursor-pointer hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-150 whitespace-nowrap"
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-[var(--border)] flex gap-2 flex-shrink-0">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask anything..."
          className="flex-1 bg-[var(--card)] border border-[var(--border)] rounded-md px-3 py-2 text-[var(--text)] font-mono text-[12px] outline-none focus:border-[var(--accent)] transition-colors duration-200"
        />
        <button
          onClick={() => send()}
          className="w-9 h-9 bg-[var(--accent)] border-none rounded-md text-black font-bold text-base cursor-pointer hover:bg-[#00c4e0] transition-colors duration-200 flex-shrink-0 flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
}
