"use client";
import Icon from "./Icon";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BuyIcons from "../../../../components/BuyIcons";
import RelatedPtoductData from "../RelatedProducts/RelatedProductData";
// import MetaDataproducts from "../MetaDataproducts/MetaDataproducts";
import { notFound } from "next/navigation";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const ProductDetailsInfo2 = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.toString());
  };
  // background-image: linear-gradient(to right, rgb(255 203 0), rgb(255 168 82));
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

  // console.log("specificProduct", specificProduct);
  return (
    <>
      <div className="md:m-8 m-4">
        <div className="w-full md:flex">
          <div className="md:w-2/4">
            <div className="flex flex-row">
              <div className="relative flex flex-col justify-evenly 	mt-4 w-1/3">
                <div
                  className="scale-[0.75] "
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
                    alt="product back side"
                    // title="Product Back Side"
                  />
                  {/* <img src={ProductBacks} /> */}
                </div>

                <div
                  className="scale-[0.75] "
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
                    alt="product back side"
                    // title="Product Back Side"
                  />
                  {/* <img src={ProductBacks} /> */}
                </div>

                <div
                  className="scale-[0.75] "
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
                    alt="product info"
                    // title="Product Detailed"
                  />
                  {/* <img src={ProductBackInfo} /> */}
                </div>
              </div>

              <div className="relative border-solid border-[2px] rounded-2xl flex items-center justify-center py-1 md:mx-0 mx-5">
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
                  src={selectedMainImage}
                  alt={specificProduct.ProductName}
                  title="PlanetsEra 100% Pure Natural Product"
                />

                <div
                  onClick={handleClick}
                  className="absolute md:scale-100 scale-75  top-0 right-0 2xl:top-8 md:top-4 md:right-4 xl:right-6  ">
                  <Icon
                    color={
                      selectedButton === "50gram"
                        ? specificProduct?.colored
                        : specificProduct?.colored2
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
                <div className="md:py-2 p-0 md:py-auto py-4 md:w-auto  w-[5rem] flex sm:flex-col xl:flex-row items-center justify-center">
                  <p className="lg:mr-2">Weight : </p>
                  <p>
                    {" "}
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
                <div className="md:py-2 p-0 flex sm:flex-col xl:flex-row items-center  justify-center">
                  <p className="lg:mr-2">Packaging type : </p>
                  <p>Zipper Pouch</p>
                </div>
                <div className="border-r-2"></div>
                <div className="md:py-2 p-0 flex sm:flex-col xl:flex-row items-center justify-center">
                  <p className="lg:mr-2"> Country of origin : </p>
                  <p>India</p>
                </div>
              </div>
            </div>
            {/* ////////////////// */}
          </div>
          <div className="md:w-2/4 md:pl-10">
            <div>
              <div className="hidden sm:block">
                <h1
                  style={{
                    color:
                      selectedButton === "50gram"
                        ? specificProduct?.colored
                        : specificProduct?.colored2,
                  }}
                  className={`md:text-[2.5rem] xl:text-[3.3rem] text-[2rem] tracking-widest font-[500] font-Montserrat md:mt-auto mt-8`}>
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
              <div>
                <h3 className="text-[#202020] md:text-[1.7rem] text-[1.2rem] font-[300] font-Montserrat">
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
                <div
                  className={` right-0 absolute   ${
                    specificProduct?.id === "garam-masala"
                      ? " md:top-[38rem] 2xl:top-[28rem]"
                      : " md:top-[32rem] 2xl:top-[22rem]"
                  } top-auto md:mt-auto mt-[-140px] transform md:w-[18.5rem] w-[10rem] z-[-9] `}>
                  <img
                    src={specificProduct?.ProductBg}
                    alt="product bg"
                    title="product bg"
                    className="max-w-[100px] sm:max-w-[180px] 2xl:max-w-full  max-h-96	 absolute right-0"
                  />
                </div>
              </div>
              <div className=" sm:hidden">
                <h1
                  style={{
                    color:
                      selectedButton === "50gram"
                        ? specificProduct?.colored
                        : specificProduct?.colored2,
                  }}
                  className={`md:text-[2.5rem] xl:text-[3.3rem] text-[2rem] tracking-widest font-[500] font-Montserrat md:mt-auto mt-8`}>
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
                <p className="leading-[2rem] text-slate-600 text-lg font-Montserrat mt-1">
                  {specificProduct?.ProductDescription}
                </p>
                {specificProduct?.ProductDescription2 && (
                  <p className="leading-[2rem] text-slate-600 text-lg font-Montserrat mt-3">
                    {specificProduct?.ProductDescription2}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-2 sm:mt-8  z-10 relative">
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
                    Usage
                  </h3>

                  <div
                    style={{
                      backgroundColor:
                        selectedButton === "50gram"
                          ? specificProduct?.colored
                          : specificProduct?.colored2,
                    }}
                    className={`absolute  w-16 h-[2px] ml-1 mt-[-2px]`}></div>
                  <p className="leading-[2.2rem] text-slate-600 text-lg  my-4 font-Montserrat">
                    {specificProduct?.ProductUsage}
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
                Ingredients
              </h3>
              <div
                style={{
                  backgroundColor:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored2,
                }}
                className={`absolute  w-[8.5vw] h-[2px] ml-1 mt-1`}></div>
              <p className="leading-[2.2rem] text-slate-600 text-lg  my-4 font-Montserrat">
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
          <div className="md:my-10 my-5 font-Montserrat  md:flex md:flex-col">
            <div>
              <h3
                style={{
                  color:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored2,
                }}
                className={` text-3xl font-light font-Montserrat`}>
                Health benefits
              </h3>
              <div
                style={{
                  backgroundColor:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored2,
                }}
                className={`absolute  w-[8.5vw] h-[2px] ml-1 mt-1`}></div>
            </div>

            <p className="leading-[2.2rem] text-slate-600 text-lg font-Montserrat sm:ml-2 md:w-[72%] xl:w-[78%]">
              {specificProduct.ProductHealth}
            </p>
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

export default ProductDetailsInfo2;