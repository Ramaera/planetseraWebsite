"use client";
import React, { useEffect } from "react";
import BestSelling from "../shop/components/BestSelling/BestSelling";
import ShopHeader from "../shop/components/ShopHeader/ShopHeader";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import AtcBox from "./components/AtcBox/AtcBox";
import LadiPouch from "./components/LadiPouch/LadiPouch";
import ZipperPouch from "./components/Zipper Pouch/ZipperPouch";

const ShopAll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavItem page={"shop-all"} />
      <div className="h-16 sm:h-10 xl:h-20 2xl:h-28  hidden md:block"></div>
      <NavigationMobile page={"shop-all"} />

      <ZipperPouch />
      <LadiPouch />
      <AtcBox />
    </>
  );
};

export default ShopAll;
