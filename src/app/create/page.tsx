/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { Button, Typography, TextField, Box } from "@mui/material";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Create() {
  const createGameMutation = useMutation(api.functions.createGame);
  const joinGameMutation = useMutation(api.functions.joinGame);
  const [playerName, setPlayerName] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [message, setMessage] = useState("");
  const avatar = "/BrownCow.png";

  const router = useRouter();
  const redirectHome = () => {
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
        avatar,
      });
      setMessage(`You created a game successfully!`);
    } catch (error) {
      console.error(error);
      setMessage(`Error joining game:`);
    }
  };

  return (
    <Box className="flex flex-col items-center p-10">
      <ArrowBackIcon className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white text-3xl cursor-pointer" />
      <Typography variant="h1" fontWeight="bold" className="text-2xl font-bold">
        My Cows: Road Trip Wrapped
      </Typography>
      <TextField
        label="Enter Your Name"
        variant="outlined"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        className="mb-4 w-64 bg-white rounded"
      />
      <Button
        onClick={handleCreateGame}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-64"
      >
        Create Game
      </Button>
      {gameCode && (
        <Typography
          variant="h5"
          fontWeight="bold"
          className="mt-4 text-green-400"
        >
          Game Code: {gameCode}
        </Typography>
      )}
      {message && (
        <Typography variant="body1" className="mt-4 text-red-400">
          {message}
        </Typography>
      )}
      <Button
        onClick={redirectHome}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        Continue to Game
      </Button>
    </Box>
  );
}
