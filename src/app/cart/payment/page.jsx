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
import { useSelector, useDispatch } from "react-redux";
import { selectPayment } from "@/state/slice/paymentSlice";
import { saveCard } from "@/state/slice/paymentSlice";
import Savedcarddetails from "./component/savedcarddetails";

const page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const paymentData = useSelector((state) => state.payment);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(selectPayment(event.target.value));

    if (event.target.value !== "Credit/Debit Cards") {
      setCardSelected(false);
    }
  };
  const [isCardSelected, setCardSelected] = useState(false);

  const handleCardSelectionChange = () => {
    setCardSelected(!isCardSelected);
    if (!isCardSelected) {
      setIsVisible(false);
    }
  };
  const initialFormData = {
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  };
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const clearForm = () => {
    setFormData(initialFormData);
  };
  const handleSaveCardDetails = () => {
    if (
      formData.cardNumber &&
      formData.expiryDate &&
      formData.cvv &&
      formData.cardholderName
    ) {
      // console.log("strt");

      dispatch(saveCard(formData));
      // console.log("aftr");
    } else {
      alert("Please fill in all required fields");
    }
    clearForm();
  };

  // console.log("ads", formData);

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
            value={paymentData.selectedPayment}
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
                label="Pay Online"
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

            {/* <div className="mt-5 flex justify-between text-xs sm:text-base items-center ">
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
              <>
                {isCardSelected && <Savedcarddetails />}
                <div>
                  <button className="Cart-remove" onClick={toggleVisibility}>
                    + Add New Card
                  </button>
                  {isVisible ? (
                    <div id="card-details" className="flex flex-col pt-2">
                      <input
                        className="border-2 p-1 px-3 rounded-md w-full"
                        type="text"
                        placeholder="Card Number"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="flex w-full pt-5 justify-between rounded">
                        <input
                          style={{ width: "48%" }}
                          className="border-2 p-1 px-3 rounded-md w-full"
                          type="text"
                          placeholder="Expiry"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          style={{ width: "48%" }}
                          className="border-2 p-1 px-3 rounded-md w-full"
                          type="text"
                          placeholder="Cvv / Cvc"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <input
                        className="border-2 p-1 px-3 mt-5 rounded-md w-full"
                        type="text"
                        placeholder="Card Holder's Name"
                        name="cardholderName"
                        value={formData.cardholderName}
                        onChange={handleInputChange}
                        required
                      />
                      <button
                        onClick={handleSaveCardDetails}
                        className="flex justify-center rounded-2xl mt-5 Cartbgcolor py-3"
                      >
                        Enter Card Details
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </>
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
            </div> */}
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};
export default page;
