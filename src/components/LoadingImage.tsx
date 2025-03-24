import { useState, useEffect } from 'react';

interface LoadingImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fallbackSrc?: string;
}

const LoadingImage = ({ src, alt, className = "", width, height, fallbackSrc }: LoadingImageProps) => {
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setLoading(false);
      setError(false);
    };
    img.onerror = () => {
      if (fallbackSrc) {
        setImageSrc(fallbackSrc);
        setLoading(false);
      }
      setError(true);
    };
  }, [src, fallbackSrc]);

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
