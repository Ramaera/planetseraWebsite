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
import { addToCart, storeInCart, clearCart } from "@/state/slice/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { Get_All_Products } from "@/apollo/queries";
import Specifications from "../../[id]/components/Specifications";
import { useMutation } from "@apollo/client";
import { Add_To_Cart } from "@/apollo/queries/index";
import { Get_BUYER } from "@/apollo/queries";
import Login from "@/components/Login";

const ProductDetailsInfo = () => {
  const Stock = 3;
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [addToCartServer] = useMutation(Add_To_Cart);
  const [selectedButton, setSelectedButton] = useState(50);
  const [loginModal, setLoginModal] = useState(false);

  const openLoginModal = () => {
    setLoginModal(true);
  };
  const closeLoginModal = () => {
    setLoginModal(false);
  };
  const { id } = useParams();
  const { loading, data, error } = useQuery(Get_All_Products);

  if (loading) {
    return <p>Loading...</p>;
  }

  const specificProduct = data?.allProducts.find(
    (prod) => prod.productUrl === id
  );

  // const [defaultSelectedButton, setDefaultSelectedButton] = useState(50);
  // const [activeImg, setActiveImage] = useState(specificProduct?.ProductMasala);
  // const [selectedMainImage, setSelectedMainImage] = useState(
  //   specificProduct?.ProductMasala
  // );
  if (!specificProduct) return notFound();

  const specificVariant = specificProduct?.ProductsVariant?.find(
    (variant) => variant.weight === selectedButton
  );

  const handleSelectedButton = (variantWeight) => {
    setSelectedButton(variantWeight);
  };

  const handleAddToCart = async () => {
    if (quantity > Stock) {
      toast.error(
        "Oops! You can't add more quantity than the available stock",
        {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } else {
      if (user?.data) {
        try {
          const resp = await addToCartServer({
            variables: {
              buyerId: user?.data?.buyer?.id,
              name: specificProduct?.title,
              qty: quantity,
              productVariantId: specificVariant?.id,
            },
          });

          if (resp) {
            dispatch(clearCart());
            const updatedCartItems = resp.data?.createCart?.cartItem?.map(
              (list) => ({
                id: list?.id,
                productVariantId: list?.productVariantId,
                qty: list?.qty,
                name: list?.name,
              })
            );
            updatedCartItems?.forEach((item) => {
              dispatch(storeInCart(item));
            });
          }

          // dispatch(
          //   addToCart({
          //     productVariantId: specificVariant?.id,
          //     qty: quantity,
          //     name: specificProduct.title,
          //   })
          // );

          toast.success("Product Added To Your Cart", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } catch (err) {
          console.log("err", err.message);
        }
      } else {
        openLoginModal();
      }
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
              specificProduct={specificProduct}
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
                    color: specificProduct?.metaData[0]?.colored,
                  }}
                  className={`md:text-[2.5rem] xl:text-[3rem] text-[1.8rem] sm:tracking-widest font-[500] font-Montserrat mt-8 sm:mt-0`}>
                  {specificProduct?.title}
                </h1>
                <div
                  style={{
                    backgroundColor: specificProduct?.metaData[0]?.colored,
                  }}
                  className={`absolute  w-36 h-[2px] ml-1 mt-[-2px] sm:mt-[-8px]`}></div>
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
                <h2 className="text-[#202020] md:text-[1.5rem] text-[1.2rem]  font-Montserrat">
                  Select weight:
                </h2>
                <div className="flex my-3 sm:my-4">
                  <div>
                    {specificProduct?.ProductsVariant?.length > 0 &&
                      [...specificProduct?.ProductsVariant]
                        ?.sort(compareWeight)
                        .map((variantData) => (
                          <button
                            style={
                              selectedButton === variantData.weight
                                ? {
                                    color:
                                      specificProduct?.metaData[0]?.colored,
                                    borderColor:
                                      specificProduct?.metaData[0]?.colored,
                                  }
                                : {
                                    color:
                                      specificProduct?.metaData[0]?.inactiveBtn,
                                    borderColor:
                                      specificProduct?.metaData[0]?.inactiveBtn,
                                  }
                            }
                            onClick={() =>
                              setSelectedButton(variantData.weight)
                            }
                            className="border-[1.2px] rounded-[10px] md:h-[44px] h-[40px] md:w-[124px] w-[90px] md:mr-6 mr-3  md:text-[1.5rem] text-[1.1rem]">
                            {variantData.weight} g
                          </button>
                        ))}
                  </div>
                </div>
                <h5 className="text-lg sm:text-2xl text-slate-800">
                  Price: <b>₹{specificVariant?.price}</b>
                </h5>
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

                  {Stock > 0 ? (
                    <BuynowBtn
                      onClick={handleAddToCart}
                      link="#"
                      text={"Add to Cart"}
                      width={"150px"}
                      padding={"20px"}
                    />
                  ) : (
                    <div
                      className={`mt-2 sm:mt-4 mb-2 flex flex-wrap gap-4 text-center justify-center `}>
                      <button
                        className="buynow-button flex flex-wrap gap-4 text-center justify-center"
                        disabled
                        style={{
                          boxShadow: `2px 4px 5px -2px grey`,
                          background: `linear-gradient(72.44deg, grey 0%, rgba(128, 128, 128, 0.85) 100%)`,

                          fontWeight: 400,
                          fontSize: "18px",
                          width: " 148px",
                          height: "48px",
                          padding: "2px",
                        }}>
                        Out Of Stock
                      </button>
                    </div>
                  )}
                  <ToastContainer />
                </div>
                <h6>
                  {Stock > 0 ? `Available Stock : ${Stock}` : "Out Of Stock"}
                </h6>
                <p className="mt-6 font-base text-md text-slate-500">
                  You can also buy from here
                </p>
                {selectedButton === 50 ? (
                  <BuyIcons
                    flipkart={specificProduct?.metaData[0]?.flipkart50}
                    amazon={specificProduct?.metaData[0]?.amazon50}
                    // planetsera={specificProduct}
                  />
                ) : selectedButton === 100 ? (
                  <BuyIcons
                    flipkart={specificProduct?.metaData[0]?.flipkart100}
                    amazon={specificProduct?.metaData[0]?.amazon100}
                    // planetsera={specificProduct}
                  />
                ) : (
                  <BuyIcons
                    flipkart={specificProduct?.metaData[0]?.flipkart500}
                    amazon={specificProduct?.metaData[0]?.amazon500}
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
                    specificProduct?.productUrl === "garam-masala" ||
                    "sabji-masala"
                      ? " md:top-[30rem] 2xl:top-[26rem] "
                      : " md:top-[32rem] 2xl:top-[22rem]"
                  } top-auto md:mt-auto mt-[-140px] transform md:w-[18.5rem] w-[10rem] z-[-9] `}>
                  <img
                    src={`https://planetseraapi.planetsera.com/get-images/${specificProduct?.metaData[0]?.productBg}`}
                    alt="Product Back Info"
                    // title="product bg"
                    className={`absolute  right-0 ${
                      specificProduct?.productUrl === "garam-masala" ||
                      "sabji-masala"
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
                  color: item?.colored,
                }}
                className={`text-[1.65rem] 2xl:text-3xl font-Montserrat`}>
                Usage
              </h3>

              <div
                style={{
                  backgroundColor: item?.colored,
                }}
                className={`absolute  w-16 h-[2px] ml-1 mt-[-2px]`}></div>
              <p className="leading-[1.8rem] text-slate-600 text-[16px] 2xl:text-lg  my-1 font-Montserrat">
                {item?.usage}
              </p>
            </div>
            <div className="mt-2 sm:mt-4  z-10 relative">
              <h3
                style={{
                  color: item?.colored,
                }}
                className={`text-[1.65rem] 2xl:text-3xl  font-Montserrat`}>
                Ingredients
              </h3>
              <div
                style={{
                  backgroundColor: item?.colored,
                }}
                className={`absolute  w-[8.5vw] h-[2px] ml-1 mt-0`}></div>
              <p className="leading-[1.8rem] text-slate-600 text-[16px] 2xl:text-lg  my-1 font-Montserrat">
                {item?.ingredients}
              </p>
            </div>
            <div className="mt-2 sm:mt-4 font-Montserrat  flex flex-col">
              <div>
                <h3
                  style={{
                    color: item?.colored,
                  }}
                  className={`text-[1.65rem] 2xl:text-3xl font-Montserrat`}>
                  Health benefits
                </h3>
                <div
                  style={{
                    backgroundColor: item?.colored,
                  }}
                  className={`absolute  w-[8.5vw] h-[2px] ml-1 mt-[-5px] sm:mt-0`}></div>
              </div>

              <p className="leading-[1.8rem] text-slate-600 text-[16px] 2xl:text-lg font-Montserrat my-1 ">
                {item?.healthBenefits}
              </p>
            </div>
          </>
        ))}

        <h4
          style={{
            color: specificProduct?.metaData[0]?.colored,
          }}
          className={` text-4xl  leading-[2.5rem] font-Montserrat md:mt-4`}>
          Related Products
        </h4>
        <div
          style={{
            backgroundColor: specificProduct?.metaData[0]?.colored,
          }}
          className={`absolute  w-[8.5vw] h-[2px] ml-1`}></div>
      </div>
      <Login isOpen={loginModal} closeLoginModal={closeLoginModal} />
    </>
  );
};

export default ProductDetailsInfo;
