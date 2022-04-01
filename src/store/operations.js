import { createSlice } from "@reduxjs/toolkit";
import { operationTypes } from "../constants/constants";

export const operationsSelector = (state) => state.operations;

const initialOperationsState = [];

const operationsSlice = createSlice({
  name: "operations",
  initialState: initialOperationsState,
  reducers: {
    addOperation(state, action) {
      state.unshift(action.payload);
    },
    removeOperation(state, action) {
      console.log(state.operations);
      state.splice(action.payload, 1);
    },
  },
});

export const operationsActions = operationsSlice.actions;

export default operationsSlice.reducer;
