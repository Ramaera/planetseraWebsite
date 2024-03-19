"use client";
import { useState } from "react";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import CategoryIcon from "@mui/icons-material/Category";
import ViewListIcon from "@mui/icons-material/ViewList";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const currentRoute = usePathname();
  return (
    <section className="flex flex-col min-h-screen">
      <div className="navMobile">
        <NavigationMobile page={"cart"} />
      </div>
      <div className="relative">
        <NavItem page={"cart"} />
      </div>
      <div className="flex flex-1">
        <aside
          id="default-sidebar"
          className="sm:w-60 min-h-screen transition-transform sm:translate-x-0"
          aria-label="Sidebar">
          <div className="h-full flex justify-center px-1 py-24 overflow-y-auto bg-slate-50">
            {/* Your sidebar content */}
            <ul class="space-y-2 font-medium">
              <li>
                <Link
                  href="/dashboard"
                  class={`flex items-center p-2 text-gray-900 rounded-lg group ${
                    currentRoute === "/dashboard"
                      ? "bg-slate-300"
                      : "hover:bg-gray-300"
                  }`}>
                  <DashboardIcon />
                  <span class="ms-3 ">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/add-product"
                  class={`flex items-center p-2 text-gray-900 rounded-lg group ${
                    currentRoute === "/dashboard/add-product"
                      ? "bg-slate-300"
                      : "hover:bg-gray-300"
                  }`}>
                  <LibraryAddIcon />
                  <span class="flex-1  ms-3 whitespace-nowrap">
                    Add Product
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/all-product"
                  class={`flex items-center p-2 text-gray-900 rounded-lg group ${
                    currentRoute.startsWith("/dashboard/all-product")
                      ? "bg-slate-300"
                      : "hover:bg-gray-300"
                  }`}>
                  <CategoryIcon />
                  <span class="flex-1 ms-3  whitespace-nowrap">
                    View All Products
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/received-order"
                  class={`flex items-center p-2 text-gray-900 rounded-lg group ${
                    currentRoute.startsWith("/dashboard/received-order")
                      ? "bg-slate-300"
                      : "hover:bg-gray-300"
                  }`}>
                  <ViewListIcon />
                  <span class="flex-1 ms-3  whitespace-nowrap">
                    View All Orders
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <main className="flex-1 overflow-x-auto h-screen">{children}</main>
      </div>
    </section>
  );
}
