import PostCard from "@/components/PostCard";
import React from "react";

const getPost = async (url) => {
  const res = await fetch(url);
  return res.json();
}

const Postspage =  async ({ params }) => {

  const userId = params.userId;
  const post = await getPost(`https://dummyjson.com/posts/${userId}`);
  
  return (
    <div>
    {/* {JSON.stringify(post)} */}
      <h1 className="text-3xl font-semibold">{userId}</h1>
      <PostCard title={post.title} body={post.body} id={post.id}/>
    </div>
  );
};

export default Postspage;
