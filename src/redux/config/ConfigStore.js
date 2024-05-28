import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "../slices/expenseSlice";
import monthFilteredSlice from "../slices/monthFilteredSlice";
import filteredExpenseSlice from "../slices/filteredExpenseSlice";

const store = configureStore({
  reducer: {
    expenseList: expenseSlice,
    monthFiltered: monthFilteredSlice,
    filteredExpense: filteredExpenseSlice,
  },
});
export default store;
