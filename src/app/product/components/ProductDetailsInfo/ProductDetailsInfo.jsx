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
import { useDispatch, useSelector } from "react-redux";
import BuynowBtn from "@/components/BuynowBtn";
import ProductImages from "../../[id]/components/productImages";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { addToCart } from "@/state/slice/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { Get_All_Products } from "@/apollo/queries";
import Specifications from "../../[id]/components/Specifications";
import { useMutation } from "@apollo/client";
import { Add_To_Cart } from "@/apollo/queries/index";
import { Get_BUYER } from "@/apollo/queries";
import Login from "@/components/Login";

const ProductDetailsInfo = () => {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [addToCartServer] = useMutation(Add_To_Cart);
  const [loginModal, setLoginModal] = useState(false);

  const openLoginModal = () => {
    setLoginModal(true);
  };
  const closeLoginModal = () => {
    setLoginModal(false);
  };
  const { id } = useParams();
  const allProducts = useQuery(Get_All_Products);

  const specificProduct = allProducts?.data?.allProducts.find(
    (prod) => prod.productUrl === id
  );

  // const specificProduct = RelatedPtoductData.find((prod) => prod.id === id);
  const [selectedButton, setSelectedButton] = useState(50);
  const [defaultSelectedButton, setDefaultSelectedButton] = useState(50);
  const [activeImg, setActiveImage] = useState(specificProduct?.ProductMasala);
  const [selectedMainImage, setSelectedMainImage] = useState(
    specificProduct?.ProductMasala
  );
  if (!specificProduct) return notFound();

  const specificVariant = specificProduct?.ProductsVariant?.find(
    (variant) => variant.weight === selectedButton
  );

  // useEffect(() => {
  //   if (!specificProduct?.ProductMasala500g) {
  //     setSelectedButton("50gram");
  //     setDefaultSelectedButton("50gram");
  //   } else if (!specificProduct?.ProductMasala100g) {
  //     setSelectedButton("50gram");
  //     setDefaultSelectedButton("50gram");
  //   }
  // }, [specificProduct]);

  const handleSelectedButton = (variantWeight) => {
    setSelectedButton(variantWeight);
  };

  // const handleSmallImageClick = (image) => {
  //   setSelectedMainImage(image);
  //   setActiveImage(image);
  // };

  const handleAddToCart = () => {
    if (user?.data) {
      dispatch(
        addToCart({
          id: specificVariant?.id,
          quantity: quantity,
          name: specificProduct.title,
        })
      );

      addToCartServer({
        variables: {
          buyerId: user?.data?.buyer?.id,
          name: specificProduct?.title,
          qty: quantity,
          productVariantId: specificVariant?.id,
        },
      });

      toast.success("Item Added To Your Cart", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      openLoginModal();
    }
  };

  const handleIncrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrementQuantity = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };

  function compareWeight(a, b) {
    if (a.weight < b.weight) {
      return -1;
    }
    if (a.weight > b.weight) {
      return 1;
    }
    return 0;
  }

  return (
    <>
      <div className="sm:m-8 m-4">
        <div className="w-full sm:flex">
          <div className="sm:w-2/5">
            <ProductImages
              specificVariant={specificVariant}
              selectedButton={selectedButton}
              // handleClick={handleClick}
            />
            {/* ///////////////// */}
            <Specifications
              selectedButton={selectedButton}
              specificProduct={specificProduct}
            />
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
                  className={`md:text-[2.5rem] xl:text-[3rem] text-[1.8rem] sm:tracking-widest font-[500] font-Montserrat mt-8 sm:mt-0`}
                >
                  {specificProduct?.title}
                </h1>
                <div
                  style={{
                    backgroundColor:
                      selectedButton === "50gram"
                        ? specificProduct?.colored
                        : specificProduct?.colored,
                  }}
                  className={`absolute  w-36 h-[2px] ml-1 mt-[-2px] sm:mt-[-8px]`}
                ></div>
                <p className="leading-[2rem] text-slate-600 text-lg font-Montserrat mt-1">
                  {specificProduct?.description}
                </p>
                {/* {specificProduct?.ProductDescription2 && (
                  <p className="leading-[2rem] text-slate-600 text-lg font-Montserrat mt-3">
                    {specificProduct?.ProductDescription2}
                  </p>
                )} */}
              </div>

              <br />
              <div className="order-3 sm:order-4">
                <h2 className="text-[#202020] md:text-[1.7rem] text-[1.2rem]  font-Montserrat">
                  Select weight:
                </h2>
                <div className="flex my-3 sm:my-5">
                  <div>
                    {specificProduct?.ProductsVariant?.length > 0 &&
                      [...specificProduct?.ProductsVariant]
                        ?.sort(compareWeight)
                        .map((variantData) => (
                          <button
                            style={
                              selectedButton === variantData.weight
                                ? {
                                    color: "red",
                                    borderColor: "red",
                                  }
                                : {
                                    color: specificProduct?.inactiveBtn,
                                    borderColor: specificProduct?.inactiveBtn,
                                  }
                            }
                            onClick={() =>
                              setSelectedButton(variantData.weight)
                            }
                            className="border-[1.2px] rounded-[10px] md:h-[44px] h-[40px] md:w-[124px] w-[90px] md:mr-6 mr-3  md:text-[1.5rem] text-[1.1rem]"
                          >
                            {variantData.weight} g
                          </button>
                        ))}
                  </div>
                </div>
                <div className="flex">
                  <div className="h-12 flex justify-between items-center text-xs sm:text-base mt-2 sm:mt-4 px-3   border-2 border-black rounded-3xl sm:w-36 w-32  mr-3">
                    <button onClick={handleDecrementQuantity}>
                      <HorizontalRuleIcon className="w-5 h-5" />
                    </button>
                    <h5 className="font-medium text-md text-slate-500">
                      {quantity}
                    </h5>

                    <button onClick={handleIncrementQuantity}>
                      <AddIcon />
                    </button>
                  </div>

                  <BuynowBtn
                    onClick={handleAddToCart}
                    link="#"
                    text={"Add to Cart"}
                    width={"150px"}
                    padding={"20px"}
                  />
                  <ToastContainer />
                </div>
                <h6 className="mt-6 font-base text-md">
                  You Can Also Buy From Here
                </h6>
                {selectedButton === "50gram" ? (
                  <BuyIcons
                    flipkart={specificProduct?.flipkart50}
                    amazon={specificProduct?.amazon50}
                    // planetsera={specificProduct}
                  />
                ) : selectedButton === "100gram" ? (
                  <BuyIcons
                    flipkart={specificProduct?.flipkart100}
                    amazon={specificProduct?.amazon100}
                    // planetsera={specificProduct}
                  />
                ) : (
                  <BuyIcons
                    flipkart={specificProduct?.flipkart500}
                    amazon={specificProduct?.amazon500}
                    // planetsera={specificProduct}
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
                  } top-auto md:mt-auto mt-[-140px] transform md:w-[18.5rem] w-[10rem] z-[-9] `}
                >
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
        {specificProduct?.metaData?.map((item) => (
          <>
            <div className="mt-4">
              <h3
                style={{
                  color:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored,
                }}
                className={`text-[1.65rem] 2xl:text-3xl font-Montserrat`}
              >
                Usage
              </h3>

              <div
                style={{
                  backgroundColor:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored,
                }}
                className={`absolute  w-16 h-[2px] ml-1 mt-[-2px]`}
              ></div>
              <p className="leading-[1.8rem] text-slate-600 text-[16px] 2xl:text-lg  my-1 font-Montserrat">
                {item?.usage}
              </p>
            </div>
            <div className="mt-2 sm:mt-4  z-10 relative">
              <h3
                style={{
                  color:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored,
                }}
                className={`text-[1.65rem] 2xl:text-3xl  font-Montserrat`}
              >
                Ingredients
              </h3>
              <div
                style={{
                  backgroundColor:
                    selectedButton === "50gram"
                      ? specificProduct?.colored
                      : specificProduct?.colored,
                }}
                className={`absolute  w-[8.5vw] h-[2px] ml-1 mt-0`}
              ></div>
              <p className="leading-[1.8rem] text-slate-600 text-[16px] 2xl:text-lg  my-1 font-Montserrat">
                {item?.ingredients}
              </p>
            </div>
            <div className="mt-2 sm:mt-4 font-Montserrat  flex flex-col">
              <div>
                <h3
                  style={{
                    color:
                      selectedButton === "50gram"
                        ? specificProduct?.colored
                        : specificProduct?.colored,
                  }}
                  className={`text-[1.65rem] 2xl:text-3xl font-Montserrat`}
                >
                  Health benefits
                </h3>
                <div
                  style={{
                    backgroundColor:
                      selectedButton === "50gram"
                        ? specificProduct?.colored
                        : specificProduct?.colored,
                  }}
                  className={`absolute  w-[8.5vw] h-[2px] ml-1 mt-[-5px] sm:mt-0`}
                ></div>
              </div>

              <p className="leading-[1.8rem] text-slate-600 text-[16px] 2xl:text-lg font-Montserrat my-1 ">
                {item?.healthBenefits}
              </p>
            </div>
          </>
        ))}

        <h4
          style={{
            color:
              selectedButton === "50gram"
                ? specificProduct?.colored
                : specificProduct?.colored,
          }}
          className={` text-4xl  leading-[2.5rem] font-Montserrat md:mt-4`}
        >
          Related Products
        </h4>
        <div
          style={{
            backgroundColor:
              selectedButton === "50gram"
                ? specificProduct?.colored
                : specificProduct?.colored,
          }}
          className={`absolute  w-[8.5vw] h-[2px] ml-1`}
        ></div>
      </div>
      <Login isOpen={loginModal} closeLoginModal={closeLoginModal} />
    </>
  );
};

export default ProductDetailsInfo;
