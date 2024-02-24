"use client";
import ShopData from "../ShopData/ShopData.jsx";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";

const NonvegTadka = () => {
  const NonvegTadkaData = ShopData.map((prod) => {
    if (prod.category === "NonvegTadka") {
      return prod;
    }
  });

  return (
    <>
      <div className="mt-4">
        <div className="mx-4 sm:mx-16 relative flex items-center justify-center">
          <img
            src="/images/backgrounds/NonvegBg.webp"
            alt="Non-veg Ka Tadka"
            title="Non-veg Ka Tadka"
          />
          <h3 className="absolute text-white font-medium sm:text-5xl">
            Non-veg Ka Tadka
          </h3>
        </div>
        <div className="flex w-full" id="shop">
          <div className="flex  justify-evenly p-2 md:p-10 flex-wrap ">
            {NonvegTadkaData.map((item) => {
              if (!item) {
                return;
              }
              return (
                <>
                  <div className="m-2 w-[45%] md:w-[22%] justify-items-center flex items-center flex-col border-gray-200 border-[1px] rounded-xl p-1 sm:p-3">
                    <div className="flex items-center	justify-center">
                      {!item?.flipkart && !item?.amazon ? (
                        <div className=" absolute z-10  m-2 justify-items-center flex items-center">
                          <img
                            className="relative w-[100px] md:w-72"
                            loading="lazy"
                            src={`https://planetseraapi.planetsera.com/get-images/${product?.productImageUrl}`}
                            // width={"360px"}
                            alt="cooming soon"
                          />
                        </div>
                      ) : (
                        ""
                      )}

                      <div
                        className={`${
                          !item?.flipkart && !item?.amazon && " opacity-50"
                        }  flex items-center justify-center `}
                      >
                        {!item?.flipkart && !item?.amazon ? (
                          <img
                            className="relative"
                            loading="lazy"
                            src={`https://planetseraapi.planetsera.com/get-images/${product?.productImageUrl}`}
                            alt="..."
                          />
                        ) : (
                          <Link href={`/product/${item.id}`}>
                            <img
                              className="relative"
                              loading="lazy"
                              src={`https://planetseraapi.planetsera.com/get-images/${product?.productImageUrl}`}
                              // width={"360px"}
                              alt={item.masalaName}
                              title={`Buy Planetsera ${item.masalaName}`}
                            />
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 mb-[-10px]">
                      {!item?.flipkart && !item?.amazon ? (
                        <h3 className="text-center font-['Montserrat'] text-[#1E1E1E] text-[13.5px] sm:text-lg">
                          {item?.masalaName}
                        </h3>
                      ) : (
                        <Link href={`/product/${item.id}`}>
                          <h3 className="text-center font-['Montserrat'] text-[#1E1E1E] text-[13.5px] sm:text-lg">
                            {item?.masalaName}
                          </h3>
                        </Link>
                      )}
                    </div>

                    {!item?.flipkart && !item?.amazon && item?.category ? (
                      <BuynowBtn
                        text={"Coming soon"}
                        link=""
                        opacity={0.5}
                        size={"15px"}
                        sectionClass="responsiveBtn"
                      />
                    ) : (
                      <BuynowBtn
                        link={`/product/${item?.id}`}
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
      </div>
    </>
  );
};
export default NonvegTadka;
