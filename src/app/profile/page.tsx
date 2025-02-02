/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Modal,
} from "@mui/material";
import MyCows from "./_components/mycows";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { usePlayerId } from "../playerId-context-provider";
import RoadHazards from "./_components/roadHazards";

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0); // 🔹 State for Tabs
  const [modalTabValue, setModalTabValue] = useState(0);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const { playerId } = usePlayerId();

  const fetchedPlayer = useQuery(
    api.secondaryFunctions.getPlayerById,
    playerId ? { playerId } : "skip"
  );

  console.log("fetched player ", fetchedPlayer);

  const handleBackClick = () => {
    router.back();
  };

  const handleHelpClick = () => {
    setModalTabValue(tabValue); // Set modalTabValue to match tabValue
    setIsHelpOpen(true);
  };

  const handleCloseHelp = () => {
    setIsHelpOpen(false);
  };

  const handleTabChange = () => {
    setTabValue((prev) => (prev + 1) % 2);
  };

  const handleModalTabChange = () => {
    setModalTabValue((prev) => (prev + 1) % 2);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button onClick={handleBackClick} variant="contained" color="primary">
          Back
        </Button>
        <Button onClick={handleHelpClick} variant="contained" color="secondary">
          Help
        </Button>
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="avatar"
            src={fetchedPlayer?.avatar}
            style={{ width: "100px", height: "100px" }}
          />
          <h2>{fetchedPlayer?.name}</h2>
        </div>
        {/* Grid for Cards */}
        <Grid container spacing={2} className="mt-5">
          {/* Cows Card (Only for tabValue 0) */}
          {tabValue === 0 && (
            <Grid item xs={6}>
              <Card sx={{ p: 1 }}>
                <CardContent>
                  <Typography variant="body2">
                    <img
                      src="/cowside.png"
                      alt="cow"
                      style={{ width: "40px", height: "40px" }}
                    />
                    {fetchedPlayer?.cows}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}

          {/* Hamburger Card (Only for tabValue 0) */}
          {tabValue === 0 && (
            <Grid item xs={6}>
              <Card sx={{ p: 1 }}>
                <CardContent>
                  <Typography variant="body2">
                    <img
                      src="/burger.png"
                      alt="hamburger"
                      style={{ width: "40px", height: "40px" }}
                    />
                    {fetchedPlayer?.burgers}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}

          {/* Points Card (Only for tabValue 1) */}
          {tabValue === 1 && (
            <Grid item xs={6}>
              <Card sx={{ p: 1 }}>
                <CardContent>
                  <Typography variant="body2">
                    <img
                      src="/points.png"
                      alt="road sign"
                      style={{ width: "40px", height: "40px" }}
                    />
                    {fetchedPlayer?.roadPoints}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </div>
      <div className="w-full max-w-md mt-5">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="My Cows" />
          <Tab label="Road Hazards" />
        </Tabs>

        {/* Tab Content */}
        {tabValue === 0 && (
          <div className="mt-3 text-center">
            <h2 className="text-xl font-bold">My Cows</h2>
            <MyCows></MyCows>
          </div>
        )}
        {tabValue === 1 && (
          <div className="mt-3 text-center">
            <h2 className="text-xl font-bold">Road Hazards</h2>
            <RoadHazards></RoadHazards>
          </div>
        )}
      </div>

      <Modal
        open={isHelpOpen}
        onClose={handleCloseHelp}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            textAlign: "center",
            maxHeight: "70vh",
            overflowY: "auto",
            paddingLeft: "30px",
            paddingRight: "30px",
            margin: "20px",
          }}
        >
          <h1>Game Rules</h1>

          <Tabs
            value={modalTabValue}
            onChange={handleModalTabChange}
            aria-label="Game Rules Tabs"
          >
            <Tab label="My Cows" />
            <Tab label="Road Hazards" />
          </Tabs>

          {modalTabValue === 0 && (
            <>
              <h3>My Cows Rules</h3>
              <h4>&quot;My Cows!&quot;</h4>
              <p>
                When a player sees a field of cows and exclaims &quot;my
                cows!&quot;, said player gets an estimation of the number of
                cows in that field.
              </p>
              <h4>&quot;Marry my Cows&quot;</h4>
              <p>
                When a player sees a church and exclaims &quot;marry my
                Cows,&quot; said player&apos;s cow count doubles.
              </p>
              <h4>&quot;Bury your Cows&quot;</h4>
              <p>
                When a player sees a cemetery, exclaims &quot;bury your
                cows,&quot; all other players&apos; cows die.
              </p>
              <h4>&quot;Mad Cow Disease&quot;</h4>
              <p>
                When a player sees a hospital and exclaims &quot;mad cow
                disease,&quot; all other players lose half their cows.
              </p>
              <h4>&quot;Cash in my Cows&quot;</h4>
              <p>
                When a player sees a McDonald&apos;s and exclaims &quot;cash in
                my cows,&quot; said player&apos;s cows are now burgers.
              </p>
              <h4>&quot;Discount cows&quot;</h4>
              <p>
                When a player sees a Dollar General and exclaims &quot;discount
                cows,&quot; all other players give the caller 25% of their cows.
              </p>
              <h4>&quot;Meals on wheels&quot;</h4>
              <p>
                If a player spots cows being transported in a trailer, they can
                exclaim &apos;meals on wheels&apos; to convert the mo(o)ving
                cows into an equal number of burgers.
              </p>
              <br />
              <p>
                At the end of the trip, the player with the most hamburgers
                wins!
              </p>
              <br />
            </>
          )}
          {modalTabValue === 1 && (
            <>
              <h3>Road Hazards Rules</h3>
              <h4>Crossing Signs</h4>
              <p>
                Spot a rare crossing sign (ie Bear Crossing) for more points.
                The more common (ie Deer Crossing), the less points.
              </p>
              <h4>Construction Signs</h4>
              <p>
                Spot a construction sign for points. All constructions signs are
                worth 4 (pity) points.
              </p>
              <h4>Slippery When Wet Signs</h4>
              <p>
                Spot a slippery when wet sign for points. They are worth 5
                points!
              </p>
              <h4>Sharp Curve Signs</h4>
              <p>
                Spot a sharp curve sign for points. They are worth 2 points!
              </p>
              <h4>Hill with Grade Signs</h4>
              <p>
                Spot a hill with grade sign for points. They are worth 10
                points. Hold on tight!
              </p>
              <h4>Truck Escape Ramp Signs</h4>
              <p>
                Spot a truck escape ramp sign for points. They are worth 15
                points!
              </p>
              <br />
              <p>
                At the end of the trip, the player with the most safety points
                wins!
              </p>
              <br />
            </>
          )}
          <h3>Can you win both?</h3>
          <Button
            onClick={handleCloseHelp}
            variant="contained"
            color="primary"
            style={{ padding: "6px 6px", margin: "6px" }}
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;
