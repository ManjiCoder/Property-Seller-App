import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyArr: [],
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setPropertyArr: (state, action) => {
      state.propertyArr = action.payload;
    },
    viewMoreProperty: (state, action) => {
      state.propertyArr = [...state.propertyArr, action.payload];
    },
  },
});

export const { setPropertyArr, viewMoreProperty } = propertySlice.actions;

export default propertySlice.reducer;
