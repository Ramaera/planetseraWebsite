"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { Get_All_Products } from "@/apollo/queries";
import axios from "axios";
import BuynowBtn from "@/components/BuynowBtn";

import {
  setMyCardMyMartCouponCode,
  setMyCardMyMartCouponAmount,
  clearMyCardMyMartCoupon,
} from "@/state/slice/cartSlice";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "@mui/material";
import Link from "next/link";

const page = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const discount = useSelector((state) => state.cart.getDiscountedAmount);
  const [checkoutEnabled, setCheckoutEnabled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const MyCardCouponAmountRedux = useSelector(
    (state) => state.cart.myCardMyMartCouponAmount
  );
  const MyCardCouponCodeRedux = useSelector(
    (state) => state.cart.myCardMyMartCouponCode
  );

  const [myCardCouponCode, setMyCardCouponCode] = useState(
    MyCardCouponCodeRedux || ""
  );

  const toggleInputField = () => {
    if (myCardCouponCode) {
      setIsOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (myCardCouponCode) {
      setIsOpen(true);
    }
  }, []);

  const handleApplyMyCardCoupon = () => {
    if (myCardCouponCode) {
      axios
        .get(
          // `https://l83w6jqz-6768.inc1.devtunnels.ms/verify/${myCardCouponCode}`
          `${process.env.NEXT_PUBLIC_MYMARTMYCARD_URL}/verify/${myCardCouponCode}`
        )
        .then((res) => {
          if (res.data) {
            const myCardCouponCodeAmt = res.data?.discountAmount;
            // console.log("myCardCouponCodeAmt", myCardCouponCodeAmt);
            toast.success("MyMart MyCard Coupon applied successfully!", {
              position: "top-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            dispatch(setMyCardMyMartCouponCode(myCardCouponCode));
            dispatch(setMyCardMyMartCouponAmount(myCardCouponCodeAmt));
          } else {
            dispatch(clearMyCardMyMartCoupon());
            toast.error("Invalid Coupon Code.", {
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
        .catch((error) => {
          dispatch(clearMyCardMyMartCoupon());
          console.error("Error", error);
          toast.error(
            error?.response?.data?.message || "Error applying MyCard Coupon.",
            {
              position: "top-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        });
    } else {
      dispatch(clearMyCardMyMartCoupon());
      toast.error("Enter Valid Coupon Code.", { position: "top-center" });
    }
  };

  const CartData = useSelector((state) => state.cart.items);

  const allProductsQuery = useQuery(Get_All_Products);
  // const ShippingChargeRedux = useSelector(
  //   (state) => state.shipment.shippingCharge
  // );

  const allProducts =
    allProductsQuery.data?.allProducts.flatMap(
      (list) => list?.ProductsVariant
    ) || [];

  const calculatePrice = () => {
    return allProducts.reduce(
      (total, prod) =>
        prod.price *
          (CartData.find((item) => item.productVariantId === prod.id)?.qty ||
            0) +
        total,

      0
    );
  };
  const calculateTotalPrice = () => {
    const priceAfterDiscount = calculatePrice() - discount;
    const PriceAfterCardDiscount = priceAfterDiscount - MyCardCouponAmountRedux;
    const totalPrice = PriceAfterCardDiscount 
    // + ShippingChargeRedux;
    return totalPrice;
  };

  // console.log("calculateTotalPrice", calculateTotalPrice());

  const BuyerId = user?.data?.buyer?.id;
  const BuyerEmail = user?.data?.email;
  const BuyerName = user?.data?.name;

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const payOnline = () => {
    if (checkoutEnabled) {
      const postData = {
        buyer_id: BuyerId,
        price: Math.round(calculateTotalPrice()),
        name: BuyerName,
        email: BuyerEmail,
      };
      axios
        .post("https://planetseraapi.planetsera.com/api/pay", postData)
        .then((response) => {
          window.location.replace(response.data);
        })

        .catch((error) => {
          console.error("Error occurred while processing payment:", error);
        });
    } else {
      handleOpenModal();
    }
  };

  const subTotalPrice = () => {
    const priceAfterDiscount = calculatePrice() - discount;
    const PriceAfterCardDiscount = priceAfterDiscount - MyCardCouponAmountRedux;
    return PriceAfterCardDiscount;
  };

  useEffect(() => {
    if (subTotalPrice() >= 500) {
      setCheckoutEnabled(true);
    } else {
      setCheckoutEnabled(false);
    }
  }, [subTotalPrice, myCardCouponCode]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mt-2 max-w-xl">
          <span
            onClick={toggleInputField}
            className="cursor-pointer font-semibold text-red-400 underline">
            Add MyMart MyCard Coupon code
          </span>
          {isOpen && (
            <div className="flex mt-2">
              <TextField
                size="small"
                type="text"
                placeholder="Enter MyMart MyCard Code"
                value={myCardCouponCode}
                onChange={(e) => setMyCardCouponCode(e.target.value)}
                className="w-full border rounded pr-2 text-sm"
              />
              <button
                onClick={handleApplyMyCardCoupon}
                className="Cartbgcolor text-white rounded px-2 h-10 w-32 ">
                Apply
              </button>
            </div>
          )}
        </div>
        <div className="font-mont">
          <BuynowBtn onClick={payOnline} link="#" text={"Pay Now"} />
        </div>
        <ToastContainer />
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div className="bg-slate-50 rounded-lg w-4/5	sm:w-[30rem] max-h-[90%] overflow-y-auto">
          <div>
            <h3 className="text-center font-semibold text-lg border-b-2 border-black px-4 py-2">
              Subtotal Amount Alert
            </h3>
            <div className=" py-3 px-6 ">
              <div>
                <h5 className="font-semibold">
                  Your order subtotal amount must be greater than ₹500 to
                  proceed with Pay Now.
                </h5>

                <h6 className=" mt-1">
                  Please add more products or increase quantities to meet the
                  minimum requirement.
                </h6>
              </div>

              <div className="flex justify-center">
                <Link href="/cart">
                  <button className="bg-red-400  text-white px-4 py-2 rounded-xl mt-4">
                    Go Back To Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default page;
