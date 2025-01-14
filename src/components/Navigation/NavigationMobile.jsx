"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import "@/public/styles/navigation.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import disableScroll from "disable-scroll";
import Login from "../Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { logout } from "@/state/slice/userSlice";

const NavigationMobile = ({ page }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentRoute = usePathname();

  const colorMe = useSelector((state) => state.colorUs.color);
  const user = useSelector((state) => state?.user);

  const CartData = useSelector((state) => state.cart.items);

  const cartItemsQuantity = CartData.reduce(
    (total, item) => total + item?.qty,
    0
  );

  const changeColor = () => {
    dispatch(changeColor("#ff4f4f"));
  };

  const [showMenu, setShowMenu] = useState(false);

  const [loginModal, setLoginModal] = useState(false);
  const openLoginModal = () => {
    setLoginModal(true);
  };
  const closeLoginModal = () => {
    setLoginModal(false);
  };

  const toggleClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    showMenu ? disableScroll.on() : disableScroll.off();
  }, [showMenu]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="container">
      <div id="mobileNav" className="container flex w-full pb-1">
        <div className="basis-3/12 pl-2">
          <img
            loading="lazy"
            src="https://www.planetsera.com/images/logo/logo.webp"
            alt="logo"
            className=" absolute w-16 mt-2"
          />
        </div>
        <div className="basis-9/12 flex justify-end pr-3 absolute right-0 z-30">
          <IconButton onClick={toggleClick} color="inherit" aria-label="menu">
            {showMenu ? (
              <CloseIcon
                style={{
                  color: "white",
                  fontSize: "50px",
                  position: "fixed",
                  top: "10px",
                  right: "20px",
                }}
              />
            ) : (
              <MenuIcon
                fontSize="large"
                style={{
                  color:
                    page === "cart" ||
                    page === "products" ||
                    page === "blog" ||
                    page === "about" ||
                    page === "return-policy" ||
                    page === "privacy-policy" ||
                    page === "terms-and-conditions" ||
                    page === "orders" ||
                    page === "shop-all"
                      ? "black"
                      : "white",
                }}
              />
            )}
          </IconButton>
        </div>
      </div>
      {showMenu && (
        <div className="w-full z-20 top-0 absolute" id="navDropdown">
          <div id="mobilenavigation">
            <ul
              className="px-8 py-4 mx-4  "
              style={{ borderColor: `${colorMe}` }}>
              <li>
                <Link
                  href="/"
                  passHref
                  onClick={() => changeColor()}
                  className="px-4 py-2 flex w-full rounded-md"
                  style={{
                    color: currentRoute === "/" && colorMe,
                    fontWeight: currentRoute === "/" && 600,
                  }}>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/product"
                  passHref
                  className="px-4 py-2 flex w-full rounded-md"
                  style={{
                    color: currentRoute === "/product" && colorMe,
                    fontWeight: currentRoute === "/product" && 600,
                  }}>
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/shop-all"
                  passHref
                  className="px-4 py-2 flex w-full rounded-md"
                  style={{
                    color: currentRoute === "/shop-all" && colorMe,
                    fontWeight: currentRoute === "/shop-all" && 600,
                  }}>
                  Shop All
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/shop"
                  passHref
                  className="px-4 py-2 flex w-full rounded-md"
                  style={{
                    color: currentRoute === "/shop" && colorMe,
                    fontWeight: currentRoute === "/shop" && 600,
                  }}>
                  Shop
                </Link>
              </li> */}

              <li>
                <Link
                  href="/about"
                  passHref
                  className="px-4 py-2 flex w-full rounded-md"
                  style={{
                    color: currentRoute === "/about" && colorMe,
                    fontWeight: currentRoute === "/about" && 600,
                  }}>
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  passHref
                  className="px-4 py-2 flex w-full rounded-md"
                  style={{
                    color: currentRoute === "/blog" && colorMe,
                    fontWeight: currentRoute === "/blog" && 600,
                  }}>
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  passHref
                  className="px-4 py-2 flex w-full rounded-md "
                  style={{
                    color: currentRoute === "/contact-us" && colorMe,
                    fontWeight: currentRoute === "/contact-us" && 600,
                  }}>
                  Contact Us
                </Link>
              </li>

              {!user.data ? (
                <li>
                  <Link
                    onClick={openLoginModal}
                    href=""
                    passHref
                    className="px-4 py-2 flex w-full rounded-md"
                    style={{
                      color: currentRoute === "/login" ? colorMe : undefined,
                      fontWeight: currentRoute === "/login" ? 600 : undefined,
                    }}>
                    Login
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      href="/cart"
                      passHref
                      className="px-4 py-2 flex w-full rounded-md"
                      style={{
                        color: currentRoute === "/cart" ? colorMe : undefined,
                        fontWeight: currentRoute === "/cart" ? 600 : undefined,
                        alignItems: "center",
                      }}>
                      Cart
                      <Badge badgeContent={cartItemsQuantity} color="primary">
                        <ShoppingCartIcon sx={{ marginLeft: 1 }} />
                      </Badge>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleLogout}
                      href=""
                      passHref
                      className="px-4 py-2 flex w-full rounded-md"
                      style={{
                        color: currentRoute === "/logout" ? colorMe : undefined,
                        fontWeight:
                          currentRoute === "/logout" ? 600 : undefined,
                      }}>
                      Logout
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orders"
                      passHref
                      className="px-4 py-2 flex w-full rounded-md"
                      style={{
                        color: currentRoute === "/orders" ? colorMe : undefined,
                        fontWeight:
                          currentRoute === "/orders" ? 600 : undefined,
                        alignItems: "center",
                      }}>
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/profile"
                      passHref
                      className="px-4 py-2 flex w-full rounded-md"
                      style={{
                        color: currentRoute === "/orders" ? colorMe : undefined,
                        fontWeight:
                          currentRoute === "/orders" ? 600 : undefined,
                        alignItems: "center",
                      }}>
                      My Profile
                    </Link>
                  </li>
                </>
              )}

              {/* <Logout isOpen={logoutModal} closeLoginModal={closeLogoutModal} /> */}
              <Login isOpen={loginModal} closeLoginModal={closeLoginModal} />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationMobile;
