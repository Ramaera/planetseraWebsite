import React from "react";
import ShopHeader from "./components/ShopHeader/ShopHeader";
import BestSelling from "./components/BestSelling/BestSelling";
import ShopBuy from "./components/ShopBuy/ShopBuy";
import BuyProduct from "./components/ShopProduct/ShopProduct";
import ShopSpicesFooter from "./components/ShopSpicesFooter/ShopSpicesFooter";
import Footer from "@/components/Footer/Footer";

const Shop = () => {
  return (
    <>
      <ShopHeader />
      <BestSelling />
      <ShopBuy />
      <BuyProduct />
      <ShopSpicesFooter />
      <Footer />
    </>
  );
};

export default Shop;
