"use client";

import Image from "next/image";
import type { AboutData } from "@/utils/about"; 

interface AboutSectionProps {
  about: AboutData;
}

export default function AboutSection({ about }: AboutSectionProps) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2">
          <Image
            src={about.image}
            alt={about.title}
            width={600}
            height={500}
            className="w-full rounded-[20px] shadow-xl border border-gray-200 object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            {about.title}
          </h2>

          <p className="text-base md:text-lg text-black leading-[1.8] mb-6">
            {about.description1}
          </p>

          <p className="text-base md:text-lg text-black leading-[1.8]">
            {about.description2}
          </p>
        </div>

      </div>
    </section>
  );
}
