import React from 'react';

const ReviewsShapeDivider = ({ topColor, bottomColor }) => {
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
          d="M0,120L70,40L140,100L210,25L280,85L350,15L420,90L490,30L560,80L630,20L700,75L770,10L840,70L910,25L980,85L1050,5L1120,60L1190,35L1200,50L1200,120Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
};

export default ReviewsShapeDivider;
