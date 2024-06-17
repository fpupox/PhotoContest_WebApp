import React from 'react';

const Imaging = ({ src, alt, ...props }) => {
  return <Image src={src} alt={alt} {...props} />;
};

export default Imaging;