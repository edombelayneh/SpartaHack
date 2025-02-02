/* eslint-disable @typescript-eslint/no-unused-vars */

import { Icon, Modal, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { api } from "../../../../convex/_generated/api";
import { useQuery, useMutation } from "convex/react"; // ✅ Import `useMutation`
import { usePlayerId } from "../../playerId-context-provider";

const RoadHazards: React.FC = () => {
  const [pointCount, setPointCount] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [isCrossingOpen, setIsCrossingOpen] = useState(false);
  const { playerId } = usePlayerId();

  const fetchedPlayer = useQuery(
    api.secondaryFunctions.getPlayerById,
    playerId ? { playerId } : "skip"
  );

  const roadPointChangeMutation = useMutation(api.functions.updateRoadPoints);

  useEffect(() => {
    console.log("Fetched player:", fetchedPlayer);
  }, [fetchedPlayer]);

  const handleCrossingClick = async () => {
    setIsCrossingOpen(true);
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      const result = await roadPointChangeMutation({
        playerId: fetchedPlayer._id,
        pointChange: fetchedPlayer.roadPoints + 1,
      });

      setMessage(
        `You have updated your point count to ${result.roadPointsCount} for Crossing`
      );

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update point count:", error);
      setMessage("Error updating point count");
    }
  };

  const handleDeerCrossingClick = () => {
    handleCloseCrossing();
    setPointCount(pointCount + 1);
    setMessage(
      `You have updated your point count to ${pointCount} for Deer Crossing`
    );

    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };
  const handleBearCrossingClick = async () => {
    handleCloseCrossing();
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      const result = await roadPointChangeMutation({
        playerId: fetchedPlayer._id,
        pointChange: fetchedPlayer.roadPoints + 10,
      });

      setMessage(
        `You have updated your point count to ${result.roadPointsCount} for Crossing`
      );

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update point count:", error);
      setMessage("Error updating point count");
    }
  };
  const handleFarmCrossingClick = async () => {
    handleCloseCrossing();
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      const result = await roadPointChangeMutation({
        playerId: fetchedPlayer._id,
        pointChange: fetchedPlayer.roadPoints + 5,
      });

      setMessage(
        `You have updated your point count to ${result.roadPointsCount} for Crossing`
      );

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update point count:", error);
      setMessage("Error updating point count");
    }
  };
  const handleTruckCrossingClick = async () => {
    handleCloseCrossing();
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      const result = await roadPointChangeMutation({
        playerId: fetchedPlayer._id,
        pointChange: fetchedPlayer.roadPoints + 3,
      });

      setMessage(
        `You have updated your point count to ${result.roadPointsCount} for Crossing`
      );

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update point count:", error);
      setMessage("Error updating point count");
    }
  };
  const handleSnowmobileCrossingClick = async () => {
    handleCloseCrossing();
    setIsCrossingOpen(true);
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      const result = await roadPointChangeMutation({
        playerId: fetchedPlayer._id,
        pointChange: fetchedPlayer.roadPoints + 5,
      });

      setMessage(
        `You have updated your point count to ${result.roadPointsCount} for Crossing`
      );

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update point count:", error);
      setMessage("Error updating point count");
    }
  };

  const handleCurveClick = async () => {
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      const result = await roadPointChangeMutation({
        playerId: fetchedPlayer._id,
        pointChange: fetchedPlayer.roadPoints + 2,
      });

      setMessage(
        `You have updated your point count to ${result.roadPointsCount} for Crossing`
      );

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update point count:", error);
      setMessage("Error updating point count");
    }
  };

  const handleSlipperyClick = async () => {
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      const result = await roadPointChangeMutation({
        playerId: fetchedPlayer._id,
        pointChange: fetchedPlayer.roadPoints + 5,
      });

      setMessage(
        `You have updated your point count to ${result.roadPointsCount} for Crossing`
      );

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update point count:", error);
      setMessage("Error updating point count");
    }
  };

  const handleHillClick = async () => {
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      const result = await roadPointChangeMutation({
        playerId: fetchedPlayer._id,
        pointChange: fetchedPlayer.roadPoints + 10,
      });

      setMessage(
        `You have updated your point count to ${result.roadPointsCount} for Crossing`
      );

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update point count:", error);
      setMessage("Error updating point count");
    }
  };

  const handleRoadworkClick = async () => {
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      const result = await roadPointChangeMutation({
        playerId: fetchedPlayer._id,
        pointChange: fetchedPlayer.roadPoints + 4,
      });

      setMessage(
        `You have updated your point count to ${result.roadPointsCount} for Crossing`
      );

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update point count:", error);
      setMessage("Error updating point count");
    }
  };

  const handleRockfallClick = async () => {
    if (!fetchedPlayer) {
      console.log("Player not found");
      return;
    }

    try {
      const result = await roadPointChangeMutation({
        playerId: fetchedPlayer._id,
        pointChange: fetchedPlayer.roadPoints + 15,
      });

      setMessage(
        `You have updated your point count to ${result.roadPointsCount} for Crossing`
      );

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to update point count:", error);
      setMessage("Error updating point count");
    }
  };

  const handleCloseCrossing = () => {
    setIsCrossingOpen(false);
  };

  return (
    <div>
      {message ? (
        <div>{message}</div>
      ) : (
        <div>
          <div
            style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px" }}
          >
            <div
              style={{
                flex: "1 1 33%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon onClick={handleCrossingClick} style={{ fontSize: "64px" }}>
                <img
                  src="/deer.png"
                  alt="Crossing Icon"
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
              <Icon onClick={handleCurveClick} style={{ fontSize: "64px" }}>
                <img
                  src="/curve.png"
                  alt="Curve Icon"
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
              <Icon onClick={handleSlipperyClick} style={{ fontSize: "64px" }}>
                <img
                  src="/slippery.png"
                  alt="Slippery Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Icon>
            </div>
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px" }}
          >
            <div
              style={{
                flex: "1 1 33%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon onClick={handleHillClick} style={{ fontSize: "64px" }}>
                <img
                  src="/hill.png"
                  alt="Hill Icon"
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
              <Icon onClick={handleRoadworkClick} style={{ fontSize: "64px" }}>
                <img
                  src="/roadwork.png"
                  alt="RoadWork Icon"
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
              <Icon onClick={handleRockfallClick} style={{ fontSize: "64px" }}>
                <img
                  src="/rockfall.png"
                  alt="RockFall Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Icon>
            </div>
          </div>
        </div>
      )}
      <Modal
        open={isCrossingOpen}
        onClose={handleCloseCrossing}
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
            padding: "50px",
            margin: "20px",
          }}
        >
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
              <Icon
                onClick={handleDeerCrossingClick}
                style={{ fontSize: "64px" }}
              >
                <img
                  src="/deer.png"
                  alt="Deer Icon"
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
                onClick={handleTruckCrossingClick}
                style={{ fontSize: "64px" }}
              >
                <img
                  src="/truck.png"
                  alt="Truck Icon"
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
                onClick={handleFarmCrossingClick}
                style={{ fontSize: "64px" }}
              >
                <img
                  src="/farm.png"
                  alt="Farm Icon"
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
              <Icon
                onClick={handleBearCrossingClick}
                style={{ fontSize: "64px" }}
              >
                <img
                  src="/bear.png"
                  alt="Bear Icon"
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
              <Icon
                onClick={handleSnowmobileCrossingClick}
                style={{ fontSize: "64px" }}
              >
                <img
                  src="/snowmobile.png"
                  alt="Snowmobile Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Icon>
            </div>
          </div>
          <Button
            onClick={handleCloseCrossing}
            variant="contained"
            color="primary"
            style={{ padding: "6px 6px", margin: "6px" }}
          >
            Back
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default RoadHazards;
