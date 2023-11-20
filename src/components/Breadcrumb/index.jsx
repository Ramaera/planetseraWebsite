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
  console.log("color", colorMe);
  return (
    <>
      <MetaBreadcrumb />
      <div className="mx-2 sm:mx-16">
        <ul className="flex py-3">
          <li className="hover:underline mx-1 font-bold">
            <Link href={"/"}>
              <HomeIcon sx={{ fontSize: 30, marginTop: -1 }} />
            </Link>
          </li>
          {pathNames.length > 0 && <KeyboardDoubleArrowRightIcon />}
          {pathNames.map((link, index) => {
            let href = `/${pathNames.slice(0, index + 1).join("/")}`;
            let itemClasses =
              paths === href
                ? { textDecoration: "underline", color: colorMe }
                : { textDecoration: "underline" };

            let itemLink = capitalizeLinks
              ? link[0].toUpperCase() + link.slice(1, link.length)
              : link;
            return (
              <React.Fragment key={index}>
                <li
                  className="hover:underline mx-1 font-semibold"
                  style={itemClasses}
                >
                  <Link href={href}>{itemLink}</Link>
                </li>

                {/* <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li> */}
                {pathNames.length !== index + 1 && (
                  <KeyboardDoubleArrowRightIcon />
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
