import { createSlice, current } from "@reduxjs/toolkit";
import { AddressType } from "../types/address";

export type AddressState = {
  selectedAddress: [];
  allAddresses: [AddressType] | [];
};

const initialState: AddressState = {
  selectedAddress: null,
  allAddresses: [],
};
const addressSlice = createSlice({
  name: "address",
  initialState: {
    selectedAddress: null,
    allAddresses: [],
  },
  reducers: {
    saveAddress: (state, action) => {
      const { addresId } = action.payload;
      state.allAddresses.push(action.payload);
      if (!state.selectedAddress) state.selectedAddress = addresId;
    },

    removeAddress: (state, action) => {
      state.allAddresses = state.allAddresses.filter(
        (item) => item.id !== action.payload
      );
      if (state.selectedAddress === action.payload)
        state.selectedAddress = null;
    },

    selectAddress: (state, action) => {
      console.log("here");
      state.selectedAddress = action.payload;
    },
  },
});

export const { saveAddress, removeAddress, selectAddress } =
  addressSlice.actions;
export default addressSlice.reducer;

// import { AddressType } from "../types/address";

// export type AddressState = {
//   selectedAddress: number | null; // Assuming selectedAddress is a number
//   allAddresses: AddressType[]; // Assuming AddressType is a type for addresses
// };

// const initialState: AddressState = {
//   selectedAddress: null,
//   allAddresses: [],
// };

// const addressSlice = createSlice({
//   name: "address",
//   initialState,
//   reducers: {
//     saveAddress: (state, action) => {
//       const random_id = Math.floor(Math.random() * 100000);
//       const newAddress = { ...action.payload, id: random_id };
//       return {
//         ...state,
//         allAddresses: [...state.allAddresses, newAddress],
//         selectedAddress: state.selectedAddress ? state.selectedAddress : random_id,
//       };
//     },
//     removeAddress: (state, action) => {
//       state.allAddresses = state.allAddresses.filter(
//         (item) => item.id !== action.payload.id
//       );
//       if (state.selectedAddress === action.payload.id)
//         state.selectedAddress = null;
//     },
//     selectAddress: (state, action) => {
//       state.selectedAddress = action.payload;
//     },
//   },
// });

// export const { saveAddress, removeAddress, selectAddress } = addressSlice.actions;
// export default addressSlice.reducer;
