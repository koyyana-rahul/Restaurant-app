// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

// const cardSlice = createSlice({
//      name: "cart",
//      initialState: {
//           items: ["pizza", "burger","apple"]
//      },
//      reducers: {
//           addItem: (state, action) => {
//                state.items.push(action.payload);

//           },
//           removeItem: (state) => {
//                state.items.pop();
//           },
//           clearCart: (state) => {
//                state.items.length =0;
//           }
//      }
// });

// export const {addItem,removeItem,clearCart} = cardSlice.actions;

// export default cardSlice.reducer;

const cardSlice = createSlice({
     name: "cart",
     initialState: {
          items: []
     },
     reducers: {
          addItem: (state, action) => {
               state.items.push(action.payload);
          },
          removeItem: (state) => {
               state.items.pop();
          },
          clearCart: (state) => {
               state.items.length = 0;
          }
     }
})

export const {addItem,removeItem,clearCart} = cardSlice.actions;

export default cardSlice.reducer;