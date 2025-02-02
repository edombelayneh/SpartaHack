"use client";
import { useRouter } from "next/navigation";
import SettingsIcon from "@mui/icons-material/Settings";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import Image from "next/image";
import Vehicle from "./components/Vehicle";



const Home: React.FC = () => {
  const router = useRouter();

  // Navigate to profile page
  const redirectProfile = (): void => {
    router.push("/profile");
  };

  return (
    <div style={{overflow: 'hidden'}}>
      <div style={{height : '100vh', width: '100vw', margin: 0, padding: 0, overflow: 'hidden', backgroundImage: "url('/Road.png')", backgroundSize: "100% 100%"}} id="homePage" >
      {/* Vehicle */}
      <Vehicle redirectProfile={redirectProfile} cowNum={2}/>

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
