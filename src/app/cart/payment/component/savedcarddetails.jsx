import { React } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { selectPayment, removePayment } from "@/state/slice/paymentSlice";
import { useState } from "react";
import { LiaCcVisa } from "react-icons/lia";
// import { BorderColor } from "@mui/icons-material";

export const savedcarddetails = () => {
  const paymentData = useSelector((state) => state.payment);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (index) => {
    setSelectedButton(index);
  };

  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(selectPayment(event.target.value));

    if (event.target.value !== "Credit/Debit Cards") {
      setSelectedButton(null); // Reset selectedButton when changing the payment method
    }
  };
  return (
    <div className="w-full flex-wrap">
      {paymentData.allPayment?.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`flex w-full border-2 justify-between my-8 ${
            selectedButton === index ? "border-red-500" : "border-gray-500"
          }`}
        >
          <div className=" ">
            <div className="flex   justify-center font-normal	text-sm	py-1	 px-5 rounded-2xl">
              <div className="text-base  ">
                *****{item.cardNumber?.slice(-4)}
                <p>{item.expiryDate}</p>
              </div>

              <div
                style={{ color: "#2F302F" }}
                className=" sm:font-normal text-xs sm:text-base flex items-center	"
              >
                <LiaCcVisa
                  color="#090ded"
                  className="sm:w-12 sm:h-8 w-8  h-8 ml-2 items-center flex"
                />
              </div>
            </div>
          </div>
          <div className="text-xs sm:text-base sm:w-2/12 w-5/12 mt-3	">
            <button
              className="Cart-remove"
              onClick={() => dispatch(removePayment(item))}
            >
              Remove
            </button>
          </div>
        </button>
      ))}
    </div>
  );
};
export default savedcarddetails;
