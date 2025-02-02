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
        <Avatar
          alt="Profile Picture"
          src="/path/to/profile-picture.jpg"
          style={{ width: "100px", height: "100px" }}
        />
        <h2>Username</h2>
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
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <h2>Game Rules</h2>
          <p>Here is some helpful information...</p>
          <Button onClick={handleCloseHelp} variant="contained" color="primary">
            Close
          </Button>
        </div>
      </Modal>

    </div>

    
  );
};

export default ProfilePage;
