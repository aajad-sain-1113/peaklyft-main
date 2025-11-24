"use client";

import Image from "next/image";
import Link from "next/link";

interface WhatsNewContentType {
  title: {
    normalStart: string;
    highlight: string;
    normalEnd: string;
  };
  subtitle: string;
  description: string;
}

interface NewsItem {
  image: string;
  tag: string;
  title: string;
  desc: string;
  link: string;
}

const WhatsNew = ({
  content,
  data,
}: {
  content: WhatsNewContentType;
  data: NewsItem[];
}) => {
  return (
    <section className="w-full pb-20">
      <div
        className="w-full h-[220px] md:h-[240px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banner2.png')" }}
      ></div>

      <div className="container mx-auto px-4 mt-[-180px] relative z-20">
        <div className="flex flex-col md:flex-row items-start gap-5">
          <div className="w-full md:w-[260px] lg:w-[300px]">
            <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
              {content.title.normalStart} <br />
              {content.title.highlight}
              {content.title.normalEnd}
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold">
              {content.subtitle}
            </h3>

            <p className="text-gray-600 mt-2 text-base leading-6">
              {content.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            {data.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="bg-white rounded-[22px] shadow-md hover:shadow-xl transition
                           p-4 pb-6 w-full md:w-[317px]"
              >
                <div className="bg-white border-0 border-solid rounded-[3px] flex flex-col min-height-full overflow-hidden relative transition-all duration-[250ms] w-full">
                  <div className="relative w-full h-[189px] rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="px-2.5">
                    <h4 className="mt-4 text-base font-medium leading-6">
                      {item.title}
                    </h4>

                    <p className="text-[#706B6B] text-[10px] font-normal leading-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
