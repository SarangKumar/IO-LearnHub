import React from "react";
import Cards from "./components/Cards";

// const postData = [
//   {
//     title: "CardTtiel",
//     desc: "lorem ipsum dolor sit amet",
//     rating: 5,
//     tags: ["tag 1", "tag 2", "tag 3"],
//   },
//   {
//     title: "CardTtiel 3",
//     desc: "lorem ipsum dolor sit amet",
//     rating: 4.5,
//     tags: ["tag 1", "tag 2", "tag 3", "tag 4"],
//   },
// ];

// hooks, -> useState, useEffect, useRef

const postData = async () => {
  const posts = await fetch('https://dummyjson.com/posts');
  const data = await posts.json();
  console.log(data);
}

postData()


const App = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* {postData.map((post) => (
          <Cards
            title={post.title}
            desc={post.desc}
            rating={post.rating}
            tags={post.tags}
          />
        ))} */}
      </section>
    </div>
  );
};

export default App;
