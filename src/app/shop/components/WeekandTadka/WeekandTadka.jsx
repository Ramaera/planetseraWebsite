"use client";
import ShopData from "../ShopData/ShopData.jsx";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";
import { Get_All_Products } from "@/apollo/queries/index.js";
import { useQuery } from "@apollo/client";

const WeekandTadka = () => {
  const allProducts = useQuery(Get_All_Products);

  const WeekandTadkaData = allProducts?.data?.allProducts.filter((prod) => {
    if (prod?.category?.includes("WeekandTadka")) {
      return prod.isActive;
    }
  });

  return (
    <>
      <div className="mt-4">
        <div className="mx-4 sm:mx-16 relative flex items-center justify-center">
          <img
            src="/images/backgrounds/WeekandTadkaBg.webp"
            alt="Weekand Ka Tadka"
            title="Weekand Ka Tadka"
            loading="lazy"
          />
          <h4 className="absolute text-white font-medium sm:text-5xl">
            Weekend Ka Tadka
          </h4>
        </div>
        <div className="flex w-full" id="shop">
          <div className="flex  justify-evenly p-2 md:p-6 flex-wrap w-full ">
            {WeekandTadkaData?.map((item) => {
              if (!item) {
                return;
              }
              return (
                <>
                  <div className="m-2 w-[45%] md:w-[22%] justify-items-center flex items-center flex-col border-gray-200 border-[1px] rounded-xl p-1 sm:p-3">
                    <div
                      style={{
                        background: item?.metaData[0]?.bgColor,
                      }}
                      className="relative flex items-center  justify-center rounded-xl p-4 w-full"
                    >
                      {!item?.Flipkart && !item?.Amazon ? (
                        <div className="top-0 absolute z-10 justify-items-center flex items-center">
                          <img
                            className="relative"
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
                          !item?.Flipkart && !item?.Amazon && " opacity-50"
                        }  flex items-center justify-center `}
                      >
                        {!item?.Flipkart && !item?.Amazon ? (
                          <img
                            className="relative w-48 2xl:w-64"
                            loading="lazy"
                            src={`https://planetseraapi.planetsera.com/get-images/${item?.productImageUrl}`}
                            alt="Planetsera Spices"
                            title={item.title}
                          />
                        ) : (
                          <Link href={`/product/${item.productUrl}`}>
                            <img
                              className="relative w-48 2xl:w-64"
                              loading="lazy"
                              src={`https://planetseraapi.planetsera.com/get-images/${item?.productImageUrl}`}
                              // width={"360px"}
                              alt="Planetsera Spices"
                              title={item.title}
                            />
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 mb-[-10px]">
                      {!item?.Flipkart && !item?.Amazon ? (
                        <h5 className="text-center font-[Montserrat] text-[13.5px] sm:text-xl 2xl:text-2xl">
                          {item?.title}
                        </h5>
                      ) : (
                        <Link href={`/product/${item.productUrl}`}>
                          <h5 className="text-center font-[Montserrat] text-[13.5px] sm:text-xl 2xl:text-2xl">
                            {item?.title}
                          </h5>
                        </Link>
                      )}
                    </div>

                    {!item?.Flipkart && !item?.Amazon && item?.category ? (
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
                        link={`/product/${item?.productUrl}`}
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
export default WeekandTadka;
