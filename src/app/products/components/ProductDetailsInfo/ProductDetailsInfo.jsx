"use client";
import Icon from "./Icon";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BuyIcons from "@/components/BuyIcons";
import RelatedPtoductData from "../RelatedProducts/RelatedProductData";
import ImageMagnifier from "./ImageMagnifier";
import { notFound } from "next/navigation";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
// import ShareLinkProduct from "./ShareLinkProduct";

const ProductDetailsInfo = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.toString());
  };

  const { id } = useParams();
  const specificProduct = RelatedPtoductData.find((prod) => prod.id === id);
  const [selectedButton, setSelectedButton] = useState("50gram");
  const [defaultSelectedButton, setDefaultSelectedButton] = useState("50gram");
  const [activeImg, setActiveImage] = useState(specificProduct?.ProductMasala);
  const [selectedMainImage, setSelectedMainImage] = useState(
    specificProduct?.ProductMasala
  );
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
    setSelectedButton(button);
    switch (button) {
      case "50gram":
        setSelectedMainImage(specificProduct?.ProductMasala);
        break;
      case "100gram":
        setSelectedMainImage(specificProduct?.ProductMasala100g);
        break;
      case "500gram":
        setSelectedMainImage(specificProduct?.ProductMasala500g);
        break;
      default:
        setSelectedMainImage(specificProduct?.ProductMasala);
        break;
    }
  };

  const handleSmallImageClick = (image) => {
    setSelectedMainImage(image);
    setActiveImage(image);
  };

  return (
    <>
      <div className="sm:m-8 m-4">
        <div className="w-full sm:flex">
          <div className="sm:w-2/5">
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex flex-row sm:flex-col justify-evenly  sm:w-1/3 p-2 2xl:px-10 order-2 sm:order-1">
                <div
                  className={` ${
                    selectedMainImage ===
                    (selectedButton === "50gram"
                      ? specificProduct?.ProductMasala
                      : selectedButton === "100gram"
                      ? specificProduct?.ProductMasala100g
                      : selectedButton === "500gram"
                      ? specificProduct?.ProductMasala500g
                      : specificProduct?.ProductMasala)
                      ? "border-blue-500	 border-[1.5px] rounded-md p-1 cursor-pointer"
                      : "border-slate-200	 border-[1.5px] rounded-md p-1 cursor-pointer"
                  }`}
                  onClick={() =>
                    handleSmallImageClick(
                      selectedButton === "50gram"
                        ? specificProduct?.ProductMasala
                        : selectedButton === "100gram"
                        ? specificProduct?.ProductMasala100g
                        : selectedButton === "500gram"
                        ? specificProduct?.ProductMasala500g
                        : specificProduct?.ProductMasala
                    )
                  }>
                  <img
                    src={
                      selectedButton === "50gram"
                        ? specificProduct?.ProductMasala
                        : selectedButton === "100gram"
                        ? specificProduct?.ProductMasala100g
                        : selectedButton === "500gram"
                        ? specificProduct?.ProductMasala500g
                        : specificProduct?.ProductMasala
                    }
                    className="w-10 sm:w-full"
                    alt="Spices Front"
                  />
                </div>

                <div
                  className={` ${
                    selectedMainImage ===
                    (selectedButton === "50gram"
                      ? specificProduct?.ProductBacks
                      : selectedButton === "100gram"
                      ? specificProduct?.ProductBacks100g
                      : selectedButton === "500gram"
                      ? specificProduct?.ProductBacks500g
                      : specificProduct?.ProductBacks)
                      ? "border-blue-500	 border-[1.5px] rounded-md p-1 cursor-pointer"
                      : "border-slate-200	 border-[1.5px] rounded-md p-1 cursor-pointer"
                  }`}
                  onClick={() =>
                    handleSmallImageClick(
                      selectedButton === "50gram"
                        ? specificProduct?.ProductBacks
                        : selectedButton === "100gram"
                        ? specificProduct?.ProductBacks100g
                        : selectedButton === "500gram"
                        ? specificProduct?.ProductBacks500g
                        : specificProduct?.ProductBacks
                    )
                  }>
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
                    alt="Spices Back"
                    className="w-10 sm:w-full"
                  />
                </div>

                <div
                  className={` ${
                    selectedMainImage ===
                    (selectedButton === "50gram"
                      ? specificProduct?.ProductBackInfo
                      : selectedButton === "100gram"
                      ? specificProduct?.ProductBackInfo100g
                      : selectedButton === "500gram"
                      ? specificProduct?.ProductBackInfo500g
                      : specificProduct?.ProductBackInfo)
                      ? "border-blue-500	 border-[1.5px] rounded-md p-1 cursor-pointer"
                      : "border-slate-200	 border-[1.5px] rounded-md p-1 cursor-pointer"
                  }`}
                  onClick={() =>
                    handleSmallImageClick(
                      selectedButton === "50gram"
                        ? specificProduct?.ProductBackInfo
                        : selectedButton === "100gram"
                        ? specificProduct?.ProductBackInfo100g
                        : selectedButton === "500gram"
                        ? specificProduct?.ProductBackInfo500g
                        : specificProduct?.ProductBackInfo
                    )
                  }>
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
                    alt="Spices Info"
                    className="w-10 sm:w-full"
                  />
                </div>

                {/* <div
                  className={` ${
                    selectedMainImage === specificProduct?.BrandsOffer
                      ? "border-blue-500	border-2 rounded-md p-1"
                      : "border-slate-200	 border-[1.5px] rounded-md p-1"
                  }`}
                  onClick={() =>
                    handleSmallImageClick(specificProduct?.BrandsOffer)
                  }>
                  <img src={specificProduct?.BrandsOffer} alt="product info" />
                </div> */}
              </div>

              <div className="relative border-solid border-2 rounded-xl flex items-center justify-center p-4 sm:p-8 md:mx-0 mx-2 order-1 sm:order-2">
                {/* <img
                  className="border-solid border-2 rounded-xl md:border-0 p-6"
                  style={{
                    background: specificProduct.bgColor,
                  }}
                  src={selectedMainImage}
                  alt={specificProduct.ProductName}
                  title="PlanetsEra 100% Pure Natural Product"
                /> */}

                <div
                  style={{
                    background: specificProduct.bgColor,
                  }}
                  className="border-solid border-2 rounded-xl md:border-0 p-6">
                  <ImageMagnifier
                    src={selectedMainImage}
                    alt="PlanetsEra Spices"
                    title={specificProduct.ProductName}
                  />
                </div>
                <div
                  onClick={handleClick}
                  className="absolute md:scale-100 scale-75  top-0 right-0 2xl:top-8 md:top-4 2xl:mt-[-1rem] md:right-4 xl:right-6  ">
                  {/* <ShareLinkProduct
                    IconSahre={
                      <Icon
                        color={
                          selectedButton === "50gram"
                            ? specificProduct?.colored
                            : specificProduct?.colored
                        }
                      />
                    }
                  /> */}
                  <Icon
                    color={
                      selectedButton === "50gram"
                        ? specificProduct?.colored
                        : specificProduct?.colored
                    }
                  />
                  <Snackbar
                    open={open}
                    onClose={() => setOpen(false)}
                    autoHideDuration={2000}
                    sx={{ width: "150px" }}>
                    <MuiAlert
                      severity="success"
                      className="mb-[-10px] md:mb-[-20px]"
                      sx={{
                        width: "100%",
                        marginLeft: "-100px",
                      }}>
                      Link Copied!
                    </MuiAlert>
                  </Snackbar>
                </div>
              </div>
            </div>
            {/* ///////////////// */}
            <div className=" sm:mt-2 hidden sm:block">
              <h3
                style={{
                  color:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored,
                }}
                className={`md:text-center text-2xl  tracking-widest font-light my-2 font-Montserrat text-center`}>
                Specifications
              </h3>
              <div className=" flex justify-evenly border-2 rounded-md font-Montserrat font-normal	md:font-light">
                <div className="my-1 p-0 flex flex-col items-center justify-center">
                  <p className="">Weight </p>
                  <p className="font-normal">
                    {selectedButton === "50gram"
                      ? "50g"
                      : selectedButton === "100gram"
                      ? "100g"
                      : selectedButton === "500gram"
                      ? "500g"
                      : "50g"}
                  </p>
                </div>
                <div className="border-r-2"></div>
                <div className="my-1 p-0 flex flex-col items-center  justify-center">
                  <p className="lg:mr-2">Packaging type </p>
                  <p className="font-normal">Zipper Pouch</p>
                </div>
                <div className="border-r-2"></div>
                <div className="my-1 p-0 flex flex-col items-center justify-center">
                  <p className="lg:mr-2"> Country of origin </p>
                  <p className="font-normal">India</p>
                </div>
              </div>
            </div>
            {/* ////////////////// */}
          </div>
          <div className="md:w-3/5 md:pl-10">
            <div className="flex flex-col">
              <div className="order-4 sm:order-3">
                <h1
                  style={{
                    color:
                      selectedButton === "50gram"
                        ? specificProduct?.colored
                        : specificProduct?.colored,
                  }}
                  className={`md:text-[2.5rem] xl:text-[3rem] text-[1.8rem] sm:tracking-widest font-[500] font-Montserrat mt-8 sm:mt-0`}>
                  {specificProduct?.ProductName}
                </h1>
                <div
                  style={{
                    backgroundColor:
                      selectedButton === "50gram"
                        ? specificProduct?.colored
                        : specificProduct?.colored,
                  }}
                  className={`absolute  w-36 h-[2px] ml-1 mt-[-2px] sm:mt-[-8px]`}></div>
                <p className="leading-[2rem] text-slate-600 text-lg font-Montserrat mt-1">
                  {specificProduct?.ProductDescription}
                </p>
                {specificProduct?.ProductDescription2 && (
                  <p className="leading-[2rem] text-slate-600 text-lg font-Montserrat mt-3">
                    {specificProduct?.ProductDescription2}
                  </p>
                )}
              </div>

              <br />
              <div className="order-3 sm:order-4">
                <h2 className="text-[#202020] md:text-[1.7rem] text-[1.2rem]  font-Montserrat">
                  Select weight:
                </h2>
                <div className="flex my-3 sm:my-5">
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
                              color: specificProduct?.colored,
                              borderColor: specificProduct?.colored,
                            }
                          : {
                              color: specificProduct?.inactiveBtn,
                              borderColor: specificProduct?.inactiveBtn,
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
                              color: specificProduct?.colored,
                              borderColor: specificProduct?.colored,
                            }
                          : {
                              color: specificProduct?.inactiveBtn,
                              borderColor: specificProduct?.inactiveBtn,
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
                  className="sm:w-[60%]"
                  src="/images/backgrounds/MadeIndia.webp"
                  alt="Made in India"
                  title="Made in India"
                />
                <div
                  className={` right-0 absolute   ${
                    specificProduct?.id === "garam-masala" || "sabji-masala"
                      ? " md:top-[30rem] 2xl:top-[26rem] "
                      : " md:top-[32rem] 2xl:top-[22rem]"
                  } top-auto md:mt-auto mt-[-140px] transform md:w-[18.5rem] w-[10rem] z-[-9] `}>
                  <img
                    src={specificProduct?.ProductBg}
                    alt="Product Back Info"
                    // title="product bg"
                    className={`absolute  right-0 ${
                      specificProduct?.id === "garam-masala" || "sabji-masala"
                        ? "max-w-[70px] sm:max-w-[180px] 2xl:max-w-full  max-h-96"
                        : "max-w-[100px] sm:max-w-[180px] 2xl:max-w-full  max-h-96"
                    }  `}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {specificProduct?.ProductDescription ? (
          <div className="mt-4">
            <h3
              style={{
                color:
                  selectedButton === "50gram"
                    ? specificProduct?.colored
                    : specificProduct?.colored,
              }}
              className={`text-[1.65rem] 2xl:text-3xl font-Montserrat`}>
              Usage
            </h3>

            <div
              m
              style={{
                backgroundColor:
                  selectedButton === "50gram"
                    ? specificProduct?.colored
                    : specificProduct?.colored,
              }}
              className={`absolute  w-16 h-[2px] ml-1 mt-[-2px]`}></div>
            <p className="leading-[1.8rem] text-slate-600 text-[16px] 2xl:text-lg  my-1 font-Montserrat">
              {specificProduct?.ProductUsage}
            </p>
          </div>
        ) : (
          ""
        )}

        <div className="mt-2 sm:mt-4  z-10 relative">
          <h3
            style={{
              color:
                selectedButton === "50gram"
                  ? specificProduct?.colored
                  : specificProduct?.colored,
            }}
            className={`text-[1.65rem] 2xl:text-3xl  font-Montserrat`}>
            Ingredients
          </h3>
          <div
            style={{
              backgroundColor:
                selectedButton === "50gram"
                  ? specificProduct?.colored
                  : specificProduct?.colored,
            }}
            className={`absolute  w-[8.5vw] h-[2px] ml-1 mt-0`}></div>
          <p className="leading-[1.8rem] text-slate-600 text-[16px] 2xl:text-lg  my-1 font-Montserrat">
            {specificProduct?.ProductIngredients}
          </p>
        </div>

        {specificProduct?.ProductHealth ? (
          <div className="mt-2 sm:mt-4 font-Montserrat  flex flex-col">
            <div>
              <h3
                style={{
                  color:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored,
                }}
                className={`text-[1.65rem] 2xl:text-3xl font-Montserrat`}>
                Health benefits
              </h3>
              <div
                style={{
                  backgroundColor:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored,
                }}
                className={`absolute  w-[8.5vw] h-[2px] ml-1 mt-[-5px] sm:mt-0`}></div>
            </div>

            <p className="leading-[1.8rem] text-slate-600 text-[16px] 2xl:text-lg font-Montserrat my-1 ">
              {specificProduct.ProductHealth}
            </p>
          </div>
        ) : (
          ""
        )}

        <h4
          style={{
            color:
              selectedButton === "50gram"
                ? specificProduct?.colored
                : specificProduct?.colored,
          }}
          className={` text-4xl  leading-[2.5rem] font-Montserrat md:mt-4`}>
          Related Products
        </h4>
        <div
          style={{
            backgroundColor:
              selectedButton === "50gram"
                ? specificProduct?.colored
                : specificProduct?.colored,
          }}
          className={`absolute  w-[8.5vw] h-[2px] ml-1`}></div>
      </div>
    </>
  );
};

export default ProductDetailsInfo;
