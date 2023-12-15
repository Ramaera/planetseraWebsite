"use client";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";

const page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className="  flex w-full  ">
        <div className=" sm:p-10 p-2  w-full font-mont ">
          <p style={{ color: "#2F302F" }} className="text-xl	">
            Shipment Method
          </p>

          <FormControl className="w-full mt-5">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <div className=" pb-5 pt-5 flex justify-between w-full border-b-2 items-center ">
                <FormControlLabel
                  className="font-mont"
                  style={{ color: "#2F302F" }}
                  value="Regular Shipment"
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
                    <Box
                      className="responsive-box-shipping"
                      component="div"
                      fontFamily="Montserrat"
                    >
                      Free <span className="ml-2">Regular Shipment</span>
                    </Box>
                  }
                />
                <div>
                  <p className="sm:text-base text-xs flex ">Date</p>
                </div>
              </div>
              <div className="pb-5 pt-7 flex justify-between border-b-2 items-center ">
                <FormControlLabel
                  className="font-mont"
                  style={{ color: "#2F302F" }}
                  value="Priority Shipping"
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
                    <Box
                      className="responsive-box-shipping"
                      component="div"
                      fontFamily="Montserrat"
                    >
                      ₹ 50 <span className="ml-2">Priority Shipping</span>
                    </Box>
                  }
                />

                <p className="sm:text-base text-xs flex ">Date</p>
              </div>
              <div className="mt-5 flex justify-between border-b-2 pb-5 item-center">
                <FormControlLabel
                  className="font-mont"
                  style={{ color: "#2F302F" }}
                  value="Schedule"
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
                    <Box
                      className="responsive-box-shipping"
                      component="div"
                      fontFamily="Montserrat"
                    >
                      Schedule
                      <span className="ml-2 text-xs sm:text-base">
                        Choose a date that works for you.
                      </span>
                    </Box>
                  }
                />
                <div className="">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="" />
                  </LocalizationProvider>
                </div>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </>
  );
};
export default page;
