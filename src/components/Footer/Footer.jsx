"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import "./footer.css";
import FooterTop from "./FooterTop";

const Footer = ({ page }) => {
  return (
    <>
      {/* <FooterTop /> */}
      <footer className="bg-white border-t-[0.1px] border-black bottom-0 ">
        <div className="mx-auto w-full  px-8 py-6 ">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 justify-center md:justify-start md:items-start md:w-[40%] flex">
              <Link href="/" className="flex items-center">
                <div className="logo my-auto">
                  <img
                    src="/images/backgrounds/footerlogo.webp"
                    alt="footer"
                    className="lg:w-40"
                  />
                </div>
              </Link>
              {/* <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Planetsera
              </p> */}
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-5">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>

                <ul className="text-gray-500  font-medium">
                  <li className="mb-2">
                    <Link href="/about" className="hover:underline">
                      About us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/contactUs" className="hover:underline">
                      Contact us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href={{
                        pathname: "/product",
                        query: {
                          id: "prod",
                        },
                      }}
                      className="hover:underline">
                      Product
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/shop" className="hover:underline">
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Products
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <a href="product#blendedSpices" className="hover:underline">
                      Blended Spices
                    </a>
                  </li>

                  <li className="mb-2">
                    <a href="product#groundSpices" className="hover:underline">
                      Ground Spices
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <a
                      href="https://www.facebook.com/planetseraspices/"
                      target="_blank"
                      className="hover:underline ">
                      Facebook
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.instagram.com/planetseraspices/"
                      target="_blank"
                      className="hover:underline ">
                      Instagram
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.linkedin.com/company/planetsera-spices/"
                      target="_blank"
                      className="hover:underline ">
                      Linkedin
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://twitter.com/Planetseraspice/"
                      target="_blank"
                      className="hover:underline ">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Trending Spices
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <Link
                      href={"/products/red-chilli-powder"}
                      className="hover:underline">
                      Red chilli powder
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/products/sabji-masala"
                      className="hover:underline">
                      Sabji Masala
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/products/garam-masala"
                      className="hover:underline">
                      Garam Masala
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/products/chat-masala"
                      className="hover:underline">
                      Chat Masala
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <a className="hover:underline">Privacy Policy</a>
                  </li>
                  <li className="mb-2">
                    <a className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div> */}
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Address
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <a className="hover:underline">
                      H-150, Sector-63 Noida, Gautam Budh Nagar, 201301
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="hover:underline">Care@ramaera.in</a>
                  </li>
                  <li className="mb-2">
                    <a className="hover:underline">0120-4152818</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 Planetsera . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a
                target="_blank"
                href="https://www.facebook.com/planetseraspices/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <Facebook style={{ color: "black" }} />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/planetseraspices/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <Instagram style={{ color: "black" }} />
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/company/planetsera-spices/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <LinkedIn style={{ color: "black" }} />
              </a>

              <a
                target="_blank"
                href="https://twitter.com/Planetseraspice/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <Twitter style={{ color: "black" }} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
