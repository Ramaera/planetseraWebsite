"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import "./navigation.css";
import { useParams } from "next/navigation";
import RelatedPtoductData from "@/app/products/components/RelatedProducts/RelatedProductData";

const NavItem = ({ page }) => {
  const { id } = useParams();
  const specificProduct = RelatedPtoductData.find((prod) => prod.id === id);
  const dispatch = useDispatch();
  // console.log(page);
  const colorMe = useSelector((state) => state.colorUs.color);
  const changeColor = () => {
    dispatch(changeColor("#ff4f4f"));
  };

  return (
    <div
      className={
        page === "products"
          ? `relative  w-[96%]  z-30 justify-between m-auto mt-6 rounded-3xl h-[90px] md:flex hidden`
          : page === "shop"
          ? `relative  w-11/12 xl:w-10/12	left-0 z-30 justify-between md:flex hidden`
          : `absolute  w-11/12 xl:w-10/12 left-0 z-30 justify-between md:flex hidden`
      }
      style={{
        background:
          page === "products" && (specificProduct?.colored || "black"),
      }}>
      <Link
        className={page === "products" ? "scale-[0.5] mb-8" : "scale-[0.8]"}
        href="/"
        onClick={() => changeColor()}>
        <img className="" src="/images/logo/logo.webp" alt="logo" />
      </Link>
      <ul
        style={{
          color: (page === "shop" || page === "about") && "black",
        }}
        id="navigation"
        className={
          page === "products"
            ? `hidden md:flex md:text-base xl:text-lg space-x-6 text-white lg:float-right rounded-3xl`
            : `hidden md:flex  md:text-base xl:text-lg space-x-6 text-white lg:float-right rounded-3xl pb-6`
        }>
        <li
          className={
            page === "/" &&
            ` text-gray-600 w-28  justify-center  mx-24 active-11 `
          }>
          <Link href="/" onClick={() => changeColor()}>
            Home
          </Link>
        </li>

        <li
          className={
            page === "product" &&
            ` text-gray-600 w-28 justify-center mx-24  active-11 `
          }>
          <Link href="/product">Product</Link>
        </li>

        <li
          className={
            page === "shop" &&
            ` text-white w-28  justify-center mx-24  active-11 `
          }
          style={{
            backgroundColor: page === "shop" && colorMe,
          }}>
          <Link href="/shop">Shop</Link>
        </li>

        <li
          className={
            page === "about" &&
            ` text-white w-28  justify-center mx-24  active-11 `
          }
          style={{
            backgroundColor: page === "about" && colorMe,
          }}>
          <Link href="/about">About</Link>
        </li>
        <li
          className={
            page === "contactUs" &&
            ` text-gray-600 w-28 mx-24  justify-center  active-11 `
          }>
          <Link href="/contact-us" className="mr-1">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
