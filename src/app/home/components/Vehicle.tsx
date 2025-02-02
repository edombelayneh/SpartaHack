import React from 'react';
import Image from 'next/image';
import CowIcon from './CowIcon'; // Adjust the import path as necessary

interface VehicleProps {
  redirectProfile: () => void;
  cowNum: number;
}

const Vehicle: React.FC<VehicleProps> = ({ redirectProfile, cowNum}) => {
  if (cowNum === 2) {
    return (
        <div style={{ overflow: 'hidden', margin: 0, padding: 0}} id="carId">
            {/* Car */}
            <span style={{margin: 0, padding: 0}} id="car">
                <Image
                    src="/2seatcar.png"
                    alt="Car"
                    style={{ transform: 'rotate(90deg)', objectFit: "contain" }}
                    fill={true}
                />
            </span>

            {/* Cow1 */}
            <span style={{position: 'absolute', top: "53vh", left: "31vw"}}>
                <CowIcon
                    onClick={redirectProfile}
                    name="Test"
                    size={80}
                    url="/defaultCow.png"
                />
            </span>
            
            {/* Cow2 */}
            <span style={{position: 'absolute', top: "53vh", left: "51vw"}}>
                <CowIcon
                    onClick={redirectProfile}
                    name="Test2"
                    size={80}
                    url="/defaultCow.png"
                />
            </span>
        </div>
    );
  }
  return null;
};



export default Vehicle;