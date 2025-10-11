import React from 'react';

const MenuShapeDivider = ({ topColor, bottomColor }) => {
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
          fill={topColor}
        />
        {/* Bottom section with different jagged edge extending downward */}
        <path
          d="M0,120L80,40L160,100L240,20L320,90L400,10L480,85L560,25L640,95L720,15L800,80L880,30L960,75L1040,5L1120,85L1200,40L1200,120Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
};

export default MenuShapeDivider;
