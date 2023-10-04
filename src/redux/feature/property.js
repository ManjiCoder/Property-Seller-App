import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyArr: [],
  isAllPropertyLoaded: false,
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setPropertyArr: (state, action) => {
      state.propertyArr = action.payload;
    },
    viewMoreProperty: (state, action) => {
      let n = state.propertyArr.length;
      let numberOfProperty = 3;
      let newProperty = action.payload;

      // For when all json data is loaded
      if (newProperty.length <= n + numberOfProperty) {
        if (newProperty.length !== n) {
          state.propertyArr = action.payload;
        }
        state.isAllPropertyLoaded = true;
      } else {
        newProperty = newProperty.slice(0, n + numberOfProperty);
        console.log(newProperty, n);
        state.propertyArr = state.propertyArr.concat(
          ...newProperty.slice(-numberOfProperty)
        );
      }
    },
  },
});

export const { setPropertyArr, viewMoreProperty } = propertySlice.actions;

export default propertySlice.reducer;
