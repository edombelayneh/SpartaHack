/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CowIcon from "./CowIcon";
import { useGameCode } from "../../game-context-provider";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";

interface VehicleProps {
  cowNum: number;
}

interface Player {
  _id: string;
  name: string;
  avatar: string;
}

const Vehicle: React.FC<VehicleProps> = ({ cowNum }) => {
  const { gameCode } = useGameCode();
  const [players, setPlayers] = useState<Player[]>([]);
  const router = useRouter();

  // Fetch players only if gameCode exists
  const fetchedPlayers = useQuery(
    api.secondaryFunctions.getPlayers,
    gameCode ? { gameCode } : "skip"
  );

  //   useEffect(() => {
  //     if (fetchedPlayers !== undefined && fetchedPlayers !== null) {
  //       setPlayers(fetchedPlayers);
  //     }
  //   }, [fetchedPlayers]);

  useEffect(() => {
    if (fetchedPlayers) {
      setPlayers(
        (fetchedPlayers ?? []).filter((player) => player !== null) as Player[]
      );
    }
  }, [fetchedPlayers]);

  // Function to redirect to player profile with ID
  const handleProfileClick = () => {
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
