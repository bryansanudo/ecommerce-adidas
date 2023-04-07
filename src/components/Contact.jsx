import React from "react";

import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";

const Contact = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://www.instagram.com/elianacaro12/",
      icon: <FaInstagram />,
    },
    {
      id: 2,
      link: "https://facebook.com",
      icon: <FaFacebook />,
    },
    {
      id: 3,
      link: "https://tiktok.com",
      icon: <FaTiktok />,
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center  bg-gradient-to-r from-[#6057ca] to-[#CA6057] text-white py-2 rounded-lg mb-10 shadow-xl shadow-gray-600">
        <motion.div
          variants={fadeIn("right", "tween", 2, 1.5)}
          className="flex w-full items-center justify-evenly text-3xl"
        >
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrerr"
              className="duration-500 hover:scale-150"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
