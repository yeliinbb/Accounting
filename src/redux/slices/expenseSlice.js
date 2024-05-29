import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값
const initialState = JSON.parse(localStorage.getItem("lists")) || [];

const expenseSlice = createSlice({
  name: "expenseList",
  initialState,
  reducers: {
    // setExpenseList: (state, action) => {
    //   // console.log("state0 => ", state);
    //   // console.log("action.payload0 => ", action.payload);
    //   return [...action.payload];
    // },
    addExpense: (state, action) => {
      state.unshift(action.payload);
      localStorage.setItem("lists", JSON.stringify(state));
      // const add = [action.payload, ...state];
      // localStorage.setItem("lists", JSON.stringify(add));
      // return add
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
      localStorage.setItem("lists", JSON.stringify(state));
    },
    deleteExpense: (state, action) => {
      const { id } = action.payload;
      const deletedExpense = state.find((expense) => expense.id === id);
      const deletedExpenseLists = deletedExpense
        ? state.filter((expense) => expense.id !== id)
        : state;
      localStorage.setItem("lists", JSON.stringify(deletedExpenseLists));
      return [...deletedExpenseLists];
    },
    filterExpense: (state, action) => {
      const filtered = state.filter(
        (expense) => new Date(expense.date).getMonth() === action.payload
      );
      state = [...filtered];
    },
  },
});

export const {
  setExpenseList,
  updateExpense,
  deleteExpense,
  filterExpense,
  addExpense,
} = expenseSlice.actions;
export default expenseSlice.reducer;
