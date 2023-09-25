import React from "react";

function Card({title, description}) {
  return (
    <div className="inline-block w-52">
      <div className="w-full rounded-md mb-1">
        <img
          className="w-full object-cover rounded-md"
          src="https://i.ytimg.com/vi/2Vv-BfVoq4g/maxresdefault.jpg"
          alt="Heeriye Mashup | Suraj Shertukde | Dooriyan Mashup 2 [Bollywood]"
        />
      </div>
      <p className="font-semibold line-clamp-2 text-sm">{title}</p>
      <p className="line-clamp-1 text-xs text-gray-300">{description}</p>
    </div>
  );
}

export default Card;
