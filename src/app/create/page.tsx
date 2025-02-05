/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { Button } from "@mui/material";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useRouter } from "next/navigation";

export default function Create() {
  const createGameMutation = useMutation(api.functions.createGame);
  const joinGameMutation = useMutation(api.functions.joinGame);
  const [playerName, setPlayerName] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [message, setMessage] = useState("");
  const avatar = "/BrownCow.png";

  const router = useRouter();
  const redirectProfile = (): void => {
    router.push("/home");
  };

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
        console.error(error); // Log the error to the console
        setMessage(`Error creating game`);
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
        avatar
      });
      setMessage(`You joined the game successfully!`);
    } catch (error) {
      console.error(error);
      setMessage(`Error joining game:`);
    }
  };

  return (
    <div className="flex flex-col items-center p-10"
        style={{
          height: "100vh",
          width: "100vw",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundImage: "url('/CowWave.png')",
          backgroundSize: "100% 100%",
        }}
        id="createPage"
      >
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
      <Button
        onClick={redirectProfile}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Continue to Game
      </Button>
    </div>
  );
}
