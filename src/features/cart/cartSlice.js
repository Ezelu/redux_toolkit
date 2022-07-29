import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../components/cartItems';




const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: false,
}


const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
})

export default cartSlice.reducer;