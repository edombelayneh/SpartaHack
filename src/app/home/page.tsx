"use client";
import SettingsIcon from "@mui/icons-material/Settings";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      {/* Settings Icon in Top-Right Corner */}
      <div className="absolute top-5 right-5">
        <SettingsIcon className="text-white text-3xl cursor-pointer hover:text-gray-400 transition" />
      </div>

      {/* Centered Car Image */}
      <div className="flex items-center justify-center h-screen">
        <Image
          src="/2seatcar.png" // Update this with the correct path to your image
          alt="Car"
          width={960} // Adjust size as needed
          height={480} // Adjust size as needed
          style={{ transform: 'rotate(270deg)', display: 'block', margin: 'auto', width: '100%', height: '100%' }}
          className="object-contain"
        />
      </div>
      

      {/* Leaderboard Button in Bottom-Right Corner */}
      <div className="absolute bottom-5 right-5">
        <LeaderboardIcon className="text-white text-4xl cursor-pointer hover:text-gray-400 transition" />
      </div>
    </div>
  );
}
