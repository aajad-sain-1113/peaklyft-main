import React from "react";

interface IndustryProps {
  data: {
    title: string;
    heading: string;
    services: string[];
    demoBtn: string;
    knowBtn: string;
  };
}

const IndustrySection: React.FC<IndustryProps> = ({ data }) => {
  return (
    <>
      <section
        className="relative text-white w-full flex flex-col items-center"
        style={{
          backgroundImage: "url('/saas-bg.svg')",
          backgroundSize: "cover",
          minHeight: "85vh",
        }}
      >
        <div className="absolute inset-0 bg-[#4E6FF2]/90" />
        <div className="absolute inset-0 bg-[url('/dot-bg.png')] opacity-20" />

        <div className="relative z-10 max-w-4xl text-center pt-20 px-4 md:-mt-12">

          <h3 className="text-lg font-semibold mb-8">{data.title}</h3>

          <h1 className="text-3xl md:text-5xl leading-tight mb-6">
            {data.heading}
          </h1>

          <div className="mt-6 text-lg flex justify-center gap-4 flex-wrap">
            {data.services.map((service, i) => (
              <span key={i}>
                {service}
                {i !== data.services.length - 1 && <span className="mx-1">|</span>}
              </span>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-6">
            <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm">
              {data.demoBtn}
            </button>
            <button className="border border-white hover:bg-white hover:text-secondary px-6 py-2 rounded-lg text-sm">
              {data.knowBtn} →
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default IndustrySection;
