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
import Footer from "./components/Footer/Footer";

const Products = () => {
  return (
    <>
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
      <Footer page={"product"} />
    </>
  );
};

export default Products;
