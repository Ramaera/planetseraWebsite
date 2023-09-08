"use client";
import React, { useEffect } from "react";
import ShopHeader from "./components/ShopHeader/ShopHeader";
import BestSelling from "./components/BestSelling/BestSelling";
import ShopBuy from "./components/ShopBuy/ShopBuy";
import BuyProduct from "./components/ShopProduct/ShopProduct";
import ShopSpicesFooter from "./components/ShopSpicesFooter/ShopSpicesFooter";
import Footer from "@/components/Footer/Footer";
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
      <ShopBuy />
      <BuyProduct />
      <ShopSpicesFooter />
    </>
  );
};

export default Shop;
