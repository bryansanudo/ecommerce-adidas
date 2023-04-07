import React from "react";
import Section from "@/components/common/Section";

import Navigate from "@/components/categorys/Navigate";

import { MdOutlineAddShoppingCart } from "react-icons/md";

const Product4 = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const portfolios = [
    {
      id: 19,
      src: "https://i.ibb.co/mCTjTpF/1.webp",
      nameProduct: "AEROREADY TO MOVE",
      price: 78961,
      quantity: 1,
      delay: 1,
    },
    {
      id: 20,
      src: "https://i.ibb.co/N9ypFbZ/2.webp",
      nameProduct: "ADVENTURE NATURE",
      price: 219950,
      quantity: 1,
      delay: 2,
    },
    {
      id: 21,
      src: "https://i.ibb.co/4dS6KH7/3.webp",
      nameProduct: "GRAPHIC FOIL",
      price: 76671,
      quantity: 1,
      delay: 3,
    },
    {
      id: 22,
      src: "https://i.ibb.co/QpbskGL/4.webp",
      nameProduct: "POLO COLOMBIA",
      price: 209950,
      quantity: 1,
      delay: 4,
    },
    {
      id: 23,
      src: "https://i.ibb.co/rfSTgTK/5.webp",
      nameProduct: "OWN THE RUN",
      price: 139950,
      quantity: 1,
      delay: 5,
    },
    {
      id: 24,
      src: "https://i.ibb.co/7vb40Wp/6.webp",
      nameProduct: "TECHFIT",
      price: 139950,
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

export default Product4;
