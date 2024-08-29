import React from 'react';
import Image from 'next/image';

const Imaging = ({ src, alt, ...props }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={800}  // Replace with the actual width of your image
      height={600} // Replace with the actual height of your image
      {...props}
    />
  );
};

export default Imaging;
