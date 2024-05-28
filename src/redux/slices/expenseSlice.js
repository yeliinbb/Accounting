import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값
const initialState = JSON.parse(localStorage.getItem("lists")) || [];

const expenseSlice = createSlice({
  name: "expenseList",
  initialState,
  reducers: {
    setExpenseList: (state, action) => {
      console.log("state0 => ", state);
      console.log("action.payload0 => ", action.payload);
      return [action.payload, ...state];
      // localStorage.setItem("lists", JSON.stringify(state));
    },
  },
});

export const { setExpenseList } = expenseSlice.actions;
export default expenseSlice.reducer;
