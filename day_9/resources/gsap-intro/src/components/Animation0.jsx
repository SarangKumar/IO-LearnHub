import gsap from "gsap";
import React, { useLayoutEffect } from "react";

const Animation0 = () => {
  useLayoutEffect(() => {
    gsap.to(".heading", { y: -20 });
  }, []);
  return (
    <>
      <p className="text-sm">Animation0</p>
      <h1 className="heading mt-5 font-semibold text-xl text-teal-500">Animation0</h1>
    </>
  );
};

export default Animation0;
