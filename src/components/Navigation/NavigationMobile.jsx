"use client";
import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import "../../styles/mediaQuery.css";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

usePathname;
const NavigationMobile = ({ page }) => {
  const router = useRouter();
  const currentRoute = usePathname();
  // console.log("router--", currentRoute);

  const colorMe = useSelector((state) => state.colorUs.color);

  const dispatch = useDispatch();

  const changeColor = () => {
    dispatch(changeColor("#ff4f4f"));
  };
  const [showMenu, setShowMenu] = useState(false);
  const toggleClick = () => {
    setShowMenu(true);
    // document.getElementById("navDropdown").style.display = "none";
    var x = document.getElementById("navDropdown");
    if (x.style.display === "none") {
      x.style.display = "block";
      // x.style.marginBottom = "500px";
      // x.style.transition = "all 3s";
    } else {
      x.style.display = "none";
    }
  };

  return (
    <div className="container">
      <div id="mobileNav" className="container flex w-full pb-1">
        <div className="basis-3/12 pl-2">
          <img
            loading="lazy"
            src="/images/logo/logo.webp"
            alt="logo"
            className=" absolute w-16 mt-2"
          />
        </div>
        <div className="basis-9/12 flex justify-end pr-3 absolute right-0 z-30">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleClick}
            aria-hidden="true"
            className="self-center icon-design text-white"
            style={{
              color: (page === "about" || page === "products") && colorMe,
            }}
          />
          {/* <i class="fa fa-bars self-center icon-design text-white"></i> */}
        </div>
      </div>
      {showMenu && (
        <div id="navDropdown" className="w-full z-20  top-0 absolute">
          <ul id="mobilenavigation">
            <li>
              <Link
                href="/"
                passHref
                onClick={() => changeColor()}
                className={
                  currentRoute === "/" ? "bg-black	 py-4 px-5  rounded-2xl" : ""
                }>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                passHref
                className={
                  currentRoute === "/product"
                    ? "bg-black	 py-4 px-5  rounded-2xl"
                    : ""
                }>
                Product
              </Link>
            </li>

            <li>
              <Link
                href="/shop"
                passHref
                className={
                  currentRoute === "/shop"
                    ? "bg-black	 py-4 px-5 rounded-2xl"
                    : ""
                }>
                Shop
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                passHref
                className={
                  currentRoute === "/about"
                    ? "bg-black	 py-4 px-5 rounded-2xl"
                    : ""
                }>
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                passHref
                className={
                  currentRoute === "/contact-us"
                    ? "bg-black	 py-4 px-5  rounded-2xl"
                    : ""
                }>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavigationMobile;
