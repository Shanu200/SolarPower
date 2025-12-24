import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedHomeTab: "all",
};

const uiSlice = createSlice({
  name: "ui",
  initialState, // ✅ use the defined initialState
  reducers: {
    switchHomeTab: (state, action) => {
      state.selectedHomeTab = action.payload; // ✅ correct update
    },
  },
});

export const { switchHomeTab } = uiSlice.actions;
export default uiSlice.reducer;
