import React from "react";
import Link from "next/link";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import "@/public/styles/cart.css";

const page = () => {
  return (
    <>
      <div className="font-mont h-screen">
        <div className="navMobile ">
          <NavigationMobile />
        </div>

        <NavItem page={"cart"} />
        <div className="flex p-10 w-full h-screen ">
          <div className="w-1/4 pt-52 pl-32	">
            <img src="/images/cartImages/clock.png" alt="" />
          </div>
          <div className="w-1/2 flex items-center flex-col justify-center">
            <div className="flex justify-center	">
              <img src="/images/cartImages/ticks.png" alt="" />
            </div>
            <div className="text-3xl flex justify-center font-mont	pt-5 font-semibold	">
              Your Order Is Completed!
            </div>
            <div
              style={{ color: "#8D92A7" }}
              className="mx-auto text-center pt-5 font-semibold	"
            >
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </div>
            <div className="flex justify-center rounded-2xl Cartbgcolor w-52	h-14 mt-10	 py-3">
              <Link href="" className="text-white">
                Continue Shopping
              </Link>
            </div>
          </div>
          <div className="w-1/4 flex items-center pr-32 mt-64 justify-end">
            <img src="/images/cartImages/checklist.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
