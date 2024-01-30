
import { createSlice,current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
        let alreadyItem = current(state).items.find((item)=> item.id == action.payload.id);
        if(alreadyItem){
            state.items= state.items.map((item)=> {
                if(item.id == action.payload.id)
                    item.quantity++;
                return item; 
            });
        }else{
            action.payload.quantity=1;
            state.items.push(action.payload);
        }
    },
    removeFromCart: (state, action) => {
      console.log("Remove from cart", action.payload)
      state.items = state.items.filter((item)=> item.id != action.payload.id); 
    },
    incrementQuantity: (state, action) => {
      state.items = state.items.map((item, index)=> {
        if(index ==  action.payload) item.quantity++;
        return item;
      } )
    },
    decrementQuantity: (state, action) => {
      state.items = state.items.map((item, index)=> {
        if( item.quantity>1 &&  index ==  action.payload) item.quantity--;
        return item;
      } )
    }
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
