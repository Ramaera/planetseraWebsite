"use client";
import "./ShopProduct.css";
import ShopProductData from "./ShopProductData";
import BuynowBtn from "../../../../components/BuynowBtn";

const ShopProduct = () => {
  return (
    <>
      <div className="flex w-full" id="shop">
        <div className="flex w-full justify-evenly p-2 md:p-10 flex-wrap">
          {ShopProductData.map((item) => {
            return (
              <>
                <div className="w-[150px] md:w-1/4 m-2 md:m-5  md:p-6 justify-items-center flex items-center	flex-col">
                  <div className="flex items-center	justify-center">
                    {!item.flipkart && !item.amazon ? (
                      <div className=" absolute z-10  m-2 justify-items-center flex items-center">
                        <img
                          className="relative w-[100px] md:w-72"
                          loading="lazy"
                          src="images/backgrounds/comingsoon.webp"
                          // width={"360px"}
                          alt="..."
                        />
                      </div>
                    ) : (
                      ""
                    )}

                    <div
                      className={`${
                        !item.flipkart && !item.amazon && " opacity-50"
                      } md:w-[360px] flex items-center justify-center `}>
                      <img
                        className="relative"
                        loading="lazy"
                        src={item.masalaImg}
                        // width={"360px"}
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="h-[45px] md:h-[50px]">
                    <h3 className="text-center font-['Montserrat'] text-[#1E1E1E] text-lg md:text-2xl">
                      {item.masalaName}
                    </h3>
                  </div>

                  {!item.flipkart && !item.amazon ? (
                    <BuynowBtn
                      text={"Coming soon"}
                      link=""
                      opacity={0.5}
                      size={"15px"}
                      sectionClass="responsiveBtn"
                    />
                  ) : (
                    <BuynowBtn
                      link={`/productDetailsInfo/${item.id}`}
                      text={"Buy Now"}
                      sectionClass="responsiveBtn"
                    />
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ShopProduct;
