"use client";

import type { EndSectionData } from "@/utils/Aboutend"; 

interface EndSectionProps {
  endSectionData: EndSectionData;
}

export default function EndSection({ endSectionData }: EndSectionProps) {
  return (
    <section className="py-16 md:py-24 text-center px-6 md:px-20 bg-white">

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold mb-5 md:mb-7">
        {endSectionData.title}
      </h2>

      {/* Subtitle */}
      <h3 className="text-2xl md:text-4xl font-extrabold mb-6 md:mb-7">
        {endSectionData.subtitle}
      </h3>

      {/* Description */}
      <p className="text-base md:text-lg text-black mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
        {endSectionData.description}
      </p>

      {/* Button */}
      <a
        href={endSectionData.buttonLink}
        className="
          inline-block 
          bg-orange-500 
          px-6 md:px-10 
          py-3 md:py-4 
          rounded-full 
          text-white 
          text-base md:text-lg 
          shadow-lg 
          hover:bg-orange-600 
          transition
        "
      >
        {endSectionData.buttonText}
      </a>
    </section>
  );
}
