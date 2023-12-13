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
        <NavigationMobile />
      </div>

      <NavItem page={"cart"} />
      <div className=" p-32 flex w-full justify-between font-mont ">
        <div className="w-4/6">
          <div className="flex">
            <div className="text-2xl mont-font">Cart</div>
            <div className="text-xl text-slate-500 p-1 px-3 mont-font">
              {cartItems.length} Items
            </div>
          </div>
          <div className="cartScroll w-full ">
            {cartItems.map((item, index) => (
              <div className="flex p-10 border-b-2 ">
                <div className="w-32 h-32">
                  <img src={item.cartImg} alt="" />
                </div>
                <div className="mont-font pl-6 ">
                  <div>
                    <p className="Cart text-xl ">{item.name}</p>
                  </div>
                  <div className="mt-3">
                    <p style={{ color: "#B9BBBF" }}>
                      Pkg
                      <span className="pl-2 text-black">{item.pkgWeight}</span>
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex justify-between mt-5 border-2 rounded-2xl w-32 p-2">
                      <button onClick={() => handleDecrement(index)}>
                        <HorizontalRuleIcon />
                      </button>

                      {item.quantity}

                      <button onClick={() => handleIncrement(index)}>
                        <AddIcon />
                      </button>
                    </div>
                    <div>
                      <p className="p-2 mt-7 Cart-remove">Remove</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-end">{item.price}</div>
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
