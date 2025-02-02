import { Icon, Modal, Button } from '@mui/material';
import React, { useState } from 'react';

const RoadHazards: React.FC = () => {
    const [pointCount, setPointCount] = useState(0);
    const [message, setMessage] = useState<string | null>(null);
    const [isCrossingOpen, setIsCrossingOpen] = useState(false);


    const handleCrossingClick = () => {
        setIsCrossingOpen(true);
        // setPointCount(pointCount + 1);
        // setMessage(`You have updated your point count to ${pointCount} for Crossing`);

        // setTimeout(() => {
        //     setMessage(null);
        // }, 5000);
    };

    const handleDeerCrossingClick = () => {
        handleCloseCrossing();
        setPointCount(pointCount + 1);
        setMessage(`You have updated your point count to ${pointCount} for Deer Crossing`);

        setTimeout(() => {
            setMessage(null);
        }, 5000);
    };
    const handleBearCrossingClick = () => {
        handleCloseCrossing();
        //plus 10 points
    };
    const handleFarmCrossingClick = () => {
        handleCloseCrossing();
        //plus 5 points
    };
    const handleTruckCrossingClick = () => {
        handleCloseCrossing();
        //plus 3 points
    };
    const handleSnowmobileCrossingClick = () => {
        handleCloseCrossing();
        //plus 5 points
    };



    const handleCurveClick = () => {
        setPointCount(pointCount + 2);
        setMessage(`You have updated your point count to ${pointCount} for Curve`);

        setTimeout(() => {
            setMessage(null);
        }, 5000);
    };

    const handleSlipperyClick = () => {
        setPointCount(pointCount + 5);
        setMessage(`You have updated your point count to ${pointCount} for Slippery`);

        setTimeout(() => {
            setMessage(null);
        }, 5000);
    };

    const handleHillClick = () => {
        setPointCount(pointCount + 10);
        setMessage(`You have updated your point count to ${pointCount} for Hill`);

        setTimeout(() => {
            setMessage(null);
        }, 5000);
    };

    const handleRoadworkClick = () => {
        setPointCount(pointCount + 4);
        setMessage(`You have updated your point count to ${pointCount} for Roadwork`);

        setTimeout(() => {
            setMessage(null);
        }, 5000);
    };

    const handleRockfallClick = () => {
        setPointCount(pointCount + 15);
        setMessage(`You have updated your point count to ${pointCount} for Rockfall`);

        setTimeout(() => {
            setMessage(null);
        }, 5000);
    };

    
      const handleCloseCrossing = () => {
        setIsCrossingOpen(false);
      };

    return(
        <div>
            {message ? (
            <div>{message}</div>
            ) : (
            <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
                <div style={{ flex: '1 1 33%', display: 'flex', justifyContent: 'center' }}>
                <Icon onClick={handleCrossingClick} style={{ fontSize: '64px' }}>
                <img src="/deer.png" alt="Crossing Icon" style={{ width: '100%', height: '100%' }} />
                </Icon>
                </div>
                <div style={{ flex: '1 1 33%', display: 'flex', justifyContent: 'center' }}>
                <Icon onClick={handleCurveClick} style={{ fontSize: '64px' }}>
                <img src="/curve.png" alt="Curve Icon" style={{ width: '100%', height: '100%' }} />
                </Icon>
                </div>
                <div style={{ flex: '1 1 33%', display: 'flex', justifyContent: 'center' }}>
                <Icon onClick={handleSlipperyClick} style={{ fontSize: '64px' }}>
                <img src="/slippery.png" alt="Slippery Icon" style={{ width: '100%', height: '100%' }} />
                </Icon>
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
                <div style={{ flex: '1 1 33%', display: 'flex', justifyContent: 'center' }}>
                <Icon onClick={handleHillClick} style={{ fontSize: '64px' }}>
                <img src="/hill.png" alt="Hill Icon" style={{ width: '100%', height: '100%' }} />
                </Icon>
                </div>
                <div style={{ flex: '1 1 33%', display: 'flex', justifyContent: 'center' }}>
                <Icon onClick={handleRoadworkClick} style={{ fontSize: '64px' }}>
                <img src="/roadwork.png" alt="RoadWork Icon" style={{ width: '100%', height: '100%' }} />
                </Icon>
                </div>
                <div style={{ flex: '1 1 33%', display: 'flex', justifyContent: 'center' }}>
                <Icon onClick={handleRockfallClick} style={{ fontSize: '64px' }}>
                <img src="/rockfall.png" alt="RockFall Icon" style={{ width: '100%', height: '100%' }} />
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
            padding:"50px",
            margin: "20px",
          }}
        >
            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
                        <div style={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center' }}>
                            <Icon onClick={handleDeerCrossingClick} style={{ fontSize: '64px' }}>
                            <img src="/deer.png" alt="Deer Icon" style={{ width: '100%', height: '100%' }} />
                     </Icon>
                </div>
                <div style={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center' }}>
                            <Icon onClick={handleTruckCrossingClick} style={{ fontSize: '64px' }}>
                            <img src="/truck.png" alt="Truck Icon" style={{ width: '100%', height: '100%' }} />
                            </Icon>
            </div>
         </div>
         <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
                     <div style={{ flex: '1 1 33%', display: 'flex', justifyContent: 'center' }}>
                         <Icon onClick={handleFarmCrossingClick} style={{ fontSize: '64px' }}>
                         <img src="/farm.png" alt="Farm Icon" style={{ width: '100%', height: '100%' }} />
                         </Icon>
                     </div>
                     <div style={{ flex: '1 1 33%', display: 'flex', justifyContent: 'center' }}>
                         <Icon onClick={handleBearCrossingClick} style={{ fontSize: '64px' }}>
                         <img src="/bear.png" alt="Bear Icon" style={{ width: '100%', height: '100%' }} />
                         </Icon>
                     </div>
                     <div style={{ flex: '1 1 33%', display: 'flex', justifyContent: 'center' }}>
                         <Icon onClick={handleSnowmobileCrossingClick} style={{ fontSize: '64px' }}>
                         <img src="/snowmobile.png" alt="Snowmobile Icon" style={{ width: '100%', height: '100%' }} />
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
    )
};

export default RoadHazards;