// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useRef, useEffect } from "react";
// import gsap from "gsap";

// export default function App() {
//   let app = useRef(null);
//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     // gsap.from(app, {
//     //   scrollTrigger: {
//     //     trigger: app,
//     //     start: "top center",
//     //     end: "bottom 80%",
//     //     scrub: true,
//     //     markers: true,
//     //   },
//     //   y: 100,
//     //   opacity: 0,
//     //   duration: 1,
//     // });

//     // let obj = { myNum: 10, myColor: "red" };
//     // gsap.to(obj, {
//     //   myNum: 200,
//     //   myColor: "blue",
//     //   onUpdate: () => console.log(obj.myNum, obj.myColor),
//     // });

//     gsap.fromTo(
//       [".heading", ".heading2"],
//       { opacity: 0, x: 0 },
//       { opacity: 1, xPercent: 50, scale: 2 }
//     );

//     gsap.from(".green", {
//       backgroundColor: "#8d3dae",
//     });

//     gsap.to(".green", {
//       rotation: 360,
//       duration: 1,
//     });
//     gsap.to(".purple", {
//       rotation: 360,
//       duration: 1,
//       delay: 1,
//     });
//     gsap.to(".blue", {
//       rotation: 360,
//       duration: 1,
//       delay: 2,
//     });

//     gsap.to(".box", {
//       stagger: {
//         base: 0,
//         amount: 0.2,
//         from: "center",
//       },
//     });
//     // gsap.to(".green", { rotation: 360, x: 100, duration: 1 });

//     // gsap.from(".purple", { rotation: -360, x: -100, duration: 1 });

//     // gsap.fromTo(".blue", { x: -100 }, { rotation: 360, x: 100, duration: 1 });
//   }, []);

//   return (
//     <section className="m-5 all" ref={(el) => (app = el)}>
//       <h1 className="inline-block text-center heading text-3xl opacity-100 font-bold underline mb-5">
//         Hero section
//       </h1>
//       <h2 className="heading2 font-semibold text-2xl inline-block">
//         Sub heading
//       </h2>

//       <div className="box">
//         <div className="green bg-green-500 rounded-md w-20 h-20"></div>
//         <div className="purple bg-purple-500 rounded-md w-20 h-20"></div>
//         <div className="blue bg-blue-500 rounded-md w-20 h-20"></div>
//       </div>

//       <div className="min-h-screen"></div>
//       <div className=" flex gap-20 flex-wrap allBox">
//         <div className="w-40 h-40 rounded bg-red-500"></div>
//         <div className="w-40 h-40 rounded bg-orange-500"></div>
//         <div className="w-40 h-40 rounded bg-fuchsia-500"></div>
//         <div className="w-40 h-40 rounded bg-blue-500"></div>
//         <div className="w-40 h-40 rounded bg-green-500"></div>
//       </div>
//       <div className="min-h-screen"></div>
//     </section>
//   );
// }


import React from 'react'
import Animation0 from './components/Animation0'

const App = () => {
  return (

    <div>
    <p className="text-sm">App component</p>
    <Animation0 />
    </div>
  )
}

export default App