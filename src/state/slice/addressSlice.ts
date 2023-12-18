import { createSlice,current } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    selectedAddress:null,
    allAddresses:[],
 
    
  },
  reducers: {
    saveAddress: (state, action) => {
      console.log("saving..",state)

        // console.log("saving..",)
        const random_id= Math.floor(Math.random() * 100000);
      state.allAddresses.push({...action.payload, id: random_id});
      if(!state.selectedAddress) state.selectedAddress= random_id;
    },
    removeAddress: (state, action) => {
        // console.log("removing...",)
        state.allAddresses = state.allAddresses.filter((item)=> item.id != action.payload.id); 
        if(state.selectedAddress==action.payload.id) state.selectedAddress= null;

    },
    selectAddress: (state, action) => {
        console.log("selecting...",)
        state.selectedAddress = action.payload; 
    },
  },
});

export const { saveAddress , removeAddress, selectAddress} = addressSlice.actions;
export default addressSlice.reducer;
