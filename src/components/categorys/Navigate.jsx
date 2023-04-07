import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";
const Navigate = () => {
  return (
    <motion.div
      /* variants={fadeIn("left", "tween", 0.5, 1)} */
      className="flex flex-col md:flex-row p-5 mb-12 gap-6 items-center justify-center "
    >
      <div className="flex gap-6">
        <Link to="/">
          <div className="w-[120px] flex justify-center items-center md:gap-8 rounded-3xl shadow-lg shadow-gray-500 hover:scale-105 duration-200  px-6 p-3 cursor-pointer ">
            Tenis
          </div>
        </Link>
        <Link to="/product2">
          <div className="w-[120px] flex justify-center items-center md:gap-8 rounded-3xl shadow-lg shadow-gray-500 hover:scale-105 duration-200  px-6 p-3 cursor-pointer ">
            Chaquetas
          </div>
        </Link>
      </div>
      <div className="flex gap-6 ">
        <Link to="/product3">
          <div className="w-[120px] flex justify-center items-center md:gap-8 rounded-3xl shadow-lg shadow-gray-500 hover:scale-105 duration-200  px-6 p-3 cursor-pointer ">
            Sudaderas
          </div>
        </Link>

        <Link to="/product4">
          <div className="w-[120px] flex justify-center items-center md:gap-8 rounded-3xl shadow-lg shadow-gray-500 hover:scale-105 duration-200  px-6 p-3 cursor-pointer ">
            Camisetas
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navigate;
