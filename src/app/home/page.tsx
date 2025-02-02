"use client";
import { useRouter } from "next/navigation";
import SettingsIcon from "@mui/icons-material/Settings";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import { Widgets } from "@mui/icons-material";
// import CowIcon from "../components/cowIcon";

const Home: React.FC = () => {
  const router = useRouter();

  // Navigate to profile page
  const redirectProfile = (): void => {
    router.push("/profile");
  };

  return (
    <div style={{overflow: 'hidden'}}>
      <div style={{height : '100vh', width: '100vw', margin: 0, padding: 0, overflow: 'hidden'}} id="homePage" >
      {/* Grid Layout. Hold Car and Cows */}
      <div className="grid grid-cols-8 grid-rows-6 gap-5 m-5" style={{ overflow: 'hidden', width: "100%", height: "100%", margin: 0, padding: 0 , backgroundImage: "url('/Road.png')", backgroundSize: "100% 100%"}} id="carGrid">
        {/* Car */}
        <span className="col-start-2 col-end-8 row-start-2 row-end-6" style={{margin: 0, padding: 0, width: "100%", height: "100%"}} id="car">
          <Image
        src="/2seatcar.png"
        alt="Car"
        style={{ transform: 'rotate(90deg)', objectFit: "contain" }}
        fill={true}
        />
        </span>

        {/* Clickable Profile Icon in the Center */}
        {/* <span className="col-start-3 col-end-5 row-start-3 row-end-4" >
          <CowIcon
        className="text-black text-4xl cursor-pointer hover:text-gray-400 transition"
        onClick={redirectProfile}
        name="Test"
        size={50}
        url="/defaultCow.png"
          />
        </span> */}
      </div>
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
