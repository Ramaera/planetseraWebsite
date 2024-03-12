"use client";
import React from "react";
import { Get_All_Products } from "@/apollo/queries";
import { useQuery } from "@apollo/client";

const DashboardLayout = () => {
  const allProducts = useQuery(Get_All_Products);

  return (
    <>
      <div className="flex w-full justify-center pt-32 bg-gray-400 h-screen">
        <div className="grid sm:grid-cols-4 sm:gap-20">
          <div className="bg-blue-500 p-4 w-32 h-32 rounded-lg">
            <h1 className="text-white text-center">Total Products</h1>
            <p className="text-center">
              {allProducts?.data?.allProducts?.length}
            </p>
          </div>
          <div className="bg-green-500  w-32 h-32 p-4 rounded-lg">
            <h1 className="text-white text-center">Delivered Order</h1>
          </div>
          <div className="bg-yellow-500  w-32 h-32 p-4 rounded-lg">
            <h1 className="text-white">Total Users</h1>
            <p></p>
          </div>
          <div className="bg-red-500  w-32 h-32 p-4 rounded-lg">
            <h1 className="text-white">Box 4</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
