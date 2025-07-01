import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartitem: [],
  cartslider: false,
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartitem.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        const total = existingItem.quantity * existingItem.price;

        if (total >= 5000 && !existingItem.discountApplied) {
          existingItem.discount = total * 0.1;
          existingItem.discountApplied = true;
        }
      } else {
        const quantity = newItem.quantity || 1;
        const total = newItem.price * quantity;
        const discount = total >= 5000 ? total * 0.1 : 0;

        state.cartitem.push({
          ...newItem,
          quantity,
          discount,
          discountApplied: discount > 0,
        });
      }
    },

    increaseQuantity(state, action) {
      state.cartitem = state.cartitem.map(item => {
        if (item.id === action.payload) {
          item.quantity++;
          const total = item.quantity * item.price;

          if (total >= 5000 && !item.discountApplied) {
            item.discount = total * 0.1;
            item.discountApplied = true;
          }
        }
        return item;
      });
    },

    decreaseQuantity(state, action) {
      state.cartitem = state.cartitem
        .map(item => {
          if (item.id === action.payload) {
            item.quantity--;

            const total = item.quantity * item.price;
            if (total < 5000) {
              item.discount = 0;
              item.discountApplied = false;
            }
          }
          return item;
        })
        .filter(item => item.quantity > 0);
    },

    removeProduct(state, action) {
      state.cartitem = state.cartitem.filter(item => item.id !== action.payload);
    },

    carttoogle(state, action) {
      state.cartslider = action.payload;
    },

    clearCart(state) {
      state.cartitem = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
    addtocart,
    carttoogle,
    decreaseQuantity,
    increaseQuantity,
    removeProduct,
    clearCart,
  } = cartslice.actions;
  

export default cartslice.reducer;
