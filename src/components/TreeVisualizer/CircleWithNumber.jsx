import React from "react";

const CircleWithNumber = ({ number }) => {
  // Fixed values for the circle
  const radius = 50; // Circle radius
  const borderColor = "white"; // Border color
  const textColor = "white"; // Text color (matches the border)
  const size = radius * 2; // SVG size (diameter)
  const strokeWidth = 5; // Border thickness

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Circle with border */}
      <circle
        cx={radius} // Center X
        cy={radius} // Center Y
        r={radius - strokeWidth / 2} // Adjust radius for border to fit inside the SVG
        fill="none" // No fill
        stroke={borderColor} // Border color
        strokeWidth={strokeWidth} // Border thickness
      />
      {/* Number inside the circle */}
      <text
        x="50%" // Center horizontally
        y="50%" // Center vertically
        textAnchor="middle" // Align text center horizontally
        dominantBaseline="middle" // Align text center vertically
        fill={textColor} // Text color
        fontSize="30" // Font size
        fontFamily="Arial, sans-serif" // Font style
      >
        {number}
      </text>
    </svg>
  );
};

export default CircleWithNumber;
