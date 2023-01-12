import { createSlice } from "@reduxjs/toolkit";

let defaultState = {
  isOpen: false,
  items: [],
  totalQuantity: 0,
  isChanged: false,
};

let cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.isChanged = false;
    },
    changeView(state) {
      state.isOpen = !state.isOpen;
    },
    addItem(state, action) {
      let itemInArray = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemInArray) {
        itemInArray.quantity += 1;
        itemInArray.total += action.payload.price;
        state.totalQuantity++;
      } else {
        let newItem = {
          id: action.payload.id,
          title: action.payload.title,
          quantity: 1,
          total: action.payload.price,
          price: action.payload.price,
        };
        state.items.push(newItem);
        state.totalQuantity++;
      }
      state.isChanged = true;
    },
    decrease(state, action) {
      let item = state.items.find((el) => el.id === action.payload.id);
      if (item.quantity === 1) {
        state.items = state.items.filter((el) => el.id !== item.id);
      } else {
        item.quantity -= 1;
      }
      item.total -= action.payload.price;
      state.totalQuantity -= 1;
      state.isChanged = true;
    },
  },
});

export default cartSlice;
