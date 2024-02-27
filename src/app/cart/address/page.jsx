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
import IndianStatesDropdown from "../component/statesdropdownlist";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { saveAddress } from "@/state/slice/addressSlice";
import { ADD_ADDRESS } from "@/apollo/queries";
import { useMutation } from "@apollo/client";

const address = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [addAddress] = useMutation(ADD_ADDRESS);
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const initialFormData = {
    name: "",
    mobile: "",
    // state: "",
    city: "",
    pinCode: "",
    address: "",
  };
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    // state: "",
    city: "",
    pinCode: "",
    address: "",
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

  const handleSaveAndDeliverClick = async () => {
    if (
      formData.name &&
      formData.mobile &&
      // formData.state &&
      formData.city &&
      formData.pinCode &&
      formData.address
    ) {
      const resp = await addAddress({
        variables: {
          name: formData.name,
          mobileNumber: formData.mobile,
          buyerId: user?.data?.buyer?.id,

          address: [
            { city: formData.city },
            { pinCode: formData.pinCode },
            { address: formData.address },
          ],
        },
      });
      dispatch(saveAddress(resp?.data?.addAddress));
    } else {
      alert("Please fill in all required fields");
    }
    clearForm();
  };

  return (
    <>
      <div>
        <div className="font-mont w-full">
          <div className="w-full sm:p-10 px-3 py-5">
            <RadioButton />
          </div>

          <button onClick={toggleVisibility}>
            <p className="Cart-remove">+ Add New Address</p>
          </button>
          <div className="py-10  px-3">
            {isVisible && (
              <div className="w-full">
                <div className="flex justify-between">
                  <input
                    className="border-2 p-1 px-3 rounded-md w-full"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mt-5">
                  <input
                    className="border-2 p-1 px-3 rounded-md w-full"
                    type="number"
                    placeholder="Mobile No:"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="flex justify-between mt-5">
                  <input
                    className="border-2 p-1 px-3 rounded-md w-full"
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    name="city"
                    required
                  />
                </div>
                <div className="mt-5">
                  <input
                    className="border-2 p-1 px-3 rounded-md w-full"
                    type="text"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    placeholder="PIN Code:"
                    name="pinCode"
                    required
                  />
                </div>
                <div className="mt-5">
                  <textarea
                    cols="50"
                    className="border-2 p-1 px-3 rounded-md w-full"
                    placeholder="Full Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    name="address"
                    required
                  />
                </div>

                <div className="flex justify-center pt-5 mt-5">
                  <button
                    onClick={handleSaveAndDeliverClick}
                    className="w-1/2 py-3 rounded-2xl Cartbgcolor">
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
