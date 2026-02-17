"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface UniqueTabType {
  id: number;
  title: string;
  image: string;
  heading: string;
  description: string;
}

interface SectionContent {
  title: {
    normalStart: string;
    highlight: string;
    normalEnd: string;
  };
  subtitle: string;
}

const UniqueSection = ({
  tabs,
  sectionContent,
}: {
  tabs: UniqueTabType[];
  sectionContent: SectionContent;
}) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [tabs.length]);

  return (
    <section className="py-8 container p-2.5 md:py-12">
      <h2 className="text-center font text-[28px] md:text-[36px] leading-[36px] md:leading-[42px] mb-[10px] px-4">
        {sectionContent.title.normalStart}{" "}
        <span className="text-primary">{sectionContent.title.highlight}</span>{" "}
        {sectionContent.title.normalEnd}
      </h2>

      <p className="text-center text-[#4A4848] font-normal leading-[24px] md:leading-[30px] mx-auto mb-[30px] md:mb-[41px] text-sm md:text-base px-4">
        {sectionContent.subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        <div className="flex flex-col gap-5">
          {tabs.map((item, index) => (
            <div key={item.id} className="flex flex-col gap-4">
              <button
                onClick={() => setActive(index)}
                className={`
                  w-full md:w-[456px] h-[66px] text-left px-6 py-5 rounded-[8px] transition-all text-secondary
                  ${
                    active === index
                      ? "bg-secondary text-white"
                      : "bg-primary-foreground text-foreground hover:text-main hover:bg-secondary"
                  }
                `}
              >
                <div className="flex gap-3 items-center">
                  <span
                    className={`
                      w-[15px] h-[15px] rounded-full shrink-0
                      ${active === index ? "bg-white" : "bg-secondary"}
                    `}
                  ></span>
                  <span className="text-base text-start font-medium font-sans">{item.title}</span>
                </div>
              </button>

              {active === index && (
                <div className="md:hidden animate-fade-up animate-duration-500">
                  <Image
                    src={tabs[active].image}
                    alt="demo"
                    width={500}
                    height={300}
                    className="rounded-xl w-full object-contain h-auto max-h-[300px]"
                  />

                  <h3 className="mt-4 mb-2.5 text-[20px] font-semibold leading-6 text-center px-4">
                    {tabs[active].heading}
                  </h3>

                  <p className="text-black mt-2 text-sm font-normal leading-[24px] text-center px-4">
                    {tabs[active].description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="relative hidden md:block">
          <div className="animate-fade-up animate-duration-500">
            <Image
              src={tabs[active].image}
              alt="demo"
              width={500}
              height={300}
              className="rounded-xl w-full object-contain h-[408px]"
            />

            <h3 className="mt-6 mb-2.5 text-[22px] font-semibold leading-6 text-center">
              {tabs[active].heading}
            </h3>

            <p className="text-black mt-2 text-base font-normal leading-[26px] max-w-xl text-center mx-auto">
              {tabs[active].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
