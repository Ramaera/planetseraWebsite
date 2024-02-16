"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Place,
  Email,
  Call,
} from "@mui/icons-material";
import "@/public/styles/footer.css";
import FooterTop from "./FooterTop";
import { useSelector } from "react-redux";

const Footer = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  return (
    <>
      {/* <FooterTop /> */}
      <footer className="bg-black bottom-0">
        <div className="mx-auto w-full px-8 py-6 pb-4 ">
          <div className="md:flex md:justify-between">
            <div className="mb-4 md:mb-0 justify-center md:justify-center md:items-start md:w-[30%] flex">
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
            {/* <div className="grid grid-cols-2 gap-8 sm:gap-2 sm:grid-cols-4 sm:mr-14"> */}
            <div className="grid grid-cols-2 gap-8 sm:flex sm:flex-cols sm:justify-between sm:w-full">
              <div>
                <h2 className="mb-4 text-sm font-bold text-gray-300 uppercase">
                  Company
                </h2>

                <ul className="text-white font-normal">
                  <li className="mb-2">
                    <Link href="/about" className="underlineEffect ">
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
                <h2 className="mb-4 text-sm font-bold text-gray-300 uppercase">
                  Quick Links
                </h2>

                <ul className="text-white font-normal">
                  <li className="mb-2">
                    <Link
                      href="/terms-and-conditions"
                      className="underlineEffect ">
                      Terms of Use
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/privacy-policy" className="underlineEffect">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/return-policy" className="underlineEffect">
                      Return Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-bold text-gray-300 uppercase ">
                  Blended Spices
                </h2>
                <ul className="text-white font-normal">
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
                <h2 className="mt-4 md:mt-0 mb-4 text-sm font-bold text-gray-300 uppercase">
                  Ground Spices
                </h2>
                <ul className="text-white font-normal">
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
                <h2 className="mb-4 text-sm font-bold text-gray-300 uppercase">
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
                <h2 className="mb-4 text-sm font-bold text-gray-300 uppercase">
                  Address
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-2 flex-row flex ">
                    <Place
                      style={{
                        color: "white",
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
                        color: "white",
                        fontSize: "30px",
                        marginRight: "8px",
                      }}
                    />
                    <h2>Care@ramaera.in</h2>
                  </li>
                  <li className="mb-2 flex flex-row">
                    <Call
                      style={{
                        color: "white",
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
            <h2 className="mb-4 text-sm font-bold text-gray-300 uppercase">
              Address
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-2 flex-row flex ">
                <Place
                  style={{
                    color: "white",
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
                    color: "white",
                    fontSize: "30px",
                    marginRight: "8px",
                  }}
                />
                <h2>Care@ramaera.in</h2>
              </li>
              <li className="mb-2 flex flex-row">
                <Call
                  style={{
                    color: "white",
                    fontSize: "30px",
                    marginRight: "8px",
                  }}
                />
                <h2>0120-4152818</h2>
              </li>
            </ul>
          </div>

          <hr className="my-4 border-gray-200 sm:mx-auto lg:my-2" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center font-medium ">
              © 2023 Planetsera . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a
                target="_blank"
                href="https://www.facebook.com/planetseraspices/"
                aria-label="facebook"
                className="text-white">
                <Facebook />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/planetseraspices/"
                aria-label="instagram"
                className="text-white">
                <Instagram />
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/company/planetsera-spices/"
                aria-label="linkedin"
                className="text-white ">
                <LinkedIn />
              </a>

              <a
                target="_blank"
                href="https://twitter.com/Planetseraspice/"
                aria-label="X"
                className="text-white flex items-center">
                <img
                  src="images/backgrounds/X-Logo.png"
                  alt="X-logo"
                  style={{
                    width: "19px",
                    background: "white",
                    borderRadius: "2px",
                    padding: "2px",
                  }}
                />
                {/* <Twitter /> */}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
