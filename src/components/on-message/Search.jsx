import React from "react";
import { SearchIcon } from "../../assets/input-icons/SearchIcon";
import { HaramM9lob } from "../../assets/input-icons/HaramM9lob";
import { useDispatch, useSelector } from "react-redux";
import { HandleSearchToArrow } from "../../fr/country/countrySlice";
import { RightArrow } from "../../assets/input-icons/RightArrow";
const Search = () => {
  const dispatch = useDispatch();
  const { searchToArrow } = useSelector((state) => state.country);

  return (
    <div className="  px-2.5 py-2 flex items-center gap-2 relative">
      {searchToArrow ? (
        <div
          className=" first-one iconSearch-color absolute left-5 top-3.5"
          onClick={(e) => {
            dispatch(HandleSearchToArrow(!searchToArrow));
            e.currentTarget.classList.add("animation-Search-bar");

            console.log(e.currentTarget);
            setTimeout(() => {
              e.currentTarget.classList.remove("animation-Search-bar");
            }, 500);
          }}
        >
          {" "}
          <SearchIcon />
        </div>
      ) : (
        <div
          className=" second-one iconSearch-color absolute left-5 top-3.5"
          onClick={(e) => {
            dispatch(HandleSearchToArrow(!searchToArrow));
            e.currentTarget.classList.add("animation-Search-bar");

            setTimeout(() => {
              e.currentTarget.classList.remove("animation-Search-bar");
            }, 500);
          }}
        >
          {" "}
          <RightArrow />
        </div>
      )}
      <input
        placeholder="Search"
        className="input-bg rounded-lg w-full pl-16 pr-8 py-2 text-white font-light flex justify-center items-center text-sm"
        type="text"
        onChange={(e) => {
          console.log(e.currentTarget.value);
        }}
      />
      <div className="iconSearch-color">
        <HaramM9lob />
      </div>
    </div>
  );
};

export default Search;
