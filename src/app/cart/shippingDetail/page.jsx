"use client";
import React, { useState } from "react";
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

const ShippingDetails = () => {
  return (
    <>
      <div className="navMobile ">
        <NavigationMobile />
      </div>

      <NavItem page={"cart"} />
      <div>
        <div className="p-32">
          <div className="  flex  justify-between">
            <div className="w-2/3">
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
export default ShippingDetails;
