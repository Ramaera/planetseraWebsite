"use client";
import React, { useEffect } from "react";
import ShopHeader from "@/app/shop/components/ShopHeader/ShopHeader";
import BestSelling from "@/app/shop/components/BestSelling/BestSelling";
import MouthWatering from "@/app/shop/components/MouthWatering/MouthWatering";
import NonvegTadka from "@/app/shop/components/NonvegTadka/NonvegTadka";
import KitchenSpices from "@/app/shop/components/KitchenSpices/KitchenSpices";
import WeekandTadka from "@/app/shop/components/WeekandTadka/WeekandTadka";
import ShopBuy from "@/app/shop/components/ShopBuy/ShopBuy";
import ComingProduct from "@/app/shop/components/ComingProduct/ComingProduct";
import ShopSpicesFooter from "@/app/shop/components/ShopSpicesFooter/ShopSpicesFooter";
import Head from "next/head";

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head />
      <title>
        Choose a wide range of Best Spices & Masala Online at affordable prices
      </title>
      <meta name="text" content="planetsera" />
      <meta
        name="title"
        content="choose a wide range of Best Spices & Masala Online at affordable prices"
      />
      <meta
        name="description"
        content="To increase the diversity, we provide a wide range of Blended Spices & Masala online, as well as Whole Spices and Classic Spices."
      />
      <meta
        name="keywords"
        content="sabji masala , mix masala powder , sabji masala powder , sabzi masala , best sabji masala , vegetable masala powder , red chilli , red chilli powder , chili powder , lal mirch powder , mirch powder , garam masala , garam masala ingredients , whole garam masala , black pepper powder , pepper powder , kali mirch powder , black chilies , coriander powder , dhaniya powder , dhania powder , whole coriander , dried coriander , turmeric powder , haldi powder , turmeric uses , organic turmeric powder , turmeric powder benefits , haldi packet , chaat masala , masala spices , chaat masala ingredients , chaat masala powder , masala chat , spices online , amchur powder , masala powder , amchoor powder , mango powder , cumin powder , food spices , jeera powder , masala powder , jeera powder price , spice powder , food spices , meat masala , meat masala ingredients"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.planetsera.com/shop" />

      <meta property="og:url" content="https://www.planetsera.com/shop" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="choose a wide range of Best Spices & Masala Online at affordable prices"
      />
      <meta
        property="og:description"
        content="To increase the diversity, we provide a wide range of Blended Spices & Masala online, as well as Whole Spices and Classic Spices."
      />
      <meta
        name="og_site_name"
        property="og:site_name"
        content="planetsera.com"
      />
      <meta property="og:image" content="banner image url" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="planetsera.com" />
      <meta property="twitter:url" content="https://www.planetsera.com/shop" />
      <meta
        name="twitter:title"
        content="choose a wide range of Best Spices & Masala Online at affordable prices"
      />
      <meta
        name="twitter:description"
        content="To increase the diversity, we provide a wide range of Blended Spices & Masala online, as well as Whole Spices and Classic Spices."
      />
      <meta name="twitter:image" content="banner image url" />

      <ShopHeader />
      <BestSelling />
      <MouthWatering />
      {/* <NonvegTadka /> */}
      <KitchenSpices />
      <WeekandTadka />
      <ComingProduct />
      <ShopBuy />
      {/* <BuyProduct /> */}
      {/* <ShopSpicesFooter /> */}
    </>
  );
};

export default Shop;
