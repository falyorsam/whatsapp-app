import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import countrySlice from "../../fr/country/countrySlice";
import { useSelector } from "react-redux";
import DefualtShow from "./defualt/DefualtShow";
import Nav from "../on-message/Nav";
import Search from "../on-message/Search";
import Chats from "../on-message/chats";

const main = () => {
  const { chats } = useSelector((state) => state.country);
  return (
    <div className=" w-full">
      <div className="flex">
        <div className="w-[45%] h-[100vh] chatsContainer  border-r-[1px] border-gray-700">
          <Nav />
          <Search />
          <Chats />
          {/* <Notification />
          <Archive />
          <MessagesContainer /> */}
        </div>
        <div className="w-[55%]  h-[100vh]  ">
          <DefualtShow />
          {/* {condition ? <DefualtShow /> : <TheChat />} */}
        </div>
      </div>
    </div>
  );
};

export default main;
