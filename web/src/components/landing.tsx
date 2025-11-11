"use client";
import Image from "next/image";
import Navbar from "./navbar";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/herobg.jpg')] bg-no-repeat bg-cover bg-center overflow-hidden">
      {/* ✅ Navbar - Always on TOP */}
      <div className="relative z-50">
        <Navbar />
      </div>
      {/* ✅ Overlay */}
      <div
        className="
          absolute inset-0
          bg-white
          [mask-image:radial-gradient(circle_at_50%_100%,transparent_0%,transparent_20%,white_55%)]
          pointer-events-none
          z-10
        "
      />
{/* <div
  className="
    absolute inset-0 z-30 pointer-events-none
     opacity-[0.38]
    bg-[url('/clear.png')] bg-repeat
  "
/> */}
      {/* ✅ Hero Content goes here */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="font-sans font-medium text-black
 text-3xl md:text-5xl tracking-tight leading-snug">
            Hydroponics That Thinks For Itself
          </h1>

            <p className="font-sans text-base md:text-lg text-gray-900 bg-white/30 backdrop-blur-md w-fit px-4 rounded-full 
          drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] [text-shadow:_0_2px_6px_rgba(0,0,0,0.3)] tracking-normal max-w-xl mx-auto leading-relaxed">
            Reinventing food, life, and the future.
            </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button
              className="
  flex items-center gap-2
  px-8 py-3
  font-sans font-semibold
  rounded-full
  bg-gradient-to-b from-[#98FF98] to-[#3EB489]
  text-white
  shadow-[0_4px_15px_rgba(0,0,0,0.25)]
  transition-all duration-300 ease-out
  hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
  hover:scale-[1.05]
"
            >
              Get Started
            </button>

            <button
              className="
  group relative flex items-center gap-3
  px-9 py-3
  rounded-full
  font-sans font-medium
  tracking-tight
  text-emerald-900
  bg-gradient-to-b from-[#98FFD8] via-[#C8FFE8] to-white
  shadow-[0_6px_22px_rgba(0,0,0,0.15)]
  transition-all duration-300 ease-out
  hover:scale-[1.06]
  hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]
"
            >
              

              {/* Label */}
              <span className="text-base">Explore</span>

              {/* Gloss highlight */}
              <span
                className="
    absolute inset-0 rounded-full
    bg-gradient-to-t from-transparent to-white/50
    pointer-events-none
  "
              ></span>

              {/* Glow aura on hover */}
              <span
                className="
    absolute -inset-1 rounded-full
    opacity-0 group-hover:opacity-30
    transition-opacity duration-300
    bg-[#98FFD8] blur-xl
    pointer-events-none
  "
              ></span>
            </button>
          </div>
        </div>
      </div> 
<div className="absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-[70vh] md:h-[80vh] pointer-events-none select-none">

      {/* Card 1: Slightly transparent, low layer */}
      <img
        src="/plant1.jpg"
        className="absolute top-[15%] left-[12%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] 
        rounded-3xl object-cover 
        shadow-[0_8px_30px_rgba(0,0,0,0.25)] 
        rotate-[-8deg] hover:rotate-[-10deg] hover:scale-105 transition-all duration-300
        z-20 opacity-75" 
        alt="Plant 1"
      />

      {/* Card 2: Fully visible, middle layer */}
      <img
        src="/plant2.jpg"
        className="absolute top-[70%] left-[20%] w-[90px] h-[90px] md:w-[130px] md:h-[130px] 
        rounded-3xl object-cover 
        shadow-[0_8px_30px_rgba(0,0,0,0.25)] 
        rotate-[5deg] hover:rotate-[2deg] hover:scale-105 transition-all duration-300
        z-40 opacity-100" 
        alt="Plant 2"
      />

      {/* Card 3: Fully visible, highest layer (most prominent) */}
      <img
        src="/plant3.jpg"
        className="absolute top-[15%] left-[45%] w-[110px] h-[110px] md:w-[160px] md:h-[160px] 
        rounded-3xl object-cover 
        shadow-[0_8px_30px_rgba(0,0,0,0.25)] 
        rotate-[-3deg] hover:rotate-[-5deg] hover:scale-105 transition-all duration-300
        z-50 opacity-100" 
        alt="Plant 3"
      />

      {/* Card 4: Most transparent, low layer */}
      <img
        src="/plant4.jpg"
        className="absolute top-[8%] right-[18%] w-[90px] h-[90px] md:w-[130px] md:h-[130px] 
        rounded-3xl object-cover 
        shadow-[0_8px_30px_rgba(0,0,0,0.25)] 
        rotate-[10deg] hover:rotate-[12deg] hover:scale-105 transition-all duration-300
        z-20 opacity-50" 
        alt="Plant 4"
      />

      {/* Card 5: Moderately visible, middle layer */}
      <img
        src="/plant5.jpg"
        className="absolute top-[60%] right-[10%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] 
        rounded-3xl object-cover 
        shadow-[0_8px_30px_rgba(0,0,0,0.25)] 
        rotate-[-5deg] hover:rotate-[-2deg] hover:scale-105 transition-all duration-300
        z-30 opacity-75" 
        alt="Plant 5"
      />

    </div>
 
    </div>
  );
}
