import React, { useEffect, useRef } from 'react';

const GradientBackgroundSection: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add grain effect using canvas
    if (!wrapperRef.current) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 100;
    canvas.height = 100;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.2';

    // Generate grain pattern
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const value = Math.random() * 255;
      imageData.data[i] = value;
      imageData.data[i + 1] = value;
      imageData.data[i + 2] = value;
      imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);

    wrapperRef.current.appendChild(canvas);

    return () => {
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div ref={wrapperRef} className="absolute inset-0 w-full h-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter
              id="filter0_f"
              x="-593"
              y="-763"
              width="1566"
              height="1566"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="146" result="effect1_foregroundBlur" />
            </filter>
            <filter
              id="filter1_f"
              x="-358"
              y="11"
              width="1096"
              height="1096"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="146" result="effect1_foregroundBlur" />
            </filter>
            <filter
              id="filter2_f"
              x="-216"
              y="17"
              width="764"
              height="764"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="146" result="effect1_foregroundBlur" />
            </filter>
            <filter
              id="filter3_f"
              x="-25"
              y="-288"
              width="958"
              height="958"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="146" result="effect1_foregroundBlur" />
            </filter>
          </defs>
          
          <g filter="url(#filter0_f)">
            <circle cx="190" cy="20" r="491" fill="#E9C0E9" />
          </g>
          <g filter="url(#filter1_f)">
            <circle cx="190" cy="559" r="256" fill="#FFC7CC" />
          </g>
          <g filter="url(#filter2_f)">
            <circle cx="166" cy="399" r="90" fill="#FBDD71" />
          </g>
          <g filter="url(#filter3_f)">
            <circle cx="454" cy="191" r="187" fill="white" />
          </g>
        </svg>
      </div>

      {/* Content goes here */}
      <div className="relative z-10">
        {children || (
          <h1 className="text-6xl md:text-8xl font-bold uppercase text-black text-center">
            Your Content
          </h1>
        )}
      </div>
    </section>
  );
};

export default GradientBackgroundSection;