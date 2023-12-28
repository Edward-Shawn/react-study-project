import { configureStore, createSlice } from "@reduxjs/toolkit";

let id = createSlice({
  name: "id",
  initialState: [1, 2, 3],
});

let user = createSlice({
  name: "user",
  initialState: ["kim", "yung", "hyun"],
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "kim", count: 2 },
    { id: 1, name: "yeong", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    // id: id.reducer,
    // user: user.reducer,
    // stock: stock.reducer,
    cart: cart.reducer,
  },
});
