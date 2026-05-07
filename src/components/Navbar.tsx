"use client";
import { useUI } from "@/lib/UIContext";

export default function Navbar() {
  const { toggleAI, toggleTerm } = useUI();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[rgba(5,10,15,0.9)] backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <div className="font-mono text-sm tracking-widest text-[var(--accent)]">
          Sushant<span className="text-[var(--muted)]">.dev</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {["about", "services", "projects", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase hover:text-[var(--accent)] transition-colors duration-200"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            onClick={toggleTerm}
            className="font-mono text-[11px] px-3 py-1.5 rounded border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
          >
            ⌨ terminal
          </button>
          <button
            onClick={toggleAI}
            className="font-mono text-[11px] px-3 py-1.5 rounded bg-[var(--accent)] text-black font-bold hover:bg-[#00c4e0] transition-all duration-200"
          >
            ⚡ ai chat
          </button>
        </div>
      </div>
    </nav>
  );
}
