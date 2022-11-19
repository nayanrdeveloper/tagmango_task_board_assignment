import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

function SearchInput() {
  return (
    <div>
      <div className="relative w-40">
        <input
          type="search"
          id="default-search"
          className="block w-72 p-2 pr-10 text-sm text-gray-900 border border-transparent rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-light-white-2"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-[-95px] flex items-center pl-3 pointer-events-none">
          <BiSearchAlt2 className="w-5 h-5 opacity-30" />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
