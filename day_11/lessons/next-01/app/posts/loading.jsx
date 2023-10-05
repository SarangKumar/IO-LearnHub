import React from "react";

const loading = () => {
  return (
    <div>
      <h1 className="h-16 w-full rounded bg-slate-200 mb-6"></h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {[1, 2, 3, 4, 5, 6, 7].map((d) => (
          <div className="w-full h-40 rounded bg-slate-200 flex justify-center items-center">
            <svg
              version="1.1"
              id="L9"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="w-8 h-8 animate-spin"
              viewBox="0 0 100 100"
              enable-background="new 0 0 0 0"
            >
              <path
                fill="#555"
                d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
              ></path>
            </svg>
          </div>
        ))}
      </section>
    </div>
  );
};

export default loading;
