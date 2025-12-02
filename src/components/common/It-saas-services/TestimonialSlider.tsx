"use client";
import React, { useState, useEffect } from "react";

interface Item {
  logo: string;
  content: string;
  name: string;
  company: string;
}

interface Props {
  testimonials: Item[];
  rightImage: string;
}

const TestimonialSlider: React.FC<Props> = ({ testimonials, rightImage }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="text-center">
          <img src={testimonials[index].logo} className="mx-auto h-14" />
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            {testimonials[index].content}
          </p>

          <h3 className="mt-6 text-2xl font-merriweather font-bold">
            {testimonials[index].name}
          </h3>
          <p className="text-gray-500">{testimonials[index].company}</p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img src={rightImage} className="rounded-lg shadow-lg w-[90%]" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
