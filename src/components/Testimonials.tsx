"use client";

import { testimonials } from "@/utils/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const chunkArray = (arr: any[], size: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Testimonials = () => {
  const slides = chunkArray(testimonials, 2); // 👈 2 cards per slide

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by <span className="text-primary">Founders & CTOs</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We partner with ambitious teams to build scalable, high-performance
            digital products backed by architecture-first thinking.
          </p>
        </div>

        {/* Custom Arrows */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 prev-btn cursor-pointer bg-white shadow p-3 rounded-full">
          <ChevronLeft />
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 next-btn cursor-pointer bg-white shadow p-3 rounded-full">
          <ChevronRight />
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {slides.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT — VIDEO */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <video
                    src={group[0]?.video}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* RIGHT — 2 CARDS */}
                <div className="space-y-6">
                  {group.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                    >
                      <p className="text-gray-700 leading-relaxed">
                        “{item.feedback}”
                      </p>

                      <div className="mt-4">
                        <h4 className="font-semibold text-primary">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {item.role} — {item.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;
