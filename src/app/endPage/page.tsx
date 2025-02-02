/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Card, CardContent, Typography, Button, Avatar } from "@mui/material";

const endpage: React.FC = () => {
  const router = useRouter();

  // Fetch leaderboard data (sorted by points)
  const players = useQuery(api.secondaryFunctions.getLeaderboard);

  // Navigate back to home
  const handleBack = () => {
    router.push("/home");
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-screen bg-white p-4"
      style={{ backgroundColor: "#ACE1AF" }}
    >
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>

      {/* Leaderboard List */}
      <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-lg overflow-y-auto h-3/4">
        {players && players.length > 0 ? (
          players
            // .sort((a, b) => b.points - a.points) // Sort players by points (descending)
            .map((player, index) => (
              <Card
                key={player.id}
                className="flex items-center mb-2 p-2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  marginBottom: "8px",
                }}
              >
                <Avatar src={player.avatar} className="mr-2" />
                <CardContent>
                  <Typography variant="h6" className="font-bold">
                    {index + 1}. {player.name}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    Points: {player.totalScore}
                  </Typography>
                </CardContent>
              </Card>
            ))
        ) : (
          <Typography variant="body1" className="text-center">
            No players yet!
          </Typography>
        )}
      </div>

      {/* Back Button */}
      <Button
        onClick={handleBack}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Back
      </Button>
    </div>
  );
};

export default endpage;
