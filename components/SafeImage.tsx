"use client";

import { useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackColor?: string;
}

export default function SafeImage({ src, alt, className = "", fallbackColor = "bg-teal-100" }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`${fallbackColor} ${className} flex items-center justify-center`}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-teal-300">
          <path
            d="M12 2C10.5 2 9 3 9 5V8C7.5 8 6 9 6 11V14C6 17 8 19 10 20V22H14V20C16 19 18 17 18 14V11C18 9 16.5 8 15 8V5C15 3 13.5 2 12 2Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
