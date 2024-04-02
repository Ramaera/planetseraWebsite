"use client";
import ShopData from "../ShopData/ShopData.jsx";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/state/slice/cartSlice";
import { Get_All_Products } from "@/apollo/queries/index.js";
import { useQuery } from "@apollo/client";

const BestSelling = () => {
  const allProducts = useQuery(Get_All_Products);
  const BestSellingData = allProducts?.data?.allProducts.filter((prod) => {
    if (prod?.category?.includes("BestSelling")) {
      return prod.isActive;
    }
  });
  // console.log("BestSellingData", BestSellingData);
  return (
    <>
      <div className="border-t mx-16 xl:mt-6 2xl:mt-10 2xl:mx-20"></div>
      <div className="mt-10">
        <div className=" sm:text-left  flex flex-col  justify-center items-center">
          <h3 className="text-red-400">PRODUCTS</h3>
          <h4 className="text-[#1E1E1E] text-2xl sm:text-4xl font-['Montserrat'] font-bold text-center">
            Our Best Seller Products
          </h4>
        </div>
        <div className="flex w-full" id="shop">
          <div className="flex  justify-evenly p-2 md:p-6 flex-wrap w-full">
            {BestSellingData?.map((item) => {
              const hasTrue = item?.ProductsVariant?.some(
                (list) => list?.isVariantActive === true
              );
              if (!item) {
                return;
              }
              return (
                <>
                  <div className=" m-2 w-[45%] md:w-[22%] justify-items-center flex items-center flex-col border-gray-200 border-[1px] rounded-xl p-1 sm:p-3">
                    <div
                      style={{
                        background: item?.metaData[0]?.bgColor,
                      }}
                      className="flex items-center  justify-center rounded-xl p-4 w-full">
                      {!hasTrue ? (
                        <div className=" absolute z-10  m-2 justify-items-center flex items-center">
                          <img
                            className="relative w-[100px] md:w-72"
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
                          !hasTrue && " opacity-50"
                        }  flex items-center justify-center `}>
                        {!hasTrue ? (
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
                      {!hasTrue ? (
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

                    {!hasTrue && item?.category ? (
                      <BuynowBtn
                        text={"Coming soon"}
                        link=""
                        opacity={0.5}
                        width={"143px"}
                        padding={"20px"}
                        height={"30px"}
                        size={"15px"}
                        sectionClass="responsiveBtn"
                      />
                    ) : (
                      <BuynowBtn
                        link={`/product/${item?.productUrl}`}
                        text={"Buy Now"}
                        width={"130px"}
                        height={"40px"}
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

export default BestSelling;
