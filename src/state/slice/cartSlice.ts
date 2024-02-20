// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity, name } = action.payload;

      const existingProduct = state.items.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.items.push({ id, quantity, name });
      }
    },

    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    incrementQuantity: (state, action) => {
      const { index } = action.payload;
      state.items[index].quantity += 1;
    },

    decrementQuantity: (state, action) => {
      const { index } = action.payload;
      if (state.items[index].quantity > 1) {
        state.items[index].quantity -= 1;
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
