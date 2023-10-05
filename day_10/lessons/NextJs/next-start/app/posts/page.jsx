import PostCard from "@/components/PostCard";
import React from "react";

async function getData(url) {
  const res = await fetch(url, { cache: "no-cache" });
  return res.json();
}

const PostPage = async () => {
  const allPosts = await getData("https://dummyjson.com/posts");
  console.log(allPosts);

  return (
    <div>
      {/* {JSON.stringify(allPosts)} */}
      <h1 className="text-3xl font-semibold">All Posts</h1>

      <section className="grid gap-4 grid-cols-1 md:grid-cols-2">
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
