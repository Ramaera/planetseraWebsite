"use client";
import ShopData from "../ShopData/ShopData.jsx";
import BuynowBtn from "../../../../components/BuynowBtn";
import Link from "next/link";

const BestSelling = () => {
  const BestSellingData = ShopData.map((prod) => {
    if (prod.category === "BestSelling") {
      return prod;
    }
  });

  return (
    <>
      <div className="mt-10">
        <div className=" sm:text-left  flex flex-col	justify-center items-center 	">
          <h5 className="text-red-400">PRODUCTS</h5>
          <h2 className="text-[#1E1E1E] text-2xl sm:text-4xl font-['Montserrat'] font-bold text-center">
            Our Best Seller Products
          </h2>
        </div>
        <div className="flex w-full" id="shop">
          <div className="flex  justify-evenly p-2 md:p-10 flex-wrap ">
            {BestSellingData.map((item) => {
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
                            src="images/backgrounds/comingsoon.webp"
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
                        }  flex items-center justify-center `}>
                        {!item?.flipkart && !item?.amazon ? (
                          <img
                            className="relative"
                            loading="lazy"
                            src={item?.masalaImg}
                            alt="..."
                          />
                        ) : (
                          <Link href={`/products/${item.id}`}>
                            <img
                              className="relative"
                              loading="lazy"
                              src={item.masalaImg}
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
                        <Link href={`/products/${item.id}`}>
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
                        link={`/products/${item?.id}`}
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

export default BestSelling;
