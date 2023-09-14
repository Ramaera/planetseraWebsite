"use client";
import "./ShopBuy.css";
import { useSelector } from "react-redux";

const ShopBuy = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div className="basis-4/12 flex flex-col justify-center m-auto my-10">
        <h2
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
        </h2>
      </div>
      <div className="mt-10 md:px-6 mb-10">
        <div className="flex m-auto justify-center	">
          <div className="px-2 flex justify-center">
            <img
              className="w-3/4"
              src="images/backgrounds/ShopBuyHaat-2.webp"
              alt="Hat Ramaera"
              title="Hat Ramaera"
            />
          </div>
          <div className="px-2">
            <a
              className="flex justify-center"
              href="https://www.amazon.in/s?k=Planetsera"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="w-3/4"
                alt="Amazon"
                title="Available on amazon"
                src="images/backgrounds/ShopBuyAmazon-2.webp"
              />
            </a>
          </div>
          <div className="px-2">
            <a
              className="flex justify-center "
              href="https://www.flipkart.com/search?q=Planetsera&otracker=search&otracker1=search&marketplace=FLIPKART"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="w-3/4"
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
