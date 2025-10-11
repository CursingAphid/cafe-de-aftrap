import React from 'react';

const ReviewsShapeDivider = ({ topColor, bottomColor }) => {
  return (
    <div className="relative w-full h-20 overflow-hidden z-10 -mt-1 -mb-1">
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
          d="M0,120L200,40L400,100L600,20L800,90L1000,10L1200,80L1200,120Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
};

export default ReviewsShapeDivider;
