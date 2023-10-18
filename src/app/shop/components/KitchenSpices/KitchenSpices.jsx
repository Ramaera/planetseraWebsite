"use client";
import ShopData from "../ShopData/ShopData.jsx";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";

const KitchenSpices = () => {
  const KitchenSpicesData = ShopData.map((prod) => {
    if (prod.category === "KitchenSpices") {
      return prod;
    }
  });

  return (
    <>
      <div className="mt-4">
        <div className="mx-4 sm:mx-16 relative flex items-center justify-center">
          <img
            src="/images/backgrounds/KitchenSpicesBg.webp"
            alt="Kitchen Spices Daily Needs"
            title="Kitchen Spices Daily Needs"
            loading="lazy"
          />
          <h4 className="absolute text-white font-medium sm:text-5xl">
            Kitchen Spices Daily Needs
          </h4>
        </div>
        <div className="flex w-full" id="shop">
          <div className="flex  justify-evenly p-2 md:p-6 flex-wrap w-full ">
            {KitchenSpicesData.map((item) => {
              if (!item) {
                return;
              }
              return (
                <>
                  <div className="m-2 w-[45%] md:w-[22%] justify-items-center flex items-center flex-col border-gray-200 border-[1px] rounded-xl p-1 sm:p-3">
                    <div
                      style={{
                        background: item.bgColor,
                      }}
                      className="relative flex items-center  justify-center rounded-xl p-4 w-full">
                      {!item?.flipkart && !item?.amazon ? (
                        <div className="top-0 absolute z-10  justify-items-center flex items-center">
                          <img
                            className="relative "
                            loading="lazy"
                            src="images/backgrounds/comingsoon.webp"
                            // width={"360px"}
                            alt="coming soon"
                          />
                        </div>
                      ) : (
                        ""
                      )}

                      <div
                        className={`${
                          !item?.flipkart && !item?.amazon && "opacity-50"
                        }  flex items-center justify-center `}>
                        {!item?.flipkart && !item?.amazon ? (
                          <img
                            className="relative w-48 2xl:w-64"
                            loading="lazy"
                            src={item?.masalaImg}
                            alt="Planetsera Spices"
                            title={item.masalaName}
                          />
                        ) : (
                          <Link href={`/products/${item.id}`}>
                            <img
                              className="relative w-48 2xl:w-64"
                              loading="lazy"
                              src={item.masalaImg}
                              // width={"360px"}
                              alt="Planetsera Spices"
                              title={item.masalaName}
                            />
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 mb-[-10px]">
                      {!item?.flipkart && !item?.amazon ? (
                        <h5 className="text-center font-[Montserrat] text-[13.5px] sm:text-xl 2xl:text-2xl">
                          {item?.masalaName}
                        </h5>
                      ) : (
                        <Link href={`/products/${item.id}`}>
                          <h5 className="text-center font-[Montserrat] text-[13.5px] sm:text-xl 2xl:text-2xl">
                            {item?.masalaName}
                          </h5>
                        </Link>
                      )}
                    </div>

                    {!item?.flipkart && !item?.amazon && item?.category ? (
                      <BuynowBtn
                        text={"Coming soon"}
                        link=""
                        opacity={0.5}
                        width={"143px"}
                        padding={"20px"}
                        height={"30px"}
                        size={"15px"}
                        sectionClass="responsiveComingBtn"
                      />
                    ) : (
                      <BuynowBtn
                        link={`/products/${item?.id}`}
                        text={"Buy Now"}
                        width={"130px"}
                        padding={"20px"}
                        height={"30px"}
                        sectionClass="relatedResponsiveBtn"
                      />
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default KitchenSpices;
