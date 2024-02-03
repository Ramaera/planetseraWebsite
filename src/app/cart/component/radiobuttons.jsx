"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";
import "@/public/styles/cart.css";
import "@/public/styles/globals.css";
import { Montserrat } from "next/font/google";
import { useSelector, useDispatch } from "react-redux";
import { removeAddress, selectAddress } from "@/state/slice/addressSlice";

export default function ControlledRadioButtonsGroup() {
  const addressesData = useSelector((state) => state.address);
  const dispatch = useDispatch();

  console.log("addressesData", addressesData);
  const handleChange = (event) => {
    dispatch(selectAddress(event.target.value));
  };

  return (
    <FormControl className="w-full">
      <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
      <RadioGroup
        className=""
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={addressesData.selectedAddress}
        onChange={handleChange}
      >
        <div className="w-full">
          {addressesData?.allAddresses?.map((_address) => (
            <div className="flex w-full justify-between my-8">
              <div className="sm:w-8/12  ">
                <FormControlLabel
                  value={_address.id}
                  control={
                    <Radio
                      sx={{
                        "&, &.Mui-checked": {
                          color: "#FE7171",
                        },
                      }}
                    />
                  }
                  label={<Box className="responsive-box">{_address.name}</Box>}
                />
                <div
                  style={{ color: "#2F302F" }}
                  className="px-8 sm:font-normal text-xs sm:text-base	"
                >
                  <p>
                    {_address.address},{_address.city},{_address.state} ,
                    {_address.pinCode}
                  </p>
                  <p>Contact :- {_address.mobile}</p>
                </div>
              </div>
              <div className="text-xs sm:text-base sm:w-2/12 w-5/12 mt-3	">
                {/* Edit | */}
                <button
                  className="Cart-remove"
                  onClick={() => dispatch(removeAddress(_address))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </RadioGroup>
    </FormControl>
  );
}
