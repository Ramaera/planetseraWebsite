import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const NavigationMobile = ({ page }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
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
            src="images/logo/logo.webp"
            alt="logo"
            className=" absolute w-16 mt-2"
          />
        </div>
        <div className="basis-9/12 flex justify-end pr-3 absolute right-0 z-30">
          <i
            class="fa fa-bars self-center icon-design text-white"
            aria-hidden="true"
            onClick={toggleClick}
            // style={{
            //   color: page === "about" && colorMe,
            // }}
            style={{ color: page === ("about" || "shop") && colorMe }}></i>
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
                href="/Product"
                passHref
                className={
                  currentRoute === "/Product"
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
                href="/About"
                passHref
                className={
                  currentRoute === "/About"
                    ? "bg-black	 py-4 px-5 rounded-2xl"
                    : ""
                }>
                About
              </Link>
            </li>

            <li>
              <Link
                href="/ContactUs"
                passHref
                className={
                  currentRoute === "/ContactUs"
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
