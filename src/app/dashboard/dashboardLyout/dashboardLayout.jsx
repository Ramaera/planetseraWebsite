"use client";
import React from "react";
import Link from "next/link";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { useRouter } from "next/navigation";
import { Get_All_Products } from "@/apollo/queries";
import { useQuery } from "@apollo/client";
import InventoryIcon from "@mui/icons-material/Inventory";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from "@mui/icons-material/Add";
// import { GetUser } from "@/apollo/queries";

const DashboardLayout = () => {
  const router = useRouter();
  const allProducts = useQuery(Get_All_Products);
  //   const totaluser = useQuery(GetUser);

  return (
    <>
      <div className="navMobile ">
        <NavigationMobile page={"cart"} />
      </div>
      <div className="relative">
        <NavItem page={"cart"} />
      </div>
      <div className="flex ">
        <div>
          <aside
            id="default-sidebar"
            class="  sm:w-64 h-screen transition-transform  sm:translate-x-0"
            aria-label="Sidebar"
          >
            <div class="h-full flex px-3 py-24 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <ul class="space-y-2 font-medium">
                <li>
                  <Link
                    href="#"
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <DashboardIcon />
                    <span class="ms-3 font-semibold">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/add-product"
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <AddIcon />
                    <span class="flex-1 text-red-300 ms-3 whitespace-nowrap">
                      Add Product
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="all-product"
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <InventoryIcon />

                    <span class="flex-1 ms-3 text-red-300 whitespace-nowrap">
                      View All Products
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="flex w-full justify-center pt-32 bg-gray-400">
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
      </div>
    </>
  );
};

export default DashboardLayout;
