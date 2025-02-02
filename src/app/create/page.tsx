"use client";
import { Button, Input } from "@mui/material";
import { useState } from "react";
import { redirect } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Create() {
  const createGameMutation = useMutation(api.functions.createGame);
  const joinGameMutation = useMutation(api.functions.joinGame);
  const [playerName, setPlayerName] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [message, setMessage] = useState("");
  const avatar = "../../public/defaultCow.png";

  const handleCreateGame = async () => {
    if (!playerName) {
      alert("Please enter your name before creating a game!");
    } else {
      try {
        const result = await createGameMutation();
        if (!result?.gameCode) throw new Error("Game creation failed");

        const newGameCode: string = result.gameCode;
        setGameCode(newGameCode); // Update state

        // Call handleJoinGame after gameCode is updated
        await handleJoinGame(newGameCode);
      } catch (error) {
        setMessage(`Error creating game:`);
      }
    }
  };

  const handleJoinGame = async (newGameCode: string) => {
    try {
      if (!playerName) {
        setMessage("Please enter your name before creating a game.");
        return;
      }
      const result = await joinGameMutation({
        gameCode: newGameCode,
        playerName,
        avatar,
      });
      setMessage(`Joined game successfully! Player ID: ${result.playerId}`);
    } catch (error) {
      setMessage(`Error joining game: `);
    }
  };

  return (
    <div className="flex flex-col items-center p-10">
      <input
        type="text"
        placeholder="Enter Your Name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        className="p-2 border rounded mb-2"
      />
      <Button
        onClick={handleCreateGame}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Create Game
      </Button>
      {gameCode && (
        <p className="mt-4 text-lg font-bold">Game Code: {gameCode}</p>
      )}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
