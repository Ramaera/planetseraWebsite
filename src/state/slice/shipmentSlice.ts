import { createSlice } from "@reduxjs/toolkit";

const shipmentSlice = createSlice({
  name: "shipment",
  initialState: {
    freightCharge: null,
    shippingCharge: 100,
  },
  reducers: {
    setFreightCharge: (state, action) => {
      state.freightCharge = action.payload;
    },
    setShippingCharge: (state, action) => {
      state.shippingCharge = action.payload;
    },
  },
});

export const { setFreightCharge, setShippingCharge } = shipmentSlice.actions;
export default shipmentSlice.reducer;
