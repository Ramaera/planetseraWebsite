"use client";

import React, { useState } from "react";
import { Container, Typography, Modal } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { SHIPROCKET_DETAILS } from "@/apollo/queries";
import { useMutation } from "@apollo/client";

const OrderProceed = ({ open, onClose, selectedOrder, allProducts }) => {
  const [shiprocketDetails] = useMutation(SHIPROCKET_DETAILS);
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
    if (!boxType) {
      toast.error("Select Box Type!");
      return;
    }

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

  const cityFilter = selectedOrder?.metaData
    ?.flatMap((list) => list?.address?.map((add) => add[0]?.city))
    .filter((city) => city)[0];

  const pinCodeFilter = selectedOrder?.metaData
    ?.flatMap((list) => list?.address?.map((add) => add[1]?.pinCode))
    .filter((pinCode) => pinCode)[0];

  const addressFilter = selectedOrder?.metaData
    ?.flatMap((list) => list?.address?.map((add) => add[2]?.address))
    .filter((address) => address)[0];

  const stateFilter = selectedOrder?.metaData
    ?.flatMap((list) => list?.address?.map((add) => add[3]?.state))
    .filter((state) => state)[0];

  const nameFilter = selectedOrder?.metaData
    ?.flatMap((list) => list?.name)
    .filter((name) => name)[0];

  const mobileNumberFilter = selectedOrder?.metaData
    ?.flatMap((list) => list?.mobileNumber)
    .filter((mobileNumber) => mobileNumber)[0];

  //   const pincode = parseInt(selectedOrder?.address.address[1].pinCode);
  console.log(
    "selectedOrder",
    mobileNumberFilter,
    typeof mobileNumberFilter
    //   // mobileNumberFilter,
    //   // nameFilter,
    //   // cityFilter,
    //   // pinCodeFilter,
    //   // addressFilter,
    //   // stateFilter
    //   // selectedOrder,
    //   // selectedOrder?.id,
    //   // selectedOrder?.orderDate.slice(0, 10),
    //   // selectedOrder?.address.address[0].city,
    //   // selectedOrder?.address?.name,
    //   // parseInt(selectedOrder?.address.address[1].pinCode),
    //   // parseInt(selectedOrder?.address?.mobileNumber),
    //   // selectedOrder?.address.address[2].address,
    //   // selectedOrder?.ShippingCost,
    //   // typeof orderItems,
    // selectedOrder
    //   // selectedOrder?.address.address[3]?.state,
    //   // selectedOrder?.discountedAmount,
    //   // selectedOrder?.orderAmount
  );

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      const postData = {
        order_id: selectedOrder?.id,
        order_date: selectedOrder?.orderDate.slice(0, 10),
        pickup_location: "work",
        billing_customer_name: nameFilter,
        billing_city: cityFilter,
        billing_pincode: parseInt(pinCodeFilter),
        billing_address: addressFilter,
        billing_last_name: "",
        billing_state: stateFilter,
        billing_country: "India",
        billing_email: selectedOrder?.user?.email,
        billing_phone: parseInt(mobileNumberFilter),
        shipping_is_billing: true,
        shipping_customer_name: nameFilter,
        shipping_address: addressFilter,
        shipping_city: cityFilter,
        shipping_pincode: parseInt(pinCodeFilter),
        shipping_country: "India",
        shipping_state: stateFilter,
        shipping_phone: parseInt(mobileNumberFilter),
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
        .then(async (response) => {
          if (response?.data) {
            const data = response.data;
            // console.log("123");
            await handleShiprocketDetails(data);
            toast.success("Shipment Created");
            // console.log("done", data);
          }
        })
        .catch((error) => {
          console.error("Error occurred while processing payment:", error);
          toast.error(error?.response?.data?.message);
        });

      onClose();
    }
  };

  const handleShiprocketDetails = async (data) => {
    // console.log("enter", data);
    try {
      const resp = await shiprocketDetails({
        variables: {
          orderId: parseInt(selectedOrder?.id),
          shiprocket_OrderId: data?.order_id,
          shiprocket_ShipmentId: data?.shipment_id,
          shiprocket_status: data?.status,
          shiprocket_status_code: data?.status_code,
        },
      });
      // console.log("resp", resp);
    } catch (err) {
      console.log("err", err.message);
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
      <div className="bg-slate-50 rounded-lg w-4/5	sm:w-[36rem] max-h-[90%] overflow-y-auto">
        <div>
          <h3 className="text-center font-semibold text-xl border-b-2 border-black px-4 py-2">
            Order Details
          </h3>
          <div className=" py-3 px-6 ">
            {selectedOrder && (
              <div>
                <h5 className="font-semibold text-lg">Address Details:</h5>
                <p>
                  {nameFilter}, {addressFilter}, {cityFilter}, {stateFilter}{" "}
                  {pinCodeFilter}
                </p>

                <h5 className="font-semibold text-lg  mt-1">
                  Order Product Details:
                </h5>
                <table style={{ borderCollapse: "collapse", width: "100%" }}>
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-2 text-left">
                        Product Name
                      </th>
                      <th className="border border-gray-300 p-2">Weight (g)</th>
                      <th className="border border-gray-300 p-2">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder?.orderItems?.map((item, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-2">
                          {item?.name}
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          {
                            allProducts.find(
                              (prod) => prod.id === item.productVariantId
                            )?.weight
                          }
                          g
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          {item?.qty}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div>
              <h5 className="font-semibold text-lg mt-2">
                Select Box Details:
              </h5>
              <div className="flex flex-col text-xl my-1">
                <label htmlFor="box1">
                  <input
                    type="radio"
                    id="box1"
                    name="boxType"
                    value="box1"
                    checked={boxType === "box1"}
                    onChange={handleBoxTypeChange}
                  />{" "}
                  Box 1
                </label>
                <div className="flex text-base gap-4 px-4 text-slate-500 mb-2">
                  <p>Length (in cm): 23</p>
                  <p>Breadth (in cm): 16.5</p>
                  <p>Height (in cm): 9.5</p>
                </div>

                <label htmlFor="box2">
                  <input
                    type="radio"
                    id="box2"
                    name="boxType"
                    value="box2"
                    checked={boxType === "box2"}
                    onChange={handleBoxTypeChange}
                  />{" "}
                  Box 2
                </label>
                <div className="flex text-base gap-4 px-4 text-slate-500 mb-2">
                  <p>Length (in cm): 25.5</p>
                  <p>Breadth (in cm): 20.5</p>
                  <p>Height (in cm): 10.5</p>
                </div>
                <label htmlFor="other">
                  <input
                    type="radio"
                    id="other"
                    name="boxType"
                    value="other"
                    checked={boxType === "other"}
                    onChange={handleBoxTypeChange}
                  />{" "}
                  Other
                </label>
              </div>
              {boxType === "other" && (
                <div className="flex flex-row text-base">
                  <div className="ml-4">
                    <label htmlFor="length">Length (in cm): </label>
                    <input
                      className="w-28 px-1 rounded-md border"
                      type="number"
                      placeholder="Length"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      disabled={boxType === "box1" || boxType === "box2"}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="length">Breadth (in cm): </label>
                    <input
                      className="w-28 px-1 rounded-md border"
                      type="number"
                      placeholder="Breadth"
                      value={breadth}
                      onChange={(e) => setBreadth(e.target.value)}
                      disabled={boxType === "box1" || boxType === "box2"}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="length">Height (in cm): </label>
                    <input
                      className="w-28 px-1 rounded-md border"
                      type="number"
                      placeholder="Height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      disabled={boxType === "box1" || boxType === "box2"}
                    />
                  </div>
                </div>
              )}
            </div>
            <div>
              <h5 className="font-semibold text-lg mt-2">Enter Box Weight:</h5>
              <div className="m-1">
                <label htmlFor="length">Weight (in kg): </label>
                <input
                  className="w-28 px-1 rounded-md border"
                  type="number"
                  placeholder="Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
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
