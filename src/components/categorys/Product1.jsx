import React from "react";
import Section from "@/components/common/Section";

import Navigate from "@/components/categorys/Navigate";

import { motion } from "framer-motion";

import { staggerContainer, fadeIn } from "@/utils/motion";

import { MdOutlineAddShoppingCart } from "react-icons/md";

const Product1 = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const portfolios = [
    {
      id: 1,
      src: "https://i.ibb.co/8KbnmN3/1.webp",
      nameProduct: "FORUM 84 LOW CLASSIC",
      price: 539950,
      quantity: 1,
      delay: 1,
    },
    {
      id: 2,
      src: "https://i.ibb.co/6w4FFJt/2.webp",
      nameProduct: "ULTRABOOST LIGHT",
      price: 899950,
      quantity: 1,
      delay: 2,
    },
    {
      id: 3,
      src: "https://i.ibb.co/MsgBH55/3.webp",
      nameProduct: "CORERACER",
      price: 239950,
      quantity: 1,
      delay: 3,
    },
    {
      id: 4,
      src: "https://i.ibb.co/WpHGZ0c/4.webp",
      nameProduct: "POSTMOVE MID",
      price: 329950,
      quantity: 1,
      delay: 4,
    },
    {
      id: 5,
      src: "https://i.ibb.co/tD4WB4M/5.webp",
      nameProduct: "SUPERSTAR",
      price: 499950,
      quantity: 1,
      delay: 5,
    },
    {
      id: 6,
      src: "https://i.ibb.co/BgSQqGd/6.webp",
      nameProduct: "SAMBA VEGANOS",
      price: 399950,
      quantity: 1,
      delay: 6,
    },
  ];

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Section name="portafolio">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center  ">
          <Navigate />
          <div className="grid gap-8 md:px-12 grid-cols-1  lg:grid-cols-3">
            {portfolios.map((product) => (
              <motion.div
                variants={fadeIn("right", "spring", product.delay * 0.5, 0.75)}
                key={product.id}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={product.src}
                  className="  shadow-lg shadow-gray-400  object-cover object-top rounded-xl "
                />
                <p className="mt-6 capitalize text-sm md:text-lg">
                  {product.nameProduct}
                </p>
                <div className=" capitalize text-sm md:text-lg flex mb-2  items-center justify-center gap-2">
                  <div className="flex gap-5">${product.price}</div>
                  <button onClick={() => onAddProduct(product)} className=" ">
                    <MdOutlineAddShoppingCart className="text-2xl animate-pulse" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Product1;
