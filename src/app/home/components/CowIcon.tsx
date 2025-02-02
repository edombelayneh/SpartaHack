import React from 'react';

interface CowIconProps {
    name?: string;
    size?: number;
    url: string;
    rotate?: boolean;
}

const CowIcon: React.FC<CowIconProps> = ({ name, size = 24, url, rotate = false }) => {
    return (
        <img
            src={url}
            width={size}
            height={size}
            alt={name}
            aria-hidden="true"
            style={rotate ? { transform: "rotate(180deg)" } : undefined}
        />
    );
};

export default CowIcon;
