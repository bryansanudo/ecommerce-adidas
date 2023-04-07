import { motion } from "framer-motion";

import styles from "@/utils/styles";
import { footerVariants } from "@/utils/motion";
import { TypingText } from "@/components/CustomTexts";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  const useScroll = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />

      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex flex-col ">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-center lg:justify-between flex-wrap gap-4 ">
            <TypingText
              title="Eliana Caro Suaza"
              textStyles="font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#6057ca] to-[#CA6057] hover:from-[#CA6057] hover:to-[#6057ca] transition duration-500 ease-in-out transform   md:text-5xl"
            />
            <div className="flex items-center justify-center flex-wrap gap-5">
              <button type="button" onClick={useScroll}>
                <AiOutlineArrowUp
                  className="text-gray-400 text-2xl animate-bounce"
                  size={40}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
