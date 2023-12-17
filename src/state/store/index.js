import { configureStore, combineReducers } from "@reduxjs/toolkit";
import colorUsReducer from "../slice/colorUsSlice";
import cartReducer from "../slice/cartSlice";
import addressReducer from "../slice/addressSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  colorUs: colorUsReducer,
  cart: cartReducer,
  address: addressReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
