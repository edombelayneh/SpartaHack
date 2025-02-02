"use client";
import { useState } from "react";
import { Button, Input } from "@mui/material";
import { redirect } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function RoadTripPage() {
  const createGameMutation = useMutation(api.functions.createGame);
  const [gameCode, setGameCode] = useState("");

  const handleCreateGame = async () => {
    const result = await createGameMutation();
    setGameCode(result.gameCode);
  };

  const redirectToJoin = () => {
    redirect("/join");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        height: "80vh",
        backgroundColor: "#f9fef9",
      }}
    >
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold">My Cows:</h1>
        <h2 className="text-xl">Road Unwrapped</h2>
        {/* making both buttons vertically stacked */}
        <div className="flex flex-col items-center p-10">
          <Button
            onClick={handleCreateGame}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Create Game
          </Button>
          {gameCode && (
            <p className="mt-4 text-lg font-bold">Game Code: {gameCode}</p>
          )}
        </div>
        <div style={{ padding: "5px" }}>
          <Button
            onClick={redirectToJoin}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Join
          </Button>
        </div>
      </div>
    </div>
  );
}
