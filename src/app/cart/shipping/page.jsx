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
        <div className=" p-10  w-full font-mont ">
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
              <div className=" flex justify-between w-full border-b-2 pb-2">
                <FormControlLabel
                  style={{ color: "#2F302F" }}
                  value="Regular Shipment"
                  control={<Radio />}
                  label="Free --> Regular Shipment"
                />
                <div>
                  <p>Date</p>
                </div>
              </div>
              <div className="mt-10 flex justify-between border-b-2 pb-10">
                <FormControlLabel
                  style={{ color: "#2F302F" }}
                  value="Priority Shipping"
                  control={<Radio />}
                  label="$ 50 --> Priority Shipping"
                />
                <p>Date</p>
              </div>
              <div className="mt-10 flex justify-between border-b-2 pb-10">
                <FormControlLabel
                  style={{ color: "#2F302F" }}
                  value="Schedule"
                  control={<Radio />}
                  label="Schedule --> Choose a date that works for you."
                />
                <div className="">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
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
