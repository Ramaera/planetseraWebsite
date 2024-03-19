"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Login from "@/components/Login";
import { useQuery } from "@apollo/client";
import { Get_All_Products } from "@/apollo/queries";
import {
  cartTotalValue,
  shippingValue,
  getDiscountedAmount,
} from "@/state/slice/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Link from "next/link";
const ordersummary = () => {
  const dispatch = useDispatch();
  const currentRoute = usePathname();
  const colorMe = useSelector((state) => state.colorUs.color);
  const CartData = useSelector((state) => state.cart.items);
  const [discount, setDiscount] = useState(null);
  const [shipping, setShipping] = useState(100);
  const user = useSelector((state) => state?.user);
  const [loginModal, setLoginModal] = useState(false);
  const [checkoutEnabled, setCheckoutEnabled] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const FreightCharge = useSelector((state) => state.shipment.freightCharge);
  const [subscriberKyc, setSubscriberKyc] = useState(null); // State to hold subscriber.kyc value

  const openLoginModal = () => {
    setLoginModal(true);
  };
  const closeLoginModal = () => {
    setLoginModal(false);
  };
  const allProductsQuery = useQuery(Get_All_Products);
  const allProducts =
    allProductsQuery.data?.allProducts.flatMap(
      (list) => list?.ProductsVariant
    ) || [];

  const calculatePrice = () => {
    const totalValue = allProducts.reduce(
      (total, prod) =>
        prod.price *
          (CartData.find((item) => item.productVariantId === prod.id)?.qty ||
            0) +
        total,
      0
    );

    dispatch(cartTotalValue(totalValue));
    return totalValue;
  };

  const handleApplyCoupon = () => {
    axios
      .get("https://kycramaerabackend.ramaera.com/allSubscribers")
      .then((res) => {
        const subscribers = res?.data;
        // console.log("couponCode", couponCode);

        const subscriber = subscribers
          .map(
            (subscriber) =>
              subscriber.pw_id === couponCode.toUpperCase() &&
              subscriber.kyc === "APPROVED"
          )
          .filter(Boolean);

        console.log("subscribers", subscriber?.kyc);

        if (subscriber.includes(true)) {
          const discountedAmount = calculatePrice() * 0.3;
          setDiscount(discountedAmount);
          dispatch(getDiscountedAmount(discountedAmount));
          setSubscriberKyc("APPROVED");
          toast.success("Coupon applied successfully!", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          setDiscount(0);
          setSubscriberKyc("NOT APPROVED");
          toast.error("Invalid coupon code. Discount not applied.", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        console.error("Error applying coupon:", err);
        setDiscount(0);
        setSubscriberKyc(null); // Reset subscriber.kyc value
        toast.error("Error applying coupon. Please try again later.", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const calculateTotalPrice = () => {
    const priceAfterDiscount = calculatePrice() - discount;
    const totalPrice = priceAfterDiscount + FreightCharge;
    return totalPrice;
  };

  useEffect(() => {
    return () => {
      dispatch(getDiscountedAmount(0));
    };
  }, []);

  useEffect(() => {
    if (calculatePrice() >= 500) {
      setCheckoutEnabled(true);
    } else {
      setCheckoutEnabled(false);
    }
  }, [calculatePrice, discount]);

  const handleProceedToCheckout = () => {
    if (!checkoutEnabled) {
      toast.error("Order Amount should be greater than ₹500.", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // Proceed to Checkout logic here
    }
  };

  return (
    <>
      <div className="font-mont sm:w-1/4 sm:min-w-[275px] pt-10   ">
        <div
          style={{ color: "#2F302F", borderRadius: "37px" }}
          className="border py-9 px-6 shadow-xl"
        >
          <p className="text-2xl  ">Order Summary</p>

          <div className="flex justify-between flex-col   mt-5 ">
            Items
            <div>
              {CartData.map((item, index) => {
                const product = allProducts.find(
                  (prod) => prod.id === item.productVariantId
                );
                {
                  console.log("item", item);
                }
                return (
                  <div className="flex justify-between">
                    <div>
                      {" "}
                      {item?.name} {product?.weight}g
                    </div>

                    <div>
                      {item?.qty} X {product?.price} = ₹{" "}
                      {item?.qty * product?.price}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex  justify-between mt-5 ">
            Total Amount <span>₹ {calculatePrice()}</span>
          </div>
          {currentRoute === "/cart/checkout" && (
            <div className="mb-4">
              <label className="block mt-2 mb-1">
                Enter PWID to avail (30% Discount)
              </label>
              <div className="flex">
                <TextField
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full border rounded pr-2 "
                  placeholder="Enter coupon code"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="Cartbgcolor text-white rounded px-2 h-14 w-32 "
                >
                  Apply
                </button>
              </div>
              <div className="flex justify-between mt-5">
                Discount Status :{" "}
                <span
                  className={
                    subscriberKyc === "APPROVED"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {subscriberKyc}
                </span>
              </div>
              <div className="flex  justify-between mt-5 ">
                Discounted Price <span>₹ {Math.round(discount)}</span>
              </div>
              <div className="flex  justify-between mt-5">
                Shipping{" "}
                <span className="Cart-remove">
                  + ₹{Math.round(FreightCharge)}
                </span>
              </div>
              <div className="flex  justify-between mt-5">
                Total <span>₹ {Math.round(calculateTotalPrice())}</span>
              </div>
            </div>
          )}

          {currentRoute === "/cart" && (
            <>
              {user.data ? (
                <>
                  {checkoutEnabled ? (
                    <Link href="/cart/checkout" className="text-white">
                      <div className="flex justify-center rounded-2xl mt-5 Cartbgcolor  py-3">
                        Proceed To Checkout
                      </div>
                    </Link>
                  ) : (
                    <Link href="/cart" className="text-white">
                      <button
                        onClick={handleProceedToCheckout}
                        className="flex justify-center rounded-2xl mt-5 Cartbgcolor cursor-pointer w-full  py-3"
                      >
                        Proceed To Checkout
                      </button>
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <div
                    onClick={openLoginModal}
                    className="text-white"
                    style={{ color: colorMe, fontWeight: "bold" }}
                  >
                    <div className="flex justify-center rounded-2xl mt-5 Cartbgcolor cursor-pointer  py-3">
                      Proceed To Checkout
                    </div>
                  </div>
                  <Login
                    isOpen={loginModal}
                    closeLoginModal={closeLoginModal}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ordersummary;
