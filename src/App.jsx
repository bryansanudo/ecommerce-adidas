import Header from "@/components/Header";

import HeroSection from "@/components/HeroSection";

import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Product1 from "@/components/categorys/Product1";
import Product2 from "@/components/categorys/Product2";
import Product3 from "@/components/categorys/Product3";
import Product4 from "@/components/categorys/Product4";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div className={darkMode && "dark"}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <HeroSection isMenuShown={isMenuShown} />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Product1
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                />
              }
            />
            <Route
              path="/product2"
              element={
                <Product2
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                />
              }
            />
            <Route
              path="/product3"
              element={
                <Product3
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                />
              }
            />
            <Route
              path="/product4"
              element={
                <Product4
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
