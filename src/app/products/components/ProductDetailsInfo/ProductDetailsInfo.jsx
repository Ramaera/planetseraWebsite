"use client";
import Icon from "./Icon";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BuyIcons from "../../../../components/BuyIcons";
import RelatedPtoductData from "../RelatedProducts/RelatedProductData";
// import MetaDataproducts from "../MetaDataproducts/MetaDataproducts";
import { notFound } from "next/navigation";

const ProductDetailsInfo = () => {
  const { id } = useParams();
  const specificProduct = RelatedPtoductData.find((prod) => prod.id === id);
  const [selectedButton, setSelectedButton] = useState("50gram");
  const [defaultSelectedButton, setDefaultSelectedButton] = useState("50gram");

  if (!specificProduct) return notFound();

  useEffect(() => {
    if (!specificProduct?.ProductMasala500g) {
      setSelectedButton("50gram");
      setDefaultSelectedButton("50gram");
    } else if (!specificProduct?.ProductMasala100g) {
      setSelectedButton("50gram");
      setDefaultSelectedButton("50gram");
    }
  }, [specificProduct]);

  const handleSelectedButton = (button) => {
    if (
      (button === "100gram" && !specificProduct?.ProductMasala100g) ||
      (button === "500gram" && !specificProduct?.ProductMasala500g)
    ) {
      setSelectedButton("50gram");
    } else {
      setSelectedButton(button);
    }
  };

  // console.log("specificProduct", specificProduct);
  return (
    <>
      {/* <div className="absolute h-2/5 min-h-[300px] top-0 w-full md:hidden"></div> */}
      <div className="md:m-8 m-4">
        <div className="w-full md:flex">
          <div className="md:w-2/4">
            <div className="border-solid border-[2px] rounded-2xl flex items-center justify-center py-1 md:mx-0 mx-5">
              <img
                className="scale-90 border-solid border-2 rounded-3xl md:border-0"
                style={
                  selectedButton === "500gram"
                    ? {
                        background: specificProduct.bgColor,
                        maxHeight: "80%",
                      }
                    : {
                        background: "",
                      }
                }
                src={
                  selectedButton === "50gram"
                    ? specificProduct?.ProductMasala
                    : selectedButton === "100gram"
                    ? specificProduct?.ProductMasala100g
                    : specificProduct?.ProductMasala500g
                }
                alt={specificProduct.ProductName}
                title="PlanetsEra 100% Pure Natural Product"
              />

              <div className="absolute md:top-12 md:right-[51.5%] top-16 right-[8%] md:scale-100 scale-75">
                <Icon
                  color={
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored2
                  }
                />
              </div>
            </div>
            <div className="relative flex justify-evenly 	mt-4">
              <div className="scale-[0.75] ">
                <img
                  src={
                    selectedButton === "50gram"
                      ? specificProduct?.ProductBacks
                      : selectedButton === "100gram"
                      ? specificProduct?.ProductBacks100g
                      : selectedButton === "500gram"
                      ? specificProduct?.ProductBacks500g
                      : specificProduct?.ProductBacks
                  }
                  alt="product back side"
                  // title="Product Back Side"
                />
                {/* <img src={ProductBacks} /> */}
              </div>

              <div className="scale-[0.75] ">
                {/* <div
                style={
                  selectedButton === "500gram"
                    ? {
                        transform: "scale(0.75)",
                      }
                    : {
                        transform: "scale(0.75)",
                      }
                }
              > */}
                <img
                  src={
                    selectedButton === "50gram"
                      ? specificProduct?.ProductBackInfo
                      : selectedButton === "100gram"
                      ? specificProduct?.ProductBackInfo100g
                      : selectedButton === "500gram"
                      ? specificProduct?.ProductBackInfo500g
                      : specificProduct?.ProductBackInfo
                  }
                  alt="product info"
                  // title="Product Detailed"
                />
                {/* <img src={ProductBackInfo} /> */}
              </div>
            </div>
            {/* ///////////////// */}
            <div className="md:w-[99%] md:mt-[-1%]">
              <h2
                style={{
                  color:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored2,
                }}
                className={`md:text-center text-2xl  tracking-widest font-light mb-4 font-Montserrat text-center`}>
                Specifications
              </h2>
              <div className=" flex justify-evenly border-[1px] rounded-[10px]  text-[#787878] md:text-[1.1rem] text-[0.5rem]	font-Montserrat font-normal	md:font-light">
                <div className="md:py-2 p-0 md:py-auto py-4 md:w-auto  w-[5rem] flex items-center justify-center">
                  <span>Weight: &nbsp; </span>
                  <span>
                    {" "}
                    {selectedButton === "50gram"
                      ? "50 g"
                      : selectedButton === "100gram"
                      ? "100 g"
                      : selectedButton === "500gram"
                      ? "500 g"
                      : "50 g"}
                  </span>
                </div>
                <div className="border-r-2"></div>
                <div className="md:py-2 p-0 flex items-center  justify-center">
                  Packaging type: &nbsp; Zipper Pouch
                </div>
                <div className="border-r-2"></div>
                <div className="md:py-2 p-0 flex items-center justify-center">
                  Country of origin: &nbsp; India
                </div>
              </div>
            </div>
            {/* ////////////////// */}
          </div>
          <div className="md:w-2/4">
            <div className="md:pl-10">
              <h1
                style={{
                  color:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored2,
                }}
                className={`md:text-[3.3rem] text-[2rem] tracking-widest font-[500] font-Montserrat md:mt-auto mt-8`}>
                {specificProduct?.ProductName}
              </h1>
              <div
                style={{
                  backgroundColor:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored2,
                }}
                className={`absolute  w-36 h-[2px] ml-1 mt-[-2px]`}></div>
              <ul className="pl-1 pt-4 text-[#787878] text-[1.7rem] font-[400] font-Montserrat  z-30 md:block  hidden">
                <li className="my-8 ">
                  <span className="pr-4">&bull;</span>100% Pure Natural Product
                </li>
                <li className="my-8">
                  <span className="pr-4">&bull;</span>No Added Preservatives &
                  Additives
                </li>
                <li className="my-8">
                  <span className="pr-4">&bull;</span>No Artificial Color Added
                </li>
                <li className="my-8">
                  <span className="pr-4">&bull;</span>Traditional Authentic
                  Recipe
                </li>
                <li className="my-8">
                  <span className="pr-4">&bull;</span>Made with Love in INDIA
                </li>
              </ul>
              <br />
              <h3 className="text-[#ABABAB] md:text-[1.7rem] text-[1.2rem] font-[300] font-Montserrat">
                Select weight:
              </h3>
              <div className="flex my-5">
                <div>
                  <button
                    style={
                      selectedButton === "50gram"
                        ? {
                            color: specificProduct?.colored,
                            borderColor: specificProduct?.colored,
                          }
                        : {
                            color: specificProduct?.inactiveBtn,
                            borderColor: specificProduct?.inactiveBtn,
                          }
                    }
                    onClick={() => handleSelectedButton("50gram")}
                    className="border-[1.2px] rounded-[10px] md:h-[44px] h-[40px] md:w-[124px] w-[90px] md:mr-6 mr-3  md:text-[1.5rem] text-[1.1rem]">
                    50 g
                  </button>
                </div>

                {specificProduct?.ProductMasala100g && (
                  <button
                    style={
                      selectedButton === "100gram"
                        ? {
                            color: specificProduct?.colored2,
                            borderColor: specificProduct?.colored2,
                          }
                        : {
                            color: specificProduct?.inactiveBtn2,
                            borderColor: specificProduct?.inactiveBtn2,
                          }
                    }
                    onClick={() => handleSelectedButton("100gram")}
                    className="border-[1.2px] rounded-[10px] md:h-[44px] h-[40px] md:w-[124px] w-[90px] md:mr-6 mr-3  md:text-[1.5rem] text-[1.1rem]">
                    100 g
                  </button>
                )}

                {specificProduct?.ProductMasala500g && (
                  <button
                    style={
                      selectedButton === "500gram"
                        ? {
                            color: specificProduct?.colored2,
                            borderColor: specificProduct?.colored2,
                          }
                        : {
                            color: specificProduct?.inactiveBtn2,
                            borderColor: specificProduct?.inactiveBtn2,
                          }
                    }
                    onClick={() => handleSelectedButton("500gram")}
                    className="border-[1.2px] rounded-[10px] md:h-[44px] h-[40px] md:w-[124px] w-[90px]  md:text-[1.5rem] text-[1.1rem] z-100 ">
                    500 g
                  </button>
                )}
              </div>
              {selectedButton === "50gram" ? (
                <BuyIcons
                  flipkart={specificProduct?.flipkart50}
                  amazon={specificProduct?.amazon50}
                />
              ) : selectedButton === "100gram" ? (
                <BuyIcons
                  flipkart={specificProduct?.flipkart100}
                  amazon={specificProduct?.amazon100}
                />
              ) : (
                <BuyIcons
                  flipkart={specificProduct?.flipkart500}
                  amazon={specificProduct?.amazon500}
                />
              )}

              <img
                className="w-[60%]"
                src="/images/backgrounds/MadeIndia.webp"
                alt="Made in India"
                title="Made in India"
              />
              <div className="right-0 absolute md:top-[22rem] top-auto md:mt-auto mt-[-140px] transform md:w-[18.5rem] w-[10rem] z-[-9]">
                <img
                  src={specificProduct?.ProductBg}
                  alt="product bg"
                  title="product bg"
                  className="max-w-[100px] sm:max-w-[180px] 2xl:max-w-full absolute right-0"
                />
              </div>
            </div>
            <div className="mt-8  z-10 relative">
              {specificProduct?.ProductDescription ? (
                <div>
                  <h3
                    style={{
                      color:
                        selectedButton === "50gram"
                          ? specificProduct?.colored
                          : specificProduct?.colored2,
                    }}
                    className={` text-[2.1rem] font-light font-Montserrat`}>
                    Description
                  </h3>

                  <div
                    style={{
                      backgroundColor:
                        selectedButton === "50gram"
                          ? specificProduct?.colored
                          : specificProduct?.colored2,
                    }}
                    className={`absolute  w-20 h-[2px] ml-1 mt-[-2px]`}></div>
                  <p className="leading-[2.6rem] text-[#787878] text-[1.28rem] font-[400] my-4 font-Montserrat">
                    {specificProduct?.ProductDescription}
                  </p>
                </div>
              ) : (
                ""
              )}

              <h3
                style={{
                  color:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored2,
                }}
                className={` text-4xl font-light font-Montserrat`}>
                Ingredients:-
              </h3>
              <div
                style={{
                  backgroundColor:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored2,
                }}
                className={`absolute  w-[8.5vw] h-[2px] ml-1 mt-1`}></div>
              <p className="leading-[2.6rem] text-[#787878] text-[1.28rem] font-[400] my-4 font-Montserrat">
                {specificProduct?.ProductIngredients}
              </p>
            </div>
          </div>
        </div>
        {/* <div className="md:w-[55%] md:mt-[-3%]">
          <h2
            style={{
              color:
                selectedButton === "50gram"
                  ? specificProduct?.colored
                  : specificProduct?.colored2,
            }}
            className={`md:text-center  text-2xl tracking-widest font-light mb-4 font-Montserrat`}
          >
            Specifications
          </h2>
          <div className=" flex md:justify-evenly border-[1px] rounded-[10px]  text-[#787878] md:text-[1.2rem] text-[0.8rem]	font-Montserrat">
            <div className="md:p-4 p-2 md:w-auto  w-[5rem] flex items-center justify-center">
              <span>{selectedButton === "50gram" ? "50 g" : "100 g"}</span>
            </div>
            <div className="border-r-2"></div>
            <div className="md:p-4 p-2">
              Packaging type: <span>Zipper Pouch</span>
            </div>
            <div className="border-r-2"></div>
            <div className="md:p-4 p-2">
              Country of origin: <span>India</span>
            </div>
          </div>
        </div> */}
        {specificProduct?.ProductHealth ? (
          <div className="md:my-10 my-5 font-Montserrat md:ml-2 md:flex">
            <div
              style={{
                color:
                  selectedButton === "50gram"
                    ? specificProduct?.colored
                    : specificProduct?.colored2,
              }}
              className={` text-2xl font-light font-Montserrat leading-[2.5rem] `}>
              Health benefits of : &nbsp;
            </div>
            <div className=" text-[#787878] text-[1.3rem] leading-[2.5rem] md:w-[78%]">
              {specificProduct.ProductHealth}
            </div>
          </div>
        ) : (
          ""
        )}

        <div
          style={{
            color:
              selectedButton === "50gram"
                ? specificProduct?.colored
                : specificProduct?.colored2,
          }}
          className={` text-3xl font-light leading-[2.5rem] font-Montserrat md:mt-4`}>
          Related Products
        </div>
        <div
          style={{
            backgroundColor:
              selectedButton === "50gram"
                ? specificProduct?.colored
                : specificProduct?.colored2,
          }}
          className={`absolute  w-[8.5vw] h-[2px] ml-1 mt-1`}></div>
      </div>
    </>
  );
};

export default ProductDetailsInfo;
