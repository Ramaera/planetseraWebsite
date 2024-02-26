"use client";
import React, { useEffect, useState } from "react";
import "@/public/styles/cart.css";
import Divider from "@mui/material/Divider";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import Ordersummary from "./component/ordersummary";
import { useSelector } from "react-redux";
import { client } from "@/apollo";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { useDispatch } from "react-redux";
import Link from "next/link";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "@/state/slice/cartSlice";
import BuynowBtn from "@/components/BuynowBtn";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useQuery } from "@apollo/client";
import { CART_OPEARTION } from "@/apollo/queries";
import { ToastContainer, toast } from "react-toastify";
import { Get_All_Products, REMOVE_ITEM_CART } from "@/apollo/queries";
import { useMutation, useLazyQuery } from "@apollo/client";

const Page = () => {
  const dispatch = useDispatch();
  const [CartOpeartion] = useMutation(CART_OPEARTION);
  const [removeItemCart] = useMutation(REMOVE_ITEM_CART);
  const allProductsQuery = useQuery(Get_All_Products);
  const user = useSelector((state) => state?.user);
  const allProducts =
    allProductsQuery.data?.allProducts.flatMap(
      (list) => list?.ProductsVariant
    ) || [];

  const CartData = useSelector((state) => state.cart.items);

  const cartItemsQuantity = CartData.reduce(
    (total, item) => total + item?.qty,
    0
  );

  const handleRemoveFromCart = async (id, productVariantId) => {
    try {
      await removeItemCart({
        variables: {
          cartItem: id,
        },
      });

      dispatch(removeFromCart({ productVariantId }));

      toast.success("Product removed from your cart", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleIncrementQuantity = async (index, itemId, productVariantId) => {
    // console.log("clicl", CartData, itemId);
    try {
      const resp = await CartOpeartion({
        variables: {
          cartItemId: itemId,
          operation: "INCREMENT",
          qty: 1,
        },
      });
      // console.log("resp", resp);
      dispatch(incrementQuantity({ productVariantId }));
    } catch (err) {
      console.log("errdd", err.message);
    }
  };

  const handleDecrementQuantity = async (index, itemId, productVariantId) => {
    // console.log("clicked", itemId);
    try {
      const resp = await CartOpeartion({
        variables: {
          cartItemId: itemId,
          operation: "DECREMENT",
          qty: 1,
        },
      });
      // console.log("resp", resp);
      dispatch(decrementQuantity({ productVariantId }));
    } catch (err) {
      console.log("err", err.message);
    }
  };

  return (
    <>
      <div className="navMobile ">
        <NavigationMobile page={"cart"} />
      </div>

      <NavItem page={"cart"} />
      {CartData?.length > 0 ? (
        <div className="sm:p-32 py-16 mt-10 sm:mt-0 px-3 sm:flex w-full sm:justify-between font-mont sm:min-h-[76vh]">
          <div className="sm:w-4/6">
            <div className="flex">
              <div className="sm:text-2xl mont-font">Cart</div>
              <div className="sm:text-xl text-slate-500 sm:p-1 px-3 mont-font">
                {cartItemsQuantity} Items
              </div>
            </div>
            <div className="cartScroll sm:w-full  pt-5">
              {CartData?.map((item, index) => {
                const product = allProducts.find(
                  (prod) => prod.id === item.productVariantId
                );
                // console.log("product", product);
                return (
                  <div className="flex sm:px-10 py-5    border-b-2 ">
                    <div className="">
                      {/* <Link href={`/product/${product?.productUrl}`}> */}
                      <img
                        className="w-24 sm:w-44"
                        src={`https://planetseraapi.planetsera.com/get-images/${product?.imageUrl[0]}`}
                        alt="PlanetsEra Spices"
                      />
                      {/* </Link> */}
                    </div>
                    <div className="mont-font sm:ml-10 ml-10   ">
                      <div>
                        {/* <Link href={`/product/${item.id}`}> */}
                        <p className="Cart sm:text-xl ">{item.name}</p>
                        {/* </Link> */}
                      </div>
                      <div> {product?.weight}g</div>
                      <div className="flex sm:hidden sm:w-full sm:justify-end text-xs sm:text-base mt-3 ">
                        ₹ {product?.price}
                      </div>

                      <div className="flex">
                        <div className="flex justify-between items-center text-xs sm:text-base mt-4 sm:px-3 px-1  border-2 rounded-2xl sm:w-36 w-28  ">
                          <button
                            onClick={() =>
                              handleDecrementQuantity(
                                index,
                                item?.id,
                                item.productVariantId
                              )
                            }>
                            <HorizontalRuleIcon className="w-5 h-5" />
                          </button>

                          {item.qty}

                          <button
                            onClick={() =>
                              handleIncrementQuantity(
                                index,
                                item?.id,
                                item.productVariantId
                              )
                            }>
                            <AddIcon />
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() =>
                              handleRemoveFromCart(
                                item?.id,
                                item.productVariantId
                              )
                            }
                            className="pl-5 p-2 mt-6 Cart-remove text-xs sm:text-base">
                            Remove
                          </button>
                          <ToastContainer />
                        </div>
                      </div>
                    </div>
                    <div className="sm:flex hidden sm:w-full sm:justify-end text-xs sm:text-base  ">
                      ₹ {product?.price} × {item?.qty}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Ordersummary />
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center flex-col ">
          <div className="sm:text-4xl font-semibold">
            Your Planetsera Cart Is Empty
          </div>
          <ShoppingCartOutlinedIcon className="h-20 w-20" />
          <div className="  ">
            <BuynowBtn
              text="Shop Now"
              className="text-green-800"
              href="/shop"
              link="/shop"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
