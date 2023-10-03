import PostCard from "@/components/PostCard";
import React from "react";

async function getData(url) {
  const res = await fetch(url, { cache: "no-cache" });
  return res.json();
}

const PostPage = async () => {
  const allPosts = await getData("https://dummyjson.com/posts");

  return (
    <div>
      <h1 className="text-3xl font-semibold">All Posts <span className="text-base">({allPosts.limit})</span></h1>

      <section className="columns-1 md:columns-2">
        {allPosts.posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </section>
    </div>
  );
};

export default PostPage;
