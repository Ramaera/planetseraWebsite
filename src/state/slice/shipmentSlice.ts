import { createSlice,current } from '@reduxjs/toolkit';

const shipmentSlice = createSlice({
  name: 'shipment',
  initialState: {
 
    shippingMethod : null,
    shippingDate : null,
    
  },
  reducers: {
   
    selectShipment: (state, action) => {
        // console.log("selecting...",)
        state.shippingMethod = action.payload; 
    },
  },
});

export const {  selectShipment} = shipmentSlice.actions;
export default shipmentSlice.reducer;
