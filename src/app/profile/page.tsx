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

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const [cowCount, setCowCount] = React.useState(200);
  const [hamBurgerCount, setHamBurgerCount] = React.useState(100);
  const [tabValue, setTabValue] = useState(0); // 🔹 State for Tabs
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const handleBackClick = () => {
    router.back();
  };

  const handleHelpClick = () => {
    setIsHelpOpen(true);
  };

  const handleCloseHelp = () => {
    setIsHelpOpen(false);
  };

  const handleChange = () => {
    setTabValue((prev) => (prev + 1) % 2);
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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar
            alt="Profile Picture"
            src="/path/to/profile-picture.jpg"
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
                  <PetsIcon />
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
                  <LunchDiningIcon />
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
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="My Cows" />
          <Tab label="Road Hazards" />
        </Tabs>

        {/* Tab Content */}
        {tabValue === 0 && (
          <div className="mt-3 text-center">
            <h2 className="text-xl font-bold">My Cows</h2>
            <p>Here is the information about the cows</p>
          </div>
        )}
        {tabValue === 1 && (
          <div className="mt-3 text-center">
            <h2 className="text-xl font-bold">Road Hazards</h2>
            <p>Here is the information about the hamburgers</p>
          </div>
        )}
      </div>

      <Modal
        open={isHelpOpen}
        onClose={handleCloseHelp}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            textAlign: 'center',
            maxHeight: '70vh',
            overflowY: 'auto',
          }}
        >
          <h2>Game Rules</h2>
          <h3>My Cows Rules</h3>
            <ul>
            <li><b>"My Cows!"</b> - when a player sees a field of cows and exclaims "my cows!", said player gets an estimation of the number of cows in that field. </li>
            <li><b>"Marry my Cows"</b> - when a player sees a church and exclaims "marry my Cows," said players cow count doubles. </li>
            <li><b>"Bury your Cows"</b> - when a player sees a cemetery, exclaims "bury your cows," all other players cows die. </li>
            <li><b>"Mad Cow Disease"</b> - when a player sees a hospital and exclaims "mad cow Disease," all other players lose half their cows. </li>
            <li><b>"Cash in my Cows"</b> - when a player sees a McDonald's and exclaims "cash in my Cows," said players cows are now burgers.  </li>
            <li><b>"Discount cows"</b> - when a player sees a Dollar General and exclaims “discount cows,” all other players give caller 25% of their cows. </li>
            </ul>
            <p>At the end of the trip, the player with the most cows and hamburgers wins the cow game</p>
          <h3>Road Hazards Rules</h3>
            <ul>
              <li><b></b></li>
            </ul>
            <p>At the end of the trip, the player with the most safety points wins the road hazards game </p>
          <h3>Can you win both?</h3>
          <Button onClick={handleCloseHelp} variant="contained" color="primary">
            Close
          </Button>
        </div>
      </Modal>

    </div>

    
  );
};

export default ProfilePage;
