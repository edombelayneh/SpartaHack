"use client";
import { useState } from "react";
import { Button, Input } from "@mui/material";
import { redirect } from "next/navigation";

export default function RoadTripPage() {
  const [roadTripCode, setRoadTripCode] = useState<string | null>(null);
  const [myCows, setMyCows] = useState(0);
  const [joinCode, setJoinCode] = useState("");

  const generateCode = () => {
    const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoadTripCode(newCode);
  };

  const joinTrip = () => {
    if (joinCode.trim() !== "") {
      alert(`Joining road trip with code: ${joinCode}`);
      console.log(`Here is the join code: ${joinCode}`);
      setJoinCode(joinCode);
      redirect("/home");
    }
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
      {!roadTripCode ? (
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold">My Cows:</h1>
          <h2 className="text-xl">Road Unwrapped</h2>
          {/* making both buttons vertically stacked */}
          <div className="flex flex-col space-y-2">
            <div style={{padding: "5px"}}> 
          <Button
            onClick={generateCode}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Create +
          </Button>
          </div>
          <div style={{padding: "5px"}}> 
          <Button
            onClick={joinTrip}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Join
          </Button>
          <Input
            type="text"
            placeholder="Enter Code"
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
            className="border p-2 rounded-lg"
          />
          </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold">My Cows: {myCows}</h1>
          <h2 className="text-xl">Your Road Trip Code:</h2>
          <p className="text-3xl font-mono">{roadTripCode}</p>
        </div>
      )}
    </div>
  );
}
