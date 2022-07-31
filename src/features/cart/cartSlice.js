import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';



const url = "https://course-api.com/react-useReducer-cart-project"

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
}




export const getCartItems = createAsyncThunk('cart/getCartItems', async (_, thunkAPI) => {
  try {
    const response = await axios.get(url);
    console.log(thunkAPI.getState())
    return response.data;
  }
  catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})




const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      const target_id = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== target_id);
    },

    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },

    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      cartItem.amount = cartItem.amount == 1 ? 1 : cartItem.amount - 1;
    },

    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems && state.cartItems.forEach(item => {
        amount += item.amount;
        total += item.amount * item.price
      });

      state.amount = amount;
      state.total = total;
    }
  },

  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },

    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },

    [getCartItems.rejected]: (state, action) => {
      console.log(action.payload)
      state.isLoading = false;
    }
  }
})




// console.log(cartSlice)

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;


















// USING FETCH TO GET DATA







// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// const url = "https://course-api.com/react-useReducer-cart-project"

// const initialState = {
//   cartItems: [],
//   amount: cartItems.length,
//   total: 0,
//   isLoading: false,
// }




// export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
//   return fetch(url)
//     .then(res => res.json())
//     .catch(err => console.error(err))
// })




// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: initialState,
//   reducers: {
//     clearCart: (state) => {
//       state.cartItems = [];
//     },

//     removeItem: (state, action) => {
//       const target_id = action.payload;
//       state.cartItems = state.cartItems.filter(item => item.id !== target_id);
//     },

//     increase: (state, { payload }) => {
//       const cartItem = state.cartItems.find(item => item.id === payload.id);
//       cartItem.amount = cartItem.amount + 1;
//     },

//     decrease: (state, { payload }) => {
//       const cartItem = state.cartItems.find(item => item.id === payload.id);
//       cartItem.amount = cartItem.amount == 1 ? 1 : cartItem.amount - 1;
//     },

//     calculateTotals: (state) => {
//       let amount = 0;
//       let total = 0;

//       state.cartItems.forEach(item => {
//         amount += item.amount;
//         total += item.amount * item.price
//       });

//       state.amount = amount;
//       state.total = total;
//     }
//   },

//   extraReducers: {
//     [getCartItems.pending]: (state) => {
//       state.isLoading = true;
//     },

//     [getCartItems.fulfilled]: (state, action) => {
//       console.log(action);
//       state.isLoading = false;
//       state.cartItems = action.payload;
//     },

//     [getCartItems.rejected]: (state) => {
//       state.isLoading = false;
//     }
//   }
// })

// // console.log(cartSlice)

// export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

// export default cartSlice.reducer;




















