"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import { Get_VIEW_CART, Get_All_Products } from "@/apollo/queries";
import axios from "axios";
import BuynowBtn from "@/components/BuynowBtn";

const page = () => {
  const user = useSelector((state) => state?.user);

  const ViewCartData = useQuery(Get_VIEW_CART, {
    variables: {
      buyerId: user?.data?.buyer?.id,
    },
  });

  const allProductsQuery = useQuery(Get_All_Products);

  const allProducts =
    allProductsQuery.data?.allProducts.flatMap(
      (list) => list?.ProductsVariant
    ) || [];

  const calculatePrice = () => {
    return allProducts.reduce(
      (total, prod) =>
        prod.price *
          (ViewCartData?.data?.viewCart?.cartItem.find(
            (item) => item.productVariantId === prod.id
          )?.qty || 0) +
        total,
      0
    );
  };

  const calculateTotalPrice = () => {
    const totalPrice = calculatePrice();

    if (totalPrice >= 200) {
      const totalPriceWithShipping = totalPrice + 50;
      return totalPriceWithShipping;
    } else {
      const totalPriceWithShipping = totalPrice + 100;
      return totalPriceWithShipping;
    }
  };

  const BuyerId = user?.data?.buyer?.id;
  const BuyerEmail = user?.data?.email;
  const BuyerName = user?.data?.name;

  const payOnline = () => {
    const postData = {
      buyer_id: BuyerId,
      price: calculateTotalPrice(),
      name: BuyerName,
      email: BuyerEmail,
    };
    axios
      .post("https://nvg1b95j-6770.inc1.devtunnels.ms/api/pay", postData)
      .then((response) =>
        window.open(
          response.data,
          "_blank",
          "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10"
        )
      )
      .catch((error) => {
        console.error("Error occurred while processing payment:", error);
      });
  };

  return (
    <>
      <div className="font-mont">
        <p style={{ color: "#2F302F" }} className="text-xl mt-5 text-center">
          Payment Method
        </p>

        <BuynowBtn onClick={payOnline} link="#" text={"Pay Online"} />

        {/* <Button onClick={payOnline}>Pay Online</Button> */}
      </div>
    </>
  );
};
export default page;
