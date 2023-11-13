import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import addressSlice from "./web3/addressSlice";
import coinSlice from "./web3/coinSlice";
import web3Slice from "./web3/web3Slice";



const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    account: addressSlice.reducer,
    web3: web3Slice.reducer,
    coin: coinSlice.reducer
  },
});

export default store;
