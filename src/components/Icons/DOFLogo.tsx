import React from 'react';

interface DOFLogoProps {
  className?: string;  // Optional className prop
}

export const DOFLogo: React.FC<DOFLogoProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <image 
        href="https://res.cloudinary.com/dfmpmintr/image/upload/v1726510853/Untitled_30_qhw9jk.png" 
        width="110%" 
        height="110%" 
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
};
