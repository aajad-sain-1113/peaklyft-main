"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { onboardingCards } from "@/utils/salesSections";
import Image from "next/image";
import { Button } from "../../ui/button";

export default function OnboardingSection() {
  const [index, setIndex] = useState(0);

  const visibleCount = 2; // 2 cards visible on desktop/tablet
  const total = onboardingCards.length;
  const maxIndex = total - visibleCount;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const goToSlide = (i: number) => setIndex(i);

  return (
    <section className="w-full flex flex-col md:flex-row gap-10 py-20 container">
      {/* LEFT — CAROUSEL */}
      <div className="relative w-[610px] md:w-1/2 overflow-hidden">
        <motion.div
          animate={{ x: -index * 50 + "%" }} // 2 cards = 50% width each
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex"
        >
          {onboardingCards.map((card) => (
            <div
              key={card.id}
              className="w-1/2 shrink-0 p-4" // each card takes 50%
            >
              <div className="w-[285px] h-[300px] bg-white rounded-[20px] shadow-md border-2 border-secondary p-5">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={400}
                  className="rounded-[20px]"
                />
                <h3 className="font-base font-semibold mt-4">{card.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* DOTS */}
        <div className="flex gap-2 mt-4 justify-center">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-3 w-3 rounded-full transition ${
                index === i ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-6 text-center">
          <Button className="rounded-full px-6 py-5 bg-orange-500 hover:bg-orange-600">
            Explore all solutions
          </Button>
        </div>
      </div>

      {/* RIGHT — STATIC CONTENT */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <p className="text-blue-600 font-medium text-lg">
          Get new hires up to speed faster
        </p>

        <h2 className="text-4xl font-merriweather font-bold mt-2">Onboarding</h2>

        {/* Role Tabs */}
        <div className="flex gap-3 mt-6">
          {["Account Executive", "Sales Manager", "Sales Director"].map((item) => (
            <div
              key={item}
              className="border px-4 py-2 rounded-lg font-medium bg-white shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="mt-6 text-xl leading-relaxed">
          Get new sales hires closing deals faster with structured onboarding.
          Reduce ramp-up time with role-specific training.
        </p>
      </div>
    </section>
  );
}
