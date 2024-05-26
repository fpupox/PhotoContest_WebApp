import React from 'react';

const Image = ({ src, alt, ...props }) => {
  return <Image src={src} alt={alt} {...props} />;
};

export default Image;