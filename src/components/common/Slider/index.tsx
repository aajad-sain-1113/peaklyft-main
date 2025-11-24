"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface Brand {
  name: string;
  logo: string;
}

interface BrandSliderProps {
  title: string;
  brands: Brand[];
}

const BrandSlider: React.FC<BrandSliderProps> = ({ title, brands }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isClient, setIsClient] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(768);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (currentIndex === brands.length) {
      timeoutRef.current = window.setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    }

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, brands.length]);

  const renderBrand = (brand: Brand, index: number | string) => (
    <div
      key={index}
      className="shrink md:w-[220px] w-full h-[60px] border-l border-black flex items-center justify-center bg-card px-2.5"
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="w-[201px] h-[58.53px] object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement!.innerHTML = `<span class="text-card-foreground font-bold text-xl">${brand.name}</span>`;
        }}
      />
    </div>
  );

  return (
    <div
      className={`w-full max-w-[1188px] mx-auto bg-main shadow-[0px_13.35px_40.04px_0px_rgba(0,0,0,0.16)]
    pt-[30px] pb-[25px] px-[20px] md:px-[40px] overflow-hidden rounded-[14px] mt-[30px]
    ${isHome ? "h-auto" : "h-[249px]"}
  `}
    >
      <div className="max-w-[1188px] mx-auto">
        <h2 className="text-[20px] md:text-[28px] leading-[1.5em] font-bold text-center text-foreground mb-5">
          {title}
        </h2>

        <div className="relative">
          <div className="overflow-hidden bg-main">
            <div
              className={`flex gap-4 md:gap-6 ${
                isTransitioning
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }`}
              style={{
                transform: isClient
                  ? `translateX(-${
                      currentIndex * (windowWidth < 768 ? 164 : 244)
                    }px)`
                  : "none",
                width: "max-content",
                visibility: isClient ? "visible" : "hidden",
              }}
            >
              {brands.map((brand, index) => renderBrand(brand, index))}
              {brands.map((brand, index) => renderBrand(brand, `dup-${index}`))}
            </div>
          </div>

          <div className="absolute top-0 left-0 w-16 md:w-32 h-full pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
