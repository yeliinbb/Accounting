import { createSlice } from "@reduxjs/toolkit";

const filteredExpenseSlice = createSlice({
  name: "filteredExpense",
  initialState: { filtered: [] },
  reducers: {
    setFilteredExpense: (state, action) => {
      console.log("state.filtered2 => ", state.filtered);
      console.log("action.payload2 => ", action.payload);
      state.filtered = [...action.payload];
      // state.filtered.push(action.payload);
    },
  },
});

export const { setFilteredExpense } = filteredExpenseSlice.actions;
export default filteredExpenseSlice.reducer;
