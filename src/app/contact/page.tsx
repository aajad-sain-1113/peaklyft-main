"use client";

import { Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="w-full">
      <div
        className="w-full py-7 h-[300px] flex"
        style={{
          background: "url('/contact.png') no-repeat center center/cover",
        }}
      >
        <div className="container flex justify-center text-center items-center">
          <h1 className="text-4xl font-bold text-main font-serif">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[320px] bg-[#F5F6FA]">
        <div className="p-10 md:p-16">
          <h2 className="text-3xl font-semibold">Contact Us</h2>

          <p className="text-gray-600 mt-4 leading-6">
            We would love to speak with you. <br />
            Feel free to reach out using the below details.
          </p>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#1B2A4E]">
              Get In Touch
            </h3>

            <div className="flex items-center gap-3 mt-3">
              <Mail className="text-primary w-5 h-5" />
              <p className="text-gray-700">peaklyft@gmail.com</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#1B2A4E]">Hours</h3>

            <div className="flex items-center gap-3 mt-3">
              <Clock className="text-primary w-5 h-5" />
              <p className="text-gray-700">Mon–Fri 9:00AM – 6:00PM</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-10 text-center">
          <p className="text-[#1B2A4E] text-base md:text-lg font-medium">
            Fill out the form below and we will contact you as soon as possible!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-10 md:p-16">
          <h2 className="text-3xl font-semibold">Visit Us</h2>

          <div className="mt-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="27"
                  height="18"
                  fill="none"
                >
                  <path fill="url(#a)" d="M0 0h27v18H0z"></path>
                  <defs>
                    <pattern
                      id="a"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        href="#b"
                        transform="matrix(.00364 0 0 .00546 0 0)"
                      ></use>
                    </pattern>
                    <image
                      id="b"
                      width="275"
                      height="183"
                      href="data:image/png;base64,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"
                    ></image>
                  </defs>
                </svg>
              </span>
              <h3 className="font-semibold text-[#1B2A4E]">Corporate Office</h3>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[350px] md:min-h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.95032282229!2d77.63568587491977!3d12.907974787410551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151914b2b267%3A0xa1bd7f66f56d3633!2sAntWalk%20Pvt.%20Ltd%20%7C%20High%20Impact%20Learning!5e0!3m2!1sen!2sin!4v1708488906605!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
