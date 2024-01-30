"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import "@/public/styles/navigation.css";
import { useParams } from "next/navigation";
import RelatedPtoductData from "@/app/products/components/RelatedProducts/RelatedProductData";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

// import { useSelector } from "react-redux";
import Login from "../Login";

const NavItem = ({ page }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const { id } = useParams();
  const specificProduct = RelatedPtoductData.find((prod) => prod.id === id);
  const [isVisible, setIsVisible] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };

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
      }`}
    >
      <Link className={"scale-[0.6] mb-8 sm:mt-[-0.6rem]"} href="/">
        <img className="" src="/images/logo/logo.webp" alt="logo" />
      </Link>
      <ul
        style={{
          color:
            (page === "blog" ||
              page === "shop" ||
              page === "cart" ||
              page === "about" ||
              page === "address" ||
              page === "products") &&
            "black",
        }}
        id="navigation"
        className={`hidden md:flex  md:text-base xl:text-lg space-x-6  lg:float-right rounded-3xl`}
      >
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
          <Link href="/contact-us">Contact Us</Link>
        </li>

        <li>
          <Link className="flex" href="/cart">
            <Badge badgeContent={cartItems.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </li>
        <li className="mr-1" onClick={openLoginModal}>
          {/* <Link href="/contact-us" className="mr-1"> */}
          Login
          {/* </Link> */}
        </li>
        <Login isOpen={loginModal} closeLoginModal={closeLoginModal} />
      </ul>
    </div>
  );
};

export default NavItem;
