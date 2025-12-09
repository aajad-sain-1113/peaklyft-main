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
    <section className="bg-[#4E6FF2] mb-4 py-14 px-3 relative">

      <h3
  className="
    text-center 
    font-semibold 
    text-white
    text-2xl          
    md:text-3xl      
    lg:text-4xl       
    leading-snug 
    mb-8
  "
>
  AntWalk Events for BFSI Industry
</h3>



      {/* WRAPPER */}
      <div className="max-w-6xl mx-auto relative">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {events.map((event, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <EventCard {...event} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LEFT BUTTON */}
        <button
          className="
            custom-prev
            absolute top-1/2 -translate-y-1/2
            -left-3 sm:-left-5 md:-left-7 lg:-left-9
            p-2
            rounded-full
            hover:scale-110 transition
            z-20
          "
        >
          <svg
            viewBox='0 0 512 512'
            className='w-6 h-6 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]'
          >
            <path
              fill='white'
              d='M256 8C119.043 8 8 119.043 8 256s111.043 248 248 248 248-111.043 248-248S392.957 8 256 8zm95.03 273.941H227.314v70.059c0 10.708-12.926 16.145-20.485 8.586L121.2 264.485c-4.687-4.687-4.687-12.284 0-16.971l85.629-96.102c7.559-7.559 20.485-2.122 20.485 8.586v70.059H351.03c6.627 0 12 5.373 12 12v29.884c0 6.627-5.373 12-12 12z'
            />
          </svg>
        </button>

        {/* RIGHT BUTTON */}
        <button
          className="
            custom-next
            absolute top-1/2 -translate-y-1/2
            -right-3 sm:-right-5 md:-right-7 lg:-right-9
            p-2
            rounded-full
            hover:scale-110 transition
            z-20
          "
        >
          <svg
            viewBox='0 0 512 512'
            className='w-6 h-6 text-white rotate-180 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]'
          >
            <path
              fill='white'
              d='M256 8C119.043 8 8 119.043 8 256s111.043 248 248 248 248-111.043 248-248S392.957 8 256 8zm95.03 273.941H227.314v70.059c0 10.708-12.926 16.145-20.485 8.586L121.2 264.485c-4.687-4.687-4.687-12.284 0-16.971l85.629-96.102c7.559-7.559 20.485-2.122 20.485 8.586v70.059H351.03c6.627 0 12 5.373 12 12v29.884c0 6.627-5.373 12-12 12z'
            />
          </svg>
        </button>

      </div>

      {/* Footer Button */}
      <div className="text-center mt-10">
        <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">
          View Events Calendar →
        </button>
      </div>

    </section>
  );
};

export default EventsSlider;
