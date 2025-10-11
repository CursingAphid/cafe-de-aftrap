import React from 'react';

const SocialShapeDivider = ({ topColor, bottomColor }) => {
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
        {/* Bottom section with jagged edge extending downward */}
        <path
          d="M0,120L100,30L200,90L300,20L400,80L500,10L600,85L700,25L800,75L900,15L1000,70L1100,5L1200,60L1200,120Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
};

export default SocialShapeDivider;
