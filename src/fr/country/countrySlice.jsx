import { createSlice, createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";
// import url from "./../../data.json";
const url = "https://restcountries.com/v2/all";
// const url = "./../../data.json";
const initialState = {
  chats: [
    { name: "stk", messages: {}, profilePic: "" },
    { name: "ausbildong", messages: {}, profilePic: "" },
    { name: "alx community ", messages: {}, profilePic: "" },
    { name: "ayoube", messages: {}, profilePic: "" },
    { name: "alex", messages: {}, profilePic: "" },
    { name: "belingham", messages: {}, profilePic: "" },
    { name: "vini", messages: {}, profilePic: "" },
  ],
  searchToArrow: false,
};
const CountrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    HandleSearchToArrow: (state, { payload }) => {
      state.searchToArrow = payload;
    },
  },
});

export const { HandleSearchToArrow } = CountrySlice.actions;
export default CountrySlice.reducer;
