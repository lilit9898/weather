import { createSlice } from "@reduxjs/toolkit";

const unitSlice = createSlice({
  name: "unit",
  initialState: "°C", // start with Celsius as default
  reducers: {
    setUnit: (state, action) => action.payload,
  },
});

export const { setUnit } = unitSlice.actions;

export default unitSlice.reducer;
