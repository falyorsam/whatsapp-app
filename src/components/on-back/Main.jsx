import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import countrySlice from "../../fr/country/countrySlice";
import { useSelector } from "react-redux";
import DefualtShow from "./defualt/DefualtShow";
import Nav from "../on-message/Nav";
import Search from "../on-message/Search";
import Chats from "../on-message/chats";
import OneMessage from "../on-message/oneMessage/OneMessage";
const main = () => {
  const { chats, LonelyChatsTrigger } = useSelector((state) => state.country);
  return (
    <div className=" w-full">
      <div className="flex">
        <div className="w-[45%] h-[100vh] chatsContainer  border-r-[1px] border-gray-700">
          <Nav />
          <Search />
          <Chats />
        </div>
        <div className="w-[55%]  h-[100vh]  ">
          {LonelyChatsTrigger ? <OneMessage /> : <DefualtShow />}
        </div>
      </div>
    </div>
  );
};

export default main;
