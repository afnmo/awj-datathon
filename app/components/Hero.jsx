"use client";
import React from "react";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
// import { header } from "../../public/assets/assets";
import { useRouter } from "next/navigation";

const Hero = ({ id }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    window.open('https://awjj.useanything.com/onboarding', '_blank');
  };

  return (
    <section
      id={id}
      className="relative px-16 pt-8 pb-20 min-h-[500px] md:min-h-[700px] lg:min-h-[500px] overflow-hidden bg-[radial-gradient(ellipse_200%_100%_at_bottom,rgba(200,240,245,1),rgba(245,255,255,0.8))]"
      >
      <div className="container mx-auto relative z-10">
        <div>
          <div className="tag">Version 1.0</div>
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#002E80] text-transparent bg-clip-text mt-6 mb-4 py-4">
          AWJ: Your AI Financial Assistant
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6 leading-loose">
          In today’s fast-paced financial world, AWJ empowers investors with <strong>instant</strong>, <strong>accurate</strong>, and <strong>easy-to-interpret data</strong>. Compare <strong>financial data</strong> across companies, sectors, and quarters, analyze performance, and make <strong>informed investment decisions</strong> with confidence.  
          </p>

          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary" onClick={handleButtonClick}>
            Try AWJ Now
            </button>
            <button className="btn btn-text  gap-1">
              <a href="#services" className="inline-flex items-center gap-1">
                <MdArrowForward className="h-5 w-5" />
                <span>Learn more</span>
              </a>
            </button>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
