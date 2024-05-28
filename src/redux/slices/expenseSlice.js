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
    updateExpense: (state, action) => {
      const { id, date, item, amount, description } = action.payload;
      const updatedExpense = state.find((expense) => expense.id === id);
      console.log(action.payload);
      if (updatedExpense) {
        updatedExpense.date = date;
        updatedExpense.item = item;
        updatedExpense.amount = amount;
        updatedExpense.description = description;
      }
      // console.log(state);
      localStorage.setItem("lists", JSON.stringify(state));
    },
    deleteExpense: (state, action) => {
      const { id } = action.payload;
      const deletedExpense = state.find((expense) => expense.id === id);
      // if (deletedExpense) {
      //   return state.filter((expense) => expense.id !== id);
      // }
      const deletedExpenseLists = deletedExpense
        ? state.filter((expense) => expense.id !== id)
        : state;
      // console.log("deletedExpenseLists =>", deletedExpenseLists);
      localStorage.setItem("lists", JSON.stringify(deletedExpenseLists));
    },
  },
});

export const { setExpenseList, updateExpense, deleteExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
