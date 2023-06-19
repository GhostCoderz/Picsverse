import React from "react";

export default function SearchBar() {
  return (
    <div>
      <h1 className="text-xl text-center">Search Image</h1>
        <form className="items-center justify-between mt-4 w-full text-center">
          <input
            type="text"
            className="p-2 mr-2 rounded text-slate-500 focus:text-black border-none w-80"
            placeholder="Universe"
          ></input>
          <button class="bg-sky-500 hover:bg-sky-700 p-2 rounded text-black font-medium">
            Search
          </button>
        </form>
    </div>
  );
}
