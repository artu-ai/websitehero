import React from 'react';

interface ConamerLogoNewProps {
  className?: string;  // Optional className prop
}

export const ConamerLogoNew: React.FC<ConamerLogoNewProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <image 
        href="https://res.cloudinary.com/dfmpmintr/image/upload/v1726512049/Untitled_33_bjukg3.png" 
        width="100%" // Adjust these values as needed for size
        height="100%" 
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
};
