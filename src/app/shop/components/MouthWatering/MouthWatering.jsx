"use client";
import ShopData from "../ShopData/ShopData.jsx";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Get_All_Products } from "@/apollo/queries/index.js";

const MouthWatering = () => {
  const allProducts = useQuery(Get_All_Products);

  return (
    <>
      <div className="mt-4">
        <div className="mx-4 sm:mx-16 relative flex items-center justify-center">
          <img
            src="/images/backgrounds/MouthWateringBg.webp"
            alt="Mouth Watering Spices"
            title="Mouth Watering Spices"
            loading="lazy"
          />
          <h4 className="absolute text-white font-medium sm:text-5xl">
            Mouth Watering Spices
          </h4>
        </div>
        <div className="flex w-full" id="shop">
          <div className="flex  justify-evenly p-2 md:p-6 flex-wrap w-full ">
            {allProducts?.data?.allProducts
              ?.filter((product) =>
                product?.category?.includes("MouthWatering")
              )
              .map((product) => (
                <>
                  <div className="m-2 w-[45%] md:w-[22%] justify-items-center flex items-center flex-col border-gray-200 border-[1px] rounded-xl p-1 sm:p-3">
                    <div
                      style={
                        {
                          // background: item.bgColor,
                        }
                      }
                      className="relative flex items-center  justify-center rounded-xl p-4 w-full"
                    >
                      {!product?.Flipkart && !product?.Amazon ? (
                        <div className="top-0 absolute z-10  justify-items-center flex items-center">
                          <img
                            className=""
                            loading="lazy"
                            src={`https://planetseraapi.planetsera.com/get-images/${product?.productImageUrl}`}
                            // width={"360px"}
                            alt="coming soon"
                          />
                        </div>
                      ) : (
                        ""
                      )}

                      <div
                        className={`${
                          !product?.Flipkart &&
                          !product?.Amazon &&
                          " opacity-50"
                        }  flex items-center justify-center `}
                      >
                        {!product?.Flipkart && !product?.Amazon ? (
                          <img
                            className="relative w-48 2xl:w-64"
                            loading="lazy"
                            src={`https://planetseraapi.planetsera.com/get-images/${product?.productImageUrl}`}
                            alt="Planetsera Spices"
                            title={product.title}
                          />
                        ) : (
                          <Link href={`/product/${product.id}`}>
                            <img
                              className="relative w-48 2xl:w-64"
                              loading="lazy"
                              src={`https://planetseraapi.planetsera.com/get-images/${product?.productImageUrl}`}
                              // width={"360px"}
                              alt="Planetsera Spices"
                              title={product.title}
                            />
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 mb-[-10px]">
                      {!product?.Flipkart && !product?.Amazon ? (
                        <h5 className="text-center font-[Montserrat] text-[13.5px] sm:text-xl 2xl:text-2xl">
                          {product?.title}
                        </h5>
                      ) : (
                        <Link href={`/product/${product.id}`}>
                          <h5 className="text-center font-[Montserrat] text-[13.5px] sm:text-xl 2xl:text-2xl">
                            {product?.title}
                          </h5>
                        </Link>
                      )}
                    </div>

                    {!product?.Flipkart &&
                    !product?.Amazon &&
                    product?.category ? (
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
                        link={`/product/${product?.id}`}
                        text={"Buy Now"}
                        width={"130px"}
                        padding={"20px"}
                        height={"30px"}
                        sectionClass="relatedResponsiveBtn"
                      />
                    )}
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default MouthWatering;
