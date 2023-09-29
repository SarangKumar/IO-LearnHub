
import React from "react";
import Animation0 from "./components/Animation0";
import Animation1 from "./components/Animation1";
import Animation2 from "./components/Animation2";
import Animation3 from "./components/Animation3";
import Animation4 from "./components/Animation4";

const App = () => {
  return (
    <div className="m-2 md:m-8">
      <p className="text-sm">App component</p>
      <Animation0 />
      <div className="h-[10vh]"></div>
      <Animation1 />
      <div className="h-[10vh]"></div>
      <Animation2 />
      <div className="h-[10vh]"></div>
      <Animation3 />
      <div className="h-[10vh]"></div>
      <Animation4 />
      <div className="h-[10vh]"></div>
    </div>
  );
};

export default App;
