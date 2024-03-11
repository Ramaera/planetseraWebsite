"use client";
import React, { useEffect, useState } from "react";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import Stepper from "../component/stepper";
import "@/public/styles/cart.css";
import RadioButton from "../component/radiobuttons";
import Ordersummary from "../component/ordersummary";
import TextField from "@mui/material/TextField";
import { client } from "@/apollo";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";

const Checkout = () => {
  const router = useRouter();
  const CartData = useSelector((state) => state.cart.items);
  const cartTotalValue = useSelector((state) => state.cart.cartTotalValue);
  const shippingValue = useSelector((state) => state.cart.shippingValue);
  const totalOrderAmount = cartTotalValue + shippingValue;
  console.log("CartData", totalOrderAmount);

  useEffect(() => {
    if (CartData.length <= 0 || cartTotalValue < 500) {
      router.replace("/cart");
    }
  }, [CartData]);

  return (
    <>
      <div className="navMobile ">
        <NavigationMobile page={"cart"} />
      </div>

      <NavItem page={"cart"} />
      <div>
        <div className="sm:p-32 py-20 px-2 sm:min-h-[80vh]">
          <div className="  sm:flex  justify-between px-2 ">
            <div className="sm:w-2/3 w-full">
              <div className="flex">
                <Stepper />
              </div>
            </div>

            <Ordersummary />
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
