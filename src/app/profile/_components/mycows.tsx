// mycows contains all of the icons for the user to interact with their cows
// once a icon is clicked, it runs a function to update the user's cow count and then display a text message about the update
// after 5 seconds, the text message will disappear and the user can interact with the icons again

import { Icon } from '@mui/material';
import React, { useState } from 'react';

const MyCows: React.FC = () => {
    const [cowCount, setCowCount] = useState(0);
    const [hamBurgerCount, setHamBurgerCount] = useState(0);
    const [message, setMessage] = useState<string | null>(null);

    const handleMyCowClick = () => {
        setCowCount(cowCount + 1);
        setMessage(`My Cows! You have updated your cow count to ${cowCount + 1}`);

        setTimeout(() => {
            setMessage(null);
        }, 5000);
    };

    const handleMcDonaldsClick = () => {
        setHamBurgerCount(hamBurgerCount + cowCount);
        setCowCount(0);
        setMessage(`Cash in my Cows! You now have ${hamBurgerCount} hamburgers and 0 cows`);

        setTimeout(() => {
            setMessage(null);
        }, 5000);
    }

    const handleGravestoneClick = () => {
        setMessage(`Bury your Cows! Your opponents now have 0 cows`);

        setTimeout(() => {
            setMessage(null);
        }, 5000);
    }
    
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
            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
            <div style={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center' }}>
                <Icon onClick={handleMyCowClick} style={{ fontSize: '64px' }}>
                <img src="/CowSide.png" alt="My Cows" style={{ width: '100%', height: '100%' }} />
                </Icon>
            </div>
            <div style={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center' }}>
                <Icon onClick={handleMcDonaldsClick} style={{ fontSize: '64px' }}>
                <img src="/McDonalds.png" alt="McDonalds Icon" style={{ width: '100%', height: '100%' }} />
                </Icon>
            </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
            <div style={{ flex: '1 1 33%', display: 'flex', justifyContent: 'center' }}>
                <Icon onClick={handleGravestoneClick} style={{ fontSize: '64px' }}>
                <img src="/Gravestone.png" alt="Gravestone Icon" style={{ width: '100%', height: '100%' }} />
                </Icon>
            </div>
            <div style={{ flex: '1 1 33%', display: 'flex', justifyContent: 'center' }}>
                <Icon onClick={handleIconClick} style={{ fontSize: '64px' }}>
                <img src="/MadCow.png" alt="Hospital Icon" style={{ width: '100%', height: '100%' }} />
                </Icon>
            </div>
            <div style={{ flex: '1 1 33%', display: 'flex', justifyContent: 'center' }}>
                <Icon onClick={handleIconClick} style={{ fontSize: '64px' }}>
                <img src="/DollarGeneral.png" alt="DG Icon" style={{ width: '100%', height: '100%' }} />
                </Icon>
            </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
            <div style={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center' }}>
                <Icon onClick={handleIconClick} style={{ fontSize: '64px' }}>
                <img src="/Church.png" alt="Church Icon" style={{ width: '100%', height: '100%' }} />
                </Icon>
            </div>
            <div style={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center' }}>
                <Icon onClick={handleIconClick} style={{ fontSize: '64px' }}>
                <img src="/Tire.png" alt="Tire Icon" style={{ width: '100%', height: '100%' }} />
                </Icon>
            </div>
            </div>
        </div>
            )}
        </div>
    );
};

export default MyCows;