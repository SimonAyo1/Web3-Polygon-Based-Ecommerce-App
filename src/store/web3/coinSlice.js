import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    coin: null
}

const coinSlice = createSlice({
    name: "coin",
    initialState,


    reducers: {
       addCoin(state, action) {
        state.coin = action.payload
       },
      
    }

})


export const coinActions = coinSlice.actions
export default coinSlice