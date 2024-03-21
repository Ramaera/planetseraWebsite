"use client";
import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import { ALL_ORDERS, Get_All_Products } from "@/apollo/queries";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "@/public/styles/cart.css";
import axios from "axios";
const OrderDetails = () => {
  const router = useRouter();
  const user = useSelector((state) => state?.user);
  const allProductsQuery = useQuery(Get_All_Products);
  const allOrders = useQuery(ALL_ORDERS, {
    variables: {
      buyerId: user?.data?.buyer?.id,
    },
  });

  const { id } = useParams();
  const specificOrder = allOrders?.data?.allOrders.find(
    (list) => list.id === id
  );
  // if (!specificOrder) return;
  const allProducts =
    allProductsQuery.data?.allProducts.flatMap(
      (list) => list?.ProductsVariant
    ) || [];

  // console.log("user", user);
  useEffect(() => {
    if (!user?.data) {
      router.replace("/");
    }
  }, [user]);

  useEffect(() => {
    if (specificOrder) {
      fetchOrderTracking(specificOrder.order_id);
    }
  }, [specificOrder]);

  const [trackingInfo, setTrackingInfo] = useState("");
  const [orderStatus, setOrderStatus] = useState("PROCESSING");
  const [etd, setEtd] = useState();

  const fetchOrderTracking = async () => {
    try {
      // console.log("Fetching order tracking information...");
      const response = await axios.get(
        `https://apiv2.shiprocket.in/v1/external/courier/track?order_id=6718511330`,
        {
          headers: {
            Authorization: ` ${process.env.NEXT_PUBLIC_SHIPROCKET_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      setOrderStatus(
        response?.data[0]?.tracking_data?.shipment_track[0].current_status
      );
      setEtd(response?.data[0]?.tracking_data?.etd);
      console.log("resp", response);
      const trackUrl = response?.data[0]?.tracking_data?.track_url;
      // console.log("Tracking URL:", trackUrl);
      setTrackingInfo(trackUrl);
    } catch (error) {
      console.error("Error fetching tracking information:", error);
    }
  };

  return (
    <>
      <NavItem page={"orders"} className="pb-40" />
      <NavigationMobile page={"orders"} />
      <div className="min-h-screen w-full p-6 ">
        <div className=" max-w-6xl mx-auto  mt-12 sm:mt-20  ">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">
            {" "}
            Order Details
          </h1>
          <div className="grid sm:grid-cols-4 gap-4">
            <div className="sm:col-span-3">
              <div className="bg-gray-100 rounded-lg py-2 px-4">
                <div className="flex justify-between">
                  <Typography className="text-left text-slate-400 pb-2">
                    Order Status: <b>{orderStatus}</b>
                  </Typography>
                  <div>
                    <Typography className="text-left text-slate-400   font-semibold pb-2">
                      Order Date :{" "}
                      <span className="text-black font font-semibold">
                        {specificOrder?.orderDate
                          .slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </span>
                    </Typography>
                  </div>
                </div>

                {specificOrder?.orderItems?.map((item) => {
                  const product = allProducts.find(
                    (prod) => prod.id === item?.productVariantId
                  );
                  return (
                    <div className="">
                      <div className="flex  items-center sm:justify-between mt-1 mb-2">
                        <img
                          src={`https://planetseraapi.planetsera.com/get-images/${product?.imageUrl[0]}`}
                          alt="PlanetsEra Spices"
                          className="w-16 mr-4 "
                        />
                        <div className="flex flex-col sm:flex-row justify-between w-full">
                          <div className="text-gray-900  sm:w-60 sm:ml-4">
                            <b>{item?.name} </b>{" "}
                          </div>

                          <p className="text-gray-600 ">{product?.weight}g</p>
                          <p className="text-gray-600 sm:mr-4 text-left sm:w-36">
                            {item?.qty} X ₹ {product?.price}=
                            <b>₹{item?.qty * product?.price}</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {specificOrder && (
                <div className="flex justify-between">
                  <div>
                    <div className=" mt-2 font-semibold">
                      Track Your Order Here:
                    </div>
                    <Link href={trackingInfo}>
                      <button className="flex justify-center rounded-2xl  Cartbgcolor cursor-pointer px-5  py-3">
                        Track your Order
                      </button>
                    </Link>
                  </div>
                  <div>
                    {orderStatus != "Delivered" && (
                      <p className="font-semibold	">
                        Expected Delivery Date:{" "}
                        <span className="text-red-400">
                          {etd
                            ?.slice(0, 10)
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("-")}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              )}
              <div className="bg-gray-100 rounded-lg p-4 mt-4">
                <Typography className="text-left text-slate-400  font-semibold pb-2">
                  Shipping Details
                </Typography>
                <div className="">
                  <div className="flex items-center font-semibold">
                    <span className="mr-1">{specificOrder?.address?.name}</span>{" "}
                    |
                    <span className="ml-1">
                      {specificOrder?.address?.mobileNumber}{" "}
                    </span>
                  </div>

                  <div className="flex flex- w-full gap-2">
                    <p>{specificOrder?.address?.address[2].address}</p>
                    <br />
                    <p>{specificOrder?.address?.address[0]?.city}</p>
                    <p>{specificOrder?.address?.address[1]?.pinCode}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 rounded-lg p-4">
                <Typography className="text-left text-slate-400   font-semibold pb-2">
                  Payment Summary
                </Typography>
                <div>
                  <div className="flex justify-between mt-2">
                    <p>Payment Status:</p>
                    <span className="text-green-500">Success</span>
                  </div>

                  <div className="flex justify-between mt-4">
                    <p>Subtotal:</p>
                    <span>
                      ₹{" "}
                      {specificOrder?.orderAmount - specificOrder?.ShippingCost}
                    </span>
                  </div>
                  <div className="flex justify-between mt-4">
                    <p>Shipping Charges:</p>
                    <span>₹ {specificOrder?.ShippingCost}</span>
                  </div>
                  <div className="flex justify-between mt-4">
                    <p>Others Charges:</p>
                    <span>₹ 0</span>
                  </div>
                </div>

                <div className="flex justify-between mt-4 border-t-2 border-gray-400 pt-4">
                  <p className="font-semibold"> Amount Paid:</p>
                  <span>₹ {specificOrder?.orderAmount}</span>
                </div>
                {/* 
                <button className="bg-gradient-to-r from-red-500 to-slate-500 text-white w-full py-2 rounded-md mt-4">
                  Amount Paid
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
