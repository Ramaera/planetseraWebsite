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
import { CoPresentOutlined } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const page = () => {
  const [merchantTransactionId, setMerchantTransactionId] = useState();

  const [resStatus, setResStatus] = useState();
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state?.user);

  const addressesData = useSelector((state) => state.address);
  const CartData = useSelector((state) => state.cart.items);
  const cartTotalValue = useSelector((state) => state.cart.cartTotalValue);
  const shippingValue = useSelector((state) => state.cart.shippingValue);

  const [createOrder] = useMutation(CREATE_ORDER);
  const [deleteCart] = useMutation(DELETE_CART);
  const [createPaymentData] = useMutation(CREATE_PAYMENT_DATA);
  const ViewCartData = useQuery(Get_VIEW_CART, {
    variables: {
      buyerId: user?.data?.buyer?.id,
    },
  });
  const { data, loading: LoadingData } = useQuery(Get_All_Products);

  const BuyerId = user?.data?.buyer?.id;
  const CartId = user?.data?.buyer?.Cart[0]?.id;
  const AddressId = addressesData?.selectedAddress;
  const { id } = useParams();
  const [FindTransactionId] = useLazyQuery(FIND_TRANSACTION_ID, {
    variables: {
      merchantTransactionId,
    },
  });

  const allProducts = data?.allProducts.flatMap(
    (list) => list?.ProductsVariant
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const dispatch = useDispatch();
  const router = useRouter();

  const checkStatus = async (merchantTransactionId) => {
    // console.log("merchantTransactionId", merchantTransactionId);
    try {
      const url = `https://planetseraapi.planetsera.com/api/v1/status/${merchantTransactionId}`;
      // console.log("url", url);
      const response = await axios.get(url);
      // console.log("response", response);
      setResStatus(response?.data);
      const transactionIdFound = await FindTransactionId();
      if (transactionIdFound.data) {
        return;
      }
      if (
        response?.data?.success &&
        response?.data?.code === "PAYMENT_SUCCESS"
      ) {
        const data = await handleCreateOrder();
        const paymentData = await createPaymentData({
          variables: {
            buyerId: BuyerId,
            orderId: data?.data?.createOrder?.newOrder?.id,
            paymentId: merchantTransactionId,
          },
        });
      }

      // else if (response?.data?.code === "TRANSACTION_NOT_FOUND") {
      // }
      return response?.data;
    } catch (err) {
      console.log("err", err.message);
    }
  };
  useEffect(() => {
    setMerchantTransactionId(id);

    checkStatusWithInterval(id);
  }, []);

  const checkStatusWithInterval = async (merchantTransactionId) => {
    // console.log("enter1");
    const maxTimeout = 5 * 60 * 1000; // Timeout after 5 minutes
    // console.log("enter2");
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
      // console.log("merchantTransactionId123", merchantTransactionId);
      const status = await checkStatus(merchantTransactionId);
      // console.log("status interval", status);
      if (status.code === "PAYMENT_SUCCESS" || timeout >= maxTimeout) {
        return status;
      }
    }
    return { success: false, message: "Payment status check timeout" };
  };

  const calculateTotalPrice = cartTotalValue + shippingValue;

  const handleCreateOrder = async () => {
    try {
      const resp = await createOrder({
        variables: {
          AddressId: parseInt(AddressId),
          ShippingCost: shippingValue,
          buyerId: BuyerId,
          cartId: CartId,
          orderAmount: calculateTotalPrice,
        },
      });

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

  // if (LoadingData) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      {LoadingData || loading || resStatus?.code === "PAYMENT_PENDING" ? (
        <div className="h-screen flex-col flex justify-center items-center">
          <CircularProgress />
          <br />
          <div>Kindly wait, we are verifying your payment!</div>
        </div>
      ) : (
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
                {resStatus?.code === "PAYMENT_SUCCESS" && (
                  <img src="/images/cartImages/ticks.png" alt="" />
                )}
              </div>
              <div className="sm:text-3xl flex justify-center font-mont	pt-5 font-semibold	">
                {resStatus?.code === "PAYMENT_SUCCESS"
                  ? "We have received your payment"
                  : "Your payment failed"}
              </div>
              <div
                style={{ color: "#8D92A7" }}
                className="mx-auto text-center pt-5 font-semibold text-sm sm:text-base	">
                {resStatus?.code === "PAYMENT_SUCCESS"
                  ? "To check your order status"
                  : "Kindly Pay"}
              </div>
              <div className="flex justify-center rounded-2xl Cartbgcolor w-52	h-14 mt-10 items-center	 py-3">
                {resStatus?.code === "PAYMENT_SUCCESS" ? (
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
      )}
    </>
  );
};

export default page;
