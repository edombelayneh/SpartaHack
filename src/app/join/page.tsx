"use client";
import { Button, Input } from "@mui/material";
import { useState } from "react";
import { redirect } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Join() {
  const joinGameMutation = useMutation(api.functions.joinGame);
  const [gameCode, setGameCode] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [message, setMessage] = useState("");

  //   const joinTrip = () => {
  //     if (joinCode.trim() !== "" && name.trim() !== "") {
  //       alert(
  //         `Joining road trip with code: ${joinCode} and Creating new user with name: ${name}`
  //       );
  //       console.log(`Here is the join code: ${joinCode}`);
  //       console.log(`Here is the name: ${name}`);
  //       redirect("/home");
  //     } else {
  //       alert("Please fill in both fields!");
  //     }
  //   };

  const handleJoinGame = async () => {
    try {
      const result = await joinGameMutation({ gameCode, playerName, avatar });
      setMessage(`Joined game successfully! Player ID: ${result.playerId}`);
    } catch (error) {
      setMessage(`Error: `);
    }
  };

  return (
    <div className="flex flex-col items-center p-10">
      <input
        type="text"
        placeholder="Enter Game Code"
        value={gameCode}
        onChange={(e) => setGameCode(e.target.value)}
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
    </div>
  );
}
