"use client";
import ProductDetailsInfo from "@/app/products/components/ProductDetailsInfo/ProductDetailsInfo";
import RelatedProducts from "@/app/products/components/RelatedProducts/RelatedProducts";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import NavItem from "@/components/Navigation/NavItem";
import { useEffect } from "react";
import MetaDataproducts from "@/app/products/components/MetaDataproducts/MetaDataproducts";
import Faq from "@/app/products/components/Faq/Faq";

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
        <Faq />
      </section>
    </>
  );
};

export default ProductDetails;
