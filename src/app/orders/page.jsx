"use client";

import React, { useEffect } from "react";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { useQuery } from "@apollo/client";
import { ALL_ORDERS, Get_All_Products } from "@/apollo/queries";
import { useSelector, useDispatch } from "react-redux";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";

const Orders = () => {
  const user = useSelector((state) => state?.user);
  const allOrders = useQuery(ALL_ORDERS, {
    variables: {
      buyerId: user?.data?.buyer?.id,
    },
  });

  const allordersList = allOrders?.data?.allOrders;
  // console.log("allOrders", allOrders?.data?.allOrders);

  const allProductsQuery = useQuery(Get_All_Products);

  const allProducts =
    allProductsQuery.data?.allProducts.flatMap(
      (list) => list?.ProductsVariant
    ) || [];

  useEffect(() => {
    allOrders.refetch();
  }, [user]);
  return (
    <>
      <NavItem page={"orders"} className="pb-40" />
      <NavigationMobile page={"orders"} />
      <div className="flex flex-col items-center justify-center mx-auto  min-h-screen w-full p-4 sm:p-6  bg-gray-100 ">
        <div className="mt-12 sm:mt-20  p-2 sm:p-4 w-full  max-w-4xl ">
          <h1 className="text-3xl font-bold mb-4">My Order</h1>

          {allordersList?.map((list) => (
            <div className="w-full bg-white shadow-md rounded-lg overflow-hidden mb-4">
              <p className="text-lg font-semibold px-4 pt-4">
                Order Id: {list?.id}
              </p>

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
                          Qty: {item?.qty} | Price: {product?.price}
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
                {/* <Link href={`/orders/${list.id}`}> */}
                <BuynowBtn
                  // onClick={payOnline}
                  link={`/orders/${list.id}`}
                  text={" Order Info"}
                  sectionClass="responsiveBtn"
                />
                {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 min-w-fit">
                    Order Info
                  </button> */}
                {/* </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
