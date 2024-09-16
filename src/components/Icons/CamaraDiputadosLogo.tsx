import React from 'react';

interface CamaraDiputadosLogoProps {
  className?: string;  // Optional className prop
}

export const CamaraDiputadosLogo: React.FC<CamaraDiputadosLogoProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <image 
        href="https://res.cloudinary.com/dfmpmintr/image/upload/v1726266866/camara_de_diputados_m19cbs.png" 
        width="100%" 
        height="100%" 
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
};
