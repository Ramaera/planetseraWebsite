"use client";
import React, { useState } from "react";
import "@/public/styles/cart.css";
import Divider from "@mui/material/Divider";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import Ordersummary from "./component/ordersummary";
import { useSelector } from "react-redux";
import { client } from "@/apollo";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import CartData from "./CartData";

const Page = () => {
  const [cartItems, setCartItems] = useState(
    CartData.map((item) => ({ ...item, quantity: 1 }))
  );
  const colorMe = useSelector((state) => state.colorUs.color);

  const handleIncrement = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  return (
    <>
      <div className="navMobile ">
        <NavigationMobile page={"cart"} />
      </div>

      <NavItem page={"cart"} />
      <div className=" sm:p-32 py-16 px-3 sm:flex w-full sm:justify-between font-mont ">
        <div className="sm:w-4/6">
          <div className="flex">
            <div className="sm:text-2xl mont-font">Cart</div>
            <div className="sm:text-xl text-slate-500 sm:p-1 px-3 mont-font">
              {cartItems.length} Items
            </div>
          </div>
          <div className="cartScroll sm:w-full sm:pt-20 pt-5">
            {cartItems.map((item, index) => (
              <div className="flex sm:px-10 py-5    border-b-2 ">
                <div className="">
                  <img className=" sm:w-40 sm:h-32" src={item.cartImg} alt="" />
                </div>
                <div className="mont-font sm:ml-10 ml-10   ">
                  <div>
                    <p className="Cart sm:text-xl ">{item.name}</p>
                  </div>
                  <div className="mt-2 text-xs sm:text-base">
                    <p style={{ color: "#B9BBBF" }}>
                      Pkg
                      <span className="pl-2 text-black">{item.pkgWeight}</span>
                    </p>
                  </div>
                  <div className="flex sm:hidden sm:w-full sm:justify-end text-xs sm:text-base mt-3	">
                    {item.price}
                  </div>
                  <div className="flex">
                    <div className="flex justify-between items-center text-xs sm:text-base mt-4 sm:px-3 px-1  border-2 rounded-2xl sm:w-36 w-28  ">
                      <button onClick={() => handleDecrement(index)}>
                        <HorizontalRuleIcon className="w-5 h-5" />
                      </button>

                      {item.quantity}

                      <button onClick={() => handleIncrement(index)}>
                        <AddIcon />
                      </button>
                    </div>
                    <div>
                      <p className="pl-5 p-2 mt-6 Cart-remove text-xs sm:text-base">
                        Remove
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:flex hidden sm:w-full sm:justify-end text-xs sm:text-base	">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Ordersummary />
      </div>
      {/* <OrderPlaced /> */}
    </>
  );
};

export default Page;
