"use client";
import React, { useEffect, useState } from "react";
import "@/public/styles/cart.css";
import Divider from "@mui/material/Divider";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import Ordersummary from "./component/ordersummary";
import { useSelector } from "react-redux";
import { client } from "@/apollo";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "@/state/slice/cartSlice";
// import CartData from "./CartData";

const Page = () => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const CartData = useSelector((state) => state.cart.items);

  // console.log("CartData", CartData);
  const [cartItems, setCartItems] = useState(
    CartData.map((item) => ({ ...item }))
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
  // console.log("www", CartData.length);

  return (
    <>
      <div className="navMobile ">
        <NavigationMobile page={"cart"} />
      </div>

      <NavItem page={"cart"} />
      {CartData.length > 0 ? (
        <div className=" sm:p-32 py-16 mt-10 sm:mt-0 px-3 sm:flex w-full sm:justify-between font-mont ">
          <div className="sm:w-4/6">
            <div className="flex">
              <div className="sm:text-2xl mont-font">Cart</div>
              <div className="sm:text-xl text-slate-500 sm:p-1 px-3 mont-font">
                {CartData.length} Items
              </div>
            </div>
            <div className="cartScroll sm:w-full sm:pt-20 pt-5">
              {CartData.map((item, index) => (
                <div className="flex sm:px-10 py-5    border-b-2 ">
                  <div className="">
                    <img
                      className=" sm:w-40 sm:h-32"
                      src={item.masalaImg}
                      alt=""
                    />
                  </div>
                  <div className="mont-font sm:ml-10 ml-10   ">
                    <div>
                      <p className="Cart sm:text-xl ">{item.masalaName}</p>
                    </div>
                    <div className="mt-2 text-xs sm:text-base">
                      <p style={{ color: "#B9BBBF" }}>
                        Pkg
                        <span className="pl-2 text-black">{item.pkg}</span>
                      </p>
                    </div>
                    <div className="flex sm:hidden sm:w-full sm:justify-end text-xs sm:text-base mt-3	">
                      {item.price}
                    </div>
                    <div className="flex">
                      <div className="flex justify-between items-center text-xs sm:text-base mt-4 sm:px-3 px-1  border-2 rounded-2xl sm:w-36 w-28  ">
                        <button
                          onClick={() => dispatch(decrementQuantity(index))}>
                          <HorizontalRuleIcon className="w-5 h-5" />
                        </button>

                        {item.quantity}

                        <button
                          onClick={() => dispatch(incrementQuantity(index))}>
                          <AddIcon />
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => handleRemoveFromCart(item)}
                          className="pl-5 p-2 mt-6 Cart-remove text-xs sm:text-base">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="sm:flex hidden sm:w-full sm:justify-end text-xs sm:text-base	">
                    ₹ {item.price} × {item.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Ordersummary />
        </div>
      ) : (
        <div
          className="flex justify-center items-center h-screen
        ">
          Empty cart
        </div>
      )}
    </>
  );
};

export default Page;
