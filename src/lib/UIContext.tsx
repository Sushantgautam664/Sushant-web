"use client";
import React, { createContext, useContext, useState } from "react";

interface UICtx {
  aiOpen: boolean;
  termOpen: boolean;
  toggleAI: () => void;
  toggleTerm: () => void;
}

const UIContext = createContext<UICtx>({
  aiOpen: false,
  termOpen: false,
  toggleAI: () => {},
  toggleTerm: () => {},
});

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [aiOpen, setAiOpen] = useState(false);
  const [termOpen, setTermOpen] = useState(false);
  return (
    <UIContext.Provider
      value={{
        aiOpen,
        termOpen,
        toggleAI: () => setAiOpen((v) => !v),
        toggleTerm: () => setTermOpen((v) => !v),
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  return useContext(UIContext);
}
