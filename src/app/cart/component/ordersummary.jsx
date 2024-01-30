"use client";
import React, { useState, useEffect } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InputAdornment from "@mui/material/InputAdornment";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

// import Address from "../address";

import TextField from "@mui/material/TextField";
import Link from "next/link";
const ordersummary = () => {
  const currentRoute = usePathname();

  const CartData = useSelector((state) => state.cart.items);
  const [discount, setDiscount] = useState(56);
  const [shipping, setShipping] = useState(30);
  const [couponAmount, setCouponAmount] = useState(20);

  // console.log("cartItems", cartItems);

  const calculatePrice = () => {
    return CartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotalPrice = () => {
    const totalPrice = calculatePrice();
    // const discountedPrice = totalPrice - discount;
    const totalPriceWithShipping = totalPrice + shipping;
    const totalPriceAfterCoupon = totalPriceWithShipping - couponAmount;

    return totalPriceAfterCoupon;
  };

  return (
    <>
      <div className="font-mont sm:w-1/4 pt-10	 ">
        <div
          style={{ color: "#2F302F", borderRadius: "37px" }}
          className="border py-9 px-6 shadow-xl"
        >
          <p className="text-2xl	">Order Summary</p>
          <div className="flex justify-between   mt-5 ">
            Items
            <div>
              {CartData.map((item, index) => (
                <>
                  <div className="flex">
                    {item?.masalaName} × {item?.quantity}
                  </div>
                </>
              ))}
            </div>
          </div>
          {/* <div className="flex  justify-between mt-5 ">
            Items <p>{cartItems.item?.masalaName}</p>
          </div> */}
          <div className="flex  justify-between mt-5 ">
            Price <span>₹ {calculatePrice()}</span>
          </div>
          {/* <div className="flex  justify-between mt-5">
            Discount <span>- ₹{discount}</span>
          </div> */}
          <div className="flex  justify-between mt-5">
            Shipping <span className="Cart-remove">+ ₹{shipping}</span>
          </div>
          <div className="flex  justify-between mt-5 border-b-2 pb-5">
            Coupon Applied <span>- ₹{couponAmount}</span>
          </div>
          <div className="flex  justify-between mt-5">
            Total <span>₹ {calculateTotalPrice()}</span>
          </div>
          <div className="flex  justify-between mt-5">
            Estimated Delivery By <span>In 5 Days</span>
          </div>

          {currentRoute === "/cart" && (
            <>
              <TextField
                className="py-2"
                variant="standard"
                placeholder="Coupon Code"
                sx={{
                  width: "100%",
                  border: 0,
                  borderWidth: 0,
                  boxSizing: "inherit",
                  borderWidth: 1,
                  height: "3rem",
                  paddingLeft: 3,
                  borderColor: "#E2E2E2",
                  borderRadius: 9999,
                  marginTop: 3,
                }}
                InputProps={{
                  disableUnderline: "true",
                  endAdornment: (
                    <InputAdornment className="mr-3" position="end">
                      <LocalOfferIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {/* <Link href="/cart/shippingDetail" className="text-white"> */}
              <div className="flex justify-center rounded-2xl mt-5 Cartbgcolor cursor-not-allowed py-3">
                Proceed To Checkout
              </div>
              {/* </Link> */}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ordersummary;
