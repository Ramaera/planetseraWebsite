"use client";
import React from "react";
import "@/public/styles/cart.css";
import Divider from "@mui/material/Divider";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import Ordersummary from "./component/ordersummary";
import { useSelector } from "react-redux";
import { client } from "@/apollo";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
const page = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div className="navMobile ">
        <NavigationMobile />
      </div>

      <NavItem page={"cart"} />
      <div className=" p-32 flex justify-between">
        <div>
          <div className="flex">
            <div className="text-2xl mont-font">Cart</div>
            <div className="text-xl text-slate-500 p-1 px-3 mont-font">
              2 Items
            </div>
          </div>
          <div className="flex p-10 ">
            <div className="">
              <img
                className="h-32 w-24"
                src="/images/allProductsImg/CorianderPowder.webp"
                alt=""
              />
            </div>
            <div className="mont-font pl-6 ">
              <div>
                <p className="Cart text-xl ">Chat Masala</p>
              </div>
              <div className="mt-3">
                <p style={{ color: "#B9BBBF" }}>
                  Pkg <span className="pl-2 text-black">50 gm</span>
                </p>
              </div>
              <div className="flex">
                <div className="flex justify-between mt-5 border-2 rounded-2xl w-32 p-2">
                  <AddIcon />
                  1
                  <HorizontalRuleIcon />
                </div>
                <div>
                  <p className="p-2 mt-7 Cart-remove">Remove</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">₹ 200.00</div>
          </div>

          <div className="  ">
            <div className="flex p-10 ">
              <div className="">
                <img
                  className="h-32 w-24"
                  src="/images/allProductsImg/CorianderPowder.webp"
                  alt=""
                />
              </div>
              <div className="mont-font pl-6 ">
                <div>
                  <p className="Cart text-xl ">Chat Masala</p>
                </div>
                <div className="mt-3">
                  <p style={{ color: "#B9BBBF" }}>
                    Pkg <span className="pl-2 text-black">50 gm</span>
                  </p>
                </div>
                <div className="flex">
                  <div className="flex justify-between mt-5 border-2 rounded-2xl w-32 p-2">
                    <AddIcon />
                    1
                    <HorizontalRuleIcon />
                  </div>
                  <div>
                    <p className="p-2 mt-7 Cart-remove">Remove</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">₹ 200.00</div>
            </div>
          </div>
        </div>
        <Ordersummary />
      </div>
    </>
  );
};
export default page;
