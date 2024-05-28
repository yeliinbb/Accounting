import { createSlice } from "@reduxjs/toolkit";

const monthFilteredSlice = createSlice({
  name: "monthFiltered",
  initialState: parseInt(localStorage.getItem("filteredByMonth")),
  reducers: {
    setMonth: (state, action) => {
      // console.log("action.payload1 => ", action.payload);
      return action.payload;
    },
  },
});

export const { setMonth } = monthFilteredSlice.actions;
export default monthFilteredSlice.reducer;
