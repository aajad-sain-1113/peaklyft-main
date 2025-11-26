"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface AcademyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface TitleStructure {
  normalStart: string;
  highlight: string;
  normalEnd: string;
}

interface Category {
  id: string;
  name: string;
  title?: TitleStructure;
  subtitle?: string;
  academies: AcademyItem[];
}

interface Props {
  data: Category[];
  defaultCategory?: string;
}

const AcademiesSection: React.FC<Props> = ({ data, defaultCategory }) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    defaultCategory || data[0].id
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [cardsPerView, setCardsPerView] = useState(3);

  // 🔥 RESPONSIVE CARDS PER VIEW
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 480) setCardsPerView(1);
      else if (window.innerWidth < 768) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const currentCategory = data.find((cat) => cat.id === activeCategory);
  const totalCards = currentCategory?.academies.length || 0;

  const maxIndex = Math.max(0, totalCards - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="w-full py-[60px] px-4">
      <div className="container mx-auto">

        {/* Heading */}
        <h1 className="font text-center mb-[13px]">
          {currentCategory?.title?.normalStart}{" "}
          <span className="text-primary">
            {currentCategory?.title?.highlight}
          </span>{" "}
          {currentCategory?.title?.normalEnd}
        </h1>

        <p className="text-center text-base text-[#4A4848] mb-[43px]">
          {currentCategory?.subtitle}
        </p>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row rounded-t-[10px] justify-between w-full gap-8">
          {data.map((category, index) => (
            <button
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentIndex(0);
              }}
              key={index}
              className={`px-6 py-4 w-full lg:h-[62px] h-auto border rounded-t-[10px] text-[18px] font-medium leading-[30px] transition-all duration-300 
                ${
                  activeCategory === category.id
                    ? "bg-secondary text-white"
                    : "bg-white text-secondary hover:text-main hover:bg-secondary"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="relative md:p-12 bg-cover bg-center"
          style={{
            backgroundImage: "url('/carouselbg.png')",
            height: "auto",
            minHeight: "425px",
          }}
        >
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 text-white p-2 md:p-3 rounded-full transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 text-white p-2 md:p-3 rounded-full transition-all duration-300 cursor-pointer"
          >
            <ChevronRight size={28} />
          </button>

          {/* Cards Wrapper */}
          <div className="relative mx-8 md:mx-16">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / cardsPerView)
                  }%)`,
                }}
              >
                {currentCategory?.academies.map((academy) => (
                  <div
                    key={academy.id}
                    className="shrink-0 px-2 w-[339.33px] h-[298px]"
                  >
                    <div className="bg-white rounded-[8px] p-6 shadow-xl w-full h-full">
                      <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center mb-6">

                        {/* FIXED IMAGE (always shows without reload) */}
                        <Image
                          src="/search.svg"
                          alt={academy.title}
                          width={65}
                          height={65}
                          priority
                        />
                      </div>

                      <h3 className="text-xl md:text-[18px] font-semibold leading-[28px] text-gray-900 mb-4">
                        {academy.title}
                      </h3>

                      <p className="text-base font-normal leading-[26px]">
                        {academy.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AcademiesSection;
