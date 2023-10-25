"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CategoriesBlog = () => {
  const currentRoute = usePathname();

  return (
    <>
      <div className="border-gray-200 border-[1px] rounded-xl px-8 w-full py-2">
        <h3 className="text-[#1E1E1E] text-2xl font-['Montserrat'] font-bold text-left">
          Categories
        </h3>

        <div>
          <ul className="py-1">
            <Link href="/blog/category/BestSelling">
              <li
                className={`cursor-pointer p-2 ${
                  currentRoute === "/blog/category/BestSelling"
                    ? "bg-gray-100 rounded-lg font-semibold"
                    : ""
                }`}>
                Best Selling
              </li>
            </Link>
            <Link href="/blog/category/MouthWatering">
              <li
                className={`cursor-pointer p-2 ${
                  currentRoute === "/blog/category/MouthWatering"
                    ? "bg-gray-100 rounded-lg font-semibold"
                    : ""
                }`}>
                Mouth Watering
              </li>
            </Link>
            <Link href="/blog/category/NonvegTadka">
              <li
                className={`cursor-pointer p-2 ${
                  currentRoute === "/blog/category/NonvegTadka"
                    ? "bg-gray-100 rounded-lg font-semibold"
                    : ""
                }`}>
                Nonveg Tadka
              </li>
            </Link>
            <Link href="/blog/category/KitchenSpices">
              <li
                className={`cursor-pointer p-2 ${
                  currentRoute === "/blog/category/KitchenSpices"
                    ? "bg-gray-100 rounded-lg font-semibold"
                    : ""
                }`}>
                Kitchen Spices
              </li>
            </Link>
            <Link href="/blog/category/WeekandTadka">
              <li
                className={`cursor-pointer p-2 ${
                  currentRoute === "/blog/category/WeekandTadka"
                    ? "bg-gray-100 rounded-lg font-semibold"
                    : ""
                }`}>
                Weekand Tadka
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesBlog;
