import { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import Search from "./components/Search";

export default function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // const getPosts = async () => {
    //   const fetchedData = await fetch("https://dummyjson.com/posts");
    //   const res = await fetchedData.json();
    //   return res;
    // }

    // setPosts(getPosts());
    // console.log(posts);

    fetch("https://dummyjson.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        // Update the state variable with the fetched data
        setPosts(responseData);
        console.log(posts)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
    {/* {JSON.stringify(posts)} */}
      <h1 className="text-3xl font-bold underline">Say hello to posts!!</h1>

      <Search />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        <PostCard
          title="someheading"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum at varius vel pharetra. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Nunc mattis enim ut tellus elementum. Neque aliquam vestibulum morbi blandit cursus risus. Eget lorem dolor sed viverra. Aliquam etiam erat velit scelerisque in. Dui vivamus arcu felis bibendum ut. In tellus integer feugiat scelerisque varius. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla at volutpat diam ut venenatis tellus. Odio ut sem nulla pharetra diam sit amet. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Sollicitudin ac orci phasellus egestas tellus. Pretium viverra suspendisse potenti nullam ac. A diam sollicitudin tempor id. A diam maecenas sed enim."
          rating="4"
          tags={["tag_1", "tag_2", "tag_3"]}
        />
        {/* <PostCard />
        <PostCard />
        <PostCard />
        <PostCard /> */}
      </div>
    </>
  );
}
