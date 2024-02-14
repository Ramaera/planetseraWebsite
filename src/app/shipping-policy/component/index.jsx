import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const index = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div className=" items-center justify-center sm:p-6 p-4  border-solid  rounded-2xl ">
        <div className="sm:mt-20 mt-12 border-2 border-[#494747] rounded-2xl sm:p-4 p-3 ">
          <p
            style={{
              color: colorMe,
            }}
            className="font-semibold 	sm:text-5xl text-2xl flex justify-center"
          >
            Shipping & Delivery Policy
          </p>
          <p className="py-4 font-semibold text-2xl ">
            Last updated January 1, 2024
          </p>
          <p className="py-2 ">
            This Shipping & Delivery Policy is part of our Terms of Use
            ("Terms") and should be therefore read alongside our main Terms:{" "}
            <Link className="text-red-500" href="/terms-and-conditions">
              https://www.planetsera.com/terms-and-conditions.
            </Link>
          </p>
          <p className="py-2 ">
            Please carefully review our Shipping & Delivery Policy when
            purchasing our products. This policy will apply to any order you
            place with us.
          </p>

          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            WHAT ARE MY SHIPPING & DELIVERY OPTIONS?
          </h5>
          <p className="py-2">
            We offer various shipping options. In some cases a third-party
            supplier may be managing our inventory and will be responsible for
            shipping your products.
          </p>
          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            Shipping Fees
          </h5>
          <p className="py-2">We offer shipping at the following rates:</p>
          <div className="flex sm:gap-20 gap-5 justify-center sm:justify-start sm:p-3">
            <div className="text-center">
              <p className="text-gray-500 font-semibold underline">
                Shipping Method
              </p>
              <p>Combo Order</p>
              <p>Min Order Amount ₹200</p>
              <p>Combo + Other item</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 font-semibold underline">
                Shipping Fee
              </p>
              <p>₹ 100</p>
              <p>₹ 50</p>
              <p>₹ 150</p>
            </div>
          </div>
          <p className="py-2">
            All times and dates given for delivery of the products are given in
            good faith but are estimates only.
          </p>
          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            DO YOU DELIVER INTERNATIONALLY?
          </h5>
          <p className="py-2">We do not offer international shipping.</p>
          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            QUESTIONS ABOUT RETURNS?
          </h5>
          <p className="py-2">
            If you have questions about returns, please review our Return
            Policy:{" "}
            <Link href="/return-policy" className="text-red-500">
              https://www.planetsera.com/return-policy.
            </Link>
          </p>
          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            HOW CAN YOU CONTACT US ABOUT THIS POLICY?
          </h5>
          <p className="py-2">
            If you have any further questions or comments, you may contact us
            by:
          </p>
          <ul>
            <li className="">• Phone: 0120-4152818</li>
            <li className="">• Email: Care@ramaera.in</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
