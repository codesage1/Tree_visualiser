import React from 'react';

const TreeConnection = ({ startX, startY, endX, endY }) => {
    return (
        <line
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke="white"
            strokeWidth={2}
        />
    );
};

export default TreeConnection;
