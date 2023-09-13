"use client";
import ProductDetailsInfo from "../components/ProductDetailsInfo/ProductDetailsInfo";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import NavItem from "@/components/Navigation/NavItem";
import Footer from "@/components/Footer/Footer";
import logo from "../../../../public/images/logo/logo.webp";
import { useEffect } from "react";
import MetaDataproducts from "../components/MetaDataproducts/MetaDataproducts";
const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaDataproducts />
      <NavItem page={"products"} />
      <NavigationMobile page={"products"} />
      <section className=" w-full max-w-full box-border m-auto h-auto mt-16  md:mt-0 md:pt-20">
        <ProductDetailsInfo />
        <RelatedProducts />
      </section>
    </>
  );
};

export default ProductDetails;
