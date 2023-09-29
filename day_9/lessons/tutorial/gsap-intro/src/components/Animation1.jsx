import gsap from "gsap";
import React, { useLayoutEffect } from "react";

const Animation1 = () => {
  useLayoutEffect(() => {
    gsap.to(".red-to", { x: 200, delay: 1 });
    gsap.from(".red-from", { x: 200, delay: 1 });
    gsap.set(".red-set", { x: 200, delay: 1 });
    gsap.fromTo(".red-fromTo", { x: 200, delay: 1 }, { x: 100, delay: 1 });
  }),
    [];
  return (
    <div>
      <p className="text-sm text-white font-bold bg-blue-500 px-5 py-2 rounded my-2">
        Animation 1
      </p>

      <div className="space-y-5">
        <section className="flex mx-5">
          <div>
            <div className="relative h-20 w-20 rounded-full border-slate-400 border border-dashed">
              <div className="red-to absolute bg-red-600 h-full w-full rounded-full"></div>
            </div>
            <div className="flex divide-x-2 text-xs font-medium text-cente">
              <span className="px-2 text-slate-800">gap.to method</span>
              <p className="px-2 text-gray-500 font-mono">{`gsap.to(".red-to", { x: 200, delay: 1 });`}</p>
            </div>
          </div>
        </section>

        <section className="flex mx-5">
          <div>
            <div className="relative h-20 w-20 rounded-full border-slate-400 border border-dashed">
              <div className="red-from absolute bg-red-600 h-full w-full rounded-full"></div>
            </div>
            <div className="flex divide-x-2 text-xs font-medium text-cente">
              <span className="px-2 text-slate-800">gap.from method</span>
              <p className="px-2 text-gray-500 font-mono">{`gsap.from(".red-set", { x: 200, delay: 1 })`}</p>
            </div>
          </div>
        </section>

        <section className="flex mx-5">
          <div>
            <div className="relative h-20 w-20 rounded-full border-slate-400 border border-dashed">
              <div className="red-fromTo absolute bg-red-600 h-full w-full rounded-full"></div>
            </div>
            <div className="flex divide-x-2 text-xs font-medium text-cente">
              <span className="px-2 text-slate-800">gap.set method</span>
              <p className="px-2 text-gray-500 font-mono">{`  gsap.fromTo(".red-fromTo", { x: 200, delay: 1 }, { x: 100, delay: 1 });`}</p>
            </div>
          </div>
        </section>

        <section className="flex mx-5">
          <div>
            <div className="relative h-20 w-20 rounded-full border-slate-400 border border-dashed">
              <div className="red-set absolute bg-red-600 h-full w-full rounded-full"></div>
            </div>
            <div className="flex divide-x-2 text-xs font-medium text-cente">
              <span className="px-2 text-slate-800">gap.set method</span>
              <p className="px-2 text-gray-500 font-mono">{`gsap.set(".red-set", { x: 200 })`}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Animation1;
