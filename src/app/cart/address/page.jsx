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

const address = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
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
              <div className="flex p-10 border-b-2 ">
                <RadioButton />
              </div>
            </div>
            <Ordersummary />
          </div>
          <div className="">
            <button onClick={toggleVisibility}>
              <p className="Cart-remove">+ Add New Address</p>
            </button>

            {isVisible && (
              <div className="w-1/2 pt-5">
                <div>
                  <input
                    className="w-full border-2 p-2 rounded-md"
                    type="text"
                    placeholder="Country/Region"
                  />
                </div>
                <div className="flex  justify-between mt-5 ">
                  <input
                    className="w-[48%] border-2 p-1 rounded-md"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="w-[48%] border-2 p-1 rounded-md"
                    type="text"
                    placeholder="Mobile No:"
                  />
                </div>
                <div className="flex  justify-between mt-5">
                  <input
                    className="w-[48%] border-2 p-1 rounded-md"
                    type="text"
                    placeholder="City"
                  />
                  <input
                    className=" w-[48%] border-2 p-1 rounded-md"
                    type="text"
                    placeholder="PIN Code:"
                  />
                </div>
                <TextField
                  placeholder="Full Address"
                  className="mt-5 w-full rounded-md"
                ></TextField>

                <div className="flex justify-center pt-5 mt-5 ">
                  <button className="w-1/2 py-3 rounded-2xl Cartbgcolor">
                    Save And Deliver Here
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default address;
