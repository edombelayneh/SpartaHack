"use client";
import { useRouter } from "next/navigation";
import SettingsIcon from "@mui/icons-material/Settings";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import React from "react";

const Home: React.FC = () => {
  const router = useRouter();

  // Navigate to profile page
  const redirectProfile = (): void => {
    router.push("/profile");
  };

  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center justify-center">
      {/* Settings Icon in Top-Right Corner */}
      <div className="absolute top-5 right-5 z-10">
        <SettingsIcon className="text-white text-3xl cursor-pointer hover:text-gray-400 transition" />
      </div>

      {/* Centered Car Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/2seatcar.png"
          alt="Car"
          width={960}
          height={480}
          style={{ transform: "rotate(270deg)", maxWidth: "100%", maxHeight: "70vh", height: "auto" }}
          className="object-contain"
        />
      </div>

      {/* Profile & Leaderboard Icons in Bottom-Right Corner */}
      <div className="absolute bottom-5 right-5 flex space-x-4 z-10">
        <PersonIcon
          className="text-white text-4xl cursor-pointer hover:text-gray-400 transition"
          onClick={redirectProfile}
        />
        <LeaderboardIcon className="text-white text-4xl cursor-pointer hover:text-gray-400 transition" />
      </div>
    </div>
  );
};

export default Home;
