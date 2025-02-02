import React from 'react';

interface CowIconProps {
    name?: string;
    size?: number;
    url: string;
}

const CowIcon: React.FC<CowIconProps> = ({name, size = 24, url }) => {
    return (
        <svg
            name={name}
            width={size}
            height={size}
            aria-hidden="true"
        >
            <use xlinkHref={`${url}#cow`} />
        </svg>
    );
};

export default CowIcon;
