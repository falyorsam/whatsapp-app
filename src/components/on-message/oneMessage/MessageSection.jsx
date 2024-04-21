import React from "react";
import { useSelector, useDispatch } from "react-redux";
const MessageSection = () => {
  const dispatch = useDispatch();
  const { chats, theLonelyChats } = useSelector((state) => state.country);

  return (
    <div className="h-[85vh]  img-bg text-gray-200  text-sm ">
      {theLonelyChats[0].messages.mgs.map((e) => {
        if (e.id === "brahim") {
          console.log("brahim");
          return (
            <div className="flex w-full justify-end ">
              <div className="text-convo-bg max-w-[85%] p-1.5  pr-10 rounded-[5px] m-5 my-2 flex relative ">
                <div>{e.messageText}</div>
                <p className="absolute bottom-1 right-1 text-xs text-gray-400">
                  {e.date}
                </p>
              </div>
            </div>
          );
        } else if (e.id === "newGuy") {
          console.log("newgy");
          return <div className="flex justify-start"> {e.messageText} </div>;
        }
      })}
    </div>
  );
};

export default MessageSection;
