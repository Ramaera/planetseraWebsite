"use client";
import "./ShopBuy.css";
import { useSelector } from "react-redux";

const ShopBuy = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div className="basis-4/12 flex flex-col justify-center m-auto my-4 sm:my-10">
        <h6
          className="shopBuy-heading text-black"
          // style={{
          //   webkitTextFillColor: "transparent",
          //   backgroundImage: `linear-gradient(to right, ${colorMe}, ${
          //     colorMe + "80"
          //   })`,
          // }}
        >
          "Get fit with flavor - PlanetsEra spices bring a healthy kick to your
          meals."
        </h6>
      </div>
      <div className="my-4 sm:my-10 md:px-6 mx-16">
        <div className="flex m-auto justify-evenly">
          <div className="px-2 flex justify-center w-[300px]">
            <img
              className=""
              src="images/backgrounds/ShopBuyHaat-2.webp"
              alt="Hat Ramaera"
              title="Hat Ramaera"
            />
          </div>
          <div className="px-2 w-[300px] flex justify-center">
            <a
              className=""
              href="https://www.amazon.in/s?k=Planetsera"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className=""
                alt="Amazon"
                title="Available on amazon"
                src="images/backgrounds/ShopBuyAmazon-2.webp"
              />
            </a>
          </div>
          <div className="px-2 w-[300px] flex justify-center">
            <a
              className=""
              href="https://www.flipkart.com/search?q=Planetsera&otracker=search&otracker1=search&marketplace=FLIPKART"
              target="_blank"
              rel="noopener noreferrer">
              <img
                // className="w-2/4"
                alt="Flipkart"
                title="Available on flipkart"
                src="images/backgrounds/ShopBuyFlipkart-2.webp"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopBuy;
