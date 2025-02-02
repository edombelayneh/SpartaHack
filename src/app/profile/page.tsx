"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
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

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const [cowCount, setCowCount] = React.useState(200);
  const [hamBurgerCount, setHamBurgerCount] = React.useState(100);
  const [tabValue, setTabValue] = useState(0); // 🔹 State for Tabs
  const [modalTabValue, setModalTabValue] = useState(0);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

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
            alt="Profile Picture"
            src=""
            style={{ width: "100px", height: "100px" }}
          />
          <h2>Username</h2>
        </div>
        {/* Grid for Cows & Hamburgers */}
        <Grid container spacing={3} className="mt-5">
          {/* Cows Card */}
          <Grid item xs={6}>
            <Card sx={{ p: 1 }}>
              <CardContent>
                <Typography variant="body2">
                  <img
                    src="/cowside.png"
                    alt="cow"
                    style={{ width: "40px", height: "40px" }}
                  />
                  {cowCount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Hamburger Card */}
          <Grid item xs={6}>
            <Card sx={{ p: 1 }}>
              <CardContent>
                <Typography variant="body2">
                <img
                    src="/burger.png"
                    alt="hamburger"
                    style={{ width: "40px", height: "40px" }}
                  />
                  {hamBurgerCount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
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
            <p>Here is the information about the road hazards</p>
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
              <h4>"My Cows!"</h4>
              <p>
                When a player sees a field of cows and exclaims "my cows!", said
                player gets an estimation of the number of cows in that field.
              </p>
              <h4>"Marry my Cows"</h4>
              <p>
                When a player sees a church and exclaims "marry my Cows," said
                player's cow count doubles.
              </p>
              <h4>"Bury your Cows"</h4>
              <p>
                When a player sees a cemetery, exclaims "bury your cows," all
                other players' cows die.
              </p>
              <h4>"Mad Cow Disease"</h4>
              <p>
                When a player sees a hospital and exclaims "mad cow disease,"
                all other players lose half their cows.
              </p>
              <h4>"Cash in my Cows"</h4>
              <p>
                When a player sees a McDonald's and exclaims "cash in my cows,"
                said player's cows are now burgers.
              </p>
              <h4>"Discount cows"</h4>
              <p>
                When a player sees a Dollar General and exclaims “discount
                cows,” all other players give the caller 25% of their cows.
              </p>
              <h4>"Meals on wheels"</h4>
              <p>
                If a player spots cows being transported in a trailer, they can
                exclaim 'meals on wheels' to convert the mo(o)ving cows into an
                equal number of burgers."
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
