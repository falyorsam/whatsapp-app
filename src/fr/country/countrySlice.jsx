import { createSlice, createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";
// import url from "./../../data.json";
const url = "https://restcountries.com/v2/all";
// const url = "./../../data.json";
const initialState = {
  chats: [
    {
      name: "stk",
      messages: { messageText: "hi there", date: "20:12" },
      profilePic:
        "https://media-mad1-1.cdn.whatsapp.net/v/t61.24694-24/384829488_1403156006986203_1295683144394596301_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_ASC15tnG5Wu1a-ctxMiL0Yu4zitJKcGBUmymI3q4zwt2fw&oe=662A7F45&_nc_sid=e6ed6c&_nc_cat=107",
    },
    {
      name: "ausbildong",
      messages: {
        messageText: "hi there",
        date: "20:12",
      },
      profilePic:
        "https://media-mad1-1.cdn.whatsapp.net/v/t61.24694-24/384829488_1403156006986203_1295683144394596301_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_ASC15tnG5Wu1a-ctxMiL0Yu4zitJKcGBUmymI3q4zwt2fw&oe=662A7F45&_nc_sid=e6ed6c&_nc_cat=107",
    },
    {
      name: "alx community ",
      messages: { messageText: "hi there", date: "20:12" },
      profilePic:
        "https://media-mad1-1.cdn.whatsapp.net/v/t61.24694-24/384829488_1403156006986203_1295683144394596301_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_ASC15tnG5Wu1a-ctxMiL0Yu4zitJKcGBUmymI3q4zwt2fw&oe=662A7F45&_nc_sid=e6ed6c&_nc_cat=107",
    },
    {
      name: "ayoube",
      messages: { messageText: "hi there", date: "20:12" },
      profilePic:
        "https://media-mad1-1.cdn.whatsapp.net/v/t61.24694-24/384829488_1403156006986203_1295683144394596301_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_ASC15tnG5Wu1a-ctxMiL0Yu4zitJKcGBUmymI3q4zwt2fw&oe=662A7F45&_nc_sid=e6ed6c&_nc_cat=107",
    },
    {
      name: "alex",
      messages: { messageText: "hi there", date: "20:12" },
      profilePic:
        "https://media-mad1-1.cdn.whatsapp.net/v/t61.24694-24/384829488_1403156006986203_1295683144394596301_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_ASC15tnG5Wu1a-ctxMiL0Yu4zitJKcGBUmymI3q4zwt2fw&oe=662A7F45&_nc_sid=e6ed6c&_nc_cat=107",
    },
    {
      name: "belingham",
      messages: { messageText: "hi there", date: "20:12" },
      profilePic:
        "https://media-mad1-1.cdn.whatsapp.net/v/t61.24694-24/384829488_1403156006986203_1295683144394596301_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_ASC15tnG5Wu1a-ctxMiL0Yu4zitJKcGBUmymI3q4zwt2fw&oe=662A7F45&_nc_sid=e6ed6c&_nc_cat=107",
    },
    {
      name: "vini",
      messages: { messageText: "hi there", date: "20:12" },
      profilePic:
        "https://media-mad1-1.cdn.whatsapp.net/v/t61.24694-24/384829488_1403156006986203_1295683144394596301_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_ASC15tnG5Wu1a-ctxMiL0Yu4zitJKcGBUmymI3q4zwt2fw&oe=662A7F45&_nc_sid=e6ed6c&_nc_cat=107",
    },
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
