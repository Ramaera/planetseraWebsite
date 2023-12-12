"use client";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { LiaCcMastercard } from "react-icons/lia";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa6";
import { BsPaypal } from "react-icons/bs";
import { LiaCcVisa } from "react-icons/lia";

const page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      {" "}
      <div>
        <p className="text-xl">Payment Method</p>
        <FormControl className="w-full">
          <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <div className=" flex justify-between w-full">
              <FormControlLabel
                value="Regular Shipment"
                control={<Radio />}
                label="Pay With UPI"
              />
              <div>
                <p>Date</p>
              </div>
            </div>
            <div className="mt-10 flex justify-between">
              <FormControlLabel
                value="Priority Shipping"
                control={<Radio />}
                label="Pay on Delivery"
              />
              <p>Date</p>
            </div>
            <div className="mt-10 flex justify-between">
              <FormControlLabel
                value="Schedule"
                control={<Radio />}
                label="Credit/Debit Cards"
              />
              <div className="flex">
                <LiaCcVisa className="w-8 h-8" />
                <LiaCcMastercard className="w-8 h-8 pl-1 ml-2" />
                <BsPaypal className="w-8 h-8 pl-1 ml-2" />
              </div>
            </div>
            <div className="mt-10 flex justify-between">
              <FormControlLabel
                value="Other Payment Methods"
                control={<Radio />}
                label="Other Payment Methods"
              />
              <div className="flex">
                <FaCcAmazonPay className="w-8 h-8" />
                <FaCcApplePay className="w-8 h-8 pl-1 ml-2" />
                <FaGooglePay className="w-8 h-8 pl-1 ml-2" />
              </div>
            </div>
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};
export default page;
