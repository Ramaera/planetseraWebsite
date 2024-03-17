"use client";
import React from "react";
import { Get_All_Products } from "@/apollo/queries";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_ALL_ORDERS } from "@/apollo/queries";

const DashboardLayout = () => {
  const allProducts = useQuery(Get_All_Products);
  const allOrders = useQuery(GET_ALL_ORDERS);
  console.log(allOrders.data.getallOrders);

  return (
    <>
      <div className="flex w-full justify-center pt-32  h-screen">
        <div className="flex  sm:gap-20">
          <Link href="/dashboard/all-product">
            <div className="bg-blue-500 p-4 w-48 h-48  rounded-full font-semibold text-2xl flex flex-col items-center justify-center">
              <h1 className="text-white text-center">Total Products</h1>
              <p className="text-center">
                {allProducts?.data?.allProducts?.length}
              </p>
            </div>
          </Link>
          <Link href="/dashboard/add-product">
            <div className="bg-green-500  p-4 w-48 h-48  rounded-full font-semibold text-2xl flex flex-col items-center justify-center">
              <h1 className="text-white text-center">Add New Product</h1>
            </div>
          </Link>
          <Link href="/received-order">
            <div className="bg-yellow-500  p-4 w-48 h-48  rounded-full font-semibold text-2xl flex flex-col items-center justify-center">
              <h1 className="text-white text-center">No Of Orders</h1>
              <p>{allOrders.data.getallOrders.length}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
