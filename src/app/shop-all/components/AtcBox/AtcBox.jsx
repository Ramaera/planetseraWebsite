"use client";
import { useState } from "react";
import BuynowBtn from "@/components/BuynowBtn";
import Link from "next/link";
import { useQuery, useMutation } from "@apollo/client";
import { Get_All_Products } from "@/apollo/queries/index.js";
import { Add_To_Cart } from "@/apollo/queries/index";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";
import { addToCart, storeInCart, clearCart } from "@/state/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "@/components/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AtcBox = () => {
  const { data } = useQuery(Get_All_Products);
  const [addToCartServer] = useMutation(Add_To_Cart);
  const dispatch = useDispatch();
  const colorMe = useSelector((state) => state.colorUs.color);
  const user = useSelector((state) => state?.user);
  const CartData = useSelector((state) => state.cart.items);
  const [selectedWeight, setSelectedWeight] = useState("All");
  const [quantity, setQuantity] = useState(1);
  const [loginModal, setLoginModal] = useState(false);

  const openLoginModal = () => {
    setLoginModal(true);
  };
  const closeLoginModal = () => {
    setLoginModal(false);
  };

  const filteredProducts = data?.allProducts?.filter(
    (product) => product.type === "atc"
  );

  const handleWeightSelect = (weight) => {
    setSelectedWeight(weight);
  };

  const handleAddToCart = async (product, variant) => {
    const currentQuantity = quantity[variant.id] || 1;

    console.log("currentQuantity", currentQuantity, variant);

    if (currentQuantity > variant?.stock) {
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
        const isProductInCart = CartData.some(
          (item) => item.productVariantId === variant?.id
        );

        if (isProductInCart) {
          toast.warning("Product is already in the cart", {
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
          try {
            console.log("enter");
            const resp = await addToCartServer({
              variables: {
                buyerId: user?.data?.buyer?.id,
                name: product?.title,
                qty: currentQuantity,
                productVariantId: variant?.id,
                weight: variant?.weight?.toString(),
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
                  weight: list?.weight,
                })
              );
              updatedCartItems?.forEach((item) => {
                dispatch(storeInCart(item));
              });
            }

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
            console.log("err", err.message, err);
          }
        }
      } else {
        openLoginModal();
      }
    }
  };

  const handleIncrementQuantity = (variantId) => {
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [variantId]: (prevQuantities[variantId] || 1) + 1,
    }));
  };

  const handleDecrementQuantity = (variantId) => {
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [variantId]:
        prevQuantities[variantId] > 1 ? prevQuantities[variantId] - 1 : 1,
    }));
  };

  // console.log("filteredProducts===", filteredProducts);

  return (
    <div className="mt-10">
      <div className="sm:text-left flex flex-col justify-center items-center">
        <h4 className="text-[#1E1E1E] text-2xl sm:text-4xl font-['Montserrat'] font-bold text-center">
          Our ATC Box Products
        </h4>
      </div>
      <div className="flex w-full" id="shop">
        <div className="flex justify-evenly p-2 md:p-6 flex-wrap w-full">
          {filteredProducts?.map((product) =>
            product.ProductsVariant.map(
              (variant) =>
                variant.isVariantActive && (
                  <div
                    key={variant.id}
                    className="m-2 w-[45%] md:w-[22%] flex flex-col items-center border-gray-200 border-[1px] rounded-xl p-1 sm:p-3 justify-between">
                    <div>
                      <div className="flex items-center justify-center rounded-xl p-4 w-full bg-gray-100">
                        <img
                          className="relative w-48 lg:w-80"
                          loading="lazy"
                          src={`https://planetseraapi.planetsera.com/get-images/${variant?.imageUrl[0]}`}
                          alt={product.title}
                          title={product.title}
                        />
                      </div>

                      <h5 className="font-[Montserrat] text-[13.5px] sm:text-xl 2xl:text-2xl text-center">
                        {product?.title} ({variant.weight}g)
                      </h5>
                    </div>
                    <div>
                      <div className="mt-2 text-center">
                        <h6 className="text-gray-700 sm:text-lg sm:font-semibold">
                          Price: ₹{variant.price}
                        </h6>
                      </div>

                      <div className="sm:h-12 h-[2.5rem] flex justify-between items-center text-xs sm:text-base mt-2 sm:mt-4 px-3 border-2 border-black rounded-3xl sm:w-36 w-[6.5rem]">
                        <button
                          onClick={() => handleDecrementQuantity(variant.id)}>
                          <HorizontalRuleIcon className="w-5 h-5" />
                        </button>
                        <h5 className="font-medium text-md text-slate-500">
                          {quantity[variant.id] || 1}
                        </h5>
                        <button
                          onClick={() => handleIncrementQuantity(variant.id)}>
                          <AddIcon />
                        </button>
                      </div>

                      <BuynowBtn
                        onClick={() => handleAddToCart(product, variant)}
                        link="#"
                        text={
                          variant.stock > 0 ? "Add to Cart" : "Out Of Stock"
                        }
                        width={"150px"}
                        opacity={variant.stock > 0 ? 1 : 0.5}
                        disabled={variant.stock > 0 ? "" : "disabled"}
                        padding={"10px"}
                        sectionClass="responsiveBtn"
                      />

                      <p
                        className={`text-sm semibold text-center ${
                          variant.stock > 0 ? "text-green-500" : "text-red-500"
                        }`}>
                        {variant.stock > 0
                          ? `In Stock: ${
                              variant.stock > 50 ? "50+" : variant.stock
                            }`
                          : "Out of Stock"}
                      </p>
                    </div>
                  </div>
                )
            )
          )}
        </div>
      </div>
      <ToastContainer />
      <Login isOpen={loginModal} closeLoginModal={closeLoginModal} />
    </div>
  );
};

export default AtcBox;
