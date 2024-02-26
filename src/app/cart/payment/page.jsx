"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import { Get_VIEW_CART, Get_All_Products } from "@/apollo/queries";
import axios from "axios";
import BuynowBtn from "@/components/BuynowBtn";
import { CREATE_ORDER, DELETE_CART } from "@/apollo/queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { clearCart } from "@/state/slice/cartSlice";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const addressesData = useSelector((state) => state.address);
  const user = useSelector((state) => state?.user);

  const [shipping, setShipping] = useState(100);
  const [createOrder] = useMutation(CREATE_ORDER);
  const [deleteCart] = useMutation(DELETE_CART);

  const CartData = useSelector((state) => state.cart.items);

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
          (CartData.find((item) => item.productVariantId === prod.id)?.qty ||
            0) +
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

  useEffect(() => {
    if (calculatePrice() >= 200) {
      setShipping(50);
    } else {
      setShipping(100);
    }
  }, [calculatePrice]);

  const payOnline = () => {
    const postData = {
      buyer_id: BuyerId,
      price: calculateTotalPrice(),
      name: BuyerName,
      email: BuyerEmail,
    };
    axios
      .post("https://planetseraapi.planetsera.com/api/pay", postData)
      .then((response) => {
        window.location.replace(
          response.data
          // "_blank",
          // "resizable=yes, scrollbars=yes, titlebar=yes, width=900, height=800, top=10, left=10"
        );
      })

      .catch((error) => {
        console.error("Error occurred while processing payment:", error);
      });
  };
  return (
    <>
      <div className="font-mont">
        <BuynowBtn onClick={payOnline} link="#" text={"Pay Now"} />
      </div>
    </>
  );
};
export default page;
