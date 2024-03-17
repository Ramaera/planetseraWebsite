// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartTotalValue: 0,
    shippingValue: 0,
    getDiscountedAmount: 0,
  },

  reducers: {
    storeInCart: (state, action) => {
      const { id, productVariantId, qty, name, weight } = action.payload;
      state.items.push({ id, productVariantId, qty, name, weight });
    },

    addToCart: (state, action) => {
      const { id, productVariantId, qty, name, weight } = action.payload;

      const existingProduct = state.items.find(
        (item) => item.productVariantId === productVariantId
      );

      if (existingProduct) {
        existingProduct.qty += qty;
      } else {
        state.items.push({ id, productVariantId, qty, name, weight });
      }
    },

    removeFromCart: (state, action) => {
      const { productVariantId } = action.payload;
      state.items = state.items.filter(
        (item) => item.productVariantId !== productVariantId
      );
    },

    incrementQuantity: (state, action) => {
      const { productVariantId } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productVariantId === productVariantId
      );
      if (existingItem) {
        existingItem.qty += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const { productVariantId } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productVariantId === productVariantId
      );
      if (existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1;
      }
    },

    clearCart(state) {
      state.items = [];
    },

    cartTotalValue: (state, action) => {
      state.cartTotalValue = action.payload;
    },

    getDiscountedAmount: (state, action) => {
      state.getDiscountedAmount = action.payload;
    },
    shippingValue: (state, action) => {
      state.shippingValue = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  storeInCart,
  cartTotalValue,
  shippingValue,
  getDiscountedAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
