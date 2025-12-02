"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import EventCard from "./EventCard";
import { EventItem } from "@/utils/eventData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  events: EventItem[];
}

const EventsSlider: React.FC<Props> = ({ events }) => {
  return (
    <section className="bg-[#4E6FF2] py-16 px-4 relative">

      {/* 👍 WRAPPER FIX */}
      <div className="max-w-6xl mx-auto">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1 },     // Mobile
            768: { slidesPerView: 2 },     // Tablet
            1024: { slidesPerView: 3 },    // Desktop
          }}
          className="pb-12"
        >
          {events.map((event, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <EventCard {...event} />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

      {/* ⬅ LEFT BUTTON */}
      <button className="custom-prev absolute top-1/2 left-3 z-10 -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full shadow-lg hover:scale-110 transition">
        ←
      </button>

      {/* ➡ RIGHT BUTTON */}
      <button className="custom-next absolute top-1/2 right-3 z-10 -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full shadow-lg hover:scale-110 transition">
        →
      </button>

      <div className="text-center mt-10">
        <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">
          View Events Calendar →
        </button>
      </div>
    </section>
  );
};

export default EventsSlider;
