import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  userId: "TEST Kaka",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "light" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
