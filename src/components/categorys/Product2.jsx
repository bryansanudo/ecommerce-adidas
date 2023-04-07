import React from "react";
import Section from "@/components/common/Section";

import Navigate from "@/components/categorys/Navigate";

import { MdOutlineAddShoppingCart } from "react-icons/md";

const Product2 = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const portfolios = [
    {
      id: 7,
      src: "https://i.ibb.co/mCBG0qT/1.webp",
      nameProduct: "ADVENTURE PREMIUM",
      price: 679950,
      quantity: 1,
      delay: 1,
    },
    {
      id: 8,
      src: "https://i.ibb.co/ZTsm07C/2.webp",
      nameProduct: "TERMICA VARILITE",
      price: 649950,
      quantity: 1,
      delay: 2,
    },
    {
      id: 9,
      src: "https://i.ibb.co/Sd3VX6v/3.webp",
      nameProduct: "M 3S WB",
      price: 299950,
      quantity: 1,
      delay: 3,
    },
    {
      id: 10,
      src: "https://i.ibb.co/sywTYms/4.webp",
      nameProduct: "ADIDAS SPRT",
      price: 319950,
      quantity: 1,
      delay: 4,
    },
    {
      id: 11,
      src: "https://i.ibb.co/YhXj4xp/5.webp",
      nameProduct: "REAL MADRID",
      price: 499950,
      quantity: 1,
      delay: 5,
    },
    {
      id: 12,
      src: "https://i.ibb.co/yygb1wc/6.webp",
      nameProduct: "ANTHEM COLOMBIA",
      price: 699950,
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
    <Section name="portafolio">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center  ">
        <Navigate />
        <div className="grid gap-8 md:px-12 grid-cols-1  lg:grid-cols-3">
          {portfolios.map((product) => (
            <div
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
                <div className="flex gap-5">{product.price}</div>
                <button onClick={() => onAddProduct(product)} className=" ">
                  <MdOutlineAddShoppingCart className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Product2;
