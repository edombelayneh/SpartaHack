/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { useRouter } from "next/navigation";
import Vehicle from "./components/Vehicle";
import { useGameCode } from "../game-context-provider";
import { Button } from "@mui/material";

// Component to display current game code
const CurrentCode: React.FC = () => {
  const { gameCode } = useGameCode();

  return (
    <div
      style={{
        position: "absolute",
        top: "5%",
        left: "20%",
        transform: "translate(-50%, -50%)",
        fontSize: "12px",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "8px 16px",
        borderRadius: "8px",
      }}
    >
      {gameCode ? `Game Code: ${gameCode}` : "No Game Code"}
    </div>
  );
};

const Home: React.FC = () => {
  const router = useRouter();

  // Navigate to profile page
  const redirectEndPage = () => {
    router.push("/endPage");
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundImage: "url('/Road.png')",
          backgroundSize: "100% 100%",
        }}
        id="homePage"
      >
        {/* Display the Game Code at the Center-Top */}
        <CurrentCode />

        {/* Vehicle */}
        <Vehicle cowNum={2} />

        {/* Button on the center to end game */}
        <div
          style={{
            position: "absolute",
            top: "85%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            cursor: "pointer",
          }}
        >
          <Button
            style={{
              backgroundColor: "red",
              border: "none",
              cursor: "pointer",
              color: "black",
            }}
            onClick={redirectEndPage}
          >
            End Game
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
