"use client";

import React, { useState } from "react";
import { Container, Typography, Modal } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const OrderProceed = ({ open, onClose, selectedOrder, allProducts }) => {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [breadth, setBreadth] = useState("");
  const [weight, setWeight] = useState("");
  const [boxType, setBoxType] = useState("");

  const handleBoxTypeChange = (e) => {
    const selectedBoxType = e.target.value;
    setBoxType(selectedBoxType);
    if (selectedBoxType === "box1") {
      setLength(23);
      setBreadth(16.5);
      setHeight(9.5);
    } else if (selectedBoxType === "box2") {
      setLength(25.5);
      setBreadth(20.5);
      setHeight(10.5);
    } else {
      setLength("");
      setBreadth("");
      setHeight("");
    }
  };

  const validateForm = () => {
    if (!length) {
      toast.error("Enter Length!");
      return;
    }

    if (!breadth) {
      toast.error("Enter Breadth!");
      return;
    }

    if (!height) {
      toast.error("Enter Height!");
      return;
    }

    if (!weight) {
      toast.error("Enter Weight!");
      return;
    }

    return true;
  };

  const orderItems = selectedOrder?.orderItems?.map((item, index) => ({
    name: item?.name,
    sku: item?.productVariantId,
    units: item?.qty,
    selling_price: allProducts.find((prod) => prod.id === item.productVariantId)
      ?.price,
  }));

  //   const pincode = parseInt(selectedOrder?.address.address[1].pinCode);
  console.log(
    "selectedOrder",
    selectedOrder,
    selectedOrder?.id,
    selectedOrder?.orderDate.slice(0, 10),
    selectedOrder?.address.address[0].city,
    selectedOrder?.address?.name,
    parseInt(selectedOrder?.address.address[1].pinCode),
    parseInt(selectedOrder?.address?.mobileNumber),
    selectedOrder?.address.address[2].address,
    selectedOrder?.ShippingCost,
    typeof orderItems,
    selectedOrder?.user?.email,
    selectedOrder?.address.address[3].state,
    selectedOrder?.discountedAmount,
    selectedOrder?.orderAmount
  );
  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      const postData = {
        order_id: selectedOrder?.id,
        order_date: selectedOrder?.orderDate.slice(0, 10),
        pickup_location: "Hajipur",
        billing_customer_name: selectedOrder?.address?.name,
        billing_city: selectedOrder?.address.address[0].city,
        billing_pincode: parseInt(selectedOrder?.address.address[1].pinCode),
        billing_state: selectedOrder?.address.address[3].state,
        billing_country: "India",
        billing_email: selectedOrder?.user?.email,
        billing_phone: parseInt(selectedOrder?.address?.mobileNumber),
        shipping_is_billing: true,
        shipping_customer_name: selectedOrder?.address?.name,
        shipping_address: selectedOrder?.address.address[2].address,
        shipping_city: selectedOrder?.address.address[0].city,
        shipping_pincode: selectedOrder?.address.address[1].pinCode,
        shipping_country: "India",
        shipping_state: selectedOrder?.address.address[3].state,
        shipping_phone: parseInt(selectedOrder?.address?.mobileNumber),
        order_items: orderItems,
        //   [
        //     {
        //       name: "Kunai",
        //       sku: "chakra123",
        //       units: 10,
        //       selling_price: "900",
        //     },
        //   ],
        payment_method: "Prepaid",
        shipping_charges: selectedOrder?.ShippingCost,
        total_discount: selectedOrder?.discountedAmount,
        sub_total: selectedOrder?.orderAmount,
        length: length,
        breadth: breadth,
        height: height,
        weight: weight,
      };
      axios
        .post(
          "https://apiv2.shiprocket.in/v1/external/orders/create/adhoc",
          postData,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHIPROCKET_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("done", response.data);
        })
        .catch((error) => {
          console.error("Error occurred while processing payment:", error);
        });

      //   onClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div className="bg-slate-200 rounded-lg max-w-lg">
        <div>
          <h3 className="text-center font-semibold text-lg border-b-2 border-black px-4 py-2">
            Order Details
          </h3>
          <div className=" p-3 ">
            {selectedOrder && (
              <div>
                <h5 className="font-semibold">Address Details:</h5>
                <p>
                  {selectedOrder?.address?.name},{" "}
                  {selectedOrder?.address.address[2].address},{" "}
                  {selectedOrder?.address.address[0].city},{" "}
                  {selectedOrder?.address.address[3].state}{" "}
                  {selectedOrder?.address.address[1].pinCode}
                </p>

                <h5 className="font-semibold mt-1">Order Items:</h5>
                {selectedOrder?.orderItems?.map((item, index) => (
                  <div key={index}>
                    <Typography variant="body2">
                      {item?.name}{" "}
                      {
                        allProducts.find(
                          (prod) => prod.id === item.productVariantId
                        )?.weight
                      }
                      g : Qty {item?.qty}
                    </Typography>
                  </div>
                ))}
              </div>
            )}
            <div>
              <h5 className="font-semibold mt-1">
                Select and Fill Box Details:
              </h5>
              <div className="flex gap-12 my-1">
                <label htmlFor="box1">
                  <input
                    type="radio"
                    id="box1"
                    name="boxType"
                    value="box1"
                    checked={boxType === "box1"}
                    onChange={handleBoxTypeChange}
                  />
                  Box 1
                </label>
                <label htmlFor="box2">
                  <input
                    type="radio"
                    id="box2"
                    name="boxType"
                    value="box2"
                    checked={boxType === "box2"}
                    onChange={handleBoxTypeChange}
                  />
                  Box 2
                </label>
                <label htmlFor="other">
                  <input
                    type="radio"
                    id="other"
                    name="boxType"
                    value="other"
                    checked={boxType === "other"}
                    onChange={handleBoxTypeChange}
                  />
                  Other
                </label>
              </div>
              {boxType && (
                <div className="flex flex-wrap">
                  <div className="m-1">
                    <label htmlFor="length">Length (in cm): </label>
                    <input
                      className="w-24 px-1 rounded-md "
                      type="number"
                      placeholder="Length"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      disabled={boxType === "box1" || boxType === "box2"}
                    />
                  </div>
                  <div className="m-1">
                    <label htmlFor="length">Breadth (in cm): </label>
                    <input
                      className="w-24 px-1 rounded-md "
                      type="number"
                      placeholder="Breadth"
                      value={breadth}
                      onChange={(e) => setBreadth(e.target.value)}
                      disabled={boxType === "box1" || boxType === "box2"}
                    />
                  </div>
                  <div className="m-1">
                    <label htmlFor="length">Height (in cm): </label>
                    <input
                      className="w-24 px-1 rounded-md"
                      type="number"
                      placeholder="Height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      disabled={boxType === "box1" || boxType === "box2"}
                    />
                  </div>
                  <div className="m-1">
                    <label htmlFor="length">Weight (in kg): </label>
                    <input
                      className="w-24 px-1 rounded-md"
                      type="number"
                      placeholder="Weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <button
                className="bg-red-400  text-white px-4 py-2 rounded-xl mt-4"
                onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </Modal>
  );
};

export default OrderProceed;
