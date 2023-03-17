import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  userId: "6371251df03239e680000033",
  text: "signin"
  
};

export const globalSlice = createSlice({
  name: " global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

    setShowText: (state) => {
      state.text = state.text === "signin" ? "login" : "signin";
    },
  },
});

export const { setMode, setShowText } = globalSlice.actions;

export default globalSlice.reducer;
