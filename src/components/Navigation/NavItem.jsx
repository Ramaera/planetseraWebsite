"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import "@/public/styles/navigation.css";
import { useParams } from "next/navigation";
import RelatedPtoductData from "@/app/products/components/RelatedProducts/RelatedProductData";
import { useEffect, useState } from "react";

const NavItem = ({ page }) => {
  const { id } = useParams();
  const specificProduct = RelatedPtoductData.find((prod) => prod.id === id);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  // console.log(page);
  const colorMe = useSelector((state) => state.colorUs.color);
  const changeColor = () => {
    dispatch(changeColor("#ff4f4f"));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed  w-full  left-0 z-30 justify-between md:flex hidden h-[78px] sm:pr-10 sm:pl-4 ${
        isVisible
          ? "	navHeader text-black border-[1px] border-slate-300	"
          : "text-white"
      }`}>
      <Link className={"scale-[0.6] mb-8 sm:mt-[-0.6rem]"} href="/">
        <img className="" src="/images/logo/logo.webp" alt="logo" />
      </Link>
      <ul
        style={{
          color:
            (page === "blog" ||
              page === "shop" ||
              page === "about" ||
              page === "products") &&
            "black",
        }}
        id="navigation"
        className={`hidden md:flex  md:text-base xl:text-lg space-x-6  lg:float-right rounded-3xl`}>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/product">Product</Link>
        </li>

        <li>
          <Link href="/shop">Shop</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>

        <li>
          <Link href="/contact-us" className="mr-1">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
