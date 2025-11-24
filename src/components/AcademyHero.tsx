"use client";

import Image from "next/image";

interface Props {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

const AcademyHero = ({ badge, title, description, buttonText, image }: Props) => {
  return (
    <section className="container mx-auto pt-8 pb-16 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <p className="text-primary family text-[24px] font-bold italic leading-[30px] mb-3">{badge}</p>

        <h1 className="text-4xl md:text-[45px] font-semibold mb-6 leading-[67.5px]">{title}</h1>

        <p className="text-[#4A4848] text-[20px] font-medium leading-[27px] mb-8 max-w-xl">{description}</p>

        <button className="bg-linear-to-r from-orange-400 to-orange-600 px-6 py-3 rounded-lg text-white shadow-md hover:opacity-90 transition">
          {buttonText}
        </button>
      </div>

      <div className="flex-1">
        <Image
          src={image}
          alt="academy image"
          width={552}
          height={399}
          className="rounded-3xl w-[552px] h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default AcademyHero;
