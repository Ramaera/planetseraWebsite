import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";
const ordersummary = () => {
  return (
    <>
      <div style={{ width: "25%" }}>
        <div className="border-2 p-3">
          <p className="text-2xl	">Order Summary</p>
          <div className="flex  justify-between mt-5 ">
            price <span>₹ 500</span>
          </div>
          <div className="flex  justify-between mt-5">
            Discount <span>₹ 500</span>
          </div>
          <div className="flex  justify-between mt-5">
            Shipping <span className="Cart-remove">₹ 500</span>
          </div>
          <div className="flex  justify-between mt-5">
            Coupon Applied <span>₹ 500</span>
          </div>
          <div className="flex  justify-between mt-5">
            Total <span>₹ 500</span>
          </div>
          <div className="flex  justify-between mt-5">
            Estimated Delivery By <span>₹ 500</span>
          </div>
          <TextField
            variant="standard"
            placeholder="Coupon Code"
            sx={{
              width: "100%",
              border: 0,
              borderWidth: 0,
              boxSizing: "inherit",
              borderWidth: 1,
              height: "2rem",
              paddingLeft: 3,
              borderColor: "#E2E2E2",
              borderRadius: 9999,
              marginTop: 3,
            }}
            InputProps={{
              disableUnderline: "true",
              endAdornment: (
                <InputAdornment className="mr-3" position="end">
                  <LocalOfferIcon />
                </InputAdornment>
              ),
            }}
          />

          <div className="flex justify-center border-2 rounded-xl mt-5 Cartbgcolor">
            <button className="text-white">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ordersummary;
