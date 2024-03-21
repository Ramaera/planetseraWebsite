"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import "@/public/styles/navigation.css";
import { useParams } from "next/navigation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { logout } from "@/state/slice/userSlice";
import Logout from "../Logout";
import Login from "../Login";
// import { GetUser } from "@/apollo/queries";

const NavItem = ({ page }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);

  const CartData = useSelector((state) => state.cart.items);
  const cartItemsQuantity = CartData.reduce(
    (total, item) => total + item?.qty,
    0
  );

  const [isVisible, setIsVisible] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loginModal, setLoginModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };

  const closeLogoutModal = () => {
    setLogoutModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
        isVisible || page === "orders" || page === "cart"
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
              // page === "received-order" ||
              page === "shop" ||
              page === "cart" ||
              page === "about" ||
              page === "address" ||
              page === "products" ||
              page === "privacy-policy" ||
              page === "return-policy" ||
              page === "orders") &&
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
          <Link href="/contact-us">Contact Us</Link>
        </li>

        {!user.data ? (
          <li className="mr-1 cursor-pointer" onClick={openLoginModal}>
            Login
          </li>
        ) : (
          <>
            <li>
              <Link className="flex" href="/cart">
                <Badge badgeContent={cartItemsQuantity} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </li>

            <li className="cursor-pointer">
              <AccountCircleIcon onClick={handleOpenUserMenu} />
              <Menu
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  // horizontal: "right",
                }}
                style={{ marginTop: 25 }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  // horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                <div className="px-4">
                  <Typography
                    fontWeight="600"
                    textAlign="left"
                    className="text-gray-400 ">
                    Hi, {user?.data?.name}
                  </Typography>
                </div>
                <Link href="/orders">
                  <MenuItem>
                    <Typography textAlign="center">My Orders</Typography>
                  </MenuItem>
                </Link>
                <Link href="/profile">
                  <MenuItem>
                    <Typography textAlign="center">My Profile</Typography>
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </li>
          </>
        )}
        <Login isOpen={loginModal} closeLoginModal={closeLoginModal} />
        <Logout isOpen={logoutModal} closeLoginModal={closeLogoutModal} />
      </ul>
    </div>
  );
};

export default NavItem;
