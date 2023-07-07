/*import { createStore } from "redux";

const reducer = (state = { counter: 0 }, action) => {
  // It needs to be a synchrounous function,
  // Should not mutatte the original state
  //alert("here");
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC":
      return { ...state, counter: state.counter - 1 };
    case "ADD":
      return { ...state, counter: state.counter + action.payload.addValue };
    default:
    //throw new Error("No such action type");
  }

  return state;
};

const store = createStore(reducer);

export default store;
*/
//Using the redux toolkit
import { configureStore, createSlice } from "@reduxjs/toolkit";

//Slices
import authSlice from "./authSlice";
import counterSlice from "./counterSlice";

//export const actions = counterSlice.actions;

const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

export default store;
