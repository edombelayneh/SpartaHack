/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { useGameCode } from "../game-context-provider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { usePlayerId } from "../playerId-context-provider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Join() {
  const router = useRouter();

  // Navigate to profile page
  const redirectHome = (): void => {
    router.push("/home");
  };

  const joinGameMutation = useMutation(api.functions.joinGame);
  const [gameCode, setGameCodeState] = useState(""); // Renamed local state setter
  const [playerName, setPlayerName] = useState("");
  const [message, setMessage] = useState("");
  const { gameCode: gameCodeToDisplay, setGameCode } = useGameCode(); // Keeps context names
  const { playerId, setPlayerId } = usePlayerId();

  const avatar = "/defaultCow.png";

  const handleJoinGame = async () => {
    try {
      if (!gameCodeToDisplay) {
        setGameCode(gameCode); // Uses Context API to persist globally
      }
      const result = await joinGameMutation({ gameCode, playerName, avatar });
      setMessage(`Joined game successfully! Player ID: ${result.playerId}`);
      setPlayerId(result.playerId);
      redirectHome();
    } catch (error) {
      setMessage(`Error: `);
    }
  };

  return (
    <div className="flex flex-col items-center p-10">
      <ArrowBackIcon></ArrowBackIcon>
      <input
        type="text"
        placeholder="Enter Game Code"
        value={gameCode}
        onChange={(e) => setGameCodeState(e.target.value)} // Uses renamed setter
        className="p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Enter Your Name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        className="p-2 border rounded mb-2"
      />
      <button
        onClick={handleJoinGame}
        className="bg-green-500 text-white px-4 py-2 rounded-lg"
      >
        Join Game
      </button>
      {message && <p className="mt-4">{message}</p>}
      {gameCodeToDisplay && (
        <p className="mt-2">Game Code: {gameCodeToDisplay}</p>
      )}
    </div>
  );
}
