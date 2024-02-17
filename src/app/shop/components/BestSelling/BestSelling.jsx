"use client";
import ShopData from "../ShopData/ShopData.jsx";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/state/slice/cartSlice";
import { Get_All_Products } from "@/apollo/queries/index.js";
import { useQuery } from "@apollo/client";

const BestSelling = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const allProducts = useQuery(Get_All_Products);

  const specificProduct = allProducts?.data?.allProducts;

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
          <div className="flex justify-evenly p-2 md:p-6 flex-wrap w-full">
            {specificProduct
              ?.filter((product) => product?.category?.includes("BestSelling"))
              .map((product) => (
                <div
                  key={product.id}
                  className="m-2 w-[45%] md:w-[22%] justify-items-center flex items-center flex-col border-gray-200 border-[1px] rounded-xl p-1 sm:p-3"
                >
                  <div
                    style={
                      {
                        // background: product.bgColor,
                      }
                    }
                    className="flex items-center justify-center rounded-xl p-4 w-full"
                  >
                    <>
                      {!product?.Flipkart && !product?.Amazon ? (
                        <div className="absolute z-10 m-2 justify-items-center flex items-center">
                          <img
                            className="relative w-[100px] md:w-72"
                            loading="lazy"
                            src={`https://planetseraapi.planetsera.com/get-images/${product?.productImageUrl}`}
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
                              alt="Planetsera Spices"
                              title={product.title}
                            />
                          </Link>
                        )}
                      </div>
                    </>
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
                      sectionClass="responsiveBtn"
                    />
                  ) : (
                    <BuynowBtn
                      link={`/product/${product?.id}`}
                      text={"Buy Now"}
                      width={"130px"}
                      height={"40px"}
                      sectionClass="relatedResponsiveBtn"
                      // onClick={() => handleAddToCart(product)}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSelling;
