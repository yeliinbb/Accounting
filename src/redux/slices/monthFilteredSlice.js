import { createSlice } from "@reduxjs/toolkit";

const monthFilteredSlice = createSlice({
  name: "monthFiltered",
  initialState: 0,
  reducers: {
    setMonth: (state = initialState, action) => {
      //   console.log(state.monthFiltered);
      // console.log("action.payload1 => ", action.payload);
      return action.payload;
    },
  },
});

export const { setMonth } = monthFilteredSlice.actions;
export default monthFilteredSlice.reducer;
