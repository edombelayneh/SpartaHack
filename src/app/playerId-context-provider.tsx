"use client";
import { createContext, useContext, useState } from "react";
import { Id } from "../../convex/_generated/dataModel";

const PlyaerIdContext = createContext<
  | {
      playerId: Id<"playerTable"> | null;
      setPlayerId: (code: Id<"playerTable">) => void;
    }
  | undefined
>(undefined);

export const PlayerIdProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [playerId, setPlayerId] = useState<Id<"playerTable"> | null>(null);

  return (
    <PlyaerIdContext.Provider value={{ playerId, setPlayerId }}>
      {children}
    </PlyaerIdContext.Provider>
  );
};

export const usePlayerId = () => {
  const context = useContext(PlyaerIdContext);
  if (!context)
    throw new Error("usePlayerId must be used within a PlayerIdProvider");
  return context;
};
