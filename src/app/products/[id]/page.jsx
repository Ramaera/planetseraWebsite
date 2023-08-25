"use client";
import ProductDetailsInfo from "../components/ProductDetailsInfo/ProductDetailsInfo";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import NavItem from "@/components/Navigation/NavItem";
import Footer from "@/components/Footer/Footer";
import logo from "../../../../public/images/logo/logo.webp";
const ProductDetails = () => {
  return (
    <>
      <NavItem page={"products"} />
      <NavigationMobile page={"products"} />
      <section className="absolute w-full max-w-full box-border m-auto h-auto mt-10  md:mt-0">
        <ProductDetailsInfo />
        <RelatedProducts />
        <Footer page={"products"} />
      </section>
    </>
  );
};

export default ProductDetails;
