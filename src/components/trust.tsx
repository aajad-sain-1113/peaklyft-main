"use client";

import Image from "next/image";

const Trust = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Why trust <span className="text-primary">Peaklyft</span>
      </h2>

      <div className="border-4 border-secondary rounded-3xl md:p-[21px] p-4 shadow-sm">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-3">
          
          <div className="w-full flex justify-center">
            <Image
              src="/trust.png"
              alt="Radar Chart"
              width={521}
              height={493}
              className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[521px] object-contain"
            />
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full md:max-w-[208px]">
            <p className="text-[20px] md:text-[22px] font-medium leading-[30px]">
              Our pyramid of
              <span className="text-secondary">TRUST</span>
            </p>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src="/stepper.gif"
              alt="Trust Pyramid"
              width={521}
              height={377}
              className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[521px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trust;
