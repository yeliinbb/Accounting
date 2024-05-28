import { createSlice } from "@reduxjs/toolkit";

const filteredExpenseSlice = createSlice({
  name: "filteredExpense",
  initialState: { filtered: [] },
  reducers: {
    setFilteredExpense: (state, action) => {
      console.log("state.filtered => ", state.filtered);
      // console.log(state.filteredExpense.filtered);
      console.log("action.payload2 => ", action.payload);
      state.filtered = [action.payload, ...state.filtered];
    },
  },
});

export const { setFilteredExpense } = filteredExpenseSlice.actions;
export default filteredExpenseSlice.reducer;
