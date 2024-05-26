import React from 'react';

const Imaging = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

export default Imaging;