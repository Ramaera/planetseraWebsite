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
import TextField from "@mui/material/TextField";

const page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCardSelected, setCardSelected] = useState(false);
  const handleCardSelectionChange = () => {
    setCardSelected(!isCardSelected);
  };

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);

    // If the selected radio button is not "Credit/Debit Cards", hide the card details
    if (event.target.value !== "Credit/Debit Cards") {
      setCardSelected(false);
    }
  };

  return (
    <>
      <div className="font-mont">
        <p style={{ color: "#2F302F" }} className="text-xl mt-5 ">
          Payment Method
        </p>
        <FormControl className="w-full mt-5">
          <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <div className=" flex justify-between w-full text-xs sm:text-base ">
              <FormControlLabel
                style={{ color: "#2F302F" }}
                className="font-mont"
                value="Pay With UPI"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#FE7171",
                      },
                    }}
                  />
                }
                label="Pay With UPI"
              />
            </div>
            <div className="mt-10 flex justify-between text-xs sm:text-base ">
              <FormControlLabel
                style={{ color: "#2F302F" }}
                className="font-mont"
                value="Pay on Delivery"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#FE7171",
                      },
                    }}
                  />
                }
                label="Pay on Delivery"
              />
            </div>
            <div className="mt-10 flex justify-between text-xs sm:text-base items-center ">
              <FormControlLabel
                style={{ color: "#2F302F" }}
                className="font-mont"
                value="Credit/Debit Cards"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#FE7171",
                      },
                    }}
                  />
                }
                label="Credit/Debit Cards"
                onChange={handleCardSelectionChange}
              />

              <div className="flex">
                <LiaCcVisa
                  color="#B9BBBF"
                  className="sm:w-12 sm:h-8 w-8  h-8"
                />
                <LiaCcMastercard
                  color="#B9BBBF"
                  className="sm:w-12 sm:h-8 w-8  h-8 sm:pl-1 sm:ml-2"
                />
                <BsPaypal
                  color="#B9BBBF"
                  className="sm:w-12 sm:h-8 w-8  h-6 sm:pl-1 sm:ml-2"
                />
              </div>
            </div>
            {isCardSelected && (
              <div id="card-details" className="flex flex-col pt-2">
                <TextField
                  id="outlined-basic"
                  label="Card Number"
                  variant="outlined"
                />
                <div className="flex w-full pt-5 justify-between rounded">
                  <TextField
                    style={{ width: "48%" }}
                    className="rounded"
                    id="outlined-basic"
                    label="Expiry date"
                    variant="outlined"
                  />
                  <TextField
                    style={{ width: "48%" }}
                    className="rounded"
                    id="outlined-basic"
                    label="Cvc / Cvv"
                    variant="outlined"
                  />
                </div>
                <TextField
                  className="mt-5"
                  id="outlined-basic"
                  label="Card Holder Name"
                  variant="outlined"
                />
                <div className="flex justify-center rounded-2xl mt-5 Cartbgcolor py-3">
                  Enter Card Details
                </div>
              </div>
            )}

            <div className=" text-xs sm:text-base mt-10 flex justify-between items-center">
              <FormControlLabel
                style={{ color: "#2F302F" }}
                className="font-mont"
                value="Other Payment Methods"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#FE7171",
                      },
                    }}
                  />
                }
                label="Other Payment Methods"
              />
              <div className="flex">
                <FaCcAmazonPay
                  color="#B9BBBF"
                  className="sm:w-12 sm:h-6 w-8  h-6"
                />
                <FaCcApplePay
                  color="#B9BBBF"
                  className="sm:w-12 sm:h-6 w-8 h-6 sm:pl-1 sm:ml-2"
                />
                <FaGooglePay
                  color="#B9BBBF"
                  className="sm:w-12 sm:h-6 w-8 h-6 sm:pl-1 sm:ml-2"
                />
              </div>
            </div>
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};
export default page;
