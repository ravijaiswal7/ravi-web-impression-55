
import { useState, useEffect } from 'react';

interface LoadingImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const LoadingImage = ({ src, alt, className = "", width, height }: LoadingImageProps) => {
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setLoading(false);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {imageSrc && (
        <img 
          src={imageSrc} 
          alt={alt} 
          className={`w-full h-full object-cover transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

export default LoadingImage;
