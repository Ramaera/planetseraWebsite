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

export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl className="w-full">
      <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
      <RadioGroup
        className=""
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <div className="w-full">
          <div className="flex w-full justify-between">
            <div className="sm:w-8/12  ">
              <FormControlLabel
                value="Office"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#FE7171",
                      },
                    }}
                  />
                }
                label={<Box className="responsive-box">Office</Box>}
              />
              <div
                style={{ color: "#2F302F" }}
                className="px-8 sm:font-normal text-xs sm:text-base	"
              >
                <p>H-150, Sector-63 Noida, Gauttam Budh Nagar, 201301</p>
                <p>Contact :- 0120-4152818</p>
              </div>
            </div>
            <div className="text-xs sm:text-base sm:w-2/12 w-5/12 mt-3	">
              Edit | <span className="Cart-remove">Remove</span>
            </div>
          </div>
          <div className="mt-10 flex justify-between w-full">
            <div>
              <FormControlLabel
                value="Home"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#FE7171",
                      },
                    }}
                  />
                }
                label={<Box className="responsive-box">Home</Box>}
              />
              <div
                style={{ color: "#2F302F" }}
                className="px-8 sm:font-normal text-xs sm:text-base	"
              >
                <p>H-150, Sector-63 Noida, Gauttam Budh Nagar, 201301</p>
                <p>Contact :- 0120-4152818</p>
              </div>
            </div>
            <div className="text-xs sm:text-base sm:w-2/12 w-5/12 mt-3">
              Edit | <span className="Cart-remove">Remove</span>
            </div>
          </div>
        </div>
      </RadioGroup>
    </FormControl>
  );
}
