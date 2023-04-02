import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const counterSlice = createSlice({
  name: "uiElement",
  initialState,
  reducers: {
    getUIElement: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { getUIElement } = counterSlice.actions;

export default counterSlice.reducer;
