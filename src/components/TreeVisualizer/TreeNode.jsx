import React from 'react';

const TreeNode = ({ number, x, y }) => {
  const radius = 30;
  const borderColor = 'white';
  const textColor = 'white';
  const size = radius * 2;
  const strokeWidth = 3;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        stroke={borderColor}
        strokeWidth={strokeWidth}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={textColor}
        fontSize="16"
        fontFamily="Arial, sans-serif"
      >
        {number}
      </text>
    </svg>
  );
};

export default TreeNode;