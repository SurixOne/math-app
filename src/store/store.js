import { configureStore } from "@reduxjs/toolkit";
import operationsReducer from "./operations";

const store = configureStore({
  reducer: { operations: operationsReducer },
});

export default store;
