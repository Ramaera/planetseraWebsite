"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { MetaBreadcrumb } from "./MetaBreadcrumb/MetaBreadcrumb";
import { useSelector } from "react-redux";

{
  /*  <Breadcrumb capitalizeLinks /> */
}
const Breadcrumb = ({ homeElement, separator, capitalizeLinks }) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const colorMe = useSelector((state) => state.colorUs.color);
  return (
    <>
      <MetaBreadcrumb />
      <div className="mx-2 sm:mx-16">
        <ul className="flex py-3 items-center ">
          <li className="hover:underline mx-1 font-bold ">
            <Link href={"/"}>
              <div className="flex text-xs sm:text-base ">
                <HomeIcon
                  className="text-md sm:text-3xl "
                  sx={{ marginRight: 0.3, marginTop: -0.5 }}
                />
                Home
              </div>
            </Link>
          </li>
          {pathNames.length > 0 && (
            <KeyboardDoubleArrowRightIcon className="text-lg sm:text-2xl" />
          )}
          {pathNames.map((link, index) => {
            let href = `/${pathNames.slice(0, index + 1).join("/")}`;
            let itemClasses =
              paths === href
                ? { textDecoration: "none", color: colorMe }
                : { textDecoration: "none" };

            // let itemLink = capitalizeLinks
            //   ? link[0].toUpperCase() + link.slice(1, link.length)
            //   : link;

            let itemLink = capitalizeLinks
              ? link
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (firstChar) => firstChar.toUpperCase())
              : link;
            return (
              <React.Fragment key={index}>
                <li
                  className="hover:underline mx-1 font-semibold text-xs sm:text-base"
                  style={itemClasses}
                >
                  <Link href={href}>{itemLink}</Link>
                </li>

                {/* <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li> */}
                {pathNames.length !== index + 1 && (
                  <KeyboardDoubleArrowRightIcon className="text-lg sm:text-2xl" />
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Breadcrumb;
