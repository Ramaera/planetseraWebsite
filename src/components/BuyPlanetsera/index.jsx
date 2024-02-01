"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "@/state/slice/cartSlice";

const index = ({ stock, onClick, itemlist }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div
      rel="noopener noreferrer"
      className={`${"hover:scale-105 transition-transform  border-[#000000] border-2  rounded-[50px] flex p-1 cursor-pointer "} relative  `}>
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
  );
};

export default index;
