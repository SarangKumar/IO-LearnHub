import gsap from "gsap";
import React, { useLayoutEffect } from "react";

const Animation0 = () => {
  useLayoutEffect(() => {
    gsap.to(".heading", { y: -20 });
  }, []);
  return (
    <>
      <p className="text-sm text-white font-bold bg-blue-500 px-5 py-2 rounded my-2">
        Animation0
      </p>

      <h1 className="heading mt-5 font-semibold text-xl text-teal-500">
        Animation0
      </h1>
    </>
  );
};

export default Animation0;
