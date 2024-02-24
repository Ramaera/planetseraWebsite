"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import "@/public/styles/cart.css";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  const [resStatus, setResStatus] = useState();

  const checkStatus = async (merchantTransactionId) => {
    console.log("merchantTransactionId", merchantTransactionId);
    try {
      const response = await axios.get(
        `https://planetseraapi.planetsera.com/api/v1/status/${merchantTransactionId}`
      );
      setResStatus(response?.data);
      console.log("response", response);
    } catch (err) {
      console.log("err", err.message);
    }
  };

  const checkStatusWithInterval = async (merchantTransactionId) => {
    const maxTimeout = 15 * 60 * 1000; // Timeout after 15 minutes
    let timeout = 0;
    const intervals = [
      1 * 1000, // First check after 20-25 seconds
      3 * 1000, // Then every 3 seconds for 30 seconds
      6 * 1000, // Then every 6 seconds for 60 seconds
      10 * 1000, // Then every 10 seconds for 60 seconds
      30 * 1000, // Then every 30 seconds for 60 seconds
      60 * 1000, // Then every 1 minute until timeout
    ];

    for (const interval of intervals) {
      timeout += interval;
      await new Promise((resolve) => setTimeout(resolve, interval));
      const status = await checkStatus(merchantTransactionId);
      console.log("status interval", status);
      if (status.success === true || timeout >= maxTimeout) {
        return status;
      }
    }
    return { success: false, message: "Payment status check timeout" };
  };

  useEffect(() => {
    checkStatusWithInterval(id);
  }, []);

  return (
    <>
      <div className="font-mont h-screen">
        <div className="navMobile ">
          <NavigationMobile page={"cart"} />
        </div>

        <NavItem page={"cart"} />
        <div className="flex sm:p-10 w-full h-screen ">
          <div className="w-1/4 sm:pt-52 pt-32 sm:pl-32 pl-5	">
            <img src="/images/cartImages/clock.png" alt="" />
          </div>
          <div className="w-1/2 flex items-center flex-col justify-center">
            <div className="flex justify-center	">
              {resStatus?.success && (
                <img src="/images/cartImages/ticks.png" alt="" />
              )}
            </div>
            <div className="sm:text-3xl flex justify-center font-mont	pt-5 font-semibold	">
              {resStatus?.success
                ? "We have received your payment"
                : "Your payment failed"}
            </div>
            <div
              style={{ color: "#8D92A7" }}
              className="mx-auto text-center pt-5 font-semibold text-sm sm:text-base	">
              {resStatus?.success ? "To check your order status" : "Kindly Pay"}
            </div>
            <div className="flex justify-center rounded-2xl Cartbgcolor w-52	h-14 mt-10 items-center	 py-3">
              {resStatus?.success ? (
                <Link href="/orders" className="text-white">
                  Click here
                </Link>
              ) : (
                <Link href="/cart/checkout" className="text-white">
                  Try again here
                </Link>
              )}
            </div>
          </div>
          <div className="w-1/4 flex sm:items-center items-end mb-40 sm:mb-0 sm:pr-32 pr-5  sm:mt-64 ">
            <img src="/images/cartImages/checklist.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
