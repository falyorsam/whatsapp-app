import React from "react";
import { CommunityOutline } from "../../assets/community-outline";
import StatusOutline from "../../assets/status-outline";
import { NewChatOutline } from "../../assets/NewChatOutline";
import { NewsletterOutline } from "../../assets/NewsletterOutline";
import { Menu } from "../../assets/Menu";

const Nav = () => {
  const handleClick = (e) => {
    const element = e.currentTarget;
    element.classList.add("fucose-nav-icons");
    setTimeout(() => {
      element.classList.remove("fucose-nav-icons");
    }, 100);
  };
  return (
    <div className="flex items-center  nav-bg px-4 py-2.5 pr-4 justify-between">
      <div className=" flex items-center">
        <img
          className="rounded-full"
          width={40}
          height={40}
          src="https://media-mad1-1.cdn.whatsapp.net/v/t61.24694-24/384829488_1403156006986203_1295683144394596301_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_ASC15tnG5Wu1a-ctxMiL0Yu4zitJKcGBUmymI3q4zwt2fw&oe=662A7F45&_nc_sid=e6ed6c&_nc_cat=107"
          alt="your profile img"
        />
      </div>
      <div
        className="flex flex-1 justify-end 
          nav-icons-color "
      >
        <span onClick={handleClick} className="p-2 rounded-full">
          <CommunityOutline />
        </span>
        <span onClick={handleClick} className="p-2 rounded-full">
          <StatusOutline />
        </span>
        <span onClick={handleClick} className="p-2 rounded-full">
          <NewsletterOutline />
        </span>
        <span onClick={handleClick} className="p-2 rounded-full">
          <NewChatOutline />
        </span>
        <span onClick={handleClick} className="p-2 rounded-full ">
          <Menu />
        </span>
      </div>
    </div>
  );
};

export default Nav;
