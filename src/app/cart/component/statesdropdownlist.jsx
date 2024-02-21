import React, { useState } from "react";

const IndianStatesDropdown = ({ getSelectedState }) => {
  // Array of Indian states
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    " Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
    "Jammu and Kashmir",
    "Ladakh",
    // Add more states as needed
  ];

  // State to hold the selected state
  const [selectedState, setSelectedState] = useState("");

  // Function to handle state changes
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    getSelectedState(selectedState);
  };

  return (
    <div className="">
      <select
        id="stateDropdown"
        value={selectedState}
        onChange={handleStateChange}
        style={{
          color: selectedState ? "inherit" : "#B9BBBF",
          outline: "none",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        <option>Select State</option>
        {indianStates.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IndianStatesDropdown;
