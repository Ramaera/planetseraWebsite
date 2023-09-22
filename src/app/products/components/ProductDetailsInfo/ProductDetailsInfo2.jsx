import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Icon from "./Icon";
import BuyIcons from "../../../../components/BuyIcons";
import RelatedPtoductData from "../RelatedProducts/RelatedProductData";

const ProductDetailsInfo2 = () => {
  const { id } = useParams();
  const specificProduct = RelatedPtoductData.find((prod) => prod.id === id);
  const [selectedButton, setSelectedButton] = useState("50gram");
  const [defaultSelectedButton, setDefaultSelectedButton] = useState("50gram");
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
  };

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.toString());
  };

  return (
    <>
      {/* Main Image */}
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
          className="absolute md:scale-100 scale-75  top-0 right-0 2xl:top-8 md:top-4 md:right-4 xl:right-6">
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

      {/* Small Images */}
      <div className="relative flex justify-evenly mt-4">
        <div
          className="scale-[0.75] "
          onClick={() => handleSmallImageClick(specificProduct?.ProductBacks)}>
          <img src={specificProduct?.ProductBacks} alt="product back side" />
        </div>
        <div
          className="scale-[0.75] "
          onClick={() =>
            handleSmallImageClick(specificProduct?.ProductBackInfo)
          }>
          <img src={specificProduct?.ProductBackInfo} alt="product info" />
        </div>
        <div
          className="scale-[0.75] "
          onClick={() => handleSmallImageClick(specificProduct?.ProductMasala)}>
          <img
            src={selectedMainImage}
            alt={specificProduct.ProductName}
            title="PlanetsEra 100% Pure Natural Product"
          />
        </div>
      </div>

      {/* Weight Selection Buttons */}
      <div className="flex my-5">
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

      {/* Buy Icons */}
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

      {/* Made in India */}
      <img
        className="w-[60%]"
        src="/images/backgrounds/MadeIndia.webp"
        alt="Made in India"
        title="Made in India"
      />

      {/* Product Background */}
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
          className="max-w-[100px] sm:max-w-[180px] 2xl:max-w-full  max-h-96   absolute right-0"
        />
      </div>

      {/* Product Information */}
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
              {/* Weight selection buttons */}
              {/* ... (same code as above) */}
            </div>

            {/* Buy Icons */}
            {/* ... (same code as above) */}

            {/* Made in India */}
            {/* ... (same code as above) */}
          </div>
          <div className=" sm:hidden">{/* ... (same code as above) */}</div>
        </div>

        {/* Health Benefits */}
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
          <p className="leading-[2.2rem] text-slate-600 text-lg  my-4 font-Montserrat">
            {specificProduct?.ProductIngredients}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsInfo2;
