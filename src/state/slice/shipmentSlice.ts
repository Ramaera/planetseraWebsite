import { createSlice } from "@reduxjs/toolkit";

const shipmentSlice = createSlice({
  name: "shipment",
  initialState: {
    freightCharge: null,
  },
  reducers: {
    setFreightCharge: (state, action) => {
      state.freightCharge = action.payload;
    },
  },
});

export const { setFreightCharge } = shipmentSlice.actions;
export default shipmentSlice.reducer;
