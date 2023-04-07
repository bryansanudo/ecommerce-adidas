import React from "react";
import Section from "@/components/common/Section";

import Navigate from "@/components/categorys/Navigate";

import { MdOutlineAddShoppingCart } from "react-icons/md";

const Product3 = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const portfolios = [
    {
      id: 13,
      src: "https://i.ibb.co/xFqFmnD/1.webp",
      nameProduct: "AEROREADY 2",
      price: 131066,
      quantity: 1,
      delay: 1,
    },
    {
      id: 14,
      src: "https://i.ibb.co/0rnKKpL/2.webp",
      nameProduct: "TIRO 21",
      price: 209950,
      quantity: 1,
      delay: 2,
    },
    {
      id: 15,
      src: "https://i.ibb.co/YcRLK5G/3.webp",
      nameProduct: "ADICOLOR 3D",
      price: 279950,
      quantity: 1,
      delay: 3,
    },
    {
      id: 16,
      src: "https://i.ibb.co/p1BqnzQ/4.jpg",
      nameProduct: "TRIFOLIO POLAR",
      price: 359950,
      quantity: 1,
      delay: 4,
    },
    {
      id: 17,
      src: "https://i.ibb.co/TTJH3bY/5.webp",
      nameProduct: "R.Y.V",
      price: 259990,
      quantity: 1,
      delay: 5,
    },
    {
      id: 18,
      src: "https://i.ibb.co/m4p0Jgf/6.webp",
      nameProduct: "SERENO 19",
      price: 179950,
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
                className="  shadow-lg shadow-gray-400 object-cover object-top rounded-xl "
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

export default Product3;
