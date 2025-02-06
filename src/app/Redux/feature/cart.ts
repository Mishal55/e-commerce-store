/*@typescript-eslint/no-explicit-any*/
import { createSlice, } from '@reduxjs/toolkit'

// Define the initial state using that type
export const cartSlice = createSlice({
  name: 'Products',
  initialState: [],
  reducers: {
    // add to cart functionality
    add(state: any, action) {
      const uuid = Math.floor(1000 + Math.random() * 9000)
      const newobj = { ...action.payload, uuid }
      state.push(newobj)
    },
    // delete from cart
    remove(state: any, { payload }) {
      return state.filter((val: any) => val.uuid !== payload)
    },
    // addition of item
    
    addition(state: any, action) {
      const obj = state.find(
        (val: any) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      )
      if (obj) {
        ++obj.qty
        const newState = state.filter((val: any) => val.id !== obj.id)
        state = [...newState, obj]
        return
      }
    },
    // subtraction of item
    subraction(state: any, action) {
      const obj = state.find(
        (val: any) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      )
      if (obj !== undefined) {
        --obj.qty
        const newState = state.filter((val: any) => val.uuid !== obj.uuid)
        state = [...newState, obj]
        return
      }
    },
    // Action to clear the cart and remove order from localStorage
    
// Error: Unexpected any. Specify a different type///
    
    removeOrderFromLocalStorage(state: any) {
      // Empty the cart in the Redux state
      state.length = 0;
      // Remove the cart details from localStorage
      localStorage.removeItem('cart');
    },
  },
})

export const { add, remove, subraction, addition, removeOrderFromLocalStorage } =
  cartSlice.actions

export default cartSlice.reducer