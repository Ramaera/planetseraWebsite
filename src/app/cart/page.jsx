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
import {
  Get_All_Products,
  Get_VIEW_CART,
  REMOVE_ITEM_CART,
} from "@/apollo/queries";
import { useMutation } from "@apollo/client";

const Page = () => {
  const user = useSelector((state) => state?.user);

  const ViewCartData = useQuery(Get_VIEW_CART, {
    variables: {
      buyerId: user?.data?.buyer?.id,
    },
  });

  useEffect(() => {
    ViewCartData.refetch();
  }, [user]);

  console.log("ViewCartData", ViewCartData);

  const allProductsQuery = useQuery(Get_All_Products);
  const allProducts =
    allProductsQuery.data?.allProducts.flatMap(
      (list) => list?.ProductsVariant
    ) || [];

  const CartData = useSelector((state) => state.cart.items);

  const [removeItemCart] = useMutation(REMOVE_ITEM_CART);

  console.log("allProducts", allProducts);
  const cartItemsQuantity = ViewCartData?.data?.viewCart.reduce(
    (total, item) => total + item.qty,
    0
  );

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    // dispatch(removeFromCart({ id: productId }));
    console.log("idd", id);
    removeItemCart({
      variables: {
        cartItem: id,
      },
    });

    toast.success("Item Added To Your Cart", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleIncrementQuantity = (index) => {
    dispatch(incrementQuantity({ index }));
  };

  const handleDecrementQuantity = (index) => {
    dispatch(decrementQuantity({ index }));
  };

  return (
    <>
      <div className="navMobile ">
        <NavigationMobile page={"cart"} />
      </div>

      <NavItem page={"cart"} />
      {ViewCartData?.data?.viewCart?.length > 0 ? (
        <div className="sm:p-32 py-16 mt-10 sm:mt-0 px-3 sm:flex w-full sm:justify-between font-mont sm:min-h-[76vh]">
          <div className="sm:w-4/6">
            <div className="flex">
              <div className="sm:text-2xl mont-font">Cart</div>
              <div className="sm:text-xl text-slate-500 sm:p-1 px-3 mont-font">
                {" "}
                {cartItemsQuantity} Items
              </div>
            </div>
            <div className="cartScroll sm:w-full sm:pt-20 pt-5">
              {ViewCartData?.data?.viewCart?.map((item, index) => {
                const product = allProducts.find(
                  (prod) => prod.id === item.productVariantId
                );

                return (
                  <div className="flex sm:px-10 py-5    border-b-2 ">
                    <div className="">
                      <Link href={`/product/${item.id}`}>
                        <img
                          className="w-24 sm:w-44"
                          src={`https://planetseraapi.planetsera.com/get-images/${product?.imageUrl[0]}`}
                          alt="PlanetsEra Spices"
                        />
                      </Link>
                    </div>
                    <div className="mont-font sm:ml-10 ml-10   ">
                      <div>
                        <Link href={`/product/${item.id}`}>
                          <p className="Cart sm:text-xl ">{item.name}</p>
                        </Link>
                      </div>
                      <div> {product?.weight}g</div>
                      <div className="flex sm:hidden sm:w-full sm:justify-end text-xs sm:text-base mt-3 ">
                        ₹ {product?.price}
                      </div>

                      <div className="flex">
                        <div className="flex justify-between items-center text-xs sm:text-base mt-4 sm:px-3 px-1  border-2 rounded-2xl sm:w-36 w-28  ">
                          <button
                            onClick={() => handleDecrementQuantity(index)}>
                            <HorizontalRuleIcon className="w-5 h-5" />
                          </button>

                          {item.qty}

                          <button
                            onClick={() => handleIncrementQuantity(index)}>
                            <AddIcon />
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => handleRemoveFromCart(item?.id)}
                            className="pl-5 p-2 mt-6 Cart-remove text-xs sm:text-base">
                            Remove
                          </button>
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
