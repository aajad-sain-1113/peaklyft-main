import React from "react";
import Image from "next/image";

interface Props {
  tag: string;
  image: string;
  title: string;
  description: string;
  dateText: string;
  ctaText: string;
}

const EventCard: React.FC<Props> = ({ tag, image, title, description, dateText, ctaText }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden relative
                  w-[300px] max-w-full h-[530px] mx-auto sm:w-[340px]">

    <div className="absolute right-0 top-0 bg-[#D7EEFF] px-3 py-2 text-sm font-semibold
                    uppercase tracking-wide text-gray-700 shadow-md">
      {tag}
    </div>

    <div className="w-full h-[300px] relative">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-t-xl"
        priority
      />
    </div>

    <div className="p-4">
      <h3 className="font-bold text-xl">{title}</h3>

      <p className="text-gray-600 mt-1 leading-relaxed">
        {description}
      </p>

      <div className="flex justify-between items-center mt-0">

        {/* ⭐ CTA BUTTON WITH EXTRA CLASS */}
        <button className="cta-btn text-blue-600 font-semibold hover:underline transition-all">
          {ctaText}

          {/* ⭐ ARROW WITH OWN CLASS */}
          <span className="cta-arrow"> → </span>
        </button>

        <span className="bg-blue-600 text-white md:px-4 px-2 py-2 rounded-lg md:text-sm text-[10px]">
          {dateText}
        </span>
      </div>
    </div>
  </div>
);

export default EventCard;
