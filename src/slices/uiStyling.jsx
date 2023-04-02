import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  styles: [],
};

export const uiStyleSlice = createSlice({
  name: "uiStyling",
  initialState,
  reducers: {
    styleUi: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { styleUi } = uiStyleSlice.actions;

export default uiStyleSlice.reducer;
