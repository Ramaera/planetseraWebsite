"use client";
import "./BestSelling.css";
import BestSellingData from "./BestSellingData";
import { useSelector } from "react-redux";
import BuynowBtn from "../../../../components/BuynowBtn";

const BestSelling = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  return (
    <>
      <div className="flex flex-col	md:flex-row mt-10 md:mt-0 ">
        <div className="md:w-2/12 sm:text-left md:pl-4 flex flex-col	justify-center items-center md:items-start	">
          <h2 className="text-[#1E1E1E] text-2xl md:pl-10 font-['Montserrat'] font-normal	font-black">
            Best Selling Spices
          </h2>

          <p className="text-grey text-center	 md:text-left md:pl-10 font-['Poppins'] text-[#8B8B8B] text-lg">
            Easiest way to healthy life by buying your favorite Spices
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center md:pl-10 order-2 md:order-1">
            <a
              href="#shop"
              className="more-button-2"
              style={{
                boxShadow: `2px 4px 7px -2px ${colorMe}`,
                background: `linear-gradient(72.44deg, ${colorMe} 0%, ${
                  colorMe + "95"
                } 100%)`,
                cursor: "pointer",
                zIndex: "19",
                fontWeight: "400",
              }}>
              See all
            </a>
          </div>
          <div className="md:ml-[-100px] md:mt-10 order-1 md:order-2">
            <img
              className="mx-auto"
              loading="lazy"
              src="images/backgrounds/vegMixImg.webp"
              width={"360px"}
              alt="masala"
            />
          </div>
        </div>

        <div className="flex  justify-evenly md:px-10 md:w-10/12 snap-center 	flex-wrap md:flex-nowrap">
          {BestSellingData.map((item) => {
            return (
              <div className="rounded-3xl items-center	m-auto w-46 mx-5 px-6 pt-6 pb-3 mt-10 md:mt-0 shadow-lg shadow-neutral-400">
                <div style={{ background: item.colored, borderRadius: "23px" }}>
                  <img
                    className="mx-auto"
                    loading="lazy"
                    src={item.masalaImg}
                    width={"360px"}
                    alt="masala"
                  />
                </div>
                <h3 className="text-center font-['Montserrat'] text-[#1E1E1E] text-2xl mt-4">
                  {item.masalaName}
                </h3>
                <h2 className="text-center font-['Montserrat'] text-[#8B8B8B] text-sm">
                  {item.masalaDetail}
                </h2>
                {/* <BuyIcons flipkart={item.flipkart} amazon={item.amazon} /> */}
                <BuynowBtn link={`/products/${item.id}`} text={"Buy Now"} />
              </div>
            );
          })}
          <a
            href="#shop"
            className="more-button-3"
            style={{
              boxShadow: `2px 4px 7px -2px ${colorMe}`,
              background: `linear-gradient(72.44deg, ${colorMe} 0%, ${
                colorMe + "95"
              } 100%)`,
              cursor: "pointer",
              zIndex: "19",
              fontWeight: "400",
            }}>
            See all
          </a>
        </div>
      </div>
    </>
  );
};
export default BestSelling;
