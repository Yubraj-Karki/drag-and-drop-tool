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
    styleComponent: (state, action) => {
      const component = state.items.find(
        (item) => item.id === action.payload.id
      );

      console.log(action, "action here");
      component && (component.style = action.payload.style);
    },
  },
});

export const { getUIElement, styleComponent } = counterSlice.actions;

export default counterSlice.reducer;
