"use client";

import React, { useEffect } from "react";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { useQuery } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useRouter } from "next/navigation";
import { ALL_ORDERS, Get_All_Products } from "@/apollo/queries";

const Orders = () => {
  const router = useRouter();
  const user = useSelector((state) => state?.user);
  const allOrders = useQuery(ALL_ORDERS, {
    variables: {
      buyerId: user?.data?.buyer?.id,
    },
  });
  // const specificOrder = allOrders?.data?.allOrders.find(
  //   (list) => list.id === id
  // );

  console.log("allOrders", allOrders);

  const allordersList = allOrders?.data?.allOrders;
  const allProductsQuery = useQuery(Get_All_Products);

  const allProducts =
    allProductsQuery.data?.allProducts.flatMap(
      (list) => list?.ProductsVariant
    ) || [];

  useEffect(() => {
    allOrders.refetch();
  }, [user]);

  useEffect(() => {
    if (!user?.data) {
      router.replace("/");
    }
  }, [user]);

  return (
    <>
      <NavItem page={"orders"} className="pb-40" />
      <NavigationMobile page={"orders"} />
      <div className="flex flex-col items-center  mx-auto  min-h-screen w-full p-4 sm:p-6  bg-gray-100 ">
        <div className="mt-12 sm:mt-20  p-2 sm:p-4 w-full  max-w-4xl ">
          <h1 className="text-3xl font-bold mb-4">My Orders</h1>
          {allordersList?.length === 0 ? (
            <div className="flex h-[650px] justify-center items-center flex-col ">
              <div className="sm:text-4xl font-semibold">
                You have not placed any order yet.
              </div>
              <ShoppingCartOutlinedIcon className="h-20 w-20" />
              <div className="  ">
                <BuynowBtn
                  text="Order Now"
                  className="text-green-800"
                  href="/shop-all"
                  link="/shop-all"
                />
              </div>
            </div>
          ) : (
            allordersList?.map((list) => (
              <div className="w-full bg-white shadow-md rounded-lg overflow-hidden mb-4">
                <div className="flex justify-between">
                  <p className="text-lg font-semibold px-4 pt-4">
                    Order Date:{" "}
                    {list?.orderDate
                      ? list.orderDate.slice(8, 10) +
                        "-" +
                        list.orderDate.slice(5, 7) +
                        "-" +
                        list.orderDate.slice(0, 4)
                      : null}
                  </p>

                  <p className="text-lg font-semibold px-4 pt-4">
                    Order Amount: ₹ {list?.orderAmount}
                  </p>
                </div>

                <div className="p-4">
                  {list?.orderItems?.map((item) => {
                    const product = allProducts.find(
                      (prod) => prod.id === item?.productVariantId
                    );

                    return (
                      <div className="flex items-center my-3">
                        <img
                          src={`https://planetseraapi.planetsera.com/get-images/${product?.imageUrl[0]}`}
                          alt="PlanetsEra Spices"
                          className="w-20 h-24  mr-4"
                        />

                        <div className="flex flex-col sm:flex-row justify-between w-full">
                          <p className="sm:text-lg font-semibold sm:w-60 sm:ml-4">
                            {item?.name}
                          </p>
                          <p className="text-gray-600">{product?.weight}g</p>
                          <p className="text-gray-600 sm:mr-4">
                            Qty: {item?.qty} | Price: ₹ {product?.price}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="p-4 bg-gray-100 flex justify-between items-center">
                  <div>
                    <p className="">Status: {list.status}</p>
                  </div>
                  <BuynowBtn
                    // onClick={payOnline}
                    link={`/orders/${list.id}`}
                    text={" Order Info"}
                    sectionClass="responsiveBtn"
                  />
                </div>
              </div>
            ))
          )}
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Orders;
