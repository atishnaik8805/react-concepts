import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    addByNumber(state, action) {
      alert(action.payload.addValue);
      state.counter += action.payload.addValue;
    }
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice;
