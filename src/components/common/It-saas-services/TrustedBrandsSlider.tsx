"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

interface Brand {
  image: string;
  alt: string;
}

interface Props {
  title: string;
  logos: Brand[];
}

const TrustedBrandsSlider: React.FC<Props> = ({ title, logos }) => {
  return (
    <section className="w-full flex justify-center -mt-20 relative z-20 overflow-x-hidden">   {/* FIX 1 */}
      <div className="bg-white rounded-[30px] shadow-[0_8px_30px_rgba(0,0,0,0.15)] w-[95%] max-w-7xl px-12 py-8">

        <h2 className="text-center text-[38px] font-merriweather mb-12">
          {title}
        </h2>

        <Swiper
          slidesPerView={1}     // FIX 2 → default mobile view
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          spaceBetween={30}
          breakpoints={{
            480: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 }, // SAME AS YOUR CODE
          }}
        >
          {logos.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="bg-black rounded-xl flex justify-center items-center h-[110px] transition-transform duration-300 hover:scale-105 p-4 shadow-md">
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  width={200}
                  height={100}
                  className="h-full object-contain filter grayscale invert"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default TrustedBrandsSlider;
