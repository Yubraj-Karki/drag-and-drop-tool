import { configureStore } from "@reduxjs/toolkit";
import uiElementReducer from "../slices/uiElement";
import uiStylingReducer from "../slices/uiStyling";
import styleBarSliceReducer from "../slices/styleBarSlice";
// import { styleUi } from "../slices/uiStyling";

export const store = configureStore({
  reducer: {
    uiElement: uiElementReducer,
    uiStyling: uiStylingReducer,
    styleBarSlice: styleBarSliceReducer,
  },
});

// // Dispatch the styleUi action to update the style at index 0 with a new color value
// store.dispatch(styleUi({ index: 0, property: "color", value: "red" }));

// // Get the updated style array from the Redux store
// const styleArray = store.getState().uiStyle.style;
// console.log(styleArray);
