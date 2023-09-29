import React from "react";

const Search = ({setInput}) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="flex mb-3 outline-gray-800 outline-2 gap-x-3 justify-between">
        <div className="flex gap-3 flex-grow  w-full md:max-w-xl">
          <input
            onChange={handleChange}
            type="text"
            className="focus:outline-gray-800 focus:outline-offset-0 px-4 shadow py-2 focus:outline-none bg-white rounded flex-grow"
            placeholder="Search your posts"
          />
          <button className="shadow bg-gray-900 focus:outline-offset-2 text-white aspect-square h-10 flex justify-center items-center rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <span className="h-10 w-10 flex justify-center items-center border-slate-900 rounded border-[1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </span>
      </div>
      
    </>
  );
};

export default Search;
