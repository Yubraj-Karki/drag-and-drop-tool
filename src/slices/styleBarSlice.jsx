import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  style: [],
};

export const styleBarSlice = createSlice({
  name: "styleBarSlice",
  initialState,
  reducers: {
    addStyle: (state, action) => {
      state.style = action.payload;
    },
  },
});

export const { addStyle } = styleBarSlice.actions;

export default styleBarSlice.reducer;
