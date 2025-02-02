import { Icon } from '@mui/material';
import React, { useState } from 'react';

const RoadHazards: React.FC = () => {
    const [pointCount, setPointCount] = useState(0);
    const [message, setMessage] = useState<string | null>(null);


    const handleCrossingClick = () => {
        setPointCount(pointCount + 1);
        setMessage(`You have updated your point count to ${pointCount} for Crossing`);

        setTimeout(() => {
            setMessage(null);
        }, 5000);
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
        </div>
    )
};

export default RoadHazards;