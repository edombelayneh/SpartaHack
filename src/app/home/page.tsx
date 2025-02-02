/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { useRouter } from "next/navigation";
import SettingsIcon from "@mui/icons-material/Settings";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import Vehicle from "./components/Vehicle";
import { useGameCode } from "../game-context-provider";

// Component to display current game code
const CurrentCode: React.FC = () => {
  const { gameCode } = useGameCode();

  return (
    <div
      style={{
        position: "absolute",
        top: "8%",
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
  const redirectProfile = (): void => {
    router.push("/profile");
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
        {/* Button on the center to end game */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "48%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            cursor: "pointer",
          }}
        >
          <button
            style={{
              backgroundColor: "Black",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => router.push("/endgame")}
          >
            End Game
          </button>
        </div>

        {/* Vehicle */}
        <Vehicle cowNum={2} />

        {/* Settings Icon in Top-Right Corner */}
        <span className="absolute top-5 right-5">
          <SettingsIcon className="text-black text-3xl cursor-pointer hover:text-gray-400 transition" />
        </span>

        {/* Leaderboard Button in Bottom-Right Corner */}
        <span className="absolute bottom-5 right-5">
          <LeaderboardIcon className="text-black text-4xl cursor-pointer hover:text-gray-400 transition" />
        </span>
      </div>
    </div>
  );
};

export default Home;
