"use client";
import HeaderTwo from "./components/Header/HeaderTwo";
import GalleryMenu from "./components/GalleryMenu/GalleryMenu";
import MasalaGallery from "./components/MasalaGallery/MasalaGallery";
import SuccessSection from "./components/Success/SuccessSection";
import SpicySection from "./components/Spicy/SpicySection";
import ExtraOrdinarySection from "./components/ExtraOrdinary/ExtraOrdinarySection";
import FallLove from "./components/FallInLove/FallLove";
import ProductInfoSection from "./components/ProductInfo/ProductInfoSection";
import ProductSection from "./components/ProductSection/ProductSection";
import IngredientSection from "./components/Ingredients/IngredientSection";
import BlendedSection from "./components/Blended/BlendedSection";
import OurProduct from "./components/OurProduct/OurProduct";
import GallerySection from "./components/Gallery/GallerySection";
import InstagramRecipe from "./components/InstagramRecipe/InstagramRecipe";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import { useEffect } from "react";

const Products = () => {
  return (
    <>
      <Head />
      <title>
        Buy Affordable Spice Products and Masala Powder on your fingertip
      </title>
      <meta name="text" content="planetsera" />
      <meta
        name="title"
        content="Buy affordable Spice Products and Masala Powder on your fingertip"
      />
      <meta
        name="description"
        content="Planetsera is prepared using the cold grind technique, which helps maintain natural flavor and aroma even after grinding. Spices are protected from moisture and spills by being packaged in Zip Lock Bags."
      />
      <meta
        name="keywords"
        content="sabji masala , mix masala powder , sabji masala powder , sabzi masala , best sabji masala , vegetable masala powder , red chilli , red chilli powder , chili powder , lal mirch powder , mirch powder , garam masala , garam masala ingredients , whole garam masala , black pepper powder , pepper powder , kali mirch powder , black chilies , coriander powder , dhaniya powder , dhania powder , whole coriander , dried coriander , turmeric powder , haldi powder , turmeric uses , organic turmeric powder , turmeric powder benefits , haldi packet , chaat masala , masala spices , chaat masala ingredients , chaat masala powder , masala chat , spices online , amchur powder , masala powder , amchoor powder , mango powder , cumin powder , food spices , jeera powder , masala powder , jeera powder price , spice powder , food spices , meat masala , meat masala ingredients"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.planetsera.com/Product" />

      <meta property="og:url" content="https://www.planetsera.com/Product" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Buy affordable Spice Products and Masala Powder on your fingertip"
      />
      <meta
        property="og:description"
        content="Planetsera is prepared using the cold grind technique, which helps maintain natural flavor and aroma even after grinding. Spices are protected from moisture and spills by being packaged in Zip Lock Bags."
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
      <meta
        property="twitter:url"
        content="https://www.planetsera.com/Product"
      />
      <meta
        name="twitter:title"
        content="Buy affordable Spice Products and Masala Powder on your fingertip"
      />
      <meta
        name="twitter:description"
        content="Planetsera is prepared using the cold grind technique, which helps maintain natural flavor and aroma even after grinding. Spices are protected from moisture and spills by being packaged in Zip Lock Bags."
      />
      <meta name="twitter:image" content="banner image url" />

      <HeaderTwo />
      <GalleryMenu />
      <MasalaGallery />
      <SuccessSection />
      <SpicySection />
      <ExtraOrdinarySection />
      <FallLove />
      <ProductInfoSection />
      <ProductSection />
      <IngredientSection />
      <BlendedSection />
      <OurProduct />
      <GallerySection />
      <InstagramRecipe />
    </>
  );
};

export default Products;
