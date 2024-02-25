"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import "@/public/styles/cart.css";
import { useParams } from "next/navigation";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import {
  Get_VIEW_CART,
  Get_All_Products,
  CREATE_PAYMENT_DATA,
  FIND_TRANSACTION_ID,
  CREATE_ORDER,
  DELETE_CART,
} from "@/apollo/queries";
import { useRouter } from "next/navigation";
import { clearCart } from "@/state/slice/cartSlice";

const page = () => {
  const [merchantTransactionId, setMerchantTransactionId] = useState();
  const [shipping, setShipping] = useState(100);
  const [resStatus, setResStatus] = useState();
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state?.user);

  console.log("00", user.data.buyer.Cart[0].id);
  const addressesData = useSelector((state) => state.address);
  const CartData = useSelector((state) => state.cart.items);
  const [createOrder] = useMutation(CREATE_ORDER);
  const [deleteCart] = useMutation(DELETE_CART);
  const [createPaymentData] = useMutation(CREATE_PAYMENT_DATA);

  const ViewCartData = useQuery(Get_VIEW_CART, {
    variables: {
      buyerId: user?.data?.buyer?.id,
    },
  });
  const allProductsQuery = useQuery(Get_All_Products);
  const BuyerId = user?.data?.buyer?.id;
  console.log(BuyerId);

  const CartId = user.data.buyer.Cart[0].id;

  const AddressId = addressesData?.selectedAddress;

  const { id } = useParams();

  const [FindTransactionId] = useLazyQuery(FIND_TRANSACTION_ID, {
    variables: {
      merchantTransactionId,
    },
  });

  const allProducts =
    allProductsQuery.data?.allProducts.flatMap(
      (list) => list?.ProductsVariant
    ) || [];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // useEffect(() => {
  //   FindTransactionId();
  // }, [merchantTransactionId]);

  const dispatch = useDispatch();
  const router = useRouter();

  const checkStatus = async (merchantTransactionId) => {
    const transactionIdFound = await FindTransactionId();
    console.log(transactionIdFound.data);
    if (transactionIdFound.data) {
      return;
    }

    try {
      console.log("12");
      const response = await axios.get(
        `https://planetseraapi.planetsera.com/api/v1/status/${merchantTransactionId}`
      );
      console.log("res", response);
      setResStatus(response?.data);

      console.log(response.data);
      if (response?.data?.success) {
        const data = await handleCreateOrder();
        const paymentData = await createPaymentData({
          variables: {
            buyerId: BuyerId,
            orderId: data?.data?.createOrder.newOrder.id,
            paymentId: merchantTransactionId,
          },
        });
      }
    } catch (err) {
      console.log("err", err.message);
    }
  };

  // const checkStatusWithInterval = async (merchantTransactionId) => {
  //   setMerchantTransactionId(merchantTransactionId);

  //   const maxTimeout = 15 * 60 * 1000; // Timeout after 15 minutes
  //   let timeout = 0;
  //   const intervals = [
  //     1 * 1000, // First check after 20-25 seconds
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

  useEffect(() => {
    setMerchantTransactionId(id);

    checkStatus(id);
  }, []);

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

  useEffect(() => {
    if (calculatePrice() >= 200) {
      setShipping(50);
    } else {
      setShipping(100);
    }
  }, [calculatePrice]);

  const handleCreateOrder = async () => {
    try {
      console.log(AddressId, shipping, BuyerId, CartId);
      const resp = await createOrder({
        variables: {
          AddressId: parseInt("9"),
          ShippingCost: shipping,
          buyerId: BuyerId,
          cartId: CartId,
          orderAmount: calculateTotalPrice(),
        },
      });

      console.log("resp", resp.data?.createOrder.newOrder.id);

      await handleDeleteCart();

      return resp;
    } catch (err) {
      console.log("err", err.message);
    }
  };

  const handleDeleteCart = async () => {
    try {
      const resp = await deleteCart({
        variables: {
          cartId: CartId,
        },
      });

      await dispatch(clearCart());

      // await handleOrderPlaced();
    } catch (err) {
      console.log("err", err.message);
    }
  };

  const handleOrderPlaced = () => {
    router.push("/orderPlaced");
  };

  return (
    <>
      {!loading ? (
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
                className="mx-auto text-center pt-5 font-semibold text-sm sm:text-base	"
              >
                {resStatus?.success
                  ? "To check your order status"
                  : "Kindly Pay"}
              </div>
              <div className="flex justify-center rounded-2xl Cartbgcolor w-52	h-14 mt-10 items-center	 py-3">
                {resStatus?.success ? (
                  <Link href="/orders" className="text-white">
                    Click here
                  </Link>
                ) : (
                  <Link href="/cart" className="text-white">
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
      ) : (
        <div className="h-screen">Loading......</div>
      )}
    </>
  );
};

export default page;
