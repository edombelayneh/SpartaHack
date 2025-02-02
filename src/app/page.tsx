/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { Button } from "@mui/material";
import { redirect } from "next/navigation";

export default function RoadTripPage() {
  const redirectToCreate = () => {
    redirect("/create");
  };

  const redirectToJoin = () => {
    redirect("/join");
  };

  return (
    <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   padding: "20px",
      //   height: "80vh",
      //   backgroundColor: "#f9fef9",
      // }}
      style={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundImage: "url('/CowWave.png')",
        backgroundSize: "100% 100%",
      }}
      id="startPage"
    >
      <div className="flex flex-col items-center space-y-4">
        <h1>My Cows!</h1>
        <h1 style={{ paddingTop: "0px", fontSize: "40px", margin: "0" }}>
          Roadtrip Wrapped
        </h1>
        {/* making both buttons vertically stacked */}
        {/* <div className="absolute bottom-1 left-0 right-0 flex flex-col items-center p-2 space-y-20">
          <Button
            onClick={redirectToCreate}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Create Game
          </Button>
        </div>
        <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center p-2">
          <Button
            onClick={redirectToJoin}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Join
          </Button>
        </div> */}
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
          <Button
            onClick={redirectToCreate}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Create Game
          </Button>
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
