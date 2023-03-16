import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  userId: "6371251df03239e680000033",
};

export const globalSlice = createSlice({
  name: " global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
