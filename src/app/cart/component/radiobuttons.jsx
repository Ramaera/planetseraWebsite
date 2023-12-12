"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <div className="">
          <FormControlLabel value="Noida" control={<Radio />} label="Noida" />
          <div style={{ color: "#2F302F" }} className="px-8">
            <p>H-150, Sector-63 Noida, Gauttam Budh Nagar, 201301</p>
            <p>Contact :- 0120-4152818</p>
          </div>
        </div>
        <div className="mt-10">
          <FormControlLabel
            value="Ramaera"
            control={<Radio />}
            label="Ramaera"
          />
          <div style={{ color: "#2F302F" }} className="px-8">
            <p>H-150, Sector-63 Noida, Gauttam Budh Nagar, 201301</p>
            <p>Contact :- 0120-4152818</p>
          </div>
        </div>
      </RadioGroup>
    </FormControl>
  );
}
