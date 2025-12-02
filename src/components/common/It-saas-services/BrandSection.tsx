"use client";
import React from "react";
import { trustedBrands } from "@/utils/brandData"; // ✔ Correct import

interface BrandSectionProps {
  title: string;
}

const BrandSection: React.FC<BrandSectionProps> = ({ title }) => {
  return (
    <section className="w-full py-16 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg w-[95%] max-w-7xl p-10">
        
        {/* Heading */}
        <h2 className="text-center text-[32px] font-merriweather font-bold mb-10">
          {title}
        </h2>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {trustedBrands.logos.map((brand, index) => (  // 🔥 FIXED HERE!
            <div
              key={index}
              className="bg-[#F7F7F7] rounded-xl shadow-md flex justify-center items-center h-[120px] p-6 hover:scale-105 transition-transform"
            >
              <img
                src={brand.image}
                alt={brand.alt}
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandSection;
