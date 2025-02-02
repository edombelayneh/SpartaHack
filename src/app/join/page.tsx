// "use client";
// import { Button, Input } from "@mui/material";
// import { useState, useRef } from "react";
// import { redirect } from "next/navigation";
// import { useMutation } from "convex/react";
// import { api } from "../../../convex/_generated/api";

// export default function Join() {
//   const joinGameMutation = useMutation(api.functions.joinGame);
//   const [gameCode, setGameCode] = useState("");
//   const [playerName, setPlayerName] = useState("");
//   const [message, setMessage] = useState("");
//   const avatar = "/defaultCow.png";

//   // Create a ref to store the first game code permanently
//   const gameCodeToDisplay = useRef<string | null>(null);

//   const handleJoinGame = async () => {
//     try {
//       if (!gameCodeToDisplay.current) {
//         gameCodeToDisplay.current = gameCode;
//       }
//       const result = await joinGameMutation({ gameCode, playerName, avatar });
//       setMessage(`Joined game successfully! Player ID: ${result.playerId}`);
//     } catch (error) {
//       setMessage(`Error: `);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-10">
//       <input
//         type="text"
//         placeholder="Enter Game Code"
//         value={gameCode}
//         onChange={(e) => setGameCode(e.target.value)}
//         className="p-2 border rounded mb-2"
//       />
//       <input
//         type="text"
//         placeholder="Enter Your Name"
//         value={playerName}
//         onChange={(e) => setPlayerName(e.target.value)}
//         className="p-2 border rounded mb-2"
//       />
//       <button
//         onClick={handleJoinGame}
//         className="bg-green-500 text-white px-4 py-2 rounded-lg"
//       >
//         Join Game
//       </button>
//       {message && <p className="mt-4">{message}</p>}
//       {gameCodeToDisplay.current && (
//         <p className="mt-2">Game Code: {gameCodeToDisplay.current}</p>
//       )}
//     </div>
//   );
// }

"use client";
import { useGameCode } from "../game-context-provider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

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

  const avatar = "/defaultCow.png";

  const handleJoinGame = async () => {
    try {
      if (!gameCodeToDisplay) {
        setGameCode(gameCode); // Uses Context API to persist globally
      }
      const result = await joinGameMutation({ gameCode, playerName, avatar });
      setMessage(`Joined game successfully! Player ID: ${result.playerId}`);
      redirectHome();
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
