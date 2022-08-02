import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   User: [],
  isEdit: [],
  
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Add: (state, action) => {
      state.User.push(action.payload);
    }}
  });
  export const { Add} = counterSlice.actions;
  
  export default counterSlice.reducer;