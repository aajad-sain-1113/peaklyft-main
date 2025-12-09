"use client";
import { useState } from "react";
import { Linkedin } from "lucide-react";

export default function MemberCarousel({ members }) {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, members.length - 3);

  const next = () => setIndex((i) => (i === maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i === 0 ? maxIndex : i - 1));

  return (
    <div className="w-full md:w-3/4 relative overflow-hidden">
      {/* SLIDER */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${(index * 100) / 3}%)` }}
      >
        {members.map((p, i) => (
          <div key={i} className="w-1/3 px-5 shrink-0" style={{ minWidth: "33.33%" }}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-secondary/90 h-[230px] flex justify-center items-center">
                <img src={p.img} className="h-[200px] object-contain" />
              </div>

              <div className="p-6 text-center">
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

      {/* BUTTONS */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:bg-gray-200 transition"
      ></button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:bg-gray-200 transition"
      ></button>

      {/* DOTS */}
      <div className="flex justify-center mt-6 space-x-3">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-4 w-4 rounded-full cursor-pointer transition-all duration-600 ${
              index === i ? "bg-orange-500 scale-110" : "bg-black"
            }`}
            
          />
        ))}
      </div>
    </div>
  );
}
