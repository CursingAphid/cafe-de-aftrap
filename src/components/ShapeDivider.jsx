import React from 'react';

const ShapeDivider = ({ topColor, bottomColor }) => {
  return (
    <div className="relative w-full h-20 overflow-hidden z-10">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {/* Top section - fills the entire area */}
        <path
          d="M0,0L1200,0L1200,120L0,120Z"
          fill={bottomColor}
        />
        {/* Bottom section with jagged edge extending downward */}
        <path
          d="M0,120L120,20L280,100L450,15L580,85L750,5L920,90L1050,25L1200,75L1200,120Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
};

export default ShapeDivider;
