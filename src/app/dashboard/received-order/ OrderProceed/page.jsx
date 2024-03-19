"use client";

import React, { useState } from "react";
import { Container, Typography, Modal } from "@mui/material";
import axios from "axios";

const OrderProceed = ({ open, onClose, selectedOrder, allProducts }) => {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [breadth, setBreadth] = useState("");
  const [weight, setWeight] = useState("");

  const orderItems = selectedOrder?.orderItems?.map((item, index) => ({
    name: item?.name,
    sku: item?.productVariantId,
    units: item?.qty,
    selling_price: allProducts.find((prod) => prod.id === item.productVariantId)
      ?.price,
  }));

  console.log(
    "selectedOrder",
    selectedOrder,
    selectedOrder?.orderDate.slice(0, 10),
    selectedOrder?.address.address[0].city,
    selectedOrder?.address?.name,
    selectedOrder?.address.address[1].pinCode,
    selectedOrder?.address?.mobileNumber,
    selectedOrder?.address.address[2].address,
    selectedOrder?.ShippingCost,
    orderItems,
    selectedOrder?.user?.email,
    selectedOrder?.address.address[3].state,
    selectedOrder?.discountedAmount
  );
  const handleSubmit = () => {
    const postData = {
      order_id: selectedOrder?.id,
      order_date: selectedOrder?.orderDate.slice(0, 10),
      pickup_location: "Hajipur",
      billing_customer_name: selectedOrder?.address?.name,
      billing_city: selectedOrder?.address.address[0].city,
      billing_pincode: selectedOrder?.address.address[1].pinCode,
      billing_state: selectedOrder?.address.address[3].state,
      billing_country: "India",
      billing_email: selectedOrder?.user?.email,
      billing_phone: selectedOrder?.address?.mobileNumber,
      shipping_is_billing: true,
      shipping_customer_name: selectedOrder?.address?.name,
      shipping_address: selectedOrder?.address.address[2].address,
      shipping_city: selectedOrder?.address.address[0].city,
      shipping_pincode: selectedOrder?.address.address[1].pinCode,
      shipping_country: "India",
      shipping_state: selectedOrder?.address.address[3].state,
      shipping_phone: selectedOrder?.address?.mobileNumber,
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
      sub_total: 9000,
      length: length,
      breadth: breadth,
      height: height,
      weight: weight,
    };
    axios
      .post(
        "https://apiv2.shiprocket.in/v1/external/orders/create/adhoc",
        postData
      )
      .then((response) => {
        console.log("done", response.data);
      })
      .catch((error) => {
        console.error("Error occurred while processing payment:", error);
      });

    onClose();
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
      <div className="bg-slate-200 rounded-lg max-w-md">
        <div>
          <h3 className="text-center font-semibold text-lg border-b-2 border-black p-2">
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
                      g : Qty{item?.qty}
                    </Typography>
                  </div>
                ))}
              </div>
            )}
            <div>
              <h5 className="font-semibold mt-1">Enter the below filed:</h5>
              <input
                className="w-24 px-1 rounded-md mr-2"
                type="number"
                placeholder="Length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <input
                className="w-24 px-1 rounded-md mr-2"
                type="number"
                placeholder="Breadth"
                value={breadth}
                onChange={(e) => setBreadth(e.target.value)}
              />
              <input
                className="w-24 px-1 rounded-md mr-2"
                type="number"
                placeholder="Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <input
                className="w-24 px-1 rounded-md"
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default OrderProceed;
