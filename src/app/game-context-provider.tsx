"use client";
import { createContext, useContext, useState } from "react";

const GameCodeContext = createContext<
  { gameCode: string | null; setGameCode: (code: string) => void } | undefined
>(undefined);

export const GameCodeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [gameCode, setGameCode] = useState<string | null>(null);

  return (
    <GameCodeContext.Provider value={{ gameCode, setGameCode }}>
      {children}
    </GameCodeContext.Provider>
  );
};

export const useGameCode = () => {
  const context = useContext(GameCodeContext);
  if (!context)
    throw new Error("useGameCode must be used within a GameCodeProvider");
  return context;
};
