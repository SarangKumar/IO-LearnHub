import React from "react";

function Card({title, desc}) {
  return (
    <div className="inline-block w-52">
      <div className="w-full rounded-md mb-1">
      {name}
        <img
          className="w-full object-cover rounded-md"
          src="/img/sample1.jpg"
          alt="Heeriye Mashup | Suraj Shertukde | Dooriyan Mashup 2 [Bollywood]"
        />
      </div>
      <p className="font-semibold line-clamp-2 text-sm">{title}</p>
      <p className="line-clamp-1 text-xs text-gray-300">{desc}</p>
    </div>
  );
}

export default Card;
