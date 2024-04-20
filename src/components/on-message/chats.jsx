import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MessageIcon from "../../assets/messages-icon/message-Icons";
import { handleTheLonelyChat } from "../../fr/country/countrySlice";
const Chats = () => {
  const dispatch = useDispatch();
  const { chats, theLonelyChats } = useSelector((state) => state.country);

  return (
    <div className="w-full  ">
      {chats.map((e) => {
        return (
          <div
            onClick={() => {
              const theLonelyChat = chats.filter((data) => data.name == e.name);
              dispatch(handleTheLonelyChat(theLonelyChat));
            }}
            className="w-full flex pt-2.5
          
         text-white gap-5 pl-4 pb-0  HoverMe cursor-pointer "
          >
            <img
              className="rounded-full mb-2.5"
              width={50}
              height={50}
              src={e.profilePic}
              alt={e.name}
            />
            <div className=" border-b-[0.5px] border-b-gray-700 flex w-full justify-between">
              <div className="w-[58%]">
                <h1>{e.name}</h1>
                <p className="text-sm flex gap-2 text-color-p">
                  <MessageIcon />
                  {e.messages.messageText}
                </p>
              </div>
              <p className="text-color-p  text-xs mr-5  ">{e.messages.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
