"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Home,
  Email,
  Call,
} from "@mui/icons-material";

import "./footer.css";
import FooterTop from "./FooterTop";
import { useSelector } from "react-redux";

const Footer = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  return (
    <>
      {/* <FooterTop /> */}
      <footer className="bg-white border-t-[0.1px] border-black bottom-0 ">
        <div className="mx-auto w-full  px-8 py-6 ">
          <div className="md:flex md:justify-between">
            <div className="mb-4 md:mb-0 justify-center md:justify-start md:items-start md:w-[30%] flex">
              <Link href="/" className="flex items-center">
                <div className="logo my-auto">
                  <img
                    src="/images/backgrounds/footerlogo.webp"
                    alt="Planetsera logo"
                    title="Planetsera logo"
                    className="lg:w-40"
                  />
                </div>
              </Link>
              {/* <p className="self-center text-2xl font-bold whitespace-nowrap">
                Planetsera
              </p> */}
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-2 sm:grid-cols-4 sm:mr-14">
              <div>
                <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase">
                  Company
                </h2>

                <ul className="text-[#1e1e1e]  font-medium ">
                  <li className="mb-2">
                    <Link href="/about" className="underlineEffect">
                      About us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/contact-us" className="underlineEffect">
                      Contact us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/earn" className="underlineEffect">
                      Earn Reward
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/product"
                      className="underlineEffect"
                      // onClick={() => window.scrollTo(0, 0)}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "auto !important" })
                      }>
                      Product
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase ">
                  Blended Spices
                </h2>
                <ul className="text-[#1e1e1e] font-medium">
                  <li className="mb-2">
                    <Link
                      href="/products/chat-masala"
                      className="underlineEffect">
                      Chat Masala
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/products/garam-masala"
                      className="underlineEffect">
                      Garam Masala
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/products/meat-masala"
                      className="underlineEffect">
                      Meat Masala
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/products/sabji-masala"
                      className="underlineEffect">
                      Sabji Masala
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase">
                  Ground Spices
                </h2>
                <ul className="text-[#1e1e1e] font-medium">
                  <li className="mb-2">
                    <Link
                      href="/products/amchur-powder"
                      className="underlineEffect">
                      Amchur Powder
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/products/black-pepper-powder"
                      className="underlineEffect">
                      Black Pepper Powder
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/products/coriander-powder"
                      className="underlineEffect">
                      Coriander Powder
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/products/cumin-powder"
                      className="underlineEffect">
                      Cumin Powder
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href={"/products/red-chilli-powder"}
                      className="underlineEffect">
                      Red chilli powder
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/products/turmeric-powder"
                      className="underlineEffect">
                      Turmeric Powder
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className="text-[#1e1e1e] font-medium">
                  <li className="mb-2">
                    <a className="underlineEffect">Privacy Policy</a>
                  </li>
                  <li className="mb-2">
                    <a className="underlineEffect">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div> */}
              <div className="sm:min-w-[280px] hidden sm:block">
                <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase">
                  Address
                </h2>
                <ul className="text-[#1e1e1e] font-medium">
                  <li className="mb-2 flex-row flex ">
                    <Home
                      style={{
                        color: "black",
                        fontSize: "40px",
                        marginRight: "4px",
                        marginLeft: "-4px",
                      }}
                    />
                    <h2>
                      H-150, Sector-63 Noida,
                      <br />
                      Gautam Budh Nagar, 201301
                    </h2>
                  </li>
                  <li className="mb-2 flex flex-row">
                    <Email
                      style={{
                        color: "black",
                        fontSize: "30px",
                        marginRight: "8px",
                      }}
                    />
                    <h2>Care@ramaera.in</h2>
                  </li>
                  <li className="mb-2 flex flex-row">
                    <Call
                      style={{
                        color: "black",
                        fontSize: "30px",
                        marginRight: "8px",
                      }}
                    />
                    <h2>0120-4152818</h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="block sm:hidden mt-6">
            <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase">
              Address
            </h2>
            <ul className="text-[#1e1e1e] font-medium">
              <li className="mb-2 flex-row flex ">
                <Home
                  style={{
                    color: "black",
                    fontSize: "40px",
                    marginRight: "4px",
                    marginLeft: "-4px",
                  }}
                />
                <h2>
                  H-150, Sector-63 Noida,
                  <br />
                  Gautam Budh Nagar, 201301
                </h2>
              </li>
              <li className="mb-2 flex flex-row">
                <Email
                  style={{
                    color: "black",
                    fontSize: "30px",
                    marginRight: "8px",
                  }}
                />
                <h2>Care@ramaera.in</h2>
              </li>
              <li className="mb-2 flex flex-row">
                <Call
                  style={{
                    color: "black",
                    fontSize: "30px",
                    marginRight: "8px",
                  }}
                />
                <h2>0120-4152818</h2>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-4" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-[#1e1e1e] sm:text-center font-medium ">
              © 2023 Planetsera . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a
                target="_blank"
                href="https://www.facebook.com/planetseraspices/"
                className="text-black">
                <Facebook />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/planetseraspices/"
                className="text-black">
                <Instagram />
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/company/planetsera-spices/"
                className="text-black ">
                <LinkedIn />
              </a>

              <a
                target="_blank"
                href="https://twitter.com/Planetseraspice/"
                className="text-black">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
