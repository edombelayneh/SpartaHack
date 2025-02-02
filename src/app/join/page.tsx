"use client";
import { Button, Input } from "@mui/material";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function Join() {
  const [joinCode, setJoinCode] = useState("");
  const [name, setName] = useState("");

  const joinTrip = () => {
    if (joinCode.trim() !== "" && name.trim() !== "") {
      alert(
        `Joining road trip with code: ${joinCode} and Creating new user with name: ${name}`
      );
      console.log(`Here is the join code: ${joinCode}`);
      console.log(`Here is the name: ${name}`);
      redirect("/home");
    } else {
      alert("Please fill in both fields!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Input
        type="text"
        placeholder="Enter Code"
        value={joinCode}
        onChange={(e) => setJoinCode(e.target.value)}
        className="border p-2 rounded-lg"
      />
      <Input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded-lg"
      />
      <Button
        onClick={joinTrip}
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Join
      </Button>
    </div>
  );
}
