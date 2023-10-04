import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./feature/property";

export const store = configureStore({
  reducer: {
    property: propertySlice,
  },
});
