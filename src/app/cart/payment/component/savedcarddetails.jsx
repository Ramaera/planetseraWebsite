import { React } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { selectPayment } from "@/state/slice/paymentSlice";
import { useState } from "react";

export const savedcarddetails = () => {
  const paymentData = useSelector((state) => state.payment);
  const [isCardSelected, setCardSelected] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(selectPayment(event.target.value));

    if (event.target.value !== "Credit/Debit Cards") {
      setCardSelected(false);
    }
  };
  return (
    <div>
      <div>
        <FormControl className="w-full">
          <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
          <RadioGroup
            className=""
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={paymentData.selectedPayment}
            onChange={handleChange}
          >
            <div className="w-full">
              {paymentData.allPayment?.map((item) => (
                <div className="flex w-full justify-between my-8">
                  <div className="sm:w-8/12  ">
                    <FormControlLabel
                      value={item.id}
                      control={
                        <Radio
                          sx={{
                            "&, &.Mui-checked": {
                              color: "#FE7171",
                            },
                          }}
                        />
                      }
                      label={
                        <Box className="responsive-box">{item.cardNumber}</Box>
                      }
                    />
                    <div
                      style={{ color: "#2F302F" }}
                      className="px-8 sm:font-normal text-xs sm:text-base	"
                    >
                      <p>{item.expiryDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};
export default savedcarddetails;
