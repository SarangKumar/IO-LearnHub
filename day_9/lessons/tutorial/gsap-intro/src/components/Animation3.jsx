import React, { useLayoutEffect } from "react";
import gsap from "gsap";

const Animation3 = () => {
  useLayoutEffect(() => {
    // create a timeline
    let tl = gsap.timeline();

    // add the tweens to the timeline - Note we're using tl.from not gsap.from
    tl.to("#heading", { y: -20, opacity: 1, duration: 0.5 });
    tl.to("#subheading", { y: -20, opacity: 1, duration: 0.5 });
    tl.to(".para", { y: -20, opacity: 1, duration: 0.5 });
  }, []);
  return (
    <div>
      <p className="text-sm text-white font-bold bg-blue-500 px-5 py-2 rounded my-2">
        Animation 3
      </p>

      <p className="text-sm my-3 text-blue-500 rounded border border-blue-300 inline-block px-4 py-1 border-dashed font-semibold">
        Timeline
      </p>

      <section className="flex gap-2 flex-col md:flex-row">
        <div className="">
          <h1 id="heading" className="opacity-0 mt-3 text-xl font-bold">
            Heading
          </h1>
          <h2 id="subheading" className="opacity-0 mt-3 text-lg font-semibold">
            Sub heading
          </h2>
          <p className="opacity-0 mt-3 para text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
            odio ut sem nulla pharetra. Dignissim enim sit amet venenatis urna.
            Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.
            Pulvinar etiam non quam lacus suspendisse faucibus. At elementum eu
            facilisis sed odio morbi. At consectetur lorem donec massa. Morbi
            non arcu risus quis varius quam quisque id. Cursus risus at ultrices
            mi tempus. Nibh mauris cursus mattis molestie a iaculis at erat
            pellentesque. Nisi est sit amet facilisis. Quam quisque id diam vel
            quam. Tristique senectus et netus et malesuada fames ac. Aliquam
            malesuada bibendum arcu vitae elementum curabitur. Sapien et ligula
            ullamcorper malesuada proin libero nunc.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Animation3;
