import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  [key: string]: unknown; // For additional HTML img attributes
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className, ...props }) => {
  return <img src={src} alt={alt} width={width} height={height} className={className} {...props} />;
};

export default Image;