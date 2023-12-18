import { createSlice, current } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    selectedPayment: null,
    allPayment: [], 
    // paymentMethod: null,
    // shippingDate: null,
  },
  reducers: {
    saveCard: (state, action) => {

      const random_id = Math.floor(Math.random() * 100000);
      state.allPayment?.push({ ...action.payload, id: random_id });
      if (!state.selectedPayment) state.selectedPayment = random_id;
      // console.log("saving.123å.",state.allPayment)
    },
    selectPayment: (state, action) => {
      state.selectedPayment = action.payload;
    },
    
  },
 

});


export const { selectPayment, saveCard } = paymentSlice.actions;
export default paymentSlice.reducer;
