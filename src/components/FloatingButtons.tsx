"use client";
import { useUI } from "@/lib/UIContext";

export default function FloatingButtons() {
  const { toggleAI, toggleTerm } = useUI();

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-[200] items-end">
      <div className="flex items-center gap-2">
        <span className="font-mono text-[10px] text-[var(--muted)] px-2 py-1 bg-[var(--card)] border border-[var(--border)] rounded whitespace-nowrap">
          AI Assistant
        </span>
        <button
          onClick={toggleAI}
          title="Open AI Chat"
          className="w-13 h-13 rounded-full border-none cursor-pointer flex items-center justify-center text-xl bg-[var(--accent)] text-black shadow-lg hover:scale-110 transition-transform duration-200"
          style={{ width: 52, height: 52 }}
        >
          ⚡
        </button>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono text-[10px] text-[var(--muted)] px-2 py-1 bg-[var(--card)] border border-[var(--border)] rounded whitespace-nowrap">
          Terminal
        </span>
        <button
          onClick={toggleTerm}
          title="Open Terminal"
          className="w-13 h-13 rounded-full border-none cursor-pointer flex items-center justify-center text-xl bg-[var(--accent2)] text-white shadow-lg hover:scale-110 transition-transform duration-200"
          style={{ width: 52, height: 52 }}
        >
          ⌨
        </button>
      </div>
    </div>
  );
}
