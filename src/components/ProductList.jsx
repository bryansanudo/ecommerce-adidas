import React from "react";
import { data } from "@/data";

const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
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
    <div className="grid grid-cols-[repeat(3,1fr)] gap-5">
      {data.map((product) => (
        <div className="rounded-[10px] hover:bg-red-500" key={product.id}>
          <figure className="overflow-hidden">
            <img
              src={product.img}
              alt={product.nameProduct}
              className="w-full h-[300px] object-cover rounded-[20px]"
            />
          </figure>
          <div className="py-[15px] px-[30px] leading-8 flex flex-col gap-[10px]">
            <h2>{product.nameProduct}</h2>
            <p className="text-[18px] font-extrabold">${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
