"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import type { Member } from "@/utils/team";

interface MemberCarouselProps {
  members: Member[];
}

export default function MemberCarousel({ members }: MemberCarouselProps) {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [index, setIndex] = useState(0);

  // 🔥 Auto detect mobile / desktop
  useEffect(() => {
    const update = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 3);
      setIndex(0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, members.length - cardsPerView);

  return (
    <div className="w-full overflow-hidden">

      {/* SLIDER TRACK */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${index * (100 / cardsPerView)}%)`,
        }}
      >
        {members.map((p, i) => (
          <div
            key={i}
            className="px-4 shrink-0"
            style={{
              width: `${100 / cardsPerView}%`,
            }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
              
              {/* Blue Top */}
              <div className="bg-[#2858D3] h-[260px] flex justify-center items-center">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={220}
                  height={220}
                  className="h-[220px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center flex-1">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-gray-700">{p.role}</p>
                <p className="text-gray-500 mt-1">{p.exp}</p>

                <div className="flex justify-center mt-4">
                  <Linkedin className="w-7 h-7 text-blue-700 hover:scale-110 transition" />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-6 space-x-3">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
              index === i ? "bg-orange-500 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
