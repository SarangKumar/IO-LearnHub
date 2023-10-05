import React, { Children } from "react";

const layout = ({ children }) => {
  return (
    <div className="bg-slate-300 rounded p-2 flex">
      
      <div className="p-3 w-full bg-slate-500 text-white">
        Layout content
      </div>
      <main className="p-3 w-full">{children}</main>
    </div>
  );
};

export default layout;
