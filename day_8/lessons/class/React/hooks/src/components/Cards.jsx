import React, { useState } from "react";

const Cards = ({ title, desc, rating, tags }) => {
  // use state
  const [show, setShow] = useState(false);


  // let show = true;
  const handleClick = () => {
    // console.log('clicked')
    setShow(!show);
  }


  return (
    <div className="rounded-lg shadow-md p-4 bg-white flex flex-col justify-between gap-y-4 items-start">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-slate-800 font-sans text-xl font-bold">{title}</h2>
        <p
          className={
            show
              ? "text-sm text-gray-600 "
              : "text-sm text-gray-600 line-clamp-2"
          }
        >
          {desc}
        </p>
      </div>

      <ul className="flex items-center gap-2 flex-wrap text-xs">
        <li className="px-3 py-1 rounded-md text-slate-900 text-semibold border border-slate-900">
          {rating}
        </li>
        {tags.map((tag) => (
          <li className="bg-slate-900 px-3 py-1 text-white  rounded">{tag}</li>
        ))}
      </ul>
      <button onClick={handleClick} className="focus:outline-offset-2 uppercase text-xs font-semibold inline-block text-white bg-slate-900 px-5 py-2 rounded-md shadow-sm hover:shadow-lg">
       Show {show ? "Less" : "More"} 
      </button>
    </div>
  );
};

export default Cards;
