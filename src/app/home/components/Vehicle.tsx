// "use client";
// import React, { useEffect, useState } from "react";
// import { useQuery } from "convex/react";
// import Image from "next/image";
// import CowIcon from "./CowIcon"; // Adjust the import path as necessary
// import { useGameCode } from "../../game-context-provider";
// import { api } from "../../../../convex/_generated/api";

// interface VehicleProps {
//   redirectProfile: () => void;
//   cowNum: number;
// }

// const Vehicle: React.FC<VehicleProps> = ({ redirectProfile }) => {
//   const { gameCode } = useGameCode();
//   const [playerCount, setPlayerCount] = useState(0);

//   const fetchedPlayerCount = useQuery(
//     api.secondaryFunctions.getPlayerCount,
//     gameCode ? { gameCode } : "skip" // Use "skip" instead of null
//   );

//   useEffect(() => {
//     if (fetchedPlayerCount !== undefined) {
//       setPlayerCount(fetchedPlayerCount);
//     }
//   }, [fetchedPlayerCount]);

//   console.log(`the code is: ${gameCode}`);
//   console.log(`number of people equals: ${playerCount}`);

//   if (playerCount === 2) {
//     return (
//       <div style={{ overflow: "hidden", margin: 0, padding: 0 }} id="carId">
//         {/* Car */}
//         <span style={{ margin: 0, padding: 0 }} id="car">
//           <Image
//             src="/2seatcar.png"
//             alt="Car"
//             style={{ transform: "rotate(90deg)", objectFit: "contain" }}
//             fill={true}
//           />
//         </span>

//         {/* Cow1 */}
//         <span style={{ position: "absolute", top: "53vh", left: "31vw" }}>
//           <CowIcon
//             onClick={redirectProfile}
//             name="Test"
//             size={80}
//             url="/defaultCow.png"
//           />
//         </span>

//         {/* Cow2 */}
//         <span style={{ position: "absolute", top: "53vh", left: "51vw" }}>
//           <CowIcon
//             onClick={redirectProfile}
//             name="Test2"
//             size={80}
//             url="/defaultCow.png"
//           />
//         </span>
//       </div>
//     );
//   }
//   return null;
// };

// export default Vehicle;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CowIcon from "./CowIcon";
import { useGameCode } from "../../game-context-provider";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";

interface VehicleProps {
  redirectProfile: () => void;
  cowNum: number;
}

interface Player {
  _id: string;
  name: string;
  avatar: string;
}

const Vehicle: React.FC<VehicleProps> = ({ redirectProfile, cowNum }) => {
  const { gameCode } = useGameCode();
  const [players, setPlayers] = useState<Player[]>([]);
  const router = useRouter();

  // Fetch players only if gameCode exists
  const fetchedPlayers = useQuery(
    api.secondaryFunctions.getPlayers,
    gameCode ? { gameCode } : "skip"
  );

  useEffect(() => {
    if (fetchedPlayers !== undefined) {
      setPlayers(fetchedPlayers); // Store player list in state
    }
  }, [fetchedPlayers]);

  // Function to redirect to player profile with ID
  const handleProfileClick = (playerId: string) => {
    router.push(`/profile/`); // Navigate to profile page with player's ID
  };

  if (cowNum === 2) {
    return (
      <div style={{ overflow: "hidden", margin: 0, padding: 0 }} id="carId">
        {/* Car */}
        <span style={{ margin: 0, padding: 0 }} id="car">
          <Image
            src="/2seatcar.png"
            alt="Car"
            style={{ transform: "rotate(90deg)", objectFit: "contain" }}
            fill={true}
          />
        </span>

        {/* Display players dynamically */}
        {players.map((player, index) => (
          <span
            key={player._id}
            style={{
              position: "absolute",
              top: "53vh",
              left: index === 0 ? "31vw" : "51vw",
            }}
          >
            <CowIcon
              onClick={() => handleProfileClick(player._id)}
              name={player.name}
              size={80}
              url={player.avatar || "/defaultCow.png"}
            />
          </span>
        ))}
      </div>
    );
  }
  return null;
};

export default Vehicle;
