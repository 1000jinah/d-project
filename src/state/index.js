import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  userId: "6371251df03239e680000033",
  text: "signin",
  message: true,
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
    setMessage: (state) => {
      state.message = state.message === false ? true : false;
    },
  },
});

export const { setMode, setShowText, setMessage } = globalSlice.actions;

export default globalSlice.reducer;
