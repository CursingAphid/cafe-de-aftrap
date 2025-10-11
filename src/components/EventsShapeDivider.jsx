import React from 'react';

const EventsShapeDivider = ({ topColor, bottomColor }) => {
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
          d="M0,120L90,35L180,95L270,25L360,85L450,15L540,90L630,30L720,80L810,20L900,75L990,10L1080,70L1170,5L1200,50L1200,120Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
};

export default EventsShapeDivider;
