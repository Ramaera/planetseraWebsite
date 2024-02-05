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
import Link from "next/link";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "@/state/slice/cartSlice";
import BuynowBtn from "@/components/BuynowBtn";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Page = () => {
  const CartData = useSelector((state) => state.cart.items);
  const cartItemsQuantity = CartData.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const handleIncrementQuantity = (index) => {
    dispatch(incrementQuantity({ index }));
  };

  const handleDecrementQuantity = (index) => {
    dispatch(decrementQuantity({ index }));
  };

  return (
    <>
      <div className="navMobile ">
        <NavigationMobile page={"cart"} />
      </div>

      <NavItem page={"cart"} />
      {CartData.length > 0 ? (
        <div className="sm:p-32 py-16 mt-10 sm:mt-0 px-3 sm:flex w-full sm:justify-between font-mont sm:min-h-[76vh]">
          <div className="sm:w-4/6">
            <div className="flex">
              <div className="sm:text-2xl mont-font">Cart</div>
              <div className="sm:text-xl text-slate-500 sm:p-1 px-3 mont-font">
                {" "}
                {cartItemsQuantity} Items
              </div>
            </div>
            <div className="cartScroll sm:w-full sm:pt-20 pt-5">
              {CartData.map((item, index) => (
                <div className="flex sm:px-10 py-5    border-b-2 ">
                  <div className="">
                    <Link href={`/products/${item.id}`}>
                      <img
                        className="w-24 sm:w-44 "
                        src={item.image}
                        alt="PlanetsEra Spices"
                      />
                    </Link>
                  </div>
                  <div className="mont-font sm:ml-10 ml-10   ">
                    <div>
                      <Link href={`/products/${item.id}`}>
                        <p className="Cart sm:text-xl ">{item.name}</p>
                      </Link>
                    </div>
                    {/* <div className="mt-2 text-xs sm:text-base">
                      <p style={{ color: "#B9BBBF" }}>
                        Pkg
                        <span className="pl-2 text-black">{item.pkg}</span>
                      </p>
                    </div> */}
                    <div className="flex sm:hidden sm:w-full sm:justify-end text-xs sm:text-base mt-3 ">
                      ₹ {item.price}
                    </div>
                    <div className="flex">
                      <div className="flex justify-between items-center text-xs sm:text-base mt-4 sm:px-3 px-1  border-2 rounded-2xl sm:w-36 w-28  ">
                        <button onClick={() => handleDecrementQuantity(index)}>
                          <HorizontalRuleIcon className="w-5 h-5" />
                        </button>

                        {item.quantity}

                        <button onClick={() => handleIncrementQuantity(index)}>
                          <AddIcon />
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="pl-5 p-2 mt-6 Cart-remove text-xs sm:text-base">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="sm:flex hidden sm:w-full sm:justify-end text-xs sm:text-base  ">
                    ₹ {item.price} × {item.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Ordersummary />
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center flex-col ">
          <div className="sm:text-4xl font-semibold">
            Your Planetsera Cart Is Empty
          </div>
          <ShoppingCartOutlinedIcon className="h-20 w-20" />
          <div className="  ">
            <BuynowBtn
              text="Shop Now"
              className="text-green-800"
              href="/shop"
              link="/shop"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
