import React from "react";
import { useSelector, useDispatch } from "react-redux";
const NavChat = () => {
  const dispatch = useDispatch();
  const { chats, theLonelyChats } = useSelector((state) => state.country);
  console.log(theLonelyChats);
  return (
    <div className="flex  nav-bg">
      <div className="flex items-center">
        <img
          className="rounded-full m-2.5"
          src={theLonelyChats[0].profilePic}
          alt={theLonelyChats[0].name}
          width={45}
          height={45}
        />
        <h1 className="text-nowrap text-white font-semibold text-base">
          {theLonelyChats[0].name}
        </h1>
      </div>
      <div className="flex">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default NavChat;
