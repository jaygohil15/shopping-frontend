import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
   value: 0
}

export const productListSlice = createSlice({
   name: 'productList',
   initialState,
   reducers: {
      initialProductAdd: (state, action) => {
         state.value = action.payload
      },
      removeOnePoduct: (state, action) => {
         // for (let x of state.value) {
         //    if (x._id === action.payload) {
         //       if (x.quantity > 0) {
         //          x.quantity -= 1
         //       } else {

         //       }
         //    }
         // }
         // state.value.filter((element, index) => {
         //    if (element._id === action.payload) {
         //       if (element.quantity > 0) {
         //          element.quantity -= 1
         //       } else {

         //       }
         //    }
         // })
         console.log(state.value.length)
         for (let i = 0; i < state.value.length; i++) {
            if (state.value[i]._id === action.payload) {
               console.log(current(state.value[i]))
               state.value[i].quantity -= 1
            }
         }

         console.log(current(state.value))

      }
   }
})

// const findInObject = (obj, id) => {

// }

export const { initialProductAdd, removeOnePoduct } = productListSlice.actions

export default productListSlice.reducer

