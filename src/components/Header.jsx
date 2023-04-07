import React, { useState } from "react";
import { MdNightsStay, MdWbSunny, MdOutlineClose } from "react-icons/md";
import { BiCart } from "react-icons/bi";

const Header = ({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts,
  darkMode,
  setDarkMode,
}) => {
  const [active, setActive] = useState(false);
  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };
  return (
    <header className="fixed w-full bg-gray-900  text-white z-20">
      <nav className="flex justify-between items-center p-5">
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="w-8 h-8 cursor-pointer" />
          ) : (
            <MdNightsStay className="w-8 h-8 cursor-pointer" />
          )}
        </div>

        <img src="/logo.svg" alt="" className="h-20 text-white" />

        <div onClick={() => setActive(!active)}>
          <BiCart className="w-12 h-12 cursor-pointer" />
          <div className="absolute top-[52px] rigth-0 bg-black text-white w-[20px] h-[20px] flex justify-center items-center rounded-[50%]">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>

        <div
          className={`absolute top-[70px] right-0 text-black bg-white w-[350px] z-[50] rounded-[10px] ${
            active ? "" : "hidden"
          }`}
        >
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div
                    className="flex items-center justify-between p-[30px] border-b-2 border-b-black border-solid"
                    key={product.id}
                  >
                    <div className="flex justify-between flex-[0.8]">
                      <span className="font-normal text-[20px]">
                        {product.quantity}
                      </span>
                      <p className="text-[20px]">{product.nameProduct}</p>
                      <span className="font-bold text-[20px] ml-[10px]">
                        ${product.price}
                      </span>
                    </div>
                    <MdOutlineClose
                      className="text-red-500 cursor-pointer"
                      onClick={() => onDeleteProduct(product)}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center py-[20px] px-0 gap-[20px]">
                <h3 className="text-[20px] font-bold">Total:</h3>
                <span className="ttext-[20px] font-extrabold">${total}</span>
              </div>

              <button
                className="border-none bg-black text-white py-[15px] px-0 block w-full mt-[10px] rounded-b-[10px] font-[inherit] cursor-pointer text-[16px] "
                onClick={onCleanCart}
              >
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className="p-[20px] text-center">El carrito está vacío</p>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
