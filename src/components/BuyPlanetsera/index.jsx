import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "@/state/slice/cartSlice";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import BuynowBtn from "@/components/BuynowBtn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = ({ stock, onClick, itemlist }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setShow(true);
    {
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
    }
  };

  return (
    <>
      {!show ? (
        <div
          className={`${"hover:scale-105 transition-transform  border-[#000000] border-2  rounded-[50px] flex p-1 cursor-pointer "} relative h-[50px]`}>
          <div
            className="bg-black rounded-[50px]  flex w-[130px]"
            onClick={() => handleAddToCart(itemlist)}>
            <img
              width={"35%"}
              className="p-1"
              src="/images/logo/logo.webp"
              alt="buy on planetsera"
              title="Buy on Planetsera"
            />
            <div className="flex flex-col items-center justify-center">
              <h5 className="text-white text-[8px] font-medium">Buy now at</h5>
              <h6 className="text-white text-sm font-semibold leading-[15px]">
                Planetsera
              </h6>
            </div>
          </div>

          {!stock && (
            <h4
              className={` font-sans font-bold absolute top-0 -z-10  text-sm  text-center w-full h-full flex items-center justify-center`}>
              Coming Soon
            </h4>
          )}
        </div>
      ) : (
        <>
          <div className="mt-[-16px]">
            <BuynowBtn
              link="/cart"
              text="Proceed"
              width="130px"
              height="50px"
              sectionClass="relatedResponsiveBtn"
              // onClick={() => handleAddToCart(item)}
            />
          </div>
          <ToastContainer />
        </>
      )}
    </>
  );
};

export default Index;
