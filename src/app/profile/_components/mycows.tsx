// // mycows contains all of the icons for the user to interact with their cows
// // once a icon is clicked, it runs a function to update the user's cow count and then display a text message about the update
// // after 5 seconds, the text message will disappear and the user can interact with the icons again

// import { Icon } from "@mui/material";
// import React, { useState } from "react";
// import { api } from "../../../../convex/_generated/api";
// import { useQuery, useMutation } from "convex/react";
// import { usePlayerId } from "../../playerId-context-provider";
// import { useEffect } from "react";
// import { FunctionReference } from "convex/server";
// import { GenericId } from "convex/values";

// const MyCows: React.FC = () => {
//   const [cowCount, setCowCount] = useState(0);
//   const [hamBurgerCount, setHamBurgerCount] = useState(0);
//   const [message, setMessage] = useState<string | null>(null);
//   const { playerId } = usePlayerId();

//   const fetchedPlayer = useQuery(
//     api.secondaryFunctions.getPlayerById,
//     playerId ? { playerId } : "skip"
//   );

//   console.log("fetched player ", fetchedPlayer);

//   const updateCowCountMutation = useMutation(api.functions.updateCowCount);

//   const handleMyCowClick = () => {
//     const cowCount = 1;
//     if(fetchedPlayer?._id == "undefined"){
//         console.log("player not found");
//     }
//     try {
//         // ✅ Call mutation to update cow count
//         const result = await updateCowCountMutation({
//           playerId: fetchedPlayer._id,
//           cowCountChange: 1,
//         });
//     }
//     setMessage(`My Cows! You have updated your cow count to ${fetchedPlayer?.cows}`);

//     setTimeout(() => {
//       setMessage(null);
//     }, 5000);
//   };
//   const handleMcDonaldsClick = () => {
//     setHamBurgerCount(hamBurgerCount + cowCount);
//     setCowCount(0);
//     setMessage(
//       `Cash in my Cows! You now have ${hamBurgerCount} hamburgers and 0 cows`
//     );

//     setTimeout(() => {
//       setMessage(null);
//     }, 5000);
//   };

//   const handleGravestoneClick = () => {
//     setMessage(`Bury your Cows! Your opponents now have 0 cows`);

//     setTimeout(() => {
//       setMessage(null);
//     }, 5000);
//   };

//   const handleIconClick = () => {
//     setMessage(`You have clicked an icon`);

//     setTimeout(() => {
//       setMessage(null);
//     }, 5000);
//   };

//   return (
//     <div>
//       {message ? (
//         <div>{message}</div>
//       ) : (
//         <div>
//           <div
//             style={{ display: "flex", flexWrap: "wrap", marginBottom: "10px" }}
//           >
//             <div
//               style={{
//                 flex: "1 1 50%",
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <Icon onClick={handleMyCowClick} style={{ fontSize: "64px" }}>
//                 <img
//                   src="/CowSide.png"
//                   alt="My Cows"
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               </Icon>
//             </div>
//             <div
//               style={{
//                 flex: "1 1 50%",
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <Icon onClick={handleMcDonaldsClick} style={{ fontSize: "64px" }}>
//                 <img
//                   src="/McDonalds.png"
//                   alt="McDonalds Icon"
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               </Icon>
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", flexWrap: "wrap", marginBottom: "10px" }}
//           >
//             <div
//               style={{
//                 flex: "1 1 33%",
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <Icon
//                 onClick={handleGravestoneClick}
//                 style={{ fontSize: "64px" }}
//               >
//                 <img
//                   src="/Gravestone.png"
//                   alt="Gravestone Icon"
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               </Icon>
//             </div>
//             <div
//               style={{
//                 flex: "1 1 33%",
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <Icon onClick={handleIconClick} style={{ fontSize: "64px" }}>
//                 <img
//                   src="/MadCow.png"
//                   alt="Hospital Icon"
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               </Icon>
//             </div>
//             <div
//               style={{
//                 flex: "1 1 33%",
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <Icon onClick={handleIconClick} style={{ fontSize: "64px" }}>
//                 <img
//                   src="/DollarGeneral.png"
//                   alt="DG Icon"
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               </Icon>
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", flexWrap: "wrap", marginBottom: "10px" }}
//           >
//             <div
//               style={{
//                 flex: "1 1 50%",
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <Icon onClick={handleIconClick} style={{ fontSize: "64px" }}>
//                 <img
//                   src="/Church.png"
//                   alt="Church Icon"
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               </Icon>
//             </div>
//             <div
//               style={{
//                 flex: "1 1 50%",
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <Icon onClick={handleIconClick} style={{ fontSize: "64px" }}>
//                 <img
//                   src="/Tire.png"
//                   alt="Tire Icon"
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               </Icon>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyCows;
// function useMutation(
//   updateCowCount: FunctionReference<
//     "mutation",
//     "public",
//     { playerId: GenericId<"playerTable">; cowCountChange: number },
//     { cowCount: number },
//     string | undefined
//   >
// ) {
//   throw new Error("Function not implemented.");
// }

import { Icon } from "@mui/material";
import React, { useState, useEffect } from "react";
import { api } from "../../../../convex/_generated/api";
import { useQuery, useMutation } from "convex/react"; // ✅ Import `useMutation`
import { usePlayerId } from "../../playerId-context-provider";

const MyCows: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const { playerId } = usePlayerId();

  // ✅ Fetch player data
  const fetchedPlayer = useQuery(
    api.secondaryFunctions.getPlayerById,
    playerId ? { playerId } : "skip"
  );

  // ✅ Mutation hook for updating cows
  const updateCowCountMutation = useMutation(api.functions.updateCowCount);
  const updateBurgerCountMutation = useMutation(
    api.functions.updateBurgerCountMutation
  );

  useEffect(() => {
    console.log("Fetched player:", fetchedPlayer);
  }, [fetchedPlayer]);

  const handleMyCowClick = async () => {
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      // ✅ Call mutation to update cow count
      const result = await updateCowCountMutation({
        playerId: fetchedPlayer._id,
        cowCountChange: fetchedPlayer.cows + 1,
      });

      // ✅ Update UI with new cow count
      setMessage(
        `My Cows! You have updated your cow count to ${result.cowCount}`
      );

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update cow count:", error);
      setMessage("Error updating cow count");
    }
  };

  const handleMcDonaldsClick = async () => {
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      // ✅ Call mutation to update cow count
      const resultCow = await updateCowCountMutation({
        playerId: fetchedPlayer._id,
        cowCountChange: -1 * fetchedPlayer.cows,
      });
      const resultBurger = await updateBurgerCountMutation({
        playerId: fetchedPlayer._id,
        burgersChange: fetchedPlayer.cows + fetchedPlayer.burgers,
      });

      // ✅ Update UI with new cow count
      setMessage(
        `Cash in my Cows! You now have ${resultBurger.burgerCount} hamburgers and ${resultCow.cowCount} cows`
      );

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update cow and burger count:", error);
      setMessage("Error updating cow and burger count");
    }
  };

  const handleChurchClick = async () => {
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      // ✅ Call mutation to update cow count
      const result = await updateCowCountMutation({
        playerId: fetchedPlayer._id,
        cowCountChange: fetchedPlayer.cows * 2,
      });

      // ✅ Update UI with new cow count
      setMessage(
        `My Cows! You have updated your cow count to ${result.cowCount}`
      );

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update cow count:", error);
      setMessage("Error updating cow count");
    }
  };

  const handleMealsOnWheelsClick = async () => {
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      // ✅ Call mutation to update cow count
      const result = await updateBurgerCountMutation({
        playerId: fetchedPlayer._id,
        burgersChange: fetchedPlayer.burgers + 1,
      });

      // ✅ Update UI with new cow count
      setMessage(`You have updated your burger count to ${result.burgerCount}`);

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update cow count:", error);
      setMessage("Error updating cow count");
    }
  };

  const handleGravestoneClick = () => {};

  const handleIconClick = () => {
    setMessage(`You have clicked an icon`);

    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  return (
    <div>
      {message ? (
        <div>{message}</div>
      ) : (
        <div>
          <div
            style={{ display: "flex", flexWrap: "wrap", marginBottom: "10px" }}
          >
            <div
              style={{
                flex: "1 1 50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon onClick={handleMyCowClick} style={{ fontSize: "64px" }}>
                <img
                  src="/CowSide.png"
                  alt="My Cows"
                  style={{ width: "100%", height: "100%" }}
                />
              </Icon>
            </div>
            <div
              style={{
                flex: "1 1 50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon onClick={handleMcDonaldsClick} style={{ fontSize: "64px" }}>
                <img
                  src="/McDonalds.png"
                  alt="McDonalds Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Icon>
            </div>
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", marginBottom: "10px" }}
          >
            <div
              style={{
                flex: "1 1 33%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon
                onClick={handleGravestoneClick}
                style={{ fontSize: "64px" }}
              >
                <img
                  src="/Gravestone.png"
                  alt="Gravestone Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Icon>
            </div>
            <div
              style={{
                flex: "1 1 33%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon onClick={handleIconClick} style={{ fontSize: "64px" }}>
                <img
                  src="/MadCow.png"
                  alt="Hospital Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Icon>
            </div>
            <div
              style={{
                flex: "1 1 33%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon onClick={handleIconClick} style={{ fontSize: "64px" }}>
                <img
                  src="/DollarGeneral.png"
                  alt="DG Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Icon>
            </div>
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", marginBottom: "10px" }}
          >
            <div
              style={{
                flex: "1 1 50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon onClick={handleChurchClick} style={{ fontSize: "64px" }}>
                <img
                  src="/Church.png"
                  alt="Church Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Icon>
            </div>
            <div
              style={{
                flex: "1 1 50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon
                onClick={handleMealsOnWheelsClick}
                style={{ fontSize: "64px" }}
              >
                <img
                  src="/Tire.png"
                  alt="Tire Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Icon>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCows;
