import React, { useLayoutEffect } from "react";
import gsap from "gsap";

const Animation2 = () => {
  useLayoutEffect(() => {
    gsap.to("#css-box", {
      duration: 2,
      x: 300,
      rotation: 360,
      backgroundColor: "#8d3dae",
    });

    // duration
    gsap.to("#duration-1", {
      opacity: 1,
      rotate: 360,
    });
    gsap.to("#duration-2", {
      opacity: 1,
      duration: 1,
      rotate: 360,
    });
    gsap.to("#duration-3", {
      opacity: 1,
      duration: 2,
      rotate: 360,
    });

    gsap.to("#delay-1", {
      rotate: 360,
    });
    gsap.to("#delay-2", {
      rotate: 360,
      delay: 0.5,
    });
    gsap.to("#delay-3", {
      rotate: 360,
      delay: 1,
    });


    // repeat
    gsap.to("#repeat-1", {
      rotate: 360,
      delay: 1
    });
    gsap.to("#repeat-2", {
      rotate: 360,
      repeatDelay: 1,
      repeat: 2
    });
    gsap.to("#repeat-3", {
      rotate: 360,
      repeatDelay: 1,
      repeat: -1
    });

    // ease
    gsap.to("#ease-1", {
      rotate: 360,
      x: 50,
      duration: 1.5,
    });
    gsap.to("#ease-2", {
      rotate: 360,
      x: 50,
      ease: "power1.in",
      duration: 1.5,
    });
    gsap.to("#ease-3", {
      rotate: 360,
      duration: 1.5,
      x: 50,
      ease: "power2.out"
    });
    gsap.to("#ease-4", {
      rotate: 360,
      duration: 1.5,
      x: 50,
      ease: "bounce.out"
    });

    // yoyo
    gsap.to("#yoyo-1", {
       opacity: 1,
       x: 100,
       repeat: 2, 
    })
    gsap.to("#yoyo-2", {
       opacity: 1,
       x: 100,
       yoyo: true,
       repeat: 2, 
    })
  }, []);
  return (
    <div>
      <p className="text-sm my-3 text-white font-bold bg-blue-500 px-5 py-2 rounded">
        Animation 2
      </p>

      <section className="my-2">
        <p className="text-sm text-blue-500 rounded border border-blue-300 inline-block px-4 py-1 border-dashed font-semibold">
          CSS Animation
        </p>

        <div className="">
          <div
            id="css-box"
            className="w-20 h-20 text-center rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
          >
            .css-box
          </div>
        </div>
        <pre className="text-xs font-medium text-slate-600">
          {`gsap.to("#css-box", {
  duration: 2,
  x: 200,
  rotation: 360,
  backgroundColor: "#8d3dae",
});`}
        </pre>
      </section>

      <section className="my-2">
        <p className="text-sm my-3 text-blue-500 rounded border border-blue-300 inline-block px-4 py-1 border-dashed font-semibold">
          Duration Property
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div>
            <div
              id="duration-1"
              className="text-center w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              duration: default
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#duration-1", {
  opacity: 1,
  rotate: 360,
});`}
            </pre>
          </div>

          <div>
            <div
              id="duration-2"
              className="text-center w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              duration: 1
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#duration-2", {
  opacity: 1,
  duration: 1,
  rotate: 360
});`}
            </pre>
          </div>

          <div>
            <div
              id="duration-3"
              className="text-center w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              duration: 2
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`    
gsap.to("#duration-3", {
  opacity: 1,
  duration: 2,
  rotate: 360,
});`}
            </pre>
          </div>
        </div>
      </section>

      <section>
        <p className="text-sm my-3 text-blue-500 rounded border border-blue-300 inline-block px-4 py-1 border-dashed font-semibold">
          Delay Property
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div>
            <div
              id="delay-1"
              className="text-center w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              delay: default
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#delay-1", {
  rotate: 360,
});`}
            </pre>
          </div>
          <div>
            <div
              id="delay-2"
              className="text-center w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              delay: 0.5
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#delay-2", {
  rotate: 360,
  delay: 0.5,
});`}
            </pre>
          </div>
          <div>
            <div
              id="delay-3"
              className="text-center w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              delay: 0.5
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#delay-3", {
  rotate: 360,
  delay: 1,
});`}
            </pre>
          </div>
        </div>
      </section>

      
      <section>
        <p className="text-sm my-3 text-blue-500 rounded border border-blue-300 inline-block px-4 py-1 border-dashed font-semibold">
          Repeat Property
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div>
            <div
              id="repeat-1"
              className="text-center w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              repeat: default
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#delay-1", {
  rotate: 360,
});`}
            </pre>
          </div>
          <div>
            <div
              id="repeat-2"
              className="text-center w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              repeat: 2
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#delay-2", {
  rotate: 360,
  repeatDelay: 1,
});`}
            </pre>
          </div>
          <div>
            <div
              id="repeat-3"
              className="text-center w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              repeat: -1
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#delay-3", {
  rotate: 360,
  repeatDelay: 1,
});`}
            </pre>
          </div>
        </div>
      </section>


      <section>
        <p className="text-sm my-3 text-blue-500 rounded border border-blue-300 inline-block px-4 py-1 border-dashed font-semibold">
          Ease Property
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
          <div>
            <div
              id="ease-1"
              className="text-center w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              ease: default
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#ease-1", {
  rotate: 360,
  x: 50
});`}
            </pre>
          </div>
          <div>
            <div
              id="ease-2"
              className="text-center w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              ease: "none"
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#ease-2", {
  rotate: 360,
  delay: 0.5,
});`}
            </pre>
          </div>
          <div>
            <div
              id="ease-3"
              className="text-center w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              ease: "linear"
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#ease-3", {
  rotate: 360,
  delay: 1,
});`}
            </pre>
          </div>
          <div>
            <div
              id="ease-4"
              className="text-center w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              ease: "linear"
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#ease-4", {
  rotate: 360,
  delay: 1,
});`}
            </pre>
          </div>
        </div>
      </section>


      <section>
        <p className="text-sm my-3 text-blue-500 rounded border border-blue-300 inline-block px-4 py-1 border-dashed font-semibold">
          Yoyo Property (works with repeat)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <div
              id="yoyo-1"
              className="text-center opacity-0 w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              yoyo: default
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#yoyo-1", {
  rotate: 360,
  opacity: 1
});`}
            </pre>
          </div>
          <div>
            <div
              id="yoyo-2"
              className="text-center  opacity-0 w-20 h-20 rounded bg-blue-400 text-xs font-semibold font-mono text-white flex justify-center items-center"
            >
              yoyo: true
            </div>
            <pre className="text-xs font-medium text-slate-600">
              {`
gsap.to("#yoyo-2", {
  rotate: 360,
  opacity: 1
  yoyo: true
});`}
            </pre>
          </div>
          
        </div>
      </section>


    </div>
  );
};

export default Animation2;
