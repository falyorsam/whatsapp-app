import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavChat from "./NavChat";
import MessageSection from "./MessageSection";
import TalkingMessagePart from "./TalkingMessagePar";
const OneMessage = () => {
  const { chats, theLonelyChats } = useSelector((state) => state.country);
  return (
    <div className="w-full">
      <NavChat />
      <MessageSection />
      <TalkingMessagePart />
    </div>
  );
};

export default OneMessage;
