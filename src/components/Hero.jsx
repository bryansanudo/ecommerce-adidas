import React from "react";
import { FaArrowDown } from "react-icons/fa";

import { motion } from "framer-motion";
import { TypingText, TitleText } from "@/components/CustomTexts";
import { staggerContainer, zoomIn } from "@/utils/motion";
import heroVideo from "@/assets/heroVideo.mp4";
import Contact from "@/components/Contact";

const Hero = () => {
  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <motion.section
      name="home"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="min-h-screen flex flex-col justify-start items-center text-cente pt-[150px] "
    >
      <TypingText
        title="VAPING SHOP"
        textStyles="font-bold text-4xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#6057ca] to-[#CA6057] hover:from-[#CA6057] hover:to-[#6057ca] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl"
      />
      <TypingText
        title="Stop Smoking Just Vaping "
        textStyles="py-3 text-2xl"
      />

      <div className="max-w-xl pt-4 font-light  mb-10">
        <TitleText
          title="Eliana Caro Suaza"
          textStyles="animate-pulse text-4xl"
        />
      </div>

      <motion.div variants={zoomIn(1, 2)}>
        <Contact />

        <video
          src={heroVideo}
          loop
          autoPlay
          muted
          type="video/mp4"
          playsInline
          className="h-[300px] w-[220px]  object-cover   rounded-xl shadow-xl shadow-gray-600"
        />
      </motion.div>

      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </motion.section>
  );
};

export default Hero;
