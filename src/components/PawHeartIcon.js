import React from 'react';

const PawHeartIcon = ({ size = 20, color = "#FBBF24", className = "" }) => {
  return (
    <span
      className={`paw-heart-icon ${className}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMaskImage: `url('/paw.png')`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskImage: `url('/paw.png')`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
      }}
    />
  );
};

export default PawHeartIcon;
