"use client";
import { useRouter } from "next/navigation";
import SettingsIcon from "@mui/icons-material/Settings";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  // Navigate to profile page
  const redirectProfile = () => {
    router.push("/profile"); // Ensure you have a /profile route
  };

  return (
    <div className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      {/* Settings Icon in Top-Right Corner */}
      <div className="absolute top-5 right-5">
        <SettingsIcon className="text-white text-3xl cursor-pointer hover:text-gray-400 transition" />
      </div>

      {/* Centered Car Image */}
      <div className="flex items-center justify-center">
        <Image
          src="/car.png" // Update this with the correct path to your image
          alt="Car"
          width={200} // Adjust size as needed
          height={200} // Adjust size as needed
          className="object-contain"
        />

        {/* Clickable Profile Icon */}
        <PersonIcon
          className="ml-4 text-white text-4xl cursor-pointer hover:text-gray-400 transition"
          onClick={redirectProfile}
        />
      </div>

      {/* Leaderboard Button in Bottom-Right Corner */}
      <div className="absolute bottom-5 right-5">
        <LeaderboardIcon className="text-white text-4xl cursor-pointer hover:text-gray-400 transition" />
      </div>
    </div>
  );
}
