import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import "./navigation.css";

const NavItem = ({ page }) => {
  const dispatch = useDispatch();
  // console.log(page);
  const colorMe = useSelector((state) => state.colorUs.color);
  const changeColor = () => {
    dispatch(changeColor("#ff4f4f"));
  };

  return (
    <div
      className={
        "absolute  w-10/12	 left-0 z-30 justify-between md:flex hidden"
      }>
      <Link className="scale-[0.8]" href="/" onClick={() => changeColor()}>
        <img className="" src="images/logo/logo.webp" alt="logoS" />
      </Link>
      <ul
        style={{
          color: page === "about" && "black",
        }}
        id="navigation"
        className={`hidden md:flex space-x-6 text-white lg:float-right ${
          page === "shop" && "text-black"
        } rounded-3xl pb-6 `}>
        <li
          className={
            page === "home" &&
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
          <Link href="/About">About</Link>
        </li>
        <li
          className={
            page === "contactUs" &&
            ` text-gray-600 w-28 mx-24  justify-center  active-11 `
          }>
          <Link href="/ContactUs" className="mr-1">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
