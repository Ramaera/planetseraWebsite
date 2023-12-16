"use client";
import ShopData from "../ShopData/ShopData.jsx";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/state/slice/cartSlice";

const BestSelling = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const BestSellingData = ShopData.filter(
    (prod) => prod.category === "BestSelling"
  );

  // const BestSellingData = ShopData.map((prod) => {
  //   if (prod.category === "BestSelling") {
  //     return prod;
  //   }
  // });

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
            {BestSellingData.map((item) => (
              <>
                <div className=" m-2 w-[45%] md:w-[22%] justify-items-center flex items-center flex-col border-gray-200 border-[1px] rounded-xl p-1 sm:p-3">
                  <div
                    style={{
                      background: item.bgColor,
                    }}
                    className="flex items-center  justify-center rounded-xl p-4 w-full"
                  >
                    {!item?.flipkart && !item?.amazon ? (
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
                        !item?.flipkart && !item?.amazon && " opacity-50"
                      }  flex items-center justify-center `}
                    >
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
                      sectionClass="responsiveBtn"
                    />
                  ) : (
                    <BuynowBtn
                      // link={`/products/${item?.id}`}
                      link=""
                      text={"Add to Cart"}
                      width={"150px"}
                      padding={"20px"}
                      height={"30px"}
                      sectionClass="relatedResponsiveBtn"
                      onClick={() => handleAddToCart(item)}
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

export default BestSelling;
