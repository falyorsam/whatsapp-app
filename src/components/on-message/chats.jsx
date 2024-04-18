import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MessageIcon from "../../assets/messages-icon/message-Icons";
const Chats = () => {
  const { chats } = useSelector((state) => state.country);
  return (
    <div className="w-full  ">
      {chats.map((e) => {
        return (
          <div
            className="w-full flex p-2.5
         text-white gap-5 pl-4 "
          >
            <img
              className="rounded-full"
              width={50}
              height={50}
              src={e.profilePic}
              alt={e.name}
            />
            <div className="w-[58%]">
              <h1>{e.name}</h1>
              <p className="text-sm flex gap-2 text-color-p">
                <MessageIcon />
                {e.messages.messageText}
              </p>
            </div>
            <p className="text-color-p text-xs">{e.messages.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
