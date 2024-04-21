import React from "react";
import { useSelector, useDispatch } from "react-redux";
import VideoIcon from "../../../assets/messages-icon/video-icon";
import SearchMIcon from "../../../assets/messages-icon/Search-m-icon";
import { Menu } from "../../../assets/Menu";
import ArrowDownIcon from "../../../assets/messages-icon/arrowDownIcon";
const NavChat = () => {
  const dispatch = useDispatch();
  const { chats, theLonelyChats } = useSelector((state) => state.country);
  console.log(theLonelyChats);
  return (
    <div className="flex justify-between  items-center nav-bg">
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
      <div className="flex   text-gray-600">
        <div className="pl-5 py-2 pr-3 flex items-center gap-2 rounded-full b border-c">
          <VideoIcon />
          <ArrowDownIcon />
        </div>
        <div className=" mx-5 py-2 ">
          <SearchMIcon />
        </div>
        <div className=" mr-2.5 py-2">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default NavChat;
