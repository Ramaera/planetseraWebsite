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
        window.open(
          response.data,
          "_blank",
          "resizable=yes, scrollbars=yes, titlebar=yes, width=900, height=800, top=10, left=10"
        );
      })

      .catch((error) => {
        console.error("Error occurred while processing payment:", error);
      });

    checkStatusWithInterval();
  };

  // const checkStatus = async (merchantTransactionId) => {
  //   console.log("merchantTransactionId", merchantTransactionId);
  //   try {
  //     const response = await axios.get(
  //       `https://planetseraapi.planetsera.com/api/v1/status/${merchantTransactionId}`
  //     );

  //     if (response?.data?.success) {
  //       router.push("/orderPlaced");
  //     }
  //     console.log("response---", response?.data?.success);
  //   } catch (err) {
  //     console.log("err", err.message);
  //   }
  // };

  // const checkStatusWithInterval = async (merchantTransactionId) => {
  //   const maxTimeout = 15 * 60 * 1000; // Timeout after 15 minutes
  //   let timeout = 0;
  //   const intervals = [
  //     25 * 1000, // First check after 20-25 seconds
  //     3 * 1000, // Then every 3 seconds for 30 seconds
  //     6 * 1000, // Then every 6 seconds for 60 seconds
  //     10 * 1000, // Then every 10 seconds for 60 seconds
  //     30 * 1000, // Then every 30 seconds for 60 seconds
  //     60 * 1000, // Then every 1 minute until timeout
  //   ];

  //   for (const interval of intervals) {
  //     timeout += interval;
  //     await new Promise((resolve) => setTimeout(resolve, interval));
  //     const status = await checkStatus(merchantTransactionId);
  //     console.log("status interval", status);
  //     if (status.success === true || timeout >= maxTimeout) {
  //       return status;
  //     }
  //   }
  //   return { success: false, message: "Payment status check timeout" };
  // };

  // useEffect(() => {
  //   checkStatus();
  // }, []);

  return (
    <>
      <div className="font-mont">
        <p style={{ color: "#2F302F" }} className="text-xl mt-5 text-center">
          {/* Payment Method */}
          Coming Soon
        </p>

        {/* <BuynowBtn onClick={payOnline} link="#" text={"Pay Online"} /> */}
      </div>
    </>
  );
};
export default page;
